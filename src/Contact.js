
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
            let regobj = {  name, subject, email, phone, message };
            fetch("http://localhost:8000/user", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(regobj)
            }).then((res) => {
                toast.success('Mail Sent successfully.')
    
            }).catch((err) => {
                toast.error('Failed :' + err.message);
            });
        
    }
    return (
        <div>
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handlesubmit}>
                    <div className="card">
                        <div className="card-header">
                            <h1>Contact Page</h1>
                        </div>
                        <div className="card-body">

                            <div className="row">
                
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Subject <span className="errmsg">*</span></label>
                                        <input value={subject} onChange={e => subjectchange(e.target.value)} type="subject" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Full Name <span className="errmsg">*</span></label>
                                        <input value={name} onChange={e => namechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Email <span className="errmsg">*</span></label>
                                        <input value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Phone <span className="errmsg"></span></label>
                                        <input value={phone} onChange={e => phonechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                            
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Message</label>
                                        <textarea value={message} onChange={e => messagechange(e.target.value)} className="form-control"></textarea>
                                    </div>
                                </div>
                               

                            </div>

                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Send message!</button> 
                           
                        </div>
                    </div>
                </form>
            </div>


        </div>
    );
}

export default Contact;