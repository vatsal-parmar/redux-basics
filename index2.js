const redux = require('redux');

const createStore = redux.createStore;

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

// in redux we create action creators to resue same action
// action creator which returns action
function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'First redux action',
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
  };
}

const initialState = {
  numOfCakes: 10,
  numOfIceCreams: 20,
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log('Initial state', store.getState());
const unsubscribe = store.subscribe(() =>
  console.log('Updated state', store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();

// const initialCakeState = {
//   numOfCakes: 10,
// };

// const initialIceCreamState = {
//   numOfIceCreams: 20,
// };

// const cakeReducer = (state = initialCakeState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1,
//       };
//     default:
//       return state;
//   }
// };

// const iceCreamReducer = (state = initialIceCreamState, action) => {
//   switch (action.type) {
//     case BUY_ICECREAM:
//       return {
//         ...state,
//         numOfIceCreams: state.numOfIceCreams - 1,
//       };
//     default:
//       return state;
//   }
// };
