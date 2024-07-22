class Shape {
    constructor() {
    }
}
class Circle extends Shape {
    constructor() {
    super();
    this.render = function(lgTxt, lgTxtColor, lgShpColor) {
        let output = `<svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <style type="text/css">
        
            </style>
        </defs>
              <rect width="35" height="35" x="7.5" y="8"
            stroke-width="1"
            fill="${lgShpColor}"
            />
            <text fill="${lgTxtColor}" text-anchor="middle" dominant-baseline="middle" x="25" y="26.5" class="text">${lgTxt}</text>
            <text style="font-size:2; letter-spacing:1.5;" fill="${lgTxtColor}" text-anchor="middle" dominant-baseline="middle" x="26" y="35.5" class="text">EST. 2024</text>
        </svg>`
        return output;};

    }
}
class Triangle extends Shape {
    constructor() {
    super();
    this.render = function(lgTxt, lgTxtColor, lgShpColor) {
        let output = `<svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <style type="text/css">
        
            </style>
        </defs>
              <rect width="35" height="35" x="7.5" y="8"
            stroke-width="1"
            fill="${lgShpColor}"
            />
            <text fill="${lgTxtColor}" text-anchor="middle" dominant-baseline="middle" x="25" y="26.5" class="text">${lgTxt}</text>
            <text style="font-size:2; letter-spacing:1.5;" fill="${lgTxtColor}" text-anchor="middle" dominant-baseline="middle" x="26" y="35.5" class="text">EST. 2024</text>
        </svg>`
        return output;};

    }
}
class Square extends Shape {
    constructor(lgTxt, lgTxtColor, lgShpColor) {
    super();
    this.render = function(lgTxt, lgTxtColor, lgShpColor) {
        let output = `<svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <style type="text/css">
        
            </style>
        </defs>
              <rect width="35" height="35" x="7.5" y="8"
            stroke-width="1"
            fill="${lgShpColor}"
            />
            <text fill="${lgTxtColor}" text-anchor="middle" dominant-baseline="middle" x="25" y="26.5" class="text">${lgTxt}</text>
            <text style="font-size:2; letter-spacing:1.5;" fill="${lgTxtColor}" text-anchor="middle" dominant-baseline="middle" x="26" y="35.5" class="text">EST. 2024</text>
        </svg>`
        return output;};
    }
}

module.exports = {
    Shape,
    Circle,
    Triangle,
    Square
};  