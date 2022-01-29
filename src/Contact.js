import React, { Component } from 'react';
import $ from 'jquery';

export default function Contact(){
    return(
<div className="container contact-form">
            <div className="contact-image">
                <img src={require("./pics/wave-hello.gif")}/>
            </div>
            <form method="post">
                <h3>Drop Us a Message</h3>
               <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" name="txtName" className="form-control" placeholder="Your Name *" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="txtEmail" className="form-control" placeholder="Your Email *"/>
                        </div>
                        <div className="form-group">
                            <input type="text" name="txtPhone" className="form-control" placeholder="Your Phone Number *"  />
                        </div>
                        {/* <div className="form-group">
                            <input type="submit" name="btnSubmit" className="btnContact" value="Send Message" />
                        </div> */}
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <textarea name="txtMsg" className="form-control" placeholder="Your Message *" style={{height: 150}}></textarea>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                <div className="col-12 text-center">
                <div className="form-group">
                            <input type="submit" name="btnSubmit" className="btnContact" value="Send Message" />
                </div> 
                </div>
                </div>
            </form>
</div>
    )
}