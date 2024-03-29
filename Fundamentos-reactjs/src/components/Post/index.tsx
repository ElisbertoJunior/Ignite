import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import Avatar from "../Avatar";
import Comment from "../Comment";
import styles from "./Post.module.css";
import { FormEvent, SetStateAction, useState } from "react";

type Props = {
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  publishedAt: Date;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any[];
};

const Post = ({ author, publishedAt, content }: Props) => {
  const [comments, setComments] = useState<string[]>([
    "Post muito bacana hein?!",
  ]);

  const [newCommentText, setNewCommentText] = useState<string>("");

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'ás' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleNewCommentChange = (event: {
    target: {
      setCustomValidity(arg0: string): unknown;
      value: SetStateAction<string>;
    };
  }) => {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  };

  const handleCreateNewComment = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  };

  const deleteComment = (comment: string) => {
    setComments(comments.filter((item) => item !== comment));
  };

  const handleNewCommentInvalid = (event: {
    target: { setCustomValidity: (arg0: string) => void };
  }) => {
    event.target.setCustomValidity("Esse campo e obrigatorio!");
  };

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder={true} srcImage={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href={line.content}>{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          required
          onInvalid={handleNewCommentInvalid}
          name="comment"
          value={newCommentText}
          placeholder="Deixe um comentario"
          onChange={handleNewCommentChange}
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
};

export default Post;
