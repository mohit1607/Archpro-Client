import { createContext, ReactNode, useEffect, useState } from "react";
import {  initializeApp } from "firebase/app";
import { firebaseConfig } from '../../utils/firebaseconfig'
import {  getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// interface valuesTypes {
//     user: string | null ,
//     auth: Auth,
//     setUser: React.Dispatch<React.SetStateAction<string | null >>
//     store: Firestore,
//     storage: FirebaseStorage
// }

// export const FirebaseContext = createContext<valuesTypes | undefined>(undefined)
export const FirebaseContext = createContext(undefined)



// interface firebaseProviderProps {
//     children: ReactNode,
// }

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const store = getFirestore(app)
const bucket = getStorage(app)

export const FirebaseProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    useEffect(() => {
        
        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                console.log(uid);
                console.log('currently Logged in')
                setUser(uid)
            } else {
                console.log('currenty logged out');
                // alert('User Logged out') 
                setUser(null)               
            }
        });

        return () => unsub()  // clean up is important for on auth state chagned
        
    }, [auth])

    const values = {
        user,
        auth: auth,
        store,
        setUser,
        storage: bucket,
    }
    


    return (
        <FirebaseContext.Provider value={values}>
            {children}
        </FirebaseContext.Provider>
    )
} 