const initState = {
  term1: 0,
  result1: 0,
  term2: 0,
  result2: 0
}

const moneyReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CONVERTER_SALE':
      return {
        ...state,
        isChange1: true,
        isChange2: false,
        isShow1: true,
        isShow2: false
      };
    case 'CONVERTER_BUY':
      return {
        ...state,
        isChange2: true,
        isChange1: false,
        isShow1: false,
        isShow2: true
      };

    default: return state;
  }
  return state;
}

export default moneyReducer
