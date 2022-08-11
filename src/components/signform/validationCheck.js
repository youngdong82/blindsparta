export const ValidationCheck = (Pw, PwConfirm) => {

    let regExpPw = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,15}$/;

    if(!regExpPw.test(Pw)){
        alert('비밀번호는 8~15자의 영문, 숫자 조합이어야 합니다!');
        return false;
    }

    if(Pw !== PwConfirm) {
        alert('입력한 두 비밀번호가 일치하지 않습니다!');
        return false;
    }

    return true;
}