import { Navigate, useLoaderData, useParams } from "react-router-dom";
import AddItemTable from "../../CommonRoute/AddItemTable";
import SectionTitle from "../../CommonRoute/SectionTitle";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

import useUploadImage from "../../Hooks/useUploadImage";
import Swal from "sweetalert2";

const UpdateMenu = () => {
  const item = useLoaderData();
  const imgUpload = useUploadImage();
  console.log(item.name);

  const axiosSecure = useAxiosSecure();

  // const { data } = useQuery({
  //   queryKey: ["updateProduct"],
  //   queryFn: async () => {
  //     const data = await axiosSecure.put(`/menu/${id}`);
  //     return data.data;
  //   },
  // });

  const onSubmit = async (data) => {
    const fileImage = { image: data.image[0] };
    const res = await imgUpload(fileImage);

    const updated = {
      name: data.name,
      category: data.category,
      price: data.price,
      recipe: data.recipe,
      image: res.data.data.display_url,
    };

    if (res.data.data.display_url) {
      axiosSecure
        .put("/menu", updated)
        .then((res) => {
          if (res.data.insertedId) {
            Navigate("/menu");
            return Swal.fire({
              icon: "success",
              title: `${updated.name} successfully added`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((err) => {
          return Swal.fire({
            icon: "error",
            title: err.message,
            showConfirmButton: false,
            timer: 1500,
          });
        });
    }
  };

  return (
    <div>
      <SectionTitle heading={"Update Your Menu"} subHeading={"--Hurry Up--"} />

      <div className="mt-10 lg:mt-24  ">
        <AddItemTable value={item} onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default UpdateMenu;
