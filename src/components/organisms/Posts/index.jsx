import PostCard from "@/components/molecules/Card";
import React from "react";
import { gql, useQuery } from "@apollo/client";

const ALL_POSTS = gql`
  query {
    posts {
      rows {
        id
        title
        body
        author {
          name
          id
        }
        categories {
          id
          name
        }
        reactions
      }
    }
  }
`;

const Posts = ({ posts }) => {
  const { data, error, loading } = useQuery(ALL_POSTS);
  return (
    <>
      <div className="">
        <div className="bg-primary flex flex-wrap">
          {loading ? (
            <p>Loading...</p>
          ) : (
            data &&
            data.posts.rows.map(({ ...post }) => {
              return (
                <>
                  <div className="md:w-1/2 xl:w-1/3 px-2 my-2">
                    <PostCard
                      title={post.title}
                      body={post.body}
                      categories={post.categories}
                    />
                  </div>
                </>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Posts;