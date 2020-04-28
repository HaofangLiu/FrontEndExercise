import { createStore, combineReducers } from "redux";
import topics from "./reducer/topic_list";

export default createStore(
  combineReducers({
    topics
  })
);
