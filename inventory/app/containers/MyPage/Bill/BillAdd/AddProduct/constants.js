/*
 *
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const RESET_BILL_ADD_ADD_PRODUCT = 'inventory/BILL_ADD_ADD_PRODUCT/RESET_BILL_ADD_ADD_PRODUCT';
export const CHANGE_SELECTED_PRODUCT = 'inventory/BILL_ADD_ADD_PRODUCT/CHANGE_SELECTED_PRODUCT';
export const CHANGE_SELECTED_BATCH = 'inventory/BILL_ADD_ADD_PRODUCT/CHANGE_SELECTED_BATCH';
export const CHANGE_INPUT_VALUE_PRICE = 'inventory/BILL_ADD_ADD_PRODUCT/CHANGE_INPUT_VALUE_PRICE';
export const CHANGE_INPUT_VALUE_COUNT = 'inventory/BILL_ADD_ADD_PRODUCT/CHANGE_INPUT_VALUE_COUNT';
export const CHANGE_INPUT_VALUE_REMARK = 'inventory/BILL_ADD_ADD_PRODUCT/CHANGE_INPUT_VALUE_REMARK';
