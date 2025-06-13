import { cache, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function SignUP() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const formHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(userData);
    try {
      const response = await axios.post(
        "http://localhost:8080/signup",
        userData
      );
      if (response.status === 201 || response.status === 200) {
        toast.success(`${userData.name} Register Succsessfully`);
        setUserData({
          name: "",
          email: "",
          password: "",
        });

        setTimeout(() => {
          navigate("/");
        }, 2000);
        
      } else {
        toast.error("error");
      }
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  return (
    <div className="w-full h-fit bg-[#f1f3f6] p-3">
      <div className="flex bg-red-200 w-[60%] h-[63vh] m-auto">
        <div className="bg-[#2874f0] w-[40%] h-full p-5">
          <div className="text-white mt-7 ml-3">
            <h1 className="text-3xl mb-5">Sign Up</h1>
            <h5>
              Get access to your Orders,
              <br /> Wishlist and Recommendations
            </h5>
          </div>
          <img
            className="m-auto mt-30 rounded-md"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACCCAMAAAA0RXemAAABHVBMVEX////w8PD+viz/3wD/Q0MVW68UKj28vLwhISEzQ1Gjqa53gIkuP01GVGD6RET2RkbwSEjz1QqQdzX42QZ0OkMwa8Lt0BDbwyDkyhceMDzb29u9kCnRzr3/S0v/UVHQwsLsSUmKczXV1dX/W1vMzMybm5v/73j//erl7fbc5vP4+v3/Xl7/+ML/5B4hZLSAptRikcrGvyu4zef/8fEXZ93/+97/7GD/6lT/9asvbblsmc1LgMLF1uz+0GX/n5//lpb/8phfhXgzbJksZ5+cgDWEhIQ8PDz/2dn/c3P/sbH/iYnJjIzEu3h1k3jUyCiYpU5NeoamwOHtuz2nrkJGd4uInFp5k2WxtECoiDXUpDN1dXX/v7/iTk6Ki5Kbq2FEJ2QnAAAEJElEQVR4nO3cC1cSQRgG4NVlJa1ApMzWJCMEUbwQCYh5S0FTu2llafX/f0azLCx7ZWeW+WZmad7jUfZwzu48fnNbV1UUmdFTLPFuAaXs8G6AjC2VYr3RKDbj27kaRn8qFTfUXhoV3i2KmB0EaVoMI/XYVqWoOrNhSGJYGbfDlMRvBmt6HGig9N9cWy2vrvFsHX5KGz4Q9ch4q9za1YxstsqcG4kTb8fqdi5UjC1tkJb4ZfEtiKo21/Y0e/ZWeTc0JBV/h1p3OpBE8JocBUA+au5s827qkBxVlLq/45PHoWnveDc3OKWSF7JQrWZU9dgHsse7uUPjhGQ/vzeafFzd9IFoQoz3Sf84Z9/MF7/2W/kqpsHMtR0y3KFtiYroxua4Ge7QWuIqUG4HkG8hkO0yj7VkH4thlSSLPkIcGo9dF64C5UbNfEdz1cmPajgEUd4IyjA61wmOwAq7dZGMgULk0HYZDRRCxC0xRGPTuYjLQexgspxEYJBD4LfBkRgCQiI6hOtaUR3EENjBHplBLIGdfkdxEEpAF8TRHCQU2C3KyA7stEDvEtk59iEZ8A7Q1jN0MJIwcDCRMHEwkDBygEuYOYAlDB2wknGBMHUAShg7wCTMHVCScYFwcIBIsH+0SzUAu18uDoCScHLQl4wLxHnyxdM5iLwy8/MXoMTBmJsCzikYxH7ia3AHoMR+3lN4x9TUNQzE0WcZFAQFpiQOSPc604CBg+x7II/yE3B5bFzhqe2K1Jb3SS8E0OGFUCvJuEAmuUMoSWIKeeDOopFxgHQxnCFRJBIiIf8VJIJEQiREQlhD9EKhQLLt94WQS2hD9KQZfApNyEqbGiSZJJVQhLQVpU0JkhxEZw5pG1/vqEB0G6TAGnJnvrijAcnbIEnWkE5nRlFmOp3YQ9BYV5QVOmNkbCD2wc58jFCFFIgLMhIk582SmbQzs8tPoq4juLPvSJAEZlLpWVJIf5hgO4SFoMUkr+MzRIYQRkJQUhIyPHq+YM2/6KYEb6QYkOfPFuYz2WzAHyi7Ag6xrSEke/lRIEsAEN3LwJuGBYMEODAkgkGCHOFbFbEggQUJL4lYEJ+B3k/YLlgsSLAjtG9JCEpOQiQkLpARIiESIiESIiESIiESYoccnJ2dJy5qtQ8xhxwYrw6NT4ES4SGvjVbWrMNakMOCzABmGhCS6iWdNp+PgKcHMUMKubcO730VqcGDHhYQmySE4oasW4frTob9gRUzCCrJfMYMKSRx2Ds6dI0LBEACM7/ZQVBNeskQQsx5SzlwOV468uchk7xwhBSSuHA70ISbVqLF93Y9H+1c2BBrUJyfXbgn3KiQCd0nEc9FDvFbOSJenGboQKJ+G+lFpwJJX3ID9HMVEdJb/7q/+ZDLLS9f8q2JfrVg26+8NfLXD0L2z67EzdhA/gG8Jicd18S0tQAAAABJRU5ErkJggg=="
            alt=""
          />
        </div>

        <div className="bg-[#ffffff] w-[60%] h-full">
          <form
            action=""
            onSubmit={submitHandler}
            className="ml-9 mt-7 w-[80%] m-auto text-center"
          >
            <input
              className="w-full p-3 text-xl border-1  mb-3"
              type="text"
              placeholder="Name"
              name="name"
              value={userData.name}
              onChange={formHandler}
              required
            />
            <input
              className="w-full p-3 text-xl border-1  mb-3"
              type="email"
              placeholder="Email"
              name="email"
              value={userData.email}
              onChange={formHandler}
              required
            />
            <input
              className="w-full p-3 text-xl border-1 mb-3"
              type="password"
              placeholder="password"
              name="password"
              value={userData.password}
              onChange={formHandler}
              required
            />
            <h5 className="text-xs mb-3 text-gray-500">
              By continuing, you agree to Flipkart's Terms of Use and Privacy
              Policy.
            </h5>
            <button
              className="p-2 bg-[#fb641b] w-full rounded text-white "
              type="submit"
            >
              Sign Up
            </button>
          </form>

          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default SignUP;
