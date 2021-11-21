import { combineReducers } from "redux";
import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  // communities: communitiesReducer,
  // follows: followsReducer,
  // posts: postsReducer,
  // comments: commentsReducer,
  // votes: votesReducer,
  // saves: savesReducer
});

export default entitiesReducer;