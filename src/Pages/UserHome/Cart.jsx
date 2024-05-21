import SectionTitle from "../../CommonRoute/SectionTitle";
import { MdDelete } from "react-icons/md";
import useCart from "../../Hooks/useCart";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Cart = () => {
  const [items, refetch] = useCart();

  const deleteAxios = useAxiosSecure();
  const totalPrice = items.reduce((acc, curr) => acc + curr.price, 0);
  const fuggerPrice = Math.round(totalPrice);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteAxios
          .delete(`/carts/${id}`)
          .then((data) => {
            if (data.data.deletedCount) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((err) => {
            Swal.fire({
              title: "Error!",
              text: err.message,
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div>
      <SectionTitle subHeading={"---My Cart---"} heading={"WANNA ADD MORE?"} />

      <div className="mt-10 bg-white p-10 rounded-xl w-4/5 mx-auto">
        <div className="flex justify-between mb-10 uppercase items-center">
          <p className="text-3xl font-semibold ">Total Order: {items.length}</p>
          <p className="text-3xl font-semibold ">Total Price: ${fuggerPrice}</p>
          <div>
            <button className="py-2 px-4 font-semibold text-lg bg-[#D1A054] rounded-md">PAY</button>
          </div>
        </div>

        <div>
          <div className="overflow-x-auto pb-8">
            <table className="min-w-full bg-white font-[sans-serif]">
              <thead className="bg-[#D1A054] rounded-xl whitespace-nowrap mb-3">
                <tr>
                  <th className="pl-6 w-8"></th>
                  <th className="px-6 py-5 text-left text-sm font-semibold text-black">Item Image</th>
                  <th className="px-6 py-5 text-left text-sm font-semibold text-black">Title</th>
                  <th className="px-6 py-5 text-left text-sm font-semibold text-black">Menu Id</th>
                  <th className="px-6 py-5 text-left text-sm font-semibold text-black">Price</th>
                  <th className="px-6 py-5 text-left text-sm font-semibold text-black">Action</th>
                </tr>
              </thead>

              <tbody className="whitespace-nowrap divide-y divide-gray-200 ">
                {items.map((item, index) => (
                  <tr key={item._id} className="border-b border-gray-200">
                    <td className="pl-6 w-8">{index + 1}</td>

                    <td className="px-6 py-5 text-sm">
                      <img src={item.image} className="w-10 h-10 p-1.5 shrink-0 bg-gray-100" />
                    </td>

                    <td className="px-6 py-5 text-sm">{item.name}</td>
                    <td className="px-6 py-5">{item.menuId}</td>
                    <td className="px-6 py-5">{item.price}</td>

                    <td className="px-6 py-5">
                      <button onClick={() => handleDelete(item._id)} className="mr-4 text-red-600 text-2xl" title="Edit">
                        <MdDelete />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
