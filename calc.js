function calculation() {
    var f_No = document.getElementById("fNo");
    var s_No = document.getElementById("sNo");
    var result = document.getElementById("calc");
    result.innerHTML = "<p>The sum of two num is <b>" + (Number(f_No.value) + Number(s_No.value)) + "</b></p>"
        + "<p>The subtraction of two num is <b>" + (Number(f_No.value) - Number(s_No.value)) + "</b></p>"
        + "<p>The multiplication of two num is <b>" + (Number(f_No.value) * Number(s_No.value)) + "</b></p>"
        + "<p>The divisin of two num is <b>" + (Number(f_No.value) / Number(s_No.value)) + "</b></p>"
        + "<p>The square of two num is <b>" + (Math.pow(Number(f_No.value), 2)) + "&nbsp;and&nbsp;" + (Math.pow(Number(s_No.value), 2)) + "</b></p>"
        + "<p>The square of two num is <b>" + (Math.pow(Number(f_No.value), 2)) + "&nbsp;and&nbsp;" + (Math.pow(Number(s_No.value), 2)) + "</b></p>"
        + "<p>The log of two num is <b>" + (Math.log(Number(f_No.value))) + "&nbsp;and&nbsp;" + (Math.log(Number(s_No.value))) + "</b></p>"
        + "<p>The sin of two num is <b>" + (Math.sin(Number(f_No.value))) + "&nbsp;and&nbsp;" + (Math.sin(Number(s_No.value))) + "</b></p>"
        + "<p>The cos of two num is <b>" + (Math.cos(Number(f_No.value))) + "&nbsp;and&nbsp;" + (Math.cos(Number(s_No.value))) + "</b></p>";
}

var f_No1 = document.getElementById("fNo1");
var s_No1 = document.getElementById("sNo1");
var validation = document.getElementById("validation");
s_No1.addEventListener('keyup', () => {
    (Number(f_No1.value) > Number(s_No1.value)) ? validation.innerHTML = "Plz enter higher value" : validation.innerHTML = " ";
})

function odd_even_calculation() {
    var obj = { evenarr: [], oddarr: [] }
    var sum_of_odd = 0
    var sum_of_even = 0
    for (let i = Number(f_No1.value); i <= s_No1.value; i++) {
        if (i % 2 == 0) {
            obj.evenarr.push(i);
            sum_of_even += i;
        }
        else {
            obj.oddarr.push(i);
            sum_of_odd += i;
        }
    }
    document.getElementById('odd_even_calc').innerHTML = "<p>The sum of total numbers b/w the two inputfield is <b>" + (sum_of_even + sum_of_odd) + "</b> </p>"
        + "<p>The total numbers b/w the two inputfield is <b>" + (Number(obj.evenarr.length) + Number(obj.oddarr.length)) + "</b> </p>"
        + "<p>Even numbers b/w the two inputfield are <b>" + obj.evenarr + "</b> </p>"
        + "<p>Odd numbers b/w the two inputfield are <b>" + obj.oddarr + "</b> </p>"
        + "<p>The sum of even num is <b>" + sum_of_even + " </b></p>" + "<p>The sum of odd num is <b>" + sum_of_odd + "</b> </p>";
}

var textarea =  document.getElementById("text")
textarea.addEventListener('keyup',()=>{
    document.getElementById('character_calc').innerHTML = ""
    var text_value = document.getElementById("text");
    var trim_value = text_value.value.trim().split(" ").join("");
    var ori = trim_value;
    var ori_len = trim_value.length;
    var totlen = trim_value.length;
    var chararr = trim_value.split("");
    var charlen
    for(let i=0;i<chararr.length;i++)
    {
        ori = ori.replaceAll(chararr[i],'');
        charlen = ori_len - ori.length;
        ori_len = ori.length;
        if(charlen != 0)
        {
            if(document.getElementById('character_calc').innerHTML == "")
            {
                document.getElementById('character_calc').innerHTML = "<p> The length of the text is <b>" + totlen +"</b></p>"+"<p> The <b>"+chararr[i]+ "</b> length in the text is <b>" + charlen +"</b></p>"
            }
            else
            {
                document.getElementById('character_calc').innerHTML+= "<p> The <b>"+chararr[i]+ "</b> length in the text is <b>" + charlen +"</b> </p>"
            }
        }
    }
})

function enamble(i)
{
    if(i == 1){
        document.getElementById('crd1').style.display = "block"
        document.getElementById('crd2').style.display = "none"
        document.getElementById('crd3').style.display = "none"
    }
    if(i == 2){
        document.getElementById('crd1').style.display = "none"
        document.getElementById('crd2').style.display = "block"
        document.getElementById('crd3').style.display = "none"
    }
    if(i == 3){
        document.getElementById('crd1').style.display = "none"
        document.getElementById('crd2').style.display = "none"
        document.getElementById('crd3').style.display = "block"
    }
    
}