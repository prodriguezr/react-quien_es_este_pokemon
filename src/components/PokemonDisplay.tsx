import type { GameState } from '../hooks';
import type { Pokemon } from '../interfaces';
import Spinner from './Spinner';

interface Props {
  pokemon: Pokemon | null;
  isLoading: boolean;
  gameState: GameState;
}

export const PokemonDisplay = ({ pokemon, isLoading, gameState }: Props) => {
  const image = pokemon?.image;
  const name = pokemon?.name;

  console.log(name);

  return (
    <div className="card">
      <div className="card-header">
        <h1 className="text-center">
          {gameState === 'correct' ? name : '¿Quién es ese Pokémon?'}
        </h1>
      </div>
      <div className="card-body mx-auto">
        {isLoading ? (
          <Spinner />
        ) : (
          <img
            src={image}
            alt={gameState === 'correct' ? name : '???'}
            className="img-fluid mx-auto d-block"
            style={{
              maxHeight: '200px',
              maxWidth: '200px',
              filter: gameState === 'correct' ? 'none' : 'brightness(0)',
              transition: 'filter 0.3s ease-in-out',
            }}
          />
        )}
      </div>
    </div>
  );
};

export default PokemonDisplay;
