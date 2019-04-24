(function(undefined) {

    window.RegEx_helpers = {};
    const exports = {};
    RegEx_helpers = exports;
    
    /**
     * Validate the string in the input against the regular expression
     * reg_ex {string|RegExp} - regular expression to test against
     * inputElement {HTMLINPUTElement} - element to get string to test
     * submitElement {HTMLButtonElement|HTMLInputElement} - element to add click listener to
     * resultElement {HTMLElement} - element to display result in
     */
    exports.validate = function(reg_expr, inputElement, submitElement, resultElement) {
        submitElement.addEventListener('click', event => {
            event.preventDefault();
    
            resultElement.innerText = reg_expr.test(inputElement.value) ? 'Match' : 'Does not Match';
        })
    }
})();