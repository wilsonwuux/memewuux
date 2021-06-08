import React,{useEffect,useState} from 'react';
import {Carousel,Container} from 'react-bootstrap'
import {GetMemes} from '../Services/CallApis'
const ComponentCarusel = ()=>{
    const [DataMemes,setDataMemes]=useState([])

    useEffect(()=>{
        MethodGetMemeData()

    },[])

    const MethodGetMemeData = async ()=>{
        const MemeDatosFetch = await GetMemes('get_memes')
        setDataMemes(MemeDatosFetch.data.memes)
        
    }

        return <Container><Carousel>
        <Carousel.Item interval={1000}>
            <img
            className="d-block w-100"
            src={(DataMemes.length)&&DataMemes[44].url}
            alt="First slide"
            height="400"
            />

        </Carousel.Item>
        <Carousel.Item interval={1000}>
            <img
            className="d-block w-100"
            src={(DataMemes.length)&&DataMemes[5].url}
            alt="First slide"
            height="400"
            />

        </Carousel.Item>
        <Carousel.Item interval={1000}>
            <img
            className="d-block w-100"
            src={(DataMemes.length)&&DataMemes[12].url}
            alt="First slide"
            height="400"
            />

        </Carousel.Item>
        </Carousel>
        </Container>
}

export default ComponentCarusel