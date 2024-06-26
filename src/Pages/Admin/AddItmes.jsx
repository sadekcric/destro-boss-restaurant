import { useNavigate } from "react-router-dom";
import AddItemTable from "../../CommonRoute/AddItemTable";
import SectionTitle from "../../CommonRoute/SectionTitle";
import useUploadImage from "../../Hooks/useUploadImage";
import useAxiosSecure from "./../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddItmes = () => {
  const imgUpload = useUploadImage();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const fileImage = { image: data.image[0] };
    const res = await imgUpload(fileImage);

    const uploadData = {
      name: data.name,
      category: data.category,
      price: data.price,
      recipe: data.recipe,
      image: res.data.data.display_url,
    };

    if (res.data.data.display_url) {
      axiosSecure
        .post("/menu", uploadData)
        .then((res) => {
          if (res.data.insertedId) {
            navigate("/menu");
            return Swal.fire({
              icon: "success",
              title: `${uploadData.name} successfully added`,
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
    <div className="mt-10 ">
      <SectionTitle heading={"Add an Item"} subHeading={"---What's New?---"} />

      <AddItemTable onSubmit={onSubmit} />
    </div>
  );
};

export default AddItmes;
