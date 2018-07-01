/*
 * My Bill Page
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Icon, List, NavBar, SearchBar, Text, View } from "antd-mobile";
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

      onPress__button__back,

      onPress__button__add,

      onPress__button__done,

      onPress__button__edit,

      onPress__list_item,

      onPress__button__search,

    } = this.props;

    let dataList = [];
    if (data && data.dataList) {
      dataList = data.dataList;
    } else {
      dataList = [
        {
          key : 'key',
          title : 'title',
          subtitle : 'subtitle',
          extra : 'extra',
        },
        {
          key : 'key2',
          title : 'title2',
          subtitle : 'subtitle',
          extra : 'extra',
        },
      ];
    }

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
              key={messages.add.id}
              {...messages.add}>
              {
                msg => (
                  <MyButton
                    // type="primary"
                    inline={false}
                    size="small"
                    onPress={onPress__button__add}
                  >
                    {msg}
                  </MyButton>
                )
              }

            </FormattedMessage>,

          ]}
        >
          <FormattedMessage {...messages.provider}>
            {
              msg => (
                <Text>
                  {msg}
                </Text>
              )
            }

          </FormattedMessage>
        </NavBar>

        <FormattedMessage {...messages.please_input_key}>
          {
            msg => (
              <SearchBar
                placeholder={msg}
                ref={ref => this.ref__SearchBar = ref}
                onChange={onPress__button__search}
              />
            )
          }

        </FormattedMessage>

        <List>

          {
            dataList.map((item, i) => {
              let v = (
                <Item
                  key={item.key}
                  arrow="horizontal"
                  multipleLine
                  extra={item.extra}
                  onClick={() => {
                    onPress__list_item && onPress__list_item(item, i)
                  }}

                >
                  {item.title}
                  {/*<Brief>{item.subtitle}</Brief>*/}
                </Item>
              );
              return v;
            })
          }

        </List>
      </View>
    );
  }
}

ViewIndex.propTypes = {
  loading : PropTypes.bool,
  error : PropTypes.oneOfType([ PropTypes.object, PropTypes.bool ]),
  user_name : PropTypes.string,
  data : PropTypes.object,

};


