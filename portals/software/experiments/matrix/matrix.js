window.onload = matrix;

function matrix()
{
	var objCanvas = document.getElementById("matrix");
	objCanvas.width = window.innerWidth;
	objCanvas.height = window.innerHeight;
	
	var letterSize = 15;
	var columns = objCanvas.width/letterSize;
	
	var Text = "0"
	var Text2 = "1";
	Text = Text.split("");
	Text2 = Text2.split("");
	
	var letters = [];
	for(var i = 0; i < columns; i++)
	{
		letters[i] = 1;
	}
	
	context = objCanvas.getContext("2d");
	
	function draw()
	{
		context.fillStyle = "rgba(0,0,0,0.05)";
		context.fillRect(0,0,objCanvas.width,objCanvas.height);
		
		context.fillStyle = "#0f0";
		context.font = letterSize + "Arial";
		
		for(var i = 0; i < letters.length; i++)
		{
			text = Text;
			text2 = Text2;
			if(i % 2 == 1)
			{
				context.fillText(text, i * letterSize, letters[i] * letterSize);
			}
			else
			{
				context.fillText(text2, i * letterSize, letters[i] * letterSize);
			}
			if(letters[i] * letterSize > objCanvas.height && Math.random() > 0.975)
			{
				letters[i] = 0;
			}
			letters[i]++;
		}
	}
	setInterval(draw, 120);
}