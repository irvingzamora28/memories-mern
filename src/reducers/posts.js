const reducer = (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
      break;
    case "CREATE":
      return [...posts, action.payload];
      break;
    case "UPDATE":
    case "LIKE":
      return posts.map((post) =>
        post._id == action.payload._id ? action.payload : post
      );
      break;
    case "DELETE":
      return posts.filter((post) => post._id != action.payload);
      break;
    default:
      return posts;
      break;
  }
};

export default reducer;
