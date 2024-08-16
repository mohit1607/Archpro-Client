import { createContext, ReactNode, useEffect, useState } from "react";
import { FirebaseApp, initializeApp } from "firebase/app";
import { firebaseConfig } from '../../utils/firebaseconfig.js'
import { Auth, getAuth, User, onAuthStateChanged } from "firebase/auth";
import { getFirestore,  Firestore } from "firebase/firestore";
import { getStorage, FirebaseStorage } from "firebase/storage";

interface valuesTypes {
    user: string | null ,
    auth: Auth,
    setUser: React.Dispatch<React.SetStateAction<string | null >>
    store: Firestore,
    storage: FirebaseStorage
}

export const FirebaseContext = createContext<valuesTypes | undefined>(undefined)


interface firebaseProviderProps {
    children: ReactNode,
}

const app: FirebaseApp = initializeApp(firebaseConfig)
const auth: Auth = getAuth(app)
const store: Firestore = getFirestore(app)
const bucket: FirebaseStorage = getStorage(app)

export const FirebaseProvider = ({ children }: firebaseProviderProps) => {

    const [user, setUser] = useState<string|null>(null)

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

    const values: valuesTypes = {
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