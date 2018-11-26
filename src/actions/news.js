import firebase from 'react-native-firebase';
const database = firebase.database();

/* Action Types */
export const GET_NEWS = 'GET_NEWS';

/* Action Creators */
export function getNews() {
  return async dispatch => {
    const user = await database.ref(`/news`);
    user.once('value', (snapshot) => {
      let news = snapshot.val();
      news = Object.keys(news).map((key) => { return news[key] });
      dispatch({ type: GET_NEWS, news});
    });
  }
}