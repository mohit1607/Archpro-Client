import { AiOutlineCamera } from "react-icons/ai"; 
import { AiOutlinePlus } from "react-icons/ai"; 
import React, { useContext, useEffect, useState } from 'react'
import PostForm from '../components/PostForm'
import { collection, getDocs, query, where } from "firebase/firestore";
import toast from "react-hot-toast";
import { FirebaseContext } from "../context/firebase/firebaseContext";
import Card from '../components/Card'
import ImageUploadModal from "../components/ImageUploadModal";
import { listAll, ref, getDownloadURL } from "firebase/storage";
import blank from '../assets/blank.png'

const Profile = () => {

  const { store, user, storage, auth } = useContext(FirebaseContext)
  

  const [createPost, setCreatePost] = useState(false)
  const [posts, setPosts] = useState([])
  const [displayName, setDisplayName] = useState({})
  const [flag, setFlag] = useState(true) // used by image uploader to update
  const [profilePicLive, setProfilePicLive] = useState(blank)

  const getPosts = async() => {
    // console.log(typeof(user))
    if(!user){
      return // a optimized step
    }
    let data = []
    try{
      const postref = collection(store, 'posts')
      const q = query(postref, where("author","==", user))
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        data.unshift({postId: doc.id, ...doc.data()})
      });
      setPosts(data)
      userName()
      toast.success('post retrived successfully')
    }catch(e) {
      console.error('Unable to read data: ', e)
      toast.error('unable to read data due to some unknown error.')
    }
  }

  const userName = async() => {
    try{
      const userRef = collection(store, "users");
      let q = query(userRef, where('email','==',auth.currentUser.email))
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        // data.unshift({postId: doc.id, ...doc.data()})
        setDisplayName(doc.data())
      })
    }catch(e) {
      console.log(e)
    }
  }


  useEffect(() => {
    getPosts()
  }, [user])

useEffect(() => {
  if (auth?.currentUser?.uid) {
    const thisRef = ref(
      storage,
      `profileImages/${auth.currentUser.uid}/profile_pic`
    );

    getDownloadURL(thisRef)
      .then((url) => setProfilePicLive(url))
      .catch((e) => {
        console.error("Not loaded", e);
      });
  }
}, [auth, flag]);





  return (
    <main className='w-full pt-20 flex justify-center gap-3 px-[10%]'>
      <ImageUploadModal store={store} storage={storage} auth={auth} setFlag={setFlag}/>
      <div className='w-[20rem] min-h-[30rem] max-h-[35rem] bg-blue-100 rounded-lg p-8 relative overflow-hidden shadow-md'>
        {/* image */}
        <div className='w-full h-[60%] overflow-hidden rounded relative'>
          <button onClick={() => document.getElementById('my_modal_5').showModal()} className="absolute bottom-3 right-3 rounded-full p-2 bg-white text-black">
            <AiOutlineCamera size={20}/>
          </button>
          <img className='w-full h-full object-cover' src={profilePicLive} alt="image" />
        </div>
        {/* details */}
        <h1 className='w-full text-ellipsis whitespace-normal mt-4 text-4xl font-semibold line-clamp-2 leading-tight'>
          {displayName.Name ? displayName?.Name : 'No Name'}
        </h1>
        {/* username */}
        <h2 className='w-full text-ellipsis whitespace-normal mt-4 text-xl font-semibold line-clamp-1 leading-tight'>
          @{displayName.userName}
        </h2>
        {/* email */}
        <p className='w-full mt-2 text-gray-600 text-lg line-clamp-1 leading-tight whitespace-normal text-ellipsis'>{auth?.currentUser?.email}</p>
        {/* ribbon tag */}
        <div className='w-[15rem] py-2 bg-green-600 bottom-[3rem] absolute -right-[3rem] text-center text-white flex justify-center -rotate-45'>
         <div className='bg-green-500 border-white border w-full'>
          Certified Member
         </div>
        </div>
      </div>

      {/* dashboard kind of thing */}
      <div className='flex-1 bg-purple-100 rounded relative p-8'>
          {!createPost && <button onClick={() => setCreatePost(true)} className="flex justify-center gap-2 items-center btn border-none bg-green-500 text-white hover:bg-green-400"> <AiOutlinePlus size={20} /> Create Post</button>}
          {createPost && <PostForm updatePosts={getPosts} cancel={setCreatePost}></PostForm>}
          
          {/* published posts */}
          <div className="mt-8 w-full">
            <h3 className="text-2xl font-semibold mb-5">Published  posts</h3>
            <div className="w-full flex justify-start items-center flex-wrap gap-8">
              {
                posts.map((curr,index) => {
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
                })
              }
            </div>
          </div>
      </div>

    </main>
  )
}

export default Profile