import { updateProfile } from "firebase/auth";
import useAuth from "../../CustomHooks/useAuth";
import img from "../../assets/others/authentication2.png";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const AxiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { firebaseRegister, logOut } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    firebaseRegister(data.email, data.password).then(({ user }) => {
      updateProfile(user, {
        displayName: data.name,
        photoURL: data.photo,
      })
        .then(() => {
          const userInfo = { name: data.name, email: data.email };
          AxiosPublic.post("/users", userInfo)

            .then((data) => {
              console.log(data);
              logOut();
              navigate("/login");
              return Swal.fire({
                icon: "success",
                title: "Registered Successful",
                showConfirmButton: false,
                timer: 1500,
              });
            })

            .catch((err) => {
              return Swal.fire({
                icon: "error",
                title: err.message,
                showConfirmButton: false,
                timer: 3000,
              });
            });
        })

        .catch((err) => {
          return Swal.fire({
            icon: "error",
            title: err.message,
            showConfirmButton: false,
            timer: 3000,
          });
        });
    });
  };

  return (
    <div className="loginbg min-h-screen flex items-center justify-center ">
      <div className="md:w-4/5 flex flex-col md:flex-row items-center p-5 justify-between border-2 shadow-lg">
        <div className="flex-1">
          <img src={img} alt="" />
        </div>

        <input type="file" name="" id="" />

        <div className="flex-1">
          <h2 className="text-3xl mb-5 text-center font-bold"> LOGIN</h2>
          <form onSubmit={handleSubmit(handleRegister)} className="space-y-3">
            <div>
              <p className="font-semibold">Name:</p>
              <input type="text" {...register("name", { required: true })} className="py-3 px-4 w-full inline-block" required />
              {errors.name && <span className="font-semibold text-red-600">This field is required</span>}
            </div>

            <div>
              <p className="font-semibold">Email:</p>
              <input type="email" {...register("email", { required: true })} className="py-3 px-4 w-full inline-block" required />
            </div>

            <div>
              <p className="font-semibold">Photo URL:</p>
              <input type="text" {...register("photo", { required: true })} className="py-3 px-4 w-full inline-block" required />
              {errors.photo && <span className="font-semibold text-red-600">This field is required</span>}
            </div>

            <div>
              <p className="font-semibold">Password:</p>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                })}
                className="py-3 px-4 w-full inline-block"
              />

              {errors.password?.type === "required" && <span className="font-semibold text-red-600">This field is required</span>}

              {errors.password?.type === "pattern" && (
                <span className="font-semibold text-red-600">
                  You Have must be Provide minimum One Uppercase , oneLowercase, one Number and one Special Correcter{" "}
                </span>
              )}
            </div>

            <div className="mt-3">
              <input type="submit" value={"Submit"} className="py-3 px-4 bg-[#D1A054] text-white w-full inline-block" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
