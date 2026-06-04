/* eslint-disable no-unused-vars */
import { useRef } from "react";
import "./LoginPage.css";

const LoginPage = () => {
  // const passwordRef = useRef(null);
  const nameRef = useRef(null);
  const phoneRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: nameRef.current.value,
      phone: parseInt(phoneRef.current.value),
    };
    console.log(user);
  };

  return (
    <>
      <section className="align_center form_page">
        <form action="" className="authentication_form" onSubmit={handleSubmit}>
          <h2>Login Form</h2>
          <div className="form_inputs">
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name=""
                id="name"
                ref={nameRef}
                className="form_text_input"
                placeholder="Enter Name"
              />
            </div>
            <div>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="number"
                name=""
                id="phone"
                ref={phoneRef}
                className="form_text_input"
                placeholder="Enter Phone Number"
              />
            </div>
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
