import { Layaut } from "@/components/Layaut";
import { IdAutos } from "@/components/IdAutos";

import { useContext, useEffect, useState } from "react";

const AutosId = ({ responseJson }) => {

  
  return (
    <Layaut>
         <IdAutos responseJson={responseJson}></IdAutos>

    </Layaut>
  );
};
export default AutosId;

export const getServerSideProps = async ({ params: { id } }) => {
  const url = `${process.env.NEXT_PUBLIC_AUTOS_API}/${id}`;
  const response = await fetch(url);
  const responseJson = await response.json();
  return {
    props: {
      responseJson,
    },
  };
};
