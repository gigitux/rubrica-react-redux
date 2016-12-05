 import * as types from '../constants/ActionTypes';

export function addFriend(name,phone) {
  return {
    type: types.ADD_FRIEND,
    name,
    phone
  };
}

export function deleteFriend(name) {
  return {
    type: types.DELETE_FRIEND,
    id,
    name
  };
}

export function starFriend(id) {
  return {
    type: types.STAR_FRIEND,
    id
  };
}
