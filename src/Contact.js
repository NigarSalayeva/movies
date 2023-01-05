
import { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {

    const [subject, subjectchange] = useState("");
    const [name, namechange] = useState("");
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");
    const [message, messagechange] = useState("");


    const handlesubmit = (e) => {
            e.preventDefault();
            let data = {  name, subject, email, phone, message };
            fetch("http://localhost:8000/user", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(data)
            });
            subjectchange('');
    namechange('');
    emailchange('');
    phonechange('');
    messagechange('');
    }
    return (
        <div >
            <div  className="offset-lg-3 col-lg-6">
                <form style={{marginTop:"15px"}} className="container" onSubmit={handlesubmit}>
                    <div style={{backgroundColor:"#F8F4EA", borderRadius:"15px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}className="card">
                        <div style={{backgroundColor:"#3C2317", borderRadius:"10px"}} className="card-header">
                            <h1 id="center" style={{color: "white"}}><b>Contact Us</b></h1>
                        </div>
                        <div className="card-body">

                            <div className="row">
                
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label><b>Subject</b></label>
                                        <input value={subject} onChange={e => subjectchange(e.target.value)} type="subject" className="form-control"placeholder="Subject"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label><b>Full Name</b> </label>
                                        <input value={name} onChange={e => namechange(e.target.value)} className="form-control" placeholder="Your Name"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label><b>Email</b></label>
                                        <input value={email} onChange={e => emailchange(e.target.value)} className="form-control" placeholder="sample@gmail.com"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label><b>Phone </b></label>
                                        <input value={phone} onChange={e => phonechange(e.target.value)} className="form-control" placeholder="+994-XX-XXX-XX-XX"></input>
                                    </div>
                                </div>
                            
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label><b>Message</b></label>
                                        <textarea value={message} onChange={e => messagechange(e.target.value)} className="form-control" placeholder="Type here..."></textarea>
                                    </div>
                                </div>
                               

                            </div>

                        </div>
                        <div className="card-footer">
                            <button style={{backgroundColor:"black", color:"white", width:"100%"}}  type="submit" className="btn btn-primary">Send message!</button> 
                           
                        </div>
                    </div>
                </form>
            </div>


        </div>
    );
}

export default Contact;