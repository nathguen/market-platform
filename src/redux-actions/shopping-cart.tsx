import { ShoppingItem } from '../typescript/classes';

export interface ShoppingCartAction {
  type: string
  ItemID?: string
  Item?: ShoppingItem
}

export const ADD_SHOPPING_ITEM = 'ADD_SHOPPING_ITEM';
export const REMOVE_SHOPPING_ITEM = 'REMOVE_SHOPPING_ITEM';

export function addShoppingItem(Item: ShoppingItem): ShoppingCartAction {
  return {
    type: ADD_SHOPPING_ITEM,
    Item
  };
}

export function removeShoppingItem(ItemID: string): ShoppingCartAction {
  return {
    type: REMOVE_SHOPPING_ITEM,
    ItemID
  };
}