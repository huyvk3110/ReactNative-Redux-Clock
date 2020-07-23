import common from "../common";

export function startTiming() {
    return { type: common.action.START_TIMING }
}

export function stopTiming() {
    return { type: common.action.STOP_TIMING }
}

export function addLap() {
    return { type: common.action.ADD_LAP }
}

export function resetLap() {
    return { type: common.action.RESET_LAP }
}

export function setTimeEnd() {
    return { type: common.action.SET_TIME_END }
}