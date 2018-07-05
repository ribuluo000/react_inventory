/*
 *
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Flex, Icon, List, NavBar, Text, TextareaItem, View, WhiteSpace } from "antd-mobile";
import BaseComponent from "containers/Base/BaseComponent";
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

    const {
      intl,
    } = this.props;
    return (
      <MyTextTitleExtra
        title={intl.formatMessage(messages.order_number)}
        extra={order_number}

      />
    );
  };

  get_view_products = (dataList) => {
    if (!dataList) {
      return null;
    }

    const {
      intl,
    } = this.props;
    return (
      <List>
        {
          dataList.map((item, i) => {

            let v = (
              <View
                key={item.get('_id')}
                justify="between" direction="column">

                <MyTextTitleExtra
                  title={intl.formatMessage(messages.product_name)}
                  extra={item.get('name_product')}

                />
                <MyTextTitleExtra
                  title={intl.formatMessage(messages.batch_name)}
                  extra={item.get('name_batch')}

                />
                <MyTextTitleExtra
                  title={intl.formatMessage(messages.product_price)}
                  extra={my_string_util.decimal2string_show(item.get('price'))}

                />
                <MyTextTitleExtra
                  title={intl.formatMessage(messages.product_count)}
                  extra={my_string_util.decimal2string_show(item.get('count'))}

                />
                <MyTextTitleExtra
                  title={intl.formatMessage(messages.product_total_price)}
                  extra={my_string_util.decimal2string_show(item.get('total_price'))}

                />
                <MyTextTitleExtra
                  title={intl.formatMessage(messages.remark)}
                  extra={item.get('remark')}

                />

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
      intl,

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
          <title>{intl.formatMessage(messages.bill_detail)}</title>
          <title></title>
        </Helmet>
        <NavBar
          mode="dark"
          icon={<Icon type="left"/>}
          onLeftClick={onPress__button__back}
        >

          <Text>
            {intl.formatMessage(messages.bill_detail)}
          </Text>
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

        <MyTextTitleExtra
          title={intl.formatMessage(messages.create_time)}
          extra={this.create_time}

        />

        {this.get_view_by_data_and_type(TYPE_VIEW_ORDER_NUMBER)}

        <WhiteSpace/>
        {this.get_view_by_data_and_type(TYPE_VIEW_PRODUCTS)}

        <WhiteSpace/>
        <TextareaItem
          editable={false}
          id="remark"
          value={this.remark}
          placeholder={intl.formatMessage(messages.remark)}
          rows={5}
          count={100}
        />

      </View>
    );
  }
}

ViewIndex.propTypes = {
  loading : PropTypes.bool,
  error : PropTypes.oneOfType([ PropTypes.object, PropTypes.bool ]),
  user_name : PropTypes.string,

};


