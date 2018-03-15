/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var board = new Board({n:n});

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      board.togglePiece(i,j);
    
      if (board.hasAnyRooksConflicts()) {
        board.togglePiece(i,j);   // toggle back
      }
    }
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(board.rows()));
  return board.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n:n});

  var traverse = function(index) {  //index is row 
    if (index === n) {
      solutionCount++;
      return ;
    }
    for (var i = 0; i < n; i++) {    // i is column
        board.togglePiece(index, i);

        if (!board.hasAnyRooksConflicts()) {
          traverse(index + 1);
        }
      board.togglePiece(index, i);
    }
  }
  traverse(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solutionCount = 0;
  var board = new Board({n:n});
  var solution;


  var traverse = function(index) {  //index is row 
    if (index === n) {
      solutionCount++;
      return board.rows();
    }
    for (var i = 0; i < n; i++) {    // i is column
      if(solutionCount === 0){
        board.togglePiece(index, i);
      } else{ break; };
        if (!board.hasAnyQueensConflicts()) {
          traverse(index + 1);
        }
      if(solutionCount === 0){
        board.togglePiece(index, i);
      } else { break; };
    }
    return board.rows();
  }
  solution = traverse(0);
  
  
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
    var solutionCount = 0;
  var board = new Board({n:n});

  var traverse = function(index) {  //index is row 
    if (index === n) {
      solutionCount++;
      return ;
    }
    for (var i = 0; i < n; i++) {    // i is column
        board.togglePiece(index, i);

        if (!board.hasAnyQueensConflicts()) {
          traverse(index + 1);
        }
      board.togglePiece(index, i);
    }
  }
  traverse(0);
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
