/*
 *
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Icon, InputItem, List, NavBar, Text, TextareaItem, View } from "antd-mobile";
import BaseComponent from "containers/Base/BaseComponent";
import messages from "containers/App/messages";
import MyButton from "components/MyButton/";
const Item = List.Item;
const Brief = Item.Brief;
/* eslint-disable react/prefer-stateless-function */
export default class ViewIndex extends BaseComponent {

  initData = () => {
    this.input_value_name = '';
    this.input_value_remark = '';
  };

  constructor(props) {
    super(props);
    this.initData();
  }

  componentDidMount() {

  }

  onChange_name = (value) => {
    this.input_value_name = value;
  };
  onChange_remark = (value) => {
    this.input_value_remark = value;
  };

  check_info = () => {

    const {
      intl,

    } = this.props;
    if (my_string_util.is_empty(this.input_value_name)) {
      view_util.show_toast(intl.formatMessage(messages.name_can_not_be_empty));
      return false;

    }

    return true;

  };

  api_call = async () => {

    let name = this.input_value_name;
    let remark = this.input_value_remark;

    let access_token = 'access_token';  //todo need change
    let user_id = '5b31b58fdd66b03a1dcb5434'; //todo need change
    let product_id = '5b327781bf5abe6fe4f38c6d'; //todo need change
    let body = {
      access_token,
      user_id,
      name,
      remark,
      product_id,
    };

    view_util.show_loading();
    let jsonObj = await api_util.batch_add(body);
    view_util.hide_loading();

    if (!jsonObj) {
      return;
    }

    if (!(jsonObj.get('code') == CODE.code_0.code)) {
      api_util.on_custom_exception_common(jsonObj);
      return;
    }
    api_util.on_success_common(jsonObj);
    this.props.onPress__button__done();

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

      user_name,

      onPress__button__back,

    } = this.props;

    const onChange_name = this.onChange_name;
    const onChange_telephone = this.onChange_telephone;
    const onChange_remark = this.onChange_remark;
    const onPress__button__done = this.onPress__button__done;

    return (
      <View>
        <Helmet>
          <title>{intl.formatMessage(messages.add_batch)}</title>
        </Helmet>
        <NavBar
          mode="dark"
          icon={<Icon type="left"/>}
          onLeftClick={onPress__button__back}
          rightContent={[

            <MyButton
              key={messages.done.id}
              // type="primary"
              inline={false}
              size="small"
              onPress={onPress__button__done}
            >
              {intl.formatMessage(messages.add_batch)}
            </MyButton>
            ,

          ]}
        >
          <Text>
            {intl.formatMessage(messages.add_batch)}
          </Text>

        </NavBar>

        <List>

          <InputItem
            id="name"
            type="text"
            onChange={onChange_name}
            placeholder={intl.formatMessage(messages.name)}
          />
          <TextareaItem
            id="remark"
            onChange={onChange_remark}
            placeholder={intl.formatMessage(messages.remark)}
            rows={5}
            count={100}
          />

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


