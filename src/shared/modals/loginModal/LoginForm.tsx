import React from "react";
import { FieldValue, useForm, useFormState } from "react-hook-form";
import Button from "../../button/Button";

interface LoginFormProps {}

type FormData = {
  email: string;
  password: string;
};
const LoginForm: React.FC<LoginFormProps> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => console.log(data);

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
          text={"LOGIN"}
          type={"submit"}
        />
      </form>
    </div>
  );
};
export default LoginForm;
