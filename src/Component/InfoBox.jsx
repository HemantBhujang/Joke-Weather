import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const InfoBox = ({data}) => {
  return (
    <div style={{
        display:'flex',
        justifyContent:'center',
        alignItems:"center",
        marginTop:'50px'
    
    }}>
     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
        title="Weather Icon"
        // {data.icon}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {data.city_name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         {`Temparature : ${(data.temp -272.15).toFixed(2)}°C`}    <br />
         {`Max Temparature : ${(data.temp_max -272.15).toFixed(2)}°C`}    <br />
         {`Min Temparature : ${(data.temp_min -272.15).toFixed(2)}°C`}    <br />
         {data.humidity }
        </Typography>
      </CardContent>
    </Card>
    </div>
  )
}

export default InfoBox