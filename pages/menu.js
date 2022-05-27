import styles from '../styles/Home.module.css'

export default function dual() {
  return (
      <div className={styles.com}>
                <div className={styles.esti}>
                <input className={styles.conten} type="text" placeholder="Buscar paciente"></input>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAYdJREFUSEvFleExBEEQRt9FQAaIABEgAkSADMiACBABIkAEZEAGhEAG6lVNq9mp3Z1ZtbX6191tX7/5erq/XbFQrBbiMAZaBw6BI8DPxifwBDxPPeAQ6BS4zgBlXYFnwGsrsA90D5ykAt9JgYWNzeyZ34WZX40SpJK79K8H4Bz4KqoIs33b6fdd4L1GykHew0dqlxChY2FxYbbvYAoo1NguT10qKWvtAG+tqnJFtsMpa1ET0FB1AdyMqcpBtmAPuAIua61Iz+Nw1f/8CyjGekrrHPsN4DhN4mAjckU6wGPK3EouMNbBfeClNb/cozihl+x+DEW+Crdp30avtQTlpxTm5pfLaI7KhbWuQq+p5u7gKQWFBbk77pghZC1ZkFMXOb3KhkzVgu6F494XYU/mhC866nagd9Fr7yOBtipeExaxYG6y2lbEoB3VQC17G0sbua6JTtFRNgdItSoJN4971Wh/YXOA8rbld9pZkTlBpbLOS3FOkMoC5jR23rxzg5q8rmXC/pyzmKIfeJ1TG8M/H0MAAAAASUVORK5CYII="/>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="#" className='esti'>Perfil</a> &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="#" className='esti'>Cerrar seión</a>
                </div>
                <div className={styles.esl}>
                    <a href="#" class="esl">Consultorio</a> &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="#" class="esl">Configurar</a><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAihJREFUSEu9lYExBEEQRf9FgAgQASJABMiACBABIkAEiAARIAJEQAaIgHpX/bd652b3bq/UTdUVOzvT//fv370jLWiNFoSjIUCbks4kLSdyD5KuZyE7BOhT0mol6K6k52lgQ4B+I9hF/D0MYJ7P5wVCpiVJL5L4/1LSTgQzObLYlvQt6UoSgPleC7uWEZeO4xRyraUbABtwX9J9epfPvklCUkiMVwlEkKd49xNZ8fgu6aRSC4zBPiYp150k5K0CWQ6YcwjtYUUwL4LzIwMvCHKWHwrcxIt1nyszcsFrTkJ/AvCXBQEC1+yNdBuSTqN+LelgwgFMQJAjSfQJi+CvFXnYAsgZkyl1cx2JcVurEQGRz47zBTOkVpjAcro2W0ESuS1bJlCdDMhBgMcICsuvUvN4NgH3UjZTqyw1exvIjJD0IwKvZMuGtHvRQ9ybGQj2pI48uWeQCjnzFEBmWoE7BwGae8ty9tq7LLKzZB+5sDbsAaFudmLOCHK4l/MTrrNEjS2T0/LE8DYgGGAcLBZSYygGcKNAWaNSIpiy5+bkGXmcme1PZvQNcueaWtIJ19EPDFAWQRyU/a7vTm5kCEGMvSxp1d62bNmfBEFSZwFz2qCZZ8WF1nSp2RsZPLPoagrsaZ7rCiDWZsGeOygAAeppQlXXlVnkAtso5feoNaW7AszzhS1jNfOsC6S0d9853uU55rO4zLOv9/6QjAhE/fJnIvfPvwJNy7rz/R9syYQbxVY6zwAAAABJRU5ErkJggg==" className={styles.con}/> &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="#" class="esl">Ayuda</a><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAhlJREFUSEu9luExBEEQhd9FgAgQASJABIgAESACRIAIuAgQASIgA2RABNQ31b3V2zeze3U/rqvU3e3M9Ov3+k2viZYUkyXhaF6gDUkHkrYl8d3jVdKzpI+xgseASHovaW8k0ZekK0nT1r4hoHNJN+Hgt6QnST/hGQxh6gGz/bSnrLWAHiQd2+k3qxaZarFq62e2CDvA+OyiBhSZ3EnitwdJtyTxCcPYG9hRzIo97zHLQPTk07JmkBOTEhAPpDwNUkWw3vkMREW7kpArGuBQ0qNl/7XE6/YbsKMAHhXZdAkjUGQD7dgT9CYxVoYZhojgO0lG39+xikBeCdrHu0Kxf1ZxTugKXEi6rbCih5zpuc6dlnvTMFt57JVnIGR/sYOFTGTk1V2bXYcAMAQXGfmIrhfhkKtQ1hYBAoRqcRiB61AjhwOVfi8CxKi5lIT7MAauyxGNNSOdJ8BZLklNvlZf4l4KQFqKKfcuMkKKd9u9VptXtkZBBHL1xkxAcmMxZAGdmXUz/q9QAgj9SVIDigV39zFPBqdM/nxnHLPX5FRINEpvutSGKpeMwcntp6L8UvOJwQWPa4DwWilS5UJrQBwgASMHMKTiEg8FctH8puVb7yPsiW1hRtALRgwFIAnBHgYwU8BZ8Lx6r4besPmFNkKqFJDl7M6M/c/glZOAyp2hJ+CewBw7t97AZe88QJkJkvE3mDgfWgRoTMLq+j+SDYMb8ygZkwAAAABJRU5ErkJggg=="/>
                </div>
                <div className={styles.es}>
                <img src='https://img2.freepng.es/20180531/lwc/kisspng-dietitian-health-nutrition-food-nutritionist-5b0fb241c63919.6045298015277553298119.jpg' className={styles.isl}></img> 
                <h2 className={styles.Inicio}>Bienvenida</h2> 
                    </div>
                    
      </div>
  )
}