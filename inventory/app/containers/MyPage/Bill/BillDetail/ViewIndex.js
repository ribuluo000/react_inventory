/*
 * My Bill Page
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Flex, Icon, List, NavBar, Text, TextareaItem, View, WhiteSpace } from "antd-mobile";
import BaseComponent from "containers/Base/BaseComponent";
import { FormattedMessage } from "react-intl";
import messages from "containers/App/messages";
import MyButton from "components/MyButton/";
import MyTopView1 from "./components/MyTopView1";
import MyTopView2 from "./components/MyTopView2";
import MyTextTitleExtra from "components/Text/MyTextTitleExtra";
const FlexItem = Flex.Item;
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

    /**
     *

     {
    "code":0,
    "req_url":"/bill/detail",
    "msg":"",
    "data":{
        "id":"id",
        "type":"type",
        "remark":"remark",
        "order_number":"1111111111",
        "transaction_amount":100,
        "create_time":1111111111111,
        "provider":{
            "object_id":"object_id",
            "name":"name"
        },
        "customer":{
            "object_id":"object_id",
            "name":"name"
        },
        "products":[
            {
                "object_id_product":"object_id_product",
                "object_id_batch":"object_id_batch",
                "name_product":"name_product",
                "name_batch":"name_batch",
                "remark":"remark",
                "price":10,
                "count":10,
                "total_price":100
            }
        ]
    }
}

     * */

      // if(!data){
      //   return null;
      // }
    let data2 = {
        "id" : "id",
        "type" : 1,
        "remark" : "remark",
        "order_number" : "1111111111",
        "transaction_amount" : 100,
        "create_time" : 1111111111111,
        "provider" : {
          "object_id" : "object_id",
          "name" : "name"
        },
        "customer" : {
          "object_id" : "object_id",
          "name" : "name"
        },
        "products" : [
          {
            "object_id_product" : "object_id_product",
            "object_id_batch" : "object_id_batch",
            "name_product" : "name_product",
            "name_batch" : "name_batch",
            "remark" : "remark",
            "price" : 10,
            "count" : 10,
            "total_price" : 100
          }
        ]
      };
    let {
      type,
      create_time,
      order_number,
      provider,
      customer,
      transaction_amount,
      products,
      remark,

    } = data2;

    let name = 'aa';
    let symbol = '';
    if (type === 1) {   //1-provider,2-customer
      name = provider.name || '';
      symbol = '-';
    } else if (type === 2) {
      name = customer.name || '';
      symbol = '+';
    }

    let dataList = [];
    if (data2 && data2.products) {
      dataList = data2.products;
    } else {
      dataList = [
        {
          key : 'key',
          "object_id_product" : "object_id_product",
          "object_id_batch" : "object_id_batch",
          "name_product" : "name_product",
          "name_batch" : "name_batch",
          "remark" : "remark",
          "price" : 10,
          "count" : 10,
          "total_price" : 100
        },
        {
          key : 'key2',
          "object_id_product" : "object_id_product",
          "object_id_batch" : "object_id_batch",
          "name_product" : "name_product",
          "name_batch" : "name_batch",
          "remark" : "remark",
          "price" : 10,
          "count" : 10,
          "total_price" : 100
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

            </FormattedMessage>,

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
          <FormattedMessage {...messages.bill_detail}>
            {
              msg => (
                <Text>
                  {msg}
                </Text>
              )
            }

          </FormattedMessage>
        </NavBar>
        <Flex
          direction="column"
        >
          <MyTopView1>
            {name}
          </MyTopView1>
          <MyTopView2>
            {symbol} {transaction_amount}
          </MyTopView2>
        </Flex>

        <FormattedMessage {...messages.create_time}>
          {
            msg => (
              <MyTextTitleExtra
                title={msg}
                extra={'' + create_time}

              />
            )
          }

        </FormattedMessage>

        <FormattedMessage {...messages.order_number}>
          {
            msg => (
              <MyTextTitleExtra
                title={msg}
                extra={order_number}

              />
            )
          }

        </FormattedMessage>

        <WhiteSpace/>

        <List>

          {
            dataList.map((item, i) => {

              let v = (
                <View
                  key={item.name_product} //todo need change
                  justify="between" direction="column">

                  <FormattedMessage {...messages.product_name}>
                    {
                      msg => (
                        <MyTextTitleExtra
                          title={msg}
                          extra={item.name_product}

                        />
                      )
                    }

                  </FormattedMessage>

                  <FormattedMessage {...messages.batch_name}>
                    {
                      msg => (
                        <MyTextTitleExtra
                          title={msg}
                          extra={item.name_batch}

                        />
                      )
                    }

                  </FormattedMessage>

                  <FormattedMessage {...messages.product_price}>
                    {
                      msg => (
                        <MyTextTitleExtra
                          title={msg}
                          extra={'' + item.price}

                        />
                      )
                    }

                  </FormattedMessage>

                  <FormattedMessage {...messages.product_count}>
                    {
                      msg => (
                        <MyTextTitleExtra
                          title={msg}
                          extra={'' + item.count}

                        />
                      )
                    }

                  </FormattedMessage>

                  <FormattedMessage {...messages.product_total_price}>
                    {
                      msg => (
                        <MyTextTitleExtra
                          title={msg}
                          extra={'' + item.total_price}

                        />
                      )
                    }

                  </FormattedMessage>

                  <FormattedMessage {...messages.remark}>
                    {
                      msg => (
                        <MyTextTitleExtra
                          title={msg}
                          extra={item.remark}

                        />
                      )
                    }

                  </FormattedMessage>

                </View>
              );

              return v;
            })
          }
        </List>

        <WhiteSpace/>
        <FormattedMessage {...messages.remark}>
          {
            msg => (
              <TextareaItem
                id="remark"
                value={remark}
                placeholder={msg}
                rows={5}
                count={100}
              />
            )
          }

        </FormattedMessage>

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

  name : PropTypes.string,
  telephone : PropTypes.string,
  remark : PropTypes.string,

  data : PropTypes.object,

};


