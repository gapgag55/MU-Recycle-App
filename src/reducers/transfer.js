const state = {
  id: '',
  email: '',
  fullname: '',
  point: 0
};

export default function reducer(state = state, action) {
  switch (action.type) {
    case 'SET_RECEIVER': 
      return {...state, ...action.user};
    default: 
      return state;
  }
}