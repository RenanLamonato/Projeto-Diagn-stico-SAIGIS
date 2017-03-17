/*inicio identificação geral*/
var number_p1 = localStorage.getItem("contp1");
	localStorage.setItem("cont_multiplap1",number_p1++);

function identificacao_geral()
{
var v_cont_p1;
	v_cont_p1 = localStorage.getItem("contp1");
	
	localStorage.setItem("Nome_da_agroindustria["+v_cont_p1+"]", iig_n_ind.value);
	 "Nome_da_agroindustria".text = iig_n_ind.value = "";
	
	localStorage.setItem("localizacao_da_agroindustria["+v_cont_p1+"]", iig_cidade.value);
 "localizacao_da_agroindustria".text = iig_cidade.value = "";
	
	localStorage.setItem("Nome["+v_cont_p1+"]", idp_nome.value);
 "Nome".text = idp_nome.value = "";
 
	localStorage.setItem("Endereco["+v_cont_p1+"]", idp_endereco.value);
 "Endereco".text = idp_endereco.value = "";
 
	localStorage.setItem("Cidade["+v_cont_p1+"]", idp_cidade.value);
 "Cidade".text = idp_cidade.value = "";
 
	localStorage.setItem("E_mail["+v_cont_p1+"]", idp_e_mail.value);
 "E_mail".text = idp_e_mail.value = "";
 
	localStorage.setItem("Telefone["+v_cont_p1+"]", idp_telefone.value);
 "Telefone".text = idp_telefone.value = "";
 
	localStorage.setItem("contp1",number_p1++);
	
var v_cont_mult_p1;
	v_cont_mult_p1 = localStorage.getItem("cont_multiplap1");
	
location.href="dados_agroindustria.html";
	alert("arquivos salvos");

}
function f_1_2(ff_1_2)
{
	var	v_cont_mult_p1 = localStorage.getItem("cont_multiplap1");
	if(ff_1_2 == 1){localStorage.setItem("categoria["+v_cont_mult_p1+"]",iig_c_l_derivados.value);}
	if(ff_1_2 == 2){localStorage.setItem("categoria["+v_cont_mult_p1+"]",iig_c_f_hortalicas.value);}
	if(ff_1_2 == 3){localStorage.setItem("categoria["+v_cont_mult_p1+"]",iig_c_c_derivados.value);}
	if(ff_1_2 == 4){localStorage.setItem("categoria["+v_cont_mult_p1+"]",iig_c_c_acucar.value);}
	if(ff_1_2 == 5){localStorage.setItem("categoria["+v_cont_mult_p1+"]",iig_c_o_derivados.value);}
	if(ff_1_2 == 6){localStorage.setItem("categoria["+v_cont_mult_p1+"]",iig_c_pescados.value);}
	if(ff_1_2 == 7){localStorage.setItem("categoria["+v_cont_mult_p1+"]",iig_c_mel.value);}
	if(ff_1_2 == 8){localStorage.setItem("categoria["+v_cont_mult_p1+"]",iig_c_panificavao.value);}
	if(ff_1_2 == 9){localStorage.setItem("categoria["+v_cont_mult_p1+"]",iig_c_outra.value);}
}

/*fim identificação geral*/
/*inicio dados da agroindustria*/
var number_p2 = localStorage.getItem("contp2");
	localStorage.setItem("cont_multiplap2",number_p2++);
function dados_agroindustria()
{
var v_cont_p2;
	v_cont_p2 = localStorage.getItem("contp2");
	
	localStorage.setItem("numero_banheiro["+v_cont_p2+"]",i_n_banheiros.value);
 "numero_banheiro".text = i_n_banheiros.value = "";
	localStorage.setItem("Total_de_mão_de_obra["+v_cont_p2+"]",i_tmonp_envolvidas.value);
 "Total_de_mão_de_obra".text = i_tmonp_envolvidas.value = "";
 
	localStorage.setItem("numero_homens_familiar["+v_cont_p2+"]",i_nh_fami.value);
 "numero_homens_familiar".text = i_nh_fami.value = "";
	localStorage.setItem("numero_mulheres_familiar["+v_cont_p2+"]",i_nm_fami.value);
 "numero_mulheres_familiar".text = i_nm_fami.value = "";
 
	localStorage.setItem("numero_homens_contratados["+v_cont_p2+"]",i_ndh_cont.value);
 "numero_homens_contratados".text = i_ndh_cont.value = "";
	localStorage.setItem("numero_mulheres_contratadas["+v_cont_p2+"]",i_mulh_cont.value);
 "numero_mulheres_contratadas".text = i_mulh_cont.value = "";
	
	localStorage.setItem("tipo_Especie_1["+v_cont_p2+"]",i_te_esp_1.value);
 "tipo_Especie_1".text = i_te_esp_1.value = "";
	localStorage.setItem("tipo_Especie_2["+v_cont_p2+"]",i_te_esp_2.value);
 "tipo_Especie_2".text = i_te_esp_2.value = "";
	localStorage.setItem("tipo_Especie_3["+v_cont_p2+"]",i_te_esp_3.value);
 "tipo_Especie_3".text = i_te_esp_3.value = "";
 
	localStorage.setItem("Quantidade_utilizada_por_Mes_Especie_1["+v_cont_p2+"]",i_qupm_esp_1.value);
 "Quantidade_utilizada_por_Mes_Especie_1".text = i_qupm_esp_1.value = "";
	localStorage.setItem("Quantidade_utilizada_por_Mes_Especie_2["+v_cont_p2+"]",i_qupm_esp_2.value);
 "Quantidade_utilizada_por_Mes_Especie_2".text = i_qupm_esp_2.value = "";
	localStorage.setItem("Quantidade_utilizada_por_Mes_Especie_3["+v_cont_p2+"]",i_qupm_esp_3.value);
 "Quantidade_utilizada_por_Mes_Especie_3".text = i_qupm_esp_3.value = "";
 
	localStorage.setItem("Produto_1_nome_do_produto["+v_cont_p2+"]", i_np_n_pro1.value);
 "Produto_1_nome_do_produto".text = i_np_n_pro1.value = "";
	localStorage.setItem("Produto_1_qtidade_mes["+v_cont_p2+"]", i_p1_q_mes.value);
 "Produto_1_qtidade_mes".text = i_p1_q_mes.value = "";
	localStorage.setItem("Produto_1_unidade["+v_cont_p2+"]", i_p1_unidade.value);
 "Produto_1_unidade".text = i_p1_unidade.value = "";
	localStorage.setItem("Produto_1_preco_de_venda["+v_cont_p2+"]", i_p1_p_venda.value);
 "Produto_1_preco_de_venda".text = i_p1_p_venda.value = "";
	
	localStorage.setItem("Produto_2_nome_do_produto["+v_cont_p2+"]", i_np_n_pro2.value);
 "Produto_2_nome_do_produto".text = i_np_n_pro2.value = "";
	localStorage.setItem("Produto_2_qtidade_mes["+v_cont_p2+"]", i_p2_q_mes.value);
 "Produto_2_qtidade_mes".text = i_p2_q_mes.value = "";
	localStorage.setItem("Produto_2_unidade["+v_cont_p2+"]", i_p2_unidade.value);
 "Produto_2_unidade".text = i_p2_unidade.value = "";
	localStorage.setItem("Produto_2_preco_de_venda["+v_cont_p2+"]", i_p2_p_venda.value);
"Produto_2_preco_de_venda".text = i_p2_p_venda.value = "";
	
	localStorage.setItem("Produto_3_nome_do_produto["+v_cont_p2+"]", i_np_n_pro3.value);
 "Produto_3_nome_do_produto".text = i_np_n_pro3.value = "";
	localStorage.setItem("Produto_3_qtidade_mes["+v_cont_p2+"]", i_p3_q_mes.value);
 "Produto_3_qtidade_mes".text = i_p3_q_mes.value = "";
	localStorage.setItem("Produto_3_unidade["+v_cont_p2+"]", i_p3_unidade.value);
 "Produto_3_unidade".text = i_p3_unidade.value = "";
	localStorage.setItem("Produto_3_preco_de_venda["+v_cont_p2+"]", i_p3_p_venda.value);
 "Produto_3_preco_de_venda".text = i_p3_p_venda.value = "";
	
	localStorage.setItem("Produto_4_nome_do_produto["+v_cont_p2+"]", i_np_n_pro4.value);
 "Produto_4_nome_do_produto".text = i_np_n_pro4.value = "";	
	localStorage.setItem("Produto_4_qtidade_mes["+v_cont_p2+"]", i_p4_q_mes.value);
 "Produto_4_qtidade_mes".text = i_p4_q_mes.value = "";	
	localStorage.setItem("Produto_4_unidade["+v_cont_p2+"]", i_p4_unidade.value);
 "Produto_4_unidade".text = i_p4_unidade.value = "";	
	localStorage.setItem("Produto_4_preco_de_venda["+v_cont_p2+"]", i_p4_p_venda.value);
 "Produto_4_preco_de_venda".text = i_p4_p_venda.value = "";
	
	localStorage.setItem("contp2",number_p2++);
		
var v_cont_mult_p2;
	v_cont_mult_p2 = localStorage.getItem("cont_multiplap2");
	
location.href="comercialização_regulamentação.html";
	alert("arquivos salvos");
	}

