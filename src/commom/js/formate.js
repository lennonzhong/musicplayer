export const formate = (time) => {
    let m= Math.floor(time/60);
    let s= Math.floor(time%60);
     m=m>=10?m:'0'+m;
     s=s>=10?s:'0'+s;
     return m+':'+s;
}