import {
    animate
} from './helpers.js';

const sendForm = (form
        
    /* {
    formId,
    someElem = []
} */

) => {
    const sendButton = form.querySelector('button')

    const inputName = form.querySelector('[name="fio"]')
    const inputPhone = form.querySelector('[name="phone"]')
    
    
    const statusBlock = document.createElement('div');
    const loadText = 'Загрузка...';
    const errorText = 'Ошибка...';
    const successText = 'Спасибо! Наш менеджер с Вами свяжется!';



    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'aplicition/json'
                }
            })
            .then(res => res.json());
    };

    const checkData = () => {

        /* const inputName = form.querySelector('[placeholder="Ваше имя"]');
        const inputPhone = form.querySelector('[type=tel]');
        const inputEmail = form.querySelector('[type=email]'); */
        let isError = false;

        const addErrorMess = (act, input, mess) => {
            input.style.border = 'none';
            const pErrror = input.nextElementSibling;
            if (pErrror) pErrror.remove();
            if (act) {
                const errorMess = document.createElement('p');
                errorMess.textContent = mess;
                errorMess.style.cssText = ` font-size: 12px;
                                            color: red;
                                            transform: ${getComputedStyle(input).transform}`;
                input.style.border = '1px solid red';
                input.insertAdjacentElement("afterend", errorMess);
            }
        };

        if (!(!/[^а-яa-z^ ^-]+/i.test(inputName.value) && inputName.value !== "")) {
            addErrorMess(true, inputName, 'Введите Ваше имя');
            isError = true;
        } else {
            addErrorMess(false, inputName);
        }

        if (!(/^[\d\+][\d\(\)\ -]{4,16}\d$/.test(inputPhone.value) && inputPhone.value !== "")) {
            addErrorMess(true, inputPhone, 'Номер введен некорректно!');
            isError = true;
        } else {
            addErrorMess(false, inputPhone);
        }
        console.log(/^[\d\+][\d\(\)\ -]{4,14}\d$/.test(inputPhone.value))
        return isError;
    };



    const submitForm = () => {        
        const userData = {}
        userData.name = inputName.value
        userData.phone = inputPhone.value


        if (!checkData()) {
            sendData(userData)
        } 
    }

        

    sendButton.addEventListener('click', (e) => {
        e.preventDefault()
        submitForm()
    })


    inputPhone.addEventListener('input', () => {

    })




    /* const form = document.getElementById(formId);
    const formMess = document.querySelector('.mess');

    

    

    const checkData = (form) => {

        const inputName = form.querySelector('[placeholder="Ваше имя"]');
        const inputPhone = form.querySelector('[type=tel]');
        const inputEmail = form.querySelector('[type=email]');
        let isError = false;

        const addErrorMess = (act, input, mess) => {
            input.style.border = 'none';
            const pErrror = input.nextElementSibling;
            if (pErrror) pErrror.remove();
            if (act) {
                const errorMess = document.createElement('p');
                errorMess.textContent = mess;
                errorMess.style.cssText = ` font-size: 12px;
                                            color: red;
                                            transform: ${getComputedStyle(input).transform}`;
                input.style.border = '1px solid red';
                input.insertAdjacentElement("afterend", errorMess);
            }
        };

        if (!(!/[^а-я^ ^-]+/i.test(inputName.value) && inputName.value !== "")) {
            addErrorMess(true, inputName, 'Введите Ваше имя');
            isError = true;
        } else {
            addErrorMess(false, inputName);
        }

        if (!/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(inputEmail.value)) {
            addErrorMess(true, inputEmail, 'email введен не корректно!');
            isError = true;
        } else {
            addErrorMess(false, inputEmail);
        }

        if (!(!/[^\d^\()^-]/.test(inputPhone.value) && inputPhone.value !== "")) {
            addErrorMess(true, inputPhone, 'Недопустимые символы');
            isError = true;
        } else {
            addErrorMess(false, inputPhone);
        }

        return isError;
    };



    const submitForm = () => {
        const formElements = form.querySelectorAll('input');
        const formData = new FormData(form);
        const formBody = {};

        statusBlock.textContent = loadText;
        statusBlock.style.color = 'white'
        form.append(statusBlock);


        formData.forEach((val, key) => {
            formBody[key] = val;
        });
        someElem.forEach((elem) => {
            const element = document.getElementById(elem.id);

            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent;
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value;
            }
        });

        if (!checkData(form)) {
            sendData(formBody)
                .then(data => {
                    statusBlock.textContent = successText;
                    formElements.forEach((input) => {
                        input.value = '';
                    })
                    setTimeout(() => {
                        statusBlock.textContent = '';
                        if (form.id === 'form3') {
                            const modal = document.querySelector('.popup');
                            animate({
                                duration: 500,
                                timing(timeFraction) {
                                    return timeFraction;
                                },
                                draw(progress) {
                                    modal.style.opacity = 1 - progress;
                                }
                            });
                            setTimeout(() => {
                                modal.style.display = 'none';
                            }, 500);
                        }
                    }, 3000);
                })
                .catch(error => {
                    statusBlock.textContent = errorText;
                })

        } else {
            console.log('error!!!');
        }
    };

    formMess.addEventListener('input', () => {
        formMess.value = formMess.value.replace(/[^а-я0-9 -=/,:;\()?+.]+/gi, "");
    });

    try {
        if (!form) {
            throw new Error('Верните форму на место!');
        }
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            submitForm();
        });
    } catch (error) {
        console.log(error.message);
    } */


    
};

export default sendForm;