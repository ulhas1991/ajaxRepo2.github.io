var xmlData=createNewXmlData();

function createNewXmlData(){
	var xmlData;
	if(window.ActiveXObject){
		try{
			xmlData=new ActiveXObject("Microsoft.XMLHTTP");
		}catch(e){
			xmlData=false;
		}
	}
	else{
		try{
			xmlData=new XMLHttpRequest();
		}
		catch(e){
			xmlData=false;
		}
	}
	if(!xmlData){
		alert('cannot create object');
	}
	else{
		return xmlData;
	}
	
}
function process1() {  
		var xhttp = new XMLHttpRequest();  
		food = (document.getElementById("inputBox").value);
		xhttp.onreadystatechange =handleServerResponse();
		xhttp.open("GET", "../Ajax/data.php?food="+food, true);   
		xhttp.send(); 
   }

function process(){
	if(xmlData.readyState==0 || xml.readyState==4){
		food = (document.getElementById("inputBox").value);
		xmlData.open("GET", "../Ajax/data.php?food=" +food, true);
		xmlData.onreadystatechange=handleServerResponse;
		xmlData.send();
	}
	else{
		setTimeout('process()',100);
	}
}

function handleServerResponse(){
	alert("helo");
	if(xmlData.readyState==4){
		if(xmlData.status==200){
			xmlResponse=xmlData.responseXML;
			xmlDocumentElement=xmlResponse.documentElement;
			message=xmlDocumentElement.firstChild.data;
			document.getElementById("displayData").innerHTML='<span style="color:blue">'+message+ '</span>';
			setTimeout('process()',100);
		}
		else{
			alert('something wnent wrong');
		}
	}
}