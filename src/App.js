import React from 'react';
import { connect } from 'react-redux';
import { addFeature, removeFeature } from "./actions"
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {

  const removeItem = item => {
    console.log('remove click')
    props.removeFeature(item)
  };

  const addItem = item => {
    console.log('add click')
    props.addFeature(item);    
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeItem={removeItem} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} addFeature={addItem} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  // console.log ('state', state)
  return {...state};
};

export default connect(
  mapStateToProps,
  {addFeature, removeFeature}
  )(App);
