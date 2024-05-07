import {
    animate
} from './helpers.js';

const calc = (price = 1000) => {

    const calcBlock = document.getElementById('calc');
    const calcType = calcBlock.querySelector('#calc-type');
    const calcTypeMaterial = calcBlock.querySelector('#calc-type-material');   
    const calcSquare = calcBlock.querySelector('#calc-input');
    const total = calcBlock.querySelector('#calc-total');


    const enterOnlyNumbers = (input) => {
        input.value = input.value.replace(/\D/, "");
    };
  
    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        const calcTypeMaterialValue = +calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value;
        const calcSquareValue = calcSquare.value;

        let totalValue = 0;         
        
        if (calcTypeValue > 0 && calcTypeMaterialValue > 0 && calcSquareValue){
            totalValue = calcTypeValue*calcTypeMaterialValue*calcSquareValue*price;
            if (total.value == 'Итого') total.value = 0;
            animate({
                duration: 500,
                timing(timeFraction) {
                    return Math.pow(timeFraction, 2);
                },
                draw(progress) {
                    total.value = Math.ceil(+ total.value +
                        (+totalValue - +total.value) * progress);
    
                }
            });            

        } else {
            total.value = 'Итого'
        }
    }

    calcBlock.addEventListener('input', (e) => {
        if (e.target === calcSquare) {
            e.preventDefault();
            enterOnlyNumbers(e.target);
        }
        if (e.target === calcType || e.target === calcSquare ||
            e.target === calcTypeMaterial) {
            countCalc();
        }
    }); 
};

export default calc;