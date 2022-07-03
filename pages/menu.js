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
                 <input type="text" placeholder="Search.."></input>
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
           </ul></ul>
           
  </div>

    )}
