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
    case 'GET_USER': 
      return {...state, ...action.user};
    case 'SET_USER': 
      return {...state, ...action.user};
    case 'REMOVE_USER':
      return userState;
    default: 
      return state;
  }
}