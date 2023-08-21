let btn = document.querySelector('button');
        
function send(){
    let name = document.getElementById('email').value;
    let phone = document.getElementById('text').value;
  
    sendtelegram(name  + ' в сайте  ' + phone + '   написал ');   
    document.getElementById('email').value = '';
    document.getElementById('text').value = '';
};
function sendtelegram(message) { let telegram_bot_id = "6509898610:AAEtyzcgascobyv2e--ZM_lpqNdhBTqsDEs"; let chat_id = 5887303814; let settings = { "async": true, "crossDomain": true, "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage", "method": "POST", "headers": { "Content-Type": "application/json", "cache-control": "no-cache" }, "data": JSON.stringify({ "chat_id": chat_id, "text": message }) }; $.ajax(settings).done(function (response) { }); };