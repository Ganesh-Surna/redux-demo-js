const redux=require("redux");

const counterReducer=(state={count:0},action)=>{
    if(action.type==="increment"){
        return {count:state.count+1};
    }
    if(action.type==="decrement"){
        return {count:state.count-1};
    }
    return state;
    // return {count:state.count+1};
}

const store=redux.createStore(counterReducer);

// console.log(store.getState());

const counterSubscriber=()=>{
    console.log(store.getState());
};

store.subscribe(counterSubscriber);
store.dispatch({type:"increment"});
store.dispatch({type:"increment"});