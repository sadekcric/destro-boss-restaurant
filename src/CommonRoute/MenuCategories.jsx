import { Link } from "react-router-dom";
import MenuCart from "./MenuCart";
import Button from "./Button";
import SharedBanner from "./SharedBanner";

const MenuCategories = ({ items, name, bg, details }) => {
  return (
    <div>
      {name && <SharedBanner name={name} bg={bg} details={details} />}

      <div className="container mx-auto p-3 mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {items.map((item) => (
          <MenuCart key={item._id} item={item} />
        ))}
      </div>

      <div className="mt-5">
        <Link to={`/order/${name}`}>
          <Button value={"ORDER YOUR FAVORITE FOOD"} border={`border-black`} />
        </Link>
      </div>
    </div>
  );
};

export default MenuCategories;
