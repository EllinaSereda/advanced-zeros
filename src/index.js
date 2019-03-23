module.exports = function getZerosCount(number, base) {
  // your implementation
  let n=base;
    let masDel={};
    let del=[2,3,5,7,11,13,17];
    for (let i=0; i<del.length; i++){
        while (n%del[i]==0){
            n/=del[i];
            if ([del[i]] in masDel){
                masDel[del[i]]=masDel[del[i]]+1;
            }
            else masDel[del[i]]=1;
        }
    }

    if (del.every(v=>v!=n)&&n!=1){
        masDel[n]=1;
    }
  
    let variants=[];
    for (let key in masDel){
        let devider=key;
        let d=devider;
        let result=0;
        let x=number;
        let nn=masDel[key];
        while (x>0){
            x=Math.floor(number/devider);
            result+=x;
            devider=devider*d;
        }
        result/=nn;
        variants.push(result);
    }
    variants.sort((a,b)=>{
        if ( Number(a)<Number(b) )  return -1;
        if ( Number(a)>Number(b) )  return 1;
        return 0;
    })

    return Math.floor(variants[0]);
}