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
    console.log(split)
    for(var i = 0; i < split.length; i++){
        $('#fileList').append(result.fileList);
    }
  },
  complete : function(result){
  //통신이 실패했어도 완료가 되었을 때 처리하고 싶은 함수
//    alert(result);
  },
  error : function(xhr, status, error) {
  //에러가 발생했을 때 처리하고 싶은 함수
    alert("error"+ xhr+status+error);    //경고창 띄움
  }
  });
});

$("fileList").click(function(){
  $.ajax({
  type : "GET",
  url : "http://168.188.123.48:9998/",
  dataType : "jsonp",    //옵션이므로 JSON으로 받을게 아니면 안써도 됨
  success : function(result) {
  //통신이 성공적으로 이루어졌을 때 처리하고 싶은 함수
    $('#fileList').append(result.fileList);
  },
  complete : function(result){
    //통신이 실패했어도 완료가 되었을 때 처리하고 싶은 함수
    //alert(result);
  },
  error : function(xhr, status, error) {
  //에러가 발생했을 때 처리하고 싶은 함수
    alert("error"+ xhr+status+error);    //경고창 띄움
  }
  });
});
