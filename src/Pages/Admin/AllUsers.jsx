import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import SectionTitle from "../../CommonRoute/SectionTitle";
import { FaUsers } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`users`);
      return res.data;
    },
  });

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
        axiosSecure.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount) {
            refetch();

            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleAdminRequest = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, admin now!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/users/admin/${user._id}`)
          .then((res) => {
            if (res.data.modifiedCount) {
              refetch();

              Swal.fire({
                title: "Admin!",
                text: `${user.name} is now a Admin!`,
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
      <SectionTitle subHeading={"---How many??---"} heading={"MANAGE ALL USERS"} />

      <div className="mt-10 bg-white p-10 rounded-xl w-4/5 mx-auto">
        <div className=" mb-10 uppercase">
          <p className="text-3xl font-semibold ">Total Users: {users.length}</p>
        </div>

        <div>
          <div className="overflow-x-auto pb-8">
            <table className="min-w-full bg-white font-[sans-serif]">
              <thead className="bg-[#D1A054] rounded-xl whitespace-nowrap mb-3">
                <tr>
                  <th className="pl-6 w-8"></th>
                  <th className="px-6 py-5 text-left text-sm font-semibold text-black">Name</th>
                  <th className="px-6 py-5 text-left text-sm font-semibold text-black">Email</th>
                  <th className="px-6 py-5 text-left text-sm font-semibold text-black">Role</th>
                  <th className="px-6 py-5 text-left text-sm font-semibold text-black">Action</th>
                </tr>
              </thead>

              <tbody className="whitespace-nowrap divide-y divide-gray-200 ">
                {users.map((user, index) => (
                  <tr key={user._id} className="border-b border-gray-200">
                    <td className="pl-6 w-8">{index + 1}</td>

                    <td className="px-6 py-5 text-sm">{user.name}</td>
                    <td className="px-6 py-5">{user.email}</td>
                    <td className="px-6 py-5 text-xl">
                      {user?.role === "admin" ? (
                        "Admin"
                      ) : (
                        <button onClick={() => handleAdminRequest(user)}>
                          <FaUsers />
                        </button>
                      )}
                    </td>

                    <td className="px-6 py-5">
                      <button onClick={() => handleDelete(user._id)} className="mr-4 text-red-600 text-2xl" title="Edit">
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

export default AllUsers;
