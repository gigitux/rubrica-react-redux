import * as types from '../constants/ActionTypes';
import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import mapValues from 'lodash/object/mapValues';

const initialState = {
  friends: [1, 2, 3],
  friendsById: [
    {
      id: 1,
      name: 'Theodore Roosevelt',
      phone: '8080880808'
    },
    {
      id: 2,
      name: 'Abraham Lincoln',
      phone: '808080880'
    },
   {
      id: 3,
      name: 'George Washington',
      phone: '9191919'
    },
  ]
};

export default function friends(state = initialState, action) {
  switch (action.type) {

    case types.ADD_FRIEND:
      const newId = state.friends[state.friends.length-1] + 1;
      return {
        ...state,
        friends: state.friends.concat(newId),
        friendsById: [
          ...state.friendsById,
           {
            id: newId,
            name: action.name,
            phone: action.phone
          }
        ]
      }

    case types.DELETE_FRIEND:
      return {
        ...state,
        friendsById: omit(state.friendsById.name, action.id)
      }

    case types.STAR_FRIEND:
      return {
        ...state,
        friendsById: mapValues(state.friendsById, (friend) => {
          return friend.id === action.id ?
            assign({}, friend, { starred: !friend.starred }) :
            friend
        })
      }

    default:
      return state;
  }
}
