describe('Кейс авторизации:', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); // на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // ввел логин
         cy.get('#pass').type('iLoveqastudio1'); // ввел пароль
         cy.get('#loginButton').click(); // нажал войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // авторизован
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // виден крестик
    })

    it('Логика восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // на сайт
        cy.get('#forgotEmailButton').click(); // кнопка забыли пароль
        cy.get('#mailForgot').type('ryan@goskling.ru'); // любая почта
        cy.get('#restoreEmailButton').click(); // отправлен код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // авторизован
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // виден крестик
   })
   
   it('Правильный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio26');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
})
    it('Неверынй логин и правельный пароль', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('ryan@goskling.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
})
    it('Валидация на наличие @', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
})
    it('Строчные буквы', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();ы
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
})
 // 1 зд
 // план
 // Найти поле логин и ввести логин
 // Найти поле пароль и ввести пароль
 // найти кнопку войти нажать войти
 // проверить авторизацию

 // 2 зд
 //Нажать «Забыли пароль»
 //Ввести любой имейл
 //Проверка, что получили нужный текст и есть кнопка крестика

  // 3 зд
 // Ввести правильный логин
 // Ввести НЕ правильный пароль
 // Нажать войти
 // Проверить нужный текст и наличие кнопки крестик