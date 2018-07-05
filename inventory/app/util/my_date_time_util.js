/**
 * Created by nick on 2018/1/27.
 */
import moment from "moment";

let obj = {

  format2MM_DD__HH_mm:(str)=>{
    return moment(str).format('MM-DD HH:mm');
  },

  format2YYYY_MM_DD__HH_mm_ss:(str)=>{
    return moment(str).format('YYYY-MM-DD HH:mm:ss');
  },



};


export default obj;
