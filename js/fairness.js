// $("#printBtn").on("click", function(){
//   window.print();
// });
// $('#navIcon').on('click', function() {
//   $('#links').toggleClass('active');
// });
//
// $('a.button-yes').on('click',function(){
//   $('a.button-yes').css('display','none');
//   $('a.button-no').css('display','none');
//   $('.hidden').css('display','block');
//   $('a.button-next').css('display','inline');
// });
//
// $('a.button-no').on('click',function(){
//   $('a.button-no').css('display','none');
//   $('a.button-yes').css('display','none');
//   $('.hidden-no').css('display','block');
//   $('a.button-next').css('display','inline');
// });
//
//
// $(".fair-ness").on("keyup", processInput);
// $("input").on("keyup", processInput);
//
// var allTextAreas = $(".fair-ness");
// var allInputs = $("input");
//
// function textAreaMemory() {
//   Object.keys(allTextAreas).forEach(function(t) {
//     Object.keys(localStorage).forEach(function(ls) {
//       var textArea = allTextAreas[t].name;
//       if(textArea == ls) {  $(`textarea[name=${textArea}]`).html(localStorage[textArea])
//       }
//     })
//   })
// }
// textAreaMemory()
//
// function processInput() {
//   var inputName = this.name;
//   var userInput = this.value;
//   localStorage.setItem(inputName, userInput);
// }
//
// var allInputs = $("input");
//
// $("input").on("keyup", processInput);
//
// console.log(allInputs);
//
// function inputMemory() {
//   Object.keys(allInputs).forEach(function(i) {
//     Object.keys(localStorage).forEach(function(ls) {
//       var inputField = allInputs[i].name;
//       if(inputField == ls) {
//         $(`input[name=${inputField}]`).val(localStorage[inputField]);
//       }
//     })
//   })
// }
//
// inputMemory();
//
// function processInput() {
//   var inputName = this.name;
//   var userInput = this.value;
//   localStorage.setItem(inputName, userInput);
// }
