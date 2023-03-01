//https://firebase.google.com/docs/auth/web/start

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";

export const createUser = async (email: any, password: any) => {
    const auth = getAuth();
    const credentials = createUserWithEmailAndPassword(
        auth,
        email,
        password
    ).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
    return credentials;
};

export const signInUser = async (email: any, password: any) => {
    const auth = getAuth();
    const credentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
    ).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
    return credentials;
};

export const initUser = async () => {
    const auth = getAuth();
    const firebaseUser = useFirebaseUser();
    firebaseUser.value = <any>auth.currentUser;
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // console.log("Auth changed:", user)
        } else {
            // console.log("Auth changed:", user)
        }
        firebaseUser.value = <any>user;
    });
};

export const signOutUser = async () => {
    const auth = getAuth();
    const result = await auth.signOut();
    return result;
};