function f_3_1(ff_3_1)
{
var	v_cont_mult_p2 = localStorage.getItem("cont_multiplap2");
	if(ff_3_1 == 1){localStorage.setItem("indcole["+v_cont_mult_p2+"]",i_individual.value);}
	if(ff_3_1 == 2){localStorage.setItem("indcole["+v_cont_mult_p2+"]",i_coletiva.value);}
}

function f_3_2(ff_3_2)
{
var	v_cont_mult_p2 = localStorage.getItem("cont_multiplap2");
	if(ff_3_2 == 1){localStorage.setItem("se_individual["+v_cont_mult_p2+"]",i_i_microempresa.value);}
	if(ff_3_2 == 2){localStorage.setItem("se_individual["+v_cont_mult_p2+"]",i_i_CPF.value);}
}

function f_3_3(ff_3_3)
{
var	v_cont_mult_p2 = localStorage.getItem("cont_multiplap2");
	if(ff_3_3 == 1){localStorage.setItem("se_coletiva["+v_cont_mult_p2+"]",i_c_associação.value);}
	if(ff_3_3 == 2){localStorage.setItem("se_coletiva["+v_cont_mult_p2+"]",i_c_Cooperativa.value);}
	if(ff_3_3 == 3){localStorage.setItem("se_coletiva["+v_cont_mult_p2+"]",i_c_g_informal.value);}
}

function f_3_4(ff_3_4)
{
var	v_cont_mult_p2 = localStorage.getItem("cont_multiplap2");
	if(ff_3_4 == 1){localStorage.setItem("Localizacao["+v_cont_mult_p2+"]",i_loc_rural.value);}
	if(ff_3_4 == 2){localStorage.setItem("Localizacao["+v_cont_mult_p2+"]",i_loc_urbana.value);}
}

function f_3_5(ff_3_5)
{
var	v_cont_mult_p2 = localStorage.getItem("cont_multiplap2");
	if(ff_3_5 == 1){localStorage.setItem("Instalacao["+v_cont_mult_p2+"]",i_inst_propria.value);}
	if(ff_3_5 == 2){localStorage.setItem("Instalacao["+v_cont_mult_p2+"]",i_inst_alugada.value);}
	if(ff_3_5 == 3){localStorage.setItem("Instalacao["+v_cont_mult_p2+"]",i_inst_outra.value);}
}

function f_3_6(ff_3_6)
{
var	v_cont_mult_p2 = localStorage.getItem("cont_multiplap2");
	if(ff_3_6 == 1){localStorage.setItem("area_construida["+v_cont_mult_p2+"]",i_ac_ate_50.value);}
	if(ff_3_6 == 2){localStorage.setItem("area_construida["+v_cont_mult_p2+"]",i_ac_50_80.value);}
	if(ff_3_6 == 3){localStorage.setItem("area_construida["+v_cont_mult_p2+"]",i_ac_80_150.value);}
	if(ff_3_6 == 4){localStorage.setItem("area_construida["+v_cont_mult_p2+"]",i_ac_150_250.value);}
	if(ff_3_6 == 5){localStorage.setItem("area_construida["+v_cont_mult_p2+"]",i_ac_maior_250.value);}
}

function f_3_7_2(ff_3_7_2)
{
var	v_cont_mult_p2 = localStorage.getItem("cont_multiplap2");
	if(ff_3_7_2 == 1){localStorage.setItem("Estao_adequados_a_inspecao["+v_cont_mult_p2+"]",i_esiv_s.value);}
	if(ff_3_7_2 == 2){localStorage.setItem("Estao_adequados_a_inspecao["+v_cont_mult_p2+"]",i_esiv_n.value);}
}

function f_3_8_1(ff_3_8_1)
{
var	v_cont_mult_p2 = localStorage.getItem("cont_multiplap2");
	if(ff_3_8_1 == 1){localStorage.setItem("possui_dependencias_exclusiva_para_producao["+v_cont_mult_p2+"]",i_epdepp_s.value);}
	if(ff_3_8_1 == 2){localStorage.setItem("possui_dependencias_exclusiva_para_producao["+v_cont_mult_p2+"]",i_epdepp_n.value);}
}

