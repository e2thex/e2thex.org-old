

Drupal.behaviors.heterarchical_taxonomy_tree =function (c) {

  $("a[href^='/taxonomy/term']",c)
  .hover( function() {
    id = $(this).attr("href").split("/").pop();
    frame = document.createElement('div');
    container = document.createElement('a');
    $(container).attr("style","font-size:2em");
    $(frame).addClass("htt-frame").load("/heterarchical-taxonomy-tree/get-branch/"+id,Drupal.attachBehaviors); 
    $(container)
      .attr("href",$(this).attr("href"))
      .addClass("htt-link")
      .html($(this).html())
    ;
    $(this).removeAttr("href").attr("style","position:relative");
    //alert($(frame).html());
    //Drupal.attachBehaviors(frame);
    $(this).html("");
    $(this).append($(container));
    $(this).append($(frame));

    
    },
  function() {
    link = $(this).find(".htt-link");
    $(this).attr("href",link.attr("href"))
    $(this).html(link.html());
    //$(this).find(".htt-frame").remove();
    //$(this).find(".htt-link").remove();
  });
};
/*
  relpaceWith()
  $(c).find(".terms li").hover( 
    function(e) {
      id = $(this).find("a").attr("href").split("/").pop();
      frame = document.createElement('div');
      $(frame).addClass("htt-frame").load("/heterarchical-taxonomy-tree/get-branch/" +id, bindFunctions);
      $(this).append(frame).css("position",  "relative");
    },
    function (){
      $(this).find(".htt-frame").remove();
    }
  );

function bindFunctions(item) {
  $(".htt-frame").find("li").hover( 
    function(e) {
      id = $(this).find("a").attr("href").split("/").pop();
      frame = document.createElement('div');
      $(frame).addClass("htt-frame").load("/heterarchical-taxonomy-tree/get-branch/" +id);
      $(this).append(frame).css("position",  "relative");
    },
    function (){
      $(this).find(".htt-frame").remove();
    }
  );
}
*/