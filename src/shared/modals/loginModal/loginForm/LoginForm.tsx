import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../../button/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch } from "../../../../state/state.hooks";
import { setLogin } from "../../../../state/appSlice";
import { userService } from "../../../../services/userService/userService";

interface LoginFormProps {
  closeModal: () => void;
}

const LoginForm: React.FC<LoginFormProps> = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Api.User.Req.Login>();

  const onSubmit = async (data: Api.User.Req.Login) => {
    setIsLoading(true);
    try {
      await userService.userLogin(data);
      dispatch(setLogin(true));
      props.closeModal();
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      toast(error.response.data);
    }
  };

  return (
    <div className="loginForm">
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
