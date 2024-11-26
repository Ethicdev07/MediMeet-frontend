/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Sign up");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form className="min-h-[80vh] flex items-center">
        <div className="flex flex-col gap-3 m-auto items-center p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
          <p className="text-2xl font-semibold">
            {state === "Sign up" ? "Create Account" : "Login"}
          </p>

          <p>
            Please {state === "Sign up" ? " sign up" : "Log in"} to book
            appointment
          </p>

          {state === "Sign up" && (
            <div className="w-full">
              <p>FullName</p>
              <input
                className="border border-zinc-300 rounded w-full p-2 mt-1"
                type="text"
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
          )}

          <div className="w-full">
            <p>Email-Address</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="w-full">
            <p>Password</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button className="bg-primary text-white w-full py-2 rounded-md text-base">
            {state === "Sign up" ? "Create Account" : "Login"}
          </button>

          {state === "Sign up" ? (
            <p>
              Already have an account?{" "}
              <span
                onClick={() => setState("Login")}
                className="text-primary underline cursor-pointer"
              >
                Login here
              </span>
            </p>
          ) : (
            <p>
              Create a new account?{" "}
              <span
                onClick={() => setState("Sign up")}
                className="text-primary underline cursor-pointer"
              >
                click here
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
