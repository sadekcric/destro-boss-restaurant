import SectionTitle from "../../CommonRoute/SectionTitle";
import featured from "../../assets/home/featured.jpg";
import "./featured.css";

const Featured = () => {
  return (
    <section className="mt-10 lg:mt-24 container text-white bg-fixed mx-auto p-3 ourFeatured">
      <SectionTitle subHeading="---Check it out---" heading="Our Featured"></SectionTitle>

      <div className="flex items-center justify-center gap-10 lg:px-36 lg:py-20">
        <div>
          <img src={featured} alt="" />
        </div>
        <div className="space-y-3 text-white">
          {" "}
          <h3 className="text-lg font-semibold">Aug 29,2026</h3>
          <h3 className="text-xl font-semibold">WHERE CAN I GET SOME?</h3>
          <p className="text-lg ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="border-b-2 border-white rounded-lg px-6 py-2 text-white">READ MORE</button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
