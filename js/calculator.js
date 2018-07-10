
/**  The name value attribut of input html element*/
const VALUE_ATTRIBUTE = 'value';
/** input first number boXXXXXXXXXXXXXX */

const INPUT_1 = 'input1';
/** input second number box */
const INPUT_2 = 'input2';
/** input result number box */
const INPUT_RESULT = 'result';

/** input result number box */
const OPERAND = 'op1'


/** input result number box */
const PLUS = '+';
/** input result number box */
const MINUS = '-';
/** input result number box */
const MUTIPLY = 'x';
/** input result number box */
const DIVIDE = '/';
/** input result number box */
const OPERANDS = [PLUS, MINUS, MUTIPLY, DIVIDE];


/**
 * this is an event handler for the btn 0-9 (also '.' symbol)
 * 
 * @param {*} val value of btn,which is written inside onPressNumber(val)
 * 
 * The includes() method determines whether one string may be found within
 *  another string,EXAMPLE: str.includes(searchString[, position])
 */
function onPressNumber(val) {
    if (!OPERANDS.includes(document.getElementById(OPERAND).textContent)) {
        insertValue(INPUT_1, val);
        return;
    }
    insertValue(INPUT_2, val);
}

/**
 * 
 * 
 * @param {*} operand operand 
 */
function onPressOperand(operand) {
    if (document.getElementById(INPUT_1).value.length === 0) {
        alert("please insert first number");
        return;
    }

    document.getElementById(OPERAND).textContent = operand;
}

//in function khali mikone inputaro
function resetInputs() {
    
    
            document.getElementById(INPUT_1).value="";

    
        document.getElementById(INPUT_2).value="";
    


    
        document.getElementById(INPUT_RESULT).value="";

    

        document.getElementById(OPERAND).textContent = "";
    }


function onGetResult(operand) {
    if (document.getElementById(OPERAND).textContent === MINUS) {
        var a = document.getElementById(INPUT_1).value;
        var b = document.getElementById(INPUT_2).value;
        c = a - b;
        document.getElementById(INPUT_RESULT).value = c;
        return;
    } if (document.getElementById(OPERAND).textContent == MUTIPLY) {
        var a = document.getElementById(INPUT_1).value;
        var b = document.getElementById(INPUT_2).value;
        c = a * b;
        document.getElementById(INPUT_RESULT).value = c;
        return;
    }
    if (document.getElementById(OPERAND).textContent == DIVIDE) {
        var a = document.getElementById(INPUT_1).value;
        var b = document.getElementById(INPUT_2).value;
        c = a / b;
        document.getElementById(INPUT_RESULT).value = c;
        return;
}
if (document.getElementById(OPERAND).textContent == PLUS) {
    var a = document.getElementById(INPUT_1).value;
    var b = document.getElementById(INPUT_2).value;
    //chon dar halat adi a va b ro number nmishnase,parseFloat tabdil mikone be number
    var c = parseFloat(a) + parseFloat(b) ;
    document.getElementById(INPUT_RESULT).value = c;
    return;
}
// a better way 
// console.log( eval("1+4"));
//    document.getElementById(INPUT_RESULT).value= eval(document.getElementById(INPUT_1).value+document.getElementById(OPERAND) +document.getElementById(INPUT_2).value)
   
}

/**
 * given an element id of an input tag this function will insert 
 * append value to it
 * 
 * @param {*} elemntId the id of input element to insert a new  value
 * @param {*} newValue the value to be inserted
 */
//chetor adadha too ye inpute kenar ham bashan
function insertValue(elemntId, newValue) {
    let existedvalue = document.getElementById(elemntId).value;
    document.getElementById(elemntId).value= existedvalue + '' + newValue;
}