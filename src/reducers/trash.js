import {ADD_TRASH, REMOVE_TRASH} from '../actions/trash';

const trashState = [];

export default function reducer(state = trashState, action) {
  switch (action.type) {
    case ADD_TRASH:
      return [...action.trashes];
    case REMOVE_TRASH:
      return trashState;
    default: 
      return state;
  }
}