import React from "react";

const PostCard = ({ title, body, categories }) => {
  return (
    <div class="card bg-base-100 shadow-xl md:w-50">
      <div class="card-body">
        <h2 class="card-title text-primary">{title}</h2>
        <p className="text-secondary">{body}</p>
        <div class="card-actions justify-end">
          <div className="px-2 py-4">
            {categories.map(({ ...category }) => {
              return (
                <>
                  <span className="inline-block bg-gray-200 rounded-full mx-1 my-1 px-3 py-1 text-sm font-semibold text-gray-400">
                    #{category.name}
                  </span>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;

/* PARÁMETROS 
El componente PostCard puede recibir los siguientes parametros 
title: String
body: String
categories: [Object]

USO DEL COMPONENTE
<PostCard
    title="Hola Mundo"
    body="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. "
    categories={[
        { name: "category" },
        { name: "category" },
    ]}
/>

*/
