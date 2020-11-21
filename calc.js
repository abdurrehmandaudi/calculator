var result=document.getElementById("resultbox");


 /*  one  */
document.getElementById("one").addEventListener('click',function (){result.value +="1";});

/* two */
document.getElementById("two").addEventListener('click',function (){result.value +="2";});

/*  three   */
document.getElementById("three").addEventListener('click',function (){result.value +="3";});

/*  four    */
document.getElementById("four").addEventListener('click',function (){result.value +="4";});

/*  five  */
document.getElementById("five").addEventListener('click',function (){result.value +="5";});

/* six */
document.getElementById("six").addEventListener('click',function (){result.value +="6";});

//  seven   
document.getElementById("seven").addEventListener('click',function (){result.value +="7";});

//  eight    
document.getElementById("eight").addEventListener('click',function (){result.value +="8";});

//  nine    
document.getElementById("nine").addEventListener('click',function (){result.value +="9";});

//  perc
document.getElementById("perc").addEventListener('click',function (){result.value +="%";});

// min
document.getElementById("min").addEventListener('click',function (){result.value +="-";});

// add 
document.getElementById("add").addEventListener('click',function (){result.value +="+";});

//  mul
document.getElementById("mul").addEventListener('click',function (){result.value +="*";});

//  devide
    document.getElementById("devide").addEventListener('click',function (){result.value +="/";});

//  zero
    document.getElementById("zero").addEventListener('click',function (){result.value +="0";});

//  dot   
    document.getElementById("dot").addEventListener('click',function (){result.value +=".";});

//  clear
    document.getElementById("clear").addEventListener('click',function (){result.value ="";});

//  eql
    document.getElementById("eql").addEventListener('click',function (){result.value = eval(result.value);});

//  del
document.getElementById("del").addEventListener('click',function (){
    t=result.value;
    a=t.length-1;
    var str='';
    for(i=0;i<a;i++)
    {
        str=str+t[i];
    }
    result.value =str;
});
