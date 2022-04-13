import {combineReducers,createStore, applyMiddleware} from "redux";
import { Loginreducer } from "./Login/reducer";
import { Productreducer } from "./Product/reducer";
import thunk from "redux-thunk"



const rootReducer = combineReducers({

    login:Loginreducer,
   products :Productreducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk))