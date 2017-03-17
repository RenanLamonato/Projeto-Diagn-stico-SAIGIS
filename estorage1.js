/*inicio identificação geral*/

function identificacao_geral()
{
	localStorage.setItem("Nome_da_agroindustria", iig_n_ind.value);
	
	localStorage.setItem("localizacao_da_agroindustria", iig_cidade.value);

	localStorage.setItem("Nome", idp_nome.value);

	localStorage.setItem("Endereco", idp_endereco.value);

	localStorage.setItem("Cidade", idp_cidade.value);

	localStorage.setItem("E_mail", idp_e_mail.value);

	localStorage.setItem("Telefone", idp_telefone.value);
	alert("itens adcionados");
}

function cateagro(produto)
{
	if(produto == 1){localStorage.setItem("categoria",iig_c_l_derivados.value);}
	if(produto == 2){localStorage.setItem("categoria",iig_c_f_hortalicas.value);}
	if(produto == 3){localStorage.setItem("categoria",iig_c_c_derivados.value);}
	if(produto == 4){localStorage.setItem("categoria",iig_c_c_acucar.value);}
	if(produto == 5){localStorage.setItem("categoria",iig_c_o_derivados.value);}
	if(produto == 6){localStorage.setItem("categoria",iig_c_pescados.value);}
	if(produto == 7){localStorage.setItem("categoria",iig_c_mel.value);}
	if(produto == 8){localStorage.setItem("categoria",iig_c_panificavao.value);}
	if(produto == 9){localStorage.setItem("categoria",iig_c_outra.value);}
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
function investimento()
{
	localStorage.setItem("Tipo de Financiamento", i_t_finan.value);
	
	localStorage.setItem("outros", i_ssqa_o.value);
	
	localStorage.setItem(" Tipos/área:", i_cap_c_tre_ta.value);
	
	localStorage.setItem("Em que áreas:", i_assi_t_eqa.value);
	
	localStorage.setItem("Valor médio ", i_c_vm.value);
	
	localStorage.setItem("outra_demanda_A)",i_aodnue_A.value);
	
	localStorage.setItem("outra_demanda_B)",i_aodnue_B.value);
	
	 window.open();
}

function f_ti_agro(ffinvest)
{
		if(ffinvest == 1){localStorage.setItem("Total_investido_na_agroindustria",i_tiagro_0_10.value);}
		if(ffinvest == 2){localStorage.setItem("Total_investido_na_agroindustria",i_tiagro_10_50.value);}
		if(ffinvest == 3){localStorage.setItem("Total_investido_na_agroindustria",i_tiagro_50_100.value);}
		if(ffinvest == 4){localStorage.setItem("Total_investido_na_agroindustria",i_tiagro_100_500.value);}
		if(ffinvest == 5){localStorage.setItem("Total_investido_na_agroindustria",i_tiagro_500_1.value);}
		if(ffinvest == 6){localStorage.setItem("Total_investido_na_agroindustria",i_tiagro_mais_1.value);}
}

function f_recurso(ffrecur)
{
		if(ffrecur == 1){localStorage.setItem("Recursos",i_rec_pro.value);}	
		if(ffrecur == 2){localStorage.setItem("Recursos",i_rec_t_fin.value);}		
}

function f_pret_invest(ffpret_invest)
{
		if(ffpret_invest == 1){localStorage.setItem("pretende_investir",i_p_inv_s.value);}	
		if(ffpret_invest == 2){localStorage.setItem("pretende_investir",i_p_inv_n.value);}	
}
function f_ssqa(ff_ssqa)
{
		if(ff_ssqa == 1){localStorage.setItem("em_qual_area",i_ssqa_equip.value);}	
		if(ff_ssqa == 2){localStorage.setItem("em_qual_area",i_ssqa_ad_amp.value);}	
		if(ff_ssqa == 3){localStorage.setItem("em_qual_area",i_ssqa_veic.value);}	
		if(ff_ssqa == 4){localStorage.setItem("em_qual_area",i_ssqa_mar_rot.value);}
		if(ff_ssqa == 5){localStorage.setItem("em_qual_area",i_ssqa_a_mer.value);}			
}

function f_Cap_cur_trei(ff_Cap_cur_trei)
{
		if(ff_Cap_cur_trei == 1){localStorage.setItem("Capacitação_cursos_treinamentos",i_cap_c_tre_s.value);}
		if(ff_Cap_cur_trei == 2){localStorage.setItem("Capacitação_cursos_treinamentos",i_cap_c_tre_n.value);}		
}

function f_assis_tec(ff_assis_tec)
{
		if(ff_assis_tec == 1){localStorage.setItem("assistencia_tecnica",i_assi_t_s.value);}
		if(ff_assis_tec == 2){localStorage.setItem("assistencia_tecnica",i_assi_t_n.value);}		
}

function f_P_a_ampli_Equip(ff_P_a_ampli_Equip)
{
		if(ff_P_a_ampli_Equip == 1){localStorage.setItem("Projeto_adequação_ampliação_Equipamentos",i_paaqe_s.value);}
		if(ff_P_a_ampli_Equip == 2){localStorage.setItem("Projeto_adequação_ampliação_Equipamentos",i_paaqe_n.value);}		
}

function f_Comerc(ff_Comerc)
{
		if(ff_Comerc == 1){localStorage.setItem("comercializacao",i_c_inser.value);}
		if(ff_Comerc == 2){localStorage.setItem("comercializacao",i_c_amp_merc.value);}		
}

function f_Cred(ff_Cred)
{
		if(ff_Cred == 1){
			localStorage.setItem("credito",i_c_cap_giro.value);
			}
		if(ff_Cred == 2){
			localStorage.setItem("credito",i_c_inves.value);
	}		
}
/* fim investimento */

/* inicio comercializacao e regulamentacao */
function comercicializacao_regumalentacao()
{
	alert("itens adicionados com sucesso");
	
	 window.open();
}

function f_Fat_m_m_agro(ff_Fat_m_m_agro)
{
	if(ff_Fat_m_m_agro == 1){localStorage.setItem("Faturamento_médio_mensal_da_agroindustria",i_fmm_agor_1_10.value);}	
	if(ff_Fat_m_m_agro == 2){localStorage.setItem("Faturamento_médio_mensal_da_agroindustria",i_fmm_agor_10_50.value);}
	if(ff_Fat_m_m_agro == 3){localStorage.setItem("Faturamento_médio_mensal_da_agroindustria",i_fmm_agor_50_100.value);}
	if(ff_Fat_m_m_agro == 4){localStorage.setItem("Faturamento_médio_mensal_da_agroindustria",i_fmm_agor_100_500.value);}
	if(ff_Fat_m_m_agro == 5){localStorage.setItem("Faturamento_médio_mensal_da_agroindustria",i_fmm_agor_maior_500.value);}	
}

function f_g_p_r_r_prop(ff_g_p_r_r_prop)
{
	if(ff_g_p_r_r_prop == 1){localStorage.setItem("Grau_prioridade_renda_relação_propriedade",i_gprr_prop_alta.value);}	
	if(ff_g_p_r_r_prop == 2){localStorage.setItem("Grau_prioridade_renda_relação_propriedade",i_gprr_prop_media.value);}	
	if(ff_g_p_r_r_prop == 3){localStorage.setItem("Grau_prioridade_renda_relação_propriedade",i_gprr_prop_baixa.value);}	
}

function fLocal_venda(ffLocal_venda)
{
	if(ffLocal_venda == 1){localStorage.setItem("local_de_venda",i_lv_municipal.value);}	
	if(ffLocal_venda == 2){localStorage.setItem("local_de_venda",i_lv_regional.value);}	
	if(ffLocal_venda == 3){localStorage.setItem("local_de_venda",i_lv_estadual.value);}		
	if(ffLocal_venda == 4){localStorage.setItem("local_de_venda",i_lv_nacional.value);}		
}
/* inicio tabela */

function f_t_pcfv_va_su(ff_t_pcfv_va_su)
{
	if(ff_t_pcfv_va_su == 1){localStorage.setItem("varejo_supermercado",i_tab_vs_0_20.value);}
	if(ff_t_pcfv_va_su == 2){localStorage.setItem("varejo_supermercado",i_tab_vs_21_40.value);}
	if(ff_t_pcfv_va_su == 3){localStorage.setItem("varejo_supermercado",i_tab_vs_41_60.value);}
	if(ff_t_pcfv_va_su == 4){localStorage.setItem("varejo_supermercado",i_tab_vs_61_80.value);}
	if(ff_t_pcfv_va_su == 5){localStorage.setItem("varejo_supermercado",i_tab_vs_81_100.value);}		
}

function f_t_pcfv_ata(ff_t_pcfv_ata)
{
	if(ff_t_pcfv_ata == 1){localStorage.setItem("atacado",i_tab_a_0_20.value);}
	if(ff_t_pcfv_ata == 2){localStorage.setItem("atacado",i_tab_a_21_40.value);}
	if(ff_t_pcfv_ata == 3){localStorage.setItem("atacado",i_tab_a_41_60.value);}
	if(ff_t_pcfv_ata == 4){localStorage.setItem("atacado",i_tab_a_61_80.value);}
	if(ff_t_pcfv_ata == 5){localStorage.setItem("atacado",i_tab_a_81_100.value);}	
}

function f_t_pcfv_vd_fe(ff_t_pcfv_vd_fe)
{
	if(ff_t_pcfv_vd_fe == 1){localStorage.setItem("venda_direta_feira",i_tab_vdf_0_20.value);}
	if(ff_t_pcfv_vd_fe == 2){localStorage.setItem("venda_direta_feira",i_tab_vdf_21_40.value);}
	if(ff_t_pcfv_vd_fe == 3){localStorage.setItem("venda_direta_feira",i_tab_vdf_41_60.value);}
	if(ff_t_pcfv_vd_fe == 4){localStorage.setItem("venda_direta_feira",i_tab_vdf_61_80.value);}
	if(ff_t_pcfv_vd_fe == 5){localStorage.setItem("venda_direta_feira",i_tab_vdf_81_100.value);}	
	
}

function f_t_pcfv_rc(ff_t_pcfv_rc)
{
	if(ff_t_pcfv_rc == 1){localStorage.setItem("representante_comercial",i_tab_rc_0_20.value);}
	if(ff_t_pcfv_rc == 2){localStorage.setItem("representante_comercial",i_tab_rc_21_40.value);}
	if(ff_t_pcfv_rc == 3){localStorage.setItem("representante_comercial",i_tab_rc_41_60.value);}
	if(ff_t_pcfv_rc == 4){localStorage.setItem("representante_comercial",i_tab_rc_61_80.value);}
	if(ff_t_pcfv_rc == 5){localStorage.setItem("representante_comercial",i_tab_rc_81_100.value);}	
}

function f_t_pcfv_in_es(ff_t_pcfv_in_es)
{
	if(ff_t_pcfv_in_es == 1){localStorage.setItem("institucional_escola",i_tab_ie_0_20.value);}
	if(ff_t_pcfv_in_es == 2){localStorage.setItem("institucional_escola",i_tab_ie_21_40.value);}
	if(ff_t_pcfv_in_es == 3){localStorage.setItem("institucional_escola",i_tab_ie_41_60.value);}
	if(ff_t_pcfv_in_es == 4){localStorage.setItem("institucional_escola",i_tab_ie_61_80.value);}
	if(ff_t_pcfv_in_es == 5){localStorage.setItem("institucional_escola",i_tab_ie_81_100.value);}	
}
/* fim tabela */

function f_Reg_s_ins_s_ani(ff_Reg_s_ins_s_ani)
{
	if(ff_Reg_s_ins_s_ani == 1){localStorage.setItem("Regularização_sanitária_inspeção_sanitária_produto_animal",i_rsis_a_SIM.value);}		
	if(ff_Reg_s_ins_s_ani == 2){localStorage.setItem("Regularização_sanitária_inspeção_sanitária_produto_animal",i_rsis_a_SIP.value);}
	if(ff_Reg_s_ins_s_ani == 3){localStorage.setItem("Regularização_sanitária_inspeção_sanitária_produto_animal",i_rsis_a_SIF.value);}	
	if(ff_Reg_s_ins_s_ani == 4){localStorage.setItem("Regularização_sanitária_inspeção_sanitária_produto_animal",i_rsis_a_SISBI.value);}	
	if(ff_Reg_s_ins_s_ani == 5){localStorage.setItem("Regularização_sanitária_inspeção_sanitária_produto_animal",i_rsis_a_s_insp.value);}			
}

function f_Reg_s_or_veg(ff_Reg_s_or_veg)
{
	if(ff_Reg_s_or_veg == 1){localStorage.setItem("Regularização_sanitária_origem_vegetal",i_rs_v_X.value);}	
	if(ff_Reg_s_or_veg == 2){localStorage.setItem("Regularização_sanitária_origem_vegetal",i_rs_n_vs.value);}	
}

function fRotulagem(ffRotulagem)
{
	if(ffRotulagem == 1){localStorage.setItem("Rotulagem",i_r_rot_adq.value);}	
	if(ffRotulagem == 2){localStorage.setItem("Rotulagem",i_r_rot_nadq.value);}	
}

function f_Reg_amb_IAP(ff_Reg_amb_IAP)
{
	if(ff_Reg_amb_IAP == 1){localStorage.setItem("Regularização_ambiental",i_ra_s.value);}	
	if(ff_Reg_amb_IAP == 2){localStorage.setItem("Regularização_ambiental",i_ra_n.value);}	
}

/*fim comercializacaoo e regulamentacao*/

/*inicio tecnologia assistencia*/

function f_tecnologia_assistencia()
{
	localStorage.setItem("outros_processos_aplicados_na_transformação", i_t_apat_out.value);
	
	localStorage.setItem("Tipos_De_equipamentos_principias_para_processo", i_t_teppp.value);

	localStorage.setItem("Qual_entidade", i_t_q_ent.value);
	
		alert("itens adicionados com sucesso");
	
	 window.open();
	
}
function f_N_t_p_aplic(ff_N_t_p_aplic)
{
	if(ff_N_t_p_aplic == 1){localStorage.setItem("Nível_de_tecnologia_de_produção_aplicada",i_n_t_p_a_avan.value);}		
	if(ff_N_t_p_aplic == 2){localStorage.setItem("Nível_de_tecnologia_de_produção_aplicada",i_n_t_p_a_med.value);}		
	if(ff_N_t_p_aplic == 3){localStorage.setItem("Nível_de_tecnologia_de_produção_aplicada",i_n_t_p_a_art.value);}		
}

function f_P_a_t_freq(ff_P_a_t_freq)
{
	if(ff_P_a_t_freq == 1){localStorage.setItem("Possui_assistência_técnica_frequente",i_p_a_t_f_s.value);}		
	if(ff_P_a_t_freq == 2){localStorage.setItem("Possui_assistência_técnica_frequente",i_p_a_t_f_n.value);}		
}
/* fim tecnologia assistencia*/


/* inicio ambiental */
function ambiental()
{	
localStorage.setItem("destino_esgoto_sanitario", I_DES.value);

localStorage.setItem("RESIDUOS_SOLIDOS_GERADOS_NA_AGROINDUSTRIA", I_RSGA.value);

localStorage.setItem("DESTINO_RESIDUOS_SOLIDOS", I_QDDRS.value);

localStorage.setItem("RESIDUOS_LIQUIDOS_GERADOS_NA_AGROINDUSTRIA", I_QSRLGA.value);

localStorage.setItem("DESTINO_RESIDUOS_LIQUIDOS", I_QDDRL.value);

localStorage.setItem("UTILIZA_ALGUM_COMBUSTIVEL_PROCESSO_", I_UACPBP.value);

localStorage.setItem("ORIGEM_DESSES_COMBUSTIVEIS", I_OD_COMBUSTIVEL.value);

localStorage.setItem("QUAIS_SAO_ELES", I_QSELES.value);

 window.open();
}

function f_e_E_EN_LEG_AMB(ff_e_E_EN_LEG_AMB) 
{
	if(ff_e_E_EN_LEG_AMB==1){localStorage.setItem("SE_ENQUADRA_NA_LEGISLAÇÃO_AMBIENTAL",I_ELA_atende.value);}
	if(ff_e_E_EN_LEG_AMB==2){localStorage.setItem("SE_ENQUADRA_NA_LEGISLAÇÃO_AMBIENTAL",I_ELA_ate_parcialmente.value);}
	if(ff_e_E_EN_LEG_AMB==3){localStorage.setItem("SE_ENQUADRA_NA_LEGISLAÇÃO_AMBIENTAL",I_ELA_n_atende.value);}
	if(ff_e_E_EN_LEG_AMB==4){localStorage.setItem("SE_ENQUADRA_NA_LEGISLAÇÃO_AMBIENTAL",I_ELA_n_sabe.value);}
}

function f_t_a_u_mat_prima(ff_a_u_mat_prima)
{
	if(ff_a_u_mat_prima==1){localStorage.setItem("agua_usada_na_materia_prima",i_MP_0_25.value);}
	if(ff_a_u_mat_prima==2){localStorage.setItem("agua_usada_na_materia_prima",i_MP_26_50.value);}
	if(ff_a_u_mat_prima==3){localStorage.setItem("agua_usada_na_materia_prima",i_MP_51_75.value);}
	if(ff_a_u_mat_prima==4){localStorage.setItem("agua_usada_na_materia_prima",i_MP_76_100.value);}
}

function f_t_BENE_PROD(ff_BENE_PROD)
{
	if(ff_BENE_PROD==1){localStorage.setItem("agua_usada_no_benificiamento_produtos",i_BP_0_25.value);}
	if(ff_BENE_PROD==2){localStorage.setItem("agua_usada_no_benificiamento_produtos",i_BP_26_50.value);}
	if(ff_BENE_PROD==3){localStorage.setItem("agua_usada_no_benificiamento_produtos",i_BP_51_75.value);}
	if(ff_BENE_PROD==4){localStorage.setItem("agua_usada_no_benificiamento_produtos",i_BP_76_100.value);}
}

function f_t_Limp_Insta(ff_Limpeza_Instalacoes)
{
	if(ff_Limpeza_Instalacoes==1){localStorage.setItem("fracao_da_agua_usada_na_limpeza_instalacoes",i_LI_0_25.value);}
	if(ff_Limpeza_Instalacoes==2){localStorage.setItem("fracao_da_agua_usada_na_limpeza_instalacoes",i_LI_26_50.value);}
	if(ff_Limpeza_Instalacoes==3){localStorage.setItem("fracao_da_agua_usada_na_limpeza_instalacoes",i_LI_51_75.value);}
	if(ff_Limpeza_Instalacoes==4){localStorage.setItem("fracao_da_agua_usada_na_limpeza_instalacoes",i_LI_76_100.value);}
}

function f_r_t_a_a_uti(ff_r_t_a_a_uti)
{
	if(ff_r_t_a_a_uti==1){localStorage.setItem("REALIZADO_TRAT_AGUA_ANTES_UTIL",I_RATAAU_s.value);}
	if(ff_r_t_a_a_uti==2){localStorage.setItem("REALIZADO_TRAT_AGUA_ANTES_UTIL",I_RATAAU_n.value);}
}

function f_e_s_t_efic(ff_e_s_t_efic)
{
	if(ff_e_s_t_efic==1){localStorage.setItem("EXISTENCIA_SISTEMA_TRATAMENTO_EFICIENCIA",I_ESTQE_25.value);}
	if(ff_e_s_t_efic==2){localStorage.setItem("EXISTENCIA_SISTEMA_TRATAMENTO_EFICIENCIA",I_ESTQE_50.value);}
	if(ff_e_s_t_efic==3){localStorage.setItem("EXISTENCIA_SISTEMA_TRATAMENTO_EFICIENCIA",I_ESTQE_75.value);}
	if(ff_e_s_t_efic==4){localStorage.setItem("EXISTENCIA_SISTEMA_TRATAMENTO_EFICIENCIA",I_ESTQE_100.value);}
}

function f_r_r_p_prod(ff_r_r_p_prod)
{
	if(ff_r_r_p_prod==1){localStorage.setItem("REALIZA_REAPROVEITAM_PROC_PRODUTIVO",I_RARPP_s.value);}
	if(ff_r_r_p_prod==2){localStorage.setItem("REALIZA_REAPROVEITAM_PROC_PRODUTIVO",I_RARPP_n.value);}
}


/* fim ambiental*/

/*cheatbox*/
/* qual a fonte de agua */
var qfa0,qfa1,qfa2,qfa3,qfa4,qfa5;
qfa0=0;
qfa1=0;
qfa2=0;
qfa3=0;
qfa4=0;
qfa5=0;
function f_qfa_0(){
	qfa0 = qfa0+1;
	if(qfa0%2 == 1){localStorage.setItem("QUAL_E_A_FONTE_DE_AGUA1",I_QFA_poco_artesiano.value);}
	if(qfa0%2 == 0){localStorage.removeItem("QUAL_E_A_FONTE_DE_AGUA1",I_QFA_poco_artesiano.value);}
}
function f_qfa_1(){
	qfa1 = qfa1+1;
	if(qfa1%2 == 1){localStorage.setItem("QUAL_E_A_FONTE_DE_AGUA2",I_QFA_vertente.value);}
	if(qfa1%2 == 0){localStorage.removeItem("QUAL_E_A_FONTE_DE_AGUA2",I_QFA_vertente.value);}
}
function f_qfa_2(){
	qfa2 = qfa2+1;
	if(qfa2%2 == 1){localStorage.setItem("QUAL_E_A_FONTE_DE_AGUA3",I_QFA_a_r_publica.value);}
	if(qfa2%2 == 0){localStorage.removeItem("QUAL_E_A_FONTE_DE_AGUA3",I_QFA_a_r_publica.value);}
}
function f_qfa_3(){
	qfa3 = qfa3+1;
	if(qfa3%2 == 1){localStorage.setItem("QUAL_E_A_FONTE_DE_AGUA4",I_QFA_poco_comum.value);}
	if(qfa3%2 == 0){localStorage.removeItem("QUAL_E_A_FONTE_DE_AGUA4",I_QFA_poco_comum.value);}
}
function f_qfa_4(){
	qfa4 = qfa4+1;
	if(qfa4%2 == 1){localStorage.setItem("QUAL_E_A_FONTE_DE_AGUA5",I_QFA_nascente.value);}
	if(qfa4%2 == 0){localStorage.removeItem("QUAL_E_A_FONTE_DE_AGUA5",I_QFA_nascente.value);}
}
function f_qfa_5(){
	qfa5 = qfa5+1;
	if(qfa5%2 == 1){localStorage.setItem("QUAL_E_A_FONTE_DE_AGUA6",I_QFA_outro.value);}
	if(qfa5%2 == 0){localStorage.removeItem("QUAL_E_A_FONTE_DE_AGUA6",I_QFA_outro.value);}
}
/*fim qual e a fonte de agua*/


/*PARA QUE E UTILIZADA A ÁGUA*/
var PQUA1, PQUA2, PQUA3;
PQUA1=0;
PQUA2=0;
PQUA3=0;
function F_PQUA_1(){
	PQUA1 = PQUA1+1;
	if(PQUA1%2 == 1){localStorage.setItem("PARA_QUE_UTILIZADA_AGUA1",I_PQUA_MAT_PRIMA.value);}
	if(PQUA1%2 == 0){localStorage.removeItem("PARA_QUE_UTILIZADA_AGUA1",I_PQUA_MAT_PRIMA.value);}
}
function F_PQUA_2(){
	PQUA2 = PQUA2+1;
	if(PQUA2%2 == 1){localStorage.setItem("PARA_QUE_UTILIZADA_AGUA2",I_PQUA_BENEF_PRODUTO.value);}
	if(PQUA2%2 == 0){localStorage.removeItem("PARA_QUE_UTILIZADA_AGUA2",I_PQUA_BENEF_PRODUTO.value);}
}
function F_PQUA_3(){
	PQUA3 = PQUA3+1;
	if(PQUA3%2 == 1){localStorage.setItem("PARA_QUE_UTILIZADA_AGUA3",I_PQUA_LIM_INSTACOES.value);}
	if(PQUA3%2 == 0){localStorage.removeItem("PARA_QUE_UTILIZADA_AGUA3",I_PQUA_LIM_INSTACOES.value);}
}
/*PARA QUE E UTILIZADA A ÁGUA*/

/*inicio Aponte os processos aplicados na transformação*/

var vApa1, vApa2, vApa3, vApa4, vApa5, vApa6;
vApa1=0;
vApa2=0;
vApa3=0;
vApa4=0;
vApa5=0;
vApa6=0;

function f_vApa1(){
	vApa1 = vApa1+1;
	if(vApa1%2 == 1){localStorage.setItem("processos_na_transformacao1",i_a_p_a_t_past.value);}
	if(vApa1%2 == 0){localStorage.removeItem("processos_na_transformacao1",i_a_p_a_t_past.value);}	
}
function f_vApa2(){
	vApa2 = vApa2+1;
	if(vApa2%2 == 1){localStorage.setItem("processos_na_transformacao2",i_a_p_a_t_refri.value);}
	if(vApa2%2 == 0){localStorage.removeItem("processos_na_transformacao2",i_a_p_a_t_refri.value);}	
}
function f_vApa3(){
	vApa3 = vApa3+1;
	if(vApa3%2 == 1){localStorage.setItem("processos_na_transformacao3",i_a_p_a_t_cong.value);}
	if(vApa3%2 == 0){localStorage.removeItem("processos_na_transformacao3",i_a_p_a_t_cong.value);}	
}
function f_vApa4(){
	vApa4 = vApa4+1;
	if(vApa4%2 == 1){localStorage.setItem("processos_na_transformacao4",i_a_p_a_t_uflb.value);}
	if(vApa4%2 == 0){localStorage.removeItem("processos_na_transformacao4",i_a_p_a_t_uflb.value);}	
}
function f_vApa5(){
	vApa5 = vApa5+1;
	if(vApa5%2 == 1){localStorage.setItem("processos_na_transformacao5",i_a_p_a_t_defu.value);}
	if(vApa5%2 == 0){localStorage.removeItem("processos_na_transformacao5",i_a_p_a_t_defu.value);}	
}
function f_vApa6(){
	vApa6 = vApa6+1;
	if(vApa6%2 == 1){localStorage.setItem("processos_na_transformacao6",i_a_p_a_t_emva.value);}
	if(vApa6%2 == 0){localStorage.removeItem("processos_na_transformacao6",i_a_p_a_t_emva.value);}	
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
	vAcap1 = vAcap1+1;
	if(vAcap1%2 == 1){localStorage.setItem("controle_processo1",i_a_c_a_p_camp.value);}
	if(vAcap1%2 == 0){localStorage.removeItem("controle_processo1",i_a_c_a_p_camp.value);}	
}
function f_vAcap2(){
	vAcap2 = vAcap2+1;
	if(vAcap2%2 == 1){localStorage.setItem("controle_processo2",i_a_c_a_p_BPF.value);}
	if(vAcap2%2 == 0){localStorage.removeItem("controle_processo2",i_a_c_a_p_BPF.value);}	
}
function f_vAcap3(){
	vAcap3 = vAcap3+1;
	if(vAcap3%2 == 1){localStorage.setItem("controle_processo3",i_a_c_a_p_reg.value);}
	if(vAcap3%2 == 0){localStorage.removeItem("controle_processo3",i_a_c_a_p_reg.value);}	
}
function f_vAcap4(){
	vAcap4 = vAcap4+1;
	if(vAcap4%2 == 1){localStorage.setItem("controle_processo4",i_a_c_a_p_v_pra.value);}
	if(vAcap4%2 == 0){localStorage.removeItem("controle_processo4",i_a_c_a_p_v_pra.value);}	
}
function f_vAcap5(){
	vAcap5 = vAcap5+1;
	if(vAcap5%2 == 1){localStorage.setItem("controle_processo5",i_a_c_a_p_con_mic.value);}
	if(vAcap5%2 == 0){localStorage.removeItem("controle_processo5",i_a_c_a_p_con_mic.value);}	
}

/*Aponte os controles e acompanhamento de processos*/
/*fim cheatbox*/

/* funçoes gerais */

function limpar()
{
    localStorage.clear();
    alert("arquivos apagados");
}
/* fim funçoes gerais */
