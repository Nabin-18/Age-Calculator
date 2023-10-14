const clickButton = document.querySelector(".date > #btn");

const inputBox = document.querySelector(".date > #input-box");
inputBox.max = new Date().toISOString().split("T")[0];

const resultingDate = document.querySelector(".text > #result");




// const Currentdate = new Date();

clickButton.addEventListener("click", function () {
    let birthdate = new Date(inputBox.value);

    let d1 = birthdate.getDate();
    let m1 = birthdate.getMonth() + 1;
    let y1 = birthdate.getFullYear();


    let Currentdate = new Date();
    // console.log(Currentdate);

    let d2 = Currentdate.getDate();
    let m2 = Currentdate.getMonth() + 1;
    let y2 = Currentdate.getFullYear();

    let d3, m3, y3;
    y3 = y2 - y1;
    if (m2 >= m1) {
        m3 = m2 - m1;
    }
    else {
        y3--;
        m3 = 12 + (m2 - m1);
    }

    if (d2>=d1) {
        d3=d2-d1;

        
    } else {
        d3=getDaysInMonth(y1,m1) +d2-d1;

        
    }
    if(m3<0){
        m3=11;
        y3--;
    }
    console.log(y3,m3,d3);
    function getDaysInMonth(year,month){
        return new Date(year,month,0).getDate();
    }
   
    resultingDate.innerHTML=`<p> Your Current age : ${y3} Year :${m3} Month : ${d3}  Days`;

});


