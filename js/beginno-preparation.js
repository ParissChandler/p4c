// $("#printBtn").on("click", function(){
//   window.print();
// });
// $('#navIcon').on('click', function() {
//   $('#links').toggleClass('active');
// });
// $(".type-in").on("keyup", processInput);
// $("input").on("keyup", processInput);
//
// var allTextAreas = $(".type-in");
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
