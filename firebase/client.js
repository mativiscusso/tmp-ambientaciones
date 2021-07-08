import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDmpMneqxc16Dluqwb1mlS-s6Gtc_1wyUk",
    authDomain: "tmp-ambientaciones.firebaseapp.com",
    projectId: "tmp-ambientaciones",
    storageBucket: "tmp-ambientaciones.appspot.com",
    messagingSenderId: "231324720416",
    appId: "1:231324720416:web:90fb18d76e7db0f2e34b45",
    measurementId: "G-P28E754J58",
};

firebase.apps.length === 0 && firebase.initializeApp(firebaseConfig);
firebase.apps.length === 0 && firebase.analytics();
const db = firebase.firestore();

export const signInUserAdmin = async ({ username, password }) => {
    try {
        const userCredentials = await firebase
            .auth()
            .signInWithEmailAndPassword(username, password);
        return userCredentials.user;
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        return { errorCode, errorMessage };
    }
};

export const signOutUserAdmin = async () => {
    try {
        await firebase.auth().signOut();
        return true;
    } catch (error) {
        return error;
    }
};

export const onAuthStateChanged = (onChange) => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            const currentUser = {
                username: user.displayName,
                email: user.email,
                id: user.uid,
            };
            onChange(currentUser);
        }
    });
};

export const addEvent = ({ title, description, category, images }) => {
    return db.collection("events").add({
        title,
        description,
        category,
        createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
        images,
    });
};

export const fetchLastestEvents = () => {
    return db
        .collection("events")
        .orderBy("createdAt", "desc")
        .get()
        .then(({ docs }) => {
            return docs.map((doc) => {
                const data = doc.data();
                const id = doc.id;
                const { createdAt } = data;
                return { ...data, id, createdAt: +createdAt.toDate() };
            });
        })
        .catch((err) => {
            console.log(err);
        });
};

export const fetchLastestPosts = () => {
    return db
        .collection("posts")
        .orderBy("createdAt", "desc")
        .get()
        .then(({ docs }) => {
            return docs.map((doc) => {
                const data = doc.data();
                const id = doc.id;
                const { createdAt } = data;
                return { ...data, id, createdAt: +createdAt.toDate() };
            });
        })
        .catch((err) => {
            console.log(err);
        });
};

export const uploadImage = (image) => {
    const ref = firebase.storage().ref(`images/${image.name}`);
    const task = ref.put(image);
    return task;
};
