import React,{useState,useEffect} from 'react';
import { Container,Button,ButtonGroup,Row,Card } from 'react-bootstrap';
import {GetMemes} from '../Services/CallApis'
const ContainerMeme =()=>{

const [DataMemes,setDataMemes]=useState([])
const [Slice,setSlice]=useState(5)

useEffect(()=>{
    MethodGetMemeData()
},[])

const MethodGetMemeData = async ()=>{
    const MemeDatosFetch = await GetMemes('get_memes')
    setDataMemes((MemeDatosFetch.data.memes.length >0)?MemeDatosFetch.data.memes:[]
        )
}

let items =DataMemes;
let Newitems = items.slice(0,Slice)

const GetDataMemes=({Newitems})=>{
    return <Container >{Newitems.map((element,index)=><Card
    key={element.id} 
    style={{ 
                marginTop:'0px', 
                height:"14rem", 
                width: '12rem',
                display:'inline-block',
                margin:'4px'}}>
            <Row>
            <Card.Img variant="top" src={element.url} width="180" height="100" />
            <Card.Body>
            <Card.Title  key={index} >{element.name}</Card.Title>
            <Card.Text> Codigo: {element.id} </Card.Text>
            </Card.Body>
            </Row>
            </Card>)}
            </Container>
}

    return <Container className='align-items-center justify-items-center'>

                <ButtonGroup aria-label="Basic example">
                    <Button onClick={()=>{(Newitems.length&&(Newitems.length>=5))?setSlice(Slice-5):alert('No hay mas elementos' )}} variant="danger"> Menos </Button>
                    <Button variant="dark"> Elementos </Button>
                    <Button onClick={()=>{(Slice==100)?alert('Todos los datos fueron cargados'):setSlice(Slice+5)}} variant="success"> Mas </Button>
                </ButtonGroup>
                <GetDataMemes Newitems={Newitems}/> 
            </Container>

}

export default ContainerMeme