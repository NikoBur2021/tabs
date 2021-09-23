const tabs = document.querySelector('.tabs')
const boxContent = document.querySelector('.box-content')
boxContent.children[0].classList.add('show')
let index = 0

tabs.onclick = (event) => {
    const parentsItem = event.target.closest('.tab')
    if (parentsItem !== null) {
        tabs.children[index].classList.remove('active')
        boxContent.children[index].classList.remove('show')
        index = parentsItem.dataset.index
        boxContent.children[index].classList.add('show')
        tabs.children[index].classList.add('active')
    }
}