const render = function (playerData) {
    $("#player-info").empty()
   let source = $("#player-template").html()
   let template = Handlebars.compile(source)
   let newHTML = template({playerData})
   $("#player-info").append(newHTML)
}


const fetch = function () {
    let teamName = $("#inpt").val()
        $.get(`/teams/${teamName}`, function (data) {
          console.log(data)
          render(data)
    })
}




