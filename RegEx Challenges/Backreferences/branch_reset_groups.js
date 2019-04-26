(function(undefined){
    
    const formElements = document.forms[2].elements;
    const input = formElements.matchInput,
    submit = formElements.submit,
    result = document.getElementById('branch_reset_groups').getElementsByClassName('result')[0];
    
    try {
        const reg_expr = /(?|(\d{2}))/;
        // JS equivalent
        // const reg_expr = /^(?:\d{2}){1}((-|---|:|\.)?)(?:\d{2}){1}\2(?:\d{2}){1}\2(?:\d{2}){1}$/;
        
        RegEx_helpers.validate(reg_expr, input, submit, result);
    }
    catch (error) {
        submit.addEventListener('click', event => {
            event.preventDefault();
            result.innerText = error.message;
            result.innerText += '\nBranch Reset Groups (?|...) are Unavailable in JavaScript.';
        });
    }
})()