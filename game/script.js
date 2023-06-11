var matrix = [
    [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 2, 0,],
    [0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0,],
    [0, 2, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0,],
    [0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 2, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 2, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,],
    [0, 0, 1, 0, 0, 1, 0, 2, 0, 0, 3, 4, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0,],
    [0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 2, 0, 0, 1, 2, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0,],
    [0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,],
    [0, 0, 1, 0, 0, 0, 0, 3, 1, 4, 2, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 2, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0,],
    [1, 1, 0, 0, 0, 1, 1, 2, 0, 5, 0, 5, 1, 0, 0, 0, 0, 1, 0, 3, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 3, 3, 3, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 2, 0,],
    [0, 0, 0, 0, 1, 0, 0, 1, 1, 5, 5, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 2, 0, 0, 0, 0, 3, 1, 0, 1, 1, 0, 1, 0, 3, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0,],
    [0, 0, 1, 0, 0, 3, 1, 1, 0, 1, 0, 0, 0, 2, 0, 3, 0, 2, 0, 0, 0, 0, 1, 0, 0, 4, 1, 2, 0, 1, 1, 1, 0, 1, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0,],
    [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 5, 4, 1, 0, 4, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,],
    [0, 0, 1, 0, 0, 0, 0, 3, 1, 0, 2, 4, 1, 4, 0, 2, 2, 4, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 2, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0,],
    [2, 1, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 1, 0, 4, 2, 2, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 4, 1, 2, 2, 3, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 2, 2,],
    [0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 2, 0, 4, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 2, 0, 0, 1, 2, 1, 0, 0, 1, 1, 1,],
    [0, 0, 2, 0, 1, 0, 0, 1, 0, 0, , 0, 0, 1, 5, 5, 4, 5, 0, 0, 1, 0, 1, 0, 0, 0, 1, 2, 2, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 2, 0,],
    [1, 0, 1, 2, 2, 0, 0, 0, 1, 0, 2, 0, 1, 0, 0, 5, 5, 1, 1, 1, 0, 0, 2, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 2, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1,],
    [0, 0, 3, 0, 3, 1, 0, 2, 0, 3, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 2, 3, 2, 1, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,],
    [0, 1, 3, 5, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0,],
    [0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1,],
    [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0,],
    [2, 0, 1, 0, 0, 0, 0, 0, 1, 0, 2, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 2, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1,],
    [1, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0,],
];

var grassArr = [];
var side = 30;
var grassEaterArr = [];
var predatorArr = [];
var virusArr = [];
var getArr = [];

function preload () {
    nkar = loadImage('https://media.istockphoto.com/id/535983237/photo/beautiful-green-grass-pattern-from-golf-course.jpg?s=612x612&w=0&k=20&c=EsWZu1jXQ2AJ5kkNp-jUu6ZmlYwdqHbqZCEtRHVWslE=')
    grasEaterImage = loadImage('data:image/jpeg;base64,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')

    predatorImage = loadImage("data:image/jpeg;base64,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")

    virusImage = loadImage("https://www.cdc.gov/dotw/covid-19/images/main_928px.jpg?_=48481")

    getImage = loadImage("data:image/jpeg;base64,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")
    

}


function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var grEater = new GrassEater(x, y, 2)
                grassEaterArr.push(grEater)
            }
            else if (matrix[y][x] == 3) {
                var grPredator = new Predator(x, y, 3)
                predatorArr.push(grPredator)
            }

            else if (matrix[y][x] == 4) {
                var grVirus = new Virus(x, y, 4)
                virusArr.push(grVirus)
            }

            else if (matrix[y][x] == 5) {
                var grGet = new Get(x, y, 5)
                getArr.push(grGet)
            }

        }
    }

}


function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                image(nkar, x*side, y*side, side, side)
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 2) {
               
                image(grasEaterImage, x*side, y*side, side, side)
            }

            else if (matrix[y][x] == 3) {
                image(predatorImage, x*side, y*side, side, side)
            }

            else if (matrix[y][x] == 4) {
                
                image(virusImage, x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 5) {
                
                image(getImage, x * side, y * side, side, side);
            }

        }
    }


    for (var i in grassArr) {
        grassArr[i].mul()
    }

    for (var i in grassEaterArr) {
        grassEaterArr[i].mul()
        grassEaterArr[i].move()
        grassEaterArr[i].eat()
        grassEaterArr[i].die()
    }

    for (var i in predatorArr) {
        predatorArr[i].mul()
        predatorArr[i].move()
        predatorArr[i].eat()
        predatorArr[i].die()
    }

    for (var i in virusArr) {
        virusArr[i].mul()
        virusArr[i].move()
        virusArr[i].eat()
        virusArr[i].die()
    }

    for (var i in getArr) {
        getArr[i].mul()
        
    }

    if (grassArr.length == 0) {
        for (var i = 0; i < 40; i++) {
            var x = floor(random(matrix[0].length - 1))
            var y = floor(random(matrix.length - 1))
            matrix[y][x] = 1;
            var gr = new Grass(x, y, 1)
            grassArr.push(gr)
        }
    }
    if (grassEaterArr.length == 0) {
        for (var i = 0; i < 40; i++) {
            var x = floor(random(matrix[0].length - 1))
            var y = floor(random(matrix.length - 1))
            matrix[y][x] = 2;
            var gr = new GrassEater(x, y, 2)
            grassEaterArr.push(gr)
        }
    }


    if (predatorArr.length == 0) {
        for (var i = 0; i < 10; i++) {
            var x = floor(random(matrix[0].length - 1))
            var y = floor(random(matrix.length - 1))
            matrix[y][x] = 3;
            var gr = new Predator(x, y, 3)
            predatorArr.push(gr)
        }
    }

    if (virusArr.length == 0) {
        for (var i = 0; i < 1; i++) {
            var x = floor(random(matrix[0].length - 1))
            var y = floor(random(matrix.length - 1))
            matrix[y][x] = 4;
            var gr = new Virus(x, y, 4)
            virusArr.push(gr)
        }
    }


    if (getArr.length == 0) {
        for (var i = 0; i < 2; i++) {
            var x = floor(random(matrix[0].length - 1))
            var y = floor(random(matrix.length - 1))
            matrix[y][x] = 4;
            var gr = new Get(x, y, 4)
            getArr.push(gr)
        }
    }
    
}
