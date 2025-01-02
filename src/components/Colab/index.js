import "./Colab.css";
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Colab = (props) => {
  const { nombre, puesto, foto, id, fav } = props.data;
  const { color1, eliminarColab, likeColab } = props;
  // console.log(props.data);

  return (
    <div className="colab-card">
      <div className="colab-encabezado" style={{ backgroundColor: color1 }}>
        <AiFillCloseCircle
          onClick={() => eliminarColab(id)}
          className="eliminar"
        />

        <img src={foto} alt={nombre} className="colab-img" />
      </div>
      <div className="info">
        <h4>{nombre}</h4>
        <h5>{puesto}</h5>
        {fav ? (
          <AiFillHeart
            className="fav"
            color="red"
            onClick={() => {
              likeColab(id);
            }}
          />
        ) : (
          <AiOutlineHeart
            className="fav"
            onClick={() => {
              likeColab(id);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Colab;
