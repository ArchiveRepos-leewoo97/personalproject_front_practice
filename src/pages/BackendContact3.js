import React, {useState,useEffect} from "react";

const BackendContact3 = () => {

    const fetchData = () => {
        fetch('http://localhost:8080/member/signup')
        .then((response) => response.json())
        .then((data) => setInputs(data));
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const text = e.target.value;
        fetch('http://localhost:8080/member/signup',{
            method:"POST",
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(inputs)
        })
    }

    const[inputs,setInputs] = useState({
        email:"",
        password:"",
        memberName:"",
        nickName:"",
        age:"",
        sex:""
    });

    const {email,password,memberName,nickName,age,sex} = inputs;

    const onChange = (e) => {
        const value = e.target.value;
        const id = e.target.id;

        setInputs({
            ...inputs,
            [id]:value
        });
    }

    return (
        <div className="SignUp">
            <form onSubmit={onSubmitHandler}>
                <input type="text" id="email" value={email} onChange={onChange} />
                <input type="text" id="password" value={password} onChange={onChange} />
                <input type="text" id="memberName" value={memberName} onChange={onChange} />
                <input type="text" id="nickName" value={nickName} onChange={onChange} />
                <input type="text" id="age" value={age} onChange={onChange} />
                <input type="text" id="sex" value={sex} onChange={onChange} />
                <button type="submit">회원가입</button>
            </form>
            <p>{email}</p>
            <p>{password}</p>
            <p>{memberName}</p>
            <p>{nickName}</p>
            <p>{age}</p>
            <p>{sex}</p>
        </div>
    );
}

export default BackendContact3;