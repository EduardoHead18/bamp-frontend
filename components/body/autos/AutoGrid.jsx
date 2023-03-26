import React, { useState, useEffect } from "react";
import Link from "next/link";
import { scrollConfig } from "../../ScrollReveal/scroll";

export const AutosGrid = () => {
  const [apiAutos, setApiAutos] = useState([]);
  //api
  const fetchApi = async () => {
    const url = process.env.NEXT_PUBLIC_AUTOS_API;
    const response = await fetch(url);
    const responseJson = await response.json();
    setApiAutos(responseJson);
  };

  useEffect(() => {
    fetchApi();
    scrollConfig();
  }, []);

  return (
    <>
      <div className="animacion">
        <div className="bg-white">
          <div className="mx-auto max-w-2xl  px-4  sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-2">
              PRECIOS DE LA GAMA BMW, AUDI, MERCEDES BENZ Y PORSCHE.
            </h2>
            <p className="text-lg">CATÁLOGOS Y FICHAS TÉCNICAS</p>

            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
              {apiAutos.map((data) => {
                return (
                  <div key={data._id} className="group relative">
                    <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200  lg:aspect-none lg:h-80">
                      <img
                        src={data.image}
                        alt={data.brand}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm  text-gray-700">
                          <a>
                            {data.brand}
                          </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500 mb-9">
                          Modelo: {data.model}
                        </p>
                        <Link
                          href={`/autos/${data._id}`}
                          className="bg-gray-800 px-10 py-2 text-white"
                        >
                          Ver más
                        </Link>
                      </div>
                      <p className="text-sm font-medium text-gray-900">
                        {data.price} 
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
