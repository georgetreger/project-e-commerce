      
      const faEl = document.querySelector('.fa-bars');
      const menuEl = document.querySelector('.menu-links');
      const closeEl = document.querySelector('.fa-close');

            if (faEl){
              faEl.addEventListener('click', ()=>{
                menuEl.classList.add('active')
              })
            }
            if (closeEl){
              closeEl.addEventListener('click', ()=>{
                menuEl.classList.remove('active')
              })
            }