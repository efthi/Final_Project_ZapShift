import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router";
import SocialLogin from "../Auth/SocialLogin/SocialLogin";


const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {createUser, updateUserProfile, logOut} = useAuth();

  const handleRegister = (data) => {
    console.log(data.profilepic[0]);
    const profileImg = data.profilepic[0];

    createUser(data.email, data.password)
      .then(result=> {
        console.log(result.user);

        //store image and get photoURL
        const formData = new FormData();
        formData.append('image', profileImg);
        const imageAPIURL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`
        axios.post(imageAPIURL, formData)
          .then(res => {
            console.log('after image upload', res.data.data.url);
            toast.success('Registration Successful!')
            const userProfile = {
              displayName : data.name,
              photoURL : res.data.data.url
            }
            updateUserProfile (userProfile)
              .then(()=> {
                console.log('Profile Ready!');
                logOut();
              })
          })

        
      })
      .catch(error => {
        console.log(error);
        toast.error(error);
      })
  };
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-base-200">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-center text-primary mb-4">
              Register
            </h2>
            <form onSubmit={handleSubmit(handleRegister)}>
              <fieldset>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                  name="name"
                  {...register("name", { required: true })}
                />
              </div>

              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="input input-bordered w-full"
                  name="email"
                  {...register("email", { required: true })}
                />
                {errors.email?.type === "required" && (
                  <div role="alert" className="alert alert-warning">
                  ⚠️<span>Email field cannot empty!</span>
                  </div>
                )}
              </div>
              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Profile Photo</span>
                </label>
                <input
                  type="file"
                  className="file-input file-input-success"
                  name="profilepic"
                  {...register("profilepic")}
                />
              </div>

              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="********"
                  className="input input-bordered w-full"
                  name="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                  })}
                />
                {errors.password?.type === "required" && (
                  <div role="alert" className="alert alert-warning">
                  ⚠️<span>This field cannot empty!</span>
                  </div>
                )}
                {errors.password?.type === "minLength" && (
                  <div role="alert" className="alert alert-warning">
                  ⚠️<span>Must be 6 characters or long!</span>
                  </div>
                )}
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-success w-full">Register</button>
              </div>
              <p className="mt-5 p-3">Already registered! Please  
                <Link to="/login" className="link link-primary font-bold p-1">Login</Link> </p>
              </fieldset>
            </form>
            <div className="divider">OR</div>
           <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default Register;
