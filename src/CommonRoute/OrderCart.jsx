import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Button from "./Button";
import useAuth from "../CustomHooks/useAuth";
import useCart from "../Hooks/useCart";

const OrderCart = ({ item }) => {
  const { name, image, recipe } = item;
  const { user } = useAuth();
  const axiosPost = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddCart = (food) => {
    const items = {
      menuId: food._id,
      email: user.email,
      name: food.name,
      image: food.image,
      price: food.price,
    };
    axiosPost
      .post("/carts", items)
      .then((data) => {
        if (data.data.insertedId) {
          refetch();
          return Swal.fire({
            icon: "success",
            title: "product successfully added to cart!",
            showConfirmButton: false,
            timer: 3000,
          });
        }
      })
      .catch((err) => {
        return Swal.fire({
          icon: "error",
          title: err.message,
          showConfirmButton: false,
          timer: 3000,
        });
      });
  };

  return (
    <div className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center text-[#BB8506]">
            <button
              onClick={() => {
                handleAddCart(item);
              }}
            >
              <Button value={`ADD TO CART`} border={`border-[#BB8506]`}></Button>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCart;
