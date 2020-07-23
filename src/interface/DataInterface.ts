export interface IStopWatchState {
    laps: number[]
    timeStart: number
    timeEnd: number
    isRunning: boolean
}

export interface IStoreState {
    stopWatch: IStopWatchState
}