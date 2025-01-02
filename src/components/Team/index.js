import Colab from "../Colab";
import "./Team.css";
import hexToRgba from "hex-to-rgba";

const Team = (props) => {
  // la data que recibe team es todo el objeto de cada equipo
  const { titulo, color1, id } = props.data;
  const { colabs, eliminarColab, changeColor, likeColab} = props;
  //console.log(colabs.length);
  

  return (
    <>
    {colabs.length > 0 && (
      <section className="team" style={{ backgroundColor: hexToRgba(color1, 0.5) }}>
        <input 
          type="color"
          className="color-picker"
          value={color1}
          onChange={(event)=>{
            changeColor(event.target.value, id);
          }}
        />
        <h3 style={{ borderColor: color1 }}>{titulo}</h3>
        <div className="colab">
          {colabs.map((colab) => (
            <Colab
              data={colab}
              key={colab.id}
              color1={color1}
              eliminarColab={eliminarColab}
              likeColab={likeColab}
            />
          ))}
        </div>
      </section>
    )}
    </>
  )
};

export default Team;
