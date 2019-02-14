export default {
  Query: {
    users: (parent, args) => [
      {
        name: "User 1"
      },
      {
        name: "User 2"
      }
    ]
  }
};
