/**
 * Created by nick on 2018/6/24.
 */
/*
 * BaseComponent
 *
 * This is the BaseComponent of our App, all component should extends this
 */

import React from "react";
import { makeSelectError, makeSelectLoading } from "containers/App/selectors";
/* eslint-disable react/prefer-stateless-function */
class BaseComponent extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log('Component WILL MOUNT!')
  }

  componentDidMount() {
    console.log('Component DID MOUNT!')
  }

  componentWillReceiveProps(newProps) {
    console.log('Component WILL RECEIVE PROPS!')
  }

  // shouldComponentUpdate(newProps, newState) {
  //   return true;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('Component WILL UPDATE!');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component DID UPDATE!')
  }

  componentWillUnmount() {
    console.log('Component WILL UNMOUNT!')
  }

}

export default (BaseComponent);
