import Image from "next/image"

export const SinCitas = () => {
  return (
    <div className="animacion flex flex-col justify-center ">
    <p className="mx-auto max-w-2xl mb-5  px-4  sm:px-6 lg:max-w-7xl lg:px-8  text-2xl font-bold tracking-tight text-gray-900">
      Aún no tienes una cita agendada
    </p>

    <Image
      loading="lazy"
      className="mx-auto"
      src={"/assets/citas.png"}
      width={300}
      height={300}
      alt="sin citas - bamp"
    ></Image>

    
  </div>
  )
}
