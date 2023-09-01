import { profileID } from "../Globals";

const initialState = {
    posts: [],
    selectedPost: null,
    comments:[]
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_POSTS':
        return { ...state, posts: action.payload.filter(e => e.userId === profileID) };
      case 'SET_SELECTED_POST':
        return { ...state, selectedPost: action.payload };
      case 'DELETE_POST':
        return { ...state, posts: state.posts.filter(post => post.id !== action.payload) };
      case 'SET_COMMENTS':
        return {...state, comments:  action.payload}
      default:
        return state;
    }
  };
  
  export { initialState, reducer };