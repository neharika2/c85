
canvas=document.getElementById('myCanvas')
ctx=canvas.getContext("2d")
//Create a reference for canvas 
greencar_width=75;
greencar_height=100;
//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greencar_x=5;
geencar_y=225;
function add() {
	 background_imgTag= new Image();
	 background_imgTag.onload=uploadBackground;
	 background_imgTag.src=background_image;
	 background_imgTag= new Image();
	 background_imgTag.onload=uploadgreencar;
	 background_imgTag.src=greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag,greencar_x,greencar_y,greencar.width,greencar.height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
if (greencar_y>=0)	
{
greencar_y=greencar_y-10;
console.log("when up arrow pressed, x="+greencar_x+"|y="+greencar_y);
uploadBackground();
uploadgreencar();
}
}

function down()
{
	if (greencar_y<=100)	
{
greencar_y=greencar_y-10;
console.log("when down  arrow key pressed, x="+greencar_x+"|y="+greencar_y);
uploadBackground();
uploadgreencar();
}
}

function left()
{
	if (greencar_x>=0)	
{
greencar_y=greencar_y-10;
console.log("when left arrow key pressed, x="+greencar_x+"|y="+greencar_y);
uploadBackground();
uploadgreencar();
}
	
}

function right()
{
	if (greencar_y<=75)	
{
greencar_y=greencar_y+10;
console.log("when right arrow key pressed, x="+greencar_x+"|y="+greencar_y);
uploadBackground();
uploadgreencar();
}
}
