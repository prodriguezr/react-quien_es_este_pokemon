/**
 * Genera un número aleatorio dentro del rango especificado
 * @param min - Límite inferior del rango (inclusive)
 * @param max - Límite superior del rango (inclusive)
 * @returns Un número aleatorio entre min y max (ambos inclusive)
 */
export const generateRandomNumber = (min: number, max: number): number => {
  // Validar que min sea menor que max
  if (min > max) {
    throw new Error(
      'El límite inferior debe ser menor o igual al límite superior'
    );
  }

  // Validar que los parámetros sean números
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    throw new Error('Los límites deben ser números enteros');
  }

  // Generar número aleatorio entre min y max (ambos inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Genera un número aleatorio entre 0 y el límite superior especificado
 * @param max - Límite superior del rango (inclusive)
 * @returns Un número aleatorio entre 0 y max (ambos inclusive)
 */
export const generateRandomNumberUpTo = (max: number): number => {
  return generateRandomNumber(0, max);
};
