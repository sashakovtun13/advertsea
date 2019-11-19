
  $(function(){

    // ███████████
    // █───█────██
    // ██─██─██──█
    // ██─██─██──█
    // ██─██─██──█
    // █───█────██
    // ███████████
    let theMAin=$(".theMain");

    let services_key=$("#services_key");
    let cases_key=$("#cases_key");
    let about_key=$("#about_key");
    let contacts_key=$("#contacts_key");
    
    let services_value=$(".services_value");
    let cases_value=$(".cases_value");
    let about_value=$(".about_value");
    let contacts_value=$(".contacts_value");
    
    let mas_key=[services_key,cases_key,about_key,contacts_key];
    let mas_value=[services_value,cases_value,about_value,contacts_value];

// ███─████─███─████─█─█─███─█──█─████
// ──█─█──█─█───█──█─█─█───█─█─█──█──█
// ███─████─█───████─███─███─██───████
// ──█─█──█─█───█──────█───█─█─█──█──█
// ███─█──█─█───█────███─███─█──█─█──█


// ████─███─████─████─█──█─█──█─█──█──█───█
// █──█──█──█──█─█──█─█──█─█──█─█──█──█───█
// █─────█──████─████─████─█─██─█──█──███─█
// █──█──█──█────█──█─█──█─██─█─█──█──█─█─█ 
// ████──█──█────█──█─█──█─█──█─█████─███─█


//считывание из URL значения
    function getGet() {
      var s = window.location.search;
      s = s.match(new RegExp(name + '=([^&=]+)'));
      return s ? s[1] : false;
    }

    for(let f=0;f<mas_value.length;f++){
      if(getGet()!=mas_value[f].attr("class")){
        mas_value[f].css("display","none");

      }
      else{
        
        theMAin.css("display","none");
        mas_value[f].css("display","block");
        for(let col=0;col<mas_key.length;col++){
          if(mas_key[col].attr("value")!=mas_value[f].attr("class")){
            mas_key[col].css("color","black")
          }
          else{
            mas_key[col].css("color","#2B968F") 
          }
        }
    }
  }






  // █──█──████──███─███
  // █──█──█──██─█────█
  // █──█──████──███──█
  // █──█──█──██─█────█
  // █████─████──███──█
  
  
  // █──█
  // █──█
  // █─██
  // ██─█
  // █──█
  
  
  // ████───██─████─█──█
  // █─────█─█─█──█─█─█
  // ████─█──█─█──█─██
  // █──█─█──█─█──█─█─█
  // ████─█──█─████─█──█

$("#nav_ul li").click(function (e) { 
  e.preventDefault();
  for(let i=0;i<mas_key.length;i++){
    if(mas_key[i].attr("id")!=this.id){
     mas_key[i].css("color","black")
     
    }
    else{
      mas_key[i].css("color","#2B968F") 
      for(let a=0;a<mas_value.length;a++){
          if(mas_value[a].attr("class")!=mas_key[i].attr("value")){
            mas_value[a].css("display","none");
          }
      
      else{
        theMAin.css("display","none");
        mas_value[a].css("display","block");
        updateURL(mas_value[a].attr("class"));
      }
    }
  }
}
});




//Добавление в URL строку значения

    function updateURL(keys) {
      if (history.pushState) {
          var baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
          var newUrl = baseUrl + '?page='+keys;
          history.pushState(null, null, newUrl);
      }
      else {
          console.warn('History API не поддерживается');
      }
  }
    //Карусель Off
    $('#carousel-example-1z').each(function(){
      $(this).carousel({
          interval: false
      });
  });
  });

