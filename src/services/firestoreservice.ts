import { firebaseConfig } from "../config/firebaseconfig";
import { FirebaseApp, initializeApp } from "firebase/app";
import {
  Firestore,
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { TransactionModel } from "../Models/transactionModel";

export class FireStoreService {
  firebaseApp: FirebaseApp;
  firestore: Firestore;

  constructor() {
    this.firebaseApp = initializeApp(firebaseConfig);
    this.firestore = getFirestore(this.firebaseApp);
  }

  async addNewTransaction(data: TransactionModel) {
    try {
      await addDoc(collection(this.firestore, "transactions"), data);
    } catch (e) {
      throw e;
    }
  }

  async getAllTransactions<T>(): Promise<T[]> {
    const transactions: T[] = [];
    try {
      const querySnapshot = await getDocs(
        collection(this.firestore, "transactions")
      );
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        data["id"] = doc.id;
        transactions.push(data as T);
      });
      return transactions;
    } catch (e) {
      throw e;
    }
  }

  async deleteTransaction(id: string) {
    try {
      await deleteDoc(doc(this.firestore, "transactions", id));
    } catch (e) {
      throw e;
    }
  }
}
