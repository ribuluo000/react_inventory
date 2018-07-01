import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import injectReducer from "utils/injectReducer";
import injectSaga from "utils/injectSaga";
import { makeSelectError, makeSelectLoading } from "containers/App/selectors";
import { makeSelect__is_authenticated, makeSelect__user_name } from "containers/LoginPage/selectors";
import reducer from "./reducer";
import saga from "./saga";
import ViewIndex from "./ViewIndex";
import { push,goBack } from "react-router-redux";
import BaseComponent from "containers/Base/BaseComponent";
import PATH from "constants/PATH";
import { reset_view, api_get_list, change_search_key, change_page_number} from "./actions";
import { makeSelect__search_key,makeSelect__page_number,makeSelect__has_more ,makeSelect__data} from "./selectors";
/* eslint-disable react/prefer-stateless-function */
export class MyPage extends BaseComponent {
  /**
   * when initial state user_name is not null, submit the form to load repos
   */
  componentDidMount() {
  }

  render() {
    return (
      <ViewIndex {...this.props}/>
    )
  }
}

MyPage.propTypes = {
  loading : PropTypes.bool,
  error : PropTypes.oneOfType([ PropTypes.object, PropTypes.bool ]),
  user_name : PropTypes.string,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChange_search_key : value => dispatch(change_search_key(value)),
    onChange_page_number : value => dispatch(change_page_number(value)),


    onPress__button__back : () => {
      console.log('onPress__button__back');
      dispatch(reset_view());
      dispatch(goBack());

    },

    onPress__button__add : () => {
      console.log('onPress__button__add');
      dispatch(push(`/${PATH.PATH__provider__add}`));

    },

    onPress__list_item : (item, i) => {
      console.log('onPress__list_item',item, i);
      dispatch(push(`/${PATH.PATH__provider__detail}`));

    },

    onPress__button__search : (value) => {
      console.log('onPress__button__search',value);
      dispatch(change_search_key(value));

    },


    onEndReached : (page_number_cur) => {
      console.log('onEndReached.page_number_cur',page_number_cur);
      console.log('onEndReached',this);

      //todo need change to do something
      /**
       * 默认加 1 。
       */
      let pn = page_number_cur+1;

      dispatch(change_page_number(pn));
      dispatch(api_get_list());



    },


    onRefresh : () => {
      console.log('onRefresh');

      //todo need change to do something
      // dispatch(api_get_list());

      dispatch(reset_view());
      dispatch(api_get_list());


    },


  };
}

const mapStateToProps = createStructuredSelector({
  is_authenticated : makeSelect__is_authenticated(),
  user_name : makeSelect__user_name(),
  search_key : makeSelect__search_key(),
  page_number : makeSelect__page_number(),
  has_more : makeSelect__has_more(),
  data : makeSelect__data(),
  loading : makeSelectLoading(),
  error : makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key : PATH.PATH__provider, reducer });
const withSaga = injectSaga({ key : PATH.PATH__provider, saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MyPage);
