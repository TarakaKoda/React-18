import styles from "./Button.module.css";

interface Props {
  children: string;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "light"
    | "dark";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button
      className={[styles.btn, styles['btn-' + color]].join(" ")}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
