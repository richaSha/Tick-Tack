// Business logic
var i = null;
var X = 1;
var O =0;
var space1 = space2 = space3 = space4 = space5 = space6 = space7 = space8 = space9 = i;
function Player(name, sign){
  this.name = name;
  this.sign = sign;
  this.spaceMarked = [space1,space2,space3,space4,space5,space6,space7,space8,
    space9];
}

function Board(){
  this.board = [[], [], [], [], [], [], [], [], []];
}

function player2Turn(){

}
// Board.prototype.checkBoard(row){
//   row.
// }
function Check(possiblity){
  if (possiblity[0] === null || possiblity[1] === null || possiblity[2] === null){
    return true;
  }else{
    return false;
  }
}

function CheckSpace(spaces){
  spaces.map(function(space) {
    var index = 0;
    var nullSpace = [];
    var addCountofX = 0;
    if(space != null){
       addCountofX += space;
    }else{
      nullSpace.push(spaces[index]);
    }
    index++;
  });
  if(addCountofX == 2){
    return nullSpace[0];
  }else {
    firstNull(spaces);
  }
}

function firstNull(array){
  var index = 0;
  console.log(index);
  for(index; index = 1;index++){
    console.log("found for");
    if (array[index] === null){
      console.log("foundNull");
      console.log(index);
      return index;

    }
  }
}


// User interface
$(document).ready(function(){
  var Player1 = new Player("Player1", "X");
  var Player2 = new Player("System", "O");
  $('button').click(function() {
    $(this).toggleClass('active');
  });
  $("ul li ").click(function(){
    var userInput = this.title;
    $(this).css("background","#ccc");
    Player1.spaceMarked[userInput] = X;
    $('button').trigger("click");

    setTimeout(function(){
      player2Turn();
    }, 3000);
  });
});
