// Circle.js

class Circle {
    constructor(radius) {
      this._radius = radius;
    }
  
    // Getter and Setter for radius
    get radius() {
      return this._radius;
    }
    set radius(value) {
      this._radius = value;
    }
  
    // Getter for diameter
    get diameter() {
      return this._radius * 2;
    }
  
    // Getter for circumference
    get circumference() {
      return 2 * Math.PI * this._radius;
    }
  
    // Getter for area
    get area() {
      return Math.PI * this._radius ** 2;
    }
  
    // Setter for diameter
    set diameter(value) {
      this._radius = value / 2;
    }
  
    // Setter for circumference
    set circumference(value) {
      this._radius = value / (2 * Math.PI);
    }
  
    // Setter for area
    set area(value) {
      this._radius = Math.sqrt(value / Math.PI);
    }
  }
  
  module.exports = Circle;
  