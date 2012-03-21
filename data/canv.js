

console.log("We have ignition1!");

var rem=0;
var store="NULL";
var str;
var i=0;
var x=550,y=-140;
var preprevid="NULL";
var str=new Array();
str[i]="NULL";
var flag=new Array();
var i=0,j=0,k=0,q=0;


str[0]=0;
var strx=new Array();


var stry=new Array();


var count=new Array();


var tot=0;


var temp=0;



function youRect(context,sx,sy,parx,pary,txt){
        context.strokeStyle = "white";
        context.lineWidth=3;
        context.beginPath();
        context.moveTo(sx,sy);
        context.lineTo(parx,pary+10);
        context.stroke();
        
  
        context.font = "20pt Arial";
        context.textalign = "center";
        //Draws a rectangle keeping sx,sy as middle and line to parx,pary
        var gradient = context.createLinearGradient(x,y-25,x,y+85);
        
		gradient.addColorStop(0, '#0F3B5F');
        gradient.addColorStop(1, '#6699FF');
        
        context.shadowOffsetX = 0;
        context.shadowOffsetY = 0;
		context.shadowBlur = 10;
		context.shadowColor = '#000';
        
        context.fillStyle = gradient;                    
        context.fillRect(sx-100,sy-20, 200, 30);
        
        context.fillStyle = "white";
        
        
        context.font = "15px Arial";
        context.textAlign = "center";
        context.fillText(txt, sx, sy,190);
                
        context.shadowOffsetX = 0;
        context.shadowOffsetY = 0;
		context.shadowBlur = 0;
		context.shadowColor = '#6699FF';
       
}

function tdraw(url,title)
  {
  console.log("x,y: "+x+", "+y);
    console.log("tdraw starts!");
  var a=0;
  var c = document.getElementById("cavId");
  var cxt = c.getContext("2d");

j=tot;
  count[j]=0;
  strx[j]=x;
  stry[j]=y+160;  
//  q=title;
//  str[tot]=title;
q=url;
str[tot]=url;
    for(k=0;k<tot;k++)
    {       console.log("loop 1");
            if(q==str[k])  {
            count[k]++;
            rem=1;
            temp=k;
            k=tot;
    }


    }
console.log("temp is : "+temp);

if(rem==0)
{
//  x=x;
  y=y+160;  
  youRect(cxt,x,y,x,y-160,title);
  }

if(rem==2)
  {
  cxt.stroke();
  if(count[temp]%2==0)
  {
  x=strx[temp]+count[temp]*100+10;
  y=stry[temp]+160;
  youRect(cxt,x,y,x-(count[temp]*100+10),y-160,title);
  }
  if(count[temp]%2!=0)
  {
  console.log("moving to: "+strx[temp]+", "+stry[temp]);
  x=strx[temp]-count[temp]*100-110-10;
  y=stry[temp]+160;
  youRect(cxt,x,y,x+(count[temp]*100)+120,y-160,title);
  }

  rem=0;


  }

  if(rem>0)
  {  
  rem++;
  }
  
  tot=tot+1;
  console.log("tdraw ends");
    };      
      

                        
                                                            
onMessage = function onMessage(message) {
if (message.m1==="Reset"){

console.log("Reset Canvas plz!");

var c = document.getElementById("cavId");
var context = c.getContext("2d");
context.moveTo(0,0);
c.width=c.width;

rem=0;
store="NULL";
i=0;
x=550;
y=-140;
preprevid="NULL";
str=new Array();
str[i]="NULL";
flag=new Array();
i=0;
j=0;
k=0;
q=0;


str[0]=0;
strx=new Array();
stry=new Array();
count=new Array();
tot=0;
temp=0;
  console.log("x,y: "+x+", "+y);
}
else{
  // Handle the message
  console.log(message.m1+message.m2);
  var x=message.m1;
  var y=message.m2;
  tdraw(x,y);
}
};
