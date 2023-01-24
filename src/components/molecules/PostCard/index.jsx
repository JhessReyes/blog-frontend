import React from "react";

const PostCard = ({ title, body, categories, author }) => {
  return (
    <div class="rounded-xl bg-base-100 shadow-xl md:w-50">
      <div class="card-body">
        <h2 class="card-title text-primary capitalize">{title}</h2>
        <h4 class="text-primary text-[16px] italic py-2">
          - {author ? author.name : "autor"}
        </h4>
        <p className="text-secondary">{body}</p>
        <div class="card-actions justify-start">
          <div className="py-4 text-primary font-bold">
            <div className="py-2">Categories:</div>
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
