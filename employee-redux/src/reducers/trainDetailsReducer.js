export default function trainDetailsReducer(state=[], action) {
    if(action.type === "SET_STORE_DATA_TRAIN") {
        return action.payload;
    } else if(action.type === "DELETE_STORE_DATA_TRAIN") {
        return state.filter((train) => {
            return train.id !== action.payload;
        });
    }
    return state;
}