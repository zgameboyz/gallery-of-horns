import React, { Component } from 'react';
import HornedBeast from './HornedBeast';
class Main extends React.Component {
  render() {

    
    return (

      <>
        <h1>Blah blah blah</h1>
        <HornedBeast title ='hornedAnimal' imgUrl ='https://images.unsplash.com/photo-1522521612083-730fb19791c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1351&q=80' description ="This is a cow but a male with horns and shaggy hair"></HornedBeast>

        <HornedBeast title ='hornedAnimal' imgUrl ='https://images.unsplash.com/photo-1522521612083-730fb19791c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1351&q=80' description ="This is a cow but a male with horns and shaggy hair"></HornedBeast>
      
      </>

    );
  }
}
export default Main;