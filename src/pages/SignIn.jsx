import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <div className="bg-slate-300 h-screen flex flex-col items-center justify-center">
      <div className=" font-bold p-4">Welcome To Mini PayTM</div>
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign in"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox
            placeholder="roshani@gmail.com"
            label={"Email"}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <InputBox
            placeholder="123456"
            label={"Password"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="pt-4">
            <Button
              label={"Sign in"}
              onClick={async () => {
                await axios
                  .post(
                    "https://paytm-backend-2zsh.onrender.com/api/v1/user/signin",
                    {
                      username,
                      password,
                    }
                  )
                  .then((response) => {
                    localStorage.setItem("token", response.data.token);
                    navigate("/dashboard");
                    toast("Sign In Successfull!...");
                  })
                  .catch(() => {
                    toast("Please Enter valid username or password !");
                  });
              }}
            />
          </div>
          <BottomWarning
            label={"Don't have an account?"}
            buttonText={"Sign up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
};
export default SignIn;
