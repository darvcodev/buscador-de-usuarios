import { useEffect, useState } from "react";
import { Card } from "./components/Card";

export const App = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [buscar, setBuscar] = useState("");

  useEffect(() => {
    contactos();
  }, []);

  const contactos = async () => {
    const respuesta = await fetch("https://randomuser.me/api/?results=10");
    const data = await respuesta.json();
    setUsuarios(data.results);
    console.log(data.results);
  };

  return (
    <div className="flex flex-col item-center mt-16 p-8">
      <input
        type="text"
        placeholder="Buscar usuario..."
        className="w-full bg-white border-2 border-gray-400 rounded-lg py-2 px-4 mb-4"
        onChange={(e) => setBuscar(e.target.value)}
      />

      {usuarios
        .filter((usuario) => {
          if (buscar === "") {
            return usuario;
          } else if (
            usuario.name.first.toLowerCase().includes(buscar.toLowerCase()) ||
            usuario.name.last.toLowerCase().includes(buscar.toLowerCase()) ||
            usuario.email.toLowerCase().includes(buscar.toLowerCase()) ||
            usuario.cell.includes(buscar)
          ) {
            return usuario;
          }
        })
        .map((usuario) => (
          <Card
            key={usuario.email}
            imagen={usuario.picture.large}
            nombre={`${usuario.name.first} ${usuario.name.last}`}
            correo={usuario.email}
            celular={usuario.cell}
          />
        ))}
    </div>
  );
};
