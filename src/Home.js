import React from 'react';

export default function Home(){
    return(
        <div className="Greetings container-fluid h-100 mb-5 mt-100">
        <div className="row top-buffer text-center align-items-center h-100" >
            <div className="col-12 col-md-6">
                <img id="Bldg" className="img-fluid"
                src={require("./pics/Bldg.jpg")}/>
            </div>
            <div className="col-12 col-md-6">
                <div className="font-weight-light welcome" style={{fontSize: 70}}>
                Welcome To
                </div>
                <div>
                   <h2 id="TypeWriter"> SRM HUB </h2>
                    </div>
                <div className="font-weight-light casual" style={{fontSize: 30}} >
                    Find the best notes and restaurant reviews
                </div>
                <div className="Btns row">
                <div className="col-12 col-md-6 text-lg-right text-center">
                <a href="/restaurants"><button className="btn btn-outline-light btn-lg mt-3 mb-2"> Restaurants </button> </a>
                </div>  
                <div className="col-12 col-md-6 text-lg-left text-center">
                <a href="/notes"><button className="btn btn-outline-light btn-lg mt-3 mb-2"> Notes </button> </a>
                </div> 
                </div>
            </div>
        </div>
    </div>
    )
}