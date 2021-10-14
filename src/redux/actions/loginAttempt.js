const { LOGIN_ATTEMPT } = require("../constants/constants");

//2. Action Creator
function loginAttempt(tkn){
    return {
      type:LOGIN_ATTEMPT,
      payload:tkn
    }
  }

  module.exports = loginAttempt;