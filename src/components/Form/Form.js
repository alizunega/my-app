import "./Form.css";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";
import Button from "../Button";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import hexToRgba from "hex-to-rgba";

const Form = (props) => {
  //manejo de estado para los valores de los inputs en el formulario
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo, setEquipo] = useState("");
  const { registrarColab, crearEquipo } = props;

  const [titulo, setTitulo] = useState("");
  const [color1, setColor] = useState("");

  //manejo envio del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log('Nombre: ', nombre)
    // console.log('Puesto: ', puesto)
    // console.log('Foto: ', foto)
    let datosForm = {
      id: uuid(),
      nombre,
      puesto,
      foto,
      equipo,
    };

    registrarColab(datosForm);
    //updateForm();
  };
  const handleSubmitEquipo = (e) => {
    e.preventDefault();
    let datosEquipo = {
      id: uuid(),
      titulo,
      color1,
      color2: hexToRgba(color1, 0.5),
    };
    console.log("Nuevo equipo",datosEquipo);
    crearEquipo(datosEquipo);
  };

  // const updateFrom = () => {
  //   setNombre("");
  //   setPuesto("");
  //   setFoto("");
  //   setEquipo("");
  // };

  // console.log va a mostrar los props que vienen de App.js
  // le llame data y solo trae el titulo
  //  console.log(props.data)

  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <h2>Completa el formulario</h2>
        <CampoTexto
          title="Nombre"
          placeholder="Ingresar nombre"
          value={nombre}
          setValue={setNombre}

        />
        <CampoTexto
          title="Puesto"
          placeholder="Ingresar puesto"
          value={puesto}
          setValue={setPuesto}

        />
        <CampoTexto
          title="Foto"
          placeholder="Ingresar url de la foto"
          value={foto}
          setValue={setFoto}

        />
        {/* a la lista le debo mandar el contenido de data solo el titulo de los equipos */}
        <ListaOpciones
          value={equipo}
          setEquipo={setEquipo}
          equipos={props.data}
        />
        <Button title="Crear" />
      </form>
      <form onSubmit={handleSubmitEquipo}>
        <h2>Carga un nuevo equipo</h2>
        <CampoTexto
          title="Titulo"
          placeholder="Ingresar titulo del equipo"
          value={titulo}
          setValue={setTitulo}

        />
        <CampoTexto
          className="campo-color"
          title="Color Primario"
          placeholder="Ingresa color en hexa"
          value={color1}
          setValue={setColor}
          type="color"
        />
        <Button title="Registrar equipo" />

      </form>
    </section>
  );
};

export default Form;
