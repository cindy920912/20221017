function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(0);
  rectMode(CENTER)//設定方塊座標點以中心點為座標
  ellipse(25,25,50)//在座標為(x,y)產生一個50直徑的圓
  noFill(0)//不充滿顏色

  //fill//充滿顏色為
  stroke(255)//框線顏色為白色
  //整個指令使左上角產生一個白色"255"的圓(背景為黑色"0")

  var w=mouseX/10
  for(var j=0 ;j<height/50;j++)
  {
   {
    for(var i=0 ;i<width/50;i++)
   ellipse(25+50*i,25+50*j,mouseX/10)
		 	stroke("#0080FF")
   rect(25+50*i,25+50*j,mouseY/4)
		 	stroke("##FFD1A4")
   ellipse(50+50*i,50+50*j,mouseY/10)
	 stroke("#FFDC35")}	

   }
}