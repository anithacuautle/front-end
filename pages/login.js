import styles from '../styles/Home.module.css'

export default function dual() {
  return (
   <div className={styles.hero}>
      <div className={styles.log_cont}>
          <img src='https://img2.freepng.es/20180531/lwc/kisspng-dietitian-health-nutrition-food-nutritionist-5b0fb241c63919.6045298015277553298119.jpg' className={styles.is}></img>
          <div className={styles.log_in_cont}>
              <h1 className={styles.tittle}>Nutrína</h1>

              <form className={styles.inputs_con}>
                  <input className={styles.input} type="text" placeholder="Nombre del usuario"></input>
                  <input className={styles.input} type="password" placeholder="Password"></input>
                  <button className={styles.btn} href="#">Iniciar</button><br></br>
                  <a href='#' className={styles.men}>Haz olvidado tu contraseña?</a><br></br>
                  <a href='#'className={styles.men}>Don't have an account?</a>
              </form>
          </div>
      </div></div>
  )
}