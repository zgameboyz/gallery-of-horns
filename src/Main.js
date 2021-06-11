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
      showModal: false
      
    };
  }

  render() {
    

    return (

      <>
        <Header></Header>
        <SelectedBeast />
        <CardColumns>
          {this.props.data.map((datas, i) =>

            <HornedBeast
              beastNum={i}
              key={i}
              title={datas.title}
              imgUrl={datas.image_url}
              description={datas.description}
              horns={datas.horns}
              showModal={this.props.showModal}
              hideModal={this.hideModal}
            />
          )}

        </CardColumns>

      </>

    );
  }
}
export default Main;