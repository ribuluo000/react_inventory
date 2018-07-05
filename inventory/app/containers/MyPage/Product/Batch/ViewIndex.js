/*
 *
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Icon, List, NavBar, SearchBar, Text, View } from "antd-mobile";
import BaseComponent from "containers/Base/BaseComponent";
import messages from "containers/App/messages";
import MyButton from "components/MyButton/";
import MyListView from "components/MyListView";
const Item = List.Item;
const Brief = Item.Brief;

/* eslint-disable react/prefer-stateless-function */
export default class ViewIndex extends BaseComponent {

  initData = () => {
    this.search_key = '';
    this.page_number = 0;
    this.total_count = 0;
    this.page_size = PARAM.PARAM___page_size_value;
  };

  constructor(props) {
    super(props);
    this.initData();
    this.state = {
      has_more : true,
      dataLv : IList([]),
      setState : (state) => {
        this.setState(state);
      },
    };
  }

  renderRow = (item, sectionID, rowID) => {
    // console.log('renderRow',item,sectionID,rowID);

    let { onPress__list_item } = this.props;

    // return <Text>aaa</Text>;

    return (
      <Item
        key={item.get('key')}
        arrow="horizontal"
        multipleLine
        extra={item.get('extra')}
        onClick={() => {
          onPress__list_item && onPress__list_item(item, sectionID, rowID)
        }}

      >
        {item.get('title')}
        {/*<Brief>{item.subtitle}</Brief>*/}
      </Item>
    );
  };

  set_has_more_false = () => {
    if (this.state.has_more !== false) {
      this.state.setState({
        has_more : false,
      });
    }
  };

  onEndReached = async () => {
    //load more data

    let search_key = this.search_key;

    let page_number = ++this.page_number;
    let page_size = this.page_size;

    let access_token = 'access_token';  //todo need change
    let user_id = '5b31b58fdd66b03a1dcb5434'; //todo need change
    let product_id = '5b327781bf5abe6fe4f38c6d';  //todo need change
    let body = {
      access_token,
      user_id,
      search_key,
      page_number,
      page_size,
      product_id,
    };

    view_util.show_loading();
    let jsonObj = await api_util.batch_get_list(body);
    view_util.hide_loading();

    let has_more = false;
    let dataLvNew = this.state.dataLv;
    if (page_number === 1) {
      dataLvNew = IList([]);
    }
    let total_count = this.total_count;

    if (!jsonObj) {
      this.set_has_more_false();
      return;
    }

    if (!(jsonObj.get('code') == CODE.code_0.code)) {
      api_util.on_custom_exception_common(jsonObj);
      this.set_has_more_false();
      return;
    }
    total_count = jsonObj.get('data').get('total_count');
    let data_list = jsonObj.get('data').get('data_list');
    data_list.map((item, i) => {
      // console.log(item,'data_list.map.item');
      let item_new = IMap({
        item : item,
        key : item.get('_id'),
        title : item.get('name'),
        subtitle : '',
        extra : item.get('remark'),
      });
      dataLvNew = dataLvNew.push(item_new);
      // console.log(dataLvNew,'data_list.map.dataLvNew');

    });

    if (total_count > dataLvNew.size) {
      has_more = true;
    }
    console.log(dataLvNew, 'data_list.map.dataLvNew');
    this.total_count = total_count;

    this.state.setState({
      has_more,
      dataLv : dataLvNew,
    })

  };

  onRefresh = async () => {
    console.log('onRefresh', this);
    //refresh data

    this.page_number = 0;
    this.total_count = 0;
    this.onEndReached();

  };
  onPress__button__search = async (value) => {
    console.log('onPress__button__search', value);
    this.search_key = value;
    this.timer && clearTimeout(this.timer);
    //refresh data
    this.timer = setTimeout(() => {
      this.onRefresh();

    }, 300);
    console.log('this.timer', this.timer);

  };

  render() {

    const {
      intl,

      loading,
      user_name,

      onPress__button__back,

      onPress__button__add,

    } = this.props;

    const {
      has_more,
      dataLv,
    } = this.state;

    const renderRow = this.renderRow;
    const onEndReached = this.onEndReached;
    const onRefresh = this.onRefresh;
    const onPress__button__search = this.onPress__button__search;
    return (
      <View>
        <Helmet>
          <title>{intl.formatMessage(messages.batch)}</title>
        </Helmet>
        <NavBar
          mode="dark"
          icon={<Icon type="left"/>}
          onLeftClick={onPress__button__back}
          rightContent={[

            <MyButton
              key={messages.add.id}
              // type="primary"
              inline={false}
              size="small"
              onPress={onPress__button__add}
            >
              {intl.formatMessage(messages.add)}
            </MyButton>
            ,

          ]}
        >
          <Text>
            {intl.formatMessage(messages.batch)}
          </Text>

        </NavBar>

        <SearchBar
          placeholder={intl.formatMessage(messages.please_input_key)}
          ref={ref => this.ref__SearchBar = ref}
          onChange={onPress__button__search}
        />

        <List>

          <MyListView
            ref={(ref) => {
              this.ref_lv = ref;
            }}
            dataLv={dataLv}
            hasMore={has_more}
            onEndReached={onEndReached}
            onRefresh={onRefresh}
            renderRow={renderRow}
          />

          {/*{*/}
          {/*data_list.map((item, i) => {*/}
          {/*let v = (*/}
          {/*<Item*/}
          {/*key={item.key}*/}
          {/*arrow="horizontal"*/}
          {/*multipleLine*/}
          {/*extra={item.extra}*/}
          {/*onClick={() => {*/}
          {/*onPress__list_item && onPress__list_item(item, i)*/}
          {/*}}*/}

          {/*>*/}
          {/*{item.title}*/}
          {/*/!*<Brief>{item.subtitle}</Brief>*!/*/}
          {/*</Item>*/}
          {/*);*/}
          {/*return v;*/}
          {/*})*/}
          {/*}*/}

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


