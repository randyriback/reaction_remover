console.log("nnnnn")
function nor() {
    var foo = document.querySelectorAll('[aria-label="See who reacted to this"]');
for (let i = 0; i < foo.length; i++) {
    foo[i].style.visibility = "visible";
}};
nor();
// var sat = setInterval(nor, 1000)

function nor2() {
    var foo = document.querySelectorAll('[aria-label*="see who reacted to this"]');
for (let i = 0; i < foo.length; i++) {
    foo[i].style.visibility = "visible";
}};
nor2();
// var sat2 = setInterval(nor2, 1000)


var scrollThings = function () {
    window.addEventListener("scroll", event => {
      nor();
      nor2();
    });
  }();




// set interval fail !

// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//         if (request.greeting === "on"){
//             console.log(request.greeting);
//         clearInterval(sat);
//         clearInterval(sat2)};
//         console.log("gigigljkgilelee");
//         return true
// });

// function normie(request, sender, sendResponse) {
//     if (request.greeting === "on"){
//         console.log(request.greeting);
//     clearInterval(sat);
//     clearInterval(sat2)};
//     // window.stop();
//     // location.reload();
//     console.log("cleared norm interval");
//     return true
// };

// chrome.runtime.onMessage.addListener(normie)