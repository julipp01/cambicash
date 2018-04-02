export function solesToDolar() {
  return {
    type: 'SOLES_TO_DOLAR',

  }
}
export function dolarToSoles() {
  return {
    type: 'DOLAR_TO_SOLES',

  }
}

export function buyingSoles(term) {
  return {
    type: 'BUYING_SOLES',
    payload : term

  }
}


export function buyingDolar(term) {
  return {
    type: 'BUYING_DOLAR',
    payload : term

  }
}