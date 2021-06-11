import React from 'react';
import HornedBeast from './HornedBeast';
import CardColumns from 'react-bootstrap/CardColumns';
import SelectedBeast from './SelectedBeast.js';
import Filter from './filter.js';
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
        <Filter 
        allBeasts={this.props.data}
        />
        <SelectedBeast />
        <CardColumns>
         
          {this.props.Filter.map((datas, i) =>

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