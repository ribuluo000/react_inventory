import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import messages from "containers/App/messages";
import { List, NavBar, Text, View, WhiteSpace } from "antd-mobile";
import BaseComponent from "containers/Base/BaseComponent";
const Item = List.Item;
/* eslint-disable react/prefer-stateless-function */
export default class ViewIndex extends BaseComponent {

  constructor(props) {
    super(props);
  }

  /**
   * when initial state user_name is not null, submit the form to load repos
   */
  componentDidMount() {

  }

  render() {

    const {
      intl,
      user_name,

      onPress__button__base_info,

      onPress__button__bill,

      onPress__button__provider,

      onPress__button__customer,

      onPress__button__product,

      onPress__button__logout,

    } = this.props;

    return (
      <View>
        <Helmet>
          <title>{intl.formatMessage(messages.my)}</title>
        </Helmet>
        <NavBar
          mode="dark"
        >
          <Text>
            {intl.formatMessage(messages.my)}
          </Text>
        </NavBar>

        <List renderHeader={() => ''} >
          <Item
            // arrow="horizontal"
            extra={''}
            // onClick={onPress__button__logout}
          >
            {user_name}
          </Item>
        </List>

        <List renderHeader={() => ''}>
          <WhiteSpace />

          <Item
            arrow="horizontal"
            extra={''}
            onClick={onPress__button__base_info}
          >
            {intl.formatMessage(messages.base_info)}
          </Item>

          <Item
            arrow="horizontal"
            extra={''}
            onClick={onPress__button__bill}

          >
            {intl.formatMessage(messages.bill)}
          </Item>

          <Item
            arrow="horizontal"
            extra={''}
            onClick={onPress__button__provider}
          >
            {intl.formatMessage(messages.provider)}
          </Item>

          <Item
            arrow="horizontal"
            extra={''}
            onClick={onPress__button__customer}
          >
            {intl.formatMessage(messages.customer)}
          </Item>

          <Item
            arrow="horizontal"
            extra={''}
            onClick={onPress__button__product}
          >
            {intl.formatMessage(messages.product)}
          </Item>

        </List>
        < WhiteSpace/>
        < WhiteSpace/>
        < WhiteSpace/>
        < WhiteSpace/>
        < WhiteSpace/>

        <List>

          <Item
            arrow="horizontal"
            extra={''}
            onClick={onPress__button__logout}
          >
            {intl.formatMessage(messages.logout)}
          </Item>

        </List>

      </View>
    );
  }
}

ViewIndex.propTypes = {
  loading : PropTypes.bool,
  error : PropTypes.oneOfType([ PropTypes.object, PropTypes.bool ]),
  user_name : PropTypes.string,

};


