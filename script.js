// var tooltip = document.querySelector('#btn')
// var txtArea = document.querySelector('#ap-text')
// btn = document.querySelector('button')

// function showText() {
//     if(txtArea.classList.contains('remove')){
//         txtArea.classList.add('active')
//         txtArea.classList.remove('remove')
//     } else {
//         txtArea.classList.add('remove')
//         txtArea.classList.remove('active')
//     }
// }

listButtons = document.querySelectorAll('.ls button').forEach(item => {
    item.onclick = ( event =>{
        if(event.target.querySelector('i').classList.contains('bi-plus-circle-fill')){
            event.target.querySelector('i').classList.remove('bi-plus-circle-fill')
            event.target.querySelector('i').classList.add('bi-dash-circle-fill')
            event.target.parentNode.querySelector('ul').style.display = 'block'
        } else {
            event.target.querySelector('i').classList.remove('bi-dash-circle-fill')
            event.target.querySelector('i').classList.add('bi-plus-circle-fill')
            event.target.parentNode.querySelector('ul').style.display = 'none'
        }
    })
})


function showSubMenu(){
    if(document.querySelector('#submenu').classList.contains('clicked')){
        document.querySelector('#submenu').classList.remove('clicked')
        document.querySelector('#menu ul').classList.remove('show-menu')
        document.querySelector('#submenu i').classList.remove('color')
    } else {
        document.querySelector('#submenu').classList.add('clicked')
        document.querySelector('#menu ul').classList.add('show-menu')
        document.querySelector('#submenu i').classList.add('color')
    }
}

function tooltips(){
	let tooltips = document.querySelectorAll('.tt')

	tooltips.forEach( t => {
		new bootstrap.Tooltip(t)
	})
}

tooltips()