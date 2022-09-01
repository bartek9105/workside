import Logo from "../Logo";
import HamburgerMenu from "../../icons/hamburger-menu.svg";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <HamburgerMenu />
    </div>
  );
};

export default Navbar;
