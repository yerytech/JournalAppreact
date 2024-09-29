import { collection, deleteDoc, getDocs } from "firebase/firestore/lite";
import {
  savingNewNote,
  addNewEmptyNote,
  setActiveNote,
  startNewNote,
} from "../../../../src/store/journal";
import { FirebaseDB } from "../../../../src/firebase/config";

describe("Pruebas en journal thunks", () => {
  const dispatch = jest.fn();
  const getState = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("startNewNote debe crear una nueva nota", async () => {
    const uid = "test=uid";
    getState.mockReturnValue({ auth: { uid } });

    await startNewNote()(dispatch, getState);

    // expect(dispatch).toHaveBeenCalledWith(savingNewNote());

    expect(dispatch).toHaveBeenCalledWith(
      addNewEmptyNote({
        body: "",
        date: expect.any(Number),
        id: expect.any(String),
        imageUrls: null,
        title: "",
      })
    );
    expect(dispatch).toHaveBeenCalledWith(
      setActiveNote({
        body: "",
        date: expect.any(Number),
        id: expect.any(String),
        imageUrls: null,
        title: "",
      })
    );
    //Borrando todo de firebase
    const coletionRef = collection(FirebaseDB, `${uid}/journal/notas`);
    const docs = await getDocs(coletionRef);
    const deletePromises = [];
    docs.forEach((doc) => deletePromises.push(deleteDoc(doc.ref)));
    await Promise.all(deletePromises);
  });
});
