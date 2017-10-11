var socket = io();

socket.on('connect', function() {
  console.log('Connected to server');
});

socket.on('disconnect', function() {
  console.log('Lost connection to server');
});

// Custom event
socket.on('newMessage', function (message) {
  console.log('Got new Message: ', message);
  var li = jQuery('<li></li>');
  li.text(`${message.from}: ${message.text}`);

  jQuery('#messages').append(li);
});

jQuery('#message-form').on('submit', function (e) {
  e.preventDefault();

  socket.emit('createMessage', {
    from: 'jQuery User',
    text: jQuery('input[name=message]').val()
  }, function () {

  });
});
