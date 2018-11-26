import firebase from 'react-native-firebase';
const database = firebase.database();

/* Action Types */
export const GET_BINS = 'GET_BINS';

/* Action Creators */
export function getBins() {
  return async dispatch => {
    const user = await database.ref(`/bins`);
    user.once('value', (snapshot) => {
      let bins = snapshot.val();
      bins = Object.keys(bins).map((key) => { return bins[key] });
      dispatch({ type: GET_BINS, bins});
    });
  }
}