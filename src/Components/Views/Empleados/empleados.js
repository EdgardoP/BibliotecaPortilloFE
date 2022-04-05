import Nav from '../../UX/Nav/Nav'
import Page from "../../UX/Page/Page"


const Empleados = ({empleados})=>{
    return(
        <div className='fondo'>
            <Page header={<h2>Empleados</h2>} footer={<Nav/>}>
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
                                empleados.map((o)=>{
                                    return(<tr> <EmpleadosItem key = {o._id} empleado = {o}/> </tr>)
                                })
                            }
                        </table>
                    </div>
                </section>
            </Page>
        </div>
    );
}



const EmpleadosItem =({empleado})=>{
    return(
            <>
                <td className='filas'>{empleado.idEmpleado}</td>
                <td className='filas'>{empleado.nombreEmpleado}</td>
                <td className='filas'>{empleado.apellidoEmpleado}</td>
                <td className='filas'>{empleado.sexoEmpleado}</td>
                <td className='filas'>{empleado.direccionEmpleado}</td>    
            </>
    );
}
export default Empleados;