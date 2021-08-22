console.log("mmmm")
function rem() {
    var foo = document.querySelectorAll('[aria-label="See who reacted to this"]');
for (let i = 0; i < foo.length; i++) {
    foo[i].style.visibility = "hidden";
}};
rem();
// var set = setInterval(rem, 1000)

function rem2() {
    var foo = document.querySelectorAll('[aria-label*="see who reacted to this"]');
for (let i = 0; i < foo.length; i++) {
    foo[i].style.visibility = "hidden";
}};
rem2();
// var set2 = setInterval(rem2, 1000)




var scrollThings = function () {
    window.addEventListener("scroll", event => {
      rem();
      rem2();
    });
  }();




// set interval approach

// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//         if (request.greeting === "off"){
//             console.log(request.greeting);
//         clearInterval(set);
//         clearInterval(set2)};
//         console.log("titititiigigljkgilelee");
//         return true
// });

// function injectie(request, sender, sendResponse) {
//     if (request.greeting === "off"){
//         console.log(request.greeting);
//     clearInterval(set);
//     clearInterval(set2)};
//     // location.reload();
//     console.log("cleared inj interval");
//     return true
// };

// chrome.runtime.onMessage.addListener(injectie)