import { useState,useEffect } from "react";
import { useGlobalState } from "../../context/GlobalState";

function TransacionForm() {
  const { addTransaction } = useGlobalState();
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState(0);
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount,
      hora: `${fecha} -- ${hora}`,
    });
    setAmount(0);
    setDescription("");
  };

  useEffect(() => {
    const actualizarFechaHora = () => {
      const fechaActual = new Date();
      const fechaFormateada = `${fechaActual.getDate()}/${
        fechaActual.getMonth() + 1
      }/${fechaActual.getFullYear()}`;
      const horaFormateada = `${fechaActual.getHours()}:${fechaActual.getMinutes()} ${
        fechaActual.getHours() >= 12 ? "PM" : "AM"
      }`;

      setFecha(fechaFormateada);
      setHora(horaFormateada);
    };

    // Actualizar fecha y hora cada segundo
    const intervalId = setInterval(actualizarFechaHora, 1000);

    // Limpiar intervalo al desmontar el componente
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter a Description"
          onChange={(e) => setDescription(e.target.value)}
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
          value={description}
        />
        <input
          type="number"
          step="0.01"
          placeholder="00.00"
          onChange={(e) => setAmount(e.target.value)}
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
          value={amount}
        />
        <button className="bg-green-700 tetx-white px-3 py-2 rounded-lg block mb-2 w-full">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TransacionForm;
