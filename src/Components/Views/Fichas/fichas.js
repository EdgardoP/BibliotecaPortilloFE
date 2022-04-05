import Nav from '../../UX/Nav/Nav'
import Page from "../../UX/Page/Page"


const Fichas = ({fichas})=>{
    return(
        <Page header={<h2>Fichas</h2>} footer={<Nav/>}>
            {
                fichas.map((o)=>{
                    return <FichasItem key = {o._id} ficha = {o}/>
                })
            }
        </Page>
    );
}



const FichasItem =({ficha})=>{
    return(
        <section>
            {ficha.nombreCliente}
        </section>
    );
}
export default Fichas;