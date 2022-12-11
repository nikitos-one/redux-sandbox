import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from '@reduxjs/toolkit';
import {actions} from "../counterSlice";

const Counter = ({ counter, decremented, incremented, random }) => {
  return (
    <div className="jumbotron">
      <h2>{ counter }</h2>
      <button
        className="btn btn-primary"
        onClick={decremented}
      >DEC</button>
      <button
        className="btn btn-primary"
        onClick={incremented}
      >INC</button>
      <button
        className="btn btn-primary"
        onClick={random}
      >RND</button>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    counter: state.value
  }
};

const mapDispatchToProps = (dispatch) => {

  const { incremented, decremented, random} = bindActionCreators(actions, dispatch);

  return {
    decremented,
    incremented,
    random: () => {
      const payload = Math.floor(Math.random() * 10);
      random(payload);
    }
  }
};



export default connect(mapStateToProps, mapDispatchToProps)(Counter);