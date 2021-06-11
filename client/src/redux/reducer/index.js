import reducerPublication from "./publication";
import reducerBarberDetail from "./barberDetail";

function combineReducer(state = {}, action) {
    return {
      publication: reducerPublication(state.publication,action),
      followers:{},
      follow:{},
      barberDetail: reducerBarberDetail(state.barberDetail,action)
    };
  }
  
  export default combineReducer;