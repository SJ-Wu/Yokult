window.onload = (e) => {
    document.getElementById("btn_login").addEventListener("click", () => {
        let memID = document.getElementById("memID").value;
        let memPassword = document.getElementById("memPassword").value;
        // console.log(memID);
        // console.log(memPassword);
        axios
            .post("http://localhost:8080/Yokult/member/login", {
                memID: memID,
                memPassword: memPassword,
            })
            .then((response) => {
                let msg = response.data["msg"];
                let username = response.data["userName"];
                if (msg === "success") {
                    alert(`${username}歡迎`);
                } else {
                    alert("登入失敗");
                }
            })
            .catch((error) => console.log(error));
    });
};
