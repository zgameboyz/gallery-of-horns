import './App.css';
import React from 'react';
import Main from './Main.js';
import SelectedBeast from './SelectedBeast.js';
import data from './data.json';
//import Header from './Header.js';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      shouldShowModal: false,
      currentBeast: {}
    };
  }

  showModal = (beastNum) => {
    this.setState({
      shouldShowModal: true,
      currentBeast: data[beastNum]
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
        <Main 
          showModal={this.showModal} 
          data={data} />
        <SelectedBeast 
          showModal={this.state.shouldShowModal}
          hideModal={this.hideModal}
          devil={this.state.currentBeast}></SelectedBeast>
        <footer><h3>Author: Joel Connell</h3></footer>


      </>
    );
  }

}


export default App;
