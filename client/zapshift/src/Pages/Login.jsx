import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) =>{
    console.log(data);
    
  }
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-base-200">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-center text-2xl font-bold mb-4">
              Login
            </h2>

            <form onSubmit={handleSubmit(handleLogin)}>
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
                <button className="btn btn-primary w-full">Login</button>
              </div>
            </form>

            <div className="divider">OR</div>

            <div className="form-control">
              <button className="btn btn-outline w-full">
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
