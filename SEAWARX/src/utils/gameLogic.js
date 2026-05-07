export const GRID_SIZE = 5
export const TOTAL_SHIPS = 5

export function createGrid() {
  return Array.from({ length: GRID_SIZE }, () =>
    Array.from({ length: GRID_SIZE }, () => ({
      hasShip: false,
      attacked: false,
    }))
  )
}

export function placeRandomShips(grid) {
  const newGrid = grid.map((row) => row.map((cell) => ({ ...cell })))
  let placed = 0;

  while (placed < TOTAL_SHIPS) {
    const row = Math.floor(Math.random() * GRID_SIZE)
    const col = Math.floor(Math.random() * GRID_SIZE)

    if (!newGrid[row][col].hasShip) {
      newGrid[row][col].hasShip = true
      placed++
    }
  }

  return newGrid
}

export function checkAllShipsSunk(grid) {
  return grid.every((row) =>
    row.every((cell) => !cell.hasShip || cell.attacked)
  );
}

export function getRandomAttack(grid) {
  let row
  let col

  do {
    row = Math.floor(Math.random() * GRID_SIZE)
    col = Math.floor(Math.random() * GRID_SIZE)
  } while (grid[row][col].attacked);

  return {row, col}
}

export function countRemainingShips(grid) {
  return grid.flat().filter((cell) => cell.hasShip && !cell.attacked).length
}