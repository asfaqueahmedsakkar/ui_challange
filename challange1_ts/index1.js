class PositionRotationTween {
    constructor(element) {
        this.element = element;
        element.style.cssText += 'position:fixed;';
    }

    lerp = (a, b, alpha) => {
        var c = b - a;
        return a + alpha * c;
    }
}

var leaf1Positions = [
    [25, -12],
    [20, -2],
    [35, -2],
    [10, -10],
    [-8, 30],
]

var leaf1height = [140, 180, 90, 140, 140]

var leaf1Rotation = [
    310,
    360,
    310,
    270,
    140,
]

var leaf2Positions = [
    [65, 15],
    [85, -8],
    [78, 16],
    [70, -10],
    [85, -10],
]

var leaf2height = [
    120,
    100,
    140,
    160,
    160
]

var leaf2Rotation = [
    160,
    320,
    160,
    210,
    140
]

var leaf3Positions = [
    [25, 73],
    [20, 82],
    [16, 63],
    [-8, 28],
    [-8, 85],
]

var leaf3height = [
    120,
    160,
    120,
    160,
    160
]

var leaf3Rotation = [
    80,
    60,
    -10,
    -120,
    -40
]

var leaf4Positions = [
    [55, 62],
    [75, 14],
    [63, 80],
    [-45, 80],
    [-47, 80],
]

var leaf4height = [
    110,
    160,
    110,
    110,
    110,
]

var leaf4Rotation = [
    80,
    140,
    80,
    80,
    80,
]

var leaf5Positions = [
    [100, 100],
    [55, 62],
    [65, -14],
    [-45, -14],
    [-45, -14],
]

var leaf5height = [
    140,
    110,
    110,
    110,
    110,
]

var leaf5Rotation = [
    230,
    80,
    70,
    230,
    230,
];

var leafPositions = [
    leaf1Positions, leaf2Positions, leaf3Positions, leaf4Positions, leaf5Positions
];

var leafRotations = [
    leaf1Rotation, leaf2Rotation, leaf3Rotation, leaf4Rotation, leaf5Rotation
];

var leafHeights = [
    leaf1height, leaf2height, leaf3height, leaf4height, leaf5height
];

var spritePositions = [
    50, -50, -50, 25, 25, -50
];

var spritePositionsY = [
    50, 50, 50, 50, 50, 150
];

var liptonPositions = [
    150, 50, -50, 25, 50, 50
];


var liptonPositionsY = [
    50, 50, 50, 50, 50, 150
];


var fantaPositions = [
    150, 150, 50, 25, 75, 150
];


var fantaPositionsY = [
    50, 50, 50, 50, 50, 150
];

var bottlePositionsX = [spritePositions, liptonPositions, fantaPositions];
var bottlePositionsY = [spritePositionsY, liptonPositionsY, fantaPositionsY];



var lemon1Positions = [
    60, -40, -40, 90, 90, -25
];

var lemon1PositionsY = [
    67, 67, 67, 85, -25, -25,
];

var lemon2Positions = [
    40, -60, -60, 35, 25, -50,
];

var lemon2PositionsY = [
    27, 27, 27, 75, 25, 150
];

var apple1Positions = [
    160, 60, -40, 90, 90, -25
];

var apple1PositionsY = [
    67, 67, 67, 85, -25, -25,
];

var apple2Positions = [
    140, 40, -60, 35, 50, 50,
];

var apple2PositionsY = [
    27, 27, 27, 75, 25, 150
];

var orrange1Positions = [
    160, 160, 60, 90, 90, -25
];

var orrange1PositionsY = [
    67, 67, 67, 85, -25, -25,
];

var orrange2Positions = [
    140, 140, 40, 35, 75, 150,
];

var orrange2PositionsY = [
    27, 27, 27, 75, 25, 150
];

var fruitsPositionsX = [lemon1Positions, lemon2Positions, apple1Positions, apple2Positions, orrange1Positions, orrange2Positions]

var fruitsPositionsY = [lemon1PositionsY, lemon2PositionsY, apple1PositionsY, apple2PositionsY, orrange1PositionsY, orrange2PositionsY]

let detailsBg = ['#00440A', '#6B4500', '#7C1F00'];
let detailsCircle = ['#037044', '#cd8800', '#e36f00'];
let detailsButton = ['#009c59', '#f9bf01', '#f88729'];
let title = ['SPRITE', 'LIPTON', 'FANTA'];

let mainBody = document.getElementsByClassName("main-body")[0];

let sliderItem = document.getElementsByClassName('slider')[0];
let mySlider = new Slider(sliderItem);
mySlider.pageSnapping = true;

