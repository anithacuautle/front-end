import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
    <header className={styles.hero}>
        <nav className={styles.nav_hero}>
            <div className={styles.nav_container}>
                <div className={styles.logo}>
                    <h2 className={styles.logo_name}>L.N MONSERRAT PIÑA JÍMENEZ</h2>
                    <h1 className={styles.point}>Cédula Profesional: 12490409 UAEMÉX</h1>
                    
                </div>
                <img src='nutrina1.png' className={styles.imagen}/>
                <div className={styles.link}>
                
                    <a href="#" class="link">Inicio</a> &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="#" class="link">Preguntas Frecuentes</a> &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="#" class="link">Contacto</a> &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="#" class="link">Inicio de seión</a>

                </div>
            </div>
        </nav>
        <section className={styles.hero_main}>
            <div class="hero_textos">
                <h1 className={styles.title}>El valor es como el amor,<span className={styles.title_active}>Debe tener espeanza para su nutrición.</span></h1> 
                <p className={styles.copy}>La primera riqueza <span
                className={styles.copy_active}>es la salud.</span></p>
                <a href="#" className={styles.cta}>agenda una cita</a>
            </div>
            <img src="imagen.png" className={styles.mockup}/>
            </section>
    </header>
    <main>
        <section className={styles.services}>
            <div className={styles.container}>
                <h2 className={styles.subtitle}>Nuestros servicios<span className={styles.point}>.</span></h2>
                <p className={styles.copy_section}>Ofrecemos nuestros servicios perfectos</p>
                <article className={styles.container_cards}>
                    <div className={styles.card}>
                        <img src="foto1.png" className={styles.card_img}></img>
                        <div class="card_text">
                            <br></br>
                            <p className={styles.card_list}>Especialista en nutrición</p>
                            <h1 className={styles.card_title}>Nutriologa</h1>
                            <a href='#' className={styles.card_button}>Comienza hoy</a>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src="imagen2.png" className={styles.card_img}></img>
                        <div class="card_text">
                            <br></br>
                            <p className={styles.card_list}>Nosotros</p>
                            <h1 className={styles.card_title}>Nutriologa</h1>
                            <a href='#' className={styles.card_button}>Comienza hoy</a>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src="foto3.png" className={styles.card_img}></img>
                        <div class="card_text">
                            <br></br>
                            <p className={styles.card_list}>Conocenos</p>
                            <h1 className={styles.card_title}>Nutriologa</h1>
                            <a href='#' className={styles.card_button}>Comienza hoy</a>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    </main>

    <footer className={styles.footer}>
            <div className={styles.contact}>
            <img src="e-mail.png"/>
                <h3 className={styles.contact_title}>hola@example.com</h3>&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div className={styles.contact}>
            <img src="location.png"/>
                <h3 className={styles.contact_title}>buena vista #234</h3>&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div className={styles.contact}>
            <img src="facebook.png"/>
                <h3 className={styles.contact_title}>L.N. Monserrat Piña Jímenez</h3>&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div className={styles.contact}>
            <img src="whatsapp.png"/>
                <h3 className={styles.contact_title}>722 253 1883</h3>&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div className={styles.footer_copy}>
            <p className={styles.copyright}>L.N. Monserrat Piña Jímenez &copy; 2022 Todos los derechos reservados</p><br></br>
            <a href="#" className={styles.pol_priva} >Politica de provacidad</a>
            <a href="#" className={styles.pol_priva}>Terminos y condiciones</a>
            
        </div>
    </footer>
  </div>
  )
}
