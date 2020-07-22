import common from "../common";

const initialState = 0;

export default function (state = initialState, action: { type: string }) {
    switch (action.type) {
        case common.action.INSCREASE:
            return state + 1
        case common.action.DESCREASE:
            return state - 1
        default:
            return state;
    }
}