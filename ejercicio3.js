function findSafestPath(dream) {
    let rows = dream.length;
    let cols = dream[0].length;
  
    let dangerLevels = [];
  
    for (let i = 0; i < rows; i++) {
      dangerLevels[i] = [];
      for (let j = 0; j < cols; j++) {
        if (i === 0 && j === 0) {
          dangerLevels[i][j] = dream[i][j];
        } else if (i === 0) {
          dangerLevels[i][j] = dangerLevels[i][j - 1] + dream[i][j];
        } else if (j === 0) {
          dangerLevels[i][j] = dangerLevels[i - 1][j] + dream[i][j];
        } else {
          let fromLeft = dangerLevels[i][j - 1];
          let fromTop = dangerLevels[i - 1][j];
          dangerLevels[i][j] = Math.min(fromLeft, fromTop) + dream[i][j];
        }
      }
    }
  
    return dangerLevels[rows - 1][cols - 1];
  }
  