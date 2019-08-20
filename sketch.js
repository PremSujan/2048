var grid;
var score=0;
function setup() {
  createCanvas(1000, 1000);
  grid = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];
  checker = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];
  addNumber();
  addNumber();
}

function addNumber() {
  let options = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (grid[i][j] == 0) {
        options.push({
          x: i,
          y: j
        });
      }
    }
  }
  if (options.length == 0) {
    print('GAME OVER');
    return;
  }

  let spot = random(options);
  let r = random(1);
  grid[spot.x][spot.y] = r > 0.5 ? 2 : 4;

}

function keyPressed() {
  switch (keyCode) {

    case UP_ARROW:
      checker = CC90(grid);
      operate(checker);
      checker = C90(checker);
      break;
    case DOWN_ARROW:
      checker = C90(grid);
      operate(checker);
      checker = CC90(checker);
      break;
    case RIGHT_ARROW:
      checker = rot180(grid);
      operate(checker);
      checker = rot180(checker);
      break;
    case LEFT_ARROW:
      operate(checker);
      break;
    default:
  }
  if(checker != grid){
    grid = checker;
    addNumber();
  }
}

function draw() {
  background(255);
  drawGrid();

}

function operate(grid) {
  for (let i = 0; i < 4; i++) {
    grid[i] = slide(grid[i]);
    grid[i] = combine(grid[i]);
    grid[i] = slide(grid[i]);
  }  
}

function combine(row){
  for(let i=0;i<3;i++){
    let a = row[i];
    let b = row[i+1];
    if(a == b && a!=0){
      row[i] = 2*a;
      score=score + a; 
      row[i+1] = 0;
      i++;
    }
  }
  return row;
}

  function slide(row) {
    let arr = row.filter(val => val);
    let missing = 4 - arr.length;
    let zeros = Array(missing).fill(0);
    arr = arr.concat(zeros);
    return arr;
  }

  function drawGrid() {
    let w = 200;
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        let val = grid[i][j];

        if (grid[i][j] != 0) {
          fill(255,0,0,color_of_num(val));
          strokeWeight(0);
          stroke(0);
          rect(j * w, i * w, w, w,10);
          textAlign(CENTER, CENTER);
          fill(0);
          textSize(64);
          noStroke();
          text(val, j * w + w / 2, i * w + w / 2);
        }
        else if(grid[i][j]==0){
          noFill();
          strokeWeight(2);
          stroke(0);
          rect(i * w, j * w, w, w,10);
        }
      }
    }
  }