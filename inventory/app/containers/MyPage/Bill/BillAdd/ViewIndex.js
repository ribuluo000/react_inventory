/*
 * My Bill Page
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Icon, InputItem, List, NavBar, Picker, Text, TextareaItem, View, WhiteSpace } from "antd-mobile";
import BaseComponent from "containers/Base/BaseComponent";
import messages from "containers/App/messages";
import MyButton from "components/MyButton/";
import MyTextTitleExtra from "components/Text/MyTextTitleExtra";
import MyListView from "../../../../components/MyListView/index";
import my_encryption_util from "util/my_encryption_util";
import my_decimal_util from "../../../../util/my_decimal_util";
const Item = List.Item;
const Brief = Item.Brief;
/* eslint-disable react/prefer-stateless-function */
export default class ViewIndex extends BaseComponent {

  initData = () => {

    const {
      provider,
      customer,
      products,

    } = this.props;

    /**
     *


     {
      "id" : "id",
      "type" : "1",
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
    }

     */
    this.input_value_bill_type = '';
    this.input_value_transaction_amount = '';
    this.input_value_total_price = '';
    this.input_value_remark = '';
  };

  constructor(props) {
    super(props);
    this.initData();

    this.state = {
      input_value_bill_type : '',
      setState : (state) => {
        this.setState(state);
      },
    };

  }

  componentDidMount() {

  }

  onOk_bill_type = (value) => {
    console.log('onOk_bill_type', value);
    this.input_value_bill_type = value;
    this.state.setState({
      input_value_bill_type : value,
    });

  };
  onChange_transaction_amount = (value) => {
    console.log('onChange_transaction_amount', value);

    this.input_value_transaction_amount = value;

  };
  onPress__button__provider = () => {
    console.log('onPress__button__provider');
    this.props.onPress__button__provider && this.props.onPress__button__provider();

  };
  onPress__button__customer = () => {
    console.log('onPress__button__customer');
    this.props.onPress__button__customer && this.props.onPress__button__customer();

  };
  onPress__button__add_product = () => {
    console.log('onPress__button__add_product');
    this.props.onPress__button__add_product && this.props.onPress__button__add_product();

  };
  onChange_remark = (value) => {
    this.input_value_remark = value;
  };


  onPress__button__product_del = (item, sectionID, rowID)=>{
    console.log('onPress__button__product_del',item,sectionID,rowID);
    this.props.onPress__button__remove_product(item, sectionID, rowID);

  };

  get_total_price = ()=>{
    let total_price = my_decimal_util.get_decimal_from_string(0);
    let {
      products,
    } = this.props;
    products.map((item,i)=>{
      total_price = my_decimal_util.get_decimal_x_add_y(total_price,item.get('total_price'));
    });
    return total_price;
  };

  renderRow = (item, sectionID, rowID) => {
    console.log('renderRow',item,sectionID,rowID);

    let { intl } = this.props;

    // return <Text>aaa</Text>;

    let v = (
      <View
        key={item.get('key')} //todo need change
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
          extra={'' + my_decimal_util.decimal2string_show(item.get('price'))}

        />
        <MyTextTitleExtra
          title={intl.formatMessage(messages.product_count)}
          extra={'' + my_decimal_util.decimal2string_show(item.get('count'))}

        />
        <MyTextTitleExtra
          title={intl.formatMessage(messages.product_total_price)}
          extra={'' + my_decimal_util.decimal2string_show(item.get('total_price'))}

        />
        <MyTextTitleExtra
          title={intl.formatMessage(messages.remark)}
          extra={item.get('remark')}

        />

      </View>
    );
    let vv = (
      <View
        key={item.get('key')} //todo need change

      >
        {v}
        <MyButton
          key={messages.product_del.id}
          type="warning"
          inline={false}
          size="small"
          onPress={()=>{
            this.onPress__button__product_del(item, sectionID, rowID);
          }}
        >
          {intl.formatMessage(messages.product_del)}
        </MyButton>

      </View>
    );

    return vv;
  };


  render() {
    console.log(this);
    console.log(messages);

    const {
      user_name,
      intl,

      provider,
      customer,
      products,

      onPress__button__back,
      onPress__button__done,
      onPress__button__add_product,

    } = this.props;

    let please_choose = intl.formatMessage(messages.please_choose);
    let receive_money = intl.formatMessage(messages.receive_money);
    let Pay = intl.formatMessage(messages.Pay);

    const bill_type_dataList = [
      {
        label : please_choose,
        value : '',
      },
      {
        label : receive_money,
        value : '2',
      },
      {
        label : Pay,
        value : '1',
      },
    ];

    console.log('bill_type_dataList', bill_type_dataList);

    let { input_value_bill_type } = this.state;

    const onOk_bill_type = this.onOk_bill_type;
    const onChange_transaction_amount = this.onChange_transaction_amount;
    const onPress__button__provider = this.onPress__button__provider;
    const onPress__button__customer = this.onPress__button__customer;
    const onChange_remark = this.onChange_remark;

    const renderRow = this.renderRow;

    const provider_name = provider.get('name');
    let customer_name = customer.get('name');
    let total_price = my_decimal_util.decimal2string_show(this.get_total_price());

    return (
      <View>
        <Helmet>
          <title>{intl.formatMessage(messages.add_bill)}</title>
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
              {intl.formatMessage(messages.done)}
            </MyButton>,

          ]}
        >
          <Text>
            {intl.formatMessage(messages.add_bill)}
          </Text>
        </NavBar>

        <List>

          <Picker
            id="bill_type"
            onOk={onOk_bill_type}
            value={input_value_bill_type}
            data={bill_type_dataList}
            cols={1}
          >
            <List.Item arrow="horizontal">{intl.formatMessage(messages.bill_type)}</List.Item>
          </Picker>
          <InputItem
            id="transaction_amount"
            type="text"
            value={this.input_value_transaction_amount}
            onChange={onChange_transaction_amount}
            placeholder={intl.formatMessage(messages.transaction_amount)}
          />
          <Item
            arrow="horizontal"
            extra={provider_name}
            onClick={onPress__button__provider}
          >
            {intl.formatMessage(messages.provider)}
          </Item>
          <Item
            arrow="horizontal"
            extra={customer_name}
            onClick={onPress__button__customer}
          >
            {intl.formatMessage(messages.customer)}
          </Item>
        </List>

        <WhiteSpace/>

        <MyButton
          type="primary"
          children={intl.formatMessage(messages.add_product)}
          onPress={onPress__button__add_product}
        />

        <WhiteSpace/>

        <List>
          <Item
            extra={total_price}
          >
            {intl.formatMessage(messages.total_price)}
          </Item>
          <WhiteSpace/>
          <WhiteSpace/>

          <MyListView
            ref={(ref) => {
              this.ref_lv = ref;
            }}
            dataLv={products}
            hasMore={false}
            onEndReached={()=>{}}
            onRefresh={()=>{}}
            renderRow={renderRow}
          />


        </List>

        <WhiteSpace/>
        <TextareaItem
          id="remark"
          value={this.input_value_remark}
          onChange={onChange_remark}
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


