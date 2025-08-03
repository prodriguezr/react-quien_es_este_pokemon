import { useCallback, useEffect, useState } from 'react';

import type { Pokemon } from '../interfaces';
import { pokemonService } from '../services';

const GameState = {
  Playing: 'playing',
  Correct: 'correct',
  Wrong: 'wrong',
} as const;

export type GameState = (typeof GameState)[keyof typeof GameState];

export const useGameManager = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [gameState, setGameState] = useState<GameState>(GameState.Playing);

  const handlePokemonNameSubmit = useCallback(
    (userInput: string) => {
      if (!pokemon) return;

      const isValid = pokemonService.isPokemonNameValid(
        pokemon.name,
        userInput
      );

      setGameState(isValid ? 'correct' : 'wrong');
    },
    [pokemon]
  );

  const loadNewPokemon = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setGameState('playing');

    try {
      const pokemon = await pokemonService.getRandomPokemon();

      setPokemon(pokemon);
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadNewPokemon();
  }, [loadNewPokemon]);

  return {
    pokemon,
    isLoading,
    error,
    loadNewPokemon,
    handlePokemonNameSubmit,
    gameState,
  };
};
