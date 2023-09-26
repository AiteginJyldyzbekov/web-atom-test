import styles from "./TextDisplay.module.scss";

const AccessView: React.FC = () => {
  const isAuth = false;
  if (isAuth) {
    return <div>profile button</div>;
  } else {
    return <div>Login</div>;
  }
};

export default AccessView;
