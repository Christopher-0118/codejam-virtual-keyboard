class VirtualKeyboard {
  constructor(keyArray) {
    this.keyArray = keyArray;
  }

  createKeyboard() {
    let keyboard = document.getElementsByClassName('keyboard')[0];

    for(let i = 0; i < this.keyArray.length; i++) {
      let key = document.createElement('input');

      key.type = 'button';
      key.classList.add('button'); 
      if(this.keyArray[i][4]) { //button location
        key.classList.add('b' + this.keyArray[i][4] + this.keyArray[i][0]);
      } else {
        key.classList.add('b' + this.keyArray[i][0]);
      }
      key.value = this.keyArray[i][1];
      keyboard.appendChild(key);
    }
  };

  getEnAlphabet() {};

  getRuAlphabet() {};

  getUpperCase () {};
}