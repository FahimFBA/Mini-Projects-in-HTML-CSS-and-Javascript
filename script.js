const boxes = document.querySelectorAll('.box')
window.addEventListener('scroll', checkBoxes)

// checkBoxes() // Remove it if you don't want any content first

function checkBoxes() {
	const triggerBottom = window.innerHeight / 5 * 4
	boxes.forEach(box =>{
		const boxTop = box.getBoundingClientRect().top


		if (boxTop < triggerBottom)
		{
			box.classList.add('show')
		}
		else
		{
			box.classList.remove('show')
		}
	})
}