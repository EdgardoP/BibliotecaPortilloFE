import Nav from '../../UX/Nav/Nav'
import Page from "../../UX/Page/Page"


const Libros = ({libros})=>{
    return(
        <div className='fondo'>
        <Page header={<h2>Libros</h2>} footer={<Nav/>}>
            <section className='centrado contenedor'>
                <div className='contenido'>
                    <table>
                    <tr>
                        <th className='Celdas'>Nombre</th>
                        <th className='Celdas'>Autor</th>
                        <th className='Celdas'>Precio</th>
                        <th className='Celdas'>Editorial</th>
                        <th className='Celdas'>Categoria</th>
                    </tr>
                        {
                            libros.map((o)=>{
                                return (
                                <tr> <LibrosItem key = {o._id} libro = {o}/> </tr>
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



const LibrosItem =({libro})=>{
    return(
            <>
                <td className='filas'>{libro.nombreLibros}</td>
                <td className='filas'>{libro.autorLibros}</td>
                <td className='filas'>{libro.precioLibros}</td>
                <td className='filas'>{libro.editorialLibros}</td>
                <td className='filas'>{libro.categoriaLibros}</td>    
            </>
    );
}
export default Libros;