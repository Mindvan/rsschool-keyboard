class LocalStorage {
  constructor(isru) {
    this.lang = isru.lang;
  }

  static getLang() {
    const get = localStorage.getItem('isRu');
    return get;
  }

  static setLang(check) {
    localStorage.setItem('isRu', check);
  }
}

const keys = [
  {
    code: 'Backquote',
    en: {
      shiftOff: '`',
      shiftOn: '~',
      capslockOn: '`',
    },
    ru: {
      shiftOff: 'ё',
      shiftOn: 'Ё',
      capslockOn: 'Ё',
    },
  },
  {
    code: 'Digit1',
    en: {
      shiftOff: '1',
      shiftOn: '!',
      capslockOn: '1',
    },
    ru: {
      shiftOff: '1',
      shiftOn: '!',
      capslockOn: '1',
    },
  },
  {
    code: 'Digit2',
    en: {
      shiftOff: '2',
      shiftOn: '@',
      capslockOn: '2',
    },
    ru: {
      shiftOff: '2',
      shiftOn: '\'',
      capslockOn: '2',
    },
  },
  {
    code: 'Digit3',
    en: {
      shiftOff: '3',
      shiftOn: '#',
      capslockOn: '3',
    },
    ru: {
      shiftOff: '3',
      shiftOn: '№',
      capslockOn: '3',
    },
  },
  {
    code: 'Digit4',
    en: {
      shiftOff: '4',
      shiftOn: '$',
      capslockOn: '4',
    },
    ru: {
      shiftOff: '4',
      shiftOn: ';',
      capslockOn: '4',
    },
  },
  {
    code: 'Digit5',
    en: {
      shiftOff: '5',
      shiftOn: '%',
      capslockOn: '5',
    },
    ru: {
      shiftOff: '5',
      shiftOn: '%',
      capslockOn: '5',
    },
  },
  {
    code: 'Digit6',
    en: {
      shiftOff: '6',
      shiftOn: '^',
      capslockOn: '6',
    },
    ru: {
      shiftOff: '6',
      shiftOn: ':',
      capslockOn: '6',
    },
  },
  {
    code: 'Digit7',
    en: {
      shiftOff: '7',
      shiftOn: '&',
      capslockOn: '7',
    },
    ru: {
      shiftOff: '7',
      shiftOn: '?',
      capslockOn: '7',
    },
  },
  {
    code: 'Digit8',
    en: {
      shiftOff: '8',
      shiftOn: '*',
      capslockOn: '8',
    },
    ru: {
      shiftOff: '8',
      shiftOn: '*',
      capslockOn: '8',
    },
  },
  {
    code: 'Digit9',
    en: {
      shiftOff: '9',
      shiftOn: '(',
      capslockOn: '9',
    },
    ru: {
      shiftOff: '9',
      shiftOn: '(',
      capslockOn: '9',
    },
  },
  {
    code: 'Digit0',
    en: {
      shiftOff: '0',
      shiftOn: ')',
      capslockOn: '0',
    },
    ru: {
      shiftOff: '0',
      shiftOn: ')',
      capslockOn: '0',
    },
  },
  {
    code: 'Minus',
    en: {
      shiftOff: '-',
      shiftOn: '_',
      capslockOn: '-',
    },
    ru: {
      shiftOff: '-',
      shiftOn: '_',
      capslockOn: '-',
    },
  },
  {
    code: 'Equal',
    en: {
      shiftOff: '=',
      shiftOn: '+',
      capslockOn: '=',
    },
    ru: {
      shiftOff: '=',
      shiftOn: '+',
      capslockOn: '=',
    },
  },
  {
    code: 'Backspace',
    en: {
      shiftOff: 'Backspace',
      shiftOn: 'Backspace',
      capslockOn: 'Backspace',
    },
    ru: {
      shiftOff: 'Backspace',
      shiftOn: 'Backspace',
      capslockOn: 'Backspace',
    },
  },
  {
    code: 'Tab',
    en: {
      shiftOff: 'Tab',
      shiftOn: 'Tab',
      capslockOn: 'Tab',
    },
    ru: {
      shiftOff: 'Tab',
      shiftOn: 'Tab',
      capslockOn: 'Tab',
    },
  },
  {
    code: 'KeyQ',
    en: {
      shiftOff: 'q',
      shiftOn: 'Q',
      capslockOn: 'Q',
    },
    ru: {
      shiftOff: 'й',
      shiftOn: 'Й',
      capslockOn: 'Й',
    },
  },
  {
    code: 'KeyW',
    en: {
      shiftOff: 'w',
      shiftOn: 'W',
      capslockOn: 'W',
    },
    ru: {
      shiftOff: 'ц',
      shiftOn: 'Ц',
      capslockOn: 'Ц',
    },
  },
  {
    code: 'KeyE',
    en: {
      shiftOff: 'e',
      shiftOn: 'E',
      capslockOn: 'E',
    },
    ru: {
      shiftOff: 'у',
      shiftOn: 'У',
      capslockOn: 'У',
    },
  },
  {
    code: 'KeyR',
    en: {
      shiftOff: 'r',
      shiftOn: 'R',
      capslockOn: 'R',
    },
    ru: {
      shiftOff: 'к',
      shiftOn: 'К',
      capslockOn: 'К',
    },
  },
  {
    code: 'KeyT',
    en: {
      shiftOff: 't',
      shiftOn: 'T',
      capslockOn: 'T',
    },
    ru: {
      shiftOff: 'е',
      shiftOn: 'Е',
      capslockOn: 'Е',
    },
  },
  {
    code: 'KeyY',
    en: {
      shiftOff: 'y',
      shiftOn: 'Y',
      capslockOn: 'Y',
    },
    ru: {
      shiftOff: 'н',
      shiftOn: 'Н',
      capslockOn: 'Н',
    },
  },
  {
    code: 'KeyU',
    en: {
      shiftOff: 'u',
      shiftOn: 'U',
      capslockOn: 'U',
    },
    ru: {
      shiftOff: 'г',
      shiftOn: 'Г',
      capslockOn: 'Г',
    },
  },
  {
    code: 'KeyI',
    en: {
      shiftOff: 'i',
      shiftOn: 'I',
      capslockOn: 'I',
    },
    ru: {
      shiftOff: 'ш',
      shiftOn: 'Ш',
      capslockOn: 'Ш',
    },
  },
  {
    code: 'KeyO',
    en: {
      shiftOff: 'o',
      shiftOn: 'O',
      capslockOn: 'O',
    },
    ru: {
      shiftOff: 'щ',
      shiftOn: 'Щ',
      capslockOn: 'Щ',
    },
  },
  {
    code: 'KeyP',
    en: {
      shiftOff: 'p',
      shiftOn: 'P',
      capslockOn: 'P',
    },
    ru: {
      shiftOff: 'з',
      shiftOn: 'З',
      capslockOn: 'З',
    },
  },
  {
    code: 'BracketLeft',
    en: {
      shiftOff: '[',
      shiftOn: '{',
      capslockOn: '[',
    },
    ru: {
      shiftOff: 'х',
      shiftOn: 'Х',
      capslockOn: 'Х',
    },
  },
  {
    code: 'BracketRight',
    en: {
      shiftOff: ']',
      shiftOn: '}',
      capslockOn: ']',
    },
    ru: {
      shiftOff: 'ъ',
      shiftOn: 'Ъ',
      capslockOn: 'Ъ',
    },
  },
  {
    code: 'Backslash',
    en: {
      shiftOff: '\\',
      shiftOn: '|',
      capslockOn: '\\',
    },
    ru: {
      shiftOff: '\\',
      shiftOn: '/',
      capslockOn: '\\',
    },
  },
  {
    code: 'Delete',
    en: {
      shiftOff: 'Delete',
      shiftOn: 'Delete',
      capslockOn: 'Delete',
    },
    ru: {
      shiftOff: 'Delete',
      shiftOn: 'Delete',
      capslockOn: 'Delete',
    },
  },
  {
    code: 'CapsLock',
    en: {
      shiftOff: 'CapsLock',
      shiftOn: 'CapsLock',
      capslockOn: 'CapsLock',
    },
    ru: {
      shiftOff: 'CapsLock',
      shiftOn: 'CapsLock',
      capslockOn: 'CapsLock',
    },
  },
  {
    code: 'KeyA',
    en: {
      shiftOff: 'a',
      shiftOn: 'A',
      capslockOn: 'A',
    },
    ru: {
      shiftOff: 'ф',
      shiftOn: 'Ф',
      capslockOn: 'Ф',
    },
  },
  {
    code: 'KeyS',
    en: {
      shiftOff: 's',
      shiftOn: 'S',
      capslockOn: 'S',
    },
    ru: {
      shiftOff: 'ы',
      shiftOn: 'Ы',
      capslockOn: 'Ы',
    },
  },
  {
    code: 'KeyD',
    en: {
      shiftOff: 'd',
      shiftOn: 'D',
      capslockOn: 'D',
    },
    ru: {
      shiftOff: 'в',
      shiftOn: 'В',
      capslockOn: 'В',
    },
  },
  {
    code: 'KeyF',
    en: {
      shiftOff: 'f',
      shiftOn: 'F',
      capslockOn: 'F',
    },
    ru: {
      shiftOff: 'а',
      shiftOn: 'А',
      capslockOn: 'А',
    },
  },
  {
    code: 'KeyG',
    en: {
      shiftOff: 'g',
      shiftOn: 'G',
      capslockOn: 'G',
    },
    ru: {
      shiftOff: 'п',
      shiftOn: 'П',
      capslockOn: 'П',
    },
  },
  {
    code: 'KeyH',
    en: {
      shiftOff: 'h',
      shiftOn: 'H',
      capslockOn: 'H',
    },
    ru: {
      shiftOff: 'р',
      shiftOn: 'Р',
      capslockOn: 'Р',
    },
  },
  {
    code: 'KeyJ',
    en: {
      shiftOff: 'j',
      shiftOn: 'J',
      capslockOn: 'J',
    },
    ru: {
      shiftOff: 'о',
      shiftOn: 'О',
      capslockOn: 'О',
    },
  },
  {
    code: 'KeyK',
    en: {
      shiftOff: 'k',
      shiftOn: 'K',
      capslockOn: 'K',
    },
    ru: {
      shiftOff: 'л',
      shiftOn: 'Л',
      capslockOn: 'Л',
    },
  },
  {
    code: 'KeyL',
    en: {
      shiftOff: 'l',
      shiftOn: 'L',
      capslockOn: 'L',
    },
    ru: {
      shiftOff: 'д',
      shiftOn: 'Д',
      capslockOn: 'Д',
    },
  },
  {
    code: 'Semicolon',
    en: {
      shiftOff: ';',
      shiftOn: ':',
      capslockOn: ';',
    },
    ru: {
      shiftOff: 'ж',
      shiftOn: 'Ж',
      capslockOn: 'Ж',
    },
  },
  {
    code: 'Quote',
    en: {
      shiftOff: "'",
      shiftOn: '"',
      capslockOn: "'",
    },
    ru: {
      shiftOff: 'э',
      shiftOn: 'Э',
      capslockOn: 'Э',
    },
  },
  {
    code: 'Enter',
    en: {
      shiftOff: 'Enter',
      shiftOn: 'Enter',
      capslockOn: 'Enter',
    },
    ru: {
      shiftOff: 'Enter',
      shiftOn: 'Enter',
      capslockOn: 'Enter',
    },
  },
  {
    code: 'ShiftLeft',
    en: {
      shiftOff: 'ShiftLeft',
      shiftOn: 'ShiftLeft',
      capslockOn: 'ShiftLeft',
    },
    ru: {
      shiftOff: 'ShiftLeft',
      shiftOn: 'ShiftLeft',
      capslockOn: 'ShiftLeft',
    },
  },
  {
    code: 'KeyZ',
    en: {
      shiftOff: 'z',
      shiftOn: 'Z',
      capslockOn: 'Z',
    },
    ru: {
      shiftOff: 'я',
      shiftOn: 'Я',
      capslockOn: 'Я',
    },
  },
  {
    code: 'KeyX',
    en: {
      shiftOff: 'x',
      shiftOn: 'X',
      capslockOn: 'X',
    },
    ru: {
      shiftOff: 'ч',
      shiftOn: 'Ч',
      capslockOn: 'Ч',
    },
  },
  {
    code: 'KeyC',
    en: {
      shiftOff: 'c',
      shiftOn: 'C',
      capslockOn: 'C',
    },
    ru: {
      shiftOff: 'с',
      shiftOn: 'С',
      capslockOn: 'С',
    },
  },
  {
    code: 'KeyV',
    en: {
      shiftOff: 'v',
      shiftOn: 'V',
      capslockOn: 'V',
    },
    ru: {
      shiftOff: 'м',
      shiftOn: 'М',
      capslockOn: 'М',
    },
  },
  {
    code: 'KeyB',
    en: {
      shiftOff: 'b',
      shiftOn: 'B',
      capslockOn: 'B',
    },
    ru: {
      shiftOff: 'и',
      shiftOn: 'И',
      capslockOn: 'И',
    },
  },
  {
    code: 'KeyN',
    en: {
      shiftOff: 'n',
      shiftOn: 'N',
      capslockOn: 'N',
    },
    ru: {
      shiftOff: 'т',
      shiftOn: 'Т',
      capslockOn: 'Т',
    },
  },
  {
    code: 'KeyM',
    en: {
      shiftOff: 'm',
      shiftOn: 'M',
      capslockOn: 'M',
    },
    ru: {
      shiftOff: 'ь',
      shiftOn: 'Ь',
      capslockOn: 'Ь',
    },
  },
  {
    code: 'Comma',
    en: {
      shiftOff: ',',
      shiftOn: '<',
      capslockOn: ',',
    },
    ru: {
      shiftOff: 'б',
      shiftOn: 'Б',
      capslockOn: 'Б',
    },
  },
  {
    code: 'Period',
    en: {
      shiftOff: '.',
      shiftOn: '>',
      capslockOn: '.',
    },
    ru: {
      shiftOff: 'ю',
      shiftOn: 'Ю',
      capslockOn: 'Ю',
    },
  },
  {
    code: 'Slash',
    en: {
      shiftOff: '/',
      shiftOn: '?',
      capslockOn: '/',
    },
    ru: {
      shiftOff: '.',
      shiftOn: ',',
      capslockOn: '.',
    },
  },
  {
    code: 'ArrowUp',
    en: {
      shiftOff: '▲',
      shiftOn: '▲',
      capslockOn: '▲',
    },
    ru: {
      shiftOff: '▲',
      shiftOn: '▲',
      capslockOn: '▲',
    },
  },
  {
    code: 'ShiftRight',
    en: {
      shiftOff: 'ShiftRight',
      shiftOn: 'ShiftRight',
      capslockOn: 'ShiftRight',
    },
    ru: {
      shiftOff: 'ShiftRight',
      shiftOn: 'ShiftRight',
      capslockOn: 'ShiftRight',
    },
  },
  {
    code: 'ControlLeft',
    en: {
      shiftOff: 'Ctrl',
      shiftOn: 'Ctrl',
      capslockOn: 'Ctrl',
    },
    ru: {
      shiftOff: 'Ctrl',
      shiftOn: 'Ctrl',
      capslockOn: 'Ctrl',
    },
  },
  {
    code: 'MetaLeft',
    en: {
      shiftOff: 'Win',
      shiftOn: 'Win',
      capslockOn: 'Win',
    },
    ru: {
      shiftOff: 'Win',
      shiftOn: 'Win',
      capslockOn: 'Win',
    },
  },
  {
    code: 'AltLeft',
    en: {
      shiftOff: 'Alt',
      shiftOn: 'Alt',
      capslockOn: 'Alt',
    },
    ru: {
      shiftOff: 'Alt',
      shiftOn: 'Alt',
      capslockOn: 'Alt',
    },
  },
  {
    code: ' ',
    en: {
      shiftOff: 'Space',
      shiftOn: 'Space',
      capslockOn: 'Space',
    },
    ru: {
      shiftOff: 'Space',
      shiftOn: 'Space',
      capslockOn: 'Space',
    },
  },
  {
    code: 'AltRight',
    en: {
      shiftOff: 'Alt',
      shiftOn: 'Alt',
      capslockOn: 'Alt',
    },
    ru: {
      shiftOff: 'Alt',
      shiftOn: 'Alt',
      capslockOn: 'Alt',
    },
  },
  {
    code: 'ArrowLeft',
    en: {
      shiftOff: '◄',
      shiftOn: '◄',
      capslockOn: '◄',
    },
    ru: {
      shiftOff: '◄',
      shiftOn: '◄',
      capslockOn: '◄',
    },
  },
  {
    code: 'ArrowDown',
    en: {
      shiftOff: '▼',
      shiftOn: '▼',
      capslockOn: '▼',
    },
    ru: {
      shiftOff: '▼',
      shiftOn: '▼',
      capslockOn: '▼',
    },
  },
  {
    code: 'ArrowRight',
    en: {
      shiftOff: '►',
      shiftOn: '►',
      capslockOn: '►',
    },
    ru: {
      shiftOff: '►',
      shiftOn: '►',
      capslockOn: '►',
    },
  },
  {
    code: 'ControlRight',
    en: {
      shiftOff: 'Ctrl',
      shiftOn: 'Ctrl',
      capslockOn: 'Ctrl',
    },
    ru: {
      shiftOff: 'Ctrl',
      shiftOn: 'Ctrl',
      capslockOn: 'Ctrl',
    },
  },
];

