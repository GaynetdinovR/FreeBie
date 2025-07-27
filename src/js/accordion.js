const accordionBtns = document.querySelectorAll('#asked-questions__btn');

for(let btn of accordionBtns){

    btn.addEventListener('click', () => {
        let item = btn.parentNode.querySelector('#asked-questions__item');

        if(item.classList.contains('flex')){

            item.classList.add('none');
            item.classList.remove('flex');
            btn.classList.remove('button--down-arrow-active')
            return;
        }
        item.classList.remove('none');
        item.classList.add('flex');
        btn.classList.add('button--down-arrow-active')

    })

}