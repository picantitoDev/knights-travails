function knightMoves(start = [3, 3], end = [4, 3]) {
  let x = start[0]
  let y = start[1]

  const queue = [[x, y, []]]
  const visited = new Set()

  while (queue.length > 0) {
    const [curX, curY, path] = queue.shift()

    if (curX === end[0] && curY === end[1]) {
      return path.concat([[curX, curY]])
    }

    visited.add(`${curX},${curY}`)
    for (const [newX, newY] of getPositions(curX, curY)) {
      if (visited.has(`${newX},${newY}`)) {
        continue
      }
      let newPath = path.slice() // Copy the path array
      newPath.push([curX, curY]) // Append the current move
      queue.push([newX, newY, newPath]) // Add new move to the queue
    }
  }
  return null
}

function isValid(x, y) {
  return x <= 7 && x >= 0 && y <= 7 && y >= 0
}

function getPositions(x, y) {
  const moves = [
    [1, 2],
    [-1, 2],
    [2, 1],
    [-2, 1],
    [2, -1],
    [-2, -1],
    [1, -2],
    [-1, -2],
  ]

  let positions = []

  for (let [row, col] of moves) {
    const newRow = x + row
    const newCol = y + col
    if (isValid(newRow, newCol)) {
      positions.push([newRow, newCol])
    }
  }

  return positions
}

console.log(knightMoves([0, 0], [3, 3]))
