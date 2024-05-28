import { Link } from "react-router-dom";
import SectionTitle from "../../CommonRoute/SectionTitle";
import useMenu from "../../Hooks/useMenu";

import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageItems = () => {
  const [menu, isLoading, reface] = useMenu();
  const axiosSecure = useAxiosSecure();

  if (isLoading) {
    return;
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/menu/${id}`).then((res) => {
            if (res.data.deletedCount) {
              reface();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
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
  };

  return (
    <div>
      <SectionTitle heading={"Manage All Item"} subHeading={"--Hurry Up--"} />
      <div className="lg:w-4/5 lg:mx-auto mt-10 lg:mt-24 bg-gray-200 px-8 py-10 rounded-lg">
        <div className="font-sans overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#D1A054] whitespace-nowrap">
              <tr>
                <th className="px-4 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">#</th>
                <th className="px-4 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">Items Image</th>
                <th className="px-4 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">Item Name</th>
                <th className="px-4 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">Price</th>
                <th className="px-4 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">Edit</th>
                <th className="px-4 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">Delete</th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
              {menu.map((m, i) => (
                <tr key={m._id} className="bg-gray-50">
                  <td className="px-4 py-4 text-sm text-gray-800">{i + 1}</td>

                  <td className="px-4 py-4 text-sm w-20 h-20  text-gray-800 ">
                    <img src={m.image} className="rounded-md" alt="" />
                  </td>

                  <td className="px-4 py-4 text-sm text-gray-800">{m.name}</td>

                  <td className="px-4 py-4 text-sm text-gray-800">{m.price}</td>
                  <td className="px-4 py-4 text-sm text-gray-800">
                    <Link to={`/dashboard/manage-items/${m._id}`} className="text-blue-600 mr-4">
                      Edit
                    </Link>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-800">
                    <button onClick={() => handleDelete(m._id)} className="text-red-600">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
