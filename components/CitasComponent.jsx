import React, { useState, useEffect } from "react";
import { scrollConfig } from "./ScrollReveal/scroll";
import { SinCitas } from "./SinCitas";
export const CitasComponent = (props) => {
  const [citasData, setCitasData] = useState();

  const url = process.env.NEXT_PUBLIC_CITAS_API;
  const getCitasApi = async () => {
    const response = await fetch(url);
    const responseJson = await response.json();
    const dataObjet = responseJson.find(
      (res) => props.props.email === res.email
    );
    if (dataObjet) {
      setCitasData(dataObjet);
      console.log(`acceso a las citas de ${props.props.email}`);
    } else {
      console.log("sin citas");
    }
  };


  useEffect(() => {
    scrollConfig();
    getCitasApi();
  }, []);

  return (
    <>{citasData ? (    <div className="animacion px-60">
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          Información de la cita
        </h3>

      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Nombre</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {citasData.name}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Apellidos
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {citasData.lastname}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Email 
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {citasData.email}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Fecha en la que se solicitó la cita
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {citasData.date}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Ciudad</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {citasData.city}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Estado</dt>
            <dd className="mt-1 text-sm font-bold text-red-900 sm:col-span-2 sm:mt-0">
              Pendiente
            </dd>
          </div>
         
        </dl>
      </div>
    </div>
  </div>):(<SinCitas></SinCitas>)}</>
  );
};
