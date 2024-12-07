import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Login from "@/pages/login";
import Modal from "../modals/modal";
import { getTokenLocalStorage } from "../utils/getTokenLocalStorage";

export const NavbarComponent = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState(router.pathname);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userLocalStorage, setUserLocalStorage] = useState({});

  const cargarLocalStorage = () => {
    setUserLocalStorage(getTokenLocalStorage());
  };
  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleClickLogout = () => {
    localStorage.removeItem("token");
  };
  
  useEffect(() => {
    cargarLocalStorage();
  }, []);

  return (
    <>
      <div className="min-h-full mt-2 sticky top-0 bg-neutral-50 z-50 ">
        <nav className="bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <a className="flex-shrink-0" href="/">

                  <Image
                    src={"/assets/BAMP_LOGO_H.png"}
                    width={100}
                    height={200}
                    alt="Bambp Logo"
                  ></Image>
                </a>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <Link
                      href={"/"}
                      onClick={() => setIsActive("/")}
                      className={`${
                        isActive == "/"
                          ? "text-gray-800 font-bold border-b-2"
                          : "font-medium"
                      } text-slate-800 px-3 py-2 text-sm`}
                    >
                      Inicio
                    </Link>

                    <Link
                      href={"/autos"}
                      onClick={() => setIsActive("/autos")}
                      className={`${
                        isActive == "/autos"
                          ? "text-gray-800 font-bold border-b-2"
                          : "font-medium"
                      } text-slate-800 px-3 py-2 text-sm`}
                    >
                      Autos
                    </Link>

                    <Link
                      href={"/citas"}
                      onClick={() => setIsActive("/citas")}
                      className={`${
                        isActive == "/citas"
                          ? "text-gray-800 font-bold border-b-2"
                          : "font-medium"
                      } text-slate-800 px-3 py-2 text-sm`}
                    >
                      Citas
                    </Link>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <Link
                    onClick={handleOpenModal}
                    className="flex flex-row items-center hover:opacity-70"
                    href={"#"}
                  >
                    <p className="text-slate-800 rounded-md px-3 py-2 text-sm font-medium">
                      {userLocalStorage.email || "Iniciar sesión"}
                    </p>
                  </Link>
                  {userLocalStorage.email ? (
                    <Link onClick={handleClickLogout} href={'/'} className="flex flex-row items-center hover:opacity-70">
                    <Image
                      src={"/assets/logout.png"}
                      width={25}
                      height={25}
                      alt="logout bamp"
                    ></Image>
                    </Link>
                  ) : (
                    
                      <Image
                        src={"/assets/usuario.png"}
                        width={30}
                        height={30}
                        alt="iniciar sesión"
                      />
                  )}

                  {/* modal */}
                  {isModalVisible && (
                    <Modal title="Login" onClose={handleCloseModal}>
                      {/* contenido del modal */}
                      <Login onClose={handleCloseModal}></Login>
                    </Modal>
                  )}
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={handleMenuClick}
                  href="/index"
                  id="boton"
                  type="button"
                  className="inline-flex items-center justify-center rounded-md text-black opacity-80  p-2   focus:outline-none focus:ring-2 focus:ring-slate-600 focus:ring-offset-2 "
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>

                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>

                  <svg
                    className="hidden h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden" id="mobile-menu">
              <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                <Link
                  href={"/"}
                  onClick={() => setIsActive("/")}
                  className={`${
                    isActive == "/"
                      ? "text-gray-800 font-bold border-b-2"
                      : "font-medium"
                  } text-slate-800 px-3 block py-2 text-sm`}
                >
                  Inicio
                </Link>

                <Link
                  href={"/autos"}
                  onClick={() => setIsActive("/autos")}
                  className={`${
                    isActive == "/autos"
                      ? "text-gray-800 font-bold border-b-2"
                      : "font-medium"
                  } text-slate-800 px-3 block py-2 text-sm`}
                >
                  Autos
                </Link>

                <Link
                  href={"/citas"}
                  onClick={() => setIsActive("/citas")}
                  className={`${
                    isActive == "/citas"
                      ? "text-gray-800 font-bold border-b-2"
                      : "font-medium"
                  } text-slate-800 block px-3 py-2 text-sm`}
                >
                  Citas
                </Link>

                {/**text */}
                <div className="ml-4 flex justify-between items-center md:ml-6 ">
                  <Link
                    onClick={handleOpenModal}
                    className="flex flex-row items-center hover:opacity-70"
                    href={"#"}
                  >
                    <p className="text-slate-800 rounded-md  py-2 text-sm font-medium">
                      {userLocalStorage.email || "Iniciar sesión"}
                    </p>
                  </Link>
                  {userLocalStorage.email ? (
                    <Link onClick={handleClickLogout} href={'/'} className="flex flex-row items-center hover:opacity-70">
                    <Image
                      src={"/assets/logout.png"}
                      width={25}
                      height={25}
                      alt="logout bamp"
                    ></Image>
                    </Link>
                  ) : (
                    
                      <Image
                        src={"/assets/usuario.png"}
                        width={30}
                        height={30}
                        alt="iniciar sesión"
                      />
                  )}

                  {/* modal */}
                  {isModalVisible && (
                    <Modal title="Login" onClose={handleCloseModal}>
                      {/* contenido del modal */}
                      <Login onClose={handleCloseModal}></Login>
                    </Modal>
                  )}
                </div>
              </div>
            </div>
          )}
        </nav>
        <main>
          <div className="mx-auto  sm:px-6 lg:px-8"></div>
        </main>
      </div>
    </>
  );
};
