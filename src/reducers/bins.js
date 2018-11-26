import {GET_BINS} from '../actions/bins';

const binState = [];

export default function reducer(state = binState, action) {
  switch (action.type) {
    case GET_BINS:
      return action.bins
    default:
      return state;
  }
}