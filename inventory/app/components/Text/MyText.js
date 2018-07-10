/**
 * Created by nick on 2018/6/23.
 */
import React from "react";
import PropTypes from "prop-types";

import {Text} from 'antd-mobile';
export default class MyText extends React.PureComponent{

  static propTypes = {
    onPress:PropTypes.func,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    onPress:undefined,
  };


  render(){
    let {onPress,...props} = this.props;
    return (
      <Text {...props} onClick={onPress}/>
    );
  }
}
