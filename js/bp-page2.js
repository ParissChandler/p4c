// $(document).ready(function(){
//   $('#yesBtn').on('click', function(e){
//     e.preventDefault();
//     $('#questionTwo').css('display','block');
//     $('#form').css('display','block');
//     $('#questionThree').css('display','block');
//     $('#yesBtnTwo').css('display','inline-block');
//     $('#noBtnTwo').css('display','inline-block');
// });
// });
//
// $('#noBtn').on('click', function(){
//   $('#questionThree').css('display','block');
//   $('#yesBtnTwo').css('display','inline-block');
//   $('#noBtnTwo').css('display','inline-block');
// });
//
// $(document).ready(function(){
//   $('#yesBtnTwo').on('click', function(e){
//     e.preventDefault();
//     $('#questionFour').css('display','block');
//     $('#formTwo').css('display','block');
//     $('a.button-next').css('display','inline-block');
// });
// });
//
// $('#noBtnTwo').on('click', function(){
//   $('#nextBtn').css('display','block');
// });
//
//
// $('#navIcon').on('click', function() {
//   $('#links').toggleClass('active');
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
