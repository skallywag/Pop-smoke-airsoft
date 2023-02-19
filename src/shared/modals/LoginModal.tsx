import { useModals } from "react-modal-controller";
import { IoCloseOutline } from "react-icons/io5";
import Image from "../../components/image/Image";
import smoke from "../../assets/target.png";
import "./LoginModal.scss";

interface SignInModalProps {
  onClose: () => void;
}
const SignInModal: React.FC<SignInModalProps> = (props) => {
  const { closeModal } = useModals();

  return (
    <div className="overlay" onClick={() => closeModal("LOG_IN")}>
      <div className="loginModal">
        <IoCloseOutline
          size={40}
          color={"white"}
          onClick={() => closeModal("LOG_IN")}
          style={{ position: "absolute", top: "8", right: "8" }}
        />
        <Image
          height={"40x"}
          width="40px"
          imageUrl={smoke}
          radius="50%"
          marginBottom={18}
        />
        <div style={{ fontSize: "30px", marginBottom: "20px" }}>LOGIN</div>
        <div
          style={{
            marginBottom: "50px",
            textDecoration: "underline",
            color: "white",
            fontSize: "12px",
          }}
        >
          Don't Have an Account?
        </div>

        <div style={{ marginBottom: "6px", color: "white" }}>Email</div>
        <input className="input fullWidth" style={{ marginBottom: "20px" }} />
        <div style={{ marginBottom: "6px", color: "white" }}>Password</div>
        <input className="input fullWidth" />
      </div>
    </div>
  );
};
export default SignInModal;
