import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';

const Jocker = () => {
    const [joke,setJoke]=useState ({setup:'',punchline:''})
    const Url ="https://official-joke-api.appspot.com/jokes/random";
    
    useEffect(()=>{
        // console.log('In useEffect')
        async function getFirstJoke(){
        const res=await fetch (Url);
        const jsonRes=await res.json();
        console.log(jsonRes);
        setJoke(jsonRes)
        }
        
        getFirstJoke();
    },[]);
    
    const getNewJoke = async()=>{//whenever we use 'await' the function must 'asynchronous';
        const res=await fetch (Url);
        const jsonRes=await res.json();
        console.log(jsonRes);
        setJoke(jsonRes)
    }
  return (
    <div>
        <h1 style={{color:'red'}}>Welcome to Hemant Jocker App</h1>
        <h2>{joke.setup}</h2>
        <h3>{joke.punchline}</h3>
        <Button variant="contained" color='success' onClick={getNewJoke}>Get New Joke</Button>

    </div>
  )
}

export default Jocker