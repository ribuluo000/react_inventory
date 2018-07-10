/*
 * LoginPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { makeSelectError, makeSelectLoading, makeSelectRepos } from "containers/App/selectors";
import MyButton from "components/MyButton";
import messages from "containers/App/messages";
import { InputItem, List, Text, View, WhiteSpace } from "antd-mobile";
import MyText from "../../components/Text/MyText";
// import 'antd-mobile/dist/antd-mobile.css';
/* eslint-disable react/prefer-stateless-function */
export default class ViewIndex extends React.PureComponent {
  /**
   * when initial state user_name is not null, submit the form to load repos
   */
  componentDidMount() {

  }

  render() {
    const {
      loading,
      error,
      intl,
      user_name,
      password,
      onChange_user_name,
      onChange_password,
      onPress_login,
      onPress_register,
    } = this.props;

    return (
      <View>
        <Helmet>
          <title>{intl.formatMessage(messages.login)}</title>
        </Helmet>

        <List renderHeader={() => ''}>
          <WhiteSpace />
          <InputItem
            id="user_name"
            type="text"
            value={user_name}
            onChange={onChange_user_name}
            placeholder={intl.formatMessage(messages.user_name)}
          />
          <WhiteSpace />

          <InputItem
            id="password"
            type="password"
            value={password}
            onChange={onChange_password}
            placeholder={intl.formatMessage(messages.password)}
          />

          <WhiteSpace/>

          <MyButton
            type="primary"
            children={intl.formatMessage(messages.login)}
            onPress={onPress_login}
          />
          <WhiteSpace/>
          <MyButton
            size={'small'}
            onPress={onPress_register}
          >
            {intl.formatMessage(messages.register)}
          </MyButton>
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
  onPress_has_account_go_login : PropTypes.func,
  user_name : PropTypes.string,
  onChange_user_name : PropTypes.func,
  onChange_password : PropTypes.func,

};

