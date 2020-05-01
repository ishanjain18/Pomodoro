

                        function timeractivate{{i}}(){
                            var d = new Date();
                            var countDownDate = d.getTime() + 1500000;


                          // Update the count down every 1 second
                            var x = setInterval(function() {

                            // Get today's date and time
                            var now = new Date().getTime();


                            // Find the distance between now and the count down date
                            var distance = countDownDate - now;


                            // Time calculations for days, hours, minutes and seconds

                            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                            // Output the result in an element with id="timer"
                            document.getElementById("timer{{i}}").innerHTML = minutes + "m " + seconds + "s ";

                            // If the count down is over, write some text
                            if (distance < 0) {
                              clearInterval(x);
                              document.getElementById("timer{{i}}").innerHTML = "COMPLETED";
                              let src = '/static/sound.mp3';
                              let audio = new Audio(src);
                              audio.play();
                              alert("PomoDoro Complete, Start Another!")
                            }
                          }, 1000);
                        }