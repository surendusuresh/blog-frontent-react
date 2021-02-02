import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import moment from 'moment';

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

const Dashboard = () => {

  const { data, loading, error } = useQuery(GET_ALL_POSTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-2">
          <h3>placeholder</h3>
        </div>
        <div className="col-md-8">
          {data.allPosts.map((post) => {
            return (              
                <div className="card d-block mb-3" key={post.id}>
                  <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">{post.author.name}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">{moment(post.createdAt).format("MMM D")}</h6>
                    <h5 className="card-title h3">{post.title}</h5>
                    <p className="card-text text-muted">{post.tags}</p>                    
                  </div>
                </div>              
            );
          })}
        </div>
        <div className="col-md-2">
          <h3>placeholder</h3>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
