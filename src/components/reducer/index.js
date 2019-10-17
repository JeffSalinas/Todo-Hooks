const changeState = (state, number) => { //good
  return { ...state, number: number };
}

const globalReducer = (state, action) => { //good
  switch (action.type) {
    case 'setGlobalState':
      console.log('hello from reducer')
      return changeState(state, action.number);
    default:
      console.log('hello from default')
      return state;

  }
};

export default globalReducer;