export const initialState = {
  status: "checking", //"checking", //'not-authenticated','aythenticated'
  uid: null,
  email: null,
  displayName: null,
  photoUrl: null,
  errorMessage: null,
};
export const authenticatedState = {
  status: "authenticated", //"checking", //'not-authenticated','aythenticated'
  uid: "123456",
  email: " email@email.com",
  displayName: "name",
  photoUrl: "https://image.jpg",
  errorMessage: null,
};
export const notAuthenticatedState = {
  status: "not-authenticated'", //"checking", //'not-authenticated','aythenticated'
  uid: null,
  email: null,
  displayName: null,
  photoUrl: null,
  errorMessage: null,
};
export const demouser = {
  //"checking", //'not-authenticated','aythenticated'
  uid: "abcd1234",
  email: "demo@email.com",
  displayName: "Demo User",
  photoUrl: "https://image.jpg",
  errorMessage: null,
};
