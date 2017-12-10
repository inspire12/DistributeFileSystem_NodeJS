
//fileList 만
$("#listButton").click(function(){
  $.ajax({
  type : "GET",
  url : "http://168.188.123.48:9998/",
  dataType : "jsonp",    //옵션이므로 JSON으로 받을게 아니면 안써도 됨
  success : function(result) {
  //통신이 성공적으로 이루어졌을 때 처리하고 싶은 함수
    var sp = result.fileList;
    var split = sp.split('\n');
    split.sort();
    console.log(split);
    $('#innerlist').empty(); // 다 비워
    for(var i = 1; i < split.length; i++){
      var tmp = (split[i].split("/")[1]);
        var eachButton = $("<button id = " +i +' onclick ="readFile('+ "'" + tmp +"'"+')"></button>').text(split[i]);
        $('#innerlist').append(eachButton);
    }
  },
  complete : function(result){
  //통신이 실패했어도 완료가 되었을 때 처리하고 싶은 함수
  // alert(result);
  },
  error : function(xhr, status, error) {
  //에러가 발생했을 때 처리하고 싶은 함수
    alert("error"+ xhr+status+error);    //경고창 띄움
  }
  });
});

var writeFile = function(id){
  content = $("#fileContent").val();
  $.ajax({
    type:"GET",
    url:"http://168.188.123.48:9998/fileWrite?id=" + id+"&content="+ content,
    dataType : "jsonp",
    success : function(result) {
    //통신이 성공적으로 이루어졌을 때 처리하고 싶은 함수
      var tmp = $("#fileContent").val();
      console.log(tmp);

    },
    complete : function(result){
    //통신이 실패했어도 완료가 되었을 때 처리하고 싶은 함수
    // alert(result);
    },
    error : function(xhr, status, error) {
    //에러가 발생했을 때 처리하고 싶은 함수
    }
  });
};

var readFile = function(id){
  $.ajax({
    type:"GET",
    url:"http://168.188.123.48:9998/fileRead?id=" + id,
    dataType : "jsonp",
    success : function(result) {
    //통신이 성공적으로 이루어졌을 때 처리하고 싶은 함수
      alert(result.fileContent);
      $("#fileContent").val(result.fileContent);
      $("#fileContentWrite").attr("onclick", "writeFile("+"'"+id+"'" +")");

    },
    complete : function(result){
    //통신이 실패했어도 완료가 되었을 때 처리하고 싶은 함수
    // alert(result);
    },
    error : function(xhr, status, error) {
    //에러가 발생했을 때 처리하고 싶은 함수
    }
  });
};

//write
