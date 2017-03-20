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
 var fichap2 = {};
 var fichap3 = {};
 var fichap4 = {};
 var fichap5 = {};
 var fichap6 = {};
 var number_p1 = localStorage.getItem("contp1");
	localStorage.setItem("cont_multiplap1",number_p1++);

function identificacao_geral()
{
var v_cont_p1;
	v_cont_p1 = localStorage.getItem("contp1");

	    fichap1.nome_da_agroindustria = iig_n_ind.value;
    fichap1.localizacao_da_agroindustria = iig_cidade.value;

	fichap1.Nome=idp_nome.value;
	fichap1.Endereco=idp_endereco.value;
	fichap1.Cidade=idp_cidade.value;
	fichap1.E_mail=idp_e_mail.value;
	fichap1.Telefone=idp_telefone.value;
	
        localStorage.setItem("fichap1["+v_cont_p1+"]", JSON.stringify(fichap1));
 
    var fichap1_recuperada = (JSON.parse(localStorage.getItem("fichap1")));
"Nome_da_agroindustria".text = iig_n_ind.value = "";
"localizacao_da_agroindustria".text = iig_cidade.value = "";
"Nome".text = idp_nome.value = "";
"Endereco".text = idp_endereco.value = "";
"Cidade".text = idp_cidade.value = "";
"E_mail".text = idp_e_mail.value = "";
"Telefone".text = idp_telefone.value = "";

  /*localStorage.pushArrayItem("ficha", ficha);*/
  
	localStorage.setItem("contp1",number_p1++);
var v_cont_mult_p1;
	v_cont_mult_p1 = localStorage.getItem("cont_multiplap1");
	
location.href="2_dados_agroindustria.html";
	alert("arquivos salvos");

}
function f_1_2(ff_1_2)
{
if(ff_1_2 == 1){fichap1.categoria=iig_c_l_derivados.value;}
if(ff_1_2 == 2){fichap1.categoria=iig_c_f_hortalicas.value;}
if(ff_1_2 == 3){fichap1.categoria=iig_c_c_derivados.value;}
if(ff_1_2 == 4){fichap1.categoria=iig_c_c_acucar.value;}
if(ff_1_2 == 5){fichap1.categoria=iig_c_o_derivados.value;}
if(ff_1_2 == 6){fichap1.categoria=iig_c_pescados.value;}
if(ff_1_2 == 7){fichap1.categoria=iig_c_mel.value;}
if(ff_1_2 == 8){fichap1.categoria=iig_c_panificavao.value;}
if(ff_1_2 == 9){fichap1.categoria=iig_c_outra.value;}
}

/*fim identificação geral*/
/*inicio dados da agroindustria*/

var number_p2 = localStorage.getItem("contp2");
	localStorage.setItem("cont_multiplap2",number_p2++);
function dados_agroindustria()
{
var v_cont_p2;
	v_cont_p2 = localStorage.getItem("contp2");
	
	fichap2.numero_banheiro=i_n_banheiros.value;
fichap2.Total_de_mão_de_obra=i_tmonp_envolvidas.value;
fichap2.numero_homens_familiar=i_nh_fami.value;
fichap2.numero_mulheres_familiar=i_nm_fami.value;
fichap2.numero_homens_contratados=i_ndh_cont.value;
fichap2.numero_mulheres_contratadas=i_mulh_cont.value;
fichap2.tipo_Especie_1=i_te_esp_1.value;
fichap2.tipo_Especie_2=i_te_esp_2.value;
fichap2.tipo_Especie_3=i_te_esp_3.value;
fichap2.Quantidade_utilizada_por_Mes_Especie_1=i_qupm_esp_1.value;
fichap2.Quantidade_utilizada_por_Mes_Especie_2=i_qupm_esp_2.value;
fichap2.Quantidade_utilizada_por_Mes_Especie_3=i_qupm_esp_3.value;
fichap2.Produto_1_nome_do_produto=i_np_n_pro1.value;
fichap2.Produto_1_qtidade_mes=i_p1_q_mes.value;
fichap2.Produto_1_unidade=i_p1_unidade.value;
fichap2.Produto_1_preco_de_venda=i_p1_p_venda.value;
fichap2.Produto_2_nome_do_produto=i_np_n_pro2.value;
fichap2.Produto_2_qtidade_mes=i_p2_q_mes.value;
fichap2.Produto_2_unidade=i_p2_unidade.value;
fichap2.Produto_2_preco_de_venda=i_p2_p_venda.value;
fichap2.Produto_3_nome_do_produto=i_np_n_pro3.value;
fichap2.Produto_3_qtidade_mes=i_p3_q_mes.value;
fichap2.Produto_3_unidade=i_p3_unidade.value;
fichap2.Produto_3_preco_de_venda=i_p3_p_venda.value;
fichap2.Produto_4_nome_do_produto=i_np_n_pro4.value;
fichap2.Produto_4_qtidade_mes=i_p4_q_mes.value;
fichap2.Produto_4_unidade=i_p4_unidade.value;
fichap2.Produto_4_preco_de_venda=i_p4_p_venda.value;
		
	localStorage.setItem("contp2",number_p2++);
		
var v_cont_mult_p2;
	v_cont_mult_p2 = localStorage.getItem("cont_multiplap2");
	
        localStorage.setItem("fichap2["+v_cont_mult_p2+"]", JSON.stringify(fichap2));
 
    var fichap2_recuperada = (JSON.parse(localStorage.getItem("fichap2")));
	
location.href="3_dados_comercialização_regulamentação.html";
	alert("arquivos salvos");
	}

