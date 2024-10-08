"use client";
import React from "react";
import { useNavigate } from "react-router-dom";

// by default the card is card for project

const Card = ({
  title = "Tulsi, Vijayawaatika",
  desc = "Traditional South Indian Courtyard",
  author = "Person",
  postId,
  imageUrls=undefined,
  state
}) => {
  const navigate = useNavigate();
  
  return (
    <div
      onClick={() =>
        navigate("/project_page", {
          state: {
            title,
            desc,
            author,
            postId,
            imageUrls: imageUrls
              ? imageUrls
              : [
                  "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
                ],
              place_state: state
          },
        })
      }
      role="card"
      className="card card-compact rounded w-[22rem] mb-8 bg-white transition-transform ease-in-out hover:-translate-y-3 cursor-pointer"
    >
      <figure className="w-full h-full">
        <img loading="lazy"
        className="h-full w-full object-scale-down"
          src={
           imageUrls ? imageUrls[0] : "https://st.hzcdn.com/simgs/440190d20454a5eb_4-8523/tropical-hall.jpg"
          }
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-ellipsis line-clamp-1 leading-tight whitespace-normal">
          {title}
        </h2>
        <p className="text-ellipsis line-clamp-1 leading-tight whitespace-normal">
          {desc}
        </p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default Card;
