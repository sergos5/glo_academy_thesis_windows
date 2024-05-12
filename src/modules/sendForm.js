const sendForm = (form) => {
    const sendButton = form.querySelector('button')

    const inputName = form.querySelector('[name="fio"]')
    const inputPhone = form.querySelector('[name="phone"]')
    
    const loadText = 'Загрузка...';
    const errorText = 'Ошибка...';
    const successText = 'Заявка отправлена!';


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
        return isError;
    };

    const submitForm = () => {        
        const userData = {}
        userData.name = inputName.value
        userData.phone = inputPhone.value
        if (document.querySelector('#calc-total')) {
            userData.calc = document.querySelector('#calc-total').value
        }          

        if (!checkData()) {            
            sendButton.textContent = loadText
            sendData(userData)
            .then(data => {
                sendButton.textContent = successText
                inputName.value = ''
                inputPhone.value = ''
                setTimeout(()=> {
                    sendButton.textContent = 'ПОЛУЧИТЬ СКИДКУ!'
                }, 2000)
            })
            .catch(error => {
                sendButton.textContent = errorText
            })
        } 
    }

    sendButton.addEventListener('click', (e) => {
        e.preventDefault()
        submitForm()        
    })   
};

export default sendForm;