function f_3_1(ff_3_1)
{
var	v_cont_mult_p2 = localStorage.getItem("cont_multiplap2");
	if(ff_3_1 == 1){fichap2.indcole=i_individual.value;}
	if(ff_3_1 == 2){fichap2.indcole=i_coletiva.value;}
}
	
function f_3_2(ff_3_2)
{
var	v_cont_mult_p2 = localStorage.getItem("cont_multiplap2");
	if(ff_3_2 == 1){fichap2.se_individual=i_i_microempresa.value;}	
	if(ff_3_2 == 2){fichap2.se_individual=i_i_CPF.value;}
	
}

function f_3_3(ff_3_3)
{
var	v_cont_mult_p2 = localStorage.getItem("cont_multiplap2");
	if(ff_3_3 == 1){fichap2.se_coletiva=i_c_associação.value;}
	if(ff_3_3 == 2){fichap2.se_coletiva=i_c_Cooperativa.value;}
	if(ff_3_3 == 3){fichap2.se_coletiva=i_c_g_informal.value;}
}

function f_3_4(ff_3_4)
{
var	v_cont_mult_p2 = localStorage.getItem("cont_multiplap2");
	if(ff_3_4 == 1){fichap2.Localizacao=i_loc_rural.value;}
	if(ff_3_4 == 2){fichap2.Localizacao=i_loc_urbana.value;}
}

function f_3_5(ff_3_5)
{
var	v_cont_mult_p2 = localStorage.getItem("cont_multiplap2");
	if(ff_3_5 == 1){fichap2.Instalacao=i_inst_propria.value;}
	if(ff_3_5 == 2){fichap2.Instalacao=i_inst_alugada.value;}
	if(ff_3_5 == 3){fichap2.Instalacao=i_inst_outra.value;}
}

function f_3_6(ff_3_6)
{
var	v_cont_mult_p2 = localStorage.getItem("cont_multiplap2");
	if(ff_3_6 == 1){fichap2.area_construida=i_ac_ate_50.value;}
	if(ff_3_6 == 2){fichap2.area_construida=i_ac_50_80.value;}
	if(ff_3_6 == 3){fichap2.area_construida=i_ac_80_150.value;}
	if(ff_3_6 == 4){fichap2.area_construida=i_ac_150_250.value;}
	if(ff_3_6 == 5){fichap2.area_construida=i_ac_maior_250.value;}
}

function f_3_7_2(ff_3_7_2)
{
var	v_cont_mult_p2 = localStorage.getItem("cont_multiplap2");
	if(ff_3_7_2 == 1){fichap2.cont_multiplap2=i_esiv_s.value;}
	if(ff_3_7_2 == 2){fichap2.cont_multiplap2=i_esiv_n.value;}
}

function f_3_8_1(ff_3_8_1)
{
var	v_cont_mult_p2 = localStorage.getItem("cont_multiplap2");
	if(ff_3_8_1 == 1){fichap2.possui_dependencias_exclusiva_para_producao=i_epdepp_s.value;}
	if(ff_3_8_1 == 2){fichap2.possui_dependencias_exclusiva_para_producao=i_epdepp_n.value;}
}

function f_3_9_2(ff_3_9_2)
{
var	v_cont_mult_p2 = localStorage.getItem("cont_multiplap2");
	if(ff_3_9_2 == 1){fichap2.Exclusiva_familiar=i_exc_fami_s.value;}
	if(ff_3_9_2 == 2){fichap2.Exclusiva_familiar=i_exc_fami_n.value;}
}

function f_3_9_4(ff_3_9_4)
{
var	v_cont_mult_p2 = localStorage.getItem("cont_multiplap2");
	if(ff_3_9_4 == 1){fichap2.faixa_etaria_homens=i_feh_fami_menor_16.value;}
	if(ff_3_9_4 == 2){fichap2.faixa_etaria_homens=i_feh_fami_16_25.value;}
	if(ff_3_9_4 == 3){fichap2.faixa_etaria_homens=i_feh_fami_25_50.value;}
	if(ff_3_9_4 == 4){fichap2.faixa_etaria_homens=i_feh_fami_50_60.value;}
	if(ff_3_9_4 == 5){fichap2.faixa_etaria_homens=i_feh_fami_maior_60.value;}
}

function f_3_9_6(ff_3_9_6)
{
var	v_cont_mult_p2 = localStorage.getItem("cont_multiplap2");
	if(ff_3_9_6 == 1){fichap2.faixa_etaria_mulheres=i_fem_menor_16.value;}
	if(ff_3_9_6 == 2){fichap2.faixa_etaria_mulheres=i_fem__16_25.value;}
	if(ff_3_9_6 == 3){fichap2.faixa_etaria_mulheres=i_fem_25_50.value;}
	if(ff_3_9_6 == 4){fichap2.faixa_etaria_mulheres=i_fem_50_60.value;}
	if(ff_3_9_6 == 5){fichap2.faixa_etaria_mulheres=i_fem_maior_60.value;}
}

function f_3_9_7(ff_3_9_7)
{
var	v_cont_mult_p2 = localStorage.getItem("cont_multiplap2");
	if(ff_3_9_7 == 1){fichap2.renda_media_familia=i_rmfsm_1_3.value;}
	if(ff_3_9_7 == 2){fichap2.renda_media_familia=i_rmfsm_3_5.value;}
	if(ff_3_9_7 == 3){fichap2.renda_media_familia=i_rmfsm_5_10.value;}
	if(ff_3_9_7 == 4){fichap2.renda_media_familia=i_rmfsm_maior_10.value;}
}

