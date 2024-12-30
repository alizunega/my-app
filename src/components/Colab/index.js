import "./Colab.css";
import { AiFillCloseCircle } from "react-icons/ai";

const Colab = (props) => {  
  const {nombre, puesto, foto, id} = props.data; 
  const {color1, eliminarColab} = props;
  // console.log(props.data);

  return (
    <div className="colab-card">
      <div className="colab-encabezado" style={{ backgroundColor: color1 }}>
        <AiFillCloseCircle onClick={()=>eliminarColab(id)} className="eliminar"/> 
        <img
          src={foto}
          alt={nombre}
          className="colab-img"
        />
      </div>
      <div className="info">
        <h4>{nombre}</h4>
        <h5>{puesto}</h5>
      </div>
    </div>
  );
};

export default Colab;
