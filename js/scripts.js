var triangle = function(side1, side2, side3){
  if(side1>=(side2+side3) || side2>=(side1+side3) || side3>=(side1+side2)){
    return "non-triangle shape.";
  }else if(side1 === side2 && side2 === side3){
    return "equilateral.";
  }else if(side1===side2 || side2===side3 || side1===side3){
    return "isosceles.";
  }else if (side1!=side2 && side2!=side3 && side1!=side3){
    return "scalene.";
  }
};


$(function(){
  $("#dimensions").submit(function(event){
     userInputS1 = parseInt($(length1).val());
     userInputS2 = parseInt($(length2).val());
     userInputS3 = parseInt($(length3).val());
     $(".results").fadeOut("fast");

     whatType = triangle(userInputS1, userInputS2, userInputS3);

    $("span.triangleType").text(whatType);

    $(".results").toggle(function(){
      $(this).fadeIn("slow");
    });
    event.preventDefault();
  });
});
