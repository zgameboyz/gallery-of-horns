import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';
import CardColumns from 'react-bootstrap/CardColumns'
import Header from './Header.js';
import SelectedBeast from './SelectedBeast.js';
class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      currentBeast: data[0]
    };
  }

  showModal = (beastNum) => {

    this.setState({
      showModal: true,
      currentBeast: data[beastNum],
      
    });
  }
  hideModal = () => {
    this.setState({
      showModal: false,
      currentBeast: data[0]
    });
  }

  render() {
    

    return (

      <>
        <Header>Blah blah blah</Header>
        <SelectedBeast showModal={this.state.showModal} hideModal={this.hideModal} devil={this.state.currentBeast}/>
        <CardColumns>
          {data.map((datas, i) =>

            <HornedBeast
              beastNum={i}
              key={i}
              title={datas.title}
              imgUrl={datas.image_url}
              description={datas.description}
              horns={datas.horns}
              showModal={this.showModal}
              hideModal={this.hideModal}
            />
          )}

        </CardColumns>

      </>

    );
  }
}
export default Main;