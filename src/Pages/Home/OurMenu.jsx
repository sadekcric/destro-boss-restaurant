import SectionTitle from "../../CommonRoute/SectionTitle";
import MenuCart from "../../CommonRoute/MenuCart";
// import { axios } from "axios";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const OurMenu = () => {
  const axiosPublic = useAxiosPublic();

  const { data, isPending } = useQuery({
    queryKey: ["popularMenu"],
    queryFn: async () => {
      const data = await axiosPublic.get("/menu");
      return data.data;
    },
  });

  if (isPending) {
    return;
  }

  const popularMenus = data.filter((d) => d.category === "popular");

  return (
    <section className="lg:mt-24 mb-10 container mx-auto p-3">
      <SectionTitle subHeading="---Check it out---" heading="OUR POPULAR MENU" />

      <div className="grid md:grid-cols-2 gap-10 mt-10">
        {popularMenus.map((menu) => (
          <MenuCart key={menu._id} item={menu}></MenuCart>
        ))}
      </div>
    </section>
  );
};

export default OurMenu;
