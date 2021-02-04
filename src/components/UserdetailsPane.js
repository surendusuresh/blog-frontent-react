import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_USER = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      email
      name
      location
      company
      description
      posts {
        title
      }
    }
  }
`;

const UserdetailsPane = (props) => {
  const { data, loading, error } = useQuery(GET_USER, {
    fetchPolicy: "network-only",
    variables: { id: props.id },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <div className="card d-block mb-3 curved-radius">
      <div className="card-body">                
        <h5 className="card-title h3 mb-5">          
            {data.user.name}         
        </h5>
        <p className="card-subtitle text-muted mb-3">{data.user.description}</p>
        <h6>Work</h6>
        <p className="card-text text-muted">{data.user.company}</p>
        <h6>Location</h6>
        <p className="card-text text-muted">{data.user.location}</p>
      </div>
    </div>
  );
};

export default UserdetailsPane;
