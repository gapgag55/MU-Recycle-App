import {ADD_TRASH, REMOVE_TRASH} from '../actions/trash';

const trashState = [];

// const trashState = [{
//   name: 'ขวดใส',
//   price: 10.05,
//   amount: 2
// }, {
//   name: 'กระป๋อง',
//   price: 20,
//   amount: 1
// }];

export default function reducer(state = trashState, action) {
  switch (action.type) {
    case ADD_TRASH:
      const trashes = state.slice();

      /*
        [{
          name: 'ขวดใส',
          price: 10.05
        }, {
          name: 'ขวดใส',
          price: 10.05
        } {
          name: 'กระป๋อง',
          price: 20
        }]

        convert to 

        [{
          name: 'ขวดใส',
          price: 10.05,
          amount: 2
        }, {
          name: 'กระป๋อง',
          price: 20,
          amount: 1
        }]

      */
      return trashes.push(action.trash);
    case REMOVE_TRASH:
      return trashState;
    default: 
      return state;
  }
}