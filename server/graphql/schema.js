export default `
    type User {
        name: String!
    }

    type Query {
        users: [User!]!
    }
`;
