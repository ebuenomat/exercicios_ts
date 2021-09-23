class Negociacoes {
    constructor() {
        this._negociacoes = []; /*podemos usar tb negociacao [] = [] */
    }
    /*método adiciona que recebe uma negociacao do tipo Negociacao */
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    /*Método para acesso a essa lista de negociacoes */
    paraArray() {
        return [].concat(this._negociacoes);
    }
}
