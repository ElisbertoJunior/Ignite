import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'
import Avatar from '../Avatar'

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Imagem de capa" />

      <div className={styles.profile}>
        <Avatar hasBorder={true} srcImage='https://avatars.githubusercontent.com/u/94086819?v=4'/>
        <strong>Elisberto Junior</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}

export default Sidebar