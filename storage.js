

	
	
	
	/* pessoa fisica */
function adicionarpessoafisica()
{
	localStorage.setItem("nome", icontato.value);
    alert("Item adicionado.");

	localStorage.setItem("cpf",icpf.value);
    "cpf".text = icpf.value = "";
	
	localStorage.setItem("endereço",iendereco.value);
	"endereço".text =iendereco.value = "";

	localStorage.setItem("cidade",icidade.value);
	"cidade".text =icidade.value = "";

	localStorage.setItem("telefone",itelefone.value);
	"telefone".text =itelefone.value = "";

	localStorage.setItem("e-mail",iemail.value);
	"e-mail".text =iemail.value = "";

	localStorage.setItem("fax",ifax.value);
	"fax".text =ifax.value = "";

	localStorage.setItem("marca",imarca.value);
	"marca".text =imarca.value = "";

	localStorage.setItem("cads prefeitura",icads.value);
	"cads prefeitura".text =icads.value = "";

	localStorage.setItem("estado da terra",iestado_da_terra.value);
	"estado da terra".text =iestado_da_terra.value = "";
}


/* fim pessoa fisica */

/* agroindustria */
function materiaprima(materia)
{
	if(materia == 1){
	localStorage.setItem("MATERIA PRIMA",ipropria.value);
	}
	if(materia == 2){
	localStorage.setItem("MATERIA PRIMA",iterceiros.value);
	}
}
function local(lugar)
{
	if(lugar == 1){
	localStorage.setItem("LOCALIZAÇÃO",iareaurbana.value);
	}
	if(lugar == 2){
	localStorage.setItem("LOCALIZAÇÃO",iarearural.value);
	}
}
function multifuncional(tipo)
{
	if(tipo == 1){
	localStorage.setItem("MULTIFUNCIONAL",imsim.value);
	}
	if(tipo == 2){
	localStorage.setItem("MULTIFUNCIONAL",imnao.value);
	}	
}
function categorias(deriva)
{
	if(deriva == 1){
	localStorage.setItem("CATEGORIAS",ider_carne.value);
	}
	if(deriva == 2){
	localStorage.setItem("CATEGORIAS",ider_leite.value);
	}
	if(deriva == 3){
	localStorage.setItem("CATEGORIAS",ider_vegetal.value);
	}
	if(deriva == 4){
	localStorage.setItem("CATEGORIAS",ihort_frute.value);
	}
	if(deriva == 5){
	localStorage.setItem("CATEGORIAS",icat_nenhuma.value);
	}
}
function adicionaragroindustrias()
{
		
	localStorage.setItem("RESPONSAVEL TECNICO",iresponsavel_tecnico.value);
	"RESPONSAVEL TECNICO".text =iresponsavel_tecnico.value = "";
	
	localStorage.setItem("FORMAÇÃO",iformacao.value);
	   alert("salvo com sucesso");
	"FORMAÇÃO".text =iformacao.value = "";
}
/* fim agroindustria */


/*  produção(produtos)  */


function adicionarproducao()
{
	localStorage.produto=iqual_produto.value;
   
	localStorage.quantidade_mes=iquantidade_mes.value;

	localStorage.unidade=iunidade.value;
}
function maisalgumproduto(produtos)
{
	if(produtos==1){
	localStorage.setItem("mais_um_produto",imaisprodutos.value);
	}
	if(produtos==2){
	localStorage.setItem("mais_um_produto",imaisproduton.value);
	}
}
/* fim produção(produtos) */


/* mercado */

function mercado()
{
	localStorage.setItem("faturamento_bruto_medio_anual", fat_b_m_anual.value);

	
	localStorage.setItem("numero_de_homens_familiar", t_f_nh.value);
 
	
	localStorage.setItem("numero_de_mulheres_familiar", t_f_nm.value);

	
	localStorage.setItem("numero_de_homens_cont_temporario", t_cont_temp_nh.value);
   
	
	localStorage.setItem("numero_de_mulheres_cont_temporario", t_cont_temp_nm.value);

	
	localStorage.setItem("numero_de_homens_cont_permanente", t_cont_perm_nh.value);
 
	
	localStorage.setItem("numero_de_mulheres_cont_permanente", t_cont_perm_nm.value);
  
  
	localStorage.setItem("valor_total_investido", i_v_t_investido.value);
	
	
	localStorage.setItem("intencao_de_investir", i_int_investir.value);
	
	
	localStorage.setItem("recursos_proprios", i_rec_proprio.value);

	
	localStorage.setItem("agencia_fomento_parana", i_a_fom_parana.value);

	
	localStorage.setItem("programa_parana12", i_prog_parana.value);

	
	localStorage.setItem("PRONAF", i_pronaf.value);  

	
	localStorage.setItem("outros", i_outros.value);
    alert("Item adicionado.");
}
function ondevende(fovende)
{
	if(fovende == 1){
	localStorage.setItem("onde_vende", i_ov_municipio.value);	
	}
	if(fovende == 2){
		localStorage.setItem("onde_vende", i_ov_regiao.value);
	}
	if(fovende == 3){
		localStorage.setItem("onde_vende", i_ov_estado.value);
	}
	if(fovende == 4){
		localStorage.setItem("onde_vende", i_ov_fora_do_estado.value);
	}
}
function ondepretendevender(fopvende)
{
	if(fopvende == 1){
		localStorage.setItem("onde_pretende_vender", i_opv_municipio.value);
	}
	if(fopvende == 2){
		localStorage.setItem("onde_pretende_vender", i_opv_regiao.value);
	}
	if(fopvende == 3){
		localStorage.setItem("onde_pretende_vender", i_opv_estado.value);
	}
	if(fopvende == 4){
		localStorage.setItem("onde_pretende_vender", i_opv_fora_do_estado.value);
	}
}

