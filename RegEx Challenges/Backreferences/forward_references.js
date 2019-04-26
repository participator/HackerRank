(function(undefined){
    
    const formElements = document.forms[3].elements;
    const input = formElements.matchInput,
    submit = formElements.submit,
    result = document.getElementById('forward_references').getElementsByClassName('result')[0];
    
    try {
        const reg_expr = /^(Sally \2 Gomez|('Top Notch'))$/;
        throw new Error('Invalid Regular Expression')
        // JS equivalent
        // const reg_expr = /^(?:\d{2}){1}((-|---|:|\.)?)(?:\d{2}){1}\2(?:\d{2}){1}\2(?:\d{2}){1}$/;
        
        RegEx_helpers.validate(reg_expr, input, submit, result);
    }
    catch (error) {
        submit.addEventListener('click', event => {
            event.preventDefault();
            result.innerText = error.message;
            result.innerText += '\nForward References (?|...) are Unavailable in JavaScript.';
            result.innerHTML += '<br>See <a href="https://www.regular-expressions.info/backref2.html#forward">Forward References Paragraph</a> for more information.';
        });
    }
})()