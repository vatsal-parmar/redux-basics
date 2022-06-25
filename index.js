const redux = require('redux');

const createStore = redux.createStore;

const BUY_CAKE = 'BUY_CAKE';

// in redux we create action creators to resue same action
// action creator which returns action
function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'First redux action',
  };
}

const initialState = {
  numOfCakes: 10,
};
// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
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
unsubscribe();
