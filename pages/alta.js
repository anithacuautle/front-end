import styles from '../styles/Home.module.css'

export default function dual() {
  return (
    <div class="sidebar close">
    <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'></link>
           <div class="logo-details">
           <i class='bx bx-spa'></i>
             <span class="logo-nam">Nutriña</span>
           </div>
           
           <ul class="nav-bus">
           <li>
               <a href='#'>
               <i class='bx bx-search'></i>
                 <input type="text" placeholder="Search.." class="bus"></input>
               </a>
               </li>

           <ul class="nav-links">
               <li>
             <div class="icon-link">
              <a href='#'>
              <i class='bx bx-user'></i>
               <span class="link-name">Paciente</span>
               </a>
             </div>
             <ul class="sub-menu">
             <li><a class="link-name" href='#' >Paciente</a></li>
               <li><a href='#' >Nuevo Paciente</a></li>
               <li><a href='#'>Seguimiento Paciente</a></li>
             </ul>
             </li>
             
               <li>
             <a href='#'>
              <i class='bx bxs-book-content'></i>
               <span class="link-name">Agenda</span>
               </a>
               
               </li>

             <li>
             <a href='#'>
              <i class='bx bxs-report'></i>
               <span class="link-name">Reportes</span>
               </a>
               </li>

               <li>
               <a href='#'>
              <i class='bx bx-cog'></i>
               <span class="link-name">Configuración</span>
               </a>
               </li>

               <li>
               <a href='#'>
              <i class='bx bx-help-circle'></i>
               <span class="link-name">Ayuda</span>
               </a>
               </li>

               <li>
               <div class="profile-details">
           <div class="profile-content">
             <img src='descarga.jpg' alt='profile'></img>
             </div>
             <div class="name-job">
               <div class="profile-name">Prem Shahi</div>
               <div class="job">Web Designer</div>
             </div>
             <i class='bx bx-log-out'></i>
           </div>
               </li>
           
           <div>
           <div class="cont">
               <div class="titl">Registro</div>
               <form action='#'>
                   <div class="user-detail">
                       <div class="input-box">
                           <span class="details">Nombre</span>
                           <input type="text" placeholder="Nombre" required></input>
                       </div>
                       <div class="input-box">
                           <span class="details">Edad</span>
                           <input type="text" placeholder="Edad" required></input>
                       </div>
                       <div class="input-box">
                           <span class="details">Ocupación</span>
                           <input type="text" placeholder="Ocupación" required></input>
                       </div>
                       <div class="input-box">
                           <span class="details">Número Telefónico</span>
                           <input type="text" placeholder="Número Telefónico" required></input>
                       </div>
                       <div class="input-box">
                           <span class="details">E-mail</span>
                           <input type="text" placeholder="E-mail" required></input>
                       </div>
                       <div class="input-box1">
                           <span class="details1">Motivo de consulta</span>
                           <input class="mes" type="text" placeholder="Consulta" required></input>
                       </div>
                   </div>
                   <div class="gender-details">
                       <input type="radio" name="gender" id="dot-1"></input>
                       <input type="radio" name="gender" id="dot-2"></input>
                       <input type="radio" name="gender" id="dot-3"></input>
                   <span class="gender-title">Género</span>
                   <div class="category">
                       <label for="dot-1">
                           <span class="dot one"></span>
                           <span class="gender">Hombre</span>
                       </label>
                       <label for="dot-2">
                           <span class="dot two"></span>
                           <span class="gender">Mujer</span>
                       </label>
                       <label for="dot-3">
                           <span class="dot three"></span>
                           <span class="gender">Prefiero no decirlo</span>
                       </label>
                   </div>
                   </div>
                   <div class="button">
                       <input type="submit" value="Registrar"></input>
                   </div>
               </form>
           </div>
           </div>
           </ul>
           </ul>

           
  </div>

    )}