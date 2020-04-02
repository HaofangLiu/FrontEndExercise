import { createStore, combineReducers } from "redux";
import topics from "./reducer/topic_list";
import topic from "./reducer/topic";

export default createStore(
  combineReducers({
    topics,
    topic
  })
);
