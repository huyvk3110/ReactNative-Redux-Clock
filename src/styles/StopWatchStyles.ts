import { StyleSheet } from "react-native";
import { styles, colorBackground, colorBorder, colorText } from "./Styles";

const container = StyleSheet.create({
    contain: {

    },
})

const timeDisplay = StyleSheet.create({
    contain: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    time: {
        flexDirection: 'row'
    },
    text: {
        fontSize: 95,
        fontWeight: '200',
        textAlign: "center",
    },
    number: {
        flex: 0.3,
    },
    symbol: {
        flex: 0.05,
    },
})

const buttonSize = 90;
const buttonArea = StyleSheet.create({
    contain: {
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    buttonBorder: {
        height: buttonSize,
        width: buttonSize,
        borderRadius: buttonSize * 0.5,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContent: {
        width: buttonSize - 8,
        height: buttonSize - 8,
        borderRadius: (buttonSize - 10) * 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

const stopWatchLapsList = StyleSheet.create({
    contain: {
        marginTop: 10,
        height: 320,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        minHeight: 38,
        paddingVertical: 8,
        borderTopWidth: 1,
        borderTopColor: 'rgba(255,255,255,0.1)',
    },
    text: {
        // fontSize: 18,
    }
})

const stopWatchStyles = {
    container: {
        contain: StyleSheet.flatten([styles.contain, container.contain]),
    },
    timeDisplay: {
        contain: timeDisplay.contain,
        time: timeDisplay.time,
        number: StyleSheet.flatten([styles.text, timeDisplay.text, timeDisplay.number]),
        symbol: StyleSheet.flatten([styles.text, timeDisplay.text, timeDisplay.symbol]),
    },
    buttonArea: {
        contain: buttonArea.contain,
        state: {
            disable: {
                buttonBorder: StyleSheet.flatten([buttonArea.buttonBorder, colorBorder.disable]),
                buttonContent: StyleSheet.flatten([buttonArea.buttonContent, colorBackground.disable]),
                buttonTitle: StyleSheet.flatten([styles.text, colorText.disable]),
            },
            normal: {
                buttonBorder: StyleSheet.flatten([buttonArea.buttonBorder, colorBorder.normal]),
                buttonContent: StyleSheet.flatten([buttonArea.buttonContent, colorBackground.normal]),
                buttonTitle: StyleSheet.flatten([styles.text, colorText.normal]),
            },
            success: {
                buttonBorder: StyleSheet.flatten([buttonArea.buttonBorder, colorBorder.success]),
                buttonContent: StyleSheet.flatten([buttonArea.buttonContent, colorBackground.success]),
                buttonTitle: StyleSheet.flatten([styles.text, colorText.success]),
            },
            danger: {
                buttonBorder: StyleSheet.flatten([buttonArea.buttonBorder, colorBorder.danger]),
                buttonContent: StyleSheet.flatten([buttonArea.buttonContent, colorBackground.danger]),
                buttonTitle: StyleSheet.flatten([styles.text, colorText.danger]),
            },
            warning: {
                buttonBorder: StyleSheet.flatten([buttonArea.buttonBorder, colorBorder.warning]),
                buttonContent: StyleSheet.flatten([buttonArea.buttonContent, colorBackground.warning]),
                buttonTitle: StyleSheet.flatten([styles.text, colorText.warning]),
            },
        }
    },
    stopWatchLapsList: {
        contain: stopWatchLapsList.contain,
        item: stopWatchLapsList.item,
        text: StyleSheet.flatten([styles.text, stopWatchLapsList.text]),
    },
}

export default stopWatchStyles;