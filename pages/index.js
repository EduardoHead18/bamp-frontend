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
          <div className="mx-5 lg:mx-32">
            <h2 className="text-2xl font-bold">EL PLACER DE CONDUCIR</h2>

            <p className="font-light text-lg mt-5">
              Agenda fácilmente tu cita para cotizar tu BMW, Mercedes, Audi o
              Porsche. Obtén información personalizada y ajustada a tus
              necesidades con solo un clic. ¡Descubre el lujo y la comodidad en
              nuestra plataforma!
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
          </div>
        </div>
        <div className="lg-mx-32 lg:mt-10">
          <AutosGrid></AutosGrid>
        </div>

        <Image
          alt="mercedes benz - banm"
          className="animacion mt-10 mb-[-40px] h-full w-full object-cover object-center lg:h-full lg:w-full"
          src={"/assets/mercedes-banner.jpg"}
          width={2000}
          height={2000}
        ></Image>
      </div>
    </Layaut>
  );
}
