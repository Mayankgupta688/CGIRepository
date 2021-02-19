export function setTrainData(trainList) {
    debugger;
    return {
        type: "SET_STORE_DATA_TRAIN",
        payload: trainList
    }
}

export function deleteTrainData(trainId) {
    return {
        type: "DELETE_STORE_DATA_TRAIN",
        payload: trainId
    }
}