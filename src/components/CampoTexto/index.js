import "./CampoTexto.css"
import Label from "../Label";
import Input from "../Input";
const CampoTexto = (props) => {

  //console.log("Datos: ", props)
  return (
    <div className="campo-texto">
      <Label title={props.title} />
      <Input placeholder={props.placeholder} setValue={props.setValue}/>
    </div>
  ); 
};

export default CampoTexto;
