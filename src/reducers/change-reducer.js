
// valores de cambio
const BUY = 3.2480;
const SALE = 3.2700;



const INIT_STATE = {
    isChange1: true,
    isChange2: false,
    isShow1: true,
    isShow2: false,
    term1: 0,
    result1: 0,
    term2: 0,
    result2: 0,
    change:BUY,
    type : 'COMPRA',
    typeMoney : 'SOLES',
    typeChange :'USD'
   }



export default (state = INIT_STATE  , action)=>{
  
    switch (action.type) {
      case 'SOLES_TO_DOLAR':
      return {...state,
        isChange1: true,
        isChange2: false,
        isShow1: true,
        isShow2: false,
        type : 'COMPRA',
        typeMoney: 'SOLES',
        typeChange : 'USD',
        change : BUY,
      };
      case 'DOLAR_TO_SOLES':
      return {...state,
        isChange2: true,
        isChange1: false,
        isShow1: false,
        isShow2: true,
        type : 'VENTA',
        typeMoney: 'USD',
        typeChange : 'SOLES',
        change : SALE,
      };
      case 'BUYING_DOLAR':
      return { ...state,
          term1: action.payload,
          result1: (action.payload / BUY).toFixed(2)
      };
    case 'BUYING_SOLES':
      return { ...state,
        term2: action.payload,
        result2: (action.payload * SALE).toFixed(2)
      };
     
      default : return state;
    }
  
  }
