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
        allBeasts={this.props.allData}
        setData={this.props.setData}
        />
        <SelectedBeast />
        <CardColumns>
         
          {this.props.currentData.map((data, i) =>

            <HornedBeast
              beastNum={i}
              key={i}
              title={data.title}
              imgUrl={data.image_url}
              description={data.description}
              horns={data.horns}
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