function f_3_9_2(ff_3_9_2)
{
var	v_cont_mult_p2 = localStorage.getItem("cont_multiplap2");
	if(ff_3_9_2 == 1){localStorage.setItem("Exclusiva_familiar["+v_cont_mult_p2+"]",i_exc_fami_s.value);}
	if(ff_3_9_2 == 2){localStorage.setItem("Exclusiva_familiar["+v_cont_mult_p2+"]",i_exc_fami_n.value);}
}

function f_3_9_4(ff_3_9_4)
{
var	v_cont_mult_p2 = localStorage.getItem("cont_multiplap2");
	if(ff_3_9_4 == 1){localStorage.setItem("faixa_etaria_homens["+v_cont_mult_p2+"]",i_feh_fami_menor_16.value);}
	if(ff_3_9_4 == 2){localStorage.setItem("faixa_etaria_homens["+v_cont_mult_p2+"]",i_feh_fami_16_25.value);}
	if(ff_3_9_4 == 3){localStorage.setItem("faixa_etaria_homens["+v_cont_mult_p2+"]",i_feh_fami_25_50.value);}
	if(ff_3_9_4 == 4){localStorage.setItem("faixa_etaria_homens["+v_cont_mult_p2+"]",i_feh_fami_50_60.value);}
	if(ff_3_9_4 == 5){localStorage.setItem("faixa_etaria_homens["+v_cont_mult_p2+"]",i_feh_fami_maior_60.value);}
}

function f_3_9_6(ff_3_9_6)
{
var	v_cont_mult_p2 = localStorage.getItem("cont_multiplap2");
	if(ff_3_9_6 == 1){localStorage.setItem("faixa_etaria_mulheres["+v_cont_mult_p2+"]",i_fem_menor_16.value);}
	if(ff_3_9_6 == 2){localStorage.setItem("faixa_etaria_mulheres["+v_cont_mult_p2+"]",i_fem__16_25.value);}
	if(ff_3_9_6 == 3){localStorage.setItem("faixa_etaria_mulheres["+v_cont_mult_p2+"]",i_fem_25_50.value);}
	if(ff_3_9_6 == 4){localStorage.setItem("faixa_etaria_mulheres["+v_cont_mult_p2+"]",i_fem_50_60.value);}
	if(ff_3_9_6 == 5){localStorage.setItem("faixa_etaria_mulheres["+v_cont_mult_p2+"]",i_fem_maior_60.value);}
}

function f_3_9_7(ff_3_9_7)
{
var	v_cont_mult_p2 = localStorage.getItem("cont_multiplap2");
	if(ff_3_9_7 == 1){localStorage.setItem("renda_media_familia["+v_cont_mult_p2+"]",i_rmfsm_1_3.value);}
	if(ff_3_9_7 == 2){localStorage.setItem("renda_media_familia["+v_cont_mult_p2+"]",i_rmfsm_3_5.value);}
	if(ff_3_9_7 == 3){localStorage.setItem("renda_media_familia["+v_cont_mult_p2+"]",i_rmfsm_5_10.value);}
	if(ff_3_9_7 == 4){localStorage.setItem("renda_media_familia["+v_cont_mult_p2+"]",i_rmfsm_maior_10.value);}
}

function f_3_9_8(ff_3_9_8)
{
var	v_cont_mult_p2 = localStorage.getItem("cont_multiplap2");
	if(ff_3_9_8 == 1){localStorage.setItem("Grau_importancia_ativ_renda_prop_e_da_familia["+v_cont_mult_p2+"]",i_giarpf_alta.value);}
	if(ff_3_9_8 == 2){localStorage.setItem("Grau_importancia_ativ_renda_prop_e_da_familia["+v_cont_mult_p2+"]",i_giarpf_Media.value);}
	if(ff_3_9_8 == 3){localStorage.setItem("Grau_importancia_ativ_renda_prop_e_da_familia["+v_cont_mult_p2+"]",i_giarpf_baixa.value);}
}

function f_3_9_9(ff_3_9_9)
{
var	v_cont_mult_p2 = localStorage.getItem("cont_multiplap2");
	if(ff_3_9_9 == 1 ){localStorage.setItem("mao_de_obra_contratada["+v_cont_mult_p2+"]",i_mdo_cont_s.value);}
	if(ff_3_9_9 == 2 ){localStorage.setItem("mao_de_obra_contratada["+v_cont_mult_p2+"]",i_mdo_cont_n.value);}
}

function f_3_10_1(ff_3_10_1)
{
var	v_cont_mult_p2 = localStorage.getItem("cont_multiplap2");
	if(ff_3_10_1 == 1 ){localStorage.setItem("Procedencia["+v_cont_mult_p2+"]",i_proc_prop.value);}
	if(ff_3_10_1 == 2 ){localStorage.setItem("Procedencia["+v_cont_mult_p2+"]",i_proc_terc.value);}
}
/*fim dados da agroindustria*/


/* inicio investimento */
var number_p6 = localStorage.getItem("contp6");
	localStorage.setItem("cont_multiplap6",number_p6++);
function investimento()
{
var v_cont_p6;
	v_cont_p6 = localStorage.getItem("contp6");
	localStorage.setItem("Tipo de Financiamento["+v_cont_p6+"]", i_t_finan.value);
	
	localStorage.setItem("outros["+v_cont_p6+"]", i_ssqa_o.value);
	
	localStorage.setItem(" Tipos/área:["+v_cont_p6+"]", i_cap_c_tre_ta.value);
	
	localStorage.setItem("Em que áreas:["+v_cont_p6+"]", i_assi_t_eqa.value);
	
	localStorage.setItem("Valor médio["+v_cont_p6+"] ", i_c_vm.value);
	
	localStorage.setItem("outra_demanda_A)["+v_cont_p6+"]",i_aodnue_A.value);
	
	localStorage.setItem("outra_demanda_B)["+v_cont_p6+"]",i_aodnue_B.value);
	
	localStorage.setItem("contp6",number_p6++);
		
var v_cont_mult_p6;
	v_cont_mult_p6 = localStorage.getItem("cont_multiplap6");
	
location.href="fichas.html";
	alert("arquivos salvos");
}

