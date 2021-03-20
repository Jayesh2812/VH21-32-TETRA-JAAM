
// function CardiologistList(){
//     return (
        
//     )
// }

// https://www.google.com/search?q=cardiologist+near+me&rlz=1C1CHBD_enIN920IN920&sxsrf=ALeKk038j_O0iAUpeQhslDNL1-T5F29nCA%3A1616169335454&ei=d8lUYKmQG6iW4-EPo8iRyA8&oq=cardio&gs_lcp=Cgdnd3Mtd2l6EAMYADIKCAAQsQMQyQMQQzIFCAAQkgMyBQgAEJIDMgcIABCxAxBDMgQIABBDMgcIABCxAxBDMgYIABAKEEMyBAgAEEMyBAgAEEMyBAgAEEM6BwgjELADECc6CAgAEJIDELADOgcIABCwAxBDOgcIIxDqAhAnOgQIIxAnOggIABCxAxCDAToKCC4QxwEQowIQQzoKCAAQsQMQgwEQQzoHCAAQyQMQQzoKCC4QxwEQrwEQQ1DrmS5Y568uYPjLLmgCcAJ4AIABuAKIAc0MkgEFMi02LjGYAQCgAQGqAQdnd3Mtd2l6sAEKyAEKwAEB&sclient=gws-wiz


// export default CardiologistList

import React, { Component } from 'react'
import './css/Cardiologist.css'
import './css/Output.css'

export class CardiologistList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             latitude:null,
             longitude:null
        }
        this.getLocation = this.getLocation.bind(this);
        this.getCordinates = this.getCordinates.bind(this);
    }
    getLocation(){
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.getCordinates);
        } else {
          alert("Geolocation is not supported by this browser.");
        }
      }
    getCordinates(position){
        this.setState({
            latitude:position.coords.latitude,
            longitude:position.coords.longitude
        })

    // initMap(){
    //     var location = {lat:latitude, lng:longitude};
    //     var map = new google.maps.Map(document.getElementById("map"),{
    //         zoom:4,
    //         center:location
    //     })
    // }
    }



    render() {
        return (
            <div>
            {/* <h1>Working of Geolocation</h1> */}
            {/* <button onClick={this.getLocation}>Get Coordinates</button> */}
            <h1>{this.state.latitude}</h1>
            <h1>{this.state.longitude}</h1>
            {/* https://www.google.com/maps/embed/v1/place?key=AIzaSyANkBIHcqJdLSJ-cX7Qdu1huVD9dhSfFys
    &q=Space+Needle,Seattle+WA */}
    {/* https://www.google.com/maps/search/?api=1&query=pizza+seattle+wa */}
    {/* https://www.google.com/maps/dir/?api=1&origin=Space+Needle+Seattle+WA&destination=Pike+Place+Market+Seattle+WA&travelmode=bicycling */}
            <iframe src="https://www.google.com/maps/dir/?key=AIzaSyANkBIHcqJdLSJ-cX7Qdu1huVD9dhSfFys
    &origin=latitude+longitude&destination=cardio+hospital" className="map"></iframe>
            <h2 className="title">Top Cardiology hospitals</h2>
            {/* <div></div> */}
            <div className="hospitals">
            <p><a href="https://www.apollohospitals.com/">Appolo Hospital</a></p>
            <p><a href="https://www.fortisescorts.in/">Fortis Escorts Heart Institute</a></p>
            <p><a href="https://www.jaypeehealthcare.com/">Jaypee Hospital</a></p>
            <p><a href="https://www.medanta.org/">Medanta, The Medicity</a></p>
            </div>


            </div>
            // <div id="map"></div>
        )
    }
}

export default CardiologistList


// API_key=AIzaSyANkBIHcqJdLSJ-cX7Qdu1huVD9dhSfFys
// AIzaSyANkBIHcqJdLSJ-cX7Qdu1huVD9dhSfFys