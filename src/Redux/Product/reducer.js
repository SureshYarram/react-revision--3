
import { GETPRODUCTS, GETPRODUCT_LOADING , GETPRODUCT_ERROR} from "./action";


const initState = {
    laoding:false,
    error:false,
    products: []
}


const Productreducer = (store=initState , {type,payload})=>{

        switch(type){
            case GETPRODUCT_LOADING:
                return {...store , loading:true}
                case GETPRODUCTS:
                return  {...store,products:[...payload]}
                case GETPRODUCT_ERROR:
                 return  {...store,error:true}
                 default:
                     return store
        }
}

export {Productreducer}