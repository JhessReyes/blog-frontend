import PostCard from "@/components/molecules/PostCard";
import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import LimitInput from "@/components/atom/inputs/LimitInput";

const Posts = ({ posts }) => {
  const [limit, setLimit] = useState("5");

  let ALL_POSTS = gql`
    query {
      posts (options: {limit : ${limit} }) {
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
  const { data, error, loading } = useQuery(ALL_POSTS);
  return (
    <>
      <div className="">
        <div className="flex justify-center">
          <LimitInput onChange={(event) => setLimit(event.target.value)} />
        </div>
        <div className="bg-primary flex flex-wrap">
          {loading ? (
            <>
              <p>Loading...</p>
              <progress class="progress w-full h-2"></progress>
            </>
          ) : (
            data &&
            data.posts.rows.map(({ ...post }) => {
              return (
                <>
                  <div className="md:w-1/2 xl:w-1/3 px-2 my-2">
                    <PostCard
                      title={post.title}
                      author={post.author}
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
