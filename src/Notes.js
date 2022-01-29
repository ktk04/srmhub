import React, { Component } from 'react';
import $ from 'jquery';

export default class Notes extends Component{
  jQuerycode=() => {
$(".btn-outline-Notes").on("click",function(){
  $(".resultN").css("display","block");
  $(".BigN").css("display","none");
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
                <h2 className="heading-2 text-light text-lg-left text-center pt-2"> Notes</h2>
            </div>
            </div>
            <div className="row pt-4">
             <div className="col-12 col-md-5 text-lg-right text-center">
               <div className="search_field">
               <input type="text" className="input" placeholder="Search Notes" />
               </div>
             </div>
             <div className="col-12 col-md-3 text-center">
             <select name="Distance" id="dist">
                <option value="1">Semester 1</option>
                <option value="2">Semester 2</option>
                <option value="3">Semester 3</option>
                <option value="4">Semester 4</option>
                <option value="5">Semester 5</option>
                <option value="6">Semester 6</option>
                <option value="7">Semester 7</option>
                <option value="8">Semester 8</option>
                
             </select>
            </div>
            <div className="col-12 col-md-4 text-lg-left text-center">
            <button className="btn btn-outline-Notes btn-lg mb-2" > Search </button>
            </div>
        </div>
        <div className="BigN row pt-2">
          <div className="col-12 d-flex justify-content-center">
          <img id="Search" className="img-fluid"
                src={require("./pics/Searching.jpg")}/>
          </div>
        </div>
        <section class="resultN">
        <div className="row">
          <div className="col-12 col-md-6 pt-5 d-flex justify-content-center">
          <div className="card" style={{width: 350, height:150}}>
             <div className="card-body">
             <h5 className="card-title">Data Structures</h5>
             <p className="card-text">26th Jan 2022</p>
             <a href="#" >Download</a>
             </div>
          </div>
          </div>
          <div className="col-12 col-md-6 pt-5 d-flex justify-content-center">
          <div className="card" style={{width: 350, height:150}}>
             <div className="card-body">
             <h5 className="card-title">Data Structures</h5>
             <p className="card-text">26th Jan 2022</p>
             <a href="#" >Download</a>
             </div>
          </div>
          </div>
          </div>
          <div className="row">
          <div className="col-12 col-md-6 pt-5 d-flex justify-content-center">
          <div className="card" style={{width: 350, height:150}}>
             <div className="card-body">
             <h5 className="card-title">Data Structures</h5>
             <p className="card-text">26th Jan 2022</p>
             <a href="#" >Download</a>
             </div>
          </div>
          </div>
          <div className="col-12 col-md-6 pt-5 d-flex justify-content-center">
          <div className="card" style={{width: 350, height:150}}>
             <div className="card-body">
             <h5 className="card-title">Data Structures</h5>
             <p className="card-text">26th Jan 2022</p>
             <a href="#" >Download</a>
             </div>
          </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 pt-5 d-flex justify-content-center">
          <div className="card" style={{width: 350, height:150}}>
             <div className="card-body">
             <h5 className="card-title">Data Structures</h5>
             <p className="card-text">26th Jan 2022</p>
             <a href="#" >Download</a>
             </div>
          </div>
          </div>
          <div className="col-12 col-md-6 pt-5 d-flex justify-content-center">
          <div className="card" style={{width: 350, height:150}}>
             <div className="card-body">
             <h5 className="card-title">Data Structures</h5>
             <p className="card-text">26th Jan 2022</p>
             <a href="#" >Download</a>
             </div>
          </div>
          </div>
        </div>
        </section>
      </div>
    )
}
}