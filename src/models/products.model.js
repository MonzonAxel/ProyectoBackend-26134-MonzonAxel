import {
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../config/firebase.js";

const COLLECTION = "products";

export const getAllProducts = async () => {
  const snapshot = await getDocs(collection(db, COLLECTION));
  return snapshot.docs.map((document) => ({
    id: document.id,
    ...document.data(),
  }));
};

export const getProductById = async (id) => {
  const docRef = doc(db, COLLECTION, id);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) return null;
  return { id: docSnap.id, ...docSnap.data() };
};

export const createProduct = async (data) => {
  const docRef = await addDoc(collection(db, COLLECTION), data);
  return { id: docRef.id, ...data };
};

export const updateProduct = async (id, data) => {
  const docRef = doc(db, COLLECTION, id);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) return null;
  await updateDoc(docRef, data);
  return { id, ...data };
};

export const deleteProduct = async (id) => {
  const docRef = doc(db, COLLECTION, id);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) return null;
  await deleteDoc(docRef);
  return { id };
};
