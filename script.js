$(document).ready(function () {
    $('#go').click(function () {
        var name = $('#myName').val();
        if (name.trim() !== "") {
            $('#nameToDisplay').html(name);
            $('#prompt').addClass("hidden");
            $('#result').removeClass("hidden");
            function createConfetti() {
                var confetti = $('<div class="confetti"></div>');
                var startX = Math.random() * (window.innerWidth -100 );
                var rotate = Math.random() * 360;
            
                confetti.css({
                  left: startX + 'px',
                  transform: 'rotate(' + rotate + 'deg)',
                });
            
                $('#confetti-container').append(confetti);
                
                if (confetti.position().left >= window.innerWidth){
                  confetti.remove();
                }
                setTimeout(function() {
                  confetti.remove();
                }, 2000); // Adjust the duration as needed
              }
            
              function launchConfetti() {
                setInterval(function() {
                  createConfetti();
                }, 100);
              }
            
              launchConfetti();
        }
        else {
            alert("Please enter your name");
        }
    });

});