import { useState } from 'react';

import Page from '../../UX/Page/Page';
import Nav from '../../UX/Nav/Nav';
import Input from '../../UX/Forms/Input';
import { PrimaryButton } from '../../UX/Forms/Button';

const Todos = ({
  list,
  onAddTodo,
  onToggleDone
})=>{
  return (
    <>
    <div className='fondo'>
      <Page header={(<h1>Registro de Fichas</h1>)} footer={<Nav />}>
      <div className='contenedor'>
        <div className='contenido'>
        <TodoAddForm addToDo={onAddTodo}></TodoAddForm>
        <TodoFormList todoFormList={list} toggleTodo={onToggleDone}></TodoFormList>
        </div>
      </div>
      </Page>
    </div>
    </>
  );
}

const TodoAddForm = ({addToDo})=>{
  const [libro,setLibro] = useState();
  const [fecha, setFecha] = useState();
  const [cliente, setCliente] = useState();

  const onChangeLibro = (e)=>{
    const { value } = e.target;
    setLibro(value);
  }
  const onChangeFecha = (e)=>{
    const { value } = e.target;
    setFecha(value);
  }
  const onChangeNombreCliente = (e)=>{
    const { value } = e.target;
    setCliente(value);
  }
  const onAddClick = (e)=>{
    e.preventDefault();
    e.stopPropagation();
    
    let objeto = {
      libro: libro,
      fecha:fecha,
      cliente:cliente,
    }

    addToDo(objeto);
  }
  return (
    <>
    <div className='contenedorBtn'>
      <Input
        type="text"
        name="txtLibro"
        placeholder="Libro"
        label="Ingresa un Libro"
        onChange={onChangeLibro}
        value={libro}
      />
      <Input
        type="text"
        name="txtFecha"
        placeholder="Fecha"
        label="Ingresa una fecha"
        onChange={onChangeFecha}
        value={fecha}
      />
      <Input
        type="text"
        name="txtCliente"
        placeholder="Cliente"
        label="Ingresa un Cliente"
        onChange={onChangeNombreCliente}
        value={cliente}
      />
      <PrimaryButton onClick={onAddClick}>Agregar</PrimaryButton>
    </div>
    </>
  );
}

const TodoFormList = ({ todoFormList, toggleTodo})=>{
  console.log(todoFormList);
  const formItems = (todoFormList || []).map(([key, {msg, done}], i) => {
    console.log('TodoFormListMap', [key, { msg, done }]);
    return ( <TodoFormListItem key={key} id={key} onToggleDone={toggleTodo} done={done}>{msg}</TodoFormListItem>);
  });
  return (
    <div className='ContenedorTabla'>
      <table>
        <tr>
          <th className='Celdas'>Libro</th>
          <th className='Celdas'>Fecha</th>
          <th className='Celdas'>Cliente</th>
        </tr>
      {formItems}
      </table>
   </div>
  );
}

const TodoFormListItem = ({onToggleDone, id, done, children})=> {
  const style = {textDecoration:((done)?"line-through":"none")}
  console.log('TodoFormListItem', style);
  // textDecoration:((done)?"line-through":"none")
  return (
      <tr>
          <td className='filas'> {children.libro} </td>
          <td className='filas'> {children.fecha} </td>
          <td className='filas'> {children.cliente} </td>
      </tr>
  );
}
export default Todos;
