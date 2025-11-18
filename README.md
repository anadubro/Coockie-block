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
    Это перечень ссылок, можно добавлять сколько угодно урлов, которые будут соответствовать тексту в квадратных скобках из поля **text**, что позволяет вставлять ссылки в любое место текста без потери смысла. Урлы перечисляются через запятую, в том порядке, в котором используются в поле **text**.

  - Поле **buttonText**
    ```html
      <script>
        const cookiePopupSettings = {
          buttonText: 'Принять',
        }
      </script>
    ```
    Это текст, который отображается внутри кнопки, с функционалом принятия куков. Данные о том, что пользователь кликнул по кнопке, сохраняются в LocalStorage.

  - Поле **timeoutLoadingBlock**
    ```html
        <script>
          const cookiePopupSettings = {
            timeoutLoadingBlock: '1000',
          }
        </script>
    ```
  Это отложенная загрузка блока с куками при загрузке страницы. Блок с куками всплывает через 1 секунду после загрузки страницы.
  По умолчанию установлено 1000 миллисекунд.


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
    - **backgroundColorButton** - цвет фона кнопки **buttonText**.
    - **colorTextButton** - цвет текста кнопки **buttonText**.
    - **borderButton** - граница кнопки **buttonText** в формате ('1px solid #8787874a').
    - **fontSizeButton** - размер текста кнопки **buttonText**.
    - **boxShadowButton** - тень кнопки **buttonText**.
    - **transformButtonHover** - трансформация кнопки, по умолчанию стоит маштабирование ('scale(1.05)').

  Пример использования стилей:
  ```html
    <script>
      const cookiePopupSettings = {
        // Background color
        backgroundColorBlock: '#e0e9fc',
        // Maximum block width
        maxWidthContainer: '500px',
        // Block border
        borderBlock: '1px solid #8787874a',
        // Corner rounding
        borderRadiusBlock: '15px 5px',
        // Block shadow
        boxShadowBlock: '3px 3px 10px #00000073',
        // Block transparency
        opasityBlock: '0.8',
      
        // Text styles
        // Text color
        colorText: '#000',
        // Text size
        fontSizeText: '17px',
        // Text block width
        widthTextBlock: '70%',
      
        // Link styles
        // Link color
        colorLink: '#336aea',
        // Link color on hover
        colorLinkHover: '#08308f',
      
        // Button styles
        // Button background color
        backgroundColorButton: '#336aea',
        // Button text color
        colorTextButton: '#e0e0e0',
        // Button border
        borderButton: 'none',
        // Button text size
        fontSizeButton: '17px',
        // Button shadow
        boxShadowButton: '3px 3px 10px #00000073',
        // Button transformation on mouse hover
        transformButtonHover: 'scale(1.05)'
      }
    </script>
  ```

# Documentation for Use
### Everything you need to know for using the pattern and adjusting the settings for yourself:

1. User settings of the pattern are located in the file [INDEX](./index.html), inside the <script> tag
  ```html
    <script>
      const cookiePopupSettings = {..SETTINGS..}
    </script>
  ```

2. Breakdown of the fields inside the user settings:
  - Field **text**
    ```html
      <script>
        const cookiePopupSettings = {
          text: 'We use cookies to improve the performance of the website. For more details see [cookie], [data protection]',
        }
      </script>
    ```
    This is the main text for the cookie block, which will be displayed to website users, for example: 'We use cookies to improve the performance of the website. For more details see [LINK], [LINK]'.
    In square brackets [...] we specify the text for the link, for example [cookie], [data protection]. The link text in square brackets must be specified in the same order as the URLs listed in the linkUrls field described below.

  - Field **linkUrls**
    ```html
      <script>
        const cookiePopupSettings = {
          linkUrls: ['https://example.com/cookies', 'https://example.com/cookies-2'],
        }
      </script>
    ```
    This is a list of links, you can add as many URLs as needed, which will correspond to the text in square brackets from the **text** field, allowing you to insert links anywhere in the text without losing meaning. URLs are listed separated by commas, in the same order as they are used in the **text** field.

  - Field **buttonText**
    ```html
      <script>
        const cookiePopupSettings = {
          buttonText: 'Принять',
        }
      </script>
    ```
    This is the text displayed inside the button with the cookie acceptance functionality. Information about the user clicking the button is stored in LocalStorage.

  - Field **timeoutLoadingBlock**
    ```html
        <script>
          const cookiePopupSettings = {
            timeoutLoadingBlock: '1000',
          }
        </script>
    ```
    This is the delayed loading of the cookie block when the page loads. The cookie block pops up 1 second after the page loads.
    By default, it is set to 1000 milliseconds.


3. How to style the cookie block in the settings:
  Below is a list of fields responsible for styling the elements, followed by an example of using styles (to change the default styles, use the corresponding fields with the values you need):
    - **backgroundColorBlock** - Background of the general cookie block; the color can be specified in any format (HEX, RGB, RGBA, HSL).
    - **maxWidthContainer** - Maximum width of the cookie block.
    - **borderBlock** - Border of the cookie block, specified in the format: border thickness + border style + border color ('1px solid #8787874a').
    - **borderRadiusBlock** - Border radius, can be set in px or %.
    - **boxShadowBlock** - Shadow of the cookie block.
    - **opasityBlock** - Opacity of the block.
    - **colorText** - Color of the main text from the field **text**.
    - **fontSizeText** - Font size of the main text from the field **text**.
    - **widthTextBlock** - Width of the main text from the field **text**.
    - **colorLink** - Color of the link text from the **text** field in square brackets.
    - **colorLinkHover** - Color of the link text on hover from the **text** field in square brackets.
    - **backgroundColorButton** - Background color of the button **buttonText**.
    - **colorTextButton** - Text color of the button **buttonText**.
    - **borderButton** - Border of the **buttonText** button in the format ('1px solid #8787874a').
    - **fontSizeButton** - Font size of the button text **buttonText**.
    - **boxShadowButton** - Shadow of the button **buttonText**.
    - **transformButtonHover** - Button transformation; by default, scaling is applied ('scale(1.05)').

  Example of using styles:
  ```html
    <script>
      const cookiePopupSettings = {
        // Background color
        backgroundColorBlock: '#e0e9fc',
        // Maximum block width
        maxWidthContainer: '500px',
        // Block border
        borderBlock: '1px solid #8787874a',
        // Corner rounding
        borderRadiusBlock: '15px 5px',
        // Block shadow
        boxShadowBlock: '3px 3px 10px #00000073',
        // Block transparency
        opasityBlock: '0.8',
      
        // Text styles
        // Text color
        colorText: '#000',
        // Text size
        fontSizeText: '17px',
        // Text block width
        widthTextBlock: '70%',
      
        // Link styles
        // Link color
        colorLink: '#336aea',
        // Link color on hover
        colorLinkHover: '#08308f',
      
        // Button styles
        // Button background color
        backgroundColorButton: '#336aea',
        // Button text color
        colorTextButton: '#e0e0e0',
        // Button border
        borderButton: 'none',
        // Button text size
        fontSizeButton: '17px',
        // Button shadow
        boxShadowButton: '3px 3px 10px #00000073',
        // Button transformation on mouse hover
        transformButtonHover: 'scale(1.05)'
      }
    </script>
  ```