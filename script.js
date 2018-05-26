(function(){
    var createWorker= function(){
    var workerCount=0;
    var task1= function(){
        workerCount++;
        console.log("task1 " + workerCount);
    }
    var task2 = function(){
        workerCount++;
        console.log("task2 "+ workerCount);
    }
    return {
        job1:task1,
        job2:task2
    }
}
var worker=createWorker();
worker.job1();
worker.job2();

var myWorker=function(){
    console.log("myWorker here");
}

var myFunctionCaller = function(f){
    try{
        f();
    }
    catch(ex)
    {
        console.log(ex);
    }
}
myFunctionCaller(myWorker);
}());