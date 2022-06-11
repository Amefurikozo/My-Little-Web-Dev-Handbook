var tooltip = document.querySelector('#btn')
var txtArea = document.querySelector('#ap-text')
btn = document.querySelector('button')

function showText() {
    if(txtArea.classList.contains('remove')){
        txtArea.classList.add('active')
        txtArea.classList.remove('remove')
    } else {
        txtArea.classList.add('remove')
        txtArea.classList.remove('active')
    }
}