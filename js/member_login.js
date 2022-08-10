window.onload = (e) => {
    document.getElementById("btn_login").addEventListener("click", () => {
        let memID = document.getElementById("memID").value;
        let memPassword = document.getElementById("memPassword").value;
        // console.log(memID);
        // console.log(memPassword);
        axios
            .post("http://localhost:8080/yokult/api/0.02/member/login", {
                memID: memID,
                memPassword: memPassword,
            })
            .then((response) => {
                if (response.status === 201) {
                    console.log(response.data);
                    let member = response.data;
                    let name = member["memName"];
                    alert(`${name}歡迎`);
                } else {
                    alert("登入失敗");
                }
            })
            .catch((error) => console.log(error));
    });
};
