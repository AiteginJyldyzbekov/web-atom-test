import { TextDisplayProps } from "@component/types/TextDisplay";
import styles from "./TextDisplay.module.scss"

const TextDisplay: React.FC<TextDisplayProps> = ({ children }) => {
  return <p className={styles.text}>{children}</p>;
};

export default TextDisplay;
