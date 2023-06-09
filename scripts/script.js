document.addEventListener('DOMContentLoaded', () => {
  

//Кнопка лайка
    const btnLike = document.querySelector('.daily__box-fav-button');
    const outputLike = document.querySelector('.daily__box_fav_text');
  
    if (btnLike && outputLike) {
      const handleClickLike = () => {
        let countLike = Number(outputLike.textContent);
        if (btnLike.classList.contains('isLike')) {
          outputLike.textContent = countLike - 1;
        } else {
          outputLike.textContent = countLike + 1;
        }
  
        btnLike.classList.toggle('isLike');
      }
  
      btnLike.addEventListener('click', handleClickLike);
    }
  
  })