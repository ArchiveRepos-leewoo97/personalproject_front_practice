import React, { useState } from 'react';

const BackendContact = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [memberName,setMemberName] = useState("");
    const [nickName,setNickName] = useState("");
    const [age,setAge] = useState(0);
    const [sex,setSex] = useState("");

    const fetchData = (e) => {

    }

    const sexChange = (e) => {
        const inputSex = e.target.value;

        switch(inputSex) {
            case '남자':
                setSex(1);
                break;
            case '여자':
                setSex(2);
                break;
            case '비공개':
                setSex(0);
                break;
            default:
                setSex(null);
        }
    }


    return (
        <div className='Member'>
            <h1>회원가입</h1>
            
                <input name='email' value={email} />
                <input name='password' value={password} />
                <input name='memberName' value={memberName} />
                <input name='nickName' value={nickName} />
                <input name='age' type='number' value={age} />
                <button name='sexMale' value='남자'>남자</button>
                <button name='sexFemale' value='여자'>여자</button>  
                <button name='sexPrvt' value='비공개'>비공개</button>   
             

        </div>
    );

}

export default BackendContact;