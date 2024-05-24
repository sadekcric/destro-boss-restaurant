import useAxiosPublic from "./useAxiosPublic";

const image_api_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

const image_api_url = `https://api.imgbb.com/1/upload?key=${image_api_key}`;

const useUploadImage = () => {
  const axiosPublic = useAxiosPublic();

  const uploadedImage = async (data) => {
    // const fileImage = { image: data.image[0] };
    const imageURL = await axiosPublic.post(image_api_url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return imageURL;
  };

  return uploadedImage;
};

export default useUploadImage;
