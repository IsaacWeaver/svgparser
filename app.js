var button = document.getElementById('button');
var svg = document.getElementById('svg');
var svg = svg.getAttribute('d');
var svgSplit = svg.split(" ");
var svgCommands = [];
console.log(svgSplit);
for (var i = 0; i < svgSplit.length; i++){
    var command = svgSplit[i].charAt(0);
    if(command == "M"){
        var value = svgSplit[i].substring(1,svgSplit[i].length);
        var cords = value.split(",");
        svgCommands.push({
            key: "M",
            value: cords
        });
    }
    if(command == "L"){
        var value = svgSplit[i].substring(1,svgSplit[i].length);
        var cords = value.split(",");
        svgCommands.push({
            key: "L",
            value: cords
        });
    }
    if(command == "C"){
        var value1 = svgSplit[i].substring(1,svgSplit[i].length);
        var value2 = svgSplit[i+1];
        var value3 = svgSplit[i+2];
        var cords1 = value1.split(",");
        var cords2 = value2.split(",");
        var cords3 = value3.split(",");
        var cords = [cords1, cords2, cords3];
        svgCommands.push({
            key: "C",
            value: cords
        });
    }
    if(command == "Z"){
        svgCommands.push({
            key: "Z",
            value: ""
        });
    }
}

console.log(svgCommands);

//TODO: 
/*
    Move all y cordinates to total height as scrolling down the page. Grab amount to change each part by this formula:
    desiredYValue - CurrentYValue / totalScrollValueBeforeFinished
*/