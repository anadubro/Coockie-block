/*
   SPDX-License-Identifier: BSD-3-Clause
   BSD 3-Clause License
   Copyright 2025 Anastasia Dubrovina, tg: @mika7505
   See LICENSE file for details.
*/

class CookiePopup {
/**
  * @param {Object} userSettings Popup settings 
*/
  constructor(userSettings) {
    this.settings = this.getSettings(userSettings);
    this.createElements();
    this.applyStyles();
    this.addEvents();
    this.render();
  }

/**
   * Combines default settings with user settings
   * @param {Object} userSettings Settings passed by the user
   * @returns {Object} Final popup settings
*/
  getSettings(userSettings) {
    const defaultSettings = {
      text: "Мы используем файлы cookie для улучшения работы сайта. Подробнее см. [cookie], [защита данных]",
      linkUrls: ["https://example.com/cookies", "https://example.com/cookies23232"],
      buttonText: "Принять",
      timeoutLoadingBlock: '1000',

      backgroundColorBlock: '#e0e9fc',
      maxWidthContainer: '500px',
      borderBlock: '1px solid #8787874a',
      borderRadiusBlock: '15px 5px',
      boxShadowBlock: '3px 3px 10px #00000073',
      animationBlock: 'slideBounce 1.6s forwards ease-out',
      opasityBlock: '0.8',
    
      colorText: '#000',
      fontSizeText: '17px',
      widthTextBlock: '70%',
    
      colorLink: '#336aea',
      colorLinkHover: '#08308f',
    
      backgroundColorButton: '#336aea',
      colorTextButton: '#e0e0e0',
      borderButton: 'none',
      fontSizeButton: '17px',
      boxShadowButton: '3px 3px 10px #00000073',
      transformButtonHover: 'scale(1.05)'
    };

    let resultSettings = { ...defaultSettings, ...userSettings };
    return resultSettings;
  }

/**
  * Creates HTML popup elements
*/
  createElements() {
// Container
    this.containerElement = document.createElement('div');
    this.containerElement.classList.add('cookie-popup');

// Text
    let paragraphElement = document.createElement('p');
    paragraphElement.classList.add('cookie-popup__text');
    this.containerElement.append(paragraphElement);

    let subStringList = this.settings.text.split(/(\[.+?\])/);

    let linkIndex = 0;
    for(let i = 0; i < subStringList.length; i++) {
      let subString = subStringList[i];
      if(subString[0] == '[') {
        let linkElement = document.createElement('a');
        linkElement.classList.add('cookie-popup__link');
        linkElement.setAttribute('target', '_blank');
        linkElement.setAttribute('href', '');

        let cleanText = subString.replace('[', '').replace(']', '');
        linkElement.textContent = cleanText;
        linkElement.setAttribute('href', this.settings.linkUrls[linkIndex] || "#");
        paragraphElement.append(linkElement);

        linkIndex++;
      } else {
        let textNode = document.createTextNode(subString);
        paragraphElement.append(textNode);
      }
    }

// Submit button
    this.submitElement = document.createElement('button');
    this.submitElement.classList.add('cookie-popup__submit');
    this.submitElement.setAttribute('type', 'submit');
    this.submitElement.setAttribute('aria-label', 'Принять использование куки');
    this.submitElement.textContent = this.settings.buttonText;

// Tag for styles
    this.styles = document.createElement('style');

// Add nodes
    document.head.append(this.styles);

    this.containerElement.append(this.submitElement);
    document.body.append(this.containerElement);
  }

/**
 * Applies styles to popup via <style> tag
*/
  applyStyles() {
    this.styles.textContent = `
      @keyframes slideBounce {
        0% {
          transform: translateY(100%);
        }
        40% {
          transform: translateY(-20px);
        }
        70% {
          transform: translateY(-5px);
        }
        100% {
          transform: translateY(0);
        }
      }

      body {
        position: relative;
      }

      .cookie-popup {
        display: none;
      }

      .cookie-popup_open {
        position: fixed;
        bottom: 15px;
        right: 15px;
        max-inline-size: ${this.settings.maxWidthContainer};
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 10px;
        border: ${this.settings.borderBlock};
        border-radius: ${this.settings.borderRadiusBlock};
        animation: ${this.settings.animationBlock};
        background-color: ${this.settings.backgroundColorBlock};
        box-shadow: ${this.settings.boxShadowBlock};
        box-sizing: border-box;
        opacity: ${this.settings.opasityBlock};
      }

      .cookie-popup__text {
        inline-size: ${this.settings.widthTextBlock};
        font-size: ${this.settings.fontSizeText};
        line-height: 21px;
        color: ${this.settings.colorText};
      }

      .cookie-popup__link {
        color: ${this.settings.colorLink};
      }

      .cookie-popup__link:hover {
        color: ${this.settings.colorLinkHover};
        text-decoration: underline;
      }

      .cookie-popup__submit {
        border: ${this.settings.borderButton};
        cursor: pointer;
        font-size: ${this.settings.fontSizeButton};
        font-weight: bold;
        padding-inline: 12px;
        padding-block: 8px;
        background-color: ${this.settings.backgroundColorButton};
        color: ${this.settings.colorTextButton};
        box-shadow: ${this.settings.boxShadowButton};
      }

      .cookie-popup__submit:hover {
        transform: ${this.settings.transformButtonHover};
      }
    `;
  }

/**
 * Adds click event to button
*/
  addEvents() {
    this.submitElement.addEventListener('click', () => {
      this.containerElement.classList.remove('cookie-popup_open');
      localStorage.setItem('cookieAccepted', 'true');
    })
  }

/**
 * Shows popup if user has not yet accepted cookies
*/
  render() {
    if(!localStorage.getItem('cookieAccepted')) {
      setTimeout(() => {
        this.containerElement.classList.add('cookie-popup_open');
      }, this.settings.timeoutLoadingBlock);
    }
  }
}

const cookiePopup = new CookiePopup(cookiePopupSettings);