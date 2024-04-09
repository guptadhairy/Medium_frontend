import { SignupInput } from "@cooldhiru/medium-common";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/moving-border";
import axios from "axios";

const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });

  const sendRequest = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8787/api/v1/user/${
          type === "signup" ? "signup" : "signin"
        }`, postInputs
      );
      const jwt = response.data
      console.log(jwt)
      localStorage.setItem("token", JSON.stringify(jwt));
      navigate("/blogs");
    } catch (error) {
      console.log(error);
      alert("Error in sending the request")
    }
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col">
        <div className="text-3xl font-bold">
          {type === "signup" ? "Create an account" : "Welcome to Vichar"}
        </div>
        <div className="text-slate-400 flex justify-center">
          {type === "signup"
            ? "Already have an account ?"
            : "Not having an account"}
          <Link
            className="pl-2 underline"
            to={type === "signup" ? "/signin" : "/signup"}
          >
            {type === "signup" ? "Login" : "SignUp"}
          </Link>
        </div>
        {type === "signup" ? (
          <LabledInput
            label="Name"
            placeholder="Dhairya.."
            onChange={(e) => {
              setPostInputs({
                ...postInputs,
                name: e.target.value,
              });
            }}
          />
        ) : null}
        <LabledInput
          label="Email"
          placeholder="dhiru@gmail.com"
          onChange={(e) => {
            setPostInputs({
              ...postInputs,
              email: e.target.value,
            });
          }}
        />
        <LabledInput
          label="Password"
          type={"password"}
          placeholder="123!@#"
          onChange={(e) => {
            setPostInputs({
              ...postInputs,
              password: e.target.value,
            });
          }}
        />
        <div className="mt-3 flex justify-center">
          <Button onClick={sendRequest}
            borderRadius="1.55rem"
            className="w-full text-lg bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            {type === "signup" ? "Sign Up" : "Sign In"}
          </Button>
        </div>
      </div>
    </div>
  );
};

interface LabelledInputTypes {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const LabledInput = ({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputTypes) => {
  return (
    <div>
      <label className="block mb-1 mt-2 text-sm font-medium">{label}</label>
      <input
        onChange={onChange}
        type={type || "text"}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default Auth;
