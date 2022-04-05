import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {privateAxios} from '../../../Lib/apiClient'

import Loading from '../../UX/Loading/Loading';
import Empleados from './empleados';

const EmpleadosPage =()=>{
    const dispatch = useDispatch();
    useEffect(
        ()=>{
            const loadData = async()=>{
                dispatch({type:'EMPLEADOS_LOADING',payload:{}})
                try {
                    const {data:{empleados, status}} = await privateAxios.get('api/v1/empleados/all');//aqui va el nombre de la tabla   
                    console.log(empleados);
                    dispatch({type:'EMPLEADOS_SUCCESS',payload:{empleados}})//aqui va el mismo nombre de la tabla
                } catch (ex) {
                    console.log(ex);
                    dispatch({type:'EMPLEADOS_FAILED',payload:{}});
                }
            }
            loadData();
        }
    ,[]);

    const {empleados, isLoading, error}= useSelector(state=>state.empleados);
    return(
        <>
            {isLoading && (<Loading />)}
            <Empleados empleados = {empleados} />
        </>
    )
}

export default EmpleadosPage;