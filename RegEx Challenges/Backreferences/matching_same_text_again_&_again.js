(function(undefined){
    const reg_expr = /^([a-z]{1})(\w{1})(\s{1})(\W{1})(\d{1})(\D{1})([A-Z]{1})([a-zA-Z]{1})([aeiou]{1})(\S{1})\1\2\3\4\5\6\7\8\9\10$/g;
    
    const formElements = document.forms[0].elements;
    const input = formElements.matchInput,
    submit = formElements.submit,
    result = document.getElementById('matching_same_text_again').getElementsByClassName('result')[0];
    
    RegEx_helpers.validate(reg_expr, input, submit, result);
})()