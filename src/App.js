import "./App.css";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Team from "./components/Team";
import ToShow from "./components/ToShow";
import Footer from "./components/Footer";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function App() {
  const [colabs, updateColabs] = useState([
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/alizunega.png",
      nombre: "Alicia",
      puesto: "Desarrolladora",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "Programacion",
      foto: "https://github.com/alizunega.png",
      nombre: "Lourdes",
      puesto: "Desarrolladora",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/alizunega.png",
      nombre: "Lourdes",
      puesto: "Head Leader",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "Movil",
      foto: "https://github.com/alizunega.png",
      nombre: "Alicia",
      puesto: "Desarrolladora",
      fav: false,
    },
  ]);

  const [mostrarForm, updateMostrar] = useState(true);

  const [equipos, updateEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programacion",
      color1: "#57c278",
      color2: "#d9f7f9",
    },
    {
      id: uuid(),
      titulo: "Front End",
      color1: "#82cffa",
      color2: "#e8f8ff",
    },
    {
      id: uuid(),
      titulo: "Data Science",
      color1: "#a6d157",
      color2: "#f0f8e3",
    },
    {
      id: uuid(),
      titulo: "Devops",
      color1: "#e06b69",
      color2: "#fde7e8",
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      color1: "#db6ebf",
      color2: "#fae9f5",
    },
    {
      id: uuid(),
      titulo: "Movil",
      color1: "#ffba05",
      color2: "#fff5d9",
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      color1: "#ffba29",
      color2: "#fffedf",
    },
  ]);

  // console.log(uuid());

  //manejo de cambio de estado de la funcionalidad de mostrar o no el formulario
  const cambiarMostrar = () => {
    updateMostrar(!mostrarForm);
  };

  //menejo del registro de colaboradores
  const registrarColab = (colab) => {
    console.log("Nuevo colaborador", colab);

    updateColabs([...colabs, colab]);

    //console.log("lista colabs",colabs)
  };

  // console.log("lista colabs", colabs);

  const eliminarColab = (id) => {
    console.log("Colaborador eliminado", id);
    const nuevosColabs = colabs.filter((colab) => colab.id !== id);
    return updateColabs(nuevosColabs);
  };

  // actualizar color de los equipos
  const changeColor = (color, id) => {
    // console.log("color seleccionado", color, id);
    const newEquipos = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.color1 = color;
      }
      return equipo;
    });
    updateEquipos(newEquipos);
  };

  const crearEquipo = (nuevoEquipo) => {
    updateEquipos([...equipos, nuevoEquipo]);
  };

  const likeColab = (id) => {
    // console.log("Colaborador favorito", id);
    const colabsFav = colabs.map((colab) => {
      if (colab.id === id) {
        colab.fav = !colab.fav;
      }
      return colab;
    });
    updateColabs(colabsFav);
  };

  return (
    <div>
      <Header />
      {mostrarForm && (
        <Form
          data={equipos.map((equipo) => equipo.titulo)}
          registrarColab={registrarColab}
          crearEquipo={crearEquipo}
        />
      )}

      <ToShow cambiarMostrar={cambiarMostrar} />

      {equipos.map((equipo) => (
        <Team
          data={equipo}
          key={equipo.id}
          colabs={colabs.filter((colab) => colab.equipo === equipo.titulo)}
          eliminarColab={eliminarColab}
          changeColor={changeColor}
          likeColab={likeColab}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
