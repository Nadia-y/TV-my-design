const $uiAccordion = $('.js-ui-accordion');

$uiAccordion.accordion({
  collapsible: true,
  heightStyle: 'content',

  activate: (event, ui) => {
    const newHeaderId = ui.newHeader.attr('id');

    if (newHeaderId) {
      history.pushState(null, null, `#${newHeaderId}`);
    }
  },

  create: (event, ui) => {
    const $this = $(event.target);
    const $activeAccordion = $(window.location.hash);

    if ($this.find($activeAccordion).length) {
      $this.accordion('option', 'active', $this.find($this.accordion('option', 'header')).index($activeAccordion));
    }
  }
});

$(window).on('hashchange', event => {
  const $activeAccordion = $(window.location.hash);
  const $parentAccordion = $activeAccordion.parents('.js-ui-accordion')

  if ($activeAccordion.length) {
    $parentAccordion.accordion('option', 'active', $parentAccordion.find($uiAccordion.accordion('option', 'header')).index($activeAccordion));
  }
});

var show=function(state){
document.getElementById('modal').style.display = state;
document.getElementById('filter').style.display = state;
}


// $(document).ready(function() {

// 	$("#form_one").submit(function() {
// 		$.ajax({
// 			type: "POST",
// 			url: "mail.php",
// 			data: $(this).serialize()
// 		}).done(function() {
// 			$(this).find("input").val("");
// 			alert("Спасибо за заявку! Мы свяжемся с Вами в течении 30 минут");
// 			$("#form_one").trigger("reset");
// 		});
// 		return false;
// 	});
	
// });

// $(document).ready(function() {

// 	$("#form").submit(function() {
// 		$.ajax({
// 			type: "POST",
// 			url: "mail.php",
// 			data: $(this).serialize()
// 		}).done(function() {
// 			// $(this).find("input").val("");
// 			" location.href = 'thank-you.html'; "
// 			$("#form").trigger("reset");
// 		});
// 		return false;
// 	});
	
// });
