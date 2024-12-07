import Image from "next/image";
import { useEffect } from "react";
import { Layaut } from "@/components/Layaut";
import { AutosGrid } from "@/components/body/autos/AutoGrid";
import { scrollConfig } from "@/components/ScrollReveal/scroll";

export default function Home() {
  // Configuración del scroll
  useEffect(() => {
    scrollConfig();
  }, []);

  return (
    <Layaut>
      {/* bg image */}
      <div
        className="relative bg-cover bg-center bg-no-repeat h-screen"
        style={{
          backgroundImage: "url('/assets/banner.jpg')",
        }}
      >
        {/* Contenido sobre el fondo */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="mx-5 lg:mx-32 text-center text-white">
            <h2 className="text-3xl lg:text-5xl font-bold">
              EL PLACER DE CONDUCIR
            </h2>
            <p className="font-light text-lg mt-5">
              Agenda fácilmente tu cita para cotizar tu BMW, Mercedes, Audi o
              Porsche. Obtén información personalizada y ajustada a tus
              necesidades con solo un clic. ¡Descubre el lujo y la comodidad en
              nuestra plataforma!
            </p>
          </div>
        </div>
      </div>

      <div className="lg-mx-32 mt-10">
        <AutosGrid />
      </div>

      {/* Otra imagen */}

      <Image
        alt="mercedes benz - banm"
        className="animacion mt-20 mb-[-40px] h-full w-full object-cover object-center lg:h-full lg:w-full"
        src={"/assets/mercedes-banner.jpg"}
        width={2000}
        height={2000}
      ></Image>
    </Layaut>
  );
}
