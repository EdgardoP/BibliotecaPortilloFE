import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {privateAxios} from '../../../Lib/apiClient'

import Loading from '../../UX/Loading/Loading';
import Fichas from './fichas';


const FichasPage =()=>{
    const dispatch = useDispatch();
    useEffect(
        ()=>{
            const loadData = async()=>{
                dispatch({type:'FICHAS_LOADING',payload:{}})
                try {
                    const {data:{fichas, status}} = await privateAxios.get('api/v1/fichas/all');//aqui va el nombre de la tabla   
                    console.log(fichas);
                    dispatch({type:'FICHAS_SUCCESS',payload:{fichas}})//aqui va el mismo nombre de la tabla
                } catch (ex) {
                    console.log(ex);
                    dispatch({type:'FICHAS_FAILED',payload:{}});
                }
            }
            loadData();
        }
    ,[]);

    const {fichas, isLoading, error}= useSelector(state=>state.fichas);
    return(
        <>
            {isLoading && (<Loading />)}
            <Fichas fichas = {fichas} />
        </>
    )
}

export default FichasPage;