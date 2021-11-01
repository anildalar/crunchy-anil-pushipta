const { LOGIN_ATTEMPT } = require("../constants/constants");
const initialState = require("../initialState");

let rootReducer = (state = initialState,action)=>{
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          user: action.payload,
        };
      case "LOGOUT":
        
        return {
          ...state,
          user: null,
        };
      default:
        return state;
    }
  }

  module.exports = rootReducer;