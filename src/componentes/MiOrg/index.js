import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
    //Estado --> hooks 1.useState - function useState()
    //const [nombreVariable, functionActualiza] = useState(valorInicial)
       
    /* const [mostrar, actualizarMostrar] = useState(true)

    const manejarClick = () => {
        console.log("Mostrar/Ocultar elemento", !mostrar)
        actualizarMostrar(!mostrar)
    }
 */
    return <section className="orgSection">
        <h3 className="title">Mi Organizacion</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg