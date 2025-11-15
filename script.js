/*
   SPDX-License-Identifier: BSD-3-Clause
   BSD 3-Clause License
   Copyright 2025 Anastasia Dubrovina, tg: @mika7505
   See LICENSE file for details.
*/

class CookiePopup {
/**
  * @param {Obect} userSettings Настройки ppopup 
*/
  constructor(userSettings) {
    this.settings = this.getSettings(userSettings);
    this.createElements();
    this.applyStyles();
    this.addEvents();
    this.render();
  }

/**
 * Объединяет настройки по умолчанию с пользовательскими
 * @param {Obect} userSettings Настройки, переданные пользователем
 * @returns {Object} Итоговые настойки popup
*/
  getSettings(userSettings) {
    const defaultSettings = {
      text: "Мы используем файлы cookie для улучшения работы сайта. Подробнее см. ",
      link: { text: "политика cookies", href: "https://example.com/cookies" },
      buttonText: "Принять",

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
    console.log(resultSettings);
    return resultSettings;
  }

/**
 * Создает HTML-элементы popup
*/
  createElements() {
// Контейнер
    this.containerElement = document.createElement('div');
    this.containerElement.classList.add('cookie-popup');

// Текст
    this.textElement = document.createElement('p');
    this.textElement.classList.add('cookie-popup__text');
    this.textElement.textContent = this.settings.text;

// Ссылки
    this.linkElement = document.createElement('a');
    this.linkElement.classList.add('cookie-popup__link');
    this.linkElement.setAttribute('target', '_blank');
    this.linkElement.setAttribute('href', '');

    this.linkElement.textContent = this.settings.link.text;
    this.linkElement.href = this.settings.link.href;

// Кнопка отправки
    this.submitElement = document.createElement('button');
    this.submitElement.classList.add('cookie-popup__submit');
    this.submitElement.setAttribute('type', 'submit');
    this.submitElement.setAttribute('aria-label', 'Принять использование куки');
    this.submitElement.textContent = this.settings.buttonText;

// Тег для стилей
    this.styles = document.createElement('style');

// Добавляем узлы
    document.head.append(this.styles);

    this.containerElement.append(this.textElement, this.linkElement, this.submitElement);
    document.body.append(this.containerElement);

    this.textElement.append(this.linkElement);
  }

/**
 * Приеняет стили к popup через тег <style>
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
 * Добавляет событие клик на кнопку
*/
  addEvents() {
    this.submitElement.addEventListener('click', () => {
      this.containerElement.classList.remove('cookie-popup_open');
      localStorage.setItem('cookieAccepted', 'true');
    })
  }

/**
 * Показывает popup, если пользователь еще не принял куки
*/
  render() {
    if(!localStorage.getItem('cookieAccepted')) {
      setTimeout(() => {
        this.containerElement.classList.add('cookie-popup_open');
      }, 1000);
    }
  }
}

const cookiePopup = new CookiePopup(cookiePopupSettings);