const container = document.createElement('div');
container.id = 'container';
container.className = 'container';
document.getElementsByTagName('body')[0].appendChild(container);

const textArea = document.createElement('textarea');
textArea.id = 'textarea';
textArea.className = 'textarea';
document.getElementById('container').appendChild(textArea);

const keyboard = document.createElement('div');
keyboard.id = 'keyboard';
keyboard.className = 'keyboard';
document.getElementById('container').appendChild(keyboard);

let isShift = false;
let isCaps = false;
let isRu = false;

if (LocalStorage.getLang(isRu) !== null) {
  isRu = JSON.parse(LocalStorage.getLang());
}

const square = (arr) => {
  const keySquare = document.createElement('button');
  keySquare.className = 'square';

  if (isRu) {
    keySquare.textContent = `${arr.ru.shiftOff}`;
  } else {
    keySquare.textContent = `${arr.en.shiftOff}`;
  }

  keySquare.setAttribute('id', arr.code.toLowerCase());

  if (arr.code === ' ') { keySquare.setAttribute('id', 'space'); }

  return keySquare;
};

function layout() {
  for (let i = 0; i < keys.length; i += 1) {
    document.getElementById('keyboard').append(square(keys[i]));
  }
}

function consoleKey(key) {
  const field = document.getElementById('textarea');
  const startPos = field.selectionStart;
  const endPos = field.selectionEnd;
  const fieldVal = field.value;

  field.value = fieldVal.substring(0, startPos) + key + fieldVal.substring(endPos, fieldVal.length);
  field.setSelectionRange(startPos + 1, endPos + 1);
  field.focus();
}