function f_9_1(ff_9_1)
{
var	v_cont_mult_p6 = localStorage.getItem("cont_multiplap6");
		if(ff_9_1 == 1){localStorage.setItem("Total_investido_na_agroindustria["+v_cont_mult_p6+"]",i_tiagro_0_10.value);}
		if(ff_9_1 == 2){localStorage.setItem("Total_investido_na_agroindustria["+v_cont_mult_p6+"]",i_tiagro_10_50.value);}
		if(ff_9_1 == 3){localStorage.setItem("Total_investido_na_agroindustria["+v_cont_mult_p6+"]",i_tiagro_50_100.value);}
		if(ff_9_1 == 4){localStorage.setItem("Total_investido_na_agroindustria["+v_cont_mult_p6+"]",i_tiagro_100_500.value);}
		if(ff_9_1 == 5){localStorage.setItem("Total_investido_na_agroindustria["+v_cont_mult_p6+"]",i_tiagro_500_1.value);}
		if(ff_9_1 == 6){localStorage.setItem("Total_investido_na_agroindustria["+v_cont_mult_p6+"]",i_tiagro_mais_1.value);}
}

function f_9_2(ff_9_2)
{
var	v_cont_mult_p6 = localStorage.getItem("cont_multiplap6");
		if(ff_9_2 == 1){localStorage.setItem("Recursos["+v_cont_mult_p6+"]",i_rec_pro.value);}	
		if(ff_9_2 == 2){localStorage.setItem("Recursos["+v_cont_mult_p6+"]",i_rec_t_fin.value);}		
}

function f_9_4(ff_9_4)
{
var	v_cont_mult_p6 = localStorage.getItem("cont_multiplap6");
		if(ff_9_4 == 1){localStorage.setItem("pretende_investir["+v_cont_mult_p6+"]",i_p_inv_s.value);}	
		if(ff_9_4 == 2){localStorage.setItem("pretende_investir["+v_cont_mult_p6+"]",i_p_inv_n.value);}	
}
function f_9_5(ff_9_5)
{
var	v_cont_mult_p6 = localStorage.getItem("cont_multiplap6");
		if(ff_9_5 == 1){localStorage.setItem("em_qual_area["+v_cont_mult_p6+"]",i_ssqa_equip.value);}	
		if(ff_9_5 == 2){localStorage.setItem("em_qual_area["+v_cont_mult_p6+"]",i_ssqa_ad_amp.value);}	
		if(ff_9_5 == 3){localStorage.setItem("em_qual_area["+v_cont_mult_p6+"]",i_ssqa_veic.value);}	
		if(ff_9_5 == 4){localStorage.setItem("em_qual_area["+v_cont_mult_p6+"]",i_ssqa_mar_rot.value);}
		if(ff_9_5 == 5){localStorage.setItem("em_qual_area["+v_cont_mult_p6+"]",i_ssqa_a_mer.value);}			
}

function f_10_1(ff_10_1)
{
var	v_cont_mult_p6 = localStorage.getItem("cont_multiplap6");
		if(ff_10_1 == 1){localStorage.setItem("Capacitação_cursos_treinamentos["+v_cont_mult_p6+"]",i_cap_c_tre_s.value);}
		if(ff_10_1 == 2){localStorage.setItem("Capacitação_cursos_treinamentos["+v_cont_mult_p6+"]",i_cap_c_tre_n.value);}		
}

function f_10_2(ff_10_2)
{
var	v_cont_mult_p6 = localStorage.getItem("cont_multiplap6");
		if(ff_10_2 == 1){localStorage.setItem("assistencia_tecnica["+v_cont_mult_p6+"]",i_assi_t_s.value);}
		if(ff_10_2 == 2){localStorage.setItem("assistencia_tecnica["+v_cont_mult_p6+"]",i_assi_t_n.value);}		
}

function f_10_3(ff_10_3)
{
var	v_cont_mult_p6 = localStorage.getItem("cont_multiplap6");
		if(ff_10_3 == 1){localStorage.setItem("Projeto_adequação_ampliação_Equipamentos["+v_cont_mult_p6+"]",i_paaqe_s.value);}
		if(ff_10_3 == 2){localStorage.setItem("Projeto_adequação_ampliação_Equipamentos["+v_cont_mult_p6+"]",i_paaqe_n.value);}		
}

function f_10_4(ff_10_4)
{
var	v_cont_mult_p6 = localStorage.getItem("cont_multiplap6");
		if(ff_10_4 == 1){localStorage.setItem("comercializacao["+v_cont_mult_p6+"]",i_c_inser.value);}
		if(ff_10_4 == 2){localStorage.setItem("comercializacao["+v_cont_mult_p6+"]",i_c_amp_merc.value);}		
}

function f_10_5(ff_10_5)
{
var	v_cont_mult_p6 = localStorage.getItem("cont_multiplap6");
		if(ff_10_5 == 1){
			localStorage.setItem("credito["+v_cont_mult_p6+"]",i_c_cap_giro.value);
			}
		if(ff_10_5 == 2){
			localStorage.setItem("credito["+v_cont_mult_p6+"]",i_c_inves.value);
	}		
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
	
	var v_cont_mult_p3;
	v_cont_mult_p3 = localStorage.getItem("cont_multiplap3");

	location.href="tecnologia_assistencia.html";
	alert("arquivos salvos");
}

function f_4_1(ff_4_1)
{
var	v_cont_mult_p3 = localStorage.getItem("cont_multiplap3");
	if(ff_4_1 == 1){localStorage.setItem("Faturamento_médio_mensal_da_agroindustria["+v_cont_mult_p3+"]",i_fmm_agor_1_10.value);}	
	if(ff_4_1 == 2){localStorage.setItem("Faturamento_médio_mensal_da_agroindustria["+v_cont_mult_p3+"]",i_fmm_agor_10_50.value);}
	if(ff_4_1 == 3){localStorage.setItem("Faturamento_médio_mensal_da_agroindustria["+v_cont_mult_p3+"]",i_fmm_agor_50_100.value);}
	if(ff_4_1 == 4){localStorage.setItem("Faturamento_médio_mensal_da_agroindustria["+v_cont_mult_p3+"]",i_fmm_agor_100_500.value);}
	if(ff_4_1 == 5){localStorage.setItem("Faturamento_médio_mensal_da_agroindustria["+v_cont_mult_p3+"]",i_fmm_agor_maior_500.value);}	
}

function f_4_2(ff_4_2)
{
var	v_cont_mult_p3 = localStorage.getItem("cont_multiplap3");
	if(ff_4_2 == 1){localStorage.setItem("Grau_prioridade_renda_relação_propriedade["+v_cont_mult_p3+"]",i_gprr_prop_alta.value);}	
	if(ff_4_2 == 2){localStorage.setItem("Grau_prioridade_renda_relação_propriedade["+v_cont_mult_p3+"]",i_gprr_prop_media.value);}	
	if(ff_4_2 == 3){localStorage.setItem("Grau_prioridade_renda_relação_propriedade["+v_cont_mult_p3+"]",i_gprr_prop_baixa.value);}	
}

