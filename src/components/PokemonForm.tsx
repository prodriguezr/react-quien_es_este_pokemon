import { useState } from 'react';
import type { GameState } from '../hooks';

interface Props {
  gameState: GameState;
  handlePokemonNameSubmit: (userInput: string) => void;
}

export const PokemonForm = ({ gameState, handlePokemonNameSubmit }: Props) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputValue.trim()) {
      console.log('No se puede enviar un nombre vacío');
      return;
    }

    handlePokemonNameSubmit(inputValue);

    setInputValue('');
  };

  return (
    <form className="input-group mb-3 my-4" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="¿Quién es ese Pokémon?"
        aria-label="¿Quién es ese Pokémon?"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        autoFocus
        disabled={gameState !== 'playing'}
      />
      <button
        className="btn btn-outline-dark"
        type="submit"
        disabled={!inputValue.trim() || gameState !== 'playing'}
      >
        Jugar
      </button>
    </form>
  );
};

export default PokemonForm;
