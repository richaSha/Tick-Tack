// Business logic
var i = null;
var X = 1;
var O =0;
var space1 = space2 = space3 = space4 = space5 = space6 = space7 = space8 = space9 = i;
function Player(name, sign,className){
  this.name = name;
  this.sign = sign;
  this.class= className;
  this.spaceMarked = [space1,space2,space3,space4,space5,space6,space7,space8,space9];
}
var Board = {
  boardSpaces : [space1,space2,space3,space4,space5,space6,space7,space8,
    space9],
  updatedBoardSpaces : function(index, PlayerSign){
      this.boardSpaces[index] = PlayerSign;
    },

}

var findPlayer2Space = function(){
  var spacePossible;
  var checkNext;
  var space=null;
  var boardPossiblities = [[Board.boardSpaces[0],Board.boardSpaces[1],Board.boardSpaces[2]],
                        [Board.boardSpaces[3],Board.boardSpaces[4],Board.boardSpaces[5]],
                        [Board.boardSpaces[6],Board.boardSpaces[7],Board.boardSpaces[8]],
                        [Board.boardSpaces[0],Board.boardSpaces[3],Board.boardSpaces[6]],
                        [Board.boardSpaces[1],Board.boardSpaces[4],Board.boardSpaces[7]],
                        [Board.boardSpaces[2],Board.boardSpaces[5],Board.boardSpaces[8]],
                        [Board.boardSpaces[0],Board.boardSpaces[4],Board.boardSpaces[8]],
                        [Board.boardSpaces[2],Board.boardSpaces[4],Board.boardSpaces[6]]];
  var boardPossiblitiesIndex = [[0,1,2,],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
  for (i=0; i < boardPossiblities.length; i++){
    if (boardPossiblities[i] !== 0){
      spacePossible = check(boardPossiblities[i])
      if (!spacePossible){
        boardPossiblities[i] = 0;
      } else {
        checkNext = checkSpace(boardPossiblities[i])
        if(checkNext!== -1){
          space = boardPossiblitiesIndex[i][checkNext];
          return space;
        }
      }
    }
  }
  if(space === null){
    space =firstNull();
  }
  return space;
}

function check(possiblity){
  if (possiblity.indexOf(null) >= 0){
    return true;
  }else{
    return false;
  }
}

function checkSpace(spaces){
  var index = 0;
  var nullSpace = [];
  var addCountofX = 0;
  spaces.map(function(space) {
    if(space != null){
       addCountofX += space;
    }else{
      nullSpace.push(index);
    }
    index++;
  });
  if(addCountofX === 2){
    return nullSpace[0];
  }else{
    return -1;
  }
}

function firstNull(){
  var emptyIndex = Board.boardSpaces.indexOf(null);
  return emptyIndex;
}


// User interface
$(document).ready(function(){
  var Player1 = new Player("Player1", X, "player1");
  var Player2 = new Player("System", O,"player2");
  function playerSteps(player, index){
    $("li.space"+index).addClass(player.class);
    player.spaceMarked[index] = O;
    Board.updatedBoardSpaces(index, player.sign);
    $('button').trigger("click");
  }
  function player2Turn(){
    var index;
    if(Board.boardSpaces[4] === null){
      index = 4;
    }else {
      index = findPlayer2Space();
    }
    playerSteps(Player2, index)
  }
  $('button').click(function() {
    $(this).toggleClass('active');
  });
  $("ul li ").click(function(){
    var userInput = this.title;
    playerSteps(Player1, userInput)

    setTimeout(function(){
      player2Turn();
    }, 2000);
  });
});
