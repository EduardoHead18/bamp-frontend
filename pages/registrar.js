import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Registrar = () => {
  //estados
  const [errorLogin, setErrorLogin] = useState(false);
  //estados del usuario
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState(0);
  const [city, setCity] = useState("");
  const [rfc, setRfc] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  //handle form
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  //obtener el nombre del form
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  //obtener el appellido del form
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  //obtener el appellido del form
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  //obtener la ciudad del form
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  //obtener el rfc del form
  const handleRfcChange = (e) => {
    setRfc(e.target.value);
  };
  //obtener el email del form
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  //obtener el password del form
  const handlePassChange = (e) => {
    setPass(e.target.value);
  };
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
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
              Crear cuenta
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              O{" "}
              <Link
                href={"/"}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                regresar
              </Link>
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
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
            <div className="grid grid-cols-2 gap-4">
                {/**nombre */}
            <div className="-space-y-px rounded-md shadow-sm">
                <p className="mb-2 opacity-80">Nombre:</p>
              <div className="mb-5">
                <label htmlFor="text" className="sr-only bg-blue-300">
                  Nombre
                </label>
                <input
                  id="email-address"
                  name="nombre"
                  onChange={handleNameChange}
                  type="text"
                  autoComplete="email"
                  required
                  className="relative rounded-none block w-full px-4  py-1.5  ring-1 ring-inset placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Nombre"
                />
              </div>
            </div>
            {/**apellidos */}
            <div className="-space-y-px rounded-md shadow-sm">
            <p className="mb-2 opacity-80">Apellidos:</p>
              <div className="mb-5">
                <label htmlFor="text" className="sr-only bg-blue-300">
                  Apellidos
                </label>
                <input
                  id="email-address"
                  name="apellido"
                  onChange={handleLastNameChange}
                  type="text"
                  autoComplete="email"
                  required
                  className="relative rounded-none block w-full px-4  py-1.5  ring-1 ring-inset placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Apellidos"
                />
              </div>
            </div>
            {/**telefono */}
            <div className="-space-y-px rounded-md shadow-sm">
            <p className="mb-2 opacity-80">Numero de Telefono:</p>
              <div className="mb-5">
                <label htmlFor="number" className="sr-only bg-blue-300">
                  Telefono
                </label>
                <input
                  id="email-address"
                  name="telefono"
                  onChange={handlePhoneChange}
                  type="text"
                  autoComplete="email"
                  required
                  className="relative rounded-none block w-full px-4  py-1.5  ring-1 ring-inset placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Numero de Telefono"
                  max={10}
                  maxLength={10}
                  pattern="[0-9]{1,10}"
                />
              </div>
            </div>
            {/**ciudad */}
            <div className="-space-y-px rounded-md shadow-sm">
            <p className="mb-2 opacity-80">Ciudad</p>
              <div className="mb-5">
                <label htmlFor="text" className="sr-only bg-blue-300">
                  Telefono
                </label>
                <input
                  id="email-address"
                  name="ciudad"
                  onChange={handleCityChange}
                  type="text"
                  autoComplete="email"
                  required
                  className="relative rounded-none block w-full px-4  py-1.5  ring-1 ring-inset placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Ciudad"
                />
              </div>
            </div>
            {/**RFC */}
            <div className="-space-y-px rounded-md shadow-sm">
            <p className="mb-2 opacity-80">RFC</p>
              <div className="mb-5">
                <label htmlFor="text" className="sr-only bg-blue-300">
                  RFC
                </label>
                <input
                  id="email-address"
                  name="rfc"
                  onChange={handleRfcChange}
                  type="text"
                  autoComplete="email"
                  required
                  className="relative rounded-none block w-full px-4  py-1.5  ring-1 ring-inset placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="RFC"
                  minLength={10}
                />
              </div>
            </div>
            {/**Email */}
            <div className="-space-y-px rounded-md shadow-sm">
            <p className="mb-2 opacity-80">Email</p>
              <div className="mb-5">
                <label htmlFor="email" className="sr-only bg-blue-300">
                  email
                </label>
                <input
                  id="email-address"
                  name="email"
                  onChange={handleEmailChange}
                  type="email"
                  autoComplete="email"
                  required
                  className="relative rounded-none block w-full px-4  py-1.5  ring-1 ring-inset placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Email"
                />
              </div>
            </div>
            {/**Password */}
            <div className="-space-y-px rounded-md shadow-sm col-span-2">
            <p className="mb-2 opacity-80">Contraseña:</p>
              <div className="mb-5">
                <label htmlFor="password" className="sr-only bg-blue-300">
                  password
                </label>
                <input
                  id="email-address"
                  name="password"
                  onChange={handlePassChange}
                  type="password"
                  autoComplete="email"
                  required
                  className="relative rounded-none block w-full px-4  py-1.5  ring-1 ring-inset placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Contraseña"
                />
              </div>
            </div>
            </div>

            <div className="flex flex-row items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
            <a>
              {errorLogin != false ? (
                <p>Error al loguearse, revise su contraseña</p>
              ) : (
                ""
              )}
            </a>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                Crear cuenta
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registrar;
