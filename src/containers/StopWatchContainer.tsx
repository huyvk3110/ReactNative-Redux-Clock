import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { couterDescrease, couterInscrease } from '../actions/StopWatchActions'
import { connect } from 'react-redux';

class StopWatchContainer extends Component {
    render() {
        let {couterInscrease, couterDescrease} = (this.props as any);

        return (
            <View>
                <Text>Hello stop watch container</Text>
                <Button
                    title="Inscrease"
                    onPress={
                        couterInscrease
                    }
                />
                <Button
                    title="Descrease"
                    onPress={
                        couterDescrease
                    }
                />
            </View>
        )
    }
}

const mapStateToProps = ({ stopWatch }: any) => ({ stopWatch })

const mapDispatchToProps = {
    couterInscrease,
    couterDescrease,
}

export default connect(mapStateToProps, mapDispatchToProps)(StopWatchContainer)