import { DECREMENT, INCREMENT } from "../ActionType"

export function handleincrement () {
    return {type : INCREMENT, payload : 1}
}

export function handledecrement () {
    return {type : DECREMENT, payload : -1}
}