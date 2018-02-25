/// <reference path="./../libraries/p5.global-mode.d.ts" />

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(200, 52, 20);
}

function draw() {
	noStroke();
	fill(125, 20, 30, 255);
	ellipse(mouseX, mouseY, 30, 30);
}

function mousePressed() {
	background(200, 52, 20);
}