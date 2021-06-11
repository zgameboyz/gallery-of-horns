import React from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


class Filter extends React.Component{
 
  constructor(props){
    super(props);

    this.state = {
      hornCount: 0,
      beastList: this.props.allBeasts
    }
  }
  handleFormSubmit = e => {
    e.preventDefault();

    let beastArray = this.props.allBeasts.filter(beast => e.target.filterHorns.value == beast.horns);
    this.setState({
      beastList:beastArray,
      hornCount:e.target.filterHorns.value
      
    });
    console.log(beastArray)
  }
 
 
  render(){
return(
<Form onSubmit={this.handleFormSubmit}>
  
  <Form.Group controlId="filterHorns">
    <Form.Label>Filter by Number of Horns</Form.Label>
    <Form.Control as="select">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="100">100</option>
    </Form.Control>
    </Form.Group>
    <Button variant="warning" type="submit" >
    Submit
  </Button>
  
</Form>
)};
}
export default Filter;