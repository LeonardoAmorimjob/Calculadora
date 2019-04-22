let op=0,result=0
function btn0(){

	if(document.getElementById('display').value=="0"){
		document.getElementById('display').value="0";
	}
	else{
	document.getElementById('display').value=document.getElementById('display').value+"0";
	}
	document.getElementById('displayacumulado').value=document.getElementById('displayacumulado').value+"0";
	
}
function btn1(){
	
	if(document.getElementById('display').value=="0"){
		document.getElementById('display').value="1";
	}
	else{
	document.getElementById('display').value=document.getElementById('display').value+"1";
	}
	
}

function btn2(){
	
	if(document.getElementById('display').value=="0"){
		document.getElementById('display').value="2";
	}
	else{
	document.getElementById('display').value=document.getElementById('display').value+"2";
	}
	
	
}
function btn3(){
	
	if(document.getElementById('display').value=="0"){
		document.getElementById('display').value="3";
	}
	else{
	document.getElementById('display').value=document.getElementById('display').value+"3";
	}
	
}
function btn4(){
	if(document.getElementById('display').value=="0"){
		document.getElementById('display').value="4";
	}
	else{
	document.getElementById('display').value=document.getElementById('display').value+"4";
	}
		
}
function btn5(){

	if(document.getElementById('display').value=="0"){
		document.getElementById('display').value="5";
	}
	else{
	document.getElementById('display').value=document.getElementById('display').value+"5";
	}
	
}
function btn6(){
	
	if(document.getElementById('display').value=="0"){
		document.getElementById('display').value="6";
	}
	else{
	document.getElementById('display').value=document.getElementById('display').value+"6";
	}
	
}
function btn7(){
	
	if(document.getElementById('display').value=="0"){
		document.getElementById('display').value="7";
	}
	else{
	document.getElementById('display').value=document.getElementById('display').value+"7";
	}
	
}
function btn8(){
	
	if(document.getElementById('display').value=="0"){
		document.getElementById('display').value="8";
	}
	else{
	document.getElementById('display').value=document.getElementById('display').value+"8";
	}
	
}
function btn9(){
	
	if(document.getElementById('display').value=="0"){
		document.getElementById('display').value="9";
	}
	else{
	document.getElementById('display').value=document.getElementById('display').value+"9";
	}
	
}
function btnponto(){
	
	var contador=validanum(document.getElementById('display').value);
	console.log(contador);
	if(contador>0){
		calculo=document.getElementById('display').value=document.getElementById('display').value;
	}
	else if(contador==0){
		calculo=document.getElementById('display').value=document.getElementById('display').value+"."
	}
	
	document.getElementById("display").value=calculo;
	
	
	/*if(document.getElementById('display').value==0){
		document.getElementById('display').value=0;
	}
	else{
	document.getElementById('display').value=document.getElementById('display').value+".";
	}*/
	
}
function btnce(){
	if(document.getElementById('display').value.length==1){
		document.getElementById('display').value=0;
	}
	else{
	document.getElementById('display').value=document.getElementById('display').value.substr(0,document.getElementById('display').value.length-1);
	}
}
function btnc(){
	
	document.getElementById('display').value=0;
	document.getElementById('displayacumulado').value=0;
	result=0;
	
}
function btnmais(){
	
			if(document.getElementById('display').value==0){
				document.getElementById('display').value=0;
			
			}
			else if(document.getElementById('display').value[(document.getElementById('display').value.length)-1]=="-"||document.getElementById('display').value[(document.getElementById('display').value.length)-1]=="*"||document.getElementById('display').value[(document.getElementById('display').value.length)-1]=="/"){
			document.getElementById('display').value=document.getElementById('display').value.substr(0,document.getElementById('display').value.length-1);
			document.getElementById('display').value=document.getElementById('display').value+"+";
			
			}
			else if(document.getElementById('display').value[(document.getElementById('display').value.length)-1]=="+"){
				document.getElementById('display').value=document.getElementById('display').value;
			}
			
			else{
			document.getElementById('display').value=document.getElementById('display').value+"+";
				
			}
				
		document.getElementById('display').value[(document.getElementById('display').value.length)-1]
		
	
		
		
}

function btnmenos(){
			if(document.getElementById('display').value=="0"){
				document.getElementById('display').value="-";
			
			}
			else if(document.getElementById('display').value[(document.getElementById('display').value.length)-1]=="+"||document.getElementById('display').value[(document.getElementById('display').value.length)-1]=="*"||document.getElementById('display').value[(document.getElementById('display').value.length)-1]=="/"){
			document.getElementById('display').value=document.getElementById('display').value.substr(0,document.getElementById('display').value.length-1);
			document.getElementById('display').value=document.getElementById('display').value+"-";
			
			}
			else if(document.getElementById('display').value[(document.getElementById('display').value.length)-1]=="-"){
				document.getElementById('display').value=document.getElementById('display').value;
			}
			
			else{
			document.getElementById('display').value=document.getElementById('display').value+"-";
				
			}
				
		document.getElementById('display').value[(document.getElementById('display').value.length)-1]
	
	
}
function btndiv(){
		if(document.getElementById('display').value=="0"){
				document.getElementById('display').value="0/";
			
			}
			else if(document.getElementById('display').value[(document.getElementById('display').value.length)-1]=="-"||document.getElementById('display').value[(document.getElementById('display').value.length)-1]=="*"||document.getElementById('display').value[(document.getElementById('display').value.length)-1]=="+"){
			document.getElementById('display').value=document.getElementById('display').value.substr(0,document.getElementById('display').value.length-1);
			document.getElementById('display').value=document.getElementById('display').value+"/";
			
			}
			else if(document.getElementById('display').value[(document.getElementById('display').value.length)-1]=="/"){
				document.getElementById('display').value=document.getElementById('display').value;
			}
			
			else{
			document.getElementById('display').value=document.getElementById('display').value+"/";
				
			}
				
		document.getElementById('display').value[(document.getElementById('display').value.length)-1]
			
		
}
function btnmult(){
			if(document.getElementById('display').value=="0"){
				document.getElementById('display').value="0";
			
			}
			else if(document.getElementById('display').value[(document.getElementById('display').value.length)-1]=="-"||document.getElementById('display').value[(document.getElementById('display').value.length)-1]=="+"||document.getElementById('display').value[(document.getElementById('display').value.length)-1]=="/"){
			document.getElementById('display').value=document.getElementById('display').value.substr(0,document.getElementById('display').value.length-1);
			document.getElementById('display').value=document.getElementById('display').value+"*";
			
			}
			else if(document.getElementById('display').value[(document.getElementById('display').value.length)-1]=="*"){
				document.getElementById('display').value=document.getElementById('display').value;
			}
			
			else{
			document.getElementById('display').value=document.getElementById('display').value+"*";
				
			}
				
		document.getElementById('display').value[(document.getElementById('display').value.length)-1]
		
}
function ultimoop(a){
	ultop="";
	this.a=a;
	var contador=a.length;
	
	for(var i=0;i<contador;i++){
		if(a[i]=="+"||a[i]=="-"||a[i]=="*"||a[i]=="/"){
			ultop=a[i];
		}
	
	}
	return ultop;
}
function validanum(a){	
	posiultop="",num="";
	this.a=a;
	var contador=a.length,contponto=0, tamnum=0;
	
	for(var i=0;i<contador;i++){
		if(a[i]=="+"||a[i]=="-"||a[i]=="*"||a[i]=="/"){
			posiultop=i;
		}
	
	}
	
	num=a.substr(posiultop+1,a.length);
	tamnum=num.length;
	for(var i=0;i<tamnum;i++){
		
		if(num[i]=="."){
			contponto=contponto+1
		}
		
	}
	
	
	return contponto;
}

function btnigual(){
	display=document.getElementById('display').value[document.getElementById('display').value.length-1];
	console.log(document.getElementById('display').value);
	if(display=="+"||display=="/"||display=="-"||display=="*"){
		document.getElementById('display').value=document.getElementById('display').value.substr(0,document.getElementById('display').value.length-1);
	}
	if(ultimoop(document.getElementById('display').value)=="+"){
	result=eval(document.getElementById('display').value)+"+";
	}
	else if(ultimoop(document.getElementById('display').value)=="-"){
	result=eval(document.getElementById('display').value)+"-";
	}
	else if(ultimoop(document.getElementById('display').value)=="*"){
	result=eval(document.getElementById('display').value)+"*";
	}
	else if(ultimoop(document.getElementById('display').value)=="/"){
	result=eval(document.getElementById('display').value)+"/";
	}
	document.getElementById('display').value=result;
	
	
	
}
function desabilitateclado(){
	document.getElementById("display").disabled=true;
}
function btnteste(){
	console.log(eval(document.getElementById("displayacumulado").value));
	
}
