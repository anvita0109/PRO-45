var canvas;
var maze, left_boundary, right_boundary, bottom_boundary, top_boundary;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10;
var player;
var trophy, trophyImg;
var potionCount = 0;    
var score = 0;
var gameState = "PLAY";
var num = 0;
var obstacles_group, potion_group;

function preload(){

    trophyImg = loadImage("trophy.png");

    monster1 = loadImage("monster/monster1.png");
    monster2 = loadImage("monster/monster2.jpg");


    player_img = loadImage("img/player.jpg");
    player_left=loadImage("img/player_left.jpg");
    player_down=loadImage("img/player_down.jpg");
    player_right=loadImage("img/player_right.jpg");

    potion1_img = loadImage("potion/potion1.jpg");
    potion2_img = loadImage("potion/potion2.jpg");
    potion3_img = loadImage("potion/potion3.jpg");
    potion4_img = loadImage("potion/potion4.jpg");
    potion5_img = loadImage("potion/potion5.jpg");

    //player_potion_img = loadImage("player/player_potion.jpg");
}

function setup(){
    var canvas = createCanvas(1270, displayHeight);


    right_boundary = createSprite(30, 150, 40, 6656 );
    left_boundary = createSprite(1300, 150, 40, 6656);


    trophy = createSprite(100, -1700, 50, 50);
    trophy.addImage(trophyImg);
    trophy.scale = 0.1;

    potion_group = createGroup();
    obstacles_group = createGroup();

    wall1 = createSprite(600, 535, 1200, 30);
    wall2 = createSprite(800, 455, 30, 150);
    wall3 = createSprite(800, 380, 250 ,30);
    wall4 = createSprite(670, 337, 30 ,115);
    wall5 = createSprite(920, 337, 30 ,115);
    wall6 = createSprite(545, 460, 30 ,130);
    wall7 = createSprite(1175, 390, 240 ,30);
    wall8 = createSprite(325, 390, 220 ,30);
    wall9 = createSprite(420, 320, 30 ,100);
    wall10= createSprite(480, 270, 150 ,30);
    wall11= createSprite(541, 200, 30 ,150);
    wall12= createSprite(350, 140, 375 ,30);
    wall13= createSprite(300, 210, 30 ,120);
    wall14= createSprite(100, 280, 140 ,30);
    wall15= createSprite(920, 275, 260 ,30);
    wall16= createSprite(800, 210, 30 ,150);
    wall17= createSprite(1050, 150, 30 ,280);
    wall18= createSprite(680, 85, 30 ,160);
    wall19= createSprite(740, 150, 100 ,30);
    wall20= createSprite(615, 20, 100 ,30);
    wall21= createSprite(177, 80, 30 ,120);
    wall22= createSprite(920, 80, 30 ,130);
    wall23= createSprite(1055, 25, 280 ,30);
    wall24= createSprite(1166, 205, 30 ,100);
    wall25= createSprite(1235, 160, 140 ,30);
    wall26= createSprite(235, 23, 140 ,30);
    wall27= createSprite(430, 17, 30 ,230);
    wall28= createSprite(800, -45, 30 ,180);
    wall29= createSprite(730, -120, 1200 ,30);

    wall30= createSprite(770, -230, 1200, 30);
    wall31= createSprite(540, -300, 30, 110);
    wall32= createSprite(790, -300, 30, 110);
    wall33= createSprite(545, -365, 250, 30);
    wall34= createSprite(663, -415, 30, 130);
    wall35= createSprite(413, -415, 30, 130);
    wall36= createSprite(165, -345, 250, 30);
    wall37= createSprite(1025,-365, 250, 30);
    wall38= createSprite(1025,-365, 250, 30);
    wall39= createSprite(913, -415, 30, 130);
    wall40= createSprite(858, -480, 130, 30);
    wall41= createSprite(413, -470, 270, 30);
    wall42= createSprite(295, -595, 30, 250);
    wall43= createSprite(543, -535, 30, 160);
    wall44= createSprite(605, -608, 150, 30);
    wall45= createSprite(668, -670, 30, 150);
    wall46= createSprite(793, -540, 30, 150);
    wall47= createSprite(983, -600, 350, 30);
    wall48= createSprite(1160,-660, 30, 150);
    wall49= createSprite(1043,-530, 30, 150);
    wall50= createSprite(1220,-475, 150, 30);
    wall51= createSprite(1100,-725, 150, 30);
    wall52= createSprite(112 ,-605, 140, 30);
    wall53= createSprite(165 ,-545, 30, 130);
    wall54= createSprite(420 ,-665, 30, 130);
    wall55= createSprite(738 ,-730, 130, 30);
    wall56= createSprite(300 ,-730, 270, 30);
    wall57= createSprite(910 ,-735, 30, 240);
    wall58= createSprite(545 ,-790, 30, 120);
    wall59= createSprite(600 ,-860, 1200, 30);
   
    wall60 = createSprite(600, -990, 1200, 30); 
    wall61= createSprite(800, -1050, 30, 150);
    wall62= createSprite(800, -1110, 250 ,30);
    wall63= createSprite(670, -1160, 30 ,125);
    wall64= createSprite(920, -1160, 30 ,125);
    wall65= createSprite(545, -1060, 30 ,130);
    //wall66= createSprite(1175,-1090, 240 ,30);
    wall67= createSprite(315, -1110, 240 ,30);
    wall68= createSprite(420, -1180, 30 ,120);
    wall69= createSprite(480, -1230, 150 ,30);
    wall70= createSprite(541, -1300, 30 ,150);
    wall71= createSprite(350, -1360, 375 ,30);
    wall72= createSprite(300, -1300, 30 ,120);
    wall73= createSprite(100, -1200, 140 ,30);
    wall74= createSprite(920, -1220, 260 ,30);
    wall75= createSprite(800, -1300, 30 ,150);
    wall76= createSprite(1050, -1345, 30 ,280);
    wall77= createSprite(680, -1420, 30 ,160);
    wall78= createSprite(740, -1355, 100 ,30);
    wall79= createSprite(615, -1485, 100 ,30);
    wall80= createSprite(177, -1430, 30 ,120);
    wall81= createSprite(920, -1400, 30 ,130);
    wall82= createSprite(1045,-1480, 280 ,30);
    wall83= createSprite(400,-1480, 30 ,230);
    wall84= createSprite(1235,-1350, 140 ,30);
    wall85= createSprite(235, -1480, 140 ,30);
    wall86=createSprite(830,  -1550, 30 ,100);
    wall87= createSprite(1180, -1250, 30 ,180);
    wall89= createSprite(730, -1600, 1200 ,30);

    potion00 = createSprite(1235, 210, 30, 30);
    potion00.addImage(potion3_img);
    potion00.scale = 0.1;

    potion0 = createSprite(345, -985, 30, 30);
    potion0.addImage(potion4_img);
    potion0.scale = 0.1;


    potion1 = createSprite(1200, -170, 30, 30);
    potion1.addImage(potion1_img);
    potion1.scale = 0.1;

    potion2 = createSprite(340, -400, 30, 30);
    potion2.addImage(potion2_img);
    potion2.scale = 0.1;

    potion3 = createSprite(1080, -660, 30, 30);
    potion3.addImage(potion3_img);
    potion3.scale = 0.1;

    potion4 = createSprite(860, -1054, 30, 30);
    potion4.addImage(potion4_img);
    potion4.scale = 0.1;

    potion5 = createSprite(600, -1410, 30, 30);
    potion5.addImage(potion5_img);
    potion5.scale = 0.1;

    potion6 = createSprite(605, -1161, 30, 30);
    potion6.addImage(potion1_img);
    potion6.scale = 0.1;


    obstacle1 = createSprite(1113, 80, 50, 50);
    obstacle1.velocityY = 5;
    obstacle1.addImage(monster2);
    obstacle1.scale = 0.08;

    obstacle2 = createSprite(183, 305, 50, 50);
    obstacle2.velocityX = 5;
    obstacle2.addImage(monster2);
    obstacle2.scale = 0.08;

    obstacle3 = createSprite(480, -285, 50, 50);
    obstacle3.velocityX = 5;
    obstacle3.addImage(monster2);
    obstacle3.scale = 0.08;
    
    obstacle4 = createSprite(733, -310, 50, 50);
    obstacle4.velocityY = 5;
    obstacle4.addImage(monster1);
    obstacle4.scale = 0.08;
    
    obstacle5 = createSprite(1225, -770, 50, 50);
    obstacle5.velocityY = 8;
    obstacle5.addImage(monster2);
    obstacle5.scale = 0.08;

    obstacle6 = createSprite(210, -410, 50, 50);
    obstacle6.velocityY = 8;
    obstacle6.addImage(monster1);
    obstacle6.scale = 0.08;

    obstacle7 = createSprite(1000, -1055, 50, 50);
    obstacle7.velocityY = 3;
    obstacle7.addImage(monster1);
    obstacle7.scale = 0.08;

    obstacle8 = createSprite(615, -1150, 50, 50);
    obstacle8.velocityY = -11;
    obstacle8.addImage(monster1);
    obstacle8.scale = 0.08;


    obstacle9 = createSprite(615, -1175, 50, 50);
    obstacle9.velocityX = -4;
    obstacle9.addImage(monster2);
    obstacle9.scale = 0.08;


    player = createSprite(displayWidth/2, 600, 30, 30);
    player.scale = 0.2;

    wall68.shapeColor = "red"

    obstacles_group.add(obstacle1);
    obstacles_group.add(obstacle2);
    obstacles_group.add(obstacle3);
    obstacles_group.add(obstacle4);
    obstacles_group.add(obstacle5);
    obstacles_group.add(obstacle6);
    obstacles_group.add(obstacle7);
    obstacles_group.add(obstacle8);
    obstacles_group.add(obstacle9);

    potion_group.add(potion1, potion2, potion3, potion4, potion5, potion6) 


}

