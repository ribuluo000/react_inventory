/**
 * Created by nick on 2018/6/24.
 */
/*
 * BaseComponent
 *
 * This is the BaseComponent of our App, all component should extends this
 */

import React from "react";
import { injectIntl } from "react-intl";
import { makeSelectError, makeSelectLoading, } from "containers/App/selectors";
/* eslint-disable react/prefer-stateless-function */
class BaseComponent extends React.PureComponent {

  constructor(props){
    super(props);
  }

  componentDidMount() {

    // const { intl } = this.props;
    // console.log(intl);
  }

}

export default (BaseComponent);
