import React,{useState} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';



const SearchBox = ({setDataProp}) => {
const [city,setCity]=useState('');
const Key ='f1ab6230f95a3c250cc1aa7a49117a1a'
const getWeatherData= async ()=>{
    console.log(city);
    const finalUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Key}`
    const res=await axios .get(finalUrl);
    console.log(res);
    const weatherData = {
      temp: res.data.main.temp,
      temp_max: res.data.main.temp_max,
      temp_min:res.data.main.temp_min,
      humidity: res.data.main.humidity,
      icon: res.data.weather[0].icon,
      city_name: res.data.name
    }
    console.log(weatherData)
    setDataProp(weatherData)
    setCity('');

}
  return (
    <div>
        <TextField value={city} id="outlined-basic" label="Enter City Name" variant="outlined" onChange={(e)=>setCity(e.target.value)} />
        <br />
        <br />
        <Button onClick={getWeatherData} variant="contained" startIcon={<SearchIcon />} color='success'>
        Search
      </Button>
      

    </div>
  )
}

export default SearchBox 