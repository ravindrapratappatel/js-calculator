
var f_res = document.getElementById('f_res');
var bool1 = 1;
var bool2 = 0;

// function
function a(val) {
    if (val == '+' || val == '-' || val == '.') {
        if (bool1 == 1) {
            f_res.innerText = f_res.innerText + val;
            bool1 = 0;
        }
    }
    else if (val == '*' || val == '/') {
        if (bool2==1 && bool1 == 1) {
            f_res.innerText = f_res.innerText + val;
            bool1 = 0;
        }
    }
    else if(val=='can')
    {
        const temp=f_res.innerText;
        const temp2=temp.slice(0, -1);
        f_res.innerText=temp2;
        if(temp2.length==0){
            bool2=0;
        }
    }
    else {
        f_res.innerText += val;
        bool1 = 1;
        bool2 = 1;
    }
}

// function to calculate result
function b() {
    if(bool2==1){
        var temp = f_res.innerText;
        var temp2 = eval(temp);
        f_res.innerText = temp2;   
    }
}

//clear function
function clr() {
    f_res.innerText = " ";
    bool1=1;
    bool2=0;
}
 
 
 
 