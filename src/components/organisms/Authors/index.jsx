import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import AuthorTable from "@/components/molecules/AuthorTable";
import LimitInput from "@/components/atom/inputs/LimitInput";

function Authors() {
  const [limit, setLimit] = useState("5");

  let ALL_AUTHORS = gql`
    query {
      authors(options: { limit: ${limit} }) {
        rows {
          id
          name
        }
      }
    }
  `;

  const { data, error, loading } = useQuery(ALL_AUTHORS);

  return (
    <>
      <div className="flex-0">
        <LimitInput onChange={(event) => setLimit(event.target.value)} />
        <div className="bg-primary">
          {loading ? (
            <>
              <p>Loading...</p>
              <progress class="progress w-full h-2"></progress>
            </>
          ) : (
            data && <AuthorTable authors={data.authors.rows} />
          )}
        </div>
      </div>
    </>
  );
}

export default Authors;