function tabvarejo(ftvarejo)
{
	if(ftvarejo == 1){
		localStorage.setItem("varejo", i_v_0_20.value);
	}
	if(ftvarejo == 2){
		localStorage.setItem("varejo", i_v_21_40.value);
	}
	if(ftvarejo == 3){
		localStorage.setItem("varejo", i_v_41_60.value);
	}	
	if(ftvarejo == 4){
		localStorage.setItem("varejo", i_v_61_80.value);
	}
	if(ftvarejo == 5){
		localStorage.setItem("varejo", i_v_81_100.value);
	}
}
function tabatacado(ftatacado)
{
	if(ftatacado == 1){
		localStorage.setItem("atacado", i_at_0_20.value);
	}
	if(ftatacado == 2){
		localStorage.setItem("atacado", i_at_21_40.value);
	}
	if(ftatacado == 3){
		localStorage.setItem("atacado", i_at_41_60.value);
	}	
	if(ftatacado == 4){
		localStorage.setItem("atacado", i_at_61_80.value);
	}
	if(ftatacado == 5){
		localStorage.setItem("atacado", i_at_81_100.value);
	}
}
function tabvdconsumidor(ftvdconsumidor)
{
	if(ftvdconsumidor == 1){
		localStorage.setItem("venda_direta_ao_consumidor", i_v_d_c_0_20.value);
	}
	if(ftvdconsumidor == 2){
		localStorage.setItem("venda_direta_ao_consumidor", i_v_d_c_21_40.value);
	}
	if(ftvdconsumidor == 3){
		localStorage.setItem("venda_direta_ao_consumidor", i_v_d_c_41_60.value);
	}	
	if(ftvdconsumidor == 4){
		localStorage.setItem("venda_direta_ao_consumidor", i_v_d_c_61_80.value);
	}
	if(ftvdconsumidor == 5){
		localStorage.setItem("venda_direta_ao_consumidor", i_v_d_c_81_100.value);
	}
}
function tabreprecomercial(ftreprecomercial)
{
	if(ftreprecomercial == 1){
		localStorage.setItem("representante_comercial", i_r_c_0_20.value);
	}
	if(ftreprecomercial == 2){
		localStorage.setItem("representante_comercial", i_r_c_21_40.value);
	}
	if(ftreprecomercial == 3){
		localStorage.setItem("representante_comercial", i_r_c_41_60.value);
	}	
	if(ftreprecomercial == 4){
		localStorage.setItem("representante_comercial", i_r_c_61_80.value);
	}
	if(ftreprecomercial == 5){
		localStorage.setItem("representante_comercial", i_r_c_81_100.value);
	}
}
function tabcliente(ftcliente)
{
	if(ftcliente == 1){
		localStorage.setItem("cliente", i_c_0_20.value);
	}
	if(ftcliente == 2){
		localStorage.setItem("cliente", i_c_21_40.value);
	}
	if(ftcliente == 3){
		localStorage.setItem("cliente", i_c_41_60.value);
	}	
	if(ftcliente == 4){
		localStorage.setItem("cliente", i_c_61_80.value);
	}
	if(ftcliente == 5){
		localStorage.setItem("cliente", i_c_81_100.value);
	}
}
function tabinstitucional(ftinstitucional)
{
	if(ftinstitucional == 1){
		localStorage.setItem("institucional", i_i_0_20.value);
	}
	if(ftinstitucional == 2){
		localStorage.setItem("institucional", i_i_21_40.value);
	}
	if(ftinstitucional == 3){
		localStorage.setItem("institucional", i_i_41_60.value);
	}	
	if(ftinstitucional == 4){
		localStorage.setItem("institucional", i_i_61_80.value);
	}
	if(ftinstitucional == 5){
		localStorage.setItem("institucional", i_i_81_100.value);
	}
}
function areainfrastrutura(fainfraestrutura)
{
	if(fainfraestrutura == 1){
		localStorage.setItem("area_da_infraestrutura", i_ainf_propria.value);
	}
	if(fainfraestrutura == 2){
		localStorage.setItem("area_da_infraestrutura", i_ainf_arrendada.value);
	}
	if(fainfraestrutura == 3){
		localStorage.setItem("area_da_infraestrutura", i_ainf_alugada.value);
	}	
	if(fainfraestrutura == 4){
		localStorage.setItem("area_da_infraestrutura", i_ainf_comodatada.value);
	}
}
function tipomaterial(ftmaterial)
{
	if(ftmaterial == 1){
		localStorage.setItem("tipo_de_material", i_tmat_alvenaria.value);
	}
	if(ftmaterial == 2){
		localStorage.setItem("tipo_de_material", i_tmat_madeira.value);
	}
	if(ftmaterial == 3){
		localStorage.setItem("tipo_de_material", i_tmat_mista.value);
	}	
}
function mofamilhar(fmofamilhar)
{
	if(fmofamilhar == 1){
		localStorage.setItem("mao_de_obra_familhar", i_f_s.value);
	}
	if(fmofamilhar == 2){
		localStorage.setItem("mao_de_obra_familhar", t_f_n.value);
	}
}
function mocontratadatemporaria(fmotemporaria)
{
	if(fmotemporaria == 1){
		localStorage.setItem("mao_de_obra_contratada_temporaria", i_ct_s.value);
	}
	if(fmotemporaria == 2){
		localStorage.setItem("mao_de_obra_contratada_temporaria", i_ct_n.value);
	}
}
function mocontratadapermanente(fmopermanente)
{
	if(fmopermanente == 1){
		localStorage.setItem("mao_de_obra_contratada_permanente", i_cp_s.value);
	}
	if(fmopermanente == 2){
		localStorage.setItem("mao_de_obra_contratada_permanente", i_cp_n.value);
	}
}
function registroprodutoanimal(freganimal)
{
	if(freganimal == 1){
		localStorage.setItem("registro_produto_animal", i_reg_pro_o_a_sim.value);
	}
	if(freganimal == 2){
		localStorage.setItem("registro_produto_animal", i_reg_pro_o_a_sip.value);
	}
	if(freganimal == 3){
		localStorage.setItem("registro_produto_animal", i_reg_pro_o_a_sif.value);
	}
	if(freganimal == 4){
		localStorage.setItem("registro_produto_animal", i_reg_pro_o_a_semRegistro.value);
	}
}
function registroprodutoSESA(fregSESA)
{
	if(fregSESA == 1){
		localStorage.setItem("registro_produto_SESA", ireg_SESA_sim.value);
	}
	if(fregSESA == 2){
		localStorage.setItem("registro_produto_SESA", ireg_SESA_nao.value);
	}
}
function registroprodutovegetal(fregvegetal)
{
	if(fregvegetal == 1){
		localStorage.setItem("registro_produto_vegetal", i_reg_o_veg_sim.value);
	}
	if(fregvegetal == 2){
		localStorage.setItem("registro_produto_vegetal", i_reg_o_veg_não.value);
	}
}
function registrodemarca(fregmarca)
{
	if(fregmarca == 1){
		localStorage.setItem("registro_marca", i_reg_marca_ean.value);
	}
	if(fregmarca == 2){
		localStorage.setItem("registro_marca", i_reg_marca_inpi.value);
	}
}
/* fim mercado */




/* demandas e necessidades */

