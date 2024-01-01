import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const openReserveTable = () => {
    navigate("/reserve-table");
  };
  return (
    <div className="p-10 bg-green-900 text-white">
      <header className="text-4xl text-yellow-400 font-bold">Little Lemon</header>
      <div className="text-xl py-2">Chicago</div>
      <div className="pr-6">
        We are a family owned Mediterranean restaurant, focused on traditional
        recipes served with a modern twist.
      </div>
      <div className="actions">
        <button className="bg-yellow-400 text-black font-bold px-4 py-2 mt-4 rounded-2xl" onClick={openReserveTable}>Reserve a table</button>
      </div>
    </div>
  );
};

export default Hero;
