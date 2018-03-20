class Fecha{
	constructor(day,month,year){
		if(this.validateDate(`${day}/${month}/${year}`)){
			this.day = day;
			this.month = month;
			this.year = year; 
		}else{
			console.log("fecha no es valida")
		}
		
	}

	get day () {
        return this._day
    }

    get month () {
        return this._month
    }

    get year () {
        return this._year
    }

    set day(value) {
	    this._day = value;
	}

	set month(value) {
	    this._month = value;
	}

	set year(value) {
	    this._year = value;
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

    validateDate(fecha){
	    var fechaf = fecha.split("/");
        var d = fechaf[0];
        var m = fechaf[1];
        var y = fechaf[2];
        return m > 0 && m < 13 && y > 0 && y < 32768 && d > 0 && d <= (new Date(y, m, 0)).getDate();
    }


}