function f_3_9_8(ff_3_9_8)
{
var	v_cont_mult_p2 = localStorage.getItem("cont_multiplap2");
	if(ff_3_9_8 == 1){fichap2.Grau_importancia_ativ_renda_prop_e_da_familia=i_giarpf_alta.value;}
	if(ff_3_9_8 == 2){fichap2.Grau_importancia_ativ_renda_prop_e_da_familia=i_giarpf_Media.value;}
	if(ff_3_9_8 == 3){fichap2.Grau_importancia_ativ_renda_prop_e_da_familia=i_giarpf_baixa.value;}
}

function f_3_9_9(ff_3_9_9)
{
var	v_cont_mult_p2 = localStorage.getItem("cont_multiplap2");
	if(ff_3_9_9 == 1){fichap2.mao_de_obra_contratada=i_mdo_cont_s.value;}
	if(ff_3_9_9 == 2){fichap2.mao_de_obra_contratada=i_mdo_cont_n.value;}
}

function f_3_10_1(ff_3_10_1)
{
var	v_cont_mult_p2 = localStorage.getItem("cont_multiplap2");
	if(ff_3_10_1 == 1){fichap2.Procedencia=i_proc_prop.value;}
	if(ff_3_10_1 == 2){fichap2.Procedencia=i_proc_terc.value;}
}
/*fim dados da agroindustria*/


/* inicio investimento */
var number_p6 = localStorage.getItem("contp6");
	localStorage.setItem("cont_multiplap6",number_p6++);
function investimento()
{
var v_cont_p6;
	v_cont_p6 = localStorage.getItem("contp6");

	fichap6.Tipo_de_Financiamento=i_t_finan.value;

	fichap6.outros=i_ssqa_o.value;	

	fichap6.Tipos_área=i_cap_c_tre_ta.value;	

	fichap6.Em_que_áreas=i_assi_t_eqa.value;	

	fichap6.Valor_médio=i_c_vm.value;	

	fichap6.outra_demanda_A=i_aodnue_A.value;	

	fichap6.outra_demanda_B=i_aodnue_B.value;	
	
	localStorage.setItem("contp6",number_p6++);
	
	        localStorage.setItem("fichap6["+v_cont_p6+"]", JSON.stringify(fichap6));
 
    var fichap6_recuperada = (JSON.parse(localStorage.getItem("fichap6")));
		
var v_cont_mult_p6;
	v_cont_mult_p6 = localStorage.getItem("cont_multiplap6");
	
location.href="fichas.html";
	alert("arquivos salvos");
}

function f_9_1(ff_9_1)
{
var	v_cont_mult_p6 = localStorage.getItem("cont_multiplap6");
	if(ff_9_1 == 1){fichap6.Total_investido_na_agroindustria=i_tiagro_0_10.value;}
	if(ff_9_1 == 2){fichap6.Total_investido_na_agroindustria=i_tiagro_10_50.value;}
	if(ff_9_1 == 3){fichap6.Total_investido_na_agroindustria=i_tiagro_50_100.value;}
	if(ff_9_1 == 4){fichap6.Total_investido_na_agroindustria=i_tiagro_100_500.value;}
	if(ff_9_1 == 5){fichap6.Total_investido_na_agroindustria=i_tiagro_500_1.value;}
	if(ff_9_1 == 6){fichap6.Total_investido_na_agroindustria=i_tiagro_mais_1.value;}
	}

function f_9_2(ff_9_2)
{
var	v_cont_mult_p6 = localStorage.getItem("cont_multiplap6");

	if(ff_9_2 == 1){fichap6.Recursos=i_rec_pro.value;}	
	if(ff_9_2 == 2){fichap6.Recursos=i_rec_t_fin.value;}
	}

function f_9_4(ff_9_4)
{
var	v_cont_mult_p6 = localStorage.getItem("cont_multiplap6");
	if(ff_9_4 == 1){fichap6.pretende_investir=i_p_inv_s.value;}
	if(ff_9_4 == 2){fichap6.pretende_investir=i_p_inv_n.value;}
}
function f_9_5(ff_9_5)
{
var	v_cont_mult_p6 = localStorage.getItem("cont_multiplap6");
	if(ff_9_5 == 1){fichap6.em_qual_area=i_ssqa_equip.value;}
	if(ff_9_5 == 2){fichap6.em_qual_area=i_ssqa_ad_amp.value;}
	if(ff_9_5 == 3){fichap6.em_qual_area=i_ssqa_veic.value;}
	if(ff_9_5 == 4){fichap6.em_qual_area=i_ssqa_mar_rot.value;}	
	if(ff_9_5 == 5){fichap6.em_qual_area=i_ssqa_a_mer.value;}
}

function f_10_1(ff_10_1)
{
var	v_cont_mult_p6 = localStorage.getItem("cont_multiplap6");
	if(ff_10_1 == 1){fichap6.Capacitação_cursos_treinamentos=i_cap_c_tre_s.value;}
	if(ff_10_1 == 2){fichap6.Capacitação_cursos_treinamentos=i_cap_c_tre_n.value;}
}

function f_10_2(ff_10_2)
{
var	v_cont_mult_p6 = localStorage.getItem("cont_multiplap6");
	if(ff_10_2 == 1){fichap6.assistencia_tecnica=i_assi_t_s.value;}
	if(ff_10_2 == 2){fichap6.assistencia_tecnica=i_assi_t_n.value;}
}

