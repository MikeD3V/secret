document.getElementById('result')
document.getElementById('correct')
document.getElementById('wrong1')
document.getElementById('wrong2')
document.getElementById('wrong3')
const audio = new Audio('music/lafuey.mp3');
const nuh = new Audio('music/wrong.mp3');


correct.onclick = function(){
    result.textContent = 'That is correct'
    result.style.color = 'green';
    audio.play();
    nuh.pause();
    nuh.currentTime = 0;
}

wrong1.onclick = function(){
    result.textContent = 'That is wrong'
    result.style.color = 'red';
    nuh.play();
    audio.pause();
    audio.currentTime = 0;
}
wrong2.onclick = function(){
    result.textContent = 'That is wrong'
    result.style.color = 'red';
    nuh.play();
    audio.pasue();
    audio.currentTime = 0;
}
wrong3.onclick = function(){
    result.textContent = 'That is wrong'
    result.style.color = 'red';
    nuh.play();
    audio.pause();
    audio.currentTime = 0;
}