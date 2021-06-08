import React from 'react';

class HornedBeast extends React.Component{
  render(){
    return(
    <>  
    <h2>{this.props.title}</h2>
    <img src={this.props.imgUrl} alt = {this.props.description}/>
    <p>{this.props.description}</p>
    </>
    );  
  }
}
export default HornedBeast;