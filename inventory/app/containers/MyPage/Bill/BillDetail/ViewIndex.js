/*
 *
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Flex, Icon, List, NavBar, Text, TextareaItem, View, WhiteSpace } from "antd-mobile";
import BaseComponent from "containers/Base/BaseComponent";
import { FormattedMessage } from "react-intl";
import messages from "containers/App/messages";
import MyTopView1 from "./components/MyTopView1";
import MyTopView2 from "./components/MyTopView2";
import MyTextTitleExtra from "components/Text/MyTextTitleExtra";
import my_date_time_util from "util/my_date_time_util";
const FlexItem = Flex.Item;
const Item = List.Item;
const Brief = Item.Brief;

const TYPE_VIEW_ORDER_NUMBER = 'TYPE_VIEW_ORDER_NUMBER';
const TYPE_VIEW_PRODUCTS = 'TYPE_VIEW_PRODUCTS';

/* eslint-disable react/prefer-stateless-function */
export default class ViewIndex extends BaseComponent {

  initData = () => {
    let detail = this.props.location.state;
    console.log('come in data', detail);

    this.symbol_money = detail.get('extra');
    this.name = detail.get('item').get('name');
    this._id = detail.get('item').get('_id');
    this.remark = detail.get('item').get('remark');
    this.create_time = my_date_time_util.format2YYYY_MM_DD__HH_mm_ss(detail.get('item').get('create_time'));
  };

  constructor(props) {
    super(props);
    this.initData();

    this.state = {
      data : null,
      setState : (state) => {
        this.setState(state);
      },
    };
  }

  componentDidMount() {
    this.api_call();

  }

  api_call = async () => {

    let access_token = 'access_token';  //todo need change
    let user_id = '5b31b58fdd66b03a1dcb5434'; //todo need change
    let id = this._id; //
    let body = {
      access_token,
      user_id,
      id,
    };

    view_util.show_loading();
    let jsonObj = await api_util.bill_detail(body);
    view_util.hide_loading();

    if (!jsonObj) {
      return;
    }

    if (!(jsonObj.get('code') == CODE.code_0.code)) {
      api_util.on_custom_exception_common(jsonObj);
      return;
    }

    this.state.setState({
      data : jsonObj.get('data')
    })

  };

  get_view_order_number = (order_number) => {
    if (!order_number) {
      return null;
    }
    return (
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
    );
  };

  get_view_products = (dataList) => {
    if (!dataList) {
      return null;
    }
    return (
      <List>
        {
          dataList.map((item, i) => {

            let v = (
              <View
                key={item.get('_id')} //todo need change
                justify="between" direction="column">

                <FormattedMessage {...messages.product_name}>
                  {
                    msg => (
                      <MyTextTitleExtra
                        title={msg}
                        extra={item.get('name_product')}

                      />
                    )
                  }

                </FormattedMessage>

                <FormattedMessage {...messages.batch_name}>
                  {
                    msg => (
                      <MyTextTitleExtra
                        title={msg}
                        extra={item.get('name_batch')}

                      />
                    )
                  }

                </FormattedMessage>

                <FormattedMessage {...messages.product_price}>
                  {
                    msg => (
                      <MyTextTitleExtra
                        title={msg}
                        extra={my_string_util.decimal2string_show(item.get('price'))}

                      />
                    )
                  }

                </FormattedMessage>

                <FormattedMessage {...messages.product_count}>
                  {
                    msg => (
                      <MyTextTitleExtra
                        title={msg}
                        extra={my_string_util.decimal2string_show(item.get('count'))}

                      />
                    )
                  }

                </FormattedMessage>

                <FormattedMessage {...messages.product_total_price}>
                  {
                    msg => (
                      <MyTextTitleExtra
                        title={msg}
                        extra={my_string_util.decimal2string_show(item.get('total_price'))}

                      />
                    )
                  }

                </FormattedMessage>

                <FormattedMessage {...messages.remark}>
                  {
                    msg => (
                      <MyTextTitleExtra
                        title={msg}
                        extra={item.get('remark')}

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
    );
  };

  get_view_by_data_and_type = (type) => {
    let data = this.state.data;
    if (!data) {
      return null;
    }

    switch (type) {
      case TYPE_VIEW_ORDER_NUMBER:
        return this.get_view_order_number(data.get('order_number'));
        break;
      case TYPE_VIEW_PRODUCTS:
        return this.get_view_products(data.get('products'));
        break;
      default:
        return null;
    }
    return null;
  };

  render() {

    const {
      user_name,
      onPress__button__back,

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
            {this.name}
          </MyTopView1>
          <MyTopView2>
            {this.symbol_money}
          </MyTopView2>
        </Flex>

        <FormattedMessage {...messages.create_time}>
          {
            msg => (
              <MyTextTitleExtra
                title={msg}
                extra={this.create_time}

              />
            )
          }

        </FormattedMessage>

        {this.get_view_by_data_and_type(TYPE_VIEW_ORDER_NUMBER)}

        <WhiteSpace/>
        {this.get_view_by_data_and_type(TYPE_VIEW_PRODUCTS)}

        <WhiteSpace/>
        <FormattedMessage {...messages.remark}>
          {
            msg => (
              <TextareaItem
                editable={false}
                id="remark"
                value={this.remark}
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
  user_name : PropTypes.string,

};