function f_4_3(ff_4_3)
{
var	v_cont_mult_p3 = localStorage.getItem("cont_multiplap3");
	if(ff_4_3 == 1){localStorage.setItem("local_de_venda["+v_cont_mult_p3+"]",i_lv_municipal.value);}	
	if(ff_4_3 == 2){localStorage.setItem("local_de_venda["+v_cont_mult_p3+"]",i_lv_regional.value);}	
	if(ff_4_3 == 3){localStorage.setItem("local_de_venda["+v_cont_mult_p3+"]",i_lv_estadual.value);}		
	if(ff_4_3 == 4){localStorage.setItem("local_de_venda["+v_cont_mult_p3+"]",i_lv_nacional.value);}		
}
/* inicio tabela */

function f_4_4_1(ff_4_4_1)
{
var	v_cont_mult_p3 = localStorage.getItem("cont_multiplap3");
	if(ff_4_4_1 == 1){localStorage.setItem("varejo_supermercado["+v_cont_mult_p3+"]",i_tab_vs_0_20.value);}
	if(ff_4_4_1 == 2){localStorage.setItem("varejo_supermercado["+v_cont_mult_p3+"]",i_tab_vs_21_40.value);}
	if(ff_4_4_1 == 3){localStorage.setItem("varejo_supermercado["+v_cont_mult_p3+"]",i_tab_vs_41_60.value);}
	if(ff_4_4_1 == 4){localStorage.setItem("varejo_supermercado["+v_cont_mult_p3+"]",i_tab_vs_61_80.value);}
	if(ff_4_4_1 == 5){localStorage.setItem("varejo_supermercado["+v_cont_mult_p3+"]",i_tab_vs_81_100.value);}		
}

function f_4_4_2(ff_4_4_2)
{
var	v_cont_mult_p3 = localStorage.getItem("cont_multiplap3");
	if(ff_4_4_2 == 1){localStorage.setItem("atacado["+v_cont_mult_p3+"]",i_tab_a_0_20.value);}
	if(ff_4_4_2 == 2){localStorage.setItem("atacado["+v_cont_mult_p3+"]",i_tab_a_21_40.value);}
	if(ff_4_4_2 == 3){localStorage.setItem("atacado["+v_cont_mult_p3+"]",i_tab_a_41_60.value);}
	if(ff_4_4_2 == 4){localStorage.setItem("atacado["+v_cont_mult_p3+"]",i_tab_a_61_80.value);}
	if(ff_4_4_2 == 5){localStorage.setItem("atacado["+v_cont_mult_p3+"]",i_tab_a_81_100.value);}	
}

function f_4_4_3(ff_4_4_3)
{
var	v_cont_mult_p3 = localStorage.getItem("cont_multiplap3");
	if(ff_4_4_3 == 1){localStorage.setItem("venda_direta_feira["+v_cont_mult_p3+"]",i_tab_vdf_0_20.value);}
	if(ff_4_4_3 == 2){localStorage.setItem("venda_direta_feira["+v_cont_mult_p3+"]",i_tab_vdf_21_40.value);}
	if(ff_4_4_3 == 3){localStorage.setItem("venda_direta_feira["+v_cont_mult_p3+"]",i_tab_vdf_41_60.value);}
	if(ff_4_4_3 == 4){localStorage.setItem("venda_direta_feira["+v_cont_mult_p3+"]",i_tab_vdf_61_80.value);}
	if(ff_4_4_3 == 5){localStorage.setItem("venda_direta_feira["+v_cont_mult_p3+"]",i_tab_vdf_81_100.value);}	
	
}

function f_4_4_4(ff_4_4_4)
{
var	v_cont_mult_p3 = localStorage.getItem("cont_multiplap3");
	if(ff_4_4_4 == 1){localStorage.setItem("representante_comercial["+v_cont_mult_p3+"]",i_tab_rc_0_20.value);}
	if(ff_4_4_4 == 2){localStorage.setItem("representante_comercial["+v_cont_mult_p3+"]",i_tab_rc_21_40.value);}
	if(ff_4_4_4 == 3){localStorage.setItem("representante_comercial["+v_cont_mult_p3+"]",i_tab_rc_41_60.value);}
	if(ff_4_4_4 == 4){localStorage.setItem("representante_comercial["+v_cont_mult_p3+"]",i_tab_rc_61_80.value);}
	if(ff_4_4_4 == 5){localStorage.setItem("representante_comercial["+v_cont_mult_p3+"]",i_tab_rc_81_100.value);}	
}

function f_4_4_5(ff_4_4_5)
{
var	v_cont_mult_p3 = localStorage.getItem("cont_multiplap3");
	if(ff_4_4_5 == 1){localStorage.setItem("institucional_escola["+v_cont_mult_p3+"]",i_tab_ie_0_20.value);}
	if(ff_4_4_5 == 2){localStorage.setItem("institucional_escola["+v_cont_mult_p3+"]",i_tab_ie_21_40.value);}
	if(ff_4_4_5 == 3){localStorage.setItem("institucional_escola["+v_cont_mult_p3+"]",i_tab_ie_41_60.value);}
	if(ff_4_4_5 == 4){localStorage.setItem("institucional_escola["+v_cont_mult_p3+"]",i_tab_ie_61_80.value);}
	if(ff_4_4_5 == 5){localStorage.setItem("institucional_escola["+v_cont_mult_p3+"]",i_tab_ie_81_100.value);}	
}
/* fim tabela */

function f_5_1(ff_5_1)
{
var	v_cont_mult_p3 = localStorage.getItem("cont_multiplap3");
	if(ff_5_1 == 1){localStorage.setItem("Regularização_sanitária_inspeção_sanitária_produto_animal["+v_cont_mult_p3+"]",i_rsis_a_SIM.value);}		
	if(ff_5_1 == 2){localStorage.setItem("Regularização_sanitária_inspeção_sanitária_produto_animal["+v_cont_mult_p3+"]",i_rsis_a_SIP.value);}
	if(ff_5_1 == 3){localStorage.setItem("Regularização_sanitária_inspeção_sanitária_produto_animal["+v_cont_mult_p3+"]",i_rsis_a_SIF.value);}	
	if(ff_5_1 == 4){localStorage.setItem("Regularização_sanitária_inspeção_sanitária_produto_animal["+v_cont_mult_p3+"]",i_rsis_a_SISBI.value);}	
	if(ff_5_1 == 5){localStorage.setItem("Regularização_sanitária_inspeção_sanitária_produto_animal["+v_cont_mult_p3+"]",i_rsis_a_s_insp.value);}			
}

