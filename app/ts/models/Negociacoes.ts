class Negociacoes {

    private _negociacoes: Array<Negociacao> = []; /*podemos usar tb negociacao [] = [] */

    /*método adiciona que recebe uma negociacao do tipo Negociacao */
    adiciona(negociacao: Negociacao){

        this._negociacoes.push(negociacao);
    }

    /*Método para acesso a essa lista de negociacoes */
    paraArray(): Negociacao[] {

        return [].concat(this._negociacoes);
    }
}