import Button from "./Button";

const OrderCart = ({ item }) => {
  console.log(item);
  const { name, image, recipe, _id } = item;
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
            <Button value={`ADD TO CART`} border={`border-[#BB8506]`}></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCart;