function f_5_2(ff_5_2)
{
var	v_cont_mult_p3 = localStorage.getItem("cont_multiplap3");
	if(ff_5_2 == 1){localStorage.setItem("Regularização_sanitária_origem_vegetal["+v_cont_mult_p3+"]",i_rs_v_X.value);}	
	if(ff_5_2 == 2){localStorage.setItem("Regularização_sanitária_origem_vegetal["+v_cont_mult_p3+"]",i_rs_n_vs.value);}	
}

function f_5_3(ff_5_3)
{
var	v_cont_mult_p3 = localStorage.getItem("cont_multiplap3");
	if(ff_5_3 == 1){localStorage.setItem("Rotulagem["+v_cont_mult_p3+"]",i_r_rot_adq.value);}	
	if(ff_5_3 == 2){localStorage.setItem("Rotulagem["+v_cont_mult_p3+"]",i_r_rot_nadq.value);}	
}

function f_5_4(ff_5_4)
{
var	v_cont_mult_p3 = localStorage.getItem("cont_multiplap3");
	if(ff_5_4 == 1){localStorage.setItem("Regularização_ambiental["+v_cont_mult_p3+"]",i_ra_s.value);}	
	if(ff_5_4 == 2){localStorage.setItem("Regularização_ambiental["+v_cont_mult_p3+"]",i_ra_n.value);}	
}

/*fim comercializacaoo e regulamentacao*/

/*inicio tecnologia assistencia*/
var number_p4 = localStorage.getItem("contp4");
	localStorage.setItem("cont_multiplap4",number_p4++);
	
function f_tecnologia_assistencia()
{
var v_cont_p4;
	v_cont_p4 = localStorage.getItem("contp4");
	
	localStorage.setItem("outros_processos_aplicados_na_transformação["+v_cont_p4+"]", i_t_apat_out.value);
	
	localStorage.setItem("Tipos_De_equipamentos_principias_para_processo["+v_cont_p4+"]", i_t_teppp.value);

	localStorage.setItem("Qual_entidade["+v_cont_p4+"]", i_t_q_ent.value);
	
	localStorage.setItem("contp4",number_p4++);
var v_cont_mult_p4;
	v_cont_mult_p4 = localStorage.getItem("cont_multiplap4");
	
location.href="ambiental.html";
	alert("arquivos salvos");
	
}
function f_6_1(ff_6_1)
{
var	v_cont_mult_p4 = localStorage.getItem("cont_multiplap4");
	if(ff_6_1 == 1){localStorage.setItem("Nível_de_tecnologia_de_produção_aplicada["+v_cont_mult_p4+"]",i_n_t_p_a_avan.value);}		
	if(ff_6_1 == 2){localStorage.setItem("Nível_de_tecnologia_de_produção_aplicada["+v_cont_mult_p4+"]",i_n_t_p_a_med.value);}		
	if(ff_6_1 == 3){localStorage.setItem("Nível_de_tecnologia_de_produção_aplicada["+v_cont_mult_p4+"]",i_n_t_p_a_art.value);}		
}

function f_7_1(ff_7_1)
{
var	v_cont_mult_p4 = localStorage.getItem("cont_multiplap4");
	if(ff_7_1 == 1){localStorage.setItem("Possui_assistência_técnica_frequente["+v_cont_mult_p4+"]",i_p_a_t_f_s.value);}		
	if(ff_7_1 == 2){localStorage.setItem("Possui_assistência_técnica_frequente["+v_cont_mult_p4+"]",i_p_a_t_f_n.value);}		
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
	if(vApa1%2 == 1){localStorage.setItem("processos_na_transformacao1["+v_cont_mult_p4+"]",i_a_p_a_t_past.value);}
	if(vApa1%2 == 0){localStorage.removeItem("processos_na_transformacao1["+v_cont_mult_p4+"]",i_a_p_a_t_past.value);}	
}
function f_vApa2(){
var	v_cont_mult_p4 = localStorage.getItem("cont_multiplap4");
	vApa2 = vApa2+1;
	if(vApa2%2 == 1){localStorage.setItem("processos_na_transformacao2["+v_cont_mult_p4+"]",i_a_p_a_t_refri.value);}
	if(vApa2%2 == 0){localStorage.removeItem("processos_na_transformacao2["+v_cont_mult_p4+"]",i_a_p_a_t_refri.value);}	
}
function f_vApa3(){
var	v_cont_mult_p4 = localStorage.getItem("cont_multiplap4");
	vApa3 = vApa3+1;
	if(vApa3%2 == 1){localStorage.setItem("processos_na_transformacao3["+v_cont_mult_p4+"]",i_a_p_a_t_cong.value);}
	if(vApa3%2 == 0){localStorage.removeItem("processos_na_transformacao3["+v_cont_mult_p4+"]",i_a_p_a_t_cong.value);}	
}
function f_vApa4(){
var	v_cont_mult_p4 = localStorage.getItem("cont_multiplap4");
	vApa4 = vApa4+1;
	if(vApa4%2 == 1){localStorage.setItem("processos_na_transformacao4["+v_cont_mult_p4+"]",i_a_p_a_t_uflb.value);}
	if(vApa4%2 == 0){localStorage.removeItem("processos_na_transformacao4["+v_cont_mult_p4+"]",i_a_p_a_t_uflb.value);}	
}
function f_vApa5(){
var	v_cont_mult_p4 = localStorage.getItem("cont_multiplap4");
	vApa5 = vApa5+1;
	if(vApa5%2 == 1){localStorage.setItem("processos_na_transformacao["+v_cont_mult_p4+"]5",i_a_p_a_t_defu.value);}
	if(vApa5%2 == 0){localStorage.removeItem("processos_na_transformacao5["+v_cont_mult_p4+"]",i_a_p_a_t_defu.value);}	
}
function f_vApa6(){
var	v_cont_mult_p4 = localStorage.getItem("cont_multiplap4");
	vApa6 = vApa6+1;
	if(vApa6%2 == 1){localStorage.setItem("processos_na_transformacao6["+v_cont_mult_p4+"]",i_a_p_a_t_emva.value);}
	if(vApa6%2 == 0){localStorage.removeItem("processos_na_transformacao6["+v_cont_mult_p4+"]",i_a_p_a_t_emva.value);}	
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
	if(vAcap1%2 == 1){localStorage.setItem("controle_processo1["+v_cont_mult_p4+"]",i_a_c_a_p_camp.value);}
	if(vAcap1%2 == 0){localStorage.removeItem("controle_processo1["+v_cont_mult_p4+"]",i_a_c_a_p_camp.value);}	
}
function f_vAcap2(){
var	v_cont_mult_p4 = localStorage.getItem("cont_multiplap4");
	vAcap2 = vAcap2+1;
	if(vAcap2%2 == 1){localStorage.setItem("controle_processo2["+v_cont_mult_p4+"]",i_a_c_a_p_BPF.value);}
	if(vAcap2%2 == 0){localStorage.removeItem("controle_processo2["+v_cont_mult_p4+"]",i_a_c_a_p_BPF.value);}	
}
function f_vAcap3(){
var	v_cont_mult_p4 = localStorage.getItem("cont_multiplap4");
	vAcap3 = vAcap3+1;
	if(vAcap3%2 == 1){localStorage.setItem("controle_processo3["+v_cont_mult_p4+"]",i_a_c_a_p_reg.value);}
	if(vAcap3%2 == 0){localStorage.removeItem("controle_processo3["+v_cont_mult_p4+"]",i_a_c_a_p_reg.value);}	
}
function f_vAcap4(){
var	v_cont_mult_p4 = localStorage.getItem("cont_multiplap4");
	vAcap4 = vAcap4+1;
	if(vAcap4%2 == 1){localStorage.setItem("controle_processo4["+v_cont_mult_p4+"]",i_a_c_a_p_v_pra.value);}
	if(vAcap4%2 == 0){localStorage.removeItem("controle_processo4["+v_cont_mult_p4+"]",i_a_c_a_p_v_pra.value);}	
}
function f_vAcap5(){
var	v_cont_mult_p4 = localStorage.getItem("cont_multiplap4");
	vAcap5 = vAcap5+1;
	if(vAcap5%2 == 1){localStorage.setItem("controle_processo5["+v_cont_mult_p4+"]",i_a_c_a_p_con_mic.value);}
	if(vAcap5%2 == 0){localStorage.removeItem("controle_processo5["+v_cont_mult_p4+"]",i_a_c_a_p_con_mic.value);}	
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
localStorage.setItem("destino_esgoto_sanitario["+v_cont_p5+"]", I_DES.value);

localStorage.setItem("RESIDUOS_SOLIDOS_GERADOS_NA_AGROINDUSTRIA["+v_cont_p5+"]", I_RSGA.value);

localStorage.setItem("DESTINO_RESIDUOS_SOLIDOS["+v_cont_p5+"]", I_QDDRS.value);

localStorage.setItem("RESIDUOS_LIQUIDOS_GERADOS_NA_AGROINDUSTRIA["+v_cont_p5+"]", I_QSRLGA.value);

localStorage.setItem("DESTINO_RESIDUOS_LIQUIDOS["+v_cont_p5+"]", I_QDDRL.value);

localStorage.setItem("UTILIZA_ALGUM_COMBUSTIVEL_PROCESSO_PRODUTIVO["+v_cont_p5+"]", I_UACPBP.value);

localStorage.setItem("ORIGEM_DESSES_COMBUSTIVEIS["+v_cont_p5+"]", I_OD_COMBUSTIVEL.value);

localStorage.setItem("QUAIS_SAO_ELES["+v_cont_p5+"]", I_QSELES.value);

	localStorage.setItem("contp5",number_p5++);
var v_cont_mult_p5;
	v_cont_mult_p5 = localStorage.getItem("cont_multiplap5");
	
location.href="investimento.html";
	alert("arquivos salvos");
	
}

