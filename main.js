$(document).ready(init());
var balance = 1000.00;
var amount = 0.00;
var colorMoney;
var comment;
var name;

function init() {
  $('#sendBTN').on("click", sendBTN);
  $("#drawBTN").on('click', drawBTN);

}


function getData() {
  // var cents = $('#cents').val();
  // console.log('cents:', cents)
}


function sendBTN(){
  amount = $('#amount').val();
  amount = (+amount).toFixed([2])
  console.log('Amount:', amount);
  balance = (Number(balance) + Number(amount)).toFixed([2]);
  colorMoney = 'green';
  sendData();
}

function drawBTN(){

  amount = $('#amount').val();
  amount = (-amount).toFixed([2])
  console.log('Amount:', amount);
  balance = (Number(balance) + Number(amount)).toFixed([2]);
  colorMoney = 'red';
  sendData();
}




function sendData(){

  event.preventDefault();

  name = $("#name").val();
  console.log("Name:", name);
  comment = $('#comment').val();
  console.log('Comment:', comment);
  colorMoney = 'red';
  var date = moment().format('MMMM Do YYYY');
  var $row = $('.template').clone();
  $row.removeClass('template');
  // $row.attr('.amount').style.color = colorMoney;
  $row.children('.name').text(name);
  $row.children('.comment').text(comment);
  $row.children('.balance').text("$" + balance);
  $row.children('.date').text(date);
  $row.children('.amount').text("$" + amount );
  $(".tableBody").prepend($row);

}
