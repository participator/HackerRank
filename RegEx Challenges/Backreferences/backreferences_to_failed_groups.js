(function(undefined){
    const reg_expr = /^\d{8}$|^\d{2}-\d{2}-\d{2}-\d{2}$/g;
    
    const formElements = document.forms[1].elements;
    const input = formElements.matchInput,
    submit = formElements.submit,
    result = document.getElementById('backreferences_to_failed_groups').getElementsByClassName('result')[0];
    
    RegEx_helpers.validate(reg_expr, input, submit, result);
})()