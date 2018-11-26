import firebase from 'react-native-firebase';
const database = firebase.database();

import { GET_USER } from './user';

/* Action Types */
export const GET_RECEIVER = 'GET_RECEIVER';
export const REMOVE_RECEIVER = 'REMOVE_RECEIVER';

/* Action Creators */
export function getReceiver(userId) {
  return async dispatch => {
    const user = database.ref(`/users/${userId}`);
    user.on('value', (snapshot) => {
      dispatch({
        type: GET_RECEIVER, user: {
          id: userId,
          ...snapshot.val()
        }
      });
    });
  }
}

export function updatePointReceiver(point) {
  return async (dispatch, getState) => {
    const { user, receiver } = getState();
    const transferPoint = parseInt(point);

    const userRef = database.ref(`/users/${user.id}`);
    const receiverRef = database.ref(`/users/${receiver.id}`);

    userRef.update({
      point: user.point - transferPoint
    });

    receiverRef.update({
      point: receiver.point + transferPoint
    });

    // Loading the latest user data from database
    dispatch({ type: GET_USER });

    // Loading the latest receiver data from database
    getReceiver(receiver.id);
  };
}

export function removeReceiver() {
  return { type: REMOVE_RECEIVER };
}