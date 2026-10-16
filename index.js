function end() {
    console.log("selesai");
}

function outputWithTimeout(i, cb){
    setTimeout(()=>{
        console.log(i);
        if(i >= 3){
            cb();
            return;
        }
        outputWithTimeout(i + 1, cb);
    },i * 1000);
}

outputWithTimeout(1,end);
