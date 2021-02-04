import React from "react";
import moment from 'moment';
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Link } from 'react-router-dom'

const GET_ALL_POSTS = gql`
    {
      allPosts {
        id
        title
        body
        slug
        tags
        author {
          name
        }
      }
    }
  `;

const Posts = () => {
  const { data, loading, error } = useQuery(GET_ALL_POSTS, {
    fetchPolicy: "network-only"
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <div>
      <h4>Posts</h4>
      {data.allPosts.map((post) => {
        return (
          <div className="card d-block mb-3 curved-radius" key={post.id}>
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted">
                {post.author.name}
              </h6>
              <h6 className="card-subtitle mb-2 text-muted">
                {moment(post.createdAt).format("MMM D")}
              </h6>
              <h5 className="card-title h3"><Link to={{pathname: `showpost/${post.author.name}/${post.slug}`, state: {id: post.id}}} className="text-decoration-none text-dark">{post.title}</Link></h5>
              <p className="card-text text-muted">{post.tags}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts