import { Vibration } from 'react-native';
import firebase from 'react-native-firebase';
const database = firebase.database();

/* Action Types */
export const ADD_TRASH = 'ADD_TRASH';
export const REMOVE_TRASH = 'REMOVE_TRASH';
export const UPDATE_POINT_USER = 'UPDATE_POINT_USER';

/* Action Creators */
export function addTrash(code) {
  return async (dispatch, getState) => {
    const trashState = [...getState().trashes];
    const trash = database.ref(`/trashes`);

    trash.on('value', (snapshot) => {
      let trashes = snapshot.val();
      trashes = Object.keys(trashes).map((key) => { return trashes[key] });
      let addedTrash = trashes.filter(item => item.code == code);

      if (addedTrash.length < 1) return;

      // 1. If not found trash -> addTrash
      // 2. If found, increase amount

      let found = 0;
      for (let i = 0; i < trashState.length; i++) {
        if (trashState[i].code == addedTrash[0].code) {

          trashState[i].amount += 1;

          found = 1;
          break;
        }
      }

      if (!found)
        trashState.push({ ...addedTrash[0], amount: 1 });

      dispatch({
        type: ADD_TRASH,
        trashes: trashState
      });

      Vibration.vibrate(10000);
    });
  }
}

export function removeTrash() {
  return { type: REMOVE_TRASH };
}

export function updatePointUser() {
  return (dispatch, getState) => {
    const { user, trashes } = getState();
    const userRef = database.ref(`/users/${user.id}`);

    let point = 0;
  
    for (let i = 0; i < trashes.length; i++) {
      point += (trashes[i].amount * trashes[i].rate);
    }

    userRef.update({
      point: (parseFloat(user.point) + parseFloat(point)).toFixed(2)
    });
  }
}