const setGlobalState = (number) => { //good
  return {
    type: 'setGlobalState',
    number: number
  }
};

export default setGlobalState;