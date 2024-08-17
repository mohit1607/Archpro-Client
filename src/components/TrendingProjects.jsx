import React, { useState, useEffect, useContext } from 'react'
import Card from './Card'
import ProfileCard from './ProfileCard'
import { query, limit, orderBy, collection, getDocs } from 'firebase/firestore'
import { FirebaseContext } from '../context/firebase/firebaseContext'
import toast from 'react-hot-toast'
import { getDownloadURL, ref } from 'firebase/storage'

const TrendingProjects = () => {

  const {store, storage} = useContext(FirebaseContext)
  const [posts, setPosts] = useState([])
  const [topUsers, setTopUsers] = useState([])

      const getLatestposts = async () => {
        try {
          const q = query(
            collection(store, "posts"),
            orderBy("title"),
            limit(3)
          );
          const userQ  = query(
            collection(store, 'users'),
            orderBy('Name'),
            limit(3)
          )
          const querySnapshot = await getDocs(q);
          let items = [];
          querySnapshot.forEach((doc) => {
            items.unshift({ postId: doc.id, ...doc.data() });
          });
          const userQuerySnapshot = await getDocs(userQ)
          let users = []
          userQuerySnapshot.forEach((doc) => {
            users.unshift({ postId: doc.id, ...doc.data() });
          });
          setPosts(items);
          setTopUsers(users)
          toast.success("Fetched successfully");
        } catch (e) {
          console.log(e);
        }
      };

      useEffect(() => {
        getLatestposts()
      }, []);

      useEffect(() => console.log(topUsers),[topUsers])


  return (
    <div className="px-[10%] pt-16 pb-12">
      <h2 className="text-3xl mb-8">Trending Inspirations</h2>
      <h2 className="text-xl text-gray-500 mb-4">New Featured</h2>
      <div className="w-full flex justify-center items gap-8">
        <div className="carousel rounded-box space-x-8 rounded-none">
          {posts?.map((curr, index) => (
            <div className="carousel-item">
            <Card
              key={index + curr.author}
              imageUrls={curr.imageUrls}
              title={curr.title}
              desc={curr.content}
              postId={curr.postId}
              state={curr.selectedState}
              author={curr.author}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-end w-full">
        <p className="text-sm underline">Explore More...</p>
      </div>

      {/* <h2 className="text-xl text-gray-500 mb-4">What people loved</h2>
      <div className="w-full flex justify-center items gap-8">
        <div className="carousel rounded-box space-x-8 rounded-none">
          <div className="carousel-item">
            <Card />
          </div>
          <div className="carousel-item">
            <Card />
          </div>
          <div className="carousel-item">
            <Card />
          </div>
          <div className="carousel-item">
            <Card />
          </div>
        </div>
      </div>
      <div className="flex justify-end w-full">
        <p className="text-sm underline">Explore More...</p>
      </div> */}

      <h2 className="text-3xl mb-8 mt-12">Best Rated Architects</h2>
      <h2 className="text-xl text-gray-500 mb-4 ml-20">
        Loved by fellow folks
      </h2>
      <div className="w-full flex justify-center items gap-12 text-start flex-wrap">
        {/* <ProfileCard />
        <ProfileCard /> */}
        {
          topUsers?.map((curr, index) => {
            return (
              <ProfileCard storage={storage} uid={curr.uid} imageUrl={curr.imageUrl ? curr.imageUrl : ''}  Name={curr.Name} userName={curr.userName} email={curr.email}/>
            )
            
          })
        }
      </div>
      <div className="flex justify-end w-full">
        <p className="text-sm underline">Find out More...</p>
      </div>

      {/* <h2 className="text-xl text-gray-500 mb-4 ml-20">Trending</h2>
      <div className="w-full flex justify-center items gap-12 text-start flex-wrap">
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>
      <div className="flex justify-end w-full">
        <p className="text-sm underline">Find out More...</p>
      </div> */}
    </div>
  );
}

export default TrendingProjects