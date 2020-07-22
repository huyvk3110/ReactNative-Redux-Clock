import { createStore } from "redux";
import reducer from "./reducers";

const store = createStore(reducer);

store.subscribe(() => console.log('Store', store.getState()))

export default store;