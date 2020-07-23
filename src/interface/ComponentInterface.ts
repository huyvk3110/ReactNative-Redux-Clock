import { ComponentElement } from "react";
import { IStopWatchState } from "./DataInterface";

export interface IStopWatchButtonAreaItemProps {
    title: string,
    handle: Function,
    state: 'disable' | 'normal' | 'success' | 'danger' | 'warning',
}

export interface IStopWatchLapsListProps {
    lap: number,
    time: number,
}

export interface IStopWatchButtonArea {
    data: IStopWatchState,
    startTiming: Function,
    stopTiming: Function,
    addLap: Function,
    resetLap: Function,
    setTimeEnd: Function,
}