function f_8_1(ff_8_1) 
{
var	v_cont_mult_p5 = localStorage.getItem("cont_multiplap5");
	if(ff_8_1==1){localStorage.setItem("SE_ENQUADRA_NA_LEGISLAÇÃO_AMBIENTAL["+v_cont_mult_p5+"]",I_ELA_atende.value);}
	if(ff_8_1==2){localStorage.setItem("SE_ENQUADRA_NA_LEGISLAÇÃO_AMBIENTAL["+v_cont_mult_p5+"]",I_ELA_ate_parcialmente.value);}
	if(ff_8_1==3){localStorage.setItem("SE_ENQUADRA_NA_LEGISLAÇÃO_AMBIENTAL["+v_cont_mult_p5+"]",I_ELA_n_atende.value);}
	if(ff_8_1==4){localStorage.setItem("SE_ENQUADRA_NA_LEGISLAÇÃO_AMBIENTAL["+v_cont_mult_p5+"]",I_ELA_n_sabe.value);}
}

function f_8_4_1(ff_8_4_1)
{
var	v_cont_mult_p5 = localStorage.getItem("cont_multiplap5");
	if(ff_8_4_1==1){localStorage.setItem("agua_usada_na_materia_prima["+v_cont_mult_p5+"]",i_MP_0_25.value);}
	if(ff_8_4_1==2){localStorage.setItem("agua_usada_na_materia_prima["+v_cont_mult_p5+"]",i_MP_26_50.value);}
	if(ff_8_4_1==3){localStorage.setItem("agua_usada_na_materia_prima["+v_cont_mult_p5+"]",i_MP_51_75.value);}
	if(ff_8_4_1==4){localStorage.setItem("agua_usada_na_materia_prima["+v_cont_mult_p5+"]",i_MP_76_100.value);}
}

function f_8_4_2(ff_8_4_2)
{
var	v_cont_mult_p5 = localStorage.getItem("cont_multiplap5");
	if(ff_8_4_2==1){localStorage.setItem("agua_usada_no_benificiamento_produtos["+v_cont_mult_p5+"]",i_BP_0_25.value);}
	if(ff_8_4_2==2){localStorage.setItem("agua_usada_no_benificiamento_produtos["+v_cont_mult_p5+"]",i_BP_26_50.value);}
	if(ff_8_4_2==3){localStorage.setItem("agua_usada_no_benificiamento_produtos["+v_cont_mult_p5+"]",i_BP_51_75.value);}
	if(ff_8_4_2==4){localStorage.setItem("agua_usada_no_benificiamento_produtos["+v_cont_mult_p5+"]",i_BP_76_100.value);}
}

function f_8_4_3(ff_8_4_3)
{
var	v_cont_mult_p5 = localStorage.getItem("cont_multiplap5");
	if(ff_8_4_3==1){localStorage.setItem("fracao_da_agua_usada_na_limpeza_instalacoes["+v_cont_mult_p5+"]",i_LI_0_25.value);}
	if(ff_8_4_3==2){localStorage.setItem("fracao_da_agua_usada_na_limpeza_instalacoes["+v_cont_mult_p5+"]",i_LI_26_50.value);}
	if(ff_8_4_3==3){localStorage.setItem("fracao_da_agua_usada_na_limpeza_instalacoes["+v_cont_mult_p5+"]",i_LI_51_75.value);}
	if(ff_8_4_3==4){localStorage.setItem("fracao_da_agua_usada_na_limpeza_instalacoes["+v_cont_mult_p5+"]",i_LI_76_100.value);}
}

