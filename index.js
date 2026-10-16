function end() {
    console.log("selesai");
}

function outputWithTimeout(i, cb){
    setTimeout(()=>{
        console.log(i);
        if(i >= 5){
            cb();
            return;
        }
        outputWithTimeout(i + 1, cb);
    },1000);
}

outputWithTimeout(1,end);
