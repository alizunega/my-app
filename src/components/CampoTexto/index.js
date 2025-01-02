import "./CampoTexto.css";
import Label from "../Label";
import Input from "../Input";
const CampoTexto = (props) => {
  const { type = "text" } = props;
  const className = `campo-${type}`;

  //console.log("Datos: ", props)
  return (
    //className="campo-texto"
    <div className={className}>
      <Label title={props.title} />
      <Input
        placeholder={props.placeholder}
        setValue={props.setValue}
        type={type}
      />
    </div>
  );
};

export default CampoTexto;
