import { useState } from 'react'


function FormaContactPage(props) {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');

    function handleNameInput(e) {
        setName(e.target.value)
    }

    function handlePhoneNumberInput(e) {
        setPhoneNumber(e.target.value)
    }

    function handleMessageInput(e) {
        setMessage(e.target.value)
    }


    return (
        <div className="formacontactpage_div">
            <form id="formacontact_div">
                <div className="div-l-i">
                    <label>Name: </label>
                    <input type={'text'} className="form-control mt-2 mb-2" value={name} onChange={handleNameInput} />
                </div>
                <div className="div-l-i">
                    <label>Phone number: </label>
                    <input type={'text'} className="form-control mt-2 mb-2" value={phoneNumber} onChange={handlePhoneNumberInput} />
                </div>
                <div className="div-l-i">
                    <label>Message: </label>
                    <textarea className="form-control mt-3 mb-3" value={message} onChange={handleMessageInput} />
                </div>
                <button type="button" id='btn_send' onClick={() => props.send(name, phoneNumber, message)} className='btn btn-success' >Send</button>
            </form>
        </div>
    );

}

export default FormaContactPage;