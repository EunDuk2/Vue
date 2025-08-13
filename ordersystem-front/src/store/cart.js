function initState() {
    return {
        totalQuantity: localStorage.getItem("totalQuantity") || 0,
    }
}

export const cart = {
    state: initState,

    mutations: {
        addCart(state, productCount) {
            state.totalQuantity += parseInt(state.totalQuantity) + productCount;
            localStorage.setItem("totalQuantity", state.totalQuantity);
        }
    },
    actions: {
        addCart(context, productCount) {
            context.commit("addCart", productCount);
        }
    },
    getters: {
        getTotalQuantity: state => state.totalQuantity   
    }
}