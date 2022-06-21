import './App.css';
import React, {useState,useEffect} from 'react';

function App() {

  const [poke, setPoke] = useState(null)
  const [poke2, setPoke2] = useState(null)
  function getRandomArbitrary(min, max) {
    const rand1 = Math.floor(Math.random() * (max - min) + min),
          rand2 = Math.floor(Math.random() * (max - min) + min);
    return [rand1 , rand2];
  }
  const pokemon = async(Numrand) => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${Numrand[0]}`);
      const data = await res.json();
      const poke1 = {
        name: data.name,
        img_poke: data.sprites.other.home.front_default,
        atack: data.stats[1].base_stat,
        def: data.stats[2].base_stat,
        lvl: 1
      }; 
      setPoke(poke1);
      const res2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${Numrand[1]}`);
      const data2 = await res2.json();
      const poke2 = {
        name: data2.name,
        img_poke: data2.sprites.other.home.front_default,
        atack: data2.stats[1].base_stat,
        def: data2.stats[2].base_stat,
        lvl: 1
      }; 
      setPoke2(poke2);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    pokemon(getRandomArbitrary(1 , 151))
  }, [])


  return (
    <div className="App">
      <div class="flex">
        <div class="vs">
          <h1>VS</h1>
        </div>
      </div>
      <div class="flex">
      {poke ? (
      <div class="card-1">
        <div class="name"><h1>name: {poke.name}</h1> </div>
        <div class="lvl-poke"><h2>LVL: {poke.lvl}</h2></div>
        <div class="img-card"><img src={poke.img_poke} alt='pokemon'></img></div>
        <div class="atack"><h2>ataque: {poke.atack}</h2></div>
        <div class="defec"><h2>defensa: {poke.def}</h2></div>
      </div>
      ) :  
      null
      }
      {poke2 ? (
      <div class="card-2">
        <div class="name"><h1>name: {poke2.name}</h1> </div>
        <div class="lvl-poke"><h2>LVL: {poke2.lvl}</h2></div>
        <div class="img-card"><img src={poke2.img_poke} alt='pokemon'></img></div>
        <div class="atack"><h2>ataque: {poke2.atack}</h2></div>
        <div class="defec"><h2>defensa: {poke2.def}</h2> </div>
      </div>
      ) :  
      null
      }
    </div>     
    </div>
  );
}

export default App;
