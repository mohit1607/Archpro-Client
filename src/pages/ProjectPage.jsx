import React, { useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Zoom from 'react-medium-image-zoom'
import "react-medium-image-zoom/dist/styles.css";

const ProjectPage = () => {
  const [state, setState] = useState({
    title: "Project Samaskriti",
    desc: "This is the epitome of the representation of the Indian culture that reflects the multi cultural styles from the dfferent parts of India, combining the artifacts from the scriptures and vedic texts to the reality",
    author: "Sanjay Puri Architects",
    imageUrls: [],
  });

  const location = useLocation();
  useLayoutEffect(() => {
    console.log(location.state);
    setState(location.state);
  }, []);

  return (
    <div className="pt-[5rem] px-[10%]">
      <div className="w-full h-[80vh] flex justify-center flex-wrap">
        <div className="flex-1 flex flex-col justify-center items-center gap-4">
          <h1 className="bg-transparent line-clamp-3 text-5xl font-semibold text-center">
            {state.title}
          </h1>
          <p className="text-2xl text-blue-400 text-center">
            By- {state.author}
          </p>
        </div>
        <div className="w-[50rem] h-full overflow-hidden rounded-md border">
          <Zoom>
          <img
            className="w-full h-full object-cover"
            src={state ? state?.imageUrls[0] : ""}
            alt="random_image"
            />
          </Zoom>
        </div>
      </div>
      <div className="flex gap-3 mt-8 justify-center items-center text-center h-[40vh] w-full text-3xl">
        <div className="w-1/4 h-full">
        <Zoom>
          <img src={state.imageUrls[1]} alt="" />
        </Zoom>
        </div>
        <div className="w-1/4 h-full">
        <Zoom>
          <img src={state.imageUrls[2]} alt="" />
        </Zoom>
        </div>
        <div className="w-1/4 h-full">
        <Zoom>
          <img src={state.imageUrls[3]} alt="" />
        </Zoom>
        </div>
        <div className="w-1/4 h-full">
        <Zoom>
          <img src={state.imageUrls[4]} alt="" />
        </Zoom>
        </div>
      </div>
      <div className="flex justify-center items-center text-center h-[60vh] w-full px-[10%] text-3xl">
        {state.desc}
      </div>
    </div>
  );
};

export default ProjectPage;
