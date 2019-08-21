id = prompt('아이디를 입력하세요');
if (id != 'cdkrcd8') {
    while (id != 'cdkrcd8') {
        id = prompt('아이디가 존재하지 않습니다.');

        if (id == 'cdkrcd8') {
            break;
        }
    }
    pw = prompt('비밀번호를 입력하세요');
    while (pw != 'gyrud516@') {
        pw = prompt('비밀번호가 잘못되었습니다.');

        if (pw == 'gyrud516@') {
            break;
        }
    }
    location.href = "login.html"
}
else {
    pw = prompt('비밀번호를 입력하세요');
    while (pw != 'gyrud516@') {
        pw = prompt('비밀번호가 잘못되었습니다.');

        if (pw == 'gyrud516@') {
            break;
        }
    }
}
location.href = "login.html"