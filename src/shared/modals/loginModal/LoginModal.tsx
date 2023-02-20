import { useModals } from "react-modal-controller";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Image from "../../../components/image/Image";
import smoke from "../../../assets/target.png";
import "./LoginModal.scss";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

interface SignInModalProps {
  onClose: () => void;
}

const SignInModal: React.FC<SignInModalProps> = (props) => {
  const [showCreate, setShowCreate] = useState<boolean>(false);
  const { closeModal } = useModals();

  return (
    <div className="overlay">
      <div className="loginModal">
        <IoCloseOutline
          size={30}
          color={"white"}
          onClick={() => closeModal("LOG_IN")}
          style={{
            position: "absolute",
            top: "8",
            right: "8",
            cursor: "pointer",
          }}
        />
        <Image
          height={"40x"}
          width="40px"
          imageUrl={smoke}
          radius="50%"
          marginBottom={18}
        />
        <div style={{ fontSize: "30px", marginBottom: "20px" }}>LOGIN</div>
        {showCreate ? (
          <div
            onClick={() => setShowCreate(!showCreate)}
            style={{
              marginBottom: "30px",
              textDecoration: "underline",
              color: "white",
              fontSize: "12px",
            }}
          >
            Have an Account? <mark>Login</mark>
          </div>
        ) : (
          <div
            onClick={() => setShowCreate(!showCreate)}
            style={{
              marginBottom: "30px",
              textDecoration: "underline",
              color: "white",
              fontSize: "12px",
            }}
          >
            Don't Have an Account? <mark>Sign Up</mark>
          </div>
        )}
        {showCreate ? <SignUpForm /> : <LoginForm />}
      </div>
    </div>
  );
};
export default SignInModal;
