import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import injectReducer from "utils/injectReducer";
import injectSaga from "utils/injectSaga";
import { makeSelect__is_authenticated, makeSelect__user_name, makeSelectError, makeSelectLoading } from "containers/App/selectors";
import {
  makeSelect__customer, makeSelect__input_value_bill_type, makeSelect__input_value_remark, makeSelect__input_value_transaction_amount, makeSelect__products, makeSelect__provider
} from "./selectors";
import { change_input_value_bill_type, change_input_value_remark, change_input_value_transaction_amount, remove_product, reset_bill_add } from "./actions";
import reducer from "./reducer";
import saga from "./saga";
import ViewIndex from "./ViewIndex";
import { goBack, push } from "react-router-redux";
import BaseComponent from "containers/Base/BaseComponent";
import PATH from "constants/PATH";

/* eslint-disable react/prefer-stateless-function */
export class MyPage extends BaseComponent {

  constructor(props){
    super(props);
    console.log('bill_add',props);
  }

  /**
   * when initial state user_name is not null, submit the form to load repos
   */
  componentDidMount() {
  }

  render() {
    console.log(this);

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

    onPress__button__back : () => {
      console.log('onPress__button__back');
      dispatch(goBack());
      dispatch(reset_bill_add());
    },

    reset_bill_add : () => {
      console.log('reset_bill_add');
      dispatch(reset_bill_add());

    },

    onPress__button__done : () => {
      console.log('onPress__button__done');

      dispatch(goBack());
      dispatch(reset_bill_add());
    },

    onPress__button__provider : () => {
      console.log('onPress__button__provider');
      dispatch(push(`/${PATH.PATH__provider__select}`));

    },

    onPress__button__customer : () => {
      console.log('onPress__button__customer');
      dispatch(push(`/${PATH.PATH__customer__select}`));

    },

    onPress__button__add_product : () => {
      console.log('onPress__button__add_product');
      dispatch(push(`/${PATH.PATH__bill__add__add_product}`));

    },
    onPress__button__remove_product : (item, sectionID, rowID) => {
      console.log('onPress__button__remove_product',item, sectionID, rowID);
      let payload = IMap({
        item,
        sectionID,
        rowID,
      });
      dispatch(remove_product(payload));

    },

    onChange__input_value_bill_type : (value) => {
      console.log('onChange__input_value_bill_type',value);
      dispatch(change_input_value_bill_type(value));

    },
    onChange__input_value_transaction_amount : (value) => {
      console.log('onChange__input_value_transaction_amount',value);
      dispatch(change_input_value_transaction_amount(value));

    },
    onChange__input_value_remark : (value) => {
      console.log('onChange__input_value_remark',value);
      dispatch(change_input_value_remark(value));

    },

  };
}

const mapStateToProps = createStructuredSelector({
  is_authenticated : makeSelect__is_authenticated(),
  user_name : makeSelect__user_name(),
  loading : makeSelectLoading(),
  error : makeSelectError(),
  provider : makeSelect__provider(),
  customer : makeSelect__customer(),
  products : makeSelect__products(),
  input_value_bill_type : makeSelect__input_value_bill_type(),
  input_value_transaction_amount : makeSelect__input_value_transaction_amount(),
  input_value_remark : makeSelect__input_value_remark(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key : PATH.PATH__bill__add, reducer });
const withSaga = injectSaga({ key : PATH.PATH__bill__add, saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MyPage);
