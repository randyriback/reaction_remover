var checkbox = document.getElementById('checkbox1');
function run() {
  chrome.storage.sync.get('checked', function (result) {
    console.log('Value currently is ' + result.checked);
    document.getElementById('checkbox').checked = result.checked;
    if (document.getElementById('checkbox').checked === true){
      console.log('1')
      chrome.tabs.executeScript({
        file: 'js/inject.js'
      });
    } else{
      console.log('2')
      chrome.tabs.executeScript({
        file: 'js/normalize.js'
      });
    }
  });
};
run()

checkbox.addEventListener('change', (e) => {
    if (e.target.checked === true ) {
      chrome.storage.sync.set({ checked: e.target.checked }, function () {
        console.log('Value is set two ' + e.target.checked);
      });
    //   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    //     chrome.tabs.sendMessage(tabs[0].id, {greeting: "on"});
    //   chrome.tabs.onUpdated.removeListener(onUpdated);
    //   resolve(true)
    // }); 
      chrome.tabs.executeScript({
        file: 'js/inject.js'
      });
    } else {
      chrome.storage.sync.set({ checked: e.target.checked }, function () {
        console.log('Value is set two ' + e.target.checked);
      });
      // chrome.tabs.query({active: true}, function(tabs) {
      //   chrome.tabs.sendMessage(tabs[0].id, {greeting: "off"});       
      //   chrome.tabs.onUpdated.removeListener(onUpdated);
      //   resolve(true)
      // });
      chrome.tabs.executeScript({
        file: 'js/normalize.js'
      });
    }

  });


chrome.tabs.onUpdated.addListener(run)


