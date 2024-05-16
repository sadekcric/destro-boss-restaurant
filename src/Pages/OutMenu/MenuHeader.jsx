import SharedBanner from "../../CommonRoute/SharedBanner";
import "./menuHeaderBg.css";

const MenuHeader = () => {
  return (
    <div className="max-w-[1920px]">
      <SharedBanner name={"OUR MENU"} bg={"menuHeaderBg"} details={"Would You Like to Try Our Dish?"} />
    </div>
  );
};

export default MenuHeader;
