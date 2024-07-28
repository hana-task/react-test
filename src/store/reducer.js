const StateActionType = {
    SetData: "SetData",
};

class GlobalState {
    constructor() {
            this.data = [];
    }
}

export function SetData(data) {
    return {
        type: StateActionType.SetData,
        payload: data,
    };
}



export function stateReducer(currentState = new GlobalState(), action) {
    const newState = { ...currentState };
    switch (action.type) {
        case StateActionType.SetData:
               newState.data = action.payload
           break;

        default:
            return currentState;
    }

    return newState;
}