function toShiftOn() {
  document.querySelectorAll('.square').forEach((element, i) => {
    const el = element;
    if (isRu) {
      el.textContent = keys[i].ru.shiftOn;
    } else {
      el.textContent = keys[i].en.shiftOn;
    }
  });
  isShift = true;
}

function toShiftOff() {
  document.querySelectorAll('.square').forEach((element, i) => {
    const el = element;
    if (isRu) {
      el.textContent = keys[i].ru.shiftOff;
    } else {
      el.textContent = keys[i].en.shiftOff;
    }
  });
  isShift = false;
}

function toCapsOn() {
  document.querySelectorAll('.square').forEach((element, i) => {
    const el = element;
    if (isRu) {
      el.textContent = keys[i].ru.capslockOn;
    } else {
      el.textContent = keys[i].en.capslockOn;
    }
  });
  isCaps = true;
}

function toCapsOff() {
  document.querySelectorAll('.square').forEach((element, i) => {
    const el = element;
    if (isRu) {
      el.textContent = keys[i].ru.shiftOff;
    } else {
      el.textContent = keys[i].en.shiftOff;
    }
  });
  isCaps = false;
}

layout();

const SQUARES = document.querySelectorAll('.square');

document.addEventListener('keyup', (event) => {
  SQUARES.forEach((element) => {
    if (!(event.getModifierState('CapsLock'))) {
      element.classList.remove('active');
      toShiftOff();
    } else {
      toShiftOn();
    }
  });
});

