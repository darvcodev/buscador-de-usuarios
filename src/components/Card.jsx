export const Card = ({ imagen, nombre, correo, celular }) => {
  return (
    <div className="bg-white bg-gradient-to-b from-cyan-500 to-blue-500 py-8 px-10 text-center rounded-3xl shadow-xl m-auto w-96 mt-16 mb-16 border-white border-4">
      <img
        className="w-36 -mt-16 shadow-xl rounded-full border-white border-4 mx-auto mb-4"
        src={imagen}
      />
      <h1 className="text-2xl font-bold text-white mb-2">👨🏽‍💻 {nombre}</h1>
      <h2 className="text-lg mb-2 text-white">✉️ {correo}</h2>
      <h2 className="text-lg font-bold text-white">📱 {celular}</h2>
    </div>
  );
};