let leafeItems = document.getElementsByClassName('leaf');
let leaves = [];
Array.from(leafeItems).forEach(e => {
    leaves.push(new PositionRotationTween(e));
});


let spriteBot = document.getElementsByClassName('sprite')[0];
let fantaBot = document.getElementsByClassName('fanta')[0];
let liptonBot = document.getElementsByClassName('lipton')[0];

var bottles = [spriteBot, liptonBot, fantaBot];

let lemon1 = document.getElementById("lemon1");
let lemon2 = document.getElementById("lemon2");

let orrange1 = document.getElementById("orrange1");
let orrange2 = document.getElementById("orrange2");

let apple1 = document.getElementById("apple1");
let apple2 = document.getElementById("apple2");

var fruits = [lemon1, lemon2, apple1, apple2, orrange1, orrange2,];

let mainBodyHeight = mainBody.offsetHeight;
let mainBodyWidth = mainBody.offsetWidth;



var bannerLatestIndex = 0;
var bannerStartScrollIndex = 0;
var bannerEndScrollIndex = 0;


var pageLatestIndex = 0;
var pageNextIndex = 0;

var onPageUpade = (page) => {
    bannerStartScrollIndex = mySlider.startPage + pageLatestIndex;
    bannerEndScrollIndex = bannerStartScrollIndex;
    if (page > bannerStartScrollIndex) {
        bannerEndScrollIndex = bannerStartScrollIndex + 1;
    } else if (page < bannerStartScrollIndex) {
        bannerEndScrollIndex = bannerStartScrollIndex - 1;
    }

    for (var i = 0; i < 5; i++) {
        leafeItems[i].style.top = lerp(leafPositions[i][bannerStartScrollIndex][0], leafPositions[i][bannerEndScrollIndex][0], Math.abs(page - bannerStartScrollIndex)) * mainBodyHeight / 100;
        leafeItems[i].style.left = lerp(leafPositions[i][bannerStartScrollIndex][1], leafPositions[i][bannerEndScrollIndex][1], Math.abs(page - bannerStartScrollIndex)) * mainBodyWidth / 100;
        leafeItems[i].style.height = lerp(leafHeights[i][bannerStartScrollIndex], leafHeights[i][bannerEndScrollIndex], Math.abs(page - bannerStartScrollIndex));
        leafeItems[i].style.transform = `rotateZ(${lerp(leafRotations[i][bannerStartScrollIndex], leafRotations[i][bannerEndScrollIndex], Math.abs(page - bannerStartScrollIndex))}deg)`;
    }


    for (var i = 0; i < 3; i++) {
        bottles[i].style.left = lerp(bottlePositionsX[i][bannerStartScrollIndex], bottlePositionsX[i][bannerEndScrollIndex], Math.abs(page - bannerStartScrollIndex)) * mainBodyWidth / 100;
        bottles[i].style.top = lerp(bottlePositionsY[i][bannerStartScrollIndex], bottlePositionsY[i][bannerEndScrollIndex], Math.abs(page - bannerStartScrollIndex)) * mainBodyHeight / 100;
    }

    for (var i = 0; i < 6; i++) {
        fruits[i].style.left = lerp(fruitsPositionsX[i][bannerStartScrollIndex], fruitsPositionsX[i][bannerEndScrollIndex], Math.abs(page - bannerStartScrollIndex)) * mainBodyWidth / 100;
        fruits[i].style.top = lerp(fruitsPositionsY[i][bannerStartScrollIndex], fruitsPositionsY[i][bannerEndScrollIndex], Math.abs(page - bannerStartScrollIndex)) * mainBodyHeight / 100;

    }

}


