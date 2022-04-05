import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {privateAxios} from '../../../Lib/apiClient'

import Loading from '../../UX/Loading/Loading';
import Clientes from './Clientes'

const ClientesPage =()=>{
    const dispatch = useDispatch();
    useEffect(
        ()=>{
            const loadData = async()=>{
                dispatch({type:'CLIENTES_LOADING',payload:{}})
                try {
                    const {data:{clientes, status}} = await privateAxios.get('api/v1/clientes/all');//aqui va el nombre de la tabla   
                    console.log(clientes);
                    dispatch({type:'CLIENTES_SUCCESS',payload:{clientes}})//aqui va el mismo nombre de la tabla
                } catch (ex) {
                    console.log(ex);
                    dispatch({type:'CLIENTES_FAILED',payload:{}});
                    console.log(ex);
                }
            }
            loadData();
        }
    ,[]);

    const {clientes, isLoading, error}= useSelector(state=>state.clientes);
    return(
        <>
            {isLoading && (<Loading />)}
            <Clientes clientes = {clientes} />
        </>
    )
}

export default ClientesPage;