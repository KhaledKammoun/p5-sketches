let test = true , t=0 ;
var ball={
  x : 300 , y : 200 , xspeed : 8 , yspeed : -4 
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  
  if (test = true){
     
  let rx = mouseX ;
  background(0);
  fill(255) ;
  noStroke() ;
  ellipse (ball.x, ball.y, 50) ;
  ball.x+=ball.xspeed ;
  ball.y+=ball.yspeed ;
  rectMode(CENTER) ;
  rect(rx,height-100,100,10) ;
  if (ball.x <25 || ball.x >(width-25))
    ball.xspeed*=(-1) ;
    
  if (ball.y>(height) ) {
      background(0) ;
      textSize(50) ;
      text("You Lost ! ",width/2-100,height/2)  ;test =false ;t++ ;
    
  //timer to play again
  if (t==100){
    test = true ;
  t=0 ;ball.x=300 ; ball.y=200 ; ball.xspeed=8 ; ball.yspeed=-4 ;}}
    
  if (ball.y <25 ||(ball.y >(height-135) && (ball.x<50+rx)) && ball.x>(rx-50))
    ball.yspeed*=(-1) ;
  }
  
    
  
  
  
}