/*
 *
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS,Map,List } from "immutable";

import {
  RESET_VIEW,
  CHANGE_SEARCH_KEY,
  CHANGE_PAGE_NUMBER,

  /****************************** network start **************************************/


    API_GET_LIST,
  API_GET_LIST_SUCCESS,
  API_GET_LIST_ERROR,
  /****************************** network end **************************************/

} from './constants';

// The initial state of the App
export const initialState = fromJS({
  search_key:'',
  page_number:0,
  page_size:1,


  /****************************** network start **************************************/

  loading : false,
  error : false,
  has_more : true,
  data : {
    total_count : 0,
    data_list:[]
  },
  /****************************** network end **************************************/

});

function mReducer(state = initialState, action) {
  console.log('mReducerProvider',state,action);
  switch (action.type) {
    case RESET_VIEW:
      state = initialState;

      try {
        let data = action.data;
        if(data){
          for(let k in data){
            // console.log('data',k,data[k]);
            state = state.set(k,data[k]);
          }
        }
      } catch (e){
        console.log(e);

      }
      return state;
    case CHANGE_SEARCH_KEY:
      return state.set('search_key', action.value.replace(/@/gi, ''));
    case CHANGE_PAGE_NUMBER:
      console.log('CHANGE_PAGE_NUMBER',state,action);
      // return state;
      let pn = action.value;
      return state.set('page_number', pn);


    /****************************** network start **************************************/

    case API_GET_LIST:
      return state
        .set('loading', true)
        .set('error', false)
        ;
    case API_GET_LIST_SUCCESS:
      let has_more = true;
      let {total_count,data_list} = action.jsonObj.data;
      let i_data_list_new ;
      i_data_list_new = state.get('data').get('data_list');
      // if(state.data &&state.data.data_list){
      //   i_data_list_new = state.data.data_list;
      // }else {
      //   i_data_list_new = [];
      // }
      data_list.map((item,i)=>{
        /**
         *

         item:{
         "_id":"5b3877e10221bf1aeed55319",
         "name":"name",
         "remark":"remark",
         "telephone":"telephone",
         "object_id_created_by":"5b31b58fdd66b03a1dcb5434",
         "create_time":"2018-07-01T06:42:41.334Z",
         }

         *
         */
        let item_new = {
          key : item._id,
          title : item.name,
          subtitle : item._id,
          extra : item.remark,
        };
        i_data_list_new.push(item_new);
        // i_data_list_new.insert(i_data_list_new.size+1,item_new);
        console.log('data_list.map',item,i);
        console.log('data_list.map',item_new,i);
        console.log('data_list.map',i_data_list_new,i);

      });

      if(total_count>i_data_list_new.length){
        has_more = true;
      }else {
        has_more = false;
      }
      console.log('ret i_data_list_new',i_data_list_new);
      console.log('ret state',state);
      return state
        .set('loading', false)
        .set('has_more', has_more)
        .set('data', Map({
          'total_count':total_count,
          'data_list':i_data_list_new,
        }))
        ;
    case API_GET_LIST_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false)
        .set('has_more', false)
        ;

    /****************************** network end **************************************/

    default:
      return state;
  }
}

export default mReducer;
