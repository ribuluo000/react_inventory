/*
 * My Bill Page
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Icon, InputItem, List, NavBar, Text, TextareaItem, View } from "antd-mobile";
import BaseComponent from "containers/Base/BaseComponent";
import { FormattedMessage } from "react-intl";
import messages from "containers/App/messages";
import MyButton from "components/MyButton/";
const Item = List.Item;
const Brief = Item.Brief;
/* eslint-disable react/prefer-stateless-function */
export default class ViewIndex extends BaseComponent {

  initData = () => {
    let detail = this.props.location.state;
    console.log('come in data', detail);

    this.name = detail.get('item').get('name');
    this._id = detail.get('item').get('_id');
    this.remark = detail.get('item').get('remark');
    this.telephone = detail.get('item').get('telephone');
    this.create_time = detail.get('item').get('create_time');
  };

  constructor(props) {
    super(props);

    this.initData();

    this.state = {
      editable : false,
      setState : (state) => {
        this.setState(state);
      },
    };

  }

  componentDidMount() {

  }

  check_info = () => {

    if (my_string_util.is_empty(this.name)) {
      view_util.show_toast(MSG.MSG___name_can_not_be_empty);
      return false;

    }

    return true;

  };

  api_call = async () => {

    let name = this.name;
    let remark = this.remark;
    let telephone = this.telephone;
    let id = this._id;

    let access_token = 'access_token';  //todo need change
    let user_id = '5b31b58fdd66b03a1dcb5434'; //todo need change
    let body = {
      access_token,
      user_id,
      name,
      remark,
      telephone,
      id,
    };

    view_util.show_loading();
    let jsonObj = await api_util.customer_update_detail(body);
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
    console.log('onPress__button__done');

    if (!this.check_info()) {
      return;
    }

    this.api_call();

  };

  onPress__button__edit = async () => {
    console.log('onPress__button__edit');
    this.state.setState({
      editable : true,
    })
  };

  onChange_name = (value) => {
    console.log('onChange_name', value);
    this.name = value;
  };
  onChange_remark = (value) => {
    console.log('onChange_remark', value);
    this.remark = value;
  };
  onChange_telephone = (value) => {
    console.log('onChange_telephone', value);
    this.telephone = value;
  };

  render() {

    const {
      user_name,
      onPress__button__back,

    } = this.props;

    const {
      editable,
    } = this.state;

    const onPress__button__done = this.onPress__button__done;
    const onPress__button__edit = this.onPress__button__edit;
    const onChange_name = this.onChange_name;
    const onChange_telephone = this.onChange_telephone;
    const onChange_remark = this.onChange_remark;

    let right_button = null;
    if (editable) {

      right_button = (
        <FormattedMessage
          key={messages.done.id}
          {...messages.done}>
          {
            msg => (
              <MyButton
                // type="primary"
                inline={false}
                size="small"
                onPress={onPress__button__done}
              >
                {msg}
              </MyButton>
            )
          }

        </FormattedMessage>
      );
    } else {
      right_button = (
        <FormattedMessage
          key={messages.edit.id}
          {...messages.edit}>
          {
            msg => (
              <MyButton
                // type="primary"
                inline={false}
                size="small"
                onPress={onPress__button__edit}
              >
                {msg}
              </MyButton>
            )
          }

        </FormattedMessage>
      );
    }

    return (
      <View>
        <Helmet>
          {/*<title>{intl.formatMessage(messages.button__base_info)}</title>*/}
          <title></title>
        </Helmet>
        <NavBar
          mode="dark"
          icon={<Icon type="left"/>}
          onLeftClick={onPress__button__back}
          rightContent={[

            right_button,

          ]}
        >
          <FormattedMessage {...messages.customer_detail}>
            {
              msg => (
                <Text>
                  {msg}
                </Text>
              )
            }

          </FormattedMessage>
        </NavBar>

        <List>

          <FormattedMessage {...messages.name}>
            {
              msg => (
                <InputItem
                  editable={editable}
                  defaultValue={this.name}
                  id="name"
                  type="text"
                  onChange={onChange_name}
                  placeholder={msg}
                />
              )
            }

          </FormattedMessage>

          <FormattedMessage {...messages.telephone}>
            {
              msg => (
                <InputItem
                  editable={editable}
                  defaultValue={this.telephone}
                  id="telephone"
                  type="text"
                  onChange={onChange_telephone}
                  placeholder={msg}
                />
              )
            }

          </FormattedMessage>

          <FormattedMessage {...messages.remark}>
            {
              msg => (
                <TextareaItem
                  editable={editable}
                  defaultValue={this.remark}
                  id="remark"
                  onChange={onChange_remark}
                  placeholder={msg}
                  rows={5}
                  count={100}
                />
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
  user_name : PropTypes.string,

};


