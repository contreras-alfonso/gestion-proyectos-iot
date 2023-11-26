import React, { useEffect } from 'react';

const dataTest = async () => {
  const url = `${import.meta.env.VITE_RUTA_BACKEND}/sensores/testaddinfo`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data); // Puedes hacer algo con los datos aquí
}

const intervalId = setInterval(() => {
  dataTest();
}, 30000);

export const LayoutTest = () => {
  useEffect(() => {
    // Ejecuta dataTest inmediatamente al montar el componente

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []); // El segundo argumento del useEffect [] asegura que solo se ejecute en el montaje y desmontaje del componente

  return (
    <div>LayoutTest</div>
  );
}
