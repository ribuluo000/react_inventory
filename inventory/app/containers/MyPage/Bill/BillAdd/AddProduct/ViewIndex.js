/*
 * My Bill Page
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Icon, InputItem, List, NavBar, Text, TextareaItem, View } from "antd-mobile";
import BaseComponent from "containers/Base/BaseComponent";
import messages from "containers/App/messages";
import MyButton from "components/MyButton/";
import my_decimal_util from "util/my_decimal_util";
import my_encryption_util from "util/my_encryption_util";
const Item = List.Item;
const Brief = Item.Brief;

/* eslint-disable react/prefer-stateless-function */
export default class ViewIndex extends BaseComponent {

  initData = () => {
    const {
      product,
      batch,
      price,
      count,
      total_price,
      remark,
    } = this.props;
  };

  constructor(props) {
    super(props);
    this.initData();

    this.state = {
      setState : (state) => {
        this.setState(state);
      },
    };

  }

  componentDidMount() {

  }


  onChange_product = (value) => {
    console.log('onChange_product', value);
  };

  onChange_batch = (value) => {
    console.log('onChange_batch', value);
  };

  onChange_product_price = (value) => {
    console.log('onChange_product_price', value);
    if (value === '') {
      this.props.onChange__input_value_price && this.props.onChange__input_value_price(value);
      return;
    }
    if (my_decimal_util.isNaN(value)) {
      return;
    }
    this.props.onChange__input_value_price && this.props.onChange__input_value_price(value);

  };
  onChange_product_count = (value) => {
    console.log('onChange_product_count', value);
    if (value === '') {
      this.props.onChange__input_value_count && this.props.onChange__input_value_count(value);
      return;
    }
    if (my_decimal_util.isNaN(value)) {
      return;
    }
    this.props.onChange__input_value_count && this.props.onChange__input_value_count(value);

  };
  onChange_remark = (value) => {
    console.log('onChange_remark', value);
    this.props.onChange__input_value_remark && this.props.onChange__input_value_remark(value);
  };

  onPress__button__product = () => {

    this.props.onPress__button__product();
  };
  onPress__button__batch = () => {

    this.props.onPress__button__batch();
  };

  onPress__button__done = () => {

    if (!this.check_info()) {
      return;
    }

    const {
      product,
      batch,
      price,
      count,
      total_price,
      remark,
    } = this.props;


    this.input_value_price = my_decimal_util.get_decimal_from_string(price);
    this.input_value_count = my_decimal_util.get_decimal_from_string(count);
    this.input_value_total_price = my_decimal_util.get_decimal_from_string(total_price);
    this.input_value_remark = remark;
    let key = my_encryption_util.md5(product.get('object_id') + batch.get('object_id') + price + count);

    let product_done = IMap({
      "key" : key,
      "object_id_product" : product.get('object_id'),
      "object_id_batch" : batch.get('object_id'),
      "name_product" : product.get('name'),
      "name_batch" : batch.get('name'),
      "remark" : this.input_value_remark,
      "price" : this.input_value_price,
      "count" : this.input_value_count,
      "total_price" : this.input_value_total_price
    });
    this.props.onPress__button__done(product_done);
  };

  check_info = () => {
    const {
      product,
      batch,

      price,
      count,
      total_price,
      remark,

    } = this.props;


    if (my_string_util.is_empty(product.get('object_id'))) {
      view_util.show_toast(MSG.MSG___please_select_product_name);
      return false;

    }
    if (my_string_util.is_empty(batch.get('object_id'))) {
      view_util.show_toast(MSG.MSG___please_select_batch_name);
      return false;

    }
    if (my_string_util.is_empty(price)) {
      view_util.show_toast(MSG.MSG___product_price_is_incorrect);
      return false;

    }
    if (my_string_util.is_empty(count)) {
      view_util.show_toast(MSG.MSG___product_count_is_incorrect);
      return false;

    }

    return true;

  };

  render() {

    const {
      user_name,
      intl,

      product,
      batch,

      price,
      count,
      total_price,
      remark,

      onPress__button__back,

    } = this.props;

    const onPress__button__done = this.onPress__button__done;
    const onPress__button__product = this.onPress__button__product;
    const onPress__button__batch = this.onPress__button__batch;
    const onChange_product_price = this.onChange_product_price;
    const onChange_product_count = this.onChange_product_count;
    const onChange_remark = this.onChange_remark;

    const product_name = product.get('name');
    const batch_name = batch.get('name');

    return (
      <View>
        <Helmet>
          <title>{intl.formatMessage(messages.basic_information_on_trading_products)}</title>
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
            {intl.formatMessage(messages.basic_information_on_trading_products)}
          </Text>
        </NavBar>

        <List>
          <Item
            arrow="horizontal"
            extra={product_name}
            onClick={onPress__button__product}
          >
            {intl.formatMessage(messages.product_name)}
          </Item>
          <Item
            arrow="horizontal"
            extra={batch_name}
            onClick={onPress__button__batch}
          >
            {intl.formatMessage(messages.batch_name)}
          </Item>

          <InputItem
            id="product_price"
            type="text"
            value={price}
            onChange={onChange_product_price}
            placeholder={intl.formatMessage(messages.product_price)}
          />
          <InputItem
            id="product_count"
            type="text"
            value={count}
            onChange={onChange_product_count}
            placeholder={intl.formatMessage(messages.product_count)}
          />
          <Item
            extra={total_price}
          >
            {intl.formatMessage(messages.product_total_price)}
          </Item>
          <TextareaItem
            id="remark"
            value={remark}
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


