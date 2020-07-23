import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    contain: {
        flex: 1,
        paddingTop: 15,
        paddingHorizontal: 15,
    },
    text: {
        color: 'white',
        fontSize: 19,
    },
    navigationIcon: {
        width: 30,
        height: 30,
    }
})

export const colorText = StyleSheet.create({
    disable: { color: 'rgba(152,152,158,0.5)' },
    normal: { color: 'rgb(152,152,158)' },
    success: { color: 'rgb(102,203,102)' },
    danger: { color: 'rgb(228,81,67)' },
    warning: { color: 'rgb(243,162,60)' },
})

export const colorBackground = StyleSheet.create({
    disable: { backgroundColor: 'rgba(35,35,35,1)' },
    normal: { backgroundColor: 'rgb(45,45,45)' },
    success: { backgroundColor: 'rgb(19,41,20)' },
    danger: { backgroundColor: 'rgb(47,16,14)' },
    warning: { backgroundColor: 'rgb(243,162,60)' },
})

export const colorBorder = StyleSheet.create({
    disable: { borderColor: 'rgba(35,35,35,1)' },
    normal: { borderColor: 'rgb(45,45,45)' },
    success: { borderColor: 'rgb(19,41,20)' },
    danger: { borderColor: 'rgb(47,16,14)' },
    warning: { borderColor: 'rgb(243,162,60)' },
})

export const colorTint = StyleSheet.create({
    disable: { tintColor: 'rgba(152,152,158,0.5)' },
    normal: { tintColor: 'rgb(152,152,158)' },
    success: { tintColor: 'rgb(102,203,102)' },
    danger: { tintColor: 'rgb(228,81,67)' },
    warning: { tintColor: 'rgb(243,162,60)' },
})