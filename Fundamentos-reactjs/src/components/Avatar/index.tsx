import styles from "./Avatar.module.css";

type Props = {
  srcImage: string;
  hasBorder: boolean;
};

const Avatar = ({ srcImage, hasBorder }: Props) => {
  return (
    <img
      className={hasBorder ? styles.avatar : styles.avatarWithBorder}
      src={srcImage}
    />
  );
};

export default Avatar;
