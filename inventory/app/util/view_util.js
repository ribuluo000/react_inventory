/**
 * Created by nick on 2018/6/28.
 */
import React from "react";
import { View,Toast } from "antd-mobile";
import { reset_app } from "../containers/App/actions";
import { goBack, push } from "react-router-redux";

export default {

    show_loading : () => {
        console.log('show_loading');
    },
    hide_loading : () => {
        console.log('hide_loading');
    },
    show_toast : (msg) => {
      Toast.info(msg, 1);
    },



    get_separator_h : (height = style_util.style_base_value_util.commonSeparatorHeight__Immutable__,
        backgroundColor = style_util.style_base_value_util.commonSeparatorColor) => {
        let v = (
            <View style={{
                height : height*1,
                width : '100%',
                backgroundColor : backgroundColor
            }}
            />
        );
        return v;
    },
    get_separator_v : (width = style_util.style_base_value_util.commonSeparatorHeight__Immutable__,
        backgroundColor = style_util.style_base_value_util.commonSeparatorColor) => {

        let v = (
            <View style={{
                height : '100%',
                width : width,
                backgroundColor : backgroundColor
            }}
            />
        );
        return v;
    },

    reset2Login:(dispatch)=>{
      dispatch(reset_app());

      dispatch(push(`/${PATH.PATH__login}`));
    },

};
