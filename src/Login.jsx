import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { auth, provider } from "./confg/auth";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { createContext } from "react";

const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  age: yup
    .number()
    .typeError("Age must be a number")
    .positive("Age must be a positive number")
    .integer("Age must be an integer")
    .min(18, "You must be at least 18 years old")
    .required("Age is required"),
  password: yup
    .string()
    .min(4, "Minimum 4 characters")
    .max(20, "Maximum 20 characters")
    .required("Password is required"),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Password mismatch"),
});



export const Context = createContext();

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const signUserOut = async () => {
    await signOut;
    console.log("logged out");
    navigate("/");
  };
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    alert("login sucessfuly");
    navigate("/");
  };

  const [userData, setUserData] = useState("");
  const onSubmit = (data) => {
    console.log(data);
    setUserData(data);
  };

  return (
    <Context.Provider value={{ submitedData: userData }}>
      <form className="login" onSubmit={handleSubmit(onSubmit)}>
        <div className="logincontainer">
        <h1>Fill The Form To Create Your Account</h1>
          <div>            
            <input
              type="text"
              placeholder="Full Name"
              {...register("fullName")}
              className="width"
            />
            {errors.fullName && <span className="reddot">*</span>}
            {errors.fullName && <p>{errors.fullName.message}</p>}
          </div>

          <div>
            <input type="email" placeholder="Email" {...register("email")} className="width" />
            {errors.email && <span className="reddot">*</span>}
            {errors.email && <p>{errors.email.message}</p>}
          </div>

          <div>
            <input type="number" placeholder="Age" {...register("age")} className="width"/>
            {errors.age && <span className="reddot">*</span>}
            {errors.age && <p>{errors.age.message}</p>}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
              className="width"
            />
            {errors.password && <span className="reddot">*</span>}
            {errors.password && <p>{errors.password.message}</p>}
          </div>

          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              {...register("confirmpassword")}
              className="width"
            />
            {errors.confirmpassword && <span className="reddot">*</span>}
            {errors.confirmpassword && <p>{errors.confirmpassword.message}</p>}
          </div>

          <input className="submit" type="submit" value="Create Your Account" />
          <button className="googleSignIn" onClick={signInWithGoogle}>Sign In With GOOGLE</button>
          
        </div>
      </form>
    </Context.Provider>
  );
}
