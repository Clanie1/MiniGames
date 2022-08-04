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
            <Juego title="Minesweeper" image={mineLogo} link="Mines" ><h1>El mejor juego de busca minas que vas a poder encontrar. Se basa en que tienes que pasar por todo un campo minado sin explotar, saludos</h1></Juego>
            <Juego title="Wordle" image={Palabra} link="wordle" ><h1>El mejor juego de wordle que puedes encontrar. se basa en que tienes que adivinar la palabra en menos de 4 intentos</h1></Juego>
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