function f_10_3(ff_10_3)
{
var	v_cont_mult_p6 = localStorage.getItem("cont_multiplap6");
	if(ff_10_3 == 1){fichap6.Projeto_adequação_ampliação_Equipamentos=i_paaqe_s.value;}	
	if(ff_10_3 == 2){fichap6.Projeto_adequação_ampliação_Equipamentos=i_paaqe_n.value;}
}

function f_10_4(ff_10_4)
{
var	v_cont_mult_p6 = localStorage.getItem("cont_multiplap6");
	if(ff_10_4 == 1){fichap6.comercializacao=i_c_inser.value;}
	if(ff_10_4 == 2){fichap6.comercializacao=i_c_amp_merc.value;}
}

function f_10_5(ff_10_5)
{
var	v_cont_mult_p6 = localStorage.getItem("cont_multiplap6");
	if(ff_10_5 == 1){fichap6.credito=i_c_cap_giro.value;}
	if(ff_10_5 == 2){fichap6.credito=i_c_inves.value;}
}
/* fim investimento */

/* inicio comercializacao e regulamentacao */
var number_p3 = localStorage.getItem("contp3");
	localStorage.setItem("cont_multiplap3",number_p3++);
	
function comercicializacao_regumalentacao()
{
	var v_cont_p3;
	v_cont_p3 = localStorage.getItem("contp3");
	
	localStorage.setItem("contp3",number_p3++);
	

	
	        localStorage.setItem("fichap3["+v_cont_p3+"]", JSON.stringify(fichap3));
 
    var fichap3_recuperada = (JSON.parse(localStorage.getItem("fichap3")));

	var v_cont_mult_p3;
	v_cont_mult_p3 = localStorage.getItem("cont_multiplap3");
	
	location.href="4_dados_tecnologia_assistencia.html";
	alert("arquivos salvos");
}

function f_4_1(ff_4_1)
{
var	v_cont_mult_p3 = localStorage.getItem("cont_multiplap3");
	if(ff_4_1 == 1){fichap3.Faturamento_médio_mensal_da_agroindustria=i_fmm_agor_1_10.value;}	
	if(ff_4_1 == 2){fichap3.Faturamento_médio_mensal_da_agroindustria=i_fmm_agor_10_50.value;}		
	if(ff_4_1 == 3){fichap3.Faturamento_médio_mensal_da_agroindustria=i_fmm_agor_50_100.value;}		
	if(ff_4_1 == 4){fichap3.Faturamento_médio_mensal_da_agroindustria=i_fmm_agor_100_500.value;}		
	if(ff_4_1 == 5){fichap3.Faturamento_médio_mensal_da_agroindustria=i_fmm_agor_maior_500.value;}	
}

function f_4_2(ff_4_2)
{
var	v_cont_mult_p3 = localStorage.getItem("cont_multiplap3");
	if(ff_4_2 == 1){fichap3.Grau_prioridade_renda_relação_propriedade=i_gprr_prop_alta.value;}		
	if(ff_4_2 == 2){fichap3.Grau_prioridade_renda_relação_propriedade=i_gprr_prop_media.value;}			
	if(ff_4_2 == 3){fichap3.Grau_prioridade_renda_relação_propriedade=i_gprr_prop_baixa.value;}	
}

function f_4_3(ff_4_3)
{
var	v_cont_mult_p3 = localStorage.getItem("cont_multiplap3");
	if(ff_4_3 == 1){fichap3.local_de_venda=i_lv_municipal.value;}			
	if(ff_4_3 == 2){fichap3.local_de_venda=i_lv_regional.value;}		
	if(ff_4_3 == 3){fichap3.local_de_venda=i_lv_estadual.value;}				
	if(ff_4_3 == 4){fichap3.local_de_venda=i_lv_nacional.value;}	
}
/* inicio tabela */

function f_4_4_1(ff_4_4_1)
{
var	v_cont_mult_p3 = localStorage.getItem("cont_multiplap3");
	if(ff_4_4_1 == 1){fichap3.varejo_supermercado=i_tab_vs_0_20.value;}		
	if(ff_4_4_1 == 2){fichap3.varejo_supermercado=i_tab_vs_21_40.value;}		
	if(ff_4_4_1 == 3){fichap3.varejo_supermercado=i_tab_vs_41_60.value;}		
	if(ff_4_4_1 == 4){fichap3.varejo_supermercado=i_tab_vs_61_80.value;}				
	if(ff_4_4_1 == 5){fichap3.varejo_supermercado=i_tab_vs_81_100.value;}	
}

function f_4_4_2(ff_4_4_2)
{
var	v_cont_mult_p3 = localStorage.getItem("cont_multiplap3");
	if(ff_4_4_2 == 1){fichap3.atacado=i_tab_a_0_20.value;}		
	if(ff_4_4_2 == 2){fichap3.atacado=i_tab_a_21_40.value;}		
	if(ff_4_4_2 == 3){fichap3.atacado=i_tab_a_41_60.value;}		
	if(ff_4_4_2 == 4){fichap3.atacado=i_tab_a_61_80.value;}			
	if(ff_4_4_2 == 5){fichap3.atacado=i_tab_a_81_100.value;}		
	}

function f_4_4_3(ff_4_4_3)
{
var	v_cont_mult_p3 = localStorage.getItem("cont_multiplap3");
	if(ff_4_4_3 == 1){fichap3.venda_direta_feira=i_tab_vdf_0_20.value;}		
	if(ff_4_4_3 == 2){fichap3.venda_direta_feira=i_tab_vdf_21_40.value;}		
	if(ff_4_4_3 == 3){fichap3.venda_direta_feira=i_tab_vdf_41_60.value;}		
	if(ff_4_4_3 == 4){fichap3.venda_direta_feira=i_tab_vdf_61_80.value;}			
	if(ff_4_4_3 == 5){fichap3.venda_direta_feira=i_tab_vdf_81_100.value;}		
}

function f_4_4_4(ff_4_4_4)
{
var	v_cont_mult_p3 = localStorage.getItem("cont_multiplap3");
	if(ff_4_4_4 == 1){fichap3.representante_comercial=i_tab_rc_0_20.value;}	
	if(ff_4_4_4 == 2){fichap3.representante_comercial=i_tab_rc_21_40.value;}	
	if(ff_4_4_4 == 3){fichap3.representante_comercial=i_tab_rc_41_60.value;}	
	if(ff_4_4_4 == 4){fichap3.representante_comercial=i_tab_rc_61_80.value;}		
	if(ff_4_4_4 == 5){fichap3.representante_comercial=i_tab_rc_81_100.value;}	
}

function f_4_4_5(ff_4_4_5)
{
var	v_cont_mult_p3 = localStorage.getItem("cont_multiplap3");
	if(ff_4_4_5 == 1){fichap3.institucional_escola=i_tab_ie_0_20.value;}		
	if(ff_4_4_5 == 2){fichap3.institucional_escola=i_tab_ie_21_40.value;}		
	if(ff_4_4_5 == 3){fichap3.institucional_escola=i_tab_ie_41_60.value;}		
	if(ff_4_4_5 == 4){fichap3.institucional_escola=i_tab_ie_61_80.value;}			
	if(ff_4_4_5 == 5){fichap3.institucional_escola=i_tab_ie_81_100.value;}	
}
/* fim tabela */

function f_5_1(ff_5_1)
{
var	v_cont_mult_p3 = localStorage.getItem("cont_multiplap3");
	if(ff_5_1 == 1){fichap3.Regularização_sanitária_inspeção_sanitária_produto_animal=i_rsis_a_SIM.value;}		
	if(ff_5_1 == 2){fichap3.Regularização_sanitária_inspeção_sanitária_produto_animal=i_rsis_a_SIP.value;}		
	if(ff_5_1 == 3){fichap3.Regularização_sanitária_inspeção_sanitária_produto_animal=i_rsis_a_SIF.value;}		
	if(ff_5_1 == 4){fichap3.Regularização_sanitária_inspeção_sanitária_produto_animal=i_rsis_a_SISBI.value;}				
	if(ff_5_1 == 5){fichap3.Regularização_sanitária_inspeção_sanitária_produto_animal=i_rsis_a_s_insp.value;}	
}

function f_5_2(ff_5_2)
{
var	v_cont_mult_p3 = localStorage.getItem("cont_multiplap3");
	if(ff_5_2 == 1){fichap3.Regularização_sanitária_origem_vegetal=i_rs_v_X.value;}			
	if(ff_5_2 == 2){fichap3.Regularização_sanitária_origem_vegetal=i_rs_n_vs.value;}	
}

function f_5_3(ff_5_3)
{
var	v_cont_mult_p3 = localStorage.getItem("cont_multiplap3");	
	if(ff_5_3 == 1){fichap3.Rotulagem=i_r_rot_adq.value;}			
	if(ff_5_3 == 2){fichap3.Rotulagem=i_r_rot_nadq.value;}	
}

function f_5_4(ff_5_4)
{
var	v_cont_mult_p3 = localStorage.getItem("cont_multiplap3");	
	if(ff_5_4 == 1){fichap3.Regularização_ambiental=i_ra_s.value;}		
	if(ff_5_4 == 2){fichap3.Regularização_ambiental=i_ra_n.value;}	
}

/*fim comercializacaoo e regulamentacao*/

/*inicio tecnologia assistencia*/
var number_p4 = localStorage.getItem("contp4");
	localStorage.setItem("cont_multiplap4",number_p4++);
	
function f_tecnologia_assistencia()
{
var v_cont_p4;
	v_cont_p4 = localStorage.getItem("contp4");
	
	fichap4.outros_processos_aplicados_na_transformação=i_t_apat_out.value;

	fichap4.Tipos_De_equipamentos_principias_para_processo=i_t_teppp.value;

	fichap4.Qual_entidade=i_t_q_ent.value;
	
	localStorage.setItem("contp4",number_p4++);
var v_cont_mult_p4;
	v_cont_mult_p4 = localStorage.getItem("cont_multiplap4");
	
	        localStorage.setItem("fichap4["+v_cont_p4+"]", JSON.stringify(fichap4));
 
    var fichap4_recuperada = (JSON.parse(localStorage.getItem("fichap4")));
	
location.href="5_dados_ambiental.html";
	alert("arquivos salvos");
	
}
function f_6_1(ff_6_1)
{
var	v_cont_mult_p4 = localStorage.getItem("cont_multiplap4");	
	if(ff_6_1 == 1){fichap4.Nível_de_tecnologia_de_produção_aplicada=i_n_t_p_a_avan.value;}	
	if(ff_6_1 == 2){fichap4.Nível_de_tecnologia_de_produção_aplicada=i_n_t_p_a_med.value;}		
	if(ff_6_1 == 3){fichap4.Nível_de_tecnologia_de_produção_aplicada=i_n_t_p_a_art.value;}	
}

function f_7_1(ff_7_1)
{
var	v_cont_mult_p4 = localStorage.getItem("cont_multiplap4");		
	if(ff_7_1 == 1){fichap4.Possui_assistência_técnica_frequente=i_p_a_t_f_s.value;}	
	if(ff_7_1 == 2){fichap4.Possui_assistência_técnica_frequente=i_p_a_t_f_n.value;}	
}


/*inicio Aponte os processos aplicados na transformação*/

var vApa1, vApa2, vApa3, vApa4, vApa5, vApa6;
vApa1=0;
vApa2=0;
vApa3=0;
vApa4=0;
vApa5=0;
vApa6=0;

function f_vApa1(){
var	v_cont_mult_p4 = localStorage.getItem("cont_multiplap4");
	vApa1 = vApa1+1;
	if(vApa1%2 == 1){fichap4.processos_na_transformacao1=i_a_p_a_t_past.value;}	
	if(vApa1%2 == 0){fichap4.processos_na_transformacao1=i_a_p_a_t_past.value;}	
}
function f_vApa2(){
var	v_cont_mult_p4 = localStorage.getItem("cont_multiplap4");
	vApa2 = vApa2+1;	
	if(vApa2%2 == 1){fichap4.processos_na_transformacao2=i_a_p_a_t_refri.value;}
	if(vApa2%2 == 0){fichap4.processos_na_transformacao2=i_a_p_a_t_refri.value;}
}
function f_vApa3(){
var	v_cont_mult_p4 = localStorage.getItem("cont_multiplap4");
	vApa3 = vApa3+1;
	if(vApa3%2 == 1){fichap4.processos_na_transformacao3=i_a_p_a_t_cong.value;}
	if(vApa3%2 == 0){fichap4.processos_na_transformacao3=i_a_p_a_t_cong.value;}
}
function f_vApa4(){
var	v_cont_mult_p4 = localStorage.getItem("cont_multiplap4");
	vApa4 = vApa4+1;
	if(vApa4%2 == 1){fichap4.processos_na_transformacao4=i_a_p_a_t_uflb.value;}
	if(vApa4%2 == 0){fichap4.processos_na_transformacao4=i_a_p_a_t_uflb.value;}
}
function f_vApa5(){
var	v_cont_mult_p4 = localStorage.getItem("cont_multiplap4");
	vApa5 = vApa5+1;
	if(vApa5%2 == 1){fichap4.processos_na_transformacao5=i_a_p_a_t_defu.value;}
	if(vApa5%2 == 0){fichap4.processos_na_transformacao5=i_a_p_a_t_defu.value;}
	}
function f_vApa6(){
var	v_cont_mult_p4 = localStorage.getItem("cont_multiplap4");
	vApa6 = vApa6+1;
	if(vApa6%2 == 1){fichap4.processos_na_transformacao6=i_a_p_a_t_emva.value;}
	if(vApa6%2 == 0){fichap4.processos_na_transformacao6=i_a_p_a_t_emva.value;}
	}


/*fim Aponte os processos aplicados na transformação*/


/*Aponte os controles e acompanhamento de processos*/
var vAcap1, vAcap2, vAcap3, vAcap4, vAcap5;
vAcap1 = 0;
vAcap2 = 0;
vAcap3 = 0;
vAcap4 = 0;
vAcap5 = 0;

function f_vAcap1(){
var	v_cont_mult_p4 = localStorage.getItem("cont_multiplap4");
	vAcap1 = vAcap1+1;
	
	if(vAcap1%2 == 1){fichap4.controle_processo1=i_a_c_a_p_camp.value;}
	if(vAcap1%2 == 1){fichap4.controle_processo1=i_a_c_a_p_camp.value;}
}
function f_vAcap2(){
var	v_cont_mult_p4 = localStorage.getItem("cont_multiplap4");
	vAcap2 = vAcap2+1;

	if(vAcap2%2 == 1){fichap4.controle_processo2=i_a_c_a_p_BPF.value;}
	if(vAcap2%2 == 1){fichap4.controle_processo2=i_a_c_a_p_BPF.value;}
}
function f_vAcap3(){
var	v_cont_mult_p4 = localStorage.getItem("cont_multiplap4");
	vAcap3 = vAcap3+1;
	
	if(vAcap3%2 == 1){fichap4.controle_processo3=i_a_c_a_p_reg.value;}
	if(vAcap3%2 == 0){fichap4.controle_processo3=i_a_c_a_p_reg.value;}
}
function f_vAcap4(){
var	v_cont_mult_p4 = localStorage.getItem("cont_multiplap4");
	vAcap4 = vAcap4+1;

	if(vAcap4%2 == 1){fichap4.controle_processo4=i_a_c_a_p_v_pra.value;}
	if(vAcap4%2 == 0){fichap4.controle_processo4=i_a_c_a_p_v_pra.value;}
}
function f_vAcap5(){
var	v_cont_mult_p4 = localStorage.getItem("cont_multiplap4");
	vAcap5 = vAcap5+1;

	if(vAcap5%2 == 1){fichap4.controle_processo5=i_a_c_a_p_con_mic.value;}
	if(vAcap5%2 == 0){fichap4.controle_processo5=i_a_c_a_p_con_mic.value;}
}

/*Aponte os controles e acompanhamento de processos*/


/* fim tecnologia assistencia*/


/* inicio ambiental */
var number_p5 = localStorage.getItem("contp5");
	localStorage.setItem("cont_multiplap5",number_p5++);
function ambiental()
{	
var v_cont_p5;
	v_cont_p5 = localStorage.getItem("contp5");

fichap5.destino_esgoto_sanitario=I_DES.value;

fichap5.RESIDUOS_SOLIDOS_GERADOS_NA_AGROINDUSTRIA=I_RSGA.value;

fichap5.DESTINO_RESIDUOS_SOLIDOS=I_QDDRS.value;

fichap5.RESIDUOS_LIQUIDOS_GERADOS_NA_AGROINDUSTRIA=I_QSRLGA.value;

fichap5.DESTINO_RESIDUOS_LIQUIDOS=I_QDDRL.value;

fichap5.UTILIZA_ALGUM_COMBUSTIVEL_PROCESSO_PRODUTIVO=I_UACPBP.value;

fichap5.ORIGEM_DESSES_COMBUSTIVEIS=I_OD_COMBUSTIVEL.value;

fichap5.QUAIS_SAO_ELES=I_QSELES.value;

        localStorage.setItem("fichap5["+v_cont_p5+"]", JSON.stringify(fichap5));
 
    var fichap5_recuperada = (JSON.parse(localStorage.getItem("fichap5")));


	localStorage.setItem("contp5",number_p5++);
var v_cont_mult_p5;
	v_cont_mult_p5 = localStorage.getItem("cont_multiplap5");
	
location.href="6_dados_investimento.html";
	alert("arquivos salvos");
	
}

function f_8_1(ff_8_1) 
{
var	v_cont_mult_p5 = localStorage.getItem("cont_multiplap5");
		if(ff_8_1 == 1){fichap5.SE_ENQUADRA_NA_LEGISLAÇÃO_AMBIENTAL=I_ELA_atende.value;}
		if(ff_8_1 == 1){fichap5.SE_ENQUADRA_NA_LEGISLAÇÃO_AMBIENTAL=I_ELA_ate_parcialmente.value;}
		if(ff_8_1 == 1){fichap5.SE_ENQUADRA_NA_LEGISLAÇÃO_AMBIENTAL=I_ELA_n_atende.value;}
		if(ff_8_1 == 1){fichap5.SE_ENQUADRA_NA_LEGISLAÇÃO_AMBIENTAL=I_ELA_n_sabe.value;}
}

function f_8_4_1(ff_8_4_1)
{
var	v_cont_mult_p5 = localStorage.getItem("cont_multiplap5");
	if(ff_8_4_1 == 1){fichap5.agua_usada_na_materia_prima=i_MP_0_25.value;}
	if(ff_8_4_1 == 1){fichap5.agua_usada_na_materia_prima=i_MP_26_50.value;}
	if(ff_8_4_1 == 1){fichap5.agua_usada_na_materia_prima=i_MP_51_75.value;}
	if(ff_8_4_1 == 1){fichap5.agua_usada_na_materia_prima=i_MP_76_100.value;}
}

function f_8_4_2(ff_8_4_2)
{
var	v_cont_mult_p5 = localStorage.getItem("cont_multiplap5");
	if(ff_8_4_2 == 1){fichap5.agua_usada_no_benificiamento_produtos=i_BP_0_25.value;}
	if(ff_8_4_2 == 1){fichap5.agua_usada_no_benificiamento_produtos=i_BP_26_50.value;}
	if(ff_8_4_2 == 1){fichap5.agua_usada_no_benificiamento_produtos=i_BP_51_75.value;}
	if(ff_8_4_2 == 1){fichap5.agua_usada_no_benificiamento_produtos=i_BP_76_100.value;}
}

function f_8_4_3(ff_8_4_3)
{
var	v_cont_mult_p5 = localStorage.getItem("cont_multiplap5");
	if(ff_8_4_3 == 1){fichap5.fracao_da_agua_usada_na_limpeza_instalacoes=i_LI_0_25.value;}
	if(ff_8_4_3 == 1){fichap5.fracao_da_agua_usada_na_limpeza_instalacoes=i_LI_26_50.value;}
	if(ff_8_4_3 == 1){fichap5.fracao_da_agua_usada_na_limpeza_instalacoes=i_LI_51_75.value;}
	if(ff_8_4_3 == 1){fichap5.fracao_da_agua_usada_na_limpeza_instalacoes=i_LI_76_100.value;}
}

function f_8_5(ff_8_5)
{
var	v_cont_mult_p5 = localStorage.getItem("cont_multiplap5");

	if(ff_8_5 == 1){fichap5.REALIZADO_TRAT_AGUA_ANTES_UTIL=I_RATAAU_s.value;}
	if(ff_8_5 == 1){fichap5.REALIZADO_TRAT_AGUA_ANTES_UTIL=I_RATAAU_n.value;}
}

function f_8_7(ff_8_7)
{
var	v_cont_mult_p5 = localStorage.getItem("cont_multiplap5");
	if(ff_8_7 == 1){fichap5.EXISTENCIA_SISTEMA_TRATAMENTO_EFICIENCIA=I_ESTQE_25.value;}
	if(ff_8_7 == 1){fichap5.EXISTENCIA_SISTEMA_TRATAMENTO_EFICIENCIA=I_ESTQE_50.value;}
	if(ff_8_7 == 1){fichap5.EXISTENCIA_SISTEMA_TRATAMENTO_EFICIENCIA=I_ESTQE_75.value;}
	if(ff_8_7 == 1){fichap5.EXISTENCIA_SISTEMA_TRATAMENTO_EFICIENCIA=I_ESTQE_100.value;}
}

function f_8_14(ff_8_14)
{
var	v_cont_mult_p5 = localStorage.getItem("cont_multiplap5");
	if(ff_8_14==1){localStorage.setItem("REALIZA_REAPROVEITAM_PROC_PRODUTIVO["+v_cont_mult_p5+"]",I_RARPP_s.value);}
	if(ff_8_14==2){localStorage.setItem("REALIZA_REAPROVEITAM_PROC_PRODUTIVO["+v_cont_mult_p5+"]",I_RARPP_n.value);}
	if(ff_8_14 == 1){fichap5.REALIZA_REAPROVEITAM_PROC_PRODUTIVO=I_RARPP_s.value;}
	if(ff_8_14 == 1){fichap5.REALIZA_REAPROVEITAM_PROC_PRODUTIVO=I_RARPP_n.value;}
}
/* qual a fonte de agua */
var qfa0,qfa1,qfa2,qfa3,qfa4,qfa5;
qfa0=0;
qfa1=0;
qfa2=0;
qfa3=0;
qfa4=0;
qfa5=0;
function f_qfa_0(){
var	v_cont_mult_p5 = localStorage.getItem("cont_multiplap5");
	qfa0 = qfa0+1;
	if(qfa0%2 == 1){fichap5.QUAL_E_A_FONTE_DE_AGUA1=I_QFA_poco_artesiano.value;}
	if(qfa0%2 == 0){fichap5.QUAL_E_A_FONTE_DE_AGUA1=I_QFA_poco_artesiano.value;}
	
	
	}
function f_qfa_1(){
var	v_cont_mult_p5 = localStorage.getItem("cont_multiplap5");
	qfa1 = qfa1+1;
	if(qfa1%2 == 1){fichap5.QUAL_E_A_FONTE_DE_AGUA2=I_QFA_vertente.value;}
	if(qfa1%2 == 0){fichap5.QUAL_E_A_FONTE_DE_AGUA2=I_QFA_vertente.value;}
}
function f_qfa_2(){
var	v_cont_mult_p5 = localStorage.getItem("cont_multiplap5");
	qfa2 = qfa2+1;
	if(qfa2%2 == 1){fichap5.QUAL_E_A_FONTE_DE_AGUA3=I_QFA_a_r_publica.value;}
	if(qfa2%2 == 0){fichap5.QUAL_E_A_FONTE_DE_AGUA3=I_QFA_a_r_publica.value;}
	}
function f_qfa_3(){
var	v_cont_mult_p5 = localStorage.getItem("cont_multiplap5");
	qfa3 = qfa3+1;
	if(qfa3 == 1){fichap5.QUAL_E_A_FONTE_DE_AGUA4=I_QFA_poco_comum.value;}
	if(qfa3 == 0){fichap5.QUAL_E_A_FONTE_DE_AGUA4=I_QFA_poco_comum.value;}
	}
function f_qfa_4(){
var	v_cont_mult_p5 = localStorage.getItem("cont_multiplap5");
	qfa4 = qfa4+1;
	if(qfa4 == 1){fichap5.QUAL_E_A_FONTE_DE_AGUA5=I_QFA_nascente.value;}
	if(qfa4 == 0){fichap5.QUAL_E_A_FONTE_DE_AGUA5=I_QFA_nascente.value;}	
	}
function f_qfa_5(){
var	v_cont_mult_p5 = localStorage.getItem("cont_multiplap5");
	qfa5 = qfa5+1;
	if(qfa5%2 == 1){fichap5.QUAL_E_A_FONTE_DE_AGUA6=I_QFA_outro.value;}
	if(qfa5%2 == 0){fichap5.QUAL_E_A_FONTE_DE_AGUA6=I_QFA_outro.value;}	
	}
/*fim qual e a fonte de agua*/
/*PARA QUE E UTILIZADA A ÁGUA*/
var PQUA1, PQUA2, PQUA3;
PQUA1=0;
PQUA2=0;
PQUA3=0;
function F_PQUA_1(){
var	v_cont_mult_p5 = localStorage.getItem("cont_multiplap5");
	PQUA1 = PQUA1+1;
	if(PQUA1%2 == 1){fichap5.PARA_QUE_UTILIZADA_AGUA1=I_PQUA_MAT_PRIMA.value;}
	if(PQUA1%2 == 0){fichap5.PARA_QUE_UTILIZADA_AGUA1=I_PQUA_MAT_PRIMA.value;}
	}
function F_PQUA_2(){
var	v_cont_mult_p5 = localStorage.getItem("cont_multiplap5");
	PQUA2 = PQUA2+1;
	if(PQUA2%2 == 1){fichap5.PARA_QUE_UTILIZADA_AGUA2=I_PQUA_BENEF_PRODUTO.value;}
	if(PQUA2%2 == 0){fichap5.PARA_QUE_UTILIZADA_AGUA2=I_PQUA_BENEF_PRODUTO.value;}	
	}
function F_PQUA_3(){
var	v_cont_mult_p5 = localStorage.getItem("cont_multiplap5");
	PQUA3 = PQUA3+1;
	if(PQUA3%2 == 1){fichap5.PARA_QUE_UTILIZADA_AGUA3=I_PQUA_LIM_INSTACOES.value;}
	if(PQUA3%2 == 0){fichap5.PARA_QUE_UTILIZADA_AGUA3=I_PQUA_LIM_INSTACOES.value;}	
	}
/*PARA QUE E UTILIZADA A ÁGUA*/
/* fim ambiental*/

/* funçoes gerais */

function limpar()
{
    localStorage.clear();
    alert("arquivos apagados");
}
/* fim funçoes gerais */