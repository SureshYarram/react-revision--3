export const GETPRODUCT_LOADING = "GETPRODUCT_LOADING";
export const GETPRODUCTS= "GETPRODUCTS";
export const GETPRODUCT_ERROR = "GETPRODUCT_ERROR";


export const getProductsLoading = ()=>({
    type:GETPRODUCT_LOADING
})

export const Success = (payload)=>({
    type:GETPRODUCTS,
    payload
})
export const getProductsError = ()=>({
    type:GETPRODUCT_ERROR
})




