import React from "react";
import { Container } from "../components/Container";

export default function about({ data }) {
  return (
    <Container>
      <div>
        <h1>Hello, you're in about page</h1>
        <table className="container">
          <tbody>
            <tr>
              <th>N°</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Telefono</th>
            </tr>
            <tr>
              {data.map(({ uuid, name, first_name, email, phone }) => (
                <div key={uuid}>
                  <td>
                    {" "}
                    {name} " " {first_name}
                  </td>
                  <td>{email}</td>
                  <td>{phone}</td>
                </div>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch("http://localhost:5000/patients");
    let data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
