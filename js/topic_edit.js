window.onload = (e) => {
    //topicList initialization
    axios
        .get("http://localhost:8080/Proj_Yokult/api/0.01/topic")
        .then((response) => {
            let msg = response.data["msg"];
        if (msg === "success") {
            let topics = response.data["topics"];
            // console.log(topics);
            topics.forEach((topic) => {
                // console.log(topic);
                addList(topic);
            });
        } else {
            console.log(response.data["msg"]);
        }
    })
    .catch((error) => console.log(error));    

    //Remove topic
    $("#topicList").on("click", "#btn_delete_topic", (e) => {
        if (confirm("確定清除嗎?")) {
            let topic_id = $(e.target).closest("tr").data("id");
            console.log(topic_id);
            let removeTopic = {};
            removeTopic["TOPID"] = topic_id;
            console.log(removeTopic);
            axios
                .delete(
                    "http://localhost:8080/Proj_Yokult/api/0.01/topic/remove",
                    { data: removeTopic }
                )
                .then((response) => {
                    let msg = response.data["msg"];
                    if (msg === "success"){
                        $(e.target)
                            .closest("tr")
                            .fadeOut(1000, () => {
                                $(e.target).closest("tr").remove();
                            });
                    } else {
                        console.log(response.data["msg"]);
                    }
                })
                .catch((error) => console.log(error));
        }
    });



    //Revise
    $("#topicList").on("click", "btn_reset_topic", (e) => {
       
            
        let TOPid = addList(topic.topid);
        sessionStorage.setItem("topic_id", TOPid);
        
            
            axios
            .get("")
            .then((response) => {
                let msg = response.data["msg"];
            if (msg === "success") {
                let topics = response.data["topics"];
                console.log(topics);
                topics.forEach((topic) => {
                    addList(topic);
                });
            } else {
                console.log(response.data["msg"]);
            }
        })
        .catch((error) => console.log(error));    
    });

};



function addList(topic){
    let list = `<tr data-id="${topic["topid"]}">
    <td>${topic["topid"]}</td>
    <td>${topic["title"]?? ""}</td>
    <td>${topic["foreword"]?? ""}</td>
    <td>${topic["content"]?? ""}</td>
    <td>${topic["sortid"]?? ""}</td>
    <td>${topic["views"]?? ""}</td>
    <td>${topic["posttime"]?? ""}</td>
    <td>
    <button class="btn-xs btn-light" id="btn_reset_topic">編輯</button>
    <button class="btn-xs btn-light" id="btn_delete_topic">刪除</button>
    </td>
</tr>`;
$("#topicList").append(list);

}