function f_8_5(ff_8_5)
{
var	v_cont_mult_p5 = localStorage.getItem("cont_multiplap5");
	if(ff_8_5==1){localStorage.setItem("REALIZADO_TRAT_AGUA_ANTES_UTIL["+v_cont_mult_p5+"]",I_RATAAU_s.value);}
	if(ff_8_5==2){localStorage.setItem("REALIZADO_TRAT_AGUA_ANTES_UTIL["+v_cont_mult_p5+"]",I_RATAAU_n.value);}
}

function f_8_7(ff_8_7)
{
var	v_cont_mult_p5 = localStorage.getItem("cont_multiplap5");
	if(ff_8_7==1){localStorage.setItem("EXISTENCIA_SISTEMA_TRATAMENTO_EFICIENCIA["+v_cont_mult_p5+"]",I_ESTQE_25.value);}
	if(ff_8_7==2){localStorage.setItem("EXISTENCIA_SISTEMA_TRATAMENTO_EFICIENCIA["+v_cont_mult_p5+"]",I_ESTQE_50.value);}
	if(ff_8_7==3){localStorage.setItem("EXISTENCIA_SISTEMA_TRATAMENTO_EFICIENCIA["+v_cont_mult_p5+"]",I_ESTQE_75.value);}
	if(ff_8_7==4){localStorage.setItem("EXISTENCIA_SISTEMA_TRATAMENTO_EFICIENCIA["+v_cont_mult_p5+"]",I_ESTQE_100.value);}
}

function f_8_14(ff_8_14)
{
var	v_cont_mult_p5 = localStorage.getItem("cont_multiplap5");
	if(ff_8_14==1){localStorage.setItem("REALIZA_REAPROVEITAM_PROC_PRODUTIVO["+v_cont_mult_p5+"]",I_RARPP_s.value);}
	if(ff_8_14==2){localStorage.setItem("REALIZA_REAPROVEITAM_PROC_PRODUTIVO["+v_cont_mult_p5+"]",I_RARPP_n.value);}
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
	if(qfa0%2 == 1){localStorage.setItem("QUAL_E_A_FONTE_DE_AGUA1["+v_cont_mult_p5+"]",I_QFA_poco_artesiano.value);}
	if(qfa0%2 == 0){localStorage.removeItem("QUAL_E_A_FONTE_DE_AGUA1["+v_cont_mult_p5+"]",I_QFA_poco_artesiano.value);}
}
function f_qfa_1(){
var	v_cont_mult_p5 = localStorage.getItem("cont_multiplap5");
	qfa1 = qfa1+1;
	if(qfa1%2 == 1){localStorage.setItem("QUAL_E_A_FONTE_DE_AGUA2["+v_cont_mult_p5+"]",I_QFA_vertente.value);}
	if(qfa1%2 == 0){localStorage.removeItem("QUAL_E_A_FONTE_DE_AGUA2["+v_cont_mult_p5+"]",I_QFA_vertente.value);}
}
function f_qfa_2(){
var	v_cont_mult_p5 = localStorage.getItem("cont_multiplap5");
	qfa2 = qfa2+1;
	if(qfa2%2 == 1){localStorage.setItem("QUAL_E_A_FONTE_DE_AGUA3["+v_cont_mult_p5+"]",I_QFA_a_r_publica.value);}
	if(qfa2%2 == 0){localStorage.removeItem("QUAL_E_A_FONTE_DE_AGUA3["+v_cont_mult_p5+"]",I_QFA_a_r_publica.value);}
}
function f_qfa_3(){
var	v_cont_mult_p5 = localStorage.getItem("cont_multiplap5");
	qfa3 = qfa3+1;
	if(qfa3%2 == 1){localStorage.setItem("QUAL_E_A_FONTE_DE_AGUA4["+v_cont_mult_p5+"]",I_QFA_poco_comum.value);}
	if(qfa3%2 == 0){localStorage.removeItem("QUAL_E_A_FONTE_DE_AGUA4["+v_cont_mult_p5+"]",I_QFA_poco_comum.value);}
}
function f_qfa_4(){
var	v_cont_mult_p5 = localStorage.getItem("cont_multiplap5");
	qfa4 = qfa4+1;
	if(qfa4%2 == 1){localStorage.setItem("QUAL_E_A_FONTE_DE_AGUA5["+v_cont_mult_p5+"]",I_QFA_nascente.value);}
	if(qfa4%2 == 0){localStorage.removeItem("QUAL_E_A_FONTE_DE_AGUA5["+v_cont_mult_p5+"]",I_QFA_nascente.value);}
}
function f_qfa_5(){
var	v_cont_mult_p5 = localStorage.getItem("cont_multiplap5");
	qfa5 = qfa5+1;
	if(qfa5%2 == 1){localStorage.setItem("QUAL_E_A_FONTE_DE_AGUA6["+v_cont_mult_p5+"]",I_QFA_outro.value);}
	if(qfa5%2 == 0){localStorage.removeItem("QUAL_E_A_FONTE_DE_AGUA6["+v_cont_mult_p5+"]",I_QFA_outro.value);}
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
	if(PQUA1%2 == 1){localStorage.setItem("PARA_QUE_UTILIZADA_AGUA1["+v_cont_mult_p5+"]",I_PQUA_MAT_PRIMA.value);}
	if(PQUA1%2 == 0){localStorage.removeItem("PARA_QUE_UTILIZADA_AGUA1["+v_cont_mult_p5+"]",I_PQUA_MAT_PRIMA.value);}
}
function F_PQUA_2(){
var	v_cont_mult_p5 = localStorage.getItem("cont_multiplap5");
	PQUA2 = PQUA2+1;
	if(PQUA2%2 == 1){localStorage.setItem("PARA_QUE_UTILIZADA_AGUA2["+v_cont_mult_p5+"]",I_PQUA_BENEF_PRODUTO.value);}
	if(PQUA2%2 == 0){localStorage.removeItem("PARA_QUE_UTILIZADA_AGUA2["+v_cont_mult_p5+"]",I_PQUA_BENEF_PRODUTO.value);}
}
function F_PQUA_3(){
var	v_cont_mult_p5 = localStorage.getItem("cont_multiplap5");
	PQUA3 = PQUA3+1;
	if(PQUA3%2 == 1){localStorage.setItem("PARA_QUE_UTILIZADA_AGUA3["+v_cont_mult_p5+"]",I_PQUA_LIM_INSTACOES.value);}
	if(PQUA3%2 == 0){localStorage.removeItem("PARA_QUE_UTILIZADA_AGUA3["+v_cont_mult_p5+"]",I_PQUA_LIM_INSTACOES.value);}
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