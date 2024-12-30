import './Input.css';


const Input = (props) => {
    //manejo de estado para el valor del input
    //console.log(props)

    const handleChange = (e) => {
        props.setValue(e.target.value);
    }


  return <input 
  className="input" 
  placeholder={props.placeholder} 
  required 
  value={props.value}
  onChange={handleChange}
  />
}

export default Input;