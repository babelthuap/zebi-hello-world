(() => {
'use strict';

const Constants = {
  CLICK: 'click',
  CLICK_ME_BUTTON_ID: 'click-me-button',
  HELLO_WORLD: 'Hello, world!',
  TEXT_ELEMENT_ID: 'text-element',
};

const clickMeButton = document.getElementById(Constants.CLICK_ME_BUTTON_ID);
const textElement = document.getElementById(Constants.TEXT_ELEMENT_ID);

function handleClick() {
  textElement.textContent = Constants.HELLO_WORLD;
}

clickMeButton.addEventListener(Constants.CLICK, handleClick);

})();
