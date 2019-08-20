  
function new_grid_initialize(){
  var zero_grid = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];
  return zero_grid;
}
function C90(grid) {
  var new_grid=new_grid_initialize();
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      new_grid[j][3 - i] = grid[i][j];
      // console.log(new_grid[j][3-i]);
    }
  }
  // console.table(new_grid);

  return new_grid;
}

function CC90(grid) {
  var new_grid=new_grid_initialize();
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      new_grid[3 - j][i] = grid[i][j];
      // console.log(new_grid[3 - j][i]);
    }
  }
  // console.table(new_grid);
  
  return new_grid;
}

function rot180(grid) {
  var new_grid=new_grid_initialize();
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      new_grid[i][3-j]=grid[i][j];
    }
  }
  // console.table(new_grid);
  return new_grid;
}