import { UserProfileAction, SET_FIRST_NAME, SET_LAST_NAME } from '../redux-actions/user-profile';

class UserProfileState {
  FirstName?: string
  LastName?: string

  PrimaryPhone?: string
  HomePhone?: string
  CellPhone?: string
  WorkPhone?: string

  Email?: string

  ID?: string
}

export const defaultUserProfileState: UserProfileState = {
  FirstName: '',
  LastName: '',
  PrimaryPhone: '',
  HomePhone: '',
  CellPhone: '',
  WorkPhone: '',
  Email: '',
  ID: ''
};

export function userProfileReducer(state: UserProfileState = defaultUserProfileState, action: UserProfileAction): UserProfileState {
  switch (action.type) {
    case SET_FIRST_NAME:
      return {
        ...state,
        FirstName: action.FirstName
      };

    case SET_LAST_NAME:
      return {
        ...state,
        LastName: action.LastName
      };

    default:
      return state;
  }
}
