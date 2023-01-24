import React from "react";

function AuthorTable({ authors }) {
  return (
    <>
      <div class="overflow-x-auto w-full">
        <table class="table w-full">
          <thead className="text-primary">
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody className="text-accent">
            {authors.map(({ ...row }) => {
              return (
                <>
                  <tr>
                    <td>{row.name}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AuthorTable;
