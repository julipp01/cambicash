export function selectTypeBuy() {
  return {
    type: 'SELECT_TYPE_BUY',

  }
}
export function selectTypeSale() {
  return {
    type: 'SELECT_TYPE_SALE',

  }
}

export function converterSale(term) {
  return {
    type: 'CONVERTER_SALE',
    payload : term

  }
}


export function converterBuy(term) {
  return {
    type: 'CONVERTER_BUY',
    payload : term

  }
}