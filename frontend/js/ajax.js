$.ajax(method: "get",
  url: /api/problems,
  data: { "{id,title,content,options[]}" }
})  .done(function( ) {
    
  });
}
.fail(function(){alert("Request Error")})
 
};
