import { ComponentElement } from "react";

export interface IStopWatchState {
    laps: number[]
    timeStart: number
    timeEnd: number
    isRunning: boolean
}

export interface IStopWatchButtonAreaItemProps {
    title: string,
    state: 'disable' | 'normal' | 'success' | 'danger' | 'warning',
}

export interface IStopWatchLapsListProps {
    lap: number,
    time: number,
}