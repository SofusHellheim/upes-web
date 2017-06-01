function adjustPopover(popover, iframe) {
	var height = iframe.contentWindow.document.body.scrollHeight + 'px',
		popoverContent = $(popover).next('.popover-content');

    iframe.style.height=height;
	popoverContent.css('height', height);
}

$(document).ready(function() {
   $('.pop-right').popover({ 
       title : 'Loading External File',
       html : true,
       placement : "right",
       content: function() {
           return '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.1564895422357!2d-89.19673978561538!3d13.70897029037519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f633093f5014653%3A0x69c904dc54e6ffbb!2sUniversidad+Polit%C3%A9cnica+de+El+Salvador!5e0!3m2!1ses-419!2ssv!4v1496088528008" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>';    
           }
    });
});