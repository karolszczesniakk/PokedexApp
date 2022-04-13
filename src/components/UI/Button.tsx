import "./Button.css";

interface ButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, onClick, type } = props;
  return (
    <button
      type={type ? type : undefined}
      onClick={onClick}
      className="my-button"
    >
      {children}
    </button>
  );
};

export default Button;
