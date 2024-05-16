import styles from "./styles.module.css";

interface IProps {
  text?: string | number;
}
export const Loader: React.FC<IProps> = ({ text }) => {
  console.log(styles);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className={styles.spinner}>
        <div className={`bg-black ${styles.spinner1}`}></div>
      </div>
      <span className={`text-7xl font-bold absolute ${styles.pulse}`}>
        <span className="gradient-text">{text}</span>
      </span>
    </div>
  );
};
