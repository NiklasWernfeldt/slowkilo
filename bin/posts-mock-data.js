const posts = [
  {
    image:
      "https://cdn.pixabay.com/photo/2016/02/19/11/19/office-1209640__340.jpg",
    title: "Working hard",
    user: "", //{ type: mongoose.SchemaTypes.ObjectId, ref: "User" }
    description: "Another day at the office with my colleagues.",
    date: "2020-10-25",
    comments: [],
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2016/01/19/17/41/friends-1149841_1280.jpg",
    title: "Cat & Dog",
    user: "",
    description: "Human's best friends",
    date: "2020-10-26",
    comments: [],
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2016/03/09/09/42/buildings-1245953_1280.jpg",
    title: "Night life",
    user: "",
    description: "",
    date: "2020-10-27",
    comments: [],
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2016/03/09/11/49/man-1246233_1280.jpg",
    title: "Nature",
    user: "",
    description: "",
    date: "2020-10-28",
    comments: [],
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074_1280.jpg",
    title: "Concert",
    user: "",
    description: "Amazing night with my guys",
    date: "2020-10-29",
    comments: [],
  },
];

module.exports = posts;
