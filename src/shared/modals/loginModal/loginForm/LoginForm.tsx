import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Button from "../../../button/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginData } from "../../../../@types/api";

interface LoginFormProps {
  closeModal: () => void;
}

const LoginForm: React.FC<LoginFormProps> = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [res, setRes] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();

  const onSubmit = async (data: LoginData) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`http://localhost:8080/api/tutorials`);
      props.closeModal();
      console.log(response);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      toast("Error Loging In");
    }
  };
  async function handleClick() {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/user/operators`
      );
      setRes(response);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="loginForm">
      <button style={{ background: "white" }} onClick={handleClick}>
        click
      </button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: "6px", color: "white" }}>Email</div>
        <div style={{ marginBottom: "20px" }}>
          <input
            style={{ marginBottom: "6px" }}
            className="input"
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email?.type === "required" && (
            <div style={{ color: "red" }}>Field is Required</div>
          )}
        </div>
        <div style={{ marginBottom: "6px", color: "white" }}>Password</div>
        <div style={{ marginBottom: "20px" }}>
          <input
            style={{ marginBottom: "6px" }}
            className="input"
            type="password"
            placeholder="Password"
            {...register("password", {
              required: true,
              maxLength: 16,
              minLength: 3,
            })}
          />
          {errors.password?.type === "required" && (
            <div style={{ color: "red" }}>Field is Required</div>
          )}
        </div>
        <Button
          variant="buttonLarge fullWidth"
          text={!!isLoading ? "Logging In" : "LOGIN"}
          type={"submit"}
        />
      </form>
    </div>
  );
};
export default LoginForm;
