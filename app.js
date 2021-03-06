const item = document.querySelector('.item')
// запрос к классу:
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart) // первое событие 
item.addEventListener('dragend', dragend) // второе событие

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop) // отпустили
}

function dragstart(event) {
    // console.log('drag start', event.target) // отслеживаем в консоли
    event.target.classList.add('hold') // класс hold в css
    setTimeout( () => event.target.classList.add('hide'), 0 ) // продвинутая функция
}

function dragend(event) {
    // console.log('drag end') // отслеживаем в консоли
    event.target.className = 'item' // на выбор
    // event.target.classList.remove('hold', 'hide') //удалить класс
}
/////////////////////////////////////////////////////////////////////////
function dragover(event) {
    event.preventDefault()
    // console.log('drag over') // отслеживаем в консоли
}

function dragenter(event) {
    event.target.classList.add('hovered') // наведенный
    // console.log('drag enter') // отслеживаем в консоли
}

function dragleave(event) {
    event.target.classList.remove('hovered') //удалить
    // console.log('drag leave') // отслеживаем в консоли
}

function dragdrop(event) {
    event.target.classList.remove('hovered')
    event.target.append(item)
    // console.log('drag drop') // отслеживаем в консоли
}













