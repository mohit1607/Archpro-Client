import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import blank from "../assets/blank.png";
import { ref, getDownloadURL } from "firebase/storage";
import { FirebaseContext } from "../context/firebase/firebaseContext";
import toast from "react-hot-toast";
import { collection, query, where, getDocs } from "firebase/firestore";
import Card from "../components/Card";

const ProfileReadonly = () => {
  const thisLocation = useLocation();
  const { storage, store } = useContext(FirebaseContext);
  const [posts, setPosts] = useState([]);

  const [details, setDetails] = useState({
    Name: "",
    userName: "",
    email: "",
    imageUrl: "",
    uid: "",
  });

  const getPosts = async (thisId) => {
    // console.log(typeof(user))
    if (!details.uid) return;
    let data = [];
    try {
      const postref = collection(store, "posts");
      const q = query(postref, where("author", "==", thisId));
      const querySnapshot = await getDocs(q);
      console.log(querySnapshot);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        data.unshift({ postId: doc.id, ...doc.data() });
      });
      setPosts(data);
      toast.success("post retrived successfully");
    } catch (e) {
      console.error("Unable to read data: ", e);
      toast.error("unable to read data due to some unknown error.");
    }
  };

  useEffect(() => {
    
    console.log(thisLocation.state);
    setDetails(thisLocation.state)
  }, []);

  useEffect(() => {
    getPosts(details.uid);
  }, [details.uid])

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <main className="w-full pt-20 flex justify-center gap-3 px-[10%]">
      <div className="w-[20rem] min-h-[30rem] max-h-[35rem] bg-blue-100 rounded-lg p-8 relative overflow-hidden shadow-md">
        {/* image */}
        <div className="w-full h-[60%] overflow-hidden rounded relative">
          <img
            className="w-full h-full object-cover"
            src={details?.imageUrl ? details.imageUrl : blank}
            alt="image"
          />
        </div>
        {/* details */}
        <h1 className="w-full text-ellipsis whitespace-normal mt-4 text-4xl font-semibold line-clamp-2 leading-tight">
          {details?.Name}
        </h1>
        {/* username */}
        <h2 className="w-full text-ellipsis whitespace-normal mt-4 text-xl font-semibold line-clamp-1 leading-tight">
          @{details?.userName}
        </h2>
        {/* email */}
        <p className="w-full mt-2 text-gray-600 text-lg line-clamp-1 leading-tight whitespace-normal text-ellipsis">
          {details?.email}
        </p>
        {/* ribbon tag */}
        <div className="w-[15rem] py-2 bg-green-600 bottom-[3rem] absolute -right-[3rem] text-center text-white flex justify-center -rotate-45">
          <div className="bg-green-500 border-white border w-full">
            Certified Member
          </div>
        </div>
      </div>

      {/* dashboard kind of thing */}
      <div className="flex-1 bg-purple-100 rounded relative p-8">
        {/* published posts */}
        <div className="mt-8 w-full">
          <h3 className="text-2xl font-semibold mb-5">Published posts</h3>
          <div className="w-full flex justify-start items-center flex-wrap gap-8">
            {posts.map((curr, index) => {
              return (
                <Card
                  key={index + curr.author}
                  imageUrls={curr.imageUrls}
                  title={curr.title}
                  desc={curr.content}
                  postId={curr.postId}
                  state={curr.selectedState}
                  author={curr.author}
                />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfileReadonly;
