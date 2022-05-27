import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
    <header className={styles.hero}>
        <nav className={styles.nav_hero}>
            <div className={styles.nav_container}>
                <div class="logo">
                    <h2 className={styles.logo_name}>Nutrína<span className={styles.point}>.</span></h2>
                </div>
                <div className={styles.link}>
                    <a href="#" class="link">Inicio</a> &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="#" class="link">Preguntas Frecuentes</a> &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="#" class="link">Contacto</a> &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="#" className={styles.link_active}>Inicio de seión</a>

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
            <img src="https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/5d863e6c4a6557206a4f7a81_Preview_1.jpg" className={styles.mockup}/>
            </section>
    </header>
    <main>
        <section className={styles.services}>
            <div className={styles.container}>
                <h2 className={styles.subtitle}>Nuestros servicios<span className={styles.point}>.</span></h2>
                <p className={styles.copy_section}>Ofrecemos nuestros servicios perfectos</p>
                <article className={styles.container_cards}>
                    <div className={styles.card}>
                        <img src="https://image.shutterstock.com/image-vector/illustration-that-female-nutritionist-has-260nw-733637005.jpg" className={styles.card_img}></img>
                        <div class="card_text">
                            <br></br>
                            <p className={styles.card_list}>Especialista en nutrición</p>
                            <h1 className={styles.card_title}>Nutriologa<span className={styles.point}>.</span></h1>
                            <p className={styles.card_copy}>Lorem dsandhbs shabhbha hsabjhbabh shdabhdcd</p>
                            <a href='#' className={styles.card_button}>Comienza hoy</a>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src="https://www.monitornutricional.com/wp-content/uploads/2017/01/que1.png" className={styles.card_img}></img>
                        <div class="card_text">
                            <br></br>
                            <p className={styles.card_list}>Nosotros</p>
                            <h1 className={styles.card_title}>Nutriologa<span className={styles.point}>.</span></h1>
                            <p className={styles.card_copy}>Lorem dsandhbs shabhbha hsabjhbabh shdabhdcd</p>
                            <a href='#' className={styles.card_button}>Comienza hoy</a>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src="https://i.pinimg.com/474x/50/6b/98/506b9896193ff522ec9bb2634ab987b8.jpg" className={styles.card_img}></img>
                        <div class="card_text">
                            <br></br>
                            <p className={styles.card_list}>Conocenos</p>
                            <h1 className={styles.card_title}>Nutriologa<span className={styles.point}>.</span></h1>
                            <p className={styles.card_copy}>Lorem dsandhbs shabhbha hsabjhbabh shdabhdcd</p>
                            <a href='#' className={styles.card_button}>Comienza hoy</a>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    </main>

    <footer className={styles.footer}>
            <div className={styles.contact}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAARlJREFUSEvtluERATEQhT8VUAIVGBWgAkqgAjpABaiAEqiAEqgAHVAB80wyk4mQy83N/UD+ZW6z3763l51UKGlVSuLw/aA+0CzIziuwBc7K51o3BuYFQWyaA9DyQXugXTBI6RpS5SqyoCVQB3o5oRdgAOzM+S6wD4FmwBRQv9ZANQGoInVW/bnHQApWv7RqBhZTZ1XIFS05coqB9H0DDE1l2n9S56pQrIqcmCK1f2uddUryBRM0pC6kYgV0PKujIBsfUqdkthchFS4rM0iHfHU2kXoRUpEbFFLn9+Ldz5mkyE0idbrxfi8KByVcq2dobkV/0It1C2CU6ksk/mYnhDtUdScEi821rLUcTT4N5h94M2S1JTmutOfWA4xcTBu1xWgVAAAAAElFTkSuQmCC"/>
                <h3 className={styles.contact_title}>hola@example.com</h3>&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div className={styles.contact}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAZFJREFUSEu9lo0thEEQhp+rgA5QASpABagAHVABHYgKUAEqQAXogA7oQB7ZT+b29k+ITS53uZvdZ+add+e7Gf+0Zv/EYRS0DGwBe8BqSO4WuANeewmPgA6Bc0BYbV0BJ8B7LaAH8oCDXrbpd6vaB55L8S3QTyDT2Va0VqqsBrIXN4OVvAErIfYB2Mn31kDKEDfXmC/AdjLJZQgSJPB7lUAbwNNgNcp7lGLPgNP0+RrQRE1Q3NCqRIhu9P0CuA/O1BCbvwVNctl4s46SVc8uSdeqKEI8VJljJRPoI793JdBxkiSXbRTivsdkkmaPdJFZxvUTiPuGzGBgtLf3RImm8VKTKyY2ZG83xD5FGUYgJhYH71cCtQvrALWqpfSuhV32rzVcjXHeOdXnVmvWtaxbu18LJpgCe9PbzHZrp2bfa2mlLT6beiBlcmatD8AWDNCbDPmZNtaRYr9qy3k39bEY06to2qQkVlaCdSEt15WyymW0J7qwWcmoGXKgMA92evgqPrZLWY5KVwJW/4j8JWjAhPMhn6bRThsDgQ2PAAAAAElFTkSuQmCC"/>
                <h3 className={styles.contact_title}>buena vista #234</h3>&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div className={styles.contact}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAMRJREFUSEvtldENgjAURQ8b6AZsoBuoE+AmrqAbOIJOoCPIBrABbMAGmpe0ST9a8loJqYb7Ax/wTt69l1Iwk4qZOGQP2gM7YAusgA64mKvXpJSNrsDJM+0AvEJRxIKOwCMwbFLQE6gcUGu2GIDblNY1wMaAeqDUtjbWurczuAakFCplBToDdhO5t5JKSy5W928zcu0as2kNSCmSvyMtaDQGTUYakNRcTomgNCD35f9o3bJRcr0X637LOtUvwfdQ7MmQP+gDrKIuGw2/FfAAAAAASUVORK5CYII="/>
                <h3 className={styles.contact_title}>L.N. Monserrat Piña Jímenez</h3>&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div className={styles.contact}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAT9JREFUSEvdle0xBFEQRc9GgAiUCJYIEAEZ2AwQATIgAmRABFYEyEAIQlBHzVNbreeN+agtpf9NzXt95nb37ZmxppiticOfAJ0BS+B1CtWZok3gCdgFPoDDKWARZPLbBlKECNsD3scoi6AH4ChJaPlUJnRQRJA92W/JNAoWQdfAaeWTH4HjIZIi6BK4qCR6Bg6mAJnEicvirYEM6lM23ibaCKRREHNloGzytsZMXBsoK9/O1D4qFYtj7rM+ykKTa4n7muq2perll5D1CnAqV8NzDo9rq+qz2vbOPHUHnDdfvgop8FZY128iGwynUuCiURLLmS7iLpAlsT/znib9AesClfwqOOkJ03uW9yt+C/KsO05gNHMb/wbw59kb5AVL6WX7s11R6Kh75jv6KIp5Vai5i4/K+3RdjQH1atn/A30CVlU8G2Jyy9gAAAAASUVORK5CYII="/>
                <h3 className={styles.contact_title}>Contactanos</h3>&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div className={styles.footer_copy}>
            <p className={styles.copyright}>L.N. Monserrat Piña Jímenez &copy; 2022 Todos los derechos reservados</p>
            <a href="#" className={styles.pol_priva} >Politica de provacidad</a>
            <a href="#" className={styles.pol_priva}>Terminos y condiciones</a>
            
        </div>
    </footer>
  </div>
  )
}
