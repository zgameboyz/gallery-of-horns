import './App.css';
import React from 'react';
import Main from './Main.js';
import SelectedBeast from './SelectedBeast.js';
//import Header from './Header.js';
class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      shouldShowModal: false
    }; 
  }

  showModal = () => {
    this.setState({
      shouldShowModal: true,
    });
  }
  hideModal = () => {
    this.setState({
      shouldShowModal: false
    });
  }


  render() {


    return (
      <>
        {//<Header></Header>
        }
        <Main></Main>
        <SelectedBeast></SelectedBeast>
        <footer><h3>Author: Joel Connell</h3></footer>


      </>
    );
  }

}


export default App;
