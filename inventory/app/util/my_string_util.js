/**
 * Created by nick on 2018/1/27.
 */

let obj = {

  is_empty:(str)=>{
    if(str){
      return false;
    }
    return true;
  },
  is_not_empty:(str)=>{
    if(str){
      return true;
    }
    return false;
  },

  decimal2string_show:(decimal)=>{
    return decimal.get('$numberDecimal').toString()
  },



};


export default obj;
