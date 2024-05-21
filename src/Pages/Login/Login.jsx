import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from "react-simple-captcha";
import img from "../../assets/others/authentication2.png";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../CustomHooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { firebaseLogin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    firebaseLogin(data.email, data.password)
      .then((user) => {
        if (user) {
          navigate(location?.state ? location?.state : "/");
          return Swal.fire({
            icon: "success",
            title: "Your work has been saved",
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
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  return (
    <div className="loginbg min-h-screen flex items-center justify-center ">
      <div className="md:w-4/5 flex flex-col md:flex-row items-center p-5 justify-between border-2 shadow-lg">
        <div className="flex-1">
          <img src={img} alt="" />
        </div>

        <div className="flex-1">
          <h2 className="text-3xl mb-5 text-center font-bold"> LOGIN</h2>
          <form onSubmit={handleSubmit(handleLogin)} className="space-y-3">
            <div>
              <p className="font-semibold">Email:</p>
              <input type="email" {...register("email", { required: true })} className="py-3 px-4 w-full inline-block" />

              {errors.email && <span className="text-red-600 font-semibold">This field is required</span>}
            </div>

            <div>
              <p className="font-semibold">Password:</p>
              <input type="password" {...register("password", { required: true })} className="py-3 px-4 w-full inline-block" />

              {errors.password && <span className="text-red-600 font-semibold">This field is required</span>}
            </div>

            <div>
              <label htmlFor="captcha">
                <LoadCanvasTemplate />
                <input
                  onBlur={(e) => {
                    const user_captcha_value = e.target.value;

                    if (validateCaptcha(user_captcha_value)) {
                      setDisabled(false);
                    } else {
                      setDisabled(true);
                    }
                  }}
                  name="captcha"
                  type="text"
                  className="py-3 px-4 w-full inline-block"
                  placeholder="Write Your Captcha"
                />
              </label>
            </div>

            <div className="mt-3">
              <input disabled={disabled} type="submit" value={"Submit"} className="py-3 px-4 bg-[#D1A054] text-white w-full inline-block" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
