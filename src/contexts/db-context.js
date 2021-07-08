import { db } from "../firebase";

export function savaData(uid, data) {
  return db.collection("usersdata").doc(uid).set(data);
}

export function loadData(uid) {
  return db.collection("usersdata").doc(uid).get();
}
