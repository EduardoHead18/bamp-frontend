import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import UserLoggedIn from "./context/ApiContext";

const Login = (props) => {
  //destructurando las props
  const { onClose } = props;
  //obtener fecha actual
  const fecha = new Date().toLocaleString();
  //router para cambiar la ruta con js next/router
  const router = useRouter();
  //estados
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  //estado para mostrar si hay error al loguearse en el frontend
  const [errorLogin, setErrorLogin] = useState(false);
  const [userApi, setUserApi] = useState([]);
  //useContext para cambiar el valor del estado global (para saber si el usuario esta logueado o no)
  //const [contextValue, setContextValue] = useContext(UserLoggedIn)

  //consumir api de user
  const userApiFetch = async () => {
    const url = process.env.NEXT_PUBLIC_USER_API;
    const response = await fetch(url);
    const responseJson = await response.json();
    setUserApi(responseJson);
  };
  //obtener el email del form
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  //obtener el password del form
  const handlePassChange = (e) => {
    setPass(e.target.value);
  };
  //validar login
  const validarUsuario = async () => {
    //funcion para verificar el usuario y enviar el log a la bd
    try {
      //consumir api
      const user = userApi.find((res) => email === res.email && pass === res.password);
        if (user) {
          setEmail(user.email);
          //setContextValue(false)
          console.log("Acceso aceptado");
          // objeto para enviar al post
          const dataLogPost = {
            user: email,
            description: `el usuario ${email} inicio sesion el dia ${fecha}`,
          };
          //hacer post
          const url = process.env.NEXT_PUBLIC_LOGS_API;
          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(dataLogPost),
          });
          if (response.ok) {
            const data = await response.json();
            console.log(data);
          } else {
            console.error("Error en la solicitud");
          }
        } else {
          setErrorLogin(true);
          console.log("error al loguearse");
        }

    } catch (error) {
      console.log(error);
    }
  };
  //handle form
  const handleSubmit = async (e) => {
    e.preventDefault();
    validarUsuario();
  };
  //cerrar modal
  const closeModal = () => {
    setTimeout(() => {
      onClose();
    }, 2000);
  };
  //useEffect
  useEffect(() => {
    userApiFetch();
  }, []);

  return (
    <UserLoggedIn.Provider>
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
          Inicia sesión
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          O{" "}
          <Link
            href={"/registrar"}
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            crear cuenta
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
        <div className="-space-y-px rounded-md shadow-sm">
          <div className="mb-5">
            <label htmlFor="email-address" className="sr-only bg-blue-300">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              onChange={handleEmailChange}
              type="email"
              autoComplete="email"
              required
              className="relative rounded-none block w-full px-4  py-1.5  ring-1 ring-inset placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="pass"
              onChange={handlePassChange}
              type="password"
              autoComplete="current-password"
              required
              className="relative rounded-none block w-full px-4  py-1.5  ring-1 ring-inset placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Password"
            />
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
              Remember me {" "}
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
            <p className="text-red-700 font-medium mt-4">Error al iniciar sesión, revise su contraseña</p>
          ) : (
            ""
          )}
        </a>

        <div>
          <button
            onClick={closeModal}
            type="submit"
            className="group relative flex w-full justify-center rounded-md bg-gray-700 py-2 px-3 text-sm font-semibold text-white hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
            Iniciar sesión
          </button>
        </div>
      </form>
    </div>
  </div>
    </UserLoggedIn.Provider>
  );
};
export default Login;

