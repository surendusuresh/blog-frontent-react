import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import moment from "moment";
import UserdetailsPane from "./UserdetailsPane"

const GET_POST = gql`
  query getPost($id: ID!) {
    post(id: $id) {
      title
      body
      slug
      tags
      author {
        name
        id
      }
    }
  }
`;

const ShowPost = (props) => {
  const { data, loading, error } = useQuery(GET_POST, {
    variables: { id: props.location.state.id },
    fetchPolicy: "network-only",
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  const HtmlToReactParser = require("html-to-react").Parser;
  const htmlToReactParser = new HtmlToReactParser();
  const body = htmlToReactParser.parse(data.post.body);

  return (
    <div className="">
      <div className="row mt-4">      
        <div className="col-md-2"></div>  
        <div className="col-md-6 bg-white px-5 curved-radius">
          <h1 className="mt-5">{data.post.title}</h1>
          <small className="text-dark bg-success p-1 font-weight-bold">
            {data.post.tags}
          </small>
          <h6 className="text-dark mt-4">
            {data.post.author.name}
            <span className="ml-4 text-muted">
              {moment(data.post.createdAt).format("MMM D")}
            </span>
          </h6>
          <div className="my-5">{body}</div>
          <hr />
        </div>
        <div className="col-md-3">
          <UserdetailsPane id={data.post.author.id}/>
        </div>
      </div>
    </div>
  );
};

export default ShowPost;
