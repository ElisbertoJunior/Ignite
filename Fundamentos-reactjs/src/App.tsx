import Header from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import Sidebar from "./components/Sidebar";
import Post from "./components/Post";

const posts = [
  {
    id: 1,
    author: {
      avatar_url: "https://github.com/ElisbertoJunior.png",
      name: "Elisberto Junior",
      role: "Java Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-08-03 10:34:00"),
  },
  {
    id: 2,
    author: {
      avatar_url: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "Educator @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-08-02 20:00:00"),
  },
];

const App = () => {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(({ publishedAt, author, id, content }) => (
            <Post
              key={id}
              publishedAt={publishedAt}
              author={{
                avatarUrl: author.avatar_url,
                name: author.name,
                role: author.role,
              }} content={content}            />
          ))}
        </main>
      </div>
    </>
  );
};

export default App;
