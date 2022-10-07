const initial = {
  courseList: [
    {
      id: 1,
      title: "only limit is your mind ",
    },
    {
      id: 2,
      title: "only limit is your mind ",
    },
  ],
};

 export const coursesReducer = (state = initial, { type, payload }) => {
  switch (type) {
    case "all":
      return state;
    default:
      return state;
  }
};
