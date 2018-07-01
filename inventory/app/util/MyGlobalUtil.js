/**
 * Created by nick on 2018/7/1.
 */
import MyConstantUtil from './MyConstantUtil';
export default {
  init:()=>{

    global.MyConstantUtil = MyConstantUtil;
    global.REQ_URL = MyConstantUtil.REQ_URL;
    global.CONFIG = MyConstantUtil.CONFIG;
    global.PATH = MyConstantUtil.PATH;
    global.PARAM = MyConstantUtil.PARAM;
    global.PERMISSION = MyConstantUtil.PERMISSION;
    global.TYPE = MyConstantUtil.TYPE;

  },
};
