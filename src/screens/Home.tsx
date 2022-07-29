import image from "../img/kid.png";
import mineLogo from "../img/Explotion.png";
import Juego from "../components/inicio/Juego";
import Palabra from "../img/letras.png";

const Home = () => {
  return (
    <div className="w-full">
      <div className="flex w-3/4 m-auto max-w-screen-2xl py-3 justify-center">
        <div className="">
          <h1 className="font-bold text-3xl text-black uppercase">
            Aplicacion web de
            <span className="text-blue-300"> VideoJuegos</span>
          </h1>
          <h3 className="text-gray-400 ml-3">Por: Daniel Barocio</h3>
          <div className=" mt-10 shadow hover:shadow-lg hover:p-5 duration-100 bg-slate-100 rounded space-y-5 p-4">
            <h1 className="uppercase font-bold">Juegos Terminados</h1>
            <Juego title="Mine Search" image={mineLogo} />
            <Juego title="Wordle" image={Palabra} />
          </div>
        </div>
        <div className="">
          <img src={require("../img/kid.png")} />
        </div>
      </div>
    </div>
  );
};

export default Home;
