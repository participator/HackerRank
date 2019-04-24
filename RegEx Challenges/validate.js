(function(undefined) {

    window.RegEx_helpers = {};
    const exports = {};
    RegEx_helpers = exports;

    const input = document.forms[0].elements.matchInput;
    const submit = document.querySelector('button[type="submit"]');
    const result = document.getElementById('result');
    
    exports.validate = function(reg_expr) {
        submit.addEventListener('click', event => {
            event.preventDefault();
    
            result.innerText = reg_expr.test(input.value) ? 'Match' : 'Does not Match';
        })
    }
})();