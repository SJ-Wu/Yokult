window.onload = (e) => {
    if (sessionStorage.getItem("token")) {
        // window.location.replace("/index.html");
    }
};
function login() {
    let memID = document.getElementById("memID").value;
    let memPassword = document.getElementById("memPassword").value;
    // console.log(memID);
    // console.log(memPassword);
    const loginURL = URL + MEMBER + "/login";
    const token = sessionStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    axios
        .post(loginURL, {
            memID: memID,
            memPassword: memPassword,
        })
        .then((response) => {
            if (response.status === 200) {
                sessionStorage.setItem("token", response.data["msg"]);
                console.log(response.data);
            } else {
                alert("登入失敗");
            }
        })
        .catch((error) => console.log(error));
}
