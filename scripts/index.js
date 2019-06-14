$(document).ready(function() {

  // YOUR CODE GOES HERE

  var $form = $('#name-form');
  console.log($form);

  $form.on('submit', function(event) {
  	event.preventDefault();
  	console.log(event);

  	var $input = $form.find('.name-input');
  	var val = $input.val();
  	console.log(val);

  	$input.val('');

  	var $div = $('<div class="list-item flex"></div>');
  	var $p = $('<p>' + val + '</p>');
  	var $remove = $('<button class="remove-button">Remove</button>');

  	$div.append($p);
  	$div.append($remove);

  	var $textContainer = $('.text-container');
	$textContainer.append($div);

  });

  $(document).on('click', '.remove-button', function(){
  	console.log('remove');

		var $buttonClicked = $(this);
		var $closestDiv = $buttonClicked.closest('.list-item');
		$closestDiv.remove();
  	});


// var $p = $('<p>' + val + '</p>');
// $p.text('Im am the paragraph');
// var $h3 = $('<h3>I am a title</h3>');

// var $textContainer = $('.text-container');
// $textContainer.append($h3);
// $textContainer.append($p);

// $('.remove-this').remove();

// var $container = $('.container-paragraph').closest('.container');

// $(document).on('click', 'button', function(){
// 	alert('I was clicked through the document!');
// });

// var $button =$('<button>Second Button</button>');
// $('.button-container').append($button);

});
