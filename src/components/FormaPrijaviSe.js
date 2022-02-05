import { useState } from 'react'


function FormaPrijaviSe(props) {

    var users = props.users;

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    function handleUsername(e) {
        setUsername(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }


    return (
        <div className="formaprijavise_div">
            <div className="formaprijava">
                <form>
                    <div className="polja">
                        <label>Username: </label>
                        <input type={'text'} id="input_username" className="form-control mt-1 mb-2" value={username} onChange={handleUsername} />
                    </div>
                    <div className="polja">
                        <label>Password: </label>
                        <input type={'password'} className="form-control mt-1 mb-2" value={password} onChange={handlePassword} />
                    </div>
                    <button type="button" className='btn btn-success' id='btn_log' >Login</button>
                </form>
            </div>
        </div >
    );
}

export default FormaPrijaviSe;