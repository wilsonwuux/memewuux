import React, {useState,useEffect} from 'react';
import { Container,Button,Row,Card ,Form,Col,Image } from 'react-bootstrap';
import {GetMemes} from '../Services/CallApis'
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";

const CreateMemesControl=()=>{

const[captext,setText]=useState([])
const[memeIndex,setMemeIndex]=useState(0)
const [DataMemes,setDataMemes]=useState([])
const [capMemes,setCapMemes]=useState(null)
const[showMeme,setShowMeme]=useState(true)
const[showNewMeme,setShowNewMeme]=useState(false),
    {
        register,
        formState: { errors },
        handleSubmit
    } = useForm({
        criteriaMode: "all"
    });


    useEffect(()=>{
    MethodGetMemeData()

},[])

useEffect(()=>{
    if(DataMemes.length){
    setText(Array(DataMemes[memeIndex].box_count).fill(''))
    }
},[DataMemes,memeIndex])

const ramdomIndex =(min, max)=> {

    setShowMeme(true)
    setShowNewMeme(false)
    return setMemeIndex(Math.round(Math.random() * (max - min)) + min)
}
const MethodGetMemeData = async ()=>{
    const MemeDatosFetch = await GetMemes('get_memes')
    const Memes=MemeDatosFetch.data.memes.length
    setDataMemes((Memes >0)?MemeDatosFetch.data.memes:[]
        )
}

const updateText=(ev,inde)=>{

    const Valortexto = ev.target.value || '';
    setText(
        captext.map((captur,indice)=>{
        if(inde===indice){
            return Valortexto
        }else{
            return captur
        }
    }))
    
}


const GenerateMemesNew=()=>{
    document.getElementById('create-course-form').reset()
    setShowMeme(false)
    setShowNewMeme(true)
    const MemeSelected=DataMemes[memeIndex]
    const formData= new FormData();
    formData.append('username','WUUXDJPRODUCER') 
    formData.append('password','Abc123456')
    formData.append('template_id',MemeSelected.id)
    captext.forEach((capt,index)=>formData.append(`boxes[${index}][text]`,capt))

    fetch('https://api.imgflip.com/caption_image',{
        method:'POST',
        body:formData
    }).then(res=>{
        res.json().then(res=>{
            setCapMemes(res.data.url)
        })
    })

}

const download = () => {
    fetch(capMemes)
        .then(response => {
            response.blob().then((blob) => {
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "image.png"); //or any other extension
            document.body.appendChild(link);
            link.click();
            });
        })
        .catch(err => {
            console.log(err);
        });
    };


    return<Container>
    <Row>
    <Col>
    <Card>
        <Card.Header>NUEVO MEME</Card.Header>
        <Card.Body>
    <Form onSubmit={handleSubmit(GenerateMemesNew)} id="create-course-form">
        <Form.Group>
        {(captext.length)&&captext.map((element,index)=><Form.Group >
            <Form.Label>Ingrese texto</Form.Label>
            <Form.Control 
                name={`form-control-${index}`} 
                key={index} 
                placeholder='ingresa tu texto' 
                {...register(`boxCounts_${index}`, {
                required: "Este campo esta vacio",
                })}
                onChange={(e)=>{updateText(e,index)}}  
            />
                <ErrorMessage
                errors={errors}
                name={`boxCounts_${index}`}
                render={({ messages }) => {
                return messages
                    ? Object.entries(messages).map(([type, message]) => (
                        <p className="alert alert-danger" key={type}>{message}</p>
                    ))
                    : null;
                }}
            />
            </Form.Group>)}
        </Form.Group>
        <Form.Group >
        <Form.Text className="text-muted">
            Elige tu MEME favorito y agregale texto personalizado.
        </Form.Text>
        </Form.Group>
        <Button variant="primary" type='submit' >
        Generar
        </Button>
    </Form>
        </Card.Body>
    </Card>


    </Col>
    <Col>
    <Card className='align-items-center justify-items-center'>
        <Card.Header>
        {(DataMemes.length)&&DataMemes[memeIndex].name}

        </Card.Header>
        <Card.Title  ><Container className='align-items-center justify-items-center'>
                {(capMemes!=null)?<a className='btn btn-success'
            download
            onClick={() => download()}
        >
            <i className="fa fa-download" />
            download
        </a>:''}
                    <Button onClick={()=>ramdomIndex(0,100)} variant="danger"> CARGAR NUEVO MEME </Button>

        </Container>
        </Card.Title>
        <Card.Body>
            {showMeme&&<Image src={(DataMemes.length)&&DataMemes[memeIndex].url}
            width="350" height="300" />}

            {showNewMeme&&<Image src={capMemes}
            width="350" height="300" />}
        </Card.Body>
    </Card>
    </Col>
    
    </Row>
</Container>
}

export default CreateMemesControl
