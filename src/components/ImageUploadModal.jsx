import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineCamera } from "react-icons/ai";
import { getDownloadURL, ref as storageRef, uploadBytes } from 'firebase/storage';
import { updateDoc, doc } from 'firebase/firestore';

const ImageUploadModal = ({ storage, auth, setFlag, store }) => {


    const [profilePic, setProfilePic] = useState('')


    const updateUserImageUrl = async (userId, imageUrl) => {
      try {
        // Reference to the user document with the given UID
        const userDocRef = doc(store, "users", userId);

        // Update the imageurl field in the document
        await updateDoc(userDocRef, {
          imageUrl: imageUrl,
        });

        console.log("User image updated successfully with ID:", userId);
        toast.success("User image updated successfully");
      } catch (e) {
        console.error("Error updating document:", e);
        toast.error("Error updating user image");
      }
    };

    const uploadProfilePic = async () => {
        if (!profilePic) {
            toast.error('upload an image file first')
            return
        }
        try {
            const imageRef = storageRef(storage, `profileImages/${auth.currentUser.uid}/profile_pic`)
            uploadBytes(imageRef, profilePic)
            setFlag(prev => !prev)
            let url = await getDownloadURL(imageRef);
            console.log(url)
            await updateUserImageUrl(auth.currentUser.uid, url)
            toast.success('Image uploaded successfully')
        } catch (e) {
            console.error("profile pic upload error: ", e);
        }
    }

    useEffect(() => console.log(profilePic), [profilePic])

    return (
        <>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button> */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-white flex flex-col items-center">
                    <h3 className="font-bold text-lg mb-4">Hello! Upload your image here</h3>
                    {profilePic ? <p className="py-4">{profilePic.name}</p> : <p></p>}
                    <button onClick={() => document.getElementById('my_modal_5').showModal()} className="rounded-xl scale-125 p-2 bg-transparent text-black border-2 border-black">
                        <AiOutlineCamera size={40} />
                        <input
                            type="file"
                            name="images"
                            accept="image/*"
                            onChange={e => {
                                setProfilePic(e.target.files[0])
                            }}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                    </button>
                    <div className="modal-action">
                        <form method="dialog">
                            {profilePic && <button onClick={uploadProfilePic} className="btn bg-green-500 text-white hover:bg-400 mr-4">Upload</button>}
                            <button className="btn">Cancel</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default ImageUploadModal