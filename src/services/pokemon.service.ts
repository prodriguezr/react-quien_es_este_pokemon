import type { Pokemon } from '../interfaces';
import { generateRandomNumber } from '../lib';

const POKEAPI_URL =
  import.meta.env.VITE_POKEAPI_URL || 'https://pokeapi.co/api/v2/pokemon';
const MAX_POKEMONS = parseInt(import.meta.env.VITE_MAX_POKEMONS || '151', 10);
// Delay configurable para desarrollo (en milisegundos)
const DEV_DELAY = parseInt(import.meta.env.VITE_DEV_DELAY || '2000', 10);

// Función para crear un delay artificial (útil para desarrollo y pruebas)
const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const getRandomPokemon = async (): Promise<Pokemon> => {
  // Delay artificial para desarrollo (configurable)
  if (import.meta.env.DEV && DEV_DELAY > 0) {
    await delay(DEV_DELAY);
  }

  const randomId = generateRandomNumber(1, MAX_POKEMONS);
  const response = await fetch(`${POKEAPI_URL}/${randomId}`);

  if (!response.ok) {
    throw new Error('Failed to fetch pokemon');
  }

  const data = await response.json();

  return {
    id: data.id,
    name: data.name,
    image: data.sprites.other['official-artwork'].front_default,
  };
};

const normalizePokemonName = (name: string): string => {
  return name
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '');
};

const isPokemonNameValid = (
  pokemonName: string,
  userInput: string
): boolean => {
  const normalizedPokemonName = normalizePokemonName(pokemonName);
  const normalizedUserInput = normalizePokemonName(userInput);

  return normalizedPokemonName === normalizedUserInput;
};

export const pokemonService = {
  getRandomPokemon,
  isPokemonNameValid,
};
