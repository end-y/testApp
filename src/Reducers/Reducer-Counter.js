const initialState = {
    blogCount: 0 // Başlangıçta 0 blog gönderisi var
};

const blogCountReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'BLOG_COUNT':
        return {
            ...state,
            blogCount:  action.payload // Blog uzunluğunu artır
          };
    case "BLOG_ADD_COUNT":
        return {
          ...state,
          blogCount: +action.payload+1 // Blog uzunluğunu artır
        };
    default:
        return state;
  }
};

export default blogCountReducer;