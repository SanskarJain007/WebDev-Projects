<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stopwatch</title>
    <link href="./Stopwatch.css" rel="stylesheet">
</head>
<body>
  <h1>Modern Stopwatch</h1>
  <h2> using JavaScript</h2>
  <div class="wrapper">
    <div class="stopwatch">
        <input type="button" value="Start" onclick="Start()">
        <input type="button" value="Pause" onclick="Pause()">
        <input type="button" value="Stop" onclick="Stop()">
        <input type="button" value="Restart" onclick="Restart()">
        <input type="button" value="Lap" onclick="Lap()">
        <input type="button" value="ResetLap" onclick="ResetLap()">
    </div>
    <div class="Time">
        00::00::00
    </div>
    <ol class="laps"></ol>
    <script>
        var mil=0, s=0, min=0;
        var timer;

        var watchtime=document.querySelector('.Time');
        var lapvalues=document.querySelector('.laps');

        function Start(){
            if(!timer){
            timer=setInterval(runtime, 10);
            }
        }
        function runtime(){
            watchtime.textContent=(min<10?"0"+min:min)+":"+(s<10?"0"+s:s)+":"+(mil<10?"0"+mil:mil);
            mil++;
            if(mil==100){
                mil=0;
                s++;
            }
            if(s==60){
                s=0;
                min++;
            }
        }
        function Pause(){
            stime();
        }
        function Stop(){
            stime();
            min=0;
            s=0;
            mil=0;
            getTimer();
        }
        function getTimer(){
            return (watchtime.textContent=(min<10?"0"+min:min)+":"+(s<10?"0"+s:s)+":"+(mil<10?"0"+mil:mil));
        }
        function stime(){
            clearInterval(timer);
            timer=false;
        }
        function Restart(){
            Stop();
            Start();
        }
        function Lap(){
            if(timer){
                var l=document.createElement("li");
                l.innerText=getTimer();
                lapvalues.appendChild(l);
            }
        }
        function ResetLap(){
            lapvalues.innerHTML="";
        }
    </script>
  </div>
</body>
</html>
