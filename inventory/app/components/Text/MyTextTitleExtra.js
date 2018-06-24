/**
 * Created by nick on 2018/6/24.
 */

import React from "react";
import PropTypes from "prop-types";

import {Flex} from 'antd-mobile';
import MyTextTitle from "./MyTextTitle";
import MyTextExtra from "./MyTextExtra";
export default class MyTextTitleExtra extends React.PureComponent{

  static propTypes = {
    onPress:PropTypes.func,
    title: PropTypes.string,
    extra: PropTypes.string,
  };

  static defaultProps = {
    onPress:undefined,
  };


  render(){
    let {onPress,title,extra} = this.props;
    return (
      <Flex
        justify="between"
        direction="row"
        onClick={onPress}

      >
        <MyTextTitle>
          {title}
        </MyTextTitle>
        <MyTextExtra>
          {extra}
        </MyTextExtra>
      </Flex>
    );
  }
}
