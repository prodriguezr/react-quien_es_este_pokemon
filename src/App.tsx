import Confetti from 'react-confetti';
import { PokemonDisplay, PokemonForm, PokemonResult } from './components';
import { useGameManager } from './hooks';
import { useWindowSize } from 'react-use';

const App = () => {
  const { width, height } = useWindowSize();

  const {
    pokemon,
    isLoading,
    error,
    loadNewPokemon,
    gameState,
    handlePokemonNameSubmit,
  } = useGameManager();

  if (error) {
    return <div className="text-center text-danger">{error}</div>;
  }

  return (
    <div className="container mx-auto my-5">
      {gameState === 'correct' && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={300}
          recycle={false}
        />
      )}

      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <PokemonDisplay
            pokemon={pokemon}
            isLoading={isLoading}
            gameState={gameState}
          />
          <PokemonForm
            gameState={gameState}
            handlePokemonNameSubmit={handlePokemonNameSubmit}
          />
          <PokemonResult
            gameState={gameState}
            loadNewPokemon={loadNewPokemon}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
