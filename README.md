## License

This project is licensed under the BSD 3-Clause License.  
You are free to use, modify, and distribute this software in source or binary form, with or without modification, under the conditions described in the [LICENSE](./LICENSE.txt) file.

# Документация по использованию
### Все, что нужно знать для использования паттерна и изменения настроек под себя:

1. Пользовательские настройки паттерна находятся в файле [INDEX](./index.html), внутри тега <script>
  ```html
    <script>
      const cookiePopupSettings = {..SETTINGS..}
    </script>
  ```

2. Разбор полей внутри пользовательских настроек:
  - Поле **text**
    ```html
      <script>
        const cookiePopupSettings = {
          text: 'Мы используем файлы cookie для улучшения работы сайта. Подробнее см. [cookie], [защита данных]',
        }
      </script>
    ```
    Это основной текст для блока с куками, который отобразиться пользователям сайта, например: 'Мы используем файлы cookie для улучшения работы сайта. Подробнее см. [ССЫЛКА], [ССЫЛКА]'.
    В квадратных скобках [...] указываем текст для ссылки, например [cookie], [защита данных]. Указывать текст ссылки в  квадратных скобках необходимо в том порядке, в котором указаны урлы в поле **linkUrls**, о котором описано ниже.

  - Поле **linkUrls**
    ```html
      <script>
        const cookiePopupSettings = {
          linkUrls: ['https://example.com/cookies', 'https://example.com/cookies-2'],
        }
      </script>
    ```
    Это перечень ссылок, можно добавлять сколько угодно урлов, которые будут соответсвовать тексту в квадратных скобках из поля **text**, что позволяет вставлять ссылки в любое место текста без потери смысла. Урлы перечисляются через запятую, в том порядке, в котором используются в поле **text**.

  - Поле **buttonText**
    ```html
      <script>
        const cookiePopupSettings = {
          buttonText: 'Принять',
        }
      </script>
    ```
    Это текст, который отображается внутри кнопки, с функционалом принятия куков. Данные о том, что пользователь кликнул по кнопке, сохранаются в LocalStorage.

3. Как стилизовать блок с куками в настройках:
  Ниже приведен перечень полей, которые отвечают за стилизацию элементов, а после приведен пример использования стилей(чтобы изменить стили,заданные по умолчанию, используйте соответствующие поля с нужными вам значениями):
    - **backgroundColorBlock** - фон общего блока с куками, тут указывается цвет в любом из форматов(HEX, RGB, RGBA, HSL).
    - **maxWidthContainer** - максимальная ширина блока с куками.
    - **borderBlock** - граница бока с куками, задается в формате: толщина границы + стиль границы + цвет границы ('1px solid #8787874a').
    - **borderRadiusBlock** - закругление границы, можно задать в px или в %.
    - **boxShadowBlock** - тень блока с куками.
    - **animationBlock** - анимация для всплытия и подпрыгивания блока.
    - **opasityBlock** - прозрачность блока.
    - **colorText** - цвет основного текста из поля **text**.
    - **fontSizeText** - размер основного текста из поля **text**.
    - **widthTextBlock** - ширина основного текста из поля **text**.
    - **colorLink** - цвет текста ссылок из поля **text** в квадратных скобках.
    - **colorLinkHover** - цвет текста ссылок при наведении мыши из поля **text** в квадратных скобках.
    - **backgroundColorButton** - цвето фона кнопки **buttonText**.
    - **colorTextButton** - цвет текста кнопки **buttonText**.
    - **borderButton** - граница кнопки **buttonText** в формате ('1px solid #8787874a').
    - **fontSizeButton** - размер текста кнопки **buttonText**.
    - **boxShadowButton** - тень кнопки **buttonText**.
    - **transformButtonHover** - тансформация кнопки, по умолчанию стоит маштабирование ('scale(1.05)').

  Пример использования стилей:
  ```html
      <script>
        const cookiePopupSettings = {
          backgroundColorBlock: '#e0e9fc',
          maxWidthContainer: '500px',
          borderBlock: '1px solid #8787874a',
          borderRadiusBlock: '15px 5px',
          boxShadowBlock: '3px 3px 10px #00000073',
          animationBlock: 'slideBounce 1.6s forwards ease-out',
          opasityBlock: '0.8',
        
          // Text styles
          colorText: '#000',
          fontSizeText: '17px',
          widthTextBlock: '70%',
        
          // Link styles
          colorLink: '#336aea',
          colorLinkHover: '#08308f',
        
          // Button styles
          backgroundColorButton: '#336aea',
          colorTextButton: '#e0e0e0',
          borderButton: 'none',
          fontSizeButton: '17px',
          boxShadowButton: '3px 3px 10px #00000073',
          transformButtonHover: 'scale(1.05)'
        }
      </script>
    ```
4. Блок с куками всплывает через 1 секунду после загрузки страницы. Редактирование отложенного таймера загрузки блока не редактируется пользовательскими настройками, но при необходимости его можно изменить в файле [SCRIPT](./script.js), в методе render():
  ```js
    render() {
      if(!localStorage.getItem('cookieAccepted')) {
        setTimeout(() => {
          this.containerElement.classList.add('cookie-popup_open');
        }, 1000);
      }
    }
  ```
  В данный момент установленно 1000 милисекунд можно менять на нужное вам значение.