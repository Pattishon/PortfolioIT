import React, { Component } from "react";

class Canvas extends Component {
  componentDidMount() {
    const canvas = this.refs.canvas;
    const c = canvas.getContext("2d");

    function Circle(x, y, dx, dy, radius, red, green, blue, alpha) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.radius = radius;
      this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = `rgba(${red},${green},${blue}, ${alpha})`;
        c.fill();
        c.strokeStyle = `rgb(${red},${green},${blue})`;
        c.stroke();
      };
      this.update = function() {
        if (this.x + radius > window.innerWidth || this.x - radius < 0) {
          this.dx = -this.dx;
        }
        this.x += this.dx;
        if (this.y + radius > window.innerHeight || this.y - radius < 0) {
          this.dy = -this.dy;
        }
        this.y += this.dy;
        this.draw();
      };
    }

    let circleArray = [];
    for (let i = 0; i < 50; i++) {
      let radius = 30;
      let x = Math.random() * (window.innerWidth - radius * 2) + radius;
      let dx = Math.random() - 0.5;
      let y = Math.random() * (window.innerHeight - radius * 2) + radius;
      let dy = Math.random() - 0.5;
      let red = Math.random() * 10;
      let blue = Math.random() * 255;
      let green = Math.random() * 150;
      let alpha = Math.random() * 0.7;
      circleArray.push(
        new Circle(x, y, dx, dy, radius, red, green, blue, alpha)
      );
    }

    function animate() {
      requestAnimationFrame(animate);
      c.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
      }
    }

    animate();
  }

  render() {
    return (
      <div className="canvas">
        <canvas
          ref="canvas"
          width={window.innerWidth}
          height={window.innerHeight}
        ></canvas>
      </div>
    );
  }
}

export default Canvas;
