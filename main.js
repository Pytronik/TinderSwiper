chrome.storage.local.get(['key'], function(result) {
    document.getElementById("switchtinder").checked=  result.key
  });

document.getElementById("switchtinder").onchange = function() {
   
    chrome.storage.local.set({key: document.getElementById("switchtinder").checked}, function() {   
      });
}


if (document.getElementById("switchtinder").checked == true) {
    //do something
}