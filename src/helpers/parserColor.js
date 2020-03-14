export const parserColor = function (num){

    let value = '0,255,255';
    const arr = value.split(',')

    if(num <= 255){
        arr.splice(2, 1, (255 - num));
        return arr.join()
    }else if(num > 255 && num <= 510){
        arr.splice(0, 3, (num - 255), 255, 0);
        return arr.join()
    }else if(num > 510 && num <= 765){
        arr.splice(0, 3, 255,(255 - (num-510)), 0);
        return arr.join()
    }
};