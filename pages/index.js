import Image from "next/image";
import { useEffect } from "react";
import { Layaut } from "@/components/Layaut";
import { AutosGrid } from "@/components/body/autos/AutoGrid";
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
          <div className="lg:mx-32">
            <h2 className="text-2xl font-bold">EL PLACER DE CONDUCIR</h2>

            <p className="font-light text-xl mt-5">
              Al igual que los autos de gama alta, nuestras vidas también
              merecen el mejor rendimiento. Acelera hacia tus sueños y alcanza
              la grandeza con pasión, determinación y un espíritu incansable.
            </p>
          </div>

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
            </div>

            <div className="lg:mx-32 lg:mt-10">
       
                <p className="font-light text-xl mt-5">
                  <span aria-hidden="true" className="absolute inset-0"></span>
                  BMW es una de las marca más aclamadas del sector del
                  automóvil. No en vano es una de las que más pasiones y deseos
                  genera y sus modelos son codiciados por millones de personas
                  en todo el mundo. BMW se ha posicionado como la marca premium
                  más pasional, admirada y deseada. En su día hicimos un
                  artículo sobre el origen y la historia del logo de BMW que os
                  recomendamos encarecidamente.
                </p>
            
            </div>
          </div>
        </div>
        <div className="lg-mx-32 lg:mt-10">
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
