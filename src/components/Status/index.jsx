import React from "react";
import { useState } from "react";
import { Link, navigate } from "@reach/router";
import { getUser, isLoggedIn, logout } from "../../utils/auth";
import { useFirebase } from "gatsby-plugin-firebase";

export default () => {
  const [firebase, setFirebase] = useState();

  useFirebase((fb) => {
    setFirebase(fb);
  }, []);

  let details;
  if (!isLoggedIn()) {
    details = <Link to='/app/login'>Login</Link>;
  } else {
    const { displayName, email } = getUser();
    details = (
      <a
        href='/'
        onClick={(event) => {
          event.preventDefault();
          logout(firebase).then(() => navigate(`/app/login`));
        }}
      >
        Logout
      </a>
    );
  }

  return <div>{details}</div>;
};
