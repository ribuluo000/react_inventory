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

export const RESET_VIEW = 'inventory/My__product__batch__add/RESET_VIEW';
export const CHANGE_NAME = 'inventory/My__product__batch__add/CHANGE_NAME';
export const CHANGE_REMARK = 'inventory/My__product__batch__add/CHANGE_REMARK';


/****************************** network start **************************************/
  //添加
export const API_ADD = 'inventory/My__product__batch__add/API_ADD';
export const API_ADD_SUCCESS = 'inventory/My__product__batch__add/API_ADD_SUCCESS';
export const API_ADD_ERROR = 'inventory/My__product__batch__add/API_ADD_ERROR';



/****************************** network end **************************************/
