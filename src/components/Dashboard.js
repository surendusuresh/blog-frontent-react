import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import moment from 'moment';

const Dashboard = () => {
  const GET_ALL_POSTS = gql`
    {
      allPosts {
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
              <div key={post.id}>
                <div class="card d-block mb-3">
                  <div class="card-body">
                    <h6 class="card-subtitle mb-2 text-muted">{post.author.name}</h6>
                    <h7 class="card-subtitle mb-2 text-muted">{moment(post.createdAt).format("MMM D")}</h7>
                    <h5 class="card-title h3">{post.title}</h5>
                    <p class="card-text text-muted">{post.tags}</p>                    
                  </div>
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
