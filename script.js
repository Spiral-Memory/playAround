const socket = io('https://zishuchatserver.herokuapp.com/')
const messageForm = document.getElementById('send-container');
const messageInput = document.getElementById('message-input');
const submitElement = document.getElementById('sendButton');
const mainBody = document.getElementById('chatBody');
const submitName = document.getElementById('nameSubmit');
const myname = prompt("What's your Name");
messageInput.focus();
let month_in_str;
let year;
let datetoday;
let hours;
let minutes;
let keysPressed = {};
appendMessageS(`Hey, I joined`, `${myname}`);
socket.emit('send-username', myname);

socket.on('chat-message', data => {
    appendMessageR(`${data.datamessage}`, `${data.name1}`);
    window.scrollTo(0, document.body.scrollHeight);
})

socket.on('user-connected', name => {
    appendMessageR("Hey, I joined", name);
   
})


// socket.on('user-disconnected', name => {
//     appendMessageR("B Bye! 👋 ", name);
//     window.scrollTo(0, document.body.scrollHeight);
// })
messageInput.addEventListener('keydown',e=>{
    console.log(e);
    keysPressed[e.key] = true;
    if (keysPressed['Control'] && e.keyCode === 13) {
      msgsend();
    }
})

document.addEventListener('keyup',e=>{
    delete keysPressed[e.key];
})

messageForm.addEventListener('submit', e => {
    e.preventDefault();
    msgsend();
  
})

submitElement.addEventListener('click', function () {
   msgsend();
    
})

function appendMessageR(req_info, nameinfo) {
    timendate();
    let rec_element = document.createElement('div');
    rec_element.className = "received-chats";
    let user_profile = document.createElement('div');
    user_profile.className = "received-chat-profile";
    let pic = document.createElement('img');
    pic.src = `https://avatars.dicebear.com/api/jdenticon/${nameinfo}.svg`;
    let nameElement = document.createElement('span');
    nameElement.className = "name-other";
    nameElement.innerText = `${nameinfo}`;
    user_profile.append(nameElement);
    let timeElement = document.createElement('span');
    timeElement.className = "time-other";
    timeElement.innerText = `    ${hours}:${minutes} | ${month_in_str} ${datetoday}`;
    user_profile.append(timeElement);
    user_profile.append(pic);
    rec_element.append(user_profile);
    let rec_msg = document.createElement('div');
    rec_msg.className = "received-msg";
    rec_element.append(rec_msg);
    let paragraph = document.createElement('p');
    paragraph.innerText = req_info;
    rec_msg.append(paragraph);
    mainBody.append(rec_element);
}

function appendMessageS(req_info, nameinfo) {
    timendate();
    let rec_element = document.createElement('div');
    rec_element.className = "outgoing-chats";
    let user_profile = document.createElement('div');
    user_profile.className = "outgoing-chat-profile";
    let pic = document.createElement('img');
    pic.src = `https://avatars.dicebear.com/api/jdenticon/${nameinfo}.svg`;
    let nameElement = document.createElement('span');
    nameElement.className = "name-me";
    nameElement.innerText = `You`;
    user_profile.append(nameElement);
    user_profile.append(pic);
    rec_element.append(user_profile);
    let rec_msg = document.createElement('div');
    rec_msg.className = "outgoing-msg";
    rec_element.append(rec_msg);
    let paragraph = document.createElement('p');
    paragraph.innerText = req_info;
    rec_msg.append(paragraph);
    let timeElement = document.createElement('span');
    timeElement.className = "time-me";
    timeElement.innerText = `    ${hours}:${minutes} | ${month_in_str} ${datetoday}`;
    rec_msg.append(timeElement);
    mainBody.append(rec_element);
}


function msgsend(){
    if(messageInput.value != ''){
        const message = messageInput.value;
        socket.emit('send-chat-message', {message:message,nameofme:myname}) ;
        appendMessageS(message, `${myname}`);
        window.scrollTo(0, document.body.scrollHeight);
        messageInput.focus();
        messageInput.value = '';
        }
}

function timendate() {
    var d = new Date();
    minutes = d.getMinutes();
    year = d.getFullYear();
    datetoday = d.getDate();
    hours = d.getHours();
    const month = d.getMonth() + 1;


    switch (month) {
        case 1: month_in_str = "Jan";
            break;
        case 2: month_in_str = "Feb";
            break;
        case 3: month_in_str = "March";
            break;
        case 4: month_in_str = "Apr";
            break;
        case 5: month_in_str = "May";
            break;
        case 6: month_in_str = "June";
            break;
        case 7: month_in_str = "July";
            break;
        case 8: month_in_str = "Aug";
            break;
        case 9: month_in_str = "Sept";
            break;
        case 10: month_in_str = "Oct";
            break;
        case 11: month_in_str = "Nov";
            break;
        case 12: month_in_str = "Dec";
            break;


    }

}
