let test = true;
document.getElementById("dialog").style.display = "none";
// Text effect
setInterval( function(){
    document.getElementById("note").style.display = "none";
    setTimeout( function(){
        document.getElementById("note").style.display = "block";
    },500);
},1000);
let a;
function animation() {
    a = setInterval(function () {
            document.getElementById("point").style.display = "none";
            setTimeout(function () {
                document.getElementById("point").style.display = "block";
            }, 100);
        }, 200);
}
function clear(){
    clearInterval(a);
}
// for(let i = 0; i < 10; i++){
//        // setInterval( function(){
//         document.getElementById("point").style.display = "none";
//         setTimeout( function(){
//             document.getElementById("point").style.display = "block";
//         },1000);
//    // },1000);
// }
// class Images
let Image = function(arrImage) {
    this.arrImages = arrImage;
    this.count = 0;
    this.nextImage = function () {
        if (this.count >= 0 && this.count < this.arrImages.length - 1) {
            this.count++;
        }
    };
    this.setImage = function (image) {
        this.image = image;
    };
    this.getImage = function () {
        return this.image;
    };
    this.changeImage = function () {
        this.nextImage();
        this.setImage(this.arrImages[this.count]);
        document.getElementById("image").src = this.getImage();
    };
};
// Class Answer
let Answers = function(arrAnswers) {
    this.arrAnswers = arrAnswers;
    let tmp = this;
    this.setAnswer = function () {
            this.Answer = document.getElementById("Answer").value;
        };
    this.checkInput = function() {
        if (this.Answer == "ném đá dấu tay" || this.value == "NEM DA DAU TAY" || this.value == "NÉM ĐÁ DẤU TAY" || "Ném đá dấu tay") {
            this.Answer = "0";
        } else if (this.Answer == "nhạc cụ" || this.Answer == "NHẠC CỤ" || this.Answer == "Nhạc cụ" || this.Answer == "NHAC CU") {
            this.Answer = "1";
        } else if (this.Answer == "c" || this.Answer == "C") {
            this.Answer = "2";
        } else if (this.Answer == "D" || this.Answer == "d") {
            this.Answer = "3";
        }
        else{
            this.Answer = "";
        }
    };
    this.getAnswer = function(){
        return this.Answer;
    };
    this.checkAnswer = function () {
        if(test){
            this.setAnswer();
            this.checkInput();
            point.setTurn();
            point.getTurn();
            if (this.getAnswer() == this.arrAnswers[image.count]) {
                document.getElementById("notification").innerHTML = "<br>" + 'Chúc mừng bạn!'+ "<br>"
                        + "<img style='width: 200px; height: 200px' " + "src='ima/like.gif'>";
                audio.src = 'audio/true.mp3';
                audio.play();
                image.changeImage();
                point.setPoint();
                point.getPoint();
                animation();
                setTimeout(function(){
                    clear();
                    },400);
                // animation();
                document.getElementById("Answer").value = null;
                if (point.point == 40) //need to update
                {
                    document.getElementById("notification").innerHTML = "<br>" + "Bạn đã chiến thắng!" + "<br>" + "<br>" + this.display();
                    document.getElementById("dialog").style.display = 'block';
                    test = false;
                    audio.src = 'audio/fire.mp3';
                    setTimeout(function (){
                        clear();
                    },300);
                }
            }
            else if (this.getAnswer() == "") {
                alert("Bạn chưa nhập câu trả lời!");
                return document.getElementById("notification").innerHTML = "<br>" + "Chưa nhập câu trả lời!" + "<br>" + "<br>" +
                    "<img style='width: 130px; height: 130px' " +
                    "src='https://i.pinimg.com/originals/a7/5d/a8/a75da8d93ba6291985ba77ee84fb6de3.gif'>";
            }
            else if(point.lose >= 3){
                point.setLose();
                point.getLose();
                audio.src = 'audio/false.mp3';
                alert("You lose!");
            }
            else {
                point.setLose();
                point.getLose();
                audio.src = 'audio/false.mp3';
                audio.play();
                return document.getElementById("notification").innerHTML = "<br>" + "<br>" + 'Rất tiếc!' + "<br>" + "<br>"
                    + "<img style='width: 130px; height: 130px' " +
                    "src='https://i.pinimg.com/originals/a7/5d/a8/a75da8d93ba6291985ba77ee84fb6de3.gif'>";
                //document.getElementById("Answer").value = null;
             }
        }
    };
    this.display = function () {
        return document.getElementById("notification").innerHTML = "<img style='width: 130px; height: 130px' " +
            "src='https://media1.tenor.com/images/c3324236b32e659783734fe2813603c8/tenor.gif?itemid=15112797'>";
    };
};
// Class Point
let Points = function(point,turn,lose){
    this.point = point;
    this.turn = turn;
    this.lose = lose;
    this.setPoint = function(){
        this.point += 10;
    };
    this.getPoint= function (){
    return document.getElementById("point").innerHTML =this.point;
    };
    this.setTurn = function(){
        this.turn++;
    };
    this.getTurn= function (){
        return document.getElementById("turn").innerHTML = this.turn;
    };
    this.setLose = function(){
        this.lose++;
    };
    this.getLose= function (){
        return document.getElementById("lose").innerHTML = this.lose;
    };
    this.reset = function() {
        this.point = 0;
        this.lose = 0;
        this.turn = 0;
        image.count = 0;
        document.getElementById("point").innerHTML = this.point;
        document.getElementById("lose").innerHTML = this.lose;
        document.getElementById("turn").innerHTML = this.turn;
        document.getElementById("notification").innerHTML =
            "Người chơi nhập vào câu trả lời ở ô nhập và click vào nút check để kiểm tra kết quả!";
        document.getElementById("Answer").value = null;
    };
   // this.a = false;
    this.resetResults = function() {
         document.getElementById("image").src = arrImages[0];
         this.reset();
         test = true;
    }
};
let arrImages = ["https://files.vforum.vn/2014/T10/img/vforum.vn-133676-10309683-755442207841364-361679200786066980-n.jpg",
              "https://files.vforum.vn/2014/T10/img/vforum.vn-133676-1011229-473268726140798-1607420842666641281-n.jpg",
              "https://files.vforum.vn/2014/T10/img/vforum.vn-133676-10262185-473271902807147-7738376419430735243-n.jpg",
              "https://files.vforum.vn/2014/T10/img/vforum.vn-133676-10402396-755442184508033-1390713449637084439-n.jpg"];
let arrAnswers = ["0","1","2","3"];
let image = new Image(arrImages);
let answers = new Answers(arrAnswers);
let point = new Points(0,0,0);
//let Check_spelling = new checkInput(value);
let audio = new Audio();

