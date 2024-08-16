import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import {FirebaseContext} from '../context/firebase/firebaseContext'
import { addDoc, collection } from 'firebase/firestore';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

const PostForm = ({
    cancel=() => {},
    updatePosts=() => {}
}) => {

    const { store, user, storage, auth } = useContext(FirebaseContext)

    const [selectedImages, setSelectedImages] = useState([]);
    const[ imagesDisplay, setImagesDisplay] = useState([])

    const uploadImages = async () => {
        let imageUrls = []
      if (selectedImages.length === 0) {
        toast.error("Upload at least one image file first");
        return;
      }

    //   if(!auth?.currentUser?.user){
    //     return
    //   }

      try {
        for (const pic of selectedImages) {
          const imageRef = storageRef(
            storage,
            `${auth.currentUser.uid}/blogs/${pic.name}`
          );
          await uploadBytes(imageRef, pic);
          const downloadUrl = await getDownloadURL(imageRef);
          console.log(downloadUrl)
          imageUrls.push(downloadUrl);
        }
        toast.success("Images uploaded successfully");
      } catch (e) {
        console.error("Profile pics upload error: ", e);
        toast.error("Error uploading images");
      }
      return imageUrls
    };

    //functionalities
    const addDocument = async(title, content, imageUrls) => {
        if(title && content) {
            try{
                const docRef = await addDoc(collection(store, "posts"), {
                    title,
                    content,
                    author: user,
                    imageUrls
                });
                console.log("Document written with ID: ", docRef.id);
                toast.success('Post uploaded successfully')
                cancel(false)
                updatePosts() // one level up parent to refresh posts
            }catch(e) {
                console.error("Error adding document: ", e);
                toast.error("Can't add this info to database due to some error")
            }
        } else {
            toast.error('all fields are required')
        }
    }

    const handleImageChange = (event) => {
        const files = Array.from(event.target.files);
        // console.log(files)
        if(files.length > 5){
            toast.error('maximum number of images allowed is 4.')
            return
        }
        const images = files.map(file => URL.createObjectURL(file));
        setImagesDisplay(images)
        setSelectedImages(files);
    };

    const handleSubmit = async(event) => {
        event.preventDefault();
        try{
            const formData = new FormData(event.target);

            const title = formData.get('title');
            const content = formData.get('content');
            const files = formData.getAll('images');

            // Handle form submission logic here
            // console.log({
            //     title,
            //     content,
            //     files,
            // });
            const imagesUrls = await uploadImages() // these should upload first to generate urls and then the urls are added in form of array
            await addDocument(title, content, imagesUrls)
            toast.success('Blog uploaded successfully')
            // Optionally, reset the form and clear the image previews
        }catch(e){
            console.log(e)
        }
        event.target.reset();
        setSelectedImages([]);
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
            <label className="input input-bordered flex items-center gap-2">
                Post Title
                <input type="text" className="grow" placeholder="Enter your post title" name="title" />
            </label>

            <label className="input input-bordered flex items-center gap-2 h-[15rem]">
                Post Content
                <textarea className="grow h-[12rem] p-4 rounded-xl" placeholder="Write your post content here..." name="content" />
            </label>

            <label className="input input-bordered flex items-center gap-2">
                Upload Images
                <input
                    type="file"
                    name="images"
                    accept="image/*"
                    multiple
                    onChange={handleImageChange}
                />
            </label>

            <div className="image-preview grid grid-cols-3 gap-4">
                {imagesDisplay.map((src, index) => (
                    <img key={index} src={src} alt={`Preview ${index + 1}`} className="h-24 w-24 object-cover" />
                ))}
            </div>

            <button type="submit" className="btn bg-green-600 text-white hover:bg-green-500">Submit</button>
            <button type="submit" onClick={() => cancel(false)} className="btn bg-red-400 text-white ml-4 hover:bg-red-300">cancel</button>
        </form>
    );
}

export default PostForm;
