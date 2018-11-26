/* Action Types */
export const ADD_TRASH = 'ADD_TRASH';
export const REMOVE_TRASH = 'REMOVE_TRASH';

/* Action Creators */
export function addTrash() {
  return async dispatch => {
    // const userId = await AsyncStorage.getItem('userId');
    // const user =  database.ref(`/users/${userId}`);
    // user.on('value', (snapshot) => {
    //   dispatch({
    //     type: GET_USER, user: {
    //       id: userId,
    //       ...snapshot.val()
    //     }
    //   });
    // });
  }
}

export function removeTrash() {
  return { type: REMOVE_TRASH };
}