import SectionTitle from "./../../CommonRoute/SectionTitle";
import "../Home/bistro.css";
import Data from "../../CommonRoute/Data";
import MenuCategories from "../../CommonRoute/MenuCategories";

const Offered = () => {
  const [foods] = Data();

  const offeredProduct = foods.filter((d) => d.category === "offered");
  const desserts = foods.filter((f) => f.category === "dessert");
  const pizzas = foods.filter((f) => f.category === "pizza");
  const salads = foods.filter((f) => f.category === "salad");
  const soups = foods.filter((f) => f.category === "soup");

  return (
    <>
      <section className="mt-10 lg:mt-24">
        <SectionTitle subHeading={"---Don't miss---"} heading={"TODAY'S OFFER"} />
        <MenuCategories items={offeredProduct} />
      </section>

      <section className="mt-10 lg:mt-24">
        <MenuCategories
          items={desserts}
          name={"desserts"}
          bg={"bistro"}
          details={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
      </section>

      <section className="mt-10 lg:mt-24">
        <MenuCategories
          items={pizzas}
          name={"pizza"}
          bg={"bistro"}
          details={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
      </section>

      <section className="mt-10 lg:mt-24">
        <MenuCategories
          items={salads}
          name={"salads"}
          bg={"bistro"}
          details={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
      </section>

      <section className="mt-10 lg:mt-24">
        <MenuCategories
          items={soups}
          name={"soups"}
          bg={"bistro"}
          details={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
      </section>
    </>
  );
};

export default Offered;
