class Button {
    constructor(number, changeable) {
        this.id = 'btn' + number;
        this.value = number;
        this.changeable = changeable;
    }
    
    createElement() {
        this.btn = document.createElement('button');
        this.btn.id = this.id;
        this.btn.classList.add('btn');
        this.btn.innerText = this.value;
    }
    
    getElement() {
        return this.btn;
    }
}

class ChangeableButton extends Button {
  constructor(number) {
      super(number, true);
  }
  
  getCurrentValue() {
      return this.value;
  }

  setCurrentValue() {
      this.value = this.prev;
  }

  setPreviousValue(prev) {
      this.prev = prev;
  }
}

class StaticButton extends Button {
    constructor(number) {
        super(number, false);
    }
  
  createElement(buttonObjArray) {
      super.createElement();
      this.btn.addEventListener('click', () => {
          // Array with order to update the buttons
          const updateOrderArray = [0,1,2,5,8,7,6,3];

          updateOrderArray.forEach((updateOrder, index, arr) => {
            const currentBtnObj = buttonObjArray[updateOrder];
            let prevBtnObj = buttonObjArray[arr[index-1]];

            if (index === 0) {
                prevBtnObj = buttonObjArray[arr[arr.length-1]];
            }
            if (currentBtnObj.changeable) {
                  // update each button with the prev button value
                  currentBtnObj.setPreviousValue(Number(prevBtnObj.btn.innerText));
              }
          })

          updateOrderArray.forEach((updateOrder, index, arr) => {
            const currentBtnObj = buttonObjArray[updateOrder];
            
            if (currentBtnObj.changeable) {            
                // display prev value on each button
                currentBtnObj.setCurrentValue();
                currentBtnObj.btn.innerText = currentBtnObj.getCurrentValue();
              }
          })
      })
  }
}

const buttonObjArray = [];
for(var i=1; i <= 9; i++) {
  if (i === 5) {
    buttonObjArray.push(new StaticButton(i));
      continue;
  }
  buttonObjArray.push(new ChangeableButton(i));
}
const buttonContainer = document.getElementById('btns');
buttonObjArray.forEach(btn => {
    btn.createElement();
    if (btn.value === 5) {
        btn.createElement(buttonObjArray);
    }
    console.debug('[btn.getElement()]', btn.getElement());
  buttonContainer.appendChild(btn.getElement());
})