import "./ListaOpciones.css"
import Label from "../Label";

const ListaOpciones = (props) =>{

    //manejo de cambios para seleccion de equipos
    const handleChange = (e) => {
        props.setEquipo(e.target.value)
    }

    //console.log(equipos)
    return <div className="listaOpciones">
        <Label title="Equipos" />
        <select value={props.value} onChange={handleChange}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>

            {props.equipos.map((equipo, index) => <option key={ index } value={equipo}>{ equipo }</option>)}
        </select>
    </div>
}

export default ListaOpciones