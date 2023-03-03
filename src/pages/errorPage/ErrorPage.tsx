import "./ErrorPage.scss";
import Image from "../../components/image/Image";

const ErrorPage: React.FC = () => {
  return (
    <div className="page errorPage">
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "60px", marginBottom: "20px" }}>Uh Oh! </h1>
        <h1 style={{ fontSize: "30px", marginBottom: "10px" }}>
          Page Not Found
        </h1>
        <h2 style={{ fontSize: "18px", marginBottom: "20px" }}>
          Looks Like the Lieutenant is lost again
        </h2>
        <Image
          imageUrl="https://taskandpurpose.com/uploads/2020/11/19035879-1.png?auto=webp"
          width={375}
          height={375}
        />
      </div>
    </div>
  );
};

export default ErrorPage;
