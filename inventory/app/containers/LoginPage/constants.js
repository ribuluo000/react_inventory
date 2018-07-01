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

export const RESET_VIEW = 'inventory/Login/RESET_VIEW';

export const CHANGE_USER_NAME = 'inventory/Login/CHANGE_USER_NAME';
export const CHANGE_PASSWORD = 'inventory/Login/CHANGE_PASSWORD';


/****************************** network start **************************************/
  //登录
export const API_LOGIN = 'inventory/Login/API_LOGIN';
export const API_LOGIN_SUCCESS = 'inventory/Login/API_LOGIN_SUCCESS';
export const API_LOGIN_ERROR = 'inventory/Login/API_LOGIN_ERROR';



/****************************** network end **************************************/
