window.onload = () => {
    axios
        .post("http://localhost:8080/yokult/api/0.02/member/login", {
            memID: "TGA004",
            memPassword: "123",
        })
        .then((response) => {
            console.log(response.data);
            let msg = response.data["msg"];
            if (msg === "success") {
                let member = {};
                member = response.data["member"];
                console.log(member);
                addList(member);
            }
        });
    $("#memberInfo").on("click", "#btn_modify_member", (e) => {
        let member = {};
        member["memID"] = document.getElementById("mem_id").value;
        member["memName"] = document.getElementById("mem_name").value;
        member["memEmail"] = document.getElementById("mem_email").value;
        member["memCellPhone"] = document.getElementById("mem_cellphone").value;
        member["memBirth"] = document.getElementById("mem_birth").value;
        member["memAddress"] = document.getElementById("mem_address").value;
        axios.defaults.headers.post["Content-Type"] =
            "application/json;charse=UTF-8";
        axios
            .put("http://localhost:8080/yokult/api/0.02/member/modify", member)
            .then((response) => {
                let msg = response.data["msg"];
                if (msg === "success") {
                    alert("更新成功");
                }
            });
    });
};
function addList(member) {
    let list = `
<label for="mem_id" class="form-label">帳號</label>
    <div class="input-group mb-3">
        <input type="text" id="mem_id" class="form-control" value="${
            member["memID"] ?? ""
        }" disabled/>
    </div>
    <label for="mem_name" class="form-label">姓名</label>
    <div class="input-group mb-3">
        <input type="text" id="mem_name" class="form-control" placeholder="請輸入姓名" value="${
            member["memName"] ?? ""
        }"/>
        <div class="input-group-append">
            <div class="input-group-text" style="height: 100%">
                <span class="fas fa-user"></span>
            </div>
        </div>
    </div>
    <label for="mem_email" class="form-label">信箱</label>
    <div class="input-group mb-3">
        <input type="email" id="mem_email" class="form-control" placeholder="請輸入信箱" value="${
            member["memEmail"] ?? ""
        }"/>
    <div class="input-group-append">
        <div class="input-group-text" style="height: 100%">
            <span class="fa fa-envelope-open"></span>
        </div>
    </div>
</div>

<label for="mem_cellphone" class="form-label">手機號碼</label>
<div class="input-group mb-3">
    <input type="text" id="mem_cellphone" class="form-control" placeholder="手機號碼" value="${
        member["memCellPhone"] ?? ""
    }"/>
    <div class="input-group-append">
        <div class="input-group-text" style="height: 100%">
            <span class="fa fa-phone-alt"></span>
        </div>
    </div>
</div>
<label for="mem_birth" class="form-label">出生日期</label>
<div class="input-group mb-3">
    <input type="date" id="mem_birth" class="form-control" placeholder="出生日期" value="${
        member["memBirth"] ?? ""
    }"/>
    <div class="input-group-append">
        <div class="input-group-text" style="height: 100%">
            <span><i class="fa fa-calendar"></i></span>
        </div>
    </div>
</div>

<label for="mem_address" class="form-label">居住地址</label>
<div class="input-group mb-3">
    <input type="text" id="mem_address" class="form-control" placeholder="居住地址" value="${
        member["memAddress"] ?? ""
    }"/>
    <div class="input-group-append">
        <div class="input-group-text" style="height: 100%">
            <span class="bi-geo-alt"></span>
        </div>
    </div>
</div>
<button type="button" class="btn btn-primary" id="btn_modify_member">修改</button>`;
    $("#memberInfo").append(list);
}
