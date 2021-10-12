import React from 'react' 
//Bootstrap
import Table from 'react-bootstrap/Table'

const ItemSpecs = ({specs}) =>{
    return(
        <Table striped responsive hover variant="dark">
            <thead>
                <tr>
                    <td  colSpan="2"><h3>Especificaciones</h3></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Pantalla: </td>
                    <td>{specs.screen}</td>
                </tr>
                <tr>
                    <td>Almacenamiento Interno: </td>
                    <td>{specs.storage}</td>
                </tr>
                <tr>
                    <td>RAM: </td>
                    <td>{specs.ram}</td>
                </tr>
                <tr>
                    <td>Procesador: </td>
                    <td>{specs.processor}</td>
                </tr>
                <tr>
                    <td>Plataforma: </td>
                    <td>{specs.os}</td>
                </tr>
                <tr>
                    <td>Cámara Frontal: </td>
                    <td>{specs.frontalcamera}</td>
                </tr>
                <tr>
                    <td>Cámara Posterior: </td>
                    <td>{specs.backcamera}</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default ItemSpecs