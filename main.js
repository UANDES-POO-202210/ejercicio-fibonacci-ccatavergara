function fibonacci(i){
    if(i==1 || i==0){ // el "or" en js es con || no con |
        return i;
    }
    else{
        return fibonacci(i-1) + fibonacci(i-2);
    }
};

var fs = require('fs');
fs.readFile("number.txt", 'utf8', function(err, data) {
    if(err){
        console.error(err);
        return;
    }
    console.log("El numero fibonacci de %d es %d",data,fibonacci(data));
});

