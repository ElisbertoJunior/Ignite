import styles from './style.module.css'
import igniteLogo from '../../assets/Ignite simbol.png'

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logo do ignite" />
      <strong>Ignite Feed</strong>
    </header>
  )
}

export default Header