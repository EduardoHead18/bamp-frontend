import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { scrollConfig } from "@/components/ScrollReveal/scroll";
import { useRouter } from "next/router";
import Modal from "@/components/modals/modal";
import { CitasForm } from "../citas/CitasForm";
import { getTokenLocalStorage } from "../../utils/getTokenLocalStorage";

export const IdAutos = ({ responseJson }) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState(router.pathname);
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [mostrarComponent, setMostrarComponent] = useState(false);
  const [userLocalStorage, setUserLocalStorage] = useState({});

  //recuperar token de localstorage
  const cargarLocalStorage = () => {
    setUserLocalStorage(getTokenLocalStorage());
  };

  //cambiar estadado del modal

  const handleOpenModal = () => {
    setIsModalVisible(true);
    setMostrarComponent(true)
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    cargarLocalStorage();
    scrollConfig();
  }, []);
  return (
    <>
      <div className="animacion-right container mx-auto px-3 py-2  lg:px-20 lg:py-10 flex flex-col lg:flex-row gap-10">
        <Image
          className="object-cover object-center rounded-md"
          loading="lazy"
          src={responseJson.image}
          alt={responseJson.brand}
          width={600}
          height={600}
        ></Image>
        <div>
          <h1 className="text-2xl text-black font-medium">
            {responseJson.brand} {responseJson.model}
          </h1>
          <p className="mx-auto max-w-2xl mt-10 mb-10 text-justify font-light sm: lg:max-w-7xl  text-lg">
            {responseJson.characteristics}
          </p>

          <h3 className="text-sm mt-5  text-gray-700">
            País de fabricación
            <a> {responseJson.contry}</a>
          </h3>
          <h3 className="text-sm mb-10 font-medium  text-gray-800">
            Precio:
            <a> {responseJson.price}</a>
          </h3>

          {userLocalStorage && userLocalStorage.email ? (
            <Link
              onClick={handleOpenModal}
              href="#"
              className="bg-gray-800 px-10 py-2  text-white"
            >
              Cotizar
            </Link>
          ) : (
            <p className="text-red-700 opacity-70 font-bold mt-4">
              Para poder agendar una cita necesitas iniciar sesión
            </p>
          )}
          {mostrarComponent && isModalVisible && (
            <Modal title="Login" onClose={handleCloseModal}>
              {/* contenido del modal */}
              <CitasForm onClose={handleCloseModal} />
            </Modal>
          )}
        </div>
      </div>
    </>
  );
};
