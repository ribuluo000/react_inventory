/**
 * Created by nick on 2018/7/1.
 */
import { fromJS,Map,List,Set, } from "immutable";

import my_constant_util from './my_constant_util';
import style_util from './style_util';
import view_util from './view_util';
import api_util from "../api/api_util";
import { options_common, request } from "utils/request";
import { push,goBack } from "react-router-redux";

export default {
  init:()=>{

    global.IfromJS = fromJS;
    global.IMap = Map;
    global.IList = List;
    global.ISet = Set;


    global.style_util = style_util;
    global.view_util = view_util;
    global.my_constant_util = my_constant_util;
    global.REQ_URL = my_constant_util.REQ_URL;
    global.CONFIG = my_constant_util.CONFIG;
    global.PATH = my_constant_util.PATH;
    global.PARAM = my_constant_util.PARAM;
    global.PERMISSION = my_constant_util.PERMISSION;
    global.TYPE = my_constant_util.TYPE;
    global.CODE = my_constant_util.CODE;

    global.api_util = api_util;
    global.request = request;
    global.options_common = options_common;

    global.push = push;
    global.goBack = goBack;
  },
};
