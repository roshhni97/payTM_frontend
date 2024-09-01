"use client";
import React, { useState } from "react";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label="Sign Up" />
          <SubHeading label="Enter your information to create an account" />
          <InputBox
            label="First Name"
            placeholder="John"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <InputBox
            label="Last Name"
            placeholder="Navdiya"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <InputBox
            label="Email"
            placeholder="roshani@gmail.com"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <InputBox
            label="Password"
            placeholder="123456"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="pt-4">
            <Button
              onClick={async () => {
                const response = await axios.post(
                  "https://paytm-backend-2zsh.onrender.com/api/v1/user/signup",
                  {
                    username,
                    password,
                    firstName,
                    lastName,
                  }
                );
                localStorage.setItem("token", response.data.token);
                navigate("/dashboard");
                toast("Sing Up Successfull!...");
              }}
              label="Sign Up"
            />
          </div>
          <BottomWarning
            label="Already have an account?"
            buttonText={"Sign in"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
