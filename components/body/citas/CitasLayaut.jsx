import { useState, useEffect } from "react";
import { CitasComponent } from "./CitasComponent";
import { scrollConfig } from "../../ScrollReveal/scroll";
import { getTokenLocalStorage } from "../../utils/getTokenLocalStorage";
import { SinCitas } from "./SinCitas";

export const CitasLayaut = () => {
  const [userLocalStorage, setUserLocalStorage] = useState({});

  const cargarLocalStorage = () => {
    setUserLocalStorage(getTokenLocalStorage());
  };

  useEffect(() => {
    cargarLocalStorage();
    scrollConfig();
  }, []);

  return (
    <>
      {userLocalStorage.email ? (
        <CitasComponent props={userLocalStorage}></CitasComponent>
      ) : (
        <SinCitas></SinCitas>
      )}
    </>
  );
};
