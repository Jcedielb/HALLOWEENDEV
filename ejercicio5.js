function escapePyramidHead(room) {
    var n = room.length; 
    var pyramidX, pyramidY, targetX, targetY; 
    
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
        if (room[i][j] === '▲') {
          pyramidX = i;
          pyramidY = j;
        }
        if (room[i][j] === 'T') {
          targetX = i;
          targetY = j;
        }
      }
    }
    
    if (pyramidX === undefined || targetX === undefined) {
      return -1;
    }
    
    var visited = [];
    for (var i = 0; i < n; i++) {
      visited[i] = [];
      for (var j = 0; j < n; j++) {
        visited[i][j] = false;
      }
    }
    
    var queueX = [pyramidX];
    var queueY = [pyramidY];
    var stepsQueue = [0];
    visited[pyramidX][pyramidY] = true;
    
    var dirs = [
      [-1, 0], // Arriba
      [1, 0],  // Abajo
      [0, -1], // Izquierda
      [0, 1]   // Derecha
    ];
    
    while (queueX.length > 0) {
      var x = queueX.shift();
      var y = queueY.shift();
      var steps = stepsQueue.shift();
      
      if (x === targetX && y === targetY) {
        return steps;
      }
      
      for (var k = 0; k < dirs.length; k++) {
        var nx = x + dirs[k][0];
        var ny = y + dirs[k][1];
        
        if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
          if (!visited[nx][ny] && room[nx][ny] !== '#') {
            visited[nx][ny] = true;
            queueX.push(nx);
            queueY.push(ny);
            stepsQueue.push(steps + 1);
          }
        }
      }
    }
    
    return -1;
  }
  