var audioKick = document.getElementById('audio-kick')
var buttonKick = document.getElementById('button-kick')
buttonKick.addEventListener('click', function () {
  audioKick.play()
})

var audioClap = document.getElementById('audio-clap')
var buttonClap = document.getElementById('button-clap')
  buttonClap.addEventListener('click', function () {
  audioClap.play()
})

var audioBoom = document.getElementById('audio-boom')
var buttonBoom = document.getElementById('button-boom')
buttonBoom.addEventListener('click', function () {
  audioBoom.play()
})
