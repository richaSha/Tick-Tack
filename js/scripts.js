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

// Board.prototype.checkBoard(row){
//   row.
// }


// User interface
$(document).ready(function(){
  var Player1 = new Player("Player1", "X");
  $('button').click(function() {
    $(this).toggleClass('active');
  });
  $("ul li ").click(function(){
    var userInput = this.title;
    $(this).css("background","#ccc");
    Player1.spaceMarked[userInput] = X;
    $('button').trigger("click");
  });
});
