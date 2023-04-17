import React, { useState } from 'react';
import { user } from '../../common/models/user';

interface LoginProps {
    toProducts: () => void
    onCheck: (userItem: user) => void
}


const LogInForm = ({toProducts, onCheck}: LoginProps) => {

    let [userItem, setUserItem] = useState<user>({
        username: "", userpwd: ""});
    let user="";
    let pwd="";
    let newUserItem = {username: "", userpwd: ""};

    const getName = (event:any) => {
        user = event.currentTarget.value;
        newUserItem = {...userItem,username:user };
        setUserItem(newUserItem);
    }
    const getPWD = (event:any) => {
        pwd = event.currentTarget.value;
        newUserItem = {...userItem, userpwd:pwd };
        setUserItem(newUserItem);
    }
   
    const onsubmit = (event: any) => {
        event.preventDefault();
    }
    return (
        <div>
            <h1>Login Form</h1>
            <div>
                <form onSubmit={onsubmit}>
                    <div className="form-group m-2">
                        <label htmlFor="tfname">Name</label>
                        <input className="form-control"
                               type="text"
                               id="tfname"
                               name="tfName"
                               onChange={getName}
                        />
                    </div>
                    <div className="form-group m-2">
                        <label htmlFor="type">Password</label>
                        <input className="form-control"
                               type="password"
                               id="tfpwd"
                               name="tfPwd"
                               onChange={getPWD}
                        />
                    </div>

                    <div className="form-group m-2">
                        <button className="btn btn-primary" onClick={() => onCheck(userItem)}>Einloggen</button>
                        <div>
                        <button className="btn btn-secondary mt-2" onClick={toProducts}>Übersicht</button>
                        </div>
                    </div>

                </form>


            </div>
        </div>
    );
};



export default LogInForm;