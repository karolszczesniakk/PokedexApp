import { useSelector } from "react-redux";
import { RootState } from "../../store";
import "./Button.css";

interface ButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, onClick, type } = props;
    const themeType = useSelector((state: RootState) => state.theme.themeType);
    const styleClass = themeType === "light" ? "my-button my-button--light" : "my-button";
  
  return (
    <button
      type={type ? type : undefined}
      onClick={onClick}
      className={styleClass}
    >
      {children}
    </button>
  );
};

export default Button;
