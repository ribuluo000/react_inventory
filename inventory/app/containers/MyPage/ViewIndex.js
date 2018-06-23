/*
 * LoginPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { FormattedMessage } from "react-intl";
import { makeSelectError, makeSelectLoading, makeSelectRepos } from "containers/App/selectors";
import MyButton from "components/MyButton";
import messages from "./messages";
import { InputItem, List, View, WhiteSpace } from "antd-mobile";
// import 'antd-mobile/dist/antd-mobile.css';
/* eslint-disable react/prefer-stateless-function */
export default class ViewIndex extends React.PureComponent {
  /**
   * when initial state user_name is not null, submit the form to load repos
   */
  componentDidMount() {

  }

  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };

    return (
      <View>
        <Helmet>
          <title>登录</title>
        </Helmet>

        <List renderHeader={() => ''}>
          <WhiteSpace />

          <FormattedMessage {...messages.placeholder__user_name}>
            {
              msg => (
                <InputItem
                  id="user_name"
                  type="text"
                  value={this.props.user_name}
                  onChange={this.props.onChange_user_name}
                  placeholder={msg}
                />
              )
            }

          </FormattedMessage>

          <WhiteSpace />

          <FormattedMessage {...messages.placeholder__password}>
            {
              msg => (
                <InputItem
                  id="password"
                  type="password"
                  value={this.props.password}
                  onChange={this.props.onChange_password}
                  placeholder={msg}
                />
              )
            }

          </FormattedMessage>

          <WhiteSpace/>

          <FormattedMessage {...messages.button__login}>
            {
              msg => (
                <MyButton
                  type="primary"
                  children={msg}
                  onPress={this.props.onPress_login}
                />
              )
            }

          </FormattedMessage>

        </List>

        <WhiteSpace />

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

