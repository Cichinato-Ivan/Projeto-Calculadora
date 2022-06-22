class CalcController {

    constructor(){
        
        this._displayCalcEl = document.querySelector("#display")
        this._dateEl = document.querySelector("#data")
        this._timeEl = document.querySelector("#hora")
        this._currentDate
        this.initialize()

    }

    initialize(){

        this._dateEl.innerHTML = "21/06/2022"
        this._timeEl.innerHTML = "23:30"

    }

    get displayCalc(){
        return this._displayCalcEl.innerHTML
    }

    set displayCalc(valor){
        this._displayCalcEl.innerHTML = valor
    }

    get currentDate(){
        return this._currentDate
    }

    set currentDate(valor){
        this._currentDate = valor
    }

}