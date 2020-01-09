function close_display() {
    var x = document.getElementsByClassName('btn-close');
    console.log(test)
    if(x.style.display != "block")
        x.style.display = "none";
}

$('.myPopover').popover({
    html: true,
    content: function () {
      var elementId = $(this).attr("data-popover-content");
      return $(elementId).html();
    }
});
  