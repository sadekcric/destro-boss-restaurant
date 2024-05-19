import { Link } from "react-router-dom";
import Button from "./Button";

const MenuCart = ({ item }) => {
  const { name, image, recipe, price } = item;

  return (
    <div className="flex gap-5 items-center">
      <div className="w-[118px] h-[104px]">
        <img style={{ borderRadius: "0 200px 200px 200px" }} className="w-full h-full" src={image} alt="" />
      </div>
      <div className="space-y-3 w-full">
        <div className="flex items-center  justify-between">
          <h3 className="text-lg font-semibold uppercase">{name}-----------</h3>
          <p className="text-[#BB8506] font-semibold">${price}</p>
        </div>
        <p>{recipe}</p>
      </div>
    </div>
  );
};

export default MenuCart;
