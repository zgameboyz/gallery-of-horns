import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';
import { Card } from 'react-bootstrap';
import CardColumns from 'react-bootstrap/CardColumns'
class Main extends React.Component {
  render() {
    console.log(data[0]);
    
    return (

      <>
        <h1>Blah blah blah</h1>
        <CardColumns>
        {data.map((datas, i) =>
        
         <HornedBeast key = {i} title = {datas.title} imgUrl ={datas.image_url} description ={datas.description} horns ={datas.horns}></HornedBeast>


        )}

</CardColumns>
      
      </>

    );
  }
}
export default Main;