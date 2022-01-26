import React, { Component } from 'react';
import $ from 'jquery';

export default class Restaurant extends Component{
  jQuerycode=() => {
$(".btn-outline-Restaurant").on("click",function(){
  $(".resultR").css("display","block");
  $(".BigR").css("display","none");
});
  }

  componentDidMount(){
    this.jQuerycode()
  }
    render(){
       return(
        <div className="container-fluid">
            <div className="row pt-2">
            <div className="col-12">
                <h2 className="heading-2 text-light pt-2"> Restaurants</h2>
            </div>
            </div>
            <div className="row pt-4">
             <div className="col-12 col-md-5 text-lg-right text-center">
               <div className="search_field">
               <input type="text" className="input" placeholder="Search Restaurants" />
               <i className="fas fa-search"></i>
               </div>
             </div>
             <div className="col-12 col-md-3 text-center">
             <select name="Distance" id="dist">
                <option value="1KM">1 km</option>
                <option value="5KM">5 km</option>
                <option value="10KM">10 km</option>
             </select>
            </div>
            <div className="col-12 col-md-4 text-lg-left text-center">
            <button className="btn btn-outline-Restaurant btn-lg mb-2" > Search </button>
            </div>
        </div>
        <div className="BigR row pt-2">
          <div className="col-12 d-flex justify-content-center">
          <img id="Search" className="img-fluid"
                src={require("./Searching.jpg")}/>
          </div>
        </div>
        <section className="resultR">
        <div className="row">
          <div className="col-12 col-md-6 pt-5 d-flex justify-content-center">
          <div className="card" style={{width: 350}}>
            <img className="card-img-top" src={require("./Cafe.jpg")}  alt="Card image cap"/>
             <div className="card-body">
             <h5 className="card-title">Kent's Cafe</h5>
             <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page...</p>
             <a href="#" >READ MORE</a>
             </div>
          </div>
          </div>
          <div className="col-12 col-md-6 pt-5 d-flex justify-content-center">
          <div className="card" style={{width: 350}}>
            <img className="card-img-top" src={require("./Cafe.jpg")}  alt="Card image cap"/>
             <div className="card-body">
             <h5 className="card-title">Kent's Cafe</h5>
             <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page...</p>
             <a href="#">READ MORE</a>
             </div>
          </div>
          </div>
          </div>
          <div className="row">
          <div className="col-12 col-md-6 pt-5  d-flex justify-content-center">
          <div className="card" style={{width: 350}}>
            <img className="card-img-top" src={require("./Cafe.jpg")}  alt="Card image cap"/>
             <div className="card-body">
             <h5 className="card-title">Kent's Cafe</h5>
             <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page...</p>
             <a href="#">READ MORE</a>
             </div>
          </div>
          </div>
              <div className="col-12 col-md-6 pt-5  d-flex justify-content-center">
          <div className="card" style={{width: 350}}>
            <img className="card-img-top" src={require("./Cafe.jpg")} alt="Card image cap"/>
             <div className="card-body">
             <h5 className="card-title">Kent's Cafe</h5>
             <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page...</p>
             <a href="#">READ MORE</a>
             </div>
          </div>
          </div>
        </div>
        </section>
      </div>
    )
}
}