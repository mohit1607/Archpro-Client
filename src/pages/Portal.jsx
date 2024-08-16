import React, { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import { limit, query, collection, getDocs, orderBy } from "firebase/firestore";
import { FirebaseContext } from "../context/firebase/firebaseContext";
import toast from "react-hot-toast";

const Page = () => {
  const { store } = useContext(FirebaseContext);

  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedState, setSelectedState] = useState("");

  const statesOfIndia = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const getLatestposts = async () => {
    try {
      const q = query(collection(store, "posts"), orderBy("title"), limit(30));
      const querySnapshot = await getDocs(q);
      let items = [];
      querySnapshot.forEach((doc) => {
        items.unshift({ postId: doc.id, ...doc.data() });
      });
      setPosts(items);
      toast.success("Fetched successfully");
    } catch (e) {
      console.log(e);
    }
  };

  // Filter posts based on search query and selected state
  const filteredPosts = posts.filter((post) => {
    const matchesSearchQuery = post.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesState = selectedState === "" || post.state === selectedState;
    return matchesSearchQuery && matchesState;
  });

  useEffect(() => {
    getLatestposts();
  }, []);

  return (
    <div className="w-full flex flex-col justify-center gap-8 relative pt-4 px-[10%]">
      <div className="w-full bg-red-200 px-4 h-[5rem] sticky top-20 z-[10] flex items-center border rounded-lg overflow-auto gap-3">
        <select
          className="select select-bordered w-[8rem] max-w-xs bg-white"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          <option value="">All States</option>
          {statesOfIndia.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>
        <label className="input input-bordered flex items-center gap-2 bg-white">
          <input
            type="text"
            className="grow"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <div className="flex-1 flex justify-between items-start flex-wrap pt-16">
        {filteredPosts.map((curr, index) => (
          <Card
            key={index + curr.author}
            imageUrls={curr.imageUrls}
            title={curr.title}
            desc={curr.content}
            postId={curr.postId}
            state={curr.selectedState}
            author={curr.author}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
