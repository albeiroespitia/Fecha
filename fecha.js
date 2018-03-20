class Fecha{
	constructor(day,month,year){
		this.day = day;
		this.month = month;
		this.year = year; 
	}

	get day () {
        return this.day
    }

    get month () {
        return this.month
    }

    get year () {
        return this.year
    }

    leapYear(){
    	if ((((this.year%100)!=0)&&((this.year%4)==0))||((this.year%400)==0)){
		 	console.log("El año es biciesto")
		}else {
			console.log("El año no es biciesto")
		}
    }

    plus7Days(){

    }

    validateDate(){

    }


}