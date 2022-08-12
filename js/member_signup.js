const member = {};
window.onload = (e) => {
    const API = URL + MEMBER;
    document.getElementById("btn_signup").addEventListener("click", () => {
        member["memID"] = document.getElementById("memID").value;
        member["memPassword"] = document.getElementById("memPassword").value;
        member["memEmail"] = document.getElementById("memEmail").value;
        member["memName"] = document.getElementById("memName").value;
        member["memBirth"] = document.getElementById("memBirth").value;
        member["memCellPhone"] = document.getElementById("memCellPhone").value;
        // member["memPhone"] = document.getElementById("memPhone").value;
        member["memAddress"] = document.getElementById("memAddress").value;
        console.log(member);
        axios
            .post(API + "/register", member)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => console.log(error));
    });
};
