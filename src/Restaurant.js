import React from 'react';


export default function Restaurant(){
    return(
        <div className="container-fluid">
            <div className="row pt-2">
            <div className="col-12">
                <h2 className="heading-2 text-light pt-2"> Restaurants</h2>
            </div>
            </div>
            <div className="row pt-4">
             <div className="col-12 col-md-4 text-right">
               <div className="search_field">
               <input type="text" className="input" placeholder="Search Restaurants" />
               <i className="fas fa-search"></i>
               </div>
             </div>
             <div className="col-12 col-md-4 text-right">
             <div class="dropdown">
               <div class="default_option">All</div>  
                <ul>
                  <li>All</li>
                  <li>Recent</li>
                  <li>Popular</li>
                </ul>
               </div>
             </div>
            </div>
        </div>
    )
}