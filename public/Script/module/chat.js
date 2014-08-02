(function() {
	var chat = angular.module('chat', []);
	chat.controller("ChatController", [ '$http', function($http) {
		var obj = this;
		var submit=function(){
			var input=$("#chat");
			var message = input.val();
			updateView(message);
			input.val('');
			socket.emit('new message', message);
		};
		var updateView=function(msg){
			var list = $('#list-message');
			list.append($('<dt>').html("Someone said:"));
			
			var spliteds=msg.split('\n');
			$(spliteds).each(function(i,o){
				list.append($('<dd>').html(o||"&nbsp;"));
			});
			list.scrollEnd();
		};
		var socket = io();
		socket.on('new message', function(data) {
			updateView(data.message);
		});
		obj.send = function() {
			submit();
		};
		obj.keydown=function(e){
			if(e.keyCode==13){
				if(!e.shiftKey){
					submit();
				}
			}
		};
	} ]);
})();