function draw(){
    background(0);


    obstacle1.bounceOff(right_boundary);
    obstacle1.bounceOff(left_boundary);
    obstacle1.bounceOff(wall7);
    obstacle1.bounceOff(wall23);

    obstacle2.bounceOff(right_boundary);
    obstacle2.bounceOff(left_boundary);
    obstacle2.bounceOff(wall9);
    obstacle2.bounceOff(wall14);

    obstacle3.bounceOff(right_boundary);
    obstacle3.bounceOff(left_boundary);
    obstacle3.bounceOff(wall31);

    obstacle4.bounceOff(wall55);
    obstacle4.bounceOff(wall30);

    obstacle5.bounceOff(wall60);
    obstacle5.bounceOff(wall50);

    obstacle6.bounceOff(wall36);
    obstacle6.bounceOff(wall56);

    obstacle7.bounceOff(wall60);
    obstacle7.bounceOff(wall74);

    obstacle8.bounceOff(wall60);
    obstacle8.bounceOff(wall79);


    obstacle9.bounceOff(wall68);
    obstacle9.bounceOff(wall63);

    player.collide(right_boundary);
    player.collide(left_boundary);

    if(player.isTouching(potion00)){
        potionCount = potionCount+1;
        potion00.destroy();
        score++
    }

    if(obstacles_group.isTouching(player) && potionCount === 0){
        obstacles_group.setVelocityEach(0,0);
        textSize(50);
        fill(0);
        stroke(255);
        strokeWeight(5);
        text("game over", 400, 500);
        console.log("gameOver");
        num = 1;
        potionCount = potionCount-1

//        if (obstacles_group.isTouching(player)&& potionCount !== 0){

 //       }

    }


    if (player.position >200){
        score = score + 20;
    }



    player.collide(wall1);
    player.collide(wall2);
    player.collide(wall3);
    player.collide(wall4);
    player.collide(wall5);
    player.collide(wall6);
    player.collide(wall7);
    player.collide(wall8);
    player.collide(wall9);
    player.collide(wall10);
    player.collide(wall11);
    player.collide(wall14);
    player.collide(wall15);
    player.collide(wall16);
    player.collide(wall17);
    player.collide(wall18);
    player.collide(wall19);
    player.collide(wall20);
    player.collide(wall21);
    player.collide(wall22);
    player.collide(wall23);
    player.collide(wall24);
    player.collide(wall25);
    player.collide(wall26);
    player.collide(wall27);
    player.collide(wall28);
    player.collide(wall29);
    player.collide(wall30);

    player.collide(wall31);
    player.collide(wall32);
    player.collide(wall33);
    player.collide(wall34);
    player.collide(wall35);
    player.collide(wall36);
    player.collide(wall37);
    player.collide(wall39);
    player.collide(wall40);
    player.collide(wall41);
    player.collide(wall42);
    player.collide(wall43);
    player.collide(wall44);
    player.collide(wall45);
    player.collide(wall46);
    player.collide(wall47);
    player.collide(wall49);
    player.collide(wall50);
    player.collide(wall51);
    player.collide(wall52);
    player.collide(wall53);
    player.collide(wall54);
    player.collide(wall55);
    player.collide(wall56);
    player.collide(wall57);
    player.collide(wall58);
    player.collide(wall59);

    player.collide(wall60);
    player.collide(wall61);
    player.collide(wall62);
    player.collide(wall63);
    player.collide(wall64);
    player.collide(wall65);
    //player.collide(wall66);
    player.collide(wall67);
    player.collide(wall68);
    player.collide(wall69);
    player.collide(wall70);
    player.collide(wall71);
    player.collide(wall72);
    player.collide(wall73);
    player.collide(wall74);
    player.collide(wall75);
    player.collide(wall76);
    player.collide(wall77);
    player.collide(wall78);
    player.collide(wall79);
    player.collide(wall80);

    player.collide(wall81);
    player.collide(wall82);
    player.collide(wall83);
    player.collide(wall84);
    player.collide(wall85);
    player.collide(wall86);
    player.collide(wall87);

    player.collide(wall89);

    

    camera.position.x = displayWidth/2;
    camera.position.y = player.y - 50;

   // console.log(player.x);    
    console.log(potionCount);


    if(num === 0){
    if(keyDown(LEFT_ARROW)){
        changePosition(-15,0);
        player.addImage(player_left);
        }
    else if(keyDown(RIGHT_ARROW)){
            changePosition(15,0);
            player.addImage(player_right);
        }
    else if(keyDown(UP_ARROW)){
            changePosition(0,-15);
            player.addImage(player_img);

        }
    else if(keyDown(DOWN_ARROW)){
            changePosition(0,+15);
            player.addImage(player_down);

        }
    }


    drawSprites();
        
    textSize(20);
    fill(255);
    stroke(255);
    text("Score: "+score, 100, player.y - 400)
    
    }



function changePosition(x,y){
    player.x = player.x + x;
    player.y = player.y + y;
}