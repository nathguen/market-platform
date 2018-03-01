import { combineReducers } from 'redux';

import { userProfileReducer } from './user-profile';
import { shoppingCartReducer } from './shopping-cart';

export const rootReducer = combineReducers({
  userProfile: userProfileReducer,
  shoppingCart: shoppingCartReducer
});

export default rootReducer;