import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const USERS_TAG = gql`
  query usersQuery {
    users {
      name
    }
  }
`;

const Users = () => {
  return (
    <Query query={USERS_TAG}>
      {({ data }) => {
        return (
          <div className="users">
            {data && data.users
              ? data.users.map((user, idx) => <h1 key={idx}>{user.name}</h1>)
              : null}
          </div>
        );
      }}
    </Query>
  );
};

export default Users;
