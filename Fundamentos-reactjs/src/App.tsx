import Header from "./components/Header"
import './global.css'
import styles from './App.module.css'
import Sidebar from "./components/Sidebar"
import Post from "./components/Post"
const App = () => {
  
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
          <Sidebar />
        <div>
          <Post />
          <Post />
        </div>
      </div>
    </>
  )
}

export default App
