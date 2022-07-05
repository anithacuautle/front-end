import axios from "axios";
import { useState } from "react";

export default function dual() {
  const [newPatient, setNewPatient] = useState({
    name: "",
    first_name: "",
    second_name: "",
    date_of_birth: "",
    email: "",
    ocupation: "",
    phone: "",
    reason: "",
    sex: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    await createPost();
  };

  const createPost = async () => {
    try {
      const res = await fetch("http://localhost:5000/patients");
      let data = await res.json();
      console.log(data);
      return {
        props: {
          data,
        },
      };
    } catch (error) {
      console.log(error);
    }
    try {
      const res = await axios.post(
        "http://localhost:5000/patients",
        { newPatient },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res); //check now
    } catch (e) {}
  };

  const handleChange = (e) => {
    setNewPatient({ ...newPatient, [e.target.name]: e.target.value });
  };

  return (
    <div class="sidebar close">
      <link
        href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
        rel="stylesheet"
      ></link>
      <div class="logo-details">
        <i class="bx bx-spa"></i>
        <span class="logo-nam">Nutriña</span>
      </div>

      <ul class="nav-bus">
        <li>
          <a href="#">
            <i class="bx bx-search"></i>
            <input type="text" placeholder="Search.." class="bus"></input>
          </a>
        </li>

        <ul class="nav-links">
          <li>
            <div class="icon-link">
              <a href="#">
                <i class="bx bx-user"></i>
                <span class="link-name">Paciente</span>
              </a>
            </div>
            <ul class="sub-menu">
              <li>
                <a class="link-name" href="#">
                  Paciente
                </a>
              </li>
              <li>
                <a href="#">Nuevo Paciente</a>
              </li>
              <li>
                <a href="#">Seguimiento Paciente</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">
              <i class="bx bxs-book-content"></i>
              <span class="link-name">Agenda</span>
            </a>
          </li>

          <li>
            <a href="#">
              <i class="bx bxs-report"></i>
              <span class="link-name">Reportes</span>
            </a>
          </li>

          <li>
            <a href="#">
              <i class="bx bx-cog"></i>
              <span class="link-name">Configuración</span>
            </a>
          </li>

          <li>
            <a href="#">
              <i class="bx bx-help-circle"></i>
              <span class="link-name">Ayuda</span>
            </a>
          </li>

          <li>
            <div class="profile-details">
              <div class="profile-content">
                <img src="descarga.jpg" alt="profile"></img>
              </div>
              <div class="name-job">
                <div class="profile-name">Prem Shahi</div>
                <div class="job">Web Designer</div>
              </div>
              <i class="bx bx-log-out"></i>
            </div>
          </li>

          <div>
            <div class="cont">
              <div class="titl">Registro</div>
              <form onSubmit={handleSubmit}>
                <div class="user-detail">
                  <div class="input-box">
                    <span class="details">Nombre</span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Nombre"
                      required
                    ></input>
                  </div>
                  <div class="input-box">
                    <span class="details">Fecha de nacimiento</span>
                    <input
                      type="text"
                      name="date_of_birth"
                      placeholder="Edad"
                      required
                    ></input>
                  </div>
                  <div class="input-box">
                    <span class="details">Ocupación</span>
                    <input
                      type="text"
                      name="ocupation"
                      placeholder="Ocupación"
                      required
                    ></input>
                  </div>
                  <div class="input-box">
                    <span class="details">Número Telefónico</span>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Número Telefónico"
                      required
                    ></input>
                  </div>
                  <div class="input-box">
                    <span class="details">E-mail</span>
                    <input
                      type="text"
                      name="email"
                      placeholder="E-mail"
                      required
                    ></input>
                  </div>
                  <div class="input-box1">
                    <span class="details1">Motivo de consulta</span>
                    <input
                      class="mes"
                      type="text"
                      name="reason"
                      onChange={handleChange}
                      placeholder="Consulta"
                      required
                    ></input>
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
  );
}
