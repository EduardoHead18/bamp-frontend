import React, { useContext, useState, useEffect } from "react";
import { NavbarSinUser } from "./NavbarSinUser";
import { NavbarConUser } from "./NavbarConUser";
import UserLoggedIn from "@/pages/context/ApiContext";


export const HeaderNavbar = () => {

  const userConext = useContext(UserLoggedIn)
  
  return (
    <>
      {userConext == true ? (
        <NavbarSinUser></NavbarSinUser>
      ) : (
        <NavbarConUser></NavbarConUser>
      )}
    </>
  );
};
