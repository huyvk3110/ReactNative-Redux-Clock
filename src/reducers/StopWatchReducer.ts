import common from "../common";
import { IStopWatchState } from "../interface/DataInterface";

const initialState: IStopWatchState = {
    laps: [],
    timeStart: Date.now(),
    timeEnd: Date.now(),
    isRunning: false,
};

export default function (state = initialState, action: { type: string, payload?: any }) {
    switch (action.type) {
        case common.action.START_TIMING:
            // In case time not reset => resume
            // Incase time reset with laps lengh is zero, start again
            if(!state.laps.length) {
                return Object.assign({}, state, {
                    laps: [0],
                    timeStart: Date.now(),
                    timeEnd: Date.now(),
                    isRunning: true
                });
            }else {
                return Object.assign({}, state, {
                    timeStart: Date.now() - state.laps[state.laps.length - 1],
                    timeEnd: Date.now(),
                    isRunning: true
                });
            }
        case common.action.STOP_TIMING:
            return Object.assign({}, state, {
                isRunning: false
            });
        case common.action.ADD_LAP:
            return Object.assign({}, state, {
                laps: [...state.laps].concat(state.timeEnd - state.timeStart)
            });
        case common.action.RESET_LAP:
            return Object.assign({}, state, {
                laps: []
            });;
        case common.action.SET_TIME_END:
            let nTimeEnd = Date.now()
            let nlaps = state.laps.slice(0, state.laps.length - 1).concat(nTimeEnd - state.timeStart)
            return Object.assign({}, state, {
                laps: nlaps,
                timeEnd: nTimeEnd
            });
        default:
            return state;
    }
}