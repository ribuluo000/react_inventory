/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const RESET_VIEW = 'inventory/My__provider__get_list/RESET_VIEW';
export const CHANGE_SEARCH_KEY = 'inventory/My__provider__get_list/CHANGE_SEARCH_KEY';

export const CHANGE_PAGE_NUMBER = 'inventory/My__provider__get_list/CHANGE_PAGE_NUMBER';

/****************************** network start **************************************/
  //获取列表
export const API_GET_LIST = 'inventory/My__provider__get_list/API_GET_LIST';
export const API_GET_LIST_SUCCESS = 'inventory/My__provider__get_list/API_GET_LIST_SUCCESS';
export const API_GET_LIST_ERROR = 'inventory/My__provider__get_list/API_GET_LIST_ERROR';



/****************************** network end **************************************/
