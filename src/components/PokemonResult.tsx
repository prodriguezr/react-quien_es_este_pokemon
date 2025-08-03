import type { GameState } from '../hooks';

interface Props {
  loadNewPokemon: () => void;
  gameState: GameState;
}

export const PokemonResult = ({ gameState, loadNewPokemon }: Props) => {
  if (gameState === 'playing') return null;

  return (
    <div
      className={`alert alert-${
        gameState === 'correct' ? 'success' : 'danger'
      } text-center`}
    >
      <h2>
        {gameState === 'correct' ? (
          <>
            ¡Correcto! <i className="bi bi-hand-thumbs-up-fill"></i>
          </>
        ) : (
          <>
            ¡Incorrecto! <i className="bi bi-hand-thumbs-down-fill"></i>
          </>
        )}
      </h2>
      <button onClick={loadNewPokemon} className="btn btn-dark mt-3">
        Volver a jugar
      </button>
    </div>
  );
};

export default PokemonResult;
