import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged,

} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection, query, getDocs } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD5MoZ5LmvZrnjKcPgBCCaH0dS3oxl-7FI",
    authDomain: "meppl-clothing-db.firebaseapp.com",
    projectId: "meppl-clothing-db",
    storageBucket: "meppl-clothing-db.appspot.com",
    messagingSenderId: "281973175476",
    appId: "1:281973175476:web:c403127a8acffa63cd53e1"
};
    const firebaseApp = initializeApp(firebaseConfig);

    const provider = new GoogleAuthProvider();
    
    provider.setCustomParameters({
        prompt: 'select_account'
    });

    export const auth = getAuth();
    export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
    export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

    export const db = getFirestore();

    

    export const getCategoriesAndDocuments = async () => {
        const collectionRef = collection(db, 'categories');
        const q = query(collectionRef);

        const querySnapshot = await getDocs(q);
        const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
            const { title, items } = docSnapshot.data();
            acc[title.toLowerCase()] = items;
            return acc;
        }, {});
        return categoryMap;
    };

    export const createUserDocumentFromAuth = async (
        userAuth, 
        additionalInformation = {}
        ) => {
        if (!userAuth) return;

        const userDocRef = doc(db, 'users', userAuth.uid);

        const userSnapshot = await getDoc(userDocRef);

        if(!userSnapshot.exists()){
            const { displayName, email } = userAuth;
            const createdAt = new Date();

            try{
                await setDoc(userDocRef, {
                    displayName,
                    email,
                    createdAt,
                    ...additionalInformation,
                });
            } catch (error) {
                console.log('error creating the user', error.message);
            }
        }

        return userDocRef;
    };
    
    export const createAuthUserWithEmailAndPassword = async (email, password) => {
        if(!email || !password) return;

        return await createUserWithEmailAndPassword(auth, email, password);
    };

    export const signInAuthUserWithEmailAndPassword = async (email, password) => {
        if(!email || !password) return;

        return await signInWithEmailAndPassword(auth, email, password);
    };

    export const signOutUser = async () => await signOut(auth);

    export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

