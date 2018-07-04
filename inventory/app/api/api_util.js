/**
 * Created by nick on 2018/6/29.
 */
import { fromJS } from "immutable";

const on_custom_exception_common = (jsonObj) => {
  view_util.show_toast(get_default_msg(jsonObj));
};
const on_success_common = (jsonObj) => {
  view_util.show_toast(get_default_msg(jsonObj));
};
const on_catch_common = (err) => {
  view_util.show_toast(err);
};
const get_default_msg = (jsonObj) => {

  let msg = jsonObj.get('msg');
  return msg;

  let obj = CODE[ `code_${jsonObj.get('code')}` ];
  if (obj) {
    return obj.code_description;
  } else {
    //未知的错误码
    return CODE.code_99998.code_description;
  }
};

const request_common = async (url, data = {}, callback) => {
  let ret = null;
  try {
    ret = await request(url, options_common(data));
    ret = fromJS(ret);
    callback && callback(null, ret);
  } catch (err) {
    callback ? callback(err) : on_catch_common(err);
  }
  return ret;
};

export default {
  request_common : request_common,
  on_success_common : on_success_common,
  on_custom_exception_common : on_custom_exception_common,
  get_msg : (jsonObj) => {
    return jsonObj.get('msg') || get_default_msg();
  },
  login : async (data = {}, callback) => {
    let url = CONFIG.API_BASE_URL + REQ_URL.REQ_URL___user__login;
    return await request_common(url, data, callback);
  },

  provider_get_list : async (data = {}, callback) => {
    let url = CONFIG.API_BASE_URL + REQ_URL.REQ_URL___provider__get_list;
    return await request_common(url, data, callback);
  },

  customer_get_list : async (data = {}, callback) => {
    let url = CONFIG.API_BASE_URL + REQ_URL.REQ_URL___customer__get_list;
    return await request_common(url, data, callback);
  },

  product_get_list : async (data = {}, callback) => {
    let url = CONFIG.API_BASE_URL + REQ_URL.REQ_URL___product__get_list;
    return await request_common(url, data, callback);
  },

  batch_get_list : async (data = {}, callback) => {
    let url = CONFIG.API_BASE_URL + REQ_URL.REQ_URL___product__batch__get_list;
    return await request_common(url, data, callback);
  },

  provider_add : async (data = {}, callback) => {
    let url = CONFIG.API_BASE_URL + REQ_URL.REQ_URL___provider__add;
    return await request_common(url, data, callback);
  },

  customer_add : async (data = {}, callback) => {
    let url = CONFIG.API_BASE_URL + REQ_URL.REQ_URL___customer__add;
    return await request_common(url, data, callback);
  },


  product_add : async (data = {}, callback) => {
    let url = CONFIG.API_BASE_URL + REQ_URL.REQ_URL___product__add;
    return await request_common(url, data, callback);
  },


  batch_add : async (data = {}, callback) => {
    let url = CONFIG.API_BASE_URL + REQ_URL.REQ_URL___product__batch__add;
    return await request_common(url, data, callback);
  },

  provider_update_detail : async (data = {}, callback) => {
    let url = CONFIG.API_BASE_URL + REQ_URL.REQ_URL___provider__update_detail;
    return await request_common(url, data, callback);
  },

  customer_update_detail : async (data = {}, callback) => {
    let url = CONFIG.API_BASE_URL + REQ_URL.REQ_URL___customer__update_detail;
    return await request_common(url, data, callback);
  },


  product_update_detail : async (data = {}, callback) => {
    let url = CONFIG.API_BASE_URL + REQ_URL.REQ_URL___product__update_detail;
    return await request_common(url, data, callback);
  },


  batch_update_detail : async (data = {}, callback) => {
    let url = CONFIG.API_BASE_URL + REQ_URL.REQ_URL___product__batch__update_detail;
    return await request_common(url, data, callback);
  },

};
