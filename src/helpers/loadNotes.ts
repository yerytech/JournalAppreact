import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadNotes = async (uid: string) => {
  if (!uid) throw new Error("El UID del user dont exist load note ");

  const collectionRef = collection(FirebaseDB, `${uid}/journal/notas`);

  const docs = await getDocs(collectionRef);
  const notes = [];
  docs.forEach((doc) => {
    notes.push({ id: doc.id, ...doc.data() });
  });

  return notes;
};
