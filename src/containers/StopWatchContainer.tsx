import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { setTimeEnd } from "../actions/StopWatchActions";
import StopWatchTimeDisplay from '../components/StopWatchTimeDisplay';
import StopWatchButtonArea from '../components/StopWatchButtonArea';
import stopWatchStyles from '../styles/StopWatchStyles';
import StopWatchLapsList from '../components/StopWatchLapsList';
import { IStoreState, IStopWatchState } from '../interface/DataInterface';

let timeOut: NodeJS.Timeout | undefined = undefined;

class StopWatchContainer extends Component<{ data: IStopWatchState, setTimeEnd: Function }> {
    componentDidUpdate() {
        const { data, setTimeEnd } = this.props;
        //Clear old timeout
        if(timeOut) clearTimeout(timeOut)
        //Start timeout 
        if (data.isRunning) {
            timeOut = setTimeout(() => { 
                // Set new time end
                setTimeEnd() 
                //Clear timeout
                timeOut = undefined
            }, 20)
        }else {
            timeOut = undefined
        }
    }

    render() {
        return (
            <View style={stopWatchStyles.container.contain}>
                <StopWatchTimeDisplay />
                <StopWatchButtonArea />
                <StopWatchLapsList />
            </View>
        )
    }
}

const mapStateToProps = (state: IStoreState) => ({
    data: state.stopWatch
})

const mapDispatchToProps = {
    setTimeEnd
}

export default connect(mapStateToProps, mapDispatchToProps)(StopWatchContainer)