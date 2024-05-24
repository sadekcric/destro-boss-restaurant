import { FaGoogle } from "react-icons/fa";
import useAuth from "../CustomHooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();

  const handleGoogleLogin = () => {
    googleLogin()
      .then(({ user }) => {
        if (user) {
          const info = {
            name: user.displayName,
            email: user.email,
          };

          axiosPublic
            .post("/users", info)
            .then((res) => {
              console.log(res.data);
            })
            .catch((err) => {
              return Swal.fire({
                icon: "error",
                title: err.message,
                showConfirmButton: false,
                timer: 3000,
              });
            });
        }

        navigate(location?.state ? location.state : "/");
        return Swal.fire({
          icon: "success",
          title: "Successfully Login!",
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
  };
  return (
    <button onClick={handleGoogleLogin} className="flex mt-5 ml-5 items-center gap-3">
      <FaGoogle />
      <span>Google</span>
    </button>
  );
};

export default SocialLogin;
