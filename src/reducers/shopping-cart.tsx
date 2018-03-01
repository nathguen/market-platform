import { ShoppingItem } from '../typescript/classes';
import { ShoppingCartAction, ADD_SHOPPING_ITEM, REMOVE_SHOPPING_ITEM } from '../redux-actions/shopping-cart';

export const defaultShoppingCartState: Map<string, ShoppingItem> = new Map()

export function shoppingCartReducer(state: Map<string, ShoppingItem> = defaultShoppingCartState, action: ShoppingCartAction) {
  switch (action.type) {
    case ADD_SHOPPING_ITEM:
      return {
        ...state,
        [action.Item!.ID]: action.Item
      };

    case REMOVE_SHOPPING_ITEM:
      return Object.keys(state).reduce((obj, ID): Map<string, ShoppingItem> => {
        if (action.ItemID !== ID) {
          obj[ID] = obj[ID];
        }
        return obj;
      }, new Map())

    default:
      return state;
  }
}

export default shoppingCartReducer;