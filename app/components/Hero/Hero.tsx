import Button from "../Button/Button";
import styles from './Hero.module.css'; // Import CSS module for styling

const Hero = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {

    return (
        <div className={styles.banner}>
            {children}
        </div>
    );
};

export default Hero;