function demandas_e_necessidades()
{
	localStorage.setItem("CAPTAÇÃO_TECNOLOGIA",i_d_n_cap_tec.value);
	"CAPTAÇÃO_TECNOLOGIA".text =i_d_n_cap_tec.value = "";
	
	localStorage.setItem("assistencia_tecnica",i_assis_tec.value);
	"assistencia_tecnica".text =i_assis_tec.value = "";
}

function org_asso_cap_tec (forg_asso_cap_tec)
{
	if(forg_asso_cap_tec == 1){
	localStorage.setItem("LOCALIZAÇÃO",i_orcap__s.value);
	}
	if(forg_asso_cap_tec == 2){
	localStorage.setItem("LOCALIZAÇÃO",i_orcap_n.value);
	}
}

function org_asso_assis_tec(forg_asso_assis_tec)
{
	if(forg_asso_assis_tec == 1)
	{
	localStorage.setItem("LOCALIZAÇÃO",i_orassi_s.value);
	}
	if(forg_asso_assis_tec == 2)
	{
	localStorage.setItem("LOCALIZAÇÃO",i_orassi_n.value);
	}
}

function rotulagem_marca(frotulagem_marca)
{
	if(frotulagem_marca == 1)
	{
	localStorage.setItem("rotulagem_marca",i_rot_marc_desenvolvimento.value);
	}
	if(frotulagem_marca == 2)
	{
	localStorage.setItem("rotulagem_marca",i_rot_marc_melhoramento.value);
	}
	if(frotulagem_marca == 3)
	{
	localStorage.setItem("rotulagem_marca",i_rot_marc_valor_nutricional.value);
	}
	if(frotulagem_marca == 4)
	{
	localStorage.setItem("rotulagem_marca",i_rot_marc_adequacao.value);
	}
}

function cod_barra(fcod_barra)
{
	if(fcod_barra == 1)
	{
	localStorage.setItem("CODIGO DE BARRA",i_cod_barras_s.value);
	}
	if(fcod_barra == 2)
	{
	localStorage.setItem("CODIGO DE BARRA",i_cod_barras_n.value);
	}
	if(fcod_barra == 3)
	{
	localStorage.setItem("CODIGO DE BARRA",i_cod_barras_eam.value);
	}
}

function reg_de_marca(freg_de_marca)
{
	if(freg_de_marca == 1)
	{
	localStorage.setItem("REGISTRO DE MARCAS",i_regis_marca_nao_possui.value);
	}
	if(freg_de_marca == 2)
	{
	localStorage.setItem("REGISTRO DE MARCAS",i_regis_marca_nao_quer.value);
	}
	if(freg_de_marca == 3)
	{
	localStorage.setItem("REGISTRO DE MARCAS",i_regis_marca_deseja.value);
	}
	if(freg_de_marca == 4)
	{
	localStorage.setItem("REGISTRO DE MARCAS",i_regis_marca_inpi.value);
	}
}

function proj_da_uni_agro(fproj_da_uni_agro)
{
	if(fproj_da_uni_agro == 1)
	{
	localStorage.setItem("PROJETO DA UNIDADE AGROINDUSTRIAL",i_proj_uni_agro_adequacao.value);
	}
	if(fproj_da_uni_agro == 2)
	{
	localStorage.setItem("PROJETO DA UNIDADE AGROINDUSTRIAL",i_proj_uni_agro_melhoramento.value);
	}
	if(fproj_da_uni_agro == 3)
	{
	localStorage.setItem("PROJETO DA UNIDADE AGROINDUSTRIAL",i_proj_uni_agro_nova_proposta.value);
	}
	if(fproj_da_uni_agro == 4)
	{
	localStorage.setItem("PROJETO DA UNIDADE AGROINDUSTRIAL",i_proj_uni_agro_planta.value);
	}
}

function comercializacao(fcomercializacao)
{
	if(fcomercializacao == 1)
	{
	localStorage.setItem("comercializacao",i_comer_insercao.value);
	}
	if(fcomercializacao == 2)
	{
	localStorage.setItem("comercializacao",i_comer_amp_c_comer.value);
	}
	if(fcomercializacao == 3)
	{
	localStorage.setItem("comercializacao",i_comer_venda_conjunta.value);
	}
}

function credito(fcredito)
{
	if(fcredito == 1)
	{
	localStorage.setItem("CREDITO",i_cred_inverstimento.value);
	}
	if(fcredito == 2)
	{
	localStorage.setItem("CREDITO",i_cred_capt_giro.value);
	}
}

/* fim demandas e necessidades */








/* outros */


function limpar()
{
    localStorage.clear();
    alert("arquivos apagados");
}