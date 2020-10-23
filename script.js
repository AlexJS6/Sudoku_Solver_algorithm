function is_possible(table, y, x, n) { //y = 0, x = 4, n = 3;
    for (let p=0; p<9; p++) {
        if (table[y][p] == n || table[p][x] == n) { //table[y][row] == n || table[row][x] == n
            return false;
        }
    }
    let x0 = Math.floor(x / 3) * 3;
    let y0 = Math.floor(y / 3) * 3;
    for (let i=0; i<3; i++) {
        for (let j=0; j<3; j++) {
            if (table[y0 + i][x0 + j] == n) {
                return false
            }
        }
    }
    return true;
}


function solveIt(grid) {
    for (let i=0; i<9; i++) {
        for (let j=0; j<9; j++) {
            if (grid[i][j] == 0) {
                for (let n = 1; n < 10; n++) {
                    if (is_possible(grid, i, j, n)) {
                        grid[i][j] = n;
                            if (solveIt(grid)) {
                            return true;
                        } else {
                            grid[i][j] = 0;
                        }
                    }
                }
                return false;
            }
        }
    }
    return true;
}

let sudoku =[[1, 5, 0, 0, 4, 2, 0, 0, 6], 
            [2, 7, 4, 5, 6, 0, 0, 1, 0], 
            [0, 0, 6, 0, 0, 7, 4, 0, 2], 
            [0, 1, 0, 0, 0, 0, 0, 4, 0], 
            [0, 0, 0, 0, 5, 0, 0, 0, 0],
            [0, 6, 0, 4, 0, 3, 1, 9, 0],
            [0, 2, 0, 6, 0, 5, 9, 0, 0],
            [9, 8, 5, 0, 3, 0, 0, 6, 0],
            [0, 4, 0, 2, 1, 9, 8, 3, 0]];

//console.log(is_possible(sudoku, 0, 2, 9));
solveIt(sudoku);
console.log(sudoku);



