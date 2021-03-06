import React, { useEffect, useState } from "react";
import View from "../View";
import { getUser } from "../../utils/auth";

import { useFirebase } from "gatsby-plugin-firebase";

const Profile = () => {
  const [firebase, setFirebase] = useState();
  useFirebase((fb) => {
    setFirebase(fb);
  }, []);
  const user = getUser();
  const { displayName, email, emailVerified } = user;
  const accessToken = user.stsTokenManager.accessToken;

  const newUser = (firebase, user) => {
    firebase.database().ref(`/users/${user.uid}`).set({
      user,
      time: Date.now(),
      name: "New user",
    });
  };

  useEffect(() => {
    console.log(user);
    if (firebase) {
      firebase
        .database()
        .ref(`/users/${user.uid}`)
        .once("value")
        .then((snapshot) => {
          if (!snapshot?.val()) {
            newUser(firebase, user);
          }
        });
    }
  }, [firebase]);

  return (
    <>
      <button>Get</button>
      <div>Hey</div>
      <View title='Your Profile'>
        <div>
          <p className='text-sm text-gray-600 flex items-center mb-4'>
            <svg
              className='fill-current text-gray-500 w-3 h-3 mr-2'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
            >
              <path d='M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z' />
            </svg>
            Members only
          </p>
          <p className='text-gray-700 text-base'>
            <ul>
              <li>
                <div className='text-sm'>
                  <b>Name</b>:
                </div>
                <div className='pl-2 '>{`${displayName}`}</div>
              </li>
              <li>
                <div className='text-sm'>
                  <b>Email</b>:
                </div>
                <div className='pl-2 '>{`${email}`}</div>
              </li>
              <li>
                <div className='text-sm'>
                  <b>Email Verified</b>:
                </div>
                <div className='pl-2 '>{`${emailVerified}`}</div>
              </li>
              <li>
                <div className='text-sm'>
                  <b>Firebase Access Token</b>:
                </div>
                <div className='pl-2 truncate'>{`${accessToken}`}</div>
              </li>
            </ul>
          </p>
        </div>
      </View>
    </>
  );
};

export default Profile;
