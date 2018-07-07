import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import injectReducer from "utils/injectReducer";
import injectSaga from "utils/injectSaga";
import { makeSelect__is_authenticated, makeSelect__user_name, makeSelectError, makeSelectLoading } from "containers/App/selectors";
import reducer from "./reducer";
import saga from "./saga";
import ViewIndex from "./ViewIndex";
import { goBack, push } from "react-router-redux";
import BaseComponent from "containers/Base/BaseComponent";
import { add_product } from "../actions";
import { makeSelect__batch, makeSelect__product } from "./selectors";
import { reset_bill_add_add_product } from "./actions";

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

    onPress__button__back : () => {
      console.log('onPress__button__back');
      dispatch(goBack());
      dispatch(reset_bill_add_add_product());
    },

    reset_bill_add : () => {
      console.log('reset_bill_add');
      dispatch(reset_bill_add_add_product());

    },

    onPress__button__done : (product) => {
      console.log('onPress__button__done');
      dispatch(add_product(product));
      dispatch(goBack());
      dispatch(reset_bill_add_add_product());
    },

    onPress__button__product : () => {
      console.log('onPress__button__product');

      let path = {
        pathname:`/${PATH.PATH__product__select}`,
      };
      dispatch(push(path));

    },

    onPress__button__batch : () => {
      console.log('onPress__button__batch');

      let path = {
        pathname:`/${PATH.PATH__product__batch__select}`,
      };
      dispatch(push(path));

    },


  };
}

const mapStateToProps = createStructuredSelector({
  is_authenticated : makeSelect__is_authenticated(),
  user_name : makeSelect__user_name(),
  loading : makeSelectLoading(),
  error : makeSelectError(),
  product : makeSelect__product(),
  batch : makeSelect__batch(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key : PATH.PATH__bill__add__add_product, reducer });
const withSaga = injectSaga({ key : PATH.PATH__bill__add__add_product, saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MyPage);
