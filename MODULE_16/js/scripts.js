class Shape{
	constructor(color = 'null', initX = 0, initY = 0){
      this.color = color;
      this.initX = initX;
      this.initY = initY;
	}
	getColor(){
      return this.color;
	}
	setColor(val){
       return this.color = val;
	}
	getCoords(){
      return `x: ${this.initX}, y: ${this.initY}`;
	}
	moveTo(newX, newY){
       this.initX = newX;
       this.initY = newY; 
	}
};

class Rectangle extends Shape{
	constructor(color = 'null', initX = 0, initY = 0, initWidth = 0, initHeight =0){
		super(color, initX, initY)
	  this.initWidth = initWidth;
      this.initHeight = initHeight;
	}
	setWidth(newWidth){
       this.initWidth = newWidth;
	}
	setHeight(newHeight){
       this.initHeight = newHeight;
	}
	getDims(){
        return `width: ${this.initWidth}
  height: ${this.initHeight}`
	}
	draw(){
		console.log(`Draving rectangle at:
  (${this.getCoords()})
 With dimention:
  ${this.getDims()}
 Fill with color: ${this.getColor()}`);

	}
};

class Circle extends Shape{
	constructor(color = 'null', initX = 0, initY = 0, initRadius = 0){
       super(color, initX, initX)
      this.initRadius = initRadius;
	}
	getRadius(){
      return this.initRadius; 
	}
	setRadius(val){
      this.initRadius = val;
	}
    draw(){
    	console.log(`Drawing circle at:
  (${this.getCoords()})
 With dimention:
  radius: ${this.getRadius()}
 Fill with color: ${this.getColor()}`);
    }

};

let rect = new Rectangle('#009688', '10', '10', '100', '100');
rect.draw();
let circle = new Circle('#FF5722', '50', '50', '250');
circle.draw();