const CAPSLOCK = document.querySelector('#capslock');
const SHIFT_LEFT = document.querySelector('#shiftleft');
const SHIFT_RIGHT = document.querySelector('#shiftright');

document.querySelectorAll('.square').forEach((elem) => {
  const element = elem;
  element.onclick = function func(event) {
    document.querySelectorAll('.square').forEach((el) => {
      el.classList.remove('active');
    });
    const id = this.getAttribute('id');
    const textContentId = document.querySelector(`.square[id="${id}"`).textContent;
    const text = document.getElementById('textarea');
    if ((textContentId !== 'CapsLock') && (textContentId !== 'Alt') && (textContentId !== 'Ctrl') && (textContentId !== 'Win')
            && (textContentId !== 'ShiftLeft') && (textContentId !== 'ShiftRight') && (textContentId !== 'Meta') && (textContentId !== 'Enter')
            && (textContentId !== 'Tab') && (textContentId !== 'Backspace') && (textContentId !== 'Delete')) {
      keys.filter((neededKey) => {
        if (neededKey.code.toLowerCase() === id) {
          text.focus();
          if ((!isShift) && (!isCaps)) {
            if (isRu) {
              consoleKey(neededKey.ru.shiftOff);
            } else {
              consoleKey(neededKey.en.shiftOff);
            }
          } else if ((isShift) && (!isCaps)) {
            if (isRu) {
              consoleKey(neededKey.ru.shiftOn);
            } else {
              consoleKey(neededKey.en.shiftOn);
            }
          } else if ((!isShift) && (isCaps)) {
            if (isRu) {
              consoleKey(neededKey.ru.capslockOn);
            } else {
              consoleKey(neededKey.en.capslockOn);
            }
          } else if (isRu) {
            consoleKey(neededKey.ru.shiftOn);
          } else {
            consoleKey(neededKey.en.shiftOn);
          }
        }
        return neededKey;
      });
    }
    if (textContentId === 'CapsLock') {
      toCapsOn();
    }
    if ((textContentId === 'ShiftLeft') || (textContentId === 'ShiftRight')) {
      toShiftOn();
    }
    if (textContentId === 'Enter') {
      text.focus();
      event.preventDefault();
      text.setSelectionRange(text.selectionStart, text.selectionStart);
      consoleKey('\n');
    }
    if (textContentId === 'Tab') {
      text.focus();
      event.preventDefault();
      text.setSelectionRange(text.selectionStart, text.selectionStart);
      consoleKey('\t');
    }
    if (textContentId === 'Backspace') {
      text.focus();
      text.setSelectionRange(text.selectionStart - 1, text.selectionStart);
      text.setRangeText('');
    }
    if (textContentId === 'Delete') {
      text.focus();
      text.setSelectionRange(text.selectionStart, text.selectionStart + 1);
      text.setRangeText('');
    }
    if (textContentId === 'Space') {
      consoleKey(' ');
    }

    this.classList.add('active');

    CAPSLOCK.addEventListener('click', () => {
      CAPSLOCK.classList.toggle('active');
      if (isCaps) {
        toCapsOff();
      } else {
        toCapsOn();
      }
    });

    SHIFT_LEFT.addEventListener('click', () => {
      SHIFT_LEFT.classList.toggle('active');
      if (SHIFT_LEFT.classList.contains('active')) {
        document.getElementById('shiftleft').style.backgroundColor = '#171515';
        document.getElementById('shiftleft').style.color = 'white';
        toShiftOn();
      } else {
        document.getElementById('shiftleft').style.backgroundColor = 'white';
        document.getElementById('shiftleft').style.color = '#171515';
        toShiftOff();
      }
    });

    SHIFT_RIGHT.addEventListener('click', () => {
      SHIFT_RIGHT.classList.toggle('active');
      if (SHIFT_RIGHT.classList.contains('active')) {
        document.getElementById('shiftright').style.backgroundColor = '#171515';
        document.getElementById('shiftright').style.color = 'white';
        toShiftOn();
      } else {
        document.getElementById('shiftright').style.backgroundColor = 'white';
        document.getElementById('shiftright').style.color = '#171515';
        toShiftOff();
      }
    });
  };
});

document.onkeydown = function clck(event) {
  document.querySelectorAll('.square').forEach((el) => {
    if ((el.textContent !== 'CapsLock') && (el.textContent !== 'Alt') && (el.textContent !== 'Ctrl') && (el.textContent !== 'Win')
            && (el.textContent !== 'ShiftLeft') && (el.textContent !== 'ShiftRight') && (el.textContent !== 'Meta') && (el.textContent !== 'Enter')
            && (el.textContent !== 'Tab') && (el.textContent !== 'Backspace') && (el.textContent !== 'Delete')) {
      el.classList.remove('active');
    }

    if (event.getModifierState && event.getModifierState('CapsLock')) {
      document.getElementById('capslock').classList.add('active');
    }
  });

  if (event.shiftKey) {
    toShiftOn();
  }

  document.querySelector(`.square[id="${event.code.toLowerCase().toString()}"]`).classList.add('active');

  if ((event.shiftKey) && (event.altKey)) {
    if (!isRu) {
      isRu = true;
    } else {
      isRu = false;
    }

    LocalStorage.setLang(isRu);

    if ((!isShift) && (!isCaps)) {
      toCapsOff();
    } else if ((isShift) && (!isCaps)) {
      toCapsOn();
    } else if ((!isShift) && (isCaps)) {
      toCapsOff();
    } else {
      toCapsOn();
    }
  }

  if ((event.key !== 'CapsLock') && (event.key !== 'Alt') && (event.key !== 'Control')
        && (event.key !== 'Shift') && (event.key !== 'Meta') && (event.key !== 'Backspace') && (event.key !== 'Delete')) {
    if ((event.key === 'ArrowLeft') || (event.key === 'ArrowUp') || (event.key === 'ArrowRight')
            || (event.key === 'ArrowDown')) {
      keys.filter((neededKey) => {
        if (neededKey.code === event.key) {
          consoleKey(neededKey.en.shiftOff);
        }
        return neededKey;
      });
    } else if (event.key === 'Tab') {
      event.preventDefault();
      consoleKey('\t');
    } else if (event.key === 'Enter') {
      consoleKey('\n');
    } else {
      const text = document.getElementById('textarea');
      text.focus();
    }
  }
};

const info = document.createElement('div');
info.className = 'info';
info.innerText += 'Клавиатура была создана в операционной системе Windows\nСмена языка: AltLeft + ShiftLeft';
document.getElementById('container').appendChild(info);
