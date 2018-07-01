/*
 * LoginPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { FormattedMessage } from "react-intl";
import messages from "./messages";
import { List, View, WhiteSpace } from "antd-mobile";
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
      // intl,
      user_name,

      onPress__button__base_info,

      onPress__button__bill,

      onPress__button__provider,

      onPress__button__customer,

      onPress__button__product,

      onPress__button__logout,

    } = this.props;
    // console.log(intl);

    return (
      <View>
        <Helmet>
          {/*<title>{intl.formatMessage(messages.button__base_info)}</title>*/}
          <title>我的</title>
        </Helmet>

        <List>
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

          <FormattedMessage {...messages.button__base_info}>
            {
              msg => (
                <Item
                  arrow="horizontal"
                  extra={''}
                  onClick={onPress__button__base_info}
                >
                  {msg}
                </Item>
              )
            }

          </FormattedMessage>

          <FormattedMessage {...messages.button__bill}>
            {
              msg => (
                <Item
                  arrow="horizontal"
                  extra={''}
                  onClick={onPress__button__bill}

                >
                  {msg}
                </Item>
              )
            }

          </FormattedMessage>

          <FormattedMessage {...messages.button__provider}>
            {
              msg => (
                <Item
                  arrow="horizontal"
                  extra={''}
                  onClick={onPress__button__provider}
                >
                  {msg}
                </Item>
              )
            }

          </FormattedMessage>

          <FormattedMessage {...messages.button__customer}>
            {
              msg => (
                <Item
                  arrow="horizontal"
                  extra={''}
                  onClick={onPress__button__customer}
                >
                  {msg}
                </Item>
              )
            }

          </FormattedMessage>

          <FormattedMessage {...messages.button__product}>
            {
              msg => (
                <Item
                  arrow="horizontal"
                  extra={''}
                  onClick={onPress__button__product}
                >
                  {msg}
                </Item>
              )
            }

          </FormattedMessage>

        </List>
        < WhiteSpace/>
        < WhiteSpace/>
        < WhiteSpace/>
        < WhiteSpace/>
        < WhiteSpace/>

        <List>
          <FormattedMessage {...messages.button__logout}>
            {
              msg => (
                <Item
                  arrow="horizontal"
                  extra={''}
                  onClick={onPress__button__logout}
                >
                  {msg}
                </Item>
              )
            }

          </FormattedMessage>

        </List>

      </View>
    );
  }
}

ViewIndex.propTypes = {
  loading : PropTypes.bool,
  error : PropTypes.oneOfType([ PropTypes.object, PropTypes.bool ]),
  repos : PropTypes.oneOfType([ PropTypes.array, PropTypes.bool ]),
  onPress_login : PropTypes.func,
  user_name : PropTypes.string,
  onChange_user_name : PropTypes.func,
  onChange_password : PropTypes.func,

};


