import Nav from '../../UX/Nav/Nav'
import Page from "../../UX/Page/Page"


const Clientes = ({clientes})=>{
    return(
        <div className='fondo'>
            <Page header={<h2>Clientes</h2>} footer={<Nav/>}>
            <section className='centrado contenedor'>
                <div className='contenido'>
                    <table>
                        <tr>
                            <th className='Celdas'>ID</th>
                            <th className='Celdas'>Nombre</th>
                            <th className='Celdas'>Apellido</th>
                            <th className='Celdas'>Sexo</th>
                            <th className='Celdas'>Direccion</th>
                        </tr>
                        {
                            clientes.map((o)=>{
                                return (
                                <tr><ClientesItem key = {o._id} cliente = {o}/></tr>
                                )
                            })
                        }
                    </table>
                </div>
            </section>
            </Page>
        </div>
    );
}



const ClientesItem =({cliente})=>{
    return(<>
            <td className='filas'>{cliente.idCliente}</td>  
            <td className='filas'>{cliente.nombreCliente}</td>
            <td className='filas'>{cliente.apellidoCliente}</td>
            <td className='filas'>{cliente.sexoCliente}</td>
            <td className='filas'>{cliente.direccionCliente}</td>
        </>
    );
}
export default Clientes;