import React,{ useState } from "react";

const BackendContact2 = () => {

    // const[email,setEmail] = useState("");
    
    // const changeEmail = (e) => {
    //     const inputEmail = e.target.value;
    //     setEmail(inputEmail);       
    // }

    const[inputs,setInputs] = useState({
        email:"",
        password:"",
        memberName:""
    });

    const{email, password, memberName} = inputs;

    const onChange = (e) => {
        const value = e.target.value;
        const id = e.target.id;

        setInputs({
            ...inputs,
            [id]:value
        });

    }

    return (
        <div className="BackendContact2">
            <h1>회원가입 페이지 입니다.</h1>
            <input type="text" id="email" value={email} onChange={onChange} />
            <input type="text" id="password" value={password} onChange={onChange} />
            <input type="text" id="memberName" value={memberName} onChange={onChange} />
            <p>이메일 : {email}</p>
            <p>비밀번호 : {password}</p>
            <p>이름 : {memberName}</p>
        </div>
    );
}

export default BackendContact2;