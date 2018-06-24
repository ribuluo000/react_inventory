/*
 * My Bill Page
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Icon, InputItem, List, NavBar, Picker, Text, TextareaItem, View, WhiteSpace } from "antd-mobile";
import BaseComponent from "containers/Base/BaseComponent";
import { FormattedMessage } from "react-intl";
import messages from "containers/App/messages";
import MyButton from "components/MyButton/";
import MyTextTitleExtra from "components/Text/MyTextTitleExtra";
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
      onChange_telephone,
      onChange_remark,
      name,
      telephone,
      remark,

      onPress__button__back,

      onPress__button__add,

      onPress__button__done,

      onPress__button__edit,

      onPress__list_item,

      onPress__button__search,
      onPress__button__provider,
      onPress__button__customer,
      onPress__button__add_product,
      onPress__button__del_product,

    } = this.props;

    let dataList = [];
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

    let bill_type_dataList = [
      {
        label : '2013',
        value : '2013',
      },
      {
        label : '2014',
        value : '2014',
      },
    ];

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
                    onClick={onPress__button__done}
                  >
                    {msg}
                  </MyButton>
                )
              }

            </FormattedMessage>,

          ]}
        >
          <FormattedMessage {...messages.add_customer}>
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

          <FormattedMessage {...messages.bill_type}>
            {
              msg => (
                <Picker data={bill_type_dataList} cols={1}>
                  <List.Item arrow="horizontal">{msg}</List.Item>
                </Picker>
              )
            }

          </FormattedMessage>

          <FormattedMessage {...messages.transaction_amount}>
            {
              msg => (
                <InputItem
                  id="telephone"
                  type="text"
                  value={telephone}
                  onChange={onChange_telephone}
                  placeholder={msg}
                />
              )
            }

          </FormattedMessage>

          <FormattedMessage {...messages.provider}>
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

          <FormattedMessage {...messages.customer}>
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
        </List>

        <WhiteSpace/>

        <FormattedMessage {...messages.add_product}>
          {
            msg => (
              <MyButton
                children={msg}
                onPress={onPress__button__add_product}
              />
            )
          }

        </FormattedMessage>

        <WhiteSpace/>

        <List>
          <FormattedMessage {...messages.total_price}>
            {
              msg => (
                <Item
                  extra={'100'}
                >
                  {msg}
                </Item>
              )
            }

          </FormattedMessage>
          <WhiteSpace/>
          <WhiteSpace/>

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

              let vv = (
                <View
                  key={item.name_product} //todo need change

                >
                  {v}

                  <FormattedMessage {...messages.product_del}>
                    {
                      msg => (
                        <MyButton
                          children={msg}
                          onPress={onPress__button__del_product}
                        />
                      )
                    }

                  </FormattedMessage>

                </View>
              );

              return vv;
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


