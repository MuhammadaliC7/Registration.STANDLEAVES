let btn = document.querySelector('button');
        
function send(){
    let name = document.getElementById('email').value;
    let phone = document.getElementById('text').value;
  
    sendtelegram(name  + ' Saytda  ' + phone + '  Deb yozdi');
    document.getElementById('email').value = '';
    document.getElementById('text').value = '';
};
function sendtelegram(message) { let telegram_bot_id = "6537391165:AAFO2FXWFBKt9waUnf77b4d9TBc5gBWTKgg"; let chat_id = 6140878431; let settings = { "async": true, "crossDomain": true, "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage", "method": "POST", "headers": { "Content-Type": "application/json", "cache-control": "no-cache" }, "data": JSON.stringify({ "chat_id": chat_id, "text": message }) }; $.ajax(settings).done(function (response) { }); };