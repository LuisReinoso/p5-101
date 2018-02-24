/// <reference path="./../libraries/p5.global-mode.d.ts" />

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	// cambiar color de fondo
	background(0, 255, 0);

	// rectangulo
	rect(100, 100, 50, 50, 10, 10, 10,10);

	// elipse
	ellipse(200, 100, 50, 50);

	// linea
	line(10, 20, 25, 35);

	// arco
	arc(300, 300, 200, 100, 5, 10);

	// punto
	point(30, 30);

	// cuadrilatero
	fill(25, 100, 200, 255);
	quad(38, 31, 86, 20, 69, 63, 30, 76);

	// triangulo
	fill(102, 25, 155, 255);
	triangle(240, 275, 258, 220, 286, 275);
}