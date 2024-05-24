import { useForm } from "react-hook-form";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useUploadImage from "../Hooks/useUploadImage";
const image_api_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_api_url = `https://api.imgbb.com/1/upload?key=${image_api_key}`;

const AddItemTable = ({ value }) => {
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imgUpload = useUploadImage();

  const onSubmit = async (data) => {
    const fileImage = { image: data.image[0] };

    const res = await imgUpload(fileImage);
    console.log(res);
    // const imgLink = await axiosPublic.post(image_api_url, fileImage, {
    //   headers: {
    //     "content-type": "multipart/form-data",
    //   },
    // });

    // console.log(imgLink);
  };

  return (
    <div className="lg:w-3/4 flex items-center py-10 bg-gray-200 mt-10 rounded-2xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="lg:w-2/3 p-3 mx-auto space-y-5">
        <div>
          <label htmlFor="name">
            <p className="font-semibold mb-2">Recipe Name*</p>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Recipe Name "
              defaultValue={value?.name}
              className="py-2 px-3 w-full "
            />
            {errors.name && <span className="text-red-600 font-semibold">This field is required</span>}
          </label>
        </div>

        <div className="flex gap-6 items-center">
          <div className="flex-1">
            <label htmlFor="category">
              <p className="font-semibold mb-2">Category*</p>
              <select
                {...register("category", { required: true })}
                defaultValue={value?.category}
                className="py-2 px-3 w-full "
                id="select"
              >
                <option disabled value="" className="p-3 border-b">
                  Category
                </option>
                <option value="salad">salad</option>
                <option value="soup">soup</option>
                <option value="dessert">dessert</option>
                <option value="popular">popular</option>
                <option value="pizza">pizza</option>
                <option value="offered">offered</option>
              </select>
              {errors.category && <span className="text-red-600 font-semibold">This field is required</span>}
            </label>
          </div>

          <div className="flex-1">
            <label htmlFor="price">
              <p className="font-semibold mb-2">Recipe price*</p>
              <input
                {...register("price", { required: true })}
                defaultValue={value?.price}
                type="number"
                id="price"
                placeholder="Recipe Price "
                className="py-2 px-3 w-full "
              />
            </label>
            {errors.price && <span className="text-red-600 font-semibold">This field is required</span>}
          </div>
        </div>

        <div>
          <label htmlFor="details">
            <p defaultValue={value?.details} className="font-semibold mb-2">
              Recipe Details*
            </p>
            <textarea
              {...register("recipe", { required: true })}
              id="recipe"
              placeholder="Recipe Details "
              className="py-2 px-3 w-full"
              rows={5}
            ></textarea>

            {errors.details && <span className="text-red-600 font-semibold">This field is required</span>}
          </label>
        </div>

        <div>
          <input {...register("image", { required: true })} type="file" defaultValue={value?.image} className="block" />
          {errors.image && <span className="text-red-600 font-semibold">This field is required</span>}
        </div>
        <div>
          <input type="submit" className="py-3 px-6 bg-gradient-to-r btnBg " value={"Add Item"} />
        </div>
      </form>
    </div>
  );
};

export default AddItemTable;
