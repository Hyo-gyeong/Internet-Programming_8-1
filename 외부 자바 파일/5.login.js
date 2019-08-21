id = prompt('아이디를 입력하세요');
if(id == 'admin') {
    password = prompt('비밀번호를 입력하세요');
    if(password == '1234') {
        location.href = "login.html"
    }
    else {
        prompt ('비밀번호가 잘못되었습니다.'); // if 문이기 때문에 한 번씩만 사용 가능 -> 로그인 페이지로 넘어가버림
    }
}
else {
    id = prompt('아이디가 존재하지 않습니다.');// if 문이기 때문에 한 번씩만 사용 가능 -> 로그인 페이지로 넘어가버림
    if(id == 'admin') {
        password = prompt('비밀번호를 입력하세요');
        if(password == '1234') {
            location.href = "login.html"
        }
        else {
            prompt ('비밀번호가 잘못되었습니다.');// if 문이기 때문에 한 번씩만 사용 가능 -> 로그인 페이지로 넘어가버림
        }
    }
}