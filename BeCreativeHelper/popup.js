// let test = document.getElementById('test');

chrome.commands.onCommand.addListener(function(command){
    chrome.tabs.query({currentWindow: true}, function(tabs) {
        tabs.sort((a, b) => { return a.index < b.index; });
        let active = tabs.findIndex((tab) => { return tab.active})
        console.log(active)
        if (command === 'start-30-min'){
            var timer = new chrome.Interval();
                timer.start();
            console.log('30')
        }
    })
});

// test.onclick = function(ele) {
//     console.log("a")
//     let test = ele.target.value;
//     chrome.tabs.sendMessage({active: true, currentWindow: true}, function(tabs) {
//         chrome.tabs.executeScript(
//             tabs[0].id,
//             {code: 'document.body.h1.innerHTML' = "test" + test + "test"}
//         )
//     })
// }
