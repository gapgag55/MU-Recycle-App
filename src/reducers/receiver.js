import {GET_RECEIVER, REMOVE_RECEIVER} from '../actions/receiver';

const userState = {
  id: '',
  email: '',
  fullname: '',
  point: 0,
  type: '',
  fcmToken: ''
};

export default function reducer(state = userState, action) {
  switch (action.type) {
    case GET_RECEIVER: 
      return {...state, ...action.user};
    case REMOVE_RECEIVER:
      return userState;
    default: 
      return state;
  }
}