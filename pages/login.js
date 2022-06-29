import styles from '../styles/Home.module.css'

export default function dual() {
  return (
   <div className={styles.hero}>
      <div className={styles.log_cont}>
          <img src="nutrina1.png" className={styles.is}></img>
          <div className={styles.log_in_cont}>
              <br></br>
              <form className={styles.inputs_con}>
                  <input className={styles.input} type="text" placeholder="Nombre del usuario"></input>
                  <input className={styles.input} type="password" placeholder="Password"></input>
                  <button className={styles.btn} href="#">Iniciar</button><br></br>
                  <a href='#' className={styles.men}>Haz olvidado tu contraseña?</a><br></br>
                  
              </form>
          </div>
      </div></div>
  )
}