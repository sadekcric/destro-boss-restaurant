import { useEffect, useState } from "react";
import SectionTitle from "./../../CommonRoute/SectionTitle";
import MenuCart from "../../CommonRoute/MenuCart";
import SharedBanner from "../../CommonRoute/SharedBanner";
import "../Home/bistro.css";
import Button from "../../CommonRoute/Button";

const Offered = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch(`menu.json`)
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
      });
  }, []);

  const offeredProduct = foods.filter((d) => d.category === "offered");
  const desserts = foods.filter((f) => f.category === "dessert");
  const pizzas = foods.filter((f) => f.category === "pizza");
  const salads = foods.filter((f) => f.category === "salad");
  const soups = foods.filter((f) => f.category === "soup");

  return (
    <>
      <section className="mt-10 lg:mt-24">
        <SectionTitle subHeading={"---Don't miss---"} heading={"TODAY'S OFFER"} />

        <div className="container mx-auto p-3 mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {offeredProduct.map((offer) => (
            <MenuCart key={offer._id} menu={offer} />
          ))}
        </div>

        <div className="mt-5">
          <Button value={"ORDER YOUR FAVORITE FOOD"} />
        </div>
      </section>

      <section className="mt-10 lg:mt-24">
        <div>
          <SharedBanner
            name={"Desserts"}
            bg={"bistro"}
            details={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          />
        </div>

        <div>
          <div className="container mx-auto p-3 mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
            {desserts.map((offer) => (
              <MenuCart key={offer._id} menu={offer} />
            ))}
          </div>
        </div>

        <div className="mt-5">
          <Button value={"ORDER YOUR FAVORITE FOOD"} />
        </div>
      </section>

      <section className="mt-10 lg:mt-24">
        <div>
          <SharedBanner
            name={"Pizza"}
            bg={"bistro"}
            details={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          />
        </div>

        <div>
          <div className="container mx-auto p-3 mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
            {pizzas.map((offer) => (
              <MenuCart key={offer._id} menu={offer} />
            ))}
          </div>
        </div>

        <div className="mt-5">
          <Button value={"ORDER YOUR FAVORITE FOOD"} />
        </div>
      </section>

      <section className="mt-10 lg:mt-24">
        <div>
          <SharedBanner
            name={"Salads"}
            bg={"bistro"}
            details={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          />
        </div>

        <div>
          <div className="container mx-auto p-3 mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
            {salads.map((offer) => (
              <MenuCart key={offer._id} menu={offer} />
            ))}
          </div>
        </div>

        <div className="mt-5">
          <Button value={"ORDER YOUR FAVORITE FOOD"} />
        </div>
      </section>

      <section className="mt-10 lg:mt-24">
        <div>
          <SharedBanner
            name={"Soups"}
            bg={"bistro"}
            details={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          />
        </div>

        <div>
          <div className="container mx-auto p-3 mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
            {soups.map((offer) => (
              <MenuCart key={offer._id} menu={offer} />
            ))}
          </div>
        </div>

        <div className="mt-5">
          <Button value={"ORDER YOUR FAVORITE FOOD"} />
        </div>
      </section>
    </>
  );
};

export default Offered;
