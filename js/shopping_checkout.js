$(window).on("load", () => {
    let orderlist;
    let delivery;
    let payment = {};
    let consignee = {};
    let paymethod;
    sessionStorage.setItem("delivery", "mailing");
    orderlist = JSON.parse(sessionStorage.getItem("orderlist"));
    orderlist.forEach((product) => {
        addList(product);
        // remove unused key
        delete product.proName;
        delete product.proPicture;
    });
    console.log("after:");
    console.log(orderlist);
    delivery = sessionStorage.getItem("delivery");
    getDelivery(delivery);
    subtotal();
    totalaccount();

    // 收貨人同付款
    $("#same-payment").on("click", () => {
        if ($("#same-payment").is(":checked")) {
            payment = getPaymentInfo();
            $("#consignee-name").val(payment["name"]);
            $("#consignee-cellphone").val(payment["cellphone"]);
            $("#consignee-phone").val(payment["phone"] ?? "");
        }
    });

    // 結帳按鈕
    $("#btn-checkout").on("click", () => {
        order = getOrder();
        axios
            .post("http://localhost:8080/Proj_Yokult/Checkout", {
                order,
                orderlist,
            })
            .then((response) => {
                // let msg = response.data["msg"];
                // if (msg === "Success") {
                //     alert("付款成功");
                // } else {
                //     alert("付款失敗");
                // }
                console.log(response);
            })
            .catch((error) => console.log(error));
    });
});

// 取得付款資訊
function getPaymentInfo() {
    let payment = {};
    payment["name"] = $("#payment-name").val();
    payment["cellphone"] = $("#payment-cellphone").val();
    payment["phone"] = $("#payment-phone").val() ?? "";
    payment["creditcard-number"] = $("#payment-creditcard-number").val();
    payment["creditcard-code"] = $("#payment-creditcard-code").val();
    return payment;
}

function getDelivery(delivery) {
    if (delivery === "pickup") {
        $("#delivery").text("0");
    } else if (delivery === "mailing") {
        $("#delivery").text("50");
    } else if (delivery === "shipping") {
        $("#delivery").text("100");
    }
}

// 取得訂單資訊
function getOrder() {
    let order = {};
    order["memid"] = "TGA002"; //TODO: Should synced with login info.
    order["paymethod"] = $('input[name="payment"]:checked').val();
    order["receipter"] = $("#consignee-name").val();
    order["cellphone"] = $("#payment-cellphone").val();
    order["phone"] = $("#consignee-phone").val() ?? "";
    order["addr"] =
        $("#consignee-city option:selected").val() +
        $("#consignee-dist option:selected").val();
    return order;
}

//計算總和
function totalaccount() {
    let total = 0;
    total += parseInt($("#subtotal").text());
    total += parseInt($("#delivery").text());
    $("#total").text(total);
}

// 計算小計
function subtotal() {
    let subtotal = 0;
    $(".total_price").each((i, e) => {
        subtotal += parseInt($(e).text());
    });
    $("#subtotal").text(subtotal);
}

function addList(order) {
    let list = `
    <li class="product_list     
    data-id="${order["proID"]}" 
    data-name="${order["proName"]}"
    data-quantity="${order["quantity"]}"
    data-price="${order["proPrice"]}">
    商品名稱：
    <span>${order["proName"]}</span>
    <ul>
        <li>價格：$<span>${order["proPrice"] ?? ""}</span></li>
        <li>數量：<span>${order["quantity"] ?? ""}</span></li>
        <li>小計：$<span class="total_price">${
            order["proPrice"] * order["quantity"]
        }</span>></li>
    </ul>
    </li>`;
    $("#orderlist").append(list);
}
