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

export const RESET_Bill_Add = 'inventory/BillAdd/RESET_Bill_Add';
export const CHANGE_SELECTED_PROVIDER = 'inventory/BillAdd/CHANGE_SELECTED_PROVIDER';
export const CHANGE_SELECTED_CUSTOMER = 'inventory/BillAdd/CHANGE_SELECTED_CUSTOMER';
export const ADD_PRODUCT = 'inventory/BillAdd/ADD_PRODUCT';
export const REMOVE_PRODUCT = 'inventory/BillAdd/REMOVE_PRODUCT';


