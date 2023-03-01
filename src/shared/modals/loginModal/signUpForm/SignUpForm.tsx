import React, { useState } from "react";
import { FieldValue, useForm, useFormState } from "react-hook-form";
import Button from "../../../button/Button";
import { useModals } from "react-modal-controller";
import axios from "axios";
import { toast } from "react-toastify";

interface SignUpFormProps {
  closeModal: () => void;
}
type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  password: string;
  confirmPassword: string;
};
const SignUpForm: React.FC<SignUpFormProps> = (props) => {
  const [res, setRes] = useState();
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/api/user/create`,
        data
      );
      props.closeModal();
      setRes(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
      toast(error.response.data);
    }
  };

  return (
    <div className="loginForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: "6px", color: "white" }}>First Name</div>
        <div style={{ marginBottom: "20px" }}>
          <input
            style={{ marginBottom: "6px" }}
            className="input"
            type="text"
            placeholder="First"
            {...register("firstName", { required: true })}
          />
          {errors.firstName?.type === "required" && (
            <div style={{ color: "red" }}>Field is Required</div>
          )}
        </div>
        <div style={{ marginBottom: "6px", color: "white" }}>Last Name</div>
        <div style={{ marginBottom: "20px" }}>
          <input
            style={{ marginBottom: "6px" }}
            className="input"
            type="text"
            placeholder="Last"
            {...register("lastName", { required: true })}
          />
          {errors.lastName?.type === "required" && (
            <div style={{ color: "red" }}>Field is Required</div>
          )}
        </div>
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

        <div style={{ marginBottom: "6px", color: "white" }}>Username</div>
        <div style={{ marginBottom: "20px" }}>
          <input
            style={{ marginBottom: "6px" }}
            className="input"
            type="text"
            placeholder="Username"
            {...register("userName", { required: true })}
          />
          {errors.userName?.type === "required" && (
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

        <div style={{ marginBottom: "6px", color: "white" }}>
          Confirm Password
        </div>
        <div style={{ marginBottom: "20px" }}>
          <input
            style={{ marginBottom: "6px" }}
            className="input"
            type="password"
            placeholder="confirm Password"
            {...register("confirmPassword", {
              required: true,
              validate: (value: string) => {
                if (watch("password") !== value) {
                  return "Your passwords do no match";
                }
              },
            })}
          />
          {errors.confirmPassword?.message && (
            <div style={{ color: "red" }}>{errors.confirmPassword.message}</div>
          )}
        </div>
        <Button
          variant="buttonLarge fullWidth"
          onClick={() => {}}
          text={"CREATE"}
          type={"submit"}
        />
      </form>
    </div>
  );
};
export default SignUpForm;
