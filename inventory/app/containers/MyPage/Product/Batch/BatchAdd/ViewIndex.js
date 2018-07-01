/*
 * My Bill Page
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Icon, List, NavBar, SearchBar, Text, View, InputItem, TextareaItem } from "antd-mobile";
import BaseComponent from "containers/Base/BaseComponent";
import { FormattedMessage } from "react-intl";
import messages from "containers/App/messages";
import MyButton from "components/MyButton/";
const Item = List.Item;
const Brief = Item.Brief;
/* eslint-disable react/prefer-stateless-function */
export default class ViewIndex extends BaseComponent {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {

    const {
      user_name,
      data,

      onChange_name,
      onChange_remark,
      name,
      remark,

      onPress__button__back,

      onPress__button__add,

      onPress__button__done,

      onPress__button__edit,

      onPress__list_item,

      onPress__button__search,

    } = this.props;


    return (
      <View>
        <Helmet>
          {/*<title>{intl.formatMessage(messages.button__base_info)}</title>*/}
          <title>账单</title>
        </Helmet>
        <NavBar
          mode="dark"
          icon={<Icon type="left"/>}
          onLeftClick={onPress__button__back}
          rightContent={[

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

            </FormattedMessage>,

          ]}
        >
          <FormattedMessage {...messages.add_batch}>
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
                  id="name"
                  type="text"
                  value={name}
                  onChange={onChange_name}
                  placeholder={msg}
                />
              )
            }

          </FormattedMessage>


          <FormattedMessage {...messages.remark}>
            {
              msg => (
                <TextareaItem
                  id="remark"
                  value={remark}
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
  repos : PropTypes.oneOfType([ PropTypes.array, PropTypes.bool ]),
  onPress_login : PropTypes.func,
  user_name : PropTypes.string,
  onChange_name : PropTypes.func,
  onChange_telephone : PropTypes.func,
  onChange_remark : PropTypes.func,

  name: PropTypes.string,
  telephone: PropTypes.string,
  remark: PropTypes.string,


  data : PropTypes.object,

};


