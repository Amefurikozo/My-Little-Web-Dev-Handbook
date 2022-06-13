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

linkSection = document.querySelectorAll('.ls').forEach(item => {
    item.addEventListener('click', event => {
        if(event.target.querySelector('ul').style.display == '' || event.target.querySelector('ul').style.display == 'none'){
            event.target.querySelector('ul').style.display = 'block'
            event.target.querySelector('i').classList.remove('fa-circle-plus')
            event.target.querySelector('i').classList.add('fa-circle-minus')
        } else {
            event.target.querySelector('ul').style.display = 'none'
            event.target.querySelector('i').classList.remove('fa-circle-minus')
            event.target.querySelector('i').classList.add('fa-circle-plus')
        }
    })
})