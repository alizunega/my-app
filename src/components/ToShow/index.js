import "./ToShow.css";

const ToShow = (props) => {
  return (
    <section className="toShow">
      <h3 className="tittle">MyOrg</h3>
      <img
        src="./img/add.png"
        className="toShow-img"
        alt="Icono Mostrar Formulario"
        // style={{ background: `var(--color-background)` }}
        onClick={props.cambiarMostrar}
      />
    </section>
  );
};
export default ToShow;
