function main() {
  const keys = [ 
    [192, '`', 'ё'], [49, '1', '', '!'], [50, '2', '', '@'], 
    [51, '3', '', '#'], [52, '4', '', '$'], [53 , '5', '', '%'], 
    [54, '6', '', '^'], [55, '7', '', '&'], [56, '8', '', '*'], 
    [57, '9', '', '('], [48, '0', '', ')'], [189, '-', '', '_'], 
    [187, '=', '', '+'], [8, 'backspace'], [9, 'tab'],
    [81, 'q', 'й'], [87, 'w', 'ц'], [69, 'e', 'у'],
    [82, 'r', 'к'], [84, 't', 'е'], [89, 'y', 'н'],
    [85, 'u', 'г'], [73, 'i', 'ш'], [79, 'o', 'щ'],
    [80, 'p', 'з'], [219, '[', 'х', '{'], [221, ']', 'ъ', '}'], 
    [220, '\"', '\"', '/'], [20, 'caps lock'], [65, 'a', 'ф'],
    [83, 's', 'ы'], [68, 'd', 'в'], [70, 'f', 'а'],
    [71, 'g', 'п'], [72, 'h', 'р'], [74, 'j', 'о'],
    [75, 'k', 'л'], [76, 'l', 'д'], [186, ';', 'ж', ':'],
    [222, "'", 'э', '"'], [13, 'enter'], [16, 'shift', '', '', 'l'],
    [90, 'z', 'я'], [88, 'x', 'ч'], [67, 'c', 'с'],
    [86, 'v', 'м'], [66, 'b', 'и'], [78, 'n', 'т'],
    [77, 'm', 'ь'], [188, ',', 'б', '<'], [190, '.', 'ю', '>'],
    [191, '/', '.', '?'], [38, 'up'], [16, 'shift', '', '', 'r'],
    [17, 'ctrl', '', '', 'l'], [91, 'win'], [18, 'alt', '', '', 'l'],
    [32, 'space'], [18, 'alt', '', '', 'r'], [17, 'ctrl', '', '', 'r'],
    [37, 'left'], [40, 'down'], [39, 'right']
  ];
  let container = document.getElementsByClassName('container')[0];
  let main, textarea, keyboard; 
  let virtualKeyboard = new VirtualKeyboard(keys);
  
  main = document.createElement('main');
  main.classList = 'main';
  container.appendChild(main);
  main = document.getElementsByClassName('main')[0];

  textarea = document.createElement('textarea');
  textarea.classList = 'input-text';
  main.appendChild(textarea);

  keyboard = document.createElement('section');
  keyboard.classList = 'keyboard';
  main.appendChild(keyboard);

  virtualKeyboard.createKeyboard();

  document.getElementsByClassName('keyboard')[0].addEventListener ('keydown', (event) => {
    if(event.target.classList.contains('button')) {
      event.target.style.background = 'rgba(14, 117, 177, 0.281)';
      event.target.style.transform = 'scale(0.9)';
    }
  });
  document.getElementsByClassName('keyboard')[0].addEventListener ('keyup', (event) => {
    if(event.target.classList.contains('button')) {
      event.target.style.background = 'rgb(243, 243, 243)';
      event.target.style.transform = 'none';
    }
  });
}