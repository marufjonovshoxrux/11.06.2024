const btns = document.querySelectorAll('[data-modal]')
const modal = document.querySelector('.modal')
const close = document.querySelector('[data-close]')

btns.forEach(btn => {
        btn.onclick = () => {
                modal.classList.add('show')
        }
});
close.onclick = () => {
        modal.classList.remove('show')
}



const slides = document.querySelectorAll('.offer__slide')
const prev = document.querySelector('.offer__slider-prev')
const next = document.querySelector('.offer__slider-next')
const current = document.querySelector('#current')
let total = document.querySelector('#total')
let slideIndex = 0




function slidesShow(n) {
        if (n > slides.length - 1 ) {
                slideIndex = 0
                
        }

        if (n < 0) {
                slideIndex = slides.length - 1
        }

        slides.forEach((slide) => {
                slide.classList.add('hide')
        })
        slides[slideIndex].classList.remove('hide')

        
}

slidesShow()

next.onclick = () => {
        slideIndex++
        current.innerHTML = '0' + slideIndex 
        slidesShow(slideIndex)
        
}

prev.onclick = () => {
        slideIndex--
        current.innerHTML = slideIndex 
        slidesShow(slideIndex)
       
        
        
}


const tabcontents = document.getElementsByClassName('tabcontent')

const vegy = document.querySelector('#vegy')

const fitnes = document.querySelector('#fitnes')
const premium = document.querySelector('#premium')
const postnoe = document.querySelector('#postnoe')
const balans = document.querySelector('#balans')

const tabcontent__descr = document.querySelector('.tabcontent__descr')



fitnes.onclick = () => {
        balans.classList.add('font2')
        fitnes.classList.add('font')
        vegy.src = 'img/tabs/vegy.jpg'
        tabcontent__descr.innerHTML = "Меню “Фитнес”  - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Для людей, которые интересуются спортом; активных и здоровых. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!"
}
premium.onclick = () => {
        premium.classList.add('font')
        fitnes.classList.add('font2')
        vegy.src = 'img/tabs/elite.jpg'
        tabcontent__descr.innerHTML = 'Меню “Премиум” - мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!';
        
}

postnoe.onclick = () => {
        premium.classList.add('font2')
        postnoe.classList.add('font')
        vegy.src = 'img/tabs/post.jpg'
        tabcontent__descr.innerHTML = 'Наше специальное “Постное меню” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения.Полная гармония с собой и природой в каждом элементе! Все будет Ом!'
}

balans.onclick = () => {
        postnoe.classList.add('font2')
        balans.classList.add('font')
        vegy.src = 'img/tabs/vegy.jpg'
        tabcontent__descr.innerHTML = 'Меню "Сбалансированное" - это соответствие вашего рациона всем научным рекомендациям. Мы тщательно просчитываем вашу потребность в к / б / ж / у и создаем лучшие блюда для вас.'
}






function tabcontent(m) {
        
        


        tabcontents.forEach((tabcontent) => {
                tabcontent.classList.add('hide')
                tabcontent[slideIndex].classList.remove('hide')
        })
}

tabcontent()



