const { LOGIN_ATTEMPT } = require("../constants/constants");
const initialState = require("../initialState");

let rootReducer = (newState = initialState,action)=>{
    switch(action.type){
      case LOGIN_ATTEMPT:
        return {
          ...newState,
          token:newState.payload
        }
      case 2:
        break;
      default:
        return newState;
    }
  }

  export default rootReducer