function num_word(){
	var w;
	var x=document.forms["Rform"]["Number"];
	var v=x.value;
	var y=v.toString();
	var d=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
	var a=["","one","two","three","four","five","six","seven","eight","nine"];
	var b=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
	var c=["","one hundred and ","Two hundred and ","Three hundred and ","Four hundred and ","Five hundred and ","Six hundred and ","Seven hundred and ","eight hundred and ","Nine hundred and ",];
	var u=["0","100","200","300","400","500","600","700","800","900","1000"];
	var o=["0","one hundred ","Two hundred","Three hundred","Four hundred","Five hundred","Six hundred","Seven hundred","Eight hundred","Nine hundred","one thousand"];
	if((y.length)>0 && (y.length)<3 && (v<20)){
		//alert(d[v]);
		var uu=d[v];
		alert(uu);
		
	}
	else if((y.length)==2 && v>=20){
		var s=parseInt(y[0]);
		var r=parseInt(y[1]);
		alert(b[s]+" "+a[r]);
		
	}
	else if((y.length)>2){
		q=u.indexOf(v);
		if (q!=-1){
			alert(o[q]);
			
		}
		else{
			var h=parseInt(y[0]);
			var i=parseInt(y[1]);
			if (i==1){
				e=y[1]+y[2];
				t=parseInt(e);
				alert(c[h]+d[t]);
				//document.write(c[h]+d[t]);
			}
			else if(i!=1){
				z=parseInt(y[2]);
				alert(c[h]+b[i]+" "+a[z]); 
				//document.write(c[h]+b[i]+" "+a[z]);
			}
		}
		
	}
		
}	
function total_words(){
	document.write("<h2>Converted Numbers To Words From 0 to 1000</h2>");
	for(g=0;g<=1000;g++){
		document.write(g+") ");
		var x=g;
		var v=x;
		var y=v.toString();
		var d=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
		var a=["","one","two","three","four","five","six","seven","eight","nine"];
		var b=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
		var c=["","one hundred and ","Two hundred and ","Three hundred and ","Four hundred and ","Five hundred and ","Six hundred and ","Seven hundred and ","eight hundred and ","Nine hundred and ",];
		var u=["0","100","200","300","400","500","600","700","800","900","1000"];
		var o=["zero","one hundred ","Two hundred","Three hundred","Four hundred","Five hundred","Six hundred","Seven hundred","Eight hundred","Nine hundred","one thousand"];
		if((y.length)>0 && (y.length)<3 && (v<20)){
			//alert(d[v]);
			document.write(d[v]+"<br>");
		}
		else if((y.length)==2 && v>=20){
			var s=parseInt(y[0]);
			var r=parseInt(y[1]);
			//alert(b[s]+" "+a[r]);
			document.write(b[s]+" "+a[r]+"<br>")
		}
		else if((y.length)>2 && (y.length)<=4){
			m=u.indexOf(y);
			if (m!=-1){
				document.write(o[m]+"<br>");
			}
			else{
				var h=parseInt(y[0]);
				var i=parseInt(y[1]);
				if (i==1){
					e=y[1]+y[2];
					t=parseInt(e);
					//alert(c[h]+d[i]);
					document.write(c[h]+d[t]+"<br>");
				}
				else if(i!=1){
					z=parseInt(y[2]);
					//alert(c[h]+b[i]+" "+a[z]); 
					document.write(c[h]+b[i]+" "+a[z]+"<br>");
				}
			}
		
		}
		
	}
}


