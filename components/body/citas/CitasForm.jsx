import Image from "next/image";
import { useState, useEffect } from "react";
import { getTokenLocalStorage } from "../../utils/getTokenLocalStorage";
export const CitasForm = (props) => {
  const {onClose} = props;
  const fecha = new Date().toLocaleString();
  const [citaData, setCitaData] = useState();
  const [userDataApi, setUserDataApi] = useState({});
  const [userLocalStorage, setUserLocalStorage] = useState({});

  const cargarLocalStorage = () => {
    setUserLocalStorage(getTokenLocalStorage());
  };

  //enviar token
  const getAuthUser = async () => {
    const tokenLS = localStorage.getItem("token");
    if (!tokenLS) {
      return; // sale de la función si el token no existe
    }
    try {
      const url = process.env.NEXT_PUBLIC_USER_API;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "x-access-token": `Bearer ${tokenLS}`,
        },
      });
      const data = await response.json();
      const dataObjet = data.find(
        (res) =>
          userLocalStorage.email === res.email
      );
      setUserDataApi(dataObjet);
    } catch (error) {
    }
  };
  const sendCita = async () => {
    const dataObject = {
      email: userDataApi.email,
      name: userDataApi.name,
      lastname: userDataApi.lastname,
      city: userDataApi.city,
    };
    try {
      const url = process.env.NEXT_PUBLIC_CITAS_API;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataObject),
      });
      const responseAutosJson = await response.json();
      setTimeout(() => {
        onClose();
      }, 2000);
      
    } catch (error) {
    }
  };

  const sendLog = async () => {
    const dataObject = {
      user: userDataApi.email,
      description: `el usuadio: ${userDataApi.email} agendo una cita el dia ${fecha}`

    };
    try {
      const url = process.env.NEXT_PUBLIC_LOGS_API;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataObject),
      });
      const responseAutosJson = await response.json();
    } catch (error) {
    }
  };

  const handleCita = async(e) => {
    e.preventDefault();
    await getAuthUser();
  };
  useEffect(() => {
    cargarLocalStorage();
    
    if (userDataApi) {
      sendCita();
      sendLog()
    }
  }, [userDataApi]);

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 sticky top-0 bg-white z-90">
      <div className="w-full max-w-md space-y-8">
        <div className="">
          <Image
            className="mx-auto"
            loading="lazy"
            src={"/assets/BAMP_LOGO_H.png"}
            width={200}
            height={100}
            alt="Bamp-logo"
          ></Image>
          <h2 className="mt-2 text-center text-lg font-bold tracking-tight text-gray-900">
            Agendar cita
          </h2>
        </div>
        <form
          onSubmit={handleCita}
          className="mt-8 space-y-6"
          action="#"
          method="POST"
        >
          <input
            className="bg-red-200"
            type="hidden"
            name="remember"
            defaultValue="true"
          />

          <div className="flex flex-row items-center justify-between">
            <div className="text-sm">
              <a className="font-medium text-indigo-600 hover:text-indigo-500">
                ¿Estas seguro de agendar una cita?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md bg-gray-700 py-2 px-3 text-sm font-semibold text-white hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
              Agendar cita
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
