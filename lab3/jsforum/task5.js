
let maxlength = 20;
let str = "fsefsf"
if (str.length > maxlength){
    console.log(str.slice(0, maxlength - 1) + '…'); 
} else{
    console.log(str);
}

