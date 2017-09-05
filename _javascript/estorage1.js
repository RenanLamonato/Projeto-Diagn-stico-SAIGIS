Storage.prototype.getArray = function(arrayName) {
  var thisArray = [];
  var fetchArrayObject = this.getItem(arrayName);
  if (typeof fetchArrayObject !== 'undefined') {
    if (fetchArrayObject !== null) { thisArray = JSON.parse(fetchArrayObject); }
  }
  return thisArray;
}
 
Storage.prototype.pushArrayItem = function(arrayName,arrayItem) {
  var existingArray = this.getArray(arrayName);
  existingArray.push(arrayItem);
  this.setItem(arrayName,JSON.stringify(existingArray));
}
 
Storage.prototype.popArrayItem = function(arrayName) {
  var arrayItem = {};
  var existingArray = this.getArray(arrayName);
  if (existingArray.length > 0) {
    arrayItem = existingArray.pop();
    this.setItem(arrayName,JSON.stringify(existingArray));
  }
  return arrayItem;
}
 
Storage.prototype.shiftArrayItem = function(arrayName) {
  var arrayItem = {};
  var existingArray = this.getArray(arrayName);
  if (existingArray.length > 0) {
    arrayItem = existingArray.shift();
    this.setItem(arrayName,JSON.stringify(existingArray));
  }
  return arrayItem;
}
 
Storage.prototype.unshiftArrayItem = function(arrayName,arrayItem) {
  var existingArray = this.getArray(arrayName);
  existingArray.unshift(arrayItem);
  this.setItem(arrayName,JSON.stringify(existingArray));
}
 
Storage.prototype.deleteArray = function(arrayName) {
  this.removeItem(arrayName);
}
/*inicio identificação geral*/
 var fichap1 = {};

 var number_p1 = localStorage.getItem("contp1");
	localStorage.setItem("cont_multiplap1",number_p1++);

function identificacao_geral()
{
var v_cont_p1;
	v_cont_p1 = localStorage.getItem("contp1");
	if (v_cont_p1 == null){
		v_cont_p1 = 0;
	} 
	else{ 
		v_cont_p1 = localStorage.getItem("contp1");
	}
	fichap1.identificação = i_dentificação.value;
	fichap1.nome_da_agroindustria = i_ig_n_ind.value;
   
	
        localStorage.setItem("fichap1["+v_cont_p1+"]", JSON.stringify(fichap1));
 

  /*localStorage.pushArrayItem("ficha", ficha);*/ 
 
 
	alert("arquivos salvos");
 
var fichap1_recuperada = (JSON.parse(localStorage.getItem("fichap1")));

  
	localStorage.setItem("contp1",number_p1++);
var v_cont_mult_p1;
	v_cont_mult_p1 = localStorage.getItem("cont_multiplap1");

}
;

	
	
function enviar(){
	    armazenamento_local_json = JSON.stringify(localStorage);  // passar o armazenamento local para formato json
    var xhr = new XMLHttpRequest();                           // cria um objeto do tipo mensagem http://
    xhr.open("POST", "https://script.google.com/macros/s/AKfycbyvPCrrhz4ft7fvwFLsqr9nbJU1zP8PbxCgXboeMfm1ibU_DFVv/exec", true);
    xhr.setRequestHeader("Content-Type", "text/plain");          // configura a mensagem como POST=envia dados, e diz que a mensagem http://
                                                              // será enviada para o endereço do script da planilha google, e ajeita o cabeçalho
    xhr.send(armazenamento_local_json);                                             // envia a mensagem

	localStorage.clear();
	
	
	alert("arquivos enviados");
	
}



