import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import Avatar from "../Avatar";

type Props = {
  content: string;
  onDeleteComment: (comment: string) => void
};

const Comment = ({ content, onDeleteComment }: Props) => {

  const handleDeleteComment = () => {
      onDeleteComment(content)
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        srcImage="https://github.com/ElisbertoJunior.png"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTimes}>
              <strong>Elisberto Junior</strong>
              <time title="31 de Julho as 20:34" dateTime="2023-07-31 20:32:00">
                Cerca de 1h atras
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentario">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button >
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Comment;
