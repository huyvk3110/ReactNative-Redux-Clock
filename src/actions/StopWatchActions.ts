import common from "../common";

export function couterInscrease() {
    return { type: common.action.INSCREASE }
}

export function couterDescrease() {
    return { type: common.action.DESCREASE }
}