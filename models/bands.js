const Band = require("./band");


class Bands {

    constructor() {
        this.bands = [];
    }

    addBand( band = new Band() ) {
        this.bands.push( band );
    }

    getBands() {
        console.log('ENTRO EN EL ACTIVE BANDS');
        return this.bands;
    }

    deleteBand( id = '' ) {
        this.bands = this.bands.filter( band => band.id !== id );
        return this.bands;
    }

    voteBand( id = '' ) {
      console.log('ENTRO voteBand');
        this.bands = this.bands.map( band => {

            if ( band.id === id ) {
                band.votes++;
                return band;
            } else {
                return band;
            }

        });
        console.log(this.bands);

    }

}


module.exports = Bands;