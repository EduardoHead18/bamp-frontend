import Image from "next/image";
import { useEffect } from "react";
import { Layaut } from "@/components/Layaut";
import { AutosGrid } from "@/components/AutoGrid";
import { scrollConfig } from "@/components/ScrollReveal/scroll";

export default function Home() {
  //configScroll

  useEffect(() => {
    scrollConfig();
  }, []);

  return (
    <Layaut>
      <div className="animacion">
        <div className="bg-white">
          <div className="">
            <h2 className="mx-auto max-w-2xl mb-5  px-4  sm:px-6 lg:max-w-7xl lg:px-8 text-3xl font-bold tracking-tight text-gray-900">
              EL PLACER DE CONDUCIR
            </h2>
            <p className="mx-auto max-w-2xl text-gray-800 px-4 text-justify lg:text-2xl sm:px-6 lg:max-w-7xl lg:px-8 text-lg">
              Al igual que los autos de gama alta, nuestras vidas también
              merecen el mejor rendimiento. <br></br>Acelera hacia tus sueños y
              alcanza la grandeza con pasión, determinación y un espíritu
              incansable.
            </p>

            <div className="mt-6  ">
              <div className="group relative">
                <div className="animacion-left mt-8 min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden  bg-gray-200  lg:aspect-none lg:h-80">
                  <Image
                    alt="bmw - bamp"
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    src={"/assets/banner.jpg"}
                    width={10000}
                    height={10000}
                  ></Image>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="mx-10 mt-7 mb-24 text-justify text-gray-700 text-lg">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      BMW es una de las marca más aclamadas del sector del
                      automóvil. No en vano es una de las que más pasiones y
                      deseos genera y sus modelos son codiciados por millones de
                      personas en todo el mundo. BMW se ha posicionado como la
                      marca premium más pasional, admirada y deseada. En su día
                      hicimos un artículo sobre el origen y la historia del logo
                      de BMW que os recomendamos encarecidamente.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-20">
          <AutosGrid></AutosGrid>
        </div>

        <div className="mt-24 min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden  bg-gray-200  lg:aspect-none lg:h-80">
          <Image
            alt="mercedes benz - banm"
            className="animacion h-full w-full object-cover object-center lg:h-full lg:w-full"
            src={"/assets/mercedes-banner.jpg"}
            width={2000}
            height={2000}
          ></Image>
        </div>
      </div>
    </Layaut>
  );
}
