/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import "./LoginPage.css";

const schema = z.object({
  email: z
    .string()
    .email({ message: "Please enter valid email address" })
    .min(3),
  password: z.string().min(8),
});
const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  // console.log(formState.errors);

  // const [user, setUser] = useState({
  //   name: "",
  //   phone: 0,
  // });
  // const passwordRef = useRef(null);
  // const nameRef = useRef(null);
  // const phoneRef = useRef(null);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // const user = {
  //   //   name: nameRef.current.value,
  //   //   phone: parseInt(phoneRef.current.value),
  //   // };
  //   console.log(user);
  // };

  const onSubmit = (formData) => console.log(formData);

  return (
    <>
      <section className="align_center form_page">
        <form
          action=""
          className="authentication_form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2>Login Form</h2>
          <div className="form_inputs">
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name=""
                id="email"
                className="form_text_input"
                placeholder="Enter email"
                {...register("email")}
              />
              {errors.email && (
                <em className="form_error">{errors.email.message}</em>
              )}
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name=""
                id="password"
                className="form_text_input"
                placeholder="Enter password"
                {...register("password")}
              />
              {errors.password && (
                <em className="form_error">{errors.password.message}</em>
              )}
            </div>
            {/* <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name=""
                id="name"
                // ref={nameRef}
                className="form_text_input"
                placeholder="Enter Name"
                // onChange={(e) => setUser({ ...user, name: e.target.value })}
                // value={user.name}
                {...register("name", { required: true, minLength: 3 })}
              />
              {errors.name?.type === "required" && (
                <em className="form_error">Please Enter Name</em>
              )}
              {errors.name?.type === "minLength" && (
                <em className="form_error">Minimum 3 characters required</em>
              )}
            </div>
            <div>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="number"
                name=""
                id="phone"
                // ref={phoneRef}
                className="form_text_input"
                placeholder="Enter Phone Number"
                // onChange={(e) =>
                //   setUser({ ...user, phone: parseInt(e.target.value) })
                // }
                // value={user.phone}
                {...register("phone", {
                  valueAsNumber: true,
                  required: true,
                })}
              />
              {errors.name?.type === "required" && (
                <em className="form_error">Please Phone Number</em>
              )}
            </div> */}
            {/* <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name=""
                id="password"
                ref={passwordRef}
                className="form_text_input"
                placeholder="Enter Password"
              />
              <button
                type="button"
                onClick={() => (passwordRef.current.type = "text")}
              >
                Show
              </button>
              <button
                type="button"
                onClick={() => (passwordRef.current.type = "password")}
              >
                Hide
              </button>
            </div> */}
            <button type="submit" className="search_button form_submit">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default LoginPage;
