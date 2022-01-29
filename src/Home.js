import React from 'react';

export default function Home(){
    return(
        <div className="Greetings container-fluid h-100 ">
        <div className="row top-buffer text-center align-items-center h-100" >
            <div className="col-12 col-md-6">
                <img id="Bldg" className="img-fluid"
                src={require("./pics/Bldg.jpg")}/>
            </div>
            <div className="col-12 col-md-6">
                <div className="font-weight-light welcome text-left" style={{ fontFamily: 'Montserrat',fontSize: 70, fontWeight: 'bold' }}>
                Welcome To
                </div>
                <div className="text-left">
                   <h2 id="TypeWriter"> SRM HUB </h2>
                    </div>
                <div className="font-weight-light casual text-left" style={{fontFamily: 'Montserrat',fontSize: 25}} >
                    Find the best notes and restaurant reviews
                </div>
                <div className="Btns row mt-4">
                <div className="col-12 col-md-3 text-md-left text-center">
                <a href="/notes"><button className="btn btn-outline-light-N btn-lg mt-3 mb-2"> Notes </button> </a> 
                </div>  
                <div className="col-12 col-md-9 text-md-left text-center">
                <a href="/restaurants"><button className="btn btn-outline-light btn-lg mt-3 mb-2"> Restaurants </button> </a>
                </div> 
                </div>
            </div>
        </div>
    </div>
    )
}