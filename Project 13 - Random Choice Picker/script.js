const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)
})

function createTags(input){
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    console.log(tags);
    tagsEl.innerHTML = ''

    tags.forEach(tag=> {
        const tagsEl = document.createElement('span')
        tagsEl.classList.add('tag')
        tagsEl.innerText = tag
        tagsEl.appendChild(tagsEl)
    });
}