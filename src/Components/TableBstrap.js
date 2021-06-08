import React,{useState,useEffect} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { Container} from 'react-bootstrap';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {GetMemes} from '../Services/CallApis'
const TableBoots=()=>{
    const [DataMemes,setDataMemes]=useState([])

    useEffect(()=>{
        MethodGetMemeData()

    },[])

    const MethodGetMemeData = async ()=>{
        const MemeDatosFetch = await GetMemes('get_memes')
        setDataMemes(MemeDatosFetch.data.memes)
        
    }
    const pagination = paginationFactory({
        sizePerPageList: [
        {text: '5', value: 5},
        {text: '10', value: 10},
        {text: 'All', value: DataMemes.length}
        ]
        }
    )

    const columns = [{
    dataField: 'id',
    text: 'ID',
    sort: true
    }, {
    dataField: 'name',
    text: 'Nombre',
    sort: true
    }, {
    dataField: 'url',
    text: 'Meme',
    sort: true,
    formatter: (cell, row, rowIndex, extraData) => (
        <img width={64}
        height={64}
        className="mr-3"
        src={row.url}
        alt="Generic placeholder"/>
    ),
    }];

    const defaultSorted = [{
    dataField: 'name',
    order: 'desc'
    }];

    return<Container><BootstrapTable
    bootstrap4
    keyField="id"
    data={ DataMemes }
    columns={ columns }
    pagination={ pagination }
    defaultSorted={ defaultSorted } 
    /></Container>
}

export default TableBoots