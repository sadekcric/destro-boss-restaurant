import SharedBanner from "../../CommonRoute/SharedBanner";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Data from "../../CommonRoute/Data";
import OrderCart from "../../CommonRoute/OrderCart";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Order = () => {
  const categories = ["salad", "pizza", "soups", "desserts", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const [foods] = Data();

  const salads = foods.filter((f) => f.category === "salad");
  const pizza = foods.filter((f) => f.category === "pizza");
  const soups = foods.filter((f) => f.category === "soup");
  const desserts = foods.filter((f) => f.category === "dessert");
  const drinks = foods.filter((f) => f.category === "drinks");

  return (
    <div>
      <section>
        <div className="max-w-[1920px]">
          <SharedBanner name={"OUR ORDER"} bg={"menuHeaderBg"} details={"Would You Like to Try Our Dish?"} />
        </div>
      </section>

      <section className="mt-10 lg:mt-24 container mx-auto p-3">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
              {salads.map((item) => (
                <OrderCart key={item._key} item={item} />
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
              {pizza.map((item) => (
                <OrderCart key={item._key} item={item} />
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
              {soups.map((item) => (
                <OrderCart key={item._key} item={item} />
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
              {desserts.map((item) => (
                <OrderCart key={item._key} item={item} />
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
              {drinks.map((item) => (
                <OrderCart key={item._key} item={item} />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </section>
    </div>
  );
};

export default Order;
