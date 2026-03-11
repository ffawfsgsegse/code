 let taikhoan = prompt (` Mời nhập tài khoản`);
    let matkhau = prompt (` Mời nhập mật khẩu`);

    if ( taikhoan === "admin" && matkhau === "123"){
        alert (` Đăng nhập thành công`);
    }else {
        alert (` Đăng nhập thất bại`);
    }