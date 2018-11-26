import firebase from 'react-native-firebase';
const database = firebase.database();

/* Action Types */
export const GET_RECEIVER = 'GET_RECEIVER';
export const REMOVE_RECEIVER = 'REMOVE_RECEIVER';

/* Action Creators */
export function getReceiver(userId) {
  return async dispatch => {
    const user =  database.ref(`/users/${userId}`);
    user.on('value', (snapshot) => {
      console.log(userId, snapshot.val());
      dispatch({
        type: GET_USER, user: {
          id: userId,
          ...snapshot.val()
        }
      });
    });
  }
}

export function updatePointReceiver(point) {
  return async dispatch => {
    // const uid = navigation.getParam('userId');

    // var user = firebase.database().ref(`/users/${uid}`)
    // user.update({
    //   point: this.state.receiver.point + point
    // });
  };
}

export function removeReceiver() {
  return {type: REMOVE_RECEIVER};
}