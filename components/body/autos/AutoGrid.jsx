import React, { useState, useEffect } from "react";
import Link from "next/link";
import { scrollConfig } from "../../ScrollReveal/scroll";

export const AutosGrid = () => {
  const [apiAutos, setApiAutos] = useState([]);
  const [isData, setIsData] = useState(false);
  //api
  const fetchApi = async () => {
    const url = process.env.NEXT_PUBLIC_AUTOS_API;
    const response = await fetch(url);
    const responseJson = await response.json();
    setApiAutos(responseJson);
    setIsData(true);
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
              PRECIOS DE BMW, AUDI, MERCEDES BENZ Y PORSCHE.
            </h2>
            <p className="text-lg">CATÁLOGOS Y FICHAS TÉCNICAS</p>

            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {!isData ? (
                <>
                  {[...Array(4)].map((_, index) => (
                    <div key={index} className="group relative">
                      <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                        <img
                          src={
                            "https://imgs.search.brave.com/VJaC7bLXjG04ehtzMoFPOBWJpeEmrizXRghtKd1sdgQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/cmVtZWRpb3NkaWdp/dGFsZXMuY29tL2Jl/NTgwMy9wOTAzOTky/MDhfaGlnaHJlc190/aGUtbmV3LWJtdy1t/NC1jb21wZS80NTBf/MTAwMC5qcGc"
                          }
                          alt="BMW M4 competition"
                          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                      </div>
                      <div className="mt-4 flex justify-between">
                        <div>
                          <h3 className="text-sm text-gray-700">
                            <a>BMW M4 competition</a>
                          </h3>
                          <p className="mt-1 text-sm text-gray-500 mb-9">
                            Modelo: M4 Competition 2023
                          </p>
                          <Link
                            href={`/autos/`}
                            className="bg-gray-800 px-10 py-2 text-white hover:opacity-70"
                          >
                            Ver más
                          </Link>
                        </div>
                        <p className="text-sm font-medium text-gray-900">
                          MX$ 3,000,000
                        </p>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                apiAutos.map((data) => (
                  <div key={data._id} className="group relative">
                    <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                      <img
                        src={data.image}
                        alt={data.brand}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <a>{data.brand}</a>
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
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
