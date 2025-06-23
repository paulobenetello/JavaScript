function a(n){
    if(n == 1){
        return 1;
    }else{
        return n * a(n-1);
    }
}

console.log(a(1))