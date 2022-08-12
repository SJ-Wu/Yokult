const member = {};
window.onload = (e) => {
    window.onload = (e) => {
        if (sessionStorage.getItem("token")) {
            window.location.replace("index.html");
        }
    };
};
function registerMsg(msg) {
    if (msg === "Invalid member account") {
        return "帳號已被註冊";
    } else if (msg === "Invalid member email") {
        return "Email已被註冊";
    } else if (msg === "success") {
        return "帳號註冊成功，請收信開通。";
    } else {
        return "未知錯誤";
    }
}

function signUp() {
    const API = URL + MEMBER;
    member["memID"] = document.getElementById("memID").value;
    member["memPassword"] = document.getElementById("memPassword").value;
    member["memEmail"] = document.getElementById("memEmail").value;
    member["memName"] = document.getElementById("memName").value;
    member["memBirth"] = document.getElementById("memBirth").value;
    member["memCellPhone"] = document.getElementById("memCellPhone").value;
    member["memAddress"] = document.getElementById("memAddress").value;
    console.log(member);
    axios
        .post(API + "/register", member)
        .then((response) => {
            console.log(response.data);
            let msg = registerMsg(response.data.msg);
            document.getElementById("login-message").innerText = msg;
        })
        .catch((error) => console.log(error));
}
