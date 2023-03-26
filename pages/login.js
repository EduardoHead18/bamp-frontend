import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getTokenLocalStorage } from "@/components/utils/getTokenLocalStorage";

const Login = (props) => {
  //destructurando las props
  const { onClose } = props;
  //obtener fecha actual
  const fecha = new Date().toLocaleString();
  //router para cambiar la ruta con js next/router
  const router = useRouter();
  //estados
  const [email, setEmail] = useState("Iniciar sesión");
  const [pass, setPass] = useState("");
  //estado para mostrar si hay error al loguearse en el frontend
  const [errorLogin, setErrorLogin] = useState(false);
  const [userApi, setUserApi] = useState([]);
  //estado para la animacion de loading
  const [loading, setLoading] = useState(false);
  //send token
  const [userLocalStorage, setUserLocalStorage] = useState({});

  //recuperar token de localstorage
  const cargarLocalStorage = () => {
    setUserLocalStorage(getTokenLocalStorage());
  };

  //obtener el email del form
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  //obtener el password del form
  const handlePassChange = (e) => {
    setPass(e.target.value);
  };
  //consumir api de user [POST] for login
  const userDataLogin = { userName: email, userPassword: pass };
  //useEffect

  const authUser = async () => {
    const url = process.env.NEXT_PUBLIC_LOGIN_API;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDataLogin),
    });
    // Lee la respuesta del backend
    const data = await response.json();

    // Si se autenticó correctamente, redirige al usuario a la página de inicio
    if (response.ok) {
      localStorage.setItem("token", data.token);
      getAuthUser();
      /*
      const objetoLocalStorage = {token:data.token,email:email,password:pass}
      setTokenUser(localStorage.setItem("user-data", JSON.stringify(objetoLocalStorage)));
      onClose()*/
    } else {
      setErrorLogin(true);
      console.error(data.message);
    }
  };
  //recuperar email y password del token y mandarlo al localStorage
  const getAuthUser = async () => {
    const tokenLS = localStorage.getItem("token");
    console.log(`token del encabezado: ${tokenLS}`);
    if (!tokenLS) {
      return; // sale de la función si el token no existe
    }
    try {
      const url = process.env.NEXT_PUBLIC_VERIF_API;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "x-access-token": `Bearer ${tokenLS}`,
        },
      });
      const data = await response.json();
      console.log(data);
      setErrorLogin(true);
    } catch (error) {
      setTimeout(() => {
        onClose();
        enviarLog()
        router.push('/')
        router.reload()
      }, 2000);
    }
  };

  const enviarLog = async () => {
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
  };
  //handle form
  async function handleSubmit(e) {
    //ejecutar loading de carga
    e.preventDefault();
    loadingFunction();
    setTimeout(() => {
      authUser();
      //validarUsuario();
    }, 2000);
  }

  //recuperar cache
  //funcion de la animacion loading
  const loadingFunction = () => {
    setLoading(true);
  };
  //useEffect
  useEffect(() => {
    cargarLocalStorage()
  }, []);

  return (
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
                Remember me{" "}
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
              <p className="text-red-700 font-medium mt-4">
                Error al iniciar sesión, revise su contraseña
              </p>
            ) : (
              " "
            )}
          </a>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md bg-gray-700 py-1 px-3 text-sm font-semibold text-white hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
              Iniciar sesión
            </button>
          </div>
        </form>
        {loading == true ? (
          <div className="flex items-center justify-center    rounded-lg bg-gray-50">
            <div className="px-1 py-1 text-2lx font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
              Verificando...
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default Login;
