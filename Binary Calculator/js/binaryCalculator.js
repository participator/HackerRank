const res = document.getElementById('res');

class Button {
    constructor(id, text, actions) {
        this.id = id;
        this.text = text;
        ({show: this.show} = actions);
        ({clear: this.clear} = actions);
        ({equate: this.equate} = actions);
    }
    createElement() {
        this.btn = document.createElement('button');
        this.btn.id = this.id;
        this.btn.classList.add('btn');
        this.btn.innerText = this.text;
    }
    createActions() {        
        // Add show click event handler
        if (this.show) {
            this.btn.addEventListener('click', () => {
                res.append(this.text);
            });
        }
        // Add clear click event handler
        if (this.clear) {
            this.btn.addEventListener('click', () => {
                res.innerText = '';
            });
        }
        // Add equate click event handler
        if (this.equate) {
            const num_regex = /[01]+/g;
            const symbol_regex = /[+-\/*]{1}/g;

            this.btn.addEventListener('click', () => {
                if (/[01]+[\+-\/*]{1}[01]+/g.test(res.innerText)) {
                    const nums = res.innerText.match(num_regex);
                    const symbol = res.innerText.match(symbol_regex);

                    let numsBase10 = nums.filter(num => !!num).map(num => parseInt(num, 2));
                    
                    let result;

                    switch (symbol[0]) {
                        case '+':
                            result = numsBase10[0] + numsBase10[1];
                            break;
                        case '-':
                            result = numsBase10[0] - numsBase10[1];
                            break;
                        case '/':
                            result = numsBase10[0] / numsBase10[1];
                            break;
                        case '*':
                            result = numsBase10[0] * numsBase10[1];
                            break;
                    }

                    res.innerText = result.toString(2);
                }
            });
        }
    }
    getElement() {
        return this.btn;
    }
}

const buttonProps = [
    {
        id: 'btn0',
        text: 0,
        actions: {
            show: true,
        }
    },
    {
        id: 'btn1',
        text: 1,
        actions: {
            show: true,
        }
    },
    {
        id: 'btnClr',
        text: 'C',
        actions: {
            clear: true,
        }
    },
    {
        id: 'btnEql',
        text: '=',
        actions: {
            equate: true,
        }
    },
    {
        id: 'btnSum',
        text: '+',
        actions: {
            show: true,
        }
    },
    {
        id: 'btnSub',
        text: '-',
        actions: {
            show: true,
        }
    },
    {
        id: 'btnMul',
        text: '*',
        actions: {
            show: true,
        }
    },
    {
        id: 'btnDiv',
        text: '/',
        actions: {
            show: true,
        }
    }
];

buttonProps.forEach(btnProp => {
    const btn = new Button(btnProp.id, btnProp.text, btnProp.actions);
    btn.createElement();
    btn.createActions();

    const btns = document.getElementById('btns');
    btns.appendChild(btn.getElement());
})