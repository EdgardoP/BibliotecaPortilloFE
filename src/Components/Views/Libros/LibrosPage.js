import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {privateAxios} from '../../../Lib/apiClient'

import Loading from '../../UX/Loading/Loading';
import Libros from './Libros'

const LibrosPage =()=>{
    const dispatch = useDispatch();
    useEffect(
        ()=>{
            const loadData = async()=>{
                dispatch({type:'LIBROS_LOADING',payload:{}})
                try {
                    const {data:{libros, status}} = await privateAxios.get('api/v1/libros/all');//aqui va el nombre de la tabla   
                    console.log(libros);
                    dispatch({type:'LIBROS_SUCCESS',payload:{libros}})//aqui va el mismo nombre de la tabla
                } catch (ex) {
                    console.log(ex);
                    dispatch({type:'LIBROS_FAILED',payload:{}});
                }
            }
            loadData();
        }
    ,[]);

    const {libros, isLoading, error}= useSelector(state=>state.libros);
    return(
        <>
            {isLoading && (<Loading />)}
            <Libros libros = {libros} />
        </>
    )
}

export default LibrosPage;