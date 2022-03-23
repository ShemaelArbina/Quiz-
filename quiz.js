const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');


function checkAnswer() {
    /*event.preventDefault();*/
    inputs = document.querySelectorAll("input[type=radio]:checked");
    let score = 0;
    for (let i = 0; i < inputs.length; i++) {
        
            if (inputs[i].value === "B") {
                score += 25;
            }

            
        }
    console.log(score);
    scrollTo(0, 0);
    result.querySelector('span').textContent =`${score}%`;
    result.classList.remove('d-none');
    }




    form.addEventListener('submit', e => {
        e.preventDefault();
        checkAnswer();
       

    })



