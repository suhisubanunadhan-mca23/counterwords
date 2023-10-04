var paragarph=`javaScript is a dynamic programming language that's used for web development, in web applications, for game development, and lots more. It allows you to implement dynamic features on web pages that cannot be done with only HTML and CSS`
paragarph=paragarph.toLowerCase();

paragarph=paragarph.replace(/[,.!#$@%&""]/g,'')

paragarph=paragarph.split(" ");

var newarray=[]
var number='8';
var count=1;
for(let i=0;i<paragarph.length;i++){
	if(paragarph[i]!=number){
        for(let j=i+1;j<paragarph.length;j++){
			if(paragarph[i]==paragarph[j]){
				count++;
				paragarph[j]=number;
			}
		}
		
		newarray.push([paragarph[i],count]);
		count=1;
	}
}


 for(let k=0;k<newarray.length;k++){
	for(let m=k+1;m<newarray.length;m++ ){
		if(newarray[k][1]<newarray[m][1]){
			let temp=newarray[k];
			newarray[k]=newarray[m];
			newarray[m]=temp;
		}
	}
}
var top=newarray.slice(0,3);
console.log(top);

var text=""

for(let z=0;z<newarray.length;z++){
	
	text=text+"<h1>"+newarray[z][0]+"------------>"  +newarray[z][1] + "times occurs"+"</h1>"
 }
document.getElementById('count').innerHTML=text;
