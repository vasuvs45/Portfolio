console.log('Its working')

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = static + '/default.css'
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = static + '/blue.css'
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = static + '/green.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = static + '/purple.css'
	}

	localStorage.setItem('theme', mode)
}

document.addEventListener('DOMContentLoaded', function () {
    const readMoreLinks = document.querySelectorAll('.read-more');

    readMoreLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default behavior of the anchor link
            const content = this.previousElementSibling;
            content.classList.toggle('collapsed');
            this.textContent = content.classList.contains('collapsed') ? 'Show More  >>' : '<<  Show Less';
        });
    });
});
