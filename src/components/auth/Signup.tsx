import React from "react";
import { NavLink } from "react-router-dom";
import api from "../../shared/axiosInstance";
import { useModal } from "../../shared/modal/ModalContext";

const Signup = () => {
  const { openModal } = useModal();
  const onSignuphandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formValue = Object.fromEntries(formData);
    const payload = {
      userName: `${formValue.firstName} ${formValue.lastName}`,
      email: formValue.email,
      password: formValue.password,
      confirmPassword: formValue.confirmPassword,
    };
    try {
      const response = api.post("/auth/signup", payload);
      return response;
    } catch (error) {
      openModal((error as Error).message);
    }
  };
  return (
    <>
      <div className=" flex items-center justify-center my-8">
        <div className="bg-[#293343] rounded text-black px-20 py-10 ">
          <h1 className="text-center text-4xl mb-5">Signup</h1>
          <form onSubmit={onSignuphandler}>
            <div className="flex gap-8 flex-col">
              <div className="flex gap-2  mb-2">
                <div className="flex gap-2 flex-col">
                  <label htmlFor="">First Name</label>
                  <input
                    name="firstName"
                    type="text"
                    className="border bg-[#E1E4EA] border-gray-800 text-xl  outline-none rounded-lg py-4 px-4"
                  />
                </div>
                <div className="flex  gap-2 flex-col">
                  <label htmlFor="">Last Name</label>
                  <input
                    name="lastName"
                    type="text"
                    className="border bg-[#E1E4EA] border-gray-800 text-xl  outline-none rounded-lg py-4 px-4"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 mb-2">
                <label htmlFor="">Email</label>
                <input
                  name="email"
                  type="text"
                  className="border bg-[#E1E4EA] border-gray-800 text-xl  outline-none rounded-lg py-4 px-4"
                />
              </div>
              <div className="flex flex-col gap-2 mb-2">
                <label htmlFor="">Password</label>
                <input
                  name="password"
                  type="text"
                  className="border bg-[#E1E4EA] border-gray-800 text-xl  outline-none rounded-lg py-4 px-4"
                />
              </div>
              <div className="flex flex-col gap-2 mb-2">
                <label htmlFor="">Confirm Password</label>
                <input
                  name="confirmPassword"
                  type="text"
                  className="border bg-[#E1E4EA] border-gray-800 text-xl  outline-none rounded-lg py-4 px-4"
                />
              </div>
              <div className="flex justify-center ">
                <button
                  type="submit"
                  className="rounded px-8 text-xl py-4 tracking-wider hover:bg-[#345176]  text-[#ffffff] bg-[#3a5a83]"
                >
                  Signup
                </button>
              </div>
            </div>

            <div className="text-center mt-4">
              <p>
                already logged in? <NavLink to={"/login"}>Login</NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
