import styles from "./Logo.module.scss";
import LogoIcon from "../../icons/logo.svg";

const Logo = () => {
  return (
    <div className={styles.container}>
      <LogoIcon className={styles.logoIcon} />
      <h1 className={styles.appName}>Workside</h1>
    </div>
  );
};

export default Logo;
