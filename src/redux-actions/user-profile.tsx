export const SET_FIRST_NAME = 'SET_FIRST_NAME';
export const SET_LAST_NAME = 'SET_LAST_NAME';

export interface UserProfileAction {
  type: string
  FirstName?: string
  LastName?: string
}

export function setUserProfileFirstName(FirstName: string): UserProfileAction {
  return {
    type: SET_FIRST_NAME,
    FirstName
  };
}

export function setUserProfileLastName(LastName: string): UserProfileAction {
  return {
    type: SET_LAST_NAME,
    LastName
  };
}