var onPageUpade2 = () => {
    page = mainBody.scrollTop / mainBody.offsetHeight;
    var start = getIndex(pageLatestIndex);
    var end = getIndex(pageNextIndex);

    var activeBottleLatestPage = start;
    var activeBottleNextPage = end;

    for (var i = 0; i < 5; i++) {
        leafeItems[i].style.top = lerp(leafPositions[i][start][0], leafPositions[i][end][0], Math.abs(page - pageLatestIndex)) * mainBodyHeight / 100;
        leafeItems[i].style.left = lerp(leafPositions[i][start][1], leafPositions[i][end][1], Math.abs(page - pageLatestIndex)) * mainBodyWidth / 100;
        leafeItems[i].style.height = lerp(leafHeights[i][start], leafHeights[i][end], Math.abs(page - pageLatestIndex));
        leafeItems[i].style.transform = `rotateZ(${lerp(leafRotations[i][start], leafRotations[i][end], Math.abs(page - pageLatestIndex))}deg)`;
    }

    for (var i = 0; i < 3; i++) {
        if (i == bannerLatestIndex) {
            bottles[i].style.left = lerp(bottlePositionsX[i][activeBottleLatestPage], bottlePositionsX[i][activeBottleNextPage], Math.abs(page - pageLatestIndex)) * mainBodyWidth / 100;
            bottles[i].style.top = lerp(bottlePositionsY[i][activeBottleLatestPage], bottlePositionsY[i][activeBottleNextPage], Math.abs(page - pageLatestIndex)) * mainBodyHeight / 100;
        } else {
            if (page > 1) {
                var activeBottleLatestPage2 = start == 4 ? 4 : 5;
                var activeBottleNextPage2 = end == 4 ? 4 : 5;

                bottles[i].style.left = lerp(bottlePositionsX[i][activeBottleLatestPage2], bottlePositionsX[i][activeBottleNextPage2], Math.abs(page - pageLatestIndex)) * mainBodyWidth / 100;
                bottles[i].style.top = lerp(bottlePositionsY[i][activeBottleLatestPage2], bottlePositionsY[i][activeBottleNextPage2], Math.abs(page - pageLatestIndex)) * mainBodyHeight / 100;
            } else if (page == 1) {
                bottles[i].style.left = bottlePositionsX[i][5] * mainBodyWidth / 100;
                bottles[i].style.top = bottlePositionsY[i][5] * mainBodyHeight / 100;
            }
        }
    }

    for (var i = 0; i < 6; i++) {

        if (i >= bannerLatestIndex * 2 && i < (bannerLatestIndex + 1) * 2) {
            fruits[i].style.left = lerp(fruitsPositionsX[i][activeBottleLatestPage], fruitsPositionsX[i][activeBottleNextPage], Math.abs(page - pageLatestIndex)) * mainBodyWidth / 100;
            fruits[i].style.top = lerp(fruitsPositionsY[i][activeBottleLatestPage], fruitsPositionsY[i][activeBottleNextPage], Math.abs(page - pageLatestIndex)) * mainBodyHeight / 100;
        } else {

            if (page > 1) {
                var activeLatestPage2 = start == 4 ? 4 : 5;
                var activeNextPage2 = end == 4 ? 4 : 5;

                fruits[i].style.left = lerp(fruitsPositionsX[i][activeLatestPage2], fruitsPositionsX[i][activeNextPage2], Math.abs(page - pageLatestIndex)) * mainBodyWidth / 100;
                fruits[i].style.top = lerp(fruitsPositionsY[i][activeLatestPage2], fruitsPositionsY[i][activeNextPage2], Math.abs(page - pageLatestIndex)) * mainBodyHeight / 100;
            } else if (page == 1) {

                fruits[i].style.left = fruitsPositionsX[i][5] * mainBodyWidth / 100;
                fruits[i].style.top = fruitsPositionsY[i][5] * mainBodyHeight / 100;

            }
        }
    }

}


var getIndex = (index) => index === 0 ? bannerLatestIndex : index + 2;

mySlider.onPageUpade = onPageUpade;

lerp = (a, b, alpha) => {
    var c = b - a;
    return a + alpha * c;
}


mySlider.init()

var scrolling = false;

mySlider.onScrollDone = (page) => {
    bannerLatestIndex = page;
    scrolling = false;
    document.getElementById("details-title").innerHTML = title[parseInt(page)];
    document.getElementById("details").style.backgroundColor = detailsBg[parseInt(page)];
    document.getElementById("details2").style.backgroundColor = detailsBg[parseInt(page)];
    document.getElementById("circle").style.backgroundColor = detailsCircle[parseInt(page)];
    document.getElementById("buy-now-button").style.backgroundColor = detailsButton[parseInt(page)];
}

mySlider.onScrollStart = (page) => {
    scrolling = true;
}

mainBody.addEventListener(
    "wheel",
    (e) => {
        if (scrolling) {
            e.preventDefault();
        } else {
            if (e.deltaY > 0) {
                pageNextIndex = pageLatestIndex + 1;
            }
            if (e.deltaY < 0) {
                pageNextIndex = pageLatestIndex - 1;
            }
            if (pageNextIndex < 0 || pageNextIndex > 2) {
                pageNextIndex = pageLatestIndex;
                return;
            }
            scrolling = true;

            mainBody.scrollTo({ left: 0, top: pageNextIndex * mainBody.offsetHeight, behavior: 'smooth' });
            (new EndScrollNotifier()).notifyOnVerticalScrollEnd(mainBody, pageNextIndex * mainBody.offsetHeight, () => {
                pageLatestIndex = pageNextIndex;
                scrolling = false;
            });
            e.preventDefault();
        }
    },
    { passive: false }
)

mainBody.addEventListener(
    "scroll",
    onPageUpade2,
    { passive: true }
)

onPageUpade(0);