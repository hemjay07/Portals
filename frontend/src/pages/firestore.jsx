import { db } from "../firebase";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
export default function getUSers() {
  const usersCollectionRef = collection(db, "users");
  const [user1, setUSer1] = useState();
  useEffect(() => {
    const getuser = async () => {
      try {
        const data = await getDocs(usersCollectionRef);
        setUSer1(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.log(error);
      }
    };
    getuser();
  }, []);
  //   const user = user1[0];
  //   console.log(user1[0])
  if (user1) {
    const user = user1[0];
    return { user };
  } else return "";
}
