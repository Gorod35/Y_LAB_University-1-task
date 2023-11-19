class Api {
    constructor({ baseUrl }) {
        this._baseUrl = baseUrl;
    }


    login(values) {
        console.log(`Успешная авторизация с почтой: "${values.email}" и паролем "${values.password}"`)
    }
}

const mainApi = new Api({
    // создаём экземляр класса работающего с API сервера
    baseUrl: 'https://demo.test',
});

export default mainApi;