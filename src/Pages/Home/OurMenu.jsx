import { useEffect, useState } from "react";
import SectionTitle from "../../CommonRoute/SectionTitle";
import MenuCart from "../../CommonRoute/MenuCart";

const OurMenu = () => {
  const [popularMenus, setPopularMenus] = useState([]);

  useEffect(() => {
    fetch(`/menu.json`)
      .then((res) => res.json())
      .then((data) => {
        const popularMenu = data.filter((d) => d.category === "popular");
        setPopularMenus(popularMenu);
      });
  }, []);

  return (
    <section className="lg:mt-24 mb-10 container mx-auto p-3">
      <SectionTitle subHeading="---Check it out---" heading="OUR POPULAR MENU" />

      <div className="grid md:grid-cols-2 gap-10 mt-10">
        {popularMenus.map((menu) => (
          <MenuCart key={menu._id} menu={menu}></MenuCart>
        ))}
      </div>
    </section>
  );
};

export default OurMenu;
