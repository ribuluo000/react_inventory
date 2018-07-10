/*
 *
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { makeSelectError, makeSelectLoading, makeSelectRepos } from "containers/App/selectors";
import MyButton from "components/MyButton";
import messages from "containers/App/messages";
import { InputItem, List, View, WhiteSpace } from "antd-mobile";
import BaseComponent from "../Base/BaseComponent";
// import 'antd-mobile/dist/antd-mobile.css';
/* eslint-disable react/prefer-stateless-function */
export default class ViewIndex extends BaseComponent {

  initData = () => {
    this.input_value_user_name = '';
    this.input_value_password = '';
    this.input_value_confirm_password = '';
  };

  constructor(props) {
    super(props);
    this.initData();
  }

  /**
   * when initial state user_name is not null, submit the form to load repos
   */
  componentDidMount() {

  }

  onChange_user_name = (value) => {
    console.log('onChange_user_name', value);
    this.input_value_user_name = value;
  };
  onChange_password = (value) => {
    console.log('onChange_password', value);
    this.input_value_password = value;
  };
  onChange_confirm_password = (value) => {
    console.log('onChange_confirm_password', value);
    this.input_value_confirm_password = value;
  };

  check_info = () => {
    const {
      intl,
    } = this.props;
    if (my_string_util.is_empty(this.input_value_user_name)) {
      view_util.show_toast(intl.formatMessage(messages.user_name_can_not_be_empty));
      return false;

    }
    if (my_string_util.is_empty(this.input_value_password)) {
      view_util.show_toast(intl.formatMessage(messages.password_can_not_be_empty));
      return false;

    }
    if (my_string_util.is_empty(this.input_value_confirm_password) || this.input_value_password !== this.input_value_confirm_password) {
      view_util.show_toast(intl.formatMessage(messages.confirm_password_is_different_from_password));
      return false;

    }

    return true;

  };

  api_call = async () => {

    let user_name = this.input_value_user_name;
    let password = this.input_value_password;
    let confirm_password = this.input_value_confirm_password;
    let body = {
      user_name,
      password,
      repeat_password : confirm_password,
    };

    view_util.show_loading();
    let jsonObj = await api_util.register(body);
    view_util.hide_loading();

    if (!jsonObj) {
      return;
    }

    if (!(jsonObj.get('code') == CODE.code_0.code)) {
      api_util.on_custom_exception_common(jsonObj);
      return;
    }
    api_util.on_success_common(jsonObj);
    this.props.onPress_has_account_go_login();

  };

  onPress__button__done = () => {
    console.log(this);
    if (!this.check_info()) {
      return;
    }

    this.api_call();

  };

  render() {
    const {
      intl,
      onPress_has_account_go_login,
    } = this.props;

    const onChange_user_name = this.onChange_user_name;
    const onChange_password = this.onChange_password;
    const onChange_confirm_password = this.onChange_confirm_password;
    const onPress__button__done = this.onPress__button__done;

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
            onChange={onChange_user_name}
            placeholder={intl.formatMessage(messages.user_name)}
          />
          <WhiteSpace />

          <InputItem
            id="password"
            type="password"
            onChange={onChange_password}
            placeholder={intl.formatMessage(messages.password)}
          />
          <WhiteSpace />

          <InputItem
            id="confirm_password"
            type="password"
            onChange={onChange_confirm_password}
            placeholder={intl.formatMessage(messages.confirm_password)}
          />

          <WhiteSpace/>

          <MyButton
            type="primary"
            children={intl.formatMessage(messages.register)}
            onPress={onPress__button__done}
          />
          <WhiteSpace/>
          <WhiteSpace/>
          <WhiteSpace/>
          <MyButton
            size={'small'}
            onPress={onPress_has_account_go_login}
          >
            {intl.formatMessage(messages.has_account_go_login)}
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

};

