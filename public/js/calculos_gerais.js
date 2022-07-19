
//CÓDIGO JAVASCRIPT QUE RECEBE OS DADOS DO FORMULÁRIO DA PÁGINA INICIAL
$(function () {
	//O Método CALC recebe todas as funções da calculadora
	var CALC = {
		//recebe o formulário da calculadora
		form: document.getElementById('calculadora'),
		
		obterLinha: function (item) {
			// retorna o valor do item se o parâmetro item for exatamente igual ao tipo número, senão retorna a posição da linha;
			return typeof item === 'number' ? item : $(item).parents('tr')[0].rowIndex;
		},

		//a lista geral recebe o id itemlist que pertence a todo corpo da tabela
		lista_geral: document.getElementById('itemlist'),

		//função que retorna o tamanho/comprimento da lista de itens
		numItemLinhas: function () {
			return CALC.lista_geral.rows.length;
		},
		//função com evento para remover linha quando clicar no botão
		botao_excluir: function (event) {
			event = event || window.event;
			var targ = event.target || event.srcElement;
			CALC.removeLinha(targ);

		},
		//função para remover linha
		removeLinha: function (item) {
			/*pega a classe correspondente a linha com o parâmetro repassado e a remove, renumerando
			posteriormente a quantidade de linhas e atualizando os cálculos*/
			$('#item_linha' + CALC.obterLinha(item)).remove();
			CALC.renumerarLinhas();
			//refaz os cálculos sempre que uma linha é removida
			CALC.calcDescritivos();
			CALC.calcRelatorios();
		},

		//Chama as funções para preencher os campos calculados, após inserir os dados nos input SF.
		onkeyup: function (event) {
			var targ = event.target || event.srcElement;
			if (targ.nodeName && (targ.nodeName.toLowerCase() === 'input')) {
				while ((targ.value !== '') && (targ.value.match(/^[\d]*\.?[\d]*$/) === null)) {
					targ.value = targ.value.substring(0, targ.value.length - 1);
				}
				CALC.calcularLinhas(CALC.obterLinha(targ));
				CALC.calcDescritivos();
				CALC.calcRelatorios();
			}
		},

		//função para adicionar novos itens (linhas)
		adicionar_linha: function () {
			
			//cria a variável linhaCont e atribui a quantidade de linhas do formulário
			var linhaCont = CALC.numItemLinhas();
			//cria a variável linha e insere um nova linha
			var linha = CALC.lista_geral.insertRow(linhaCont);
			//cria a variável input para receber os novos campos
			var input;
			//incrementa
			linhaCont++;
			//recebe a classe item_linha
			linha.className = 'item_linha';
			//recebe o id da classe item_linha e adiciona o incrementador
			linha.id = 'item_linha' + linhaCont;
			//entrada de um novo campo id
			input = $('<input class="item form-control" readonly="readonly" type="text" id="item_calc" name="item_calc[]" value="' + linhaCont + '">');
			//entrada de um novo campo SF1
			$(linha.insertCell()).append(input);
			input = $('<input class="sfum form-control" type="text" onkeypress="return onlynumberOP03();" maxlength="1" name="ssfum[]" id="ssfum' + linhaCont + '">');
			input.keyup(CALC.onkeyup).attr("autocomplete", "off"); //Chama a função para calcular quando digitar os valores nos inputs, e desabilita a função autocompletar de campos do formulário
			//entrada de um novo campo SF2
			$(linha.insertCell()).append(input);
			input = $('<input class="sfdois form-control" type="text" onkeypress="return onlynumberOP02();" maxlength="1" name="ssfdois[]" id="ssfdois' + linhaCont + '">');
			input.keyup(CALC.onkeyup).attr("autocomplete", "off");
			//entrada de um novo campo SF3
			$(linha.insertCell()).append(input);
			input = $('<input class="sftres form-control" type="text" onkeypress="return onlynumberOP02();" maxlength="1" name="ssftres[]" id="ssftres' + linhaCont + '">');
			input.keyup(CALC.onkeyup).attr("autocomplete", "off");
			//entrada de um novo campo SF4
			$(linha.insertCell()).append(input);
			input = $('<input class="sfquatro form-control" type="text" onkeypress="return onlynumberOP01();"  maxlength="1" name="ssfquatro[]" id="ssfquatro' + linhaCont + '">');
			input.keyup(CALC.onkeyup).attr("autocomplete", "off");
			//entrada de um novo campo SF5
			$(linha.insertCell()).append(input);
			input = $('<input class="sfcinco form-control" type="text" onkeypress="return onlynumberOP01();" maxlength="1" name="ssfcinco[]" id="ssfcinco' + linhaCont + '">');
			input.keyup(CALC.onkeyup).attr("autocomplete", "off");
			//entrada de um novo campo SF6
			$(linha.insertCell()).append(input);
			input = $('<input class="sfseis form-control"   type="text" onkeypress="return onlynumberOP01();" maxlength="1"  name="ssfseis[]" id="ssfseis' + linhaCont + '">');
			input.keyup(CALC.onkeyup).attr("autocomplete", "off");
			//entrada de um novo campo SF7
			$(linha.insertCell()).append(input);
			input = $('<input class="sfsete form-control"   type="text" onkeypress="return onlynumberOP01();" maxlength="1" name="ssfsete[]" id="ssfsete' + linhaCont + '">');
			input.keyup(CALC.onkeyup).attr("autocomplete", "off");
			//entrada de um novo campo SF8
			$(linha.insertCell()).append(input);
			input = $('<input class="sfoito form-control"   type="text" onkeypress="return onlynumberOP03();" maxlength="1" name="ssfoito[]" id="ssfoito' + linhaCont + '">');
			input.keyup(CALC.onkeyup).attr("autocomplete", "off");
			//entrada de um novo campo SF9
			$(linha.insertCell()).append(input);
			input = $('<input class="sfnove form-control"   type="text" onkeypress="return onlynumberOP04();" maxlength="1" name="ssfnove[]" id="ssfnove' + linhaCont + '">');
			input.keyup(CALC.onkeyup).attr("autocomplete", "off");
			//entrada de um novo campo SF10
			$(linha.insertCell()).append(input);
			input = $('<input class="sfdez form-control"   type="text" onkeypress="return onlynumberOP04();" maxlength="1" name="ssfdez[]" id="ssfdez' + linhaCont + '">');
			input.keyup(CALC.onkeyup).attr("autocomplete", "off");
			//entrada de um novo campo SF11
			$(linha.insertCell()).append(input);
			input = $('<input class="sfonze form-control"   type="text" onkeypress="return onlynumberOP04();" maxlength="1" name="ssfonze[]" id="ssfonze' + linhaCont + '">');
			input.keyup(CALC.onkeyup).attr("autocomplete", "off");
			//entrada de um novo campo SF12
			$(linha.insertCell()).append(input);
			input = $('<input class="sfdoze form-control"   type="text" onkeypress="return onlynumberOP03();" maxlength="1" name="ssfdoze[]" id="ssfdoze' + linhaCont + '">');
			input.keyup(CALC.onkeyup).attr("autocomplete", "off");
			//Calculo do PCS
			$(linha.insertCell()).append(input);
			input = $('<input class="ppcs form-control"  readonly="readonly" type="text" name="pcs[]" id="pcs' + linhaCont + '">');
			//Calculo do MCS
			$(linha.insertCell()).append(input);
			input = $('<input class="mmcs form-control"  readonly="readonly"  type="text" name="mcs[]" id="mcs' + linhaCont + '">');

			//entrada de um novo campo botão de excluir
			$(linha.insertCell()).append(input);
			input = $('<button  readonly="readonly" class="btn btn-danger remover_botao" name="deletar_linha' + linhaCont + '" value="Excluir" id="deletar_linha' + linhaCont + '"> Excluir </button>');
			input.click(CALC.botao_excluir);
			$(linha.insertCell()).append(input);
			$(linha).children('input[type="text"]').attr("autocomplete", "off");


		},

		//REVISAR ESTA FUNÇÃO //////////////////////////////////////////////////
		renumerarLinhas: function () {
			//Variável recebe a função que retorna o tamanho da lista
			var linhaCont = CALC.numItemLinhas();

			var indice_linha, linha, numero_linha;

			//a variável índice inicia com valor 1 e para cada indice menor que o tamanho da lista, incrementa
			for (indice_linha = 1; indice_linha < linhaCont; indice_linha++) {
				//variável numero_linha recebe o índice da linha e incrementa
				numero_linha = indice_linha + 1;
				//variável linha recebe o índice_linha da lista de itens geral
				linha = CALC.lista_geral.rows[indice_linha];
				//id da linha recebe a classe item_linha mais o valor numero_linha
				linha.id = 'item_linha' + numero_linha;
			}
		},

		exportar: function(){
			form.addEventListener('submit', (event) => {
				// stop form submission
				event.preventDefault();
			});
		},



		//função para limpar  os campos da lista
		limpar_campos: function () {
		
            /* a variável trs recebe todas as linhas da tabela*/
            var trs = document.querySelectorAll('#itemlist tr');
            //Pega cada elemento do array trs, passando como parâmetro a linha e o index  
            trs.forEach((tr, index) => {
                if(index != 0){             //se o index for diferente de zero, ou seja, não corresponder a primeira linha, esta é removida
                    tr.remove();
                }
                else{                       //se o index corresponder a primeira linha
                    var inputs = tr.querySelectorAll('input');  //variável recebe todos os campos de entrada da primeira linha da tabela
                    inputs.forEach((input, i) => {              //executa cada elemento de entrada na posição i
                        if(i != 0){                             //Apaga todos as informações nos campos que não corresponderem a primeira posição do array, da primeira linha.
                            input.value = "";
                        }
                    });
                }
              
               
            
            });
			CALC.calcDescritivos();
		
            //os campos do relatório serão limpos 
			$('#rel_pcs_media').val(''), $('#rel_pcs_desviopadrao').val(''), $('#rel_pcs_coeficiente').val(''), $('#rel_pcs_valor_maximo').val(''), $('#rel_pcs_valor_minimo').val(''), $('#rel_pcs_amplitude').val('');
			$('#rel_mcs_media').val(''), $('#rel_mcs_desviopadrao').val(''), $('#rel_mcs_coeficiente').val(''), $('#rel_mcs_valor_maximo').val(''), $('#rel_mcs_valor_minimo').val(''), $('#rel_mcs_amplitude').val('');
			$('#mediaSF1').val(''), $('#desviopadraoSF1').val(''), $('#coeficienteSF1').val(''), $('#valor_maximoSF1').val(''), $('#valor_minimoSF1').val(''), $('#amplitudeSF1').val('');
			$('#mediaSF2').val(''), $('#desviopadraoSF2').val(''), $('#coeficienteSF2').val(''), $('#valor_maximoSF2').val(''), $('#valor_minimoSF2').val(''), $('#amplitudeSF2').val('');
			$('#mediaSF3').val(''), $('#desviopadraoSF3').val(''), $('#coeficienteSF3').val(''), $('#valor_maximoSF3').val(''), $('#valor_minimoSF3').val(''), $('#amplitudeSF3').val('');
			$('#mediaSF4').val(''), $('#desviopadraoSF4').val(''), $('#coeficienteSF4').val(''), $('#valor_maximoSF4').val(''), $('#valor_minimoSF4').val(''), $('#amplitudeSF4').val('');
			$('#mediaSF5').val(''), $('#desviopadraoSF5').val(''), $('#coeficienteSF5').val(''), $('#valor_maximoSF5').val(''), $('#valor_minimoSF5').val(''), $('#amplitudeSF5').val('');
			$('#mediaSF6').val(''), $('#desviopadraoSF6').val(''), $('#coeficienteSF6').val(''), $('#valor_maximoSF6').val(''), $('#valor_minimoSF6').val(''), $('#amplitudeSF6').val('');
			$('#mediaSF7').val(''), $('#desviopadraoSF7').val(''), $('#coeficienteSF7').val(''), $('#valor_maximoSF7').val(''), $('#valor_minimoSF7').val(''), $('#amplitudeSF7').val('');
			$('#mediaSF8').val(''), $('#desviopadraoSF8').val(''), $('#coeficienteSF8').val(''), $('#valor_maximoSF8').val(''), $('#valor_minimoSF8').val(''), $('#amplitudeSF8').val('');
			$('#mediaSF9').val(''), $('#desviopadraoSF9').val(''), $('#coeficienteSF9').val(''), $('#valor_maximoSF9').val(''), $('#valor_minimoSF9').val(''), $('#amplitudeSF9').val('');
			$('#mediaSF10').val(''), $('#desviopadraoSF10').val(''), $('#coeficienteSF10').val(''), $('#valor_maximoSF10').val(''), $('#valor_minimoSF10').val(''), $('#amplitudeSF10').val('');
			$('#mediaSF11').val(''), $('#desviopadraoSF11').val(''), $('#coeficienteSF11').val(''), $('#valor_maximoSF11').val(''), $('#valor_minimoSF11').val(''), $('#amplitudeSF11').val('');
			$('#mediaSF12').val(''), $('#desviopadraoSF12').val(''), $('#coeficienteSF12').val(''), $('#valor_maximoSF12').val(''), $('#valor_minimoSF12').val(''), $('#amplitudeSF12').val('');


		},

		/*=====================================  CALCULOS GERAIS ===================================================*/

		/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
		|||||||||||||||||||||||||||||  FUNÇÃO CALCULAR LINHAS (PCS e MCS)  ||||||||||||||||||||||||||||||||||||||
		||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/


		/*FUNÇÃO IRÁ RECEBER OS VALORES DIGITADOS DE ESCALA EM CADA SF, EM SEGUIDA CONFORME O NÚMERO DIGITADO, UM VALOR DE PESO É ATRIBUIDO
		TANTO PARA PCS QUANTO PARA MCS, E EM SEGUIDA É FEITO A SOMA DESTES COM AS CONSTANTES*/

		calcularLinhas: function (numero_Linha) {

			//variáveis irão receber os valores dos campos
			var sf1 = document.getElementById('ssfum' + numero_Linha);
			var sf2 = document.getElementById('ssfdois' + numero_Linha);
			var sf3 = document.getElementById('ssftres' + numero_Linha);
			var sf4 = document.getElementById('ssfquatro' + numero_Linha);
			var sf5 = document.getElementById('ssfcinco' + numero_Linha);
			var sf6 = document.getElementById('ssfseis' + numero_Linha);
			var sf7 = document.getElementById('ssfsete' + numero_Linha);
			var sf8 = document.getElementById('ssfoito' + numero_Linha);
			var sf9 = document.getElementById('ssfnove' + numero_Linha);
			var sf10 = document.getElementById('ssfdez' + numero_Linha);
			var sf11 = document.getElementById('ssfonze' + numero_Linha);
			var sf12 = document.getElementById('ssfdoze' + numero_Linha);
			var pcs = document.getElementById('pcs' + numero_Linha);
			var mcs = document.getElementById('mcs' + numero_Linha);

			//variáveis que irão receber um valor peso para cada uma das opções escolhidas
			var pcs1_result = 0, pcs2_result = 0, pcs3_result = 0, pcs4_result = 0, pcs5_result = 0, pcs6_result = 0, pcs7_result = 0, pcs8_result = 0, pcs9_result = 0, pcs10_result = 0, pcs11_result = 0, pcs12_result = 0;
			var mcs1_result = 0, mcs2_result = 0, mcs3_result = 0, mcs4_result = 0, mcs5_result = 0, mcs6_result = 0, mcs7_result = 0, mcs8_result = 0, mcs9_result = 0, mcs10_result = 0, mcs11_result = 0, mcs12_result = 0;


			//se algum campo entre o SF1 até o 12 forem vazios os campos pcs e mcs ficarão vazios.
			if ((sf1.value === '') || (sf2.value === '') || (sf3.value === '') || (sf4.value === '') || (sf5.value === '') || (sf6.value === '') || (sf7.value === '')
				|| (sf8.value === '') || (sf9.value === '') || (sf10.value === '') || (sf11.value === '') || (sf12.value === '')) {
				pcs.value = '';
				mcs.value = '';
			}
			//senão, cada SF irá condicionar e atribuir um peso de acordo com a opção inserida nos campos.
			else {

				//condicionamento do SF1
				switch (sf1.value) {
					case '1':
						pcs1_result = 0;
						mcs1_result = 0;
						break;
					case '2':
						pcs1_result = -1.31872;
						mcs1_result = -0.06064;
						break;
					case '3':
						pcs1_result = -3.0296;
						mcs1_result = 0.03482;
						break;
					case '4':
						pcs1_result = -5.56461;
						mcs1_result = -0.16891;
						break;
					case '5':
						pcs1_result = -8.37399;
						mcs1_result = -1.71175;
						break;
					default: null;
				}

				//condicionamento do SF2
				switch (sf2.value) {
					case '1':
						pcs2_result = -7.23216;
						mcs2_result = 3.93115;
						break;
					case '2':
						pcs2_result = -3.45555;
						mcs2_result = 1.86840;
						break;
					case '3':
						pcs2_result = 0;
						mcs2_result = 0;
						break;
					default: null;
				}
				//condicionamento do SF3
				switch (sf3.value) {
					case '1':
						pcs3_result = -6.24397;
						mcs3_result = 2.68282;
						break;
					case '2':
						pcs3_result = -2.73557;
						mcs3_result = 1.43103;
						break;
					case '3':
						pcs3_result = 0;
						mcs3_result = 0;
						break;
					default: null;
				}
				//condicionamento do SF4
				switch (sf4.value) {
					case '1':
						pcs4_result = -4.61617;
						mcs4_result = 1.44060;
						break;
					case '2':
						pcs4_result = 0;
						mcs4_result = 0;
						break;
					default: null;
				}
				//condicionamento do SF5
				switch (sf5.value) {
					case '1':
						pcs5_result = -5.51747;
						mcs5_result = 1.66968;
						break;
					case '2':
						pcs5_result = 0;
						mcs5_result = 0;
						break;
					default: null;
				}
				//condicionamento do SF6
				switch (sf6.value) {
					case '1':
						pcs6_result = 3.04365;
						mcs6_result = -6.82672;
						break;
					case '2':
						pcs6_result = 0;
						mcs6_result = 0;
						break;
					default: null;
				}
				//condicionamento do SF7
				switch (sf7.value) {
					case '1':
						pcs7_result = 2.32091;
						mcs7_result = -5.69921;
						break;
					case '2':
						pcs7_result = 0;
						mcs7_result = 0;
						break;
					default: null;
				}
				//condicionamento do SF8
				switch (sf8.value) {
					case '1':
						pcs8_result = 0;
						mcs8_result = 0;
						break;
					case '2':
						pcs8_result = -3.80130;
						mcs8_result = 0.90384;
						break;
					case '3':
						pcs8_result = -6.50522;
						mcs8_result = 1.49384;
						break;
					case '4':
						pcs8_result = -8.38063;
						mcs8_result = 1.76691;
						break;
					case '5':
						pcs8_result = -11.25544;
						mcs8_result = 1.48619;
						break;
					default: null;
				}
				//condicionamento do SF9
				switch (sf9.value) {
					case '1':
						pcs9_result = 0;
						mcs9_result = 0;
						break;
					case '2':
						pcs9_result = 0.66514;
						mcs9_result = -1.94949;
						break;
					case '3':
						pcs9_result = 1.36689;
						mcs9_result = -4.09842;
						break;
					case '4':
						pcs9_result = 2.37241;
						mcs9_result = -6.31121;
						break;
					case '5':
						pcs9_result = 2.90426;
						mcs9_result = -7.92717;
						break;
					case '5':
						pcs9_result = 3.46638;
						mcs9_result = -10.19085;
						break;
					default: null;
				}
				//condicionamento do SF10
				switch (sf10.value) {
					case '1':
						pcs10_result = 0;
						mcs10_result = 0;
						break;
					case '2':
						pcs10_result = -0.42251;
						mcs10_result = -0.92057;
						break;
					case '3':
						pcs10_result = -1.14387;
						mcs10_result = -1.65178;
						break;
					case '4':
						pcs10_result = -1.61850;
						mcs10_result = -3.29805;
						break;
					case '5':
						pcs10_result = -2.02168;
						mcs10_result = -4.88962;
						break;
					case '6':
						pcs10_result = -2.44706;
						mcs10_result = -6.02409;
						break;
					default: null;
				}
				//condicionamento do SF11
				switch (sf11.value) {
					case '1':
						pcs11_result = 4.61446;
						mcs11_result = -16.15395;
						break;
					case '2':
						pcs11_result = 3.41593;
						mcs11_result = -10.77911;
						break;
					case '3':
						pcs11_result = 2.34247;
						mcs11_result = -8.09914;
						break;
					case '4':
						pcs11_result = 1.28044;
						mcs11_result = -4.59055;
						break;
					case '5':
						pcs11_result = 0.41188;
						mcs11_result = -1.95934;
						break;
					case '6':
						pcs11_result = 0;
						mcs11_result = 0;
						break;
					default: null;
				}
				//condicionamento do SF12
				switch (sf12.value) {
					case '1':
						pcs12_result = -0.33682;
						mcs12_result = -6.29724;
						break;
					case '2':
						pcs12_result = -0.94342;
						mcs12_result = -8.26066;
						break;
					case '3':
						pcs12_result = -0.18043;
						mcs12_result = -5.63286;
						break;
					case '4':
						pcs12_result = 0.11038;
						mcs12_result = -3.13896;
						break;
					case '5':
						pcs12_result = 0;
						mcs12_result = 0;
						break;
					default: null;

				}

				//Variáveis recebem os valores dos pesos atribuídos nas PCS conforme opções selecionadas
				pcs1 = parseFloat(pcs1_result);
				pcs2 = parseFloat(pcs2_result);
				pcs3 = parseFloat(pcs3_result);
				pcs4 = parseFloat(pcs4_result);
				pcs5 = parseFloat(pcs5_result);
				pcs6 = parseFloat(pcs6_result);
				pcs7 = parseFloat(pcs7_result);
				pcs8 = parseFloat(pcs8_result);
				pcs9 = parseFloat(pcs9_result);
				pcs10 = parseFloat(pcs10_result);
				pcs11 = parseFloat(pcs11_result);
				pcs12 = parseFloat(pcs12_result);

				//Variáveis recebem os valores dos pesos atribuídos nas MCS conforme opções selecionadas
				mcs1 = parseFloat(mcs1_result);
				mcs2 = parseFloat(mcs2_result);
				mcs3 = parseFloat(mcs3_result);
				mcs4 = parseFloat(mcs4_result);
				mcs5 = parseFloat(mcs5_result);
				mcs6 = parseFloat(mcs6_result);
				mcs7 = parseFloat(mcs7_result);
				mcs8 = parseFloat(mcs8_result);
				mcs9 = parseFloat(mcs9_result);
				mcs10 = parseFloat(mcs10_result);
				mcs11 = parseFloat(mcs11_result);
				mcs12 = parseFloat(mcs12_result);


				//Soma todos os valores de PCS e MCS, juntamente com suas respectivas constantes.
				pcs.value = (pcs1 + pcs2 + pcs3 + pcs4 + pcs5 + pcs6 + pcs7 + pcs8 + pcs9 + pcs10 + pcs11 + pcs12 + 56.57706).toFixed(2);
				mcs.value = (mcs1 + mcs2 + mcs3 + mcs4 + mcs5 + mcs6 + mcs7 + mcs8 + mcs9 + mcs10 + mcs11 + mcs12 + 60.75781).toFixed(2);
			}

		},


		/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
		|||||||||||||||||||||||||||||  FUNÇÃO ANÁLISE DESCRITIVA (PCS e MCS)   ||||||||||||||||||||||||||||||||||||||
		||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

		/* FUNÇÃO IRÁ CALCULAR A MÉDIA GERAL, DESVIO PADRÃO, COEFICIÊNCIA DE VARIAÇÃO DO PCS E MCS*/

		calcDescritivos: function () {
			//variáveis
			var soma_pcs = 0, soma_mcs = 0, linhaCont, listaPCS = 0, listaMCS = 0, total = CALC.numItemLinhas();
			var media_pcs = 0, media_mcs = 0;
			var desviopadrao_pcs = 0, desviopadrao_mcs = 0;

			//variáveis que vão receber os campos (inputs) da tela principal que vão receber os resultados
			PCS_MEDIA = document.getElementById('pcs_media');
			MCS_MEDIA = document.getElementById('mcs_media');
			PCS_DESVIOP = document.getElementById('pcs_desviopadrao');
			MCS_DESVIOP = document.getElementById('mcs_desviopadrao');
			PCS_COEFICIENTEV = document.getElementById('pcs_coeficiente');
			MCS_COEFICIENTEV = document.getElementById('mcs_coeficiente');


			//CALCULAR A MÉDIA DE PCS e MCS
			for (linhaCont = CALC.numItemLinhas(); linhaCont >= 1; linhaCont--) {

				//recebe os itens dos campos PCS e MCS e converte para float
				listaPCS = parseFloat(document.getElementById('pcs' + linhaCont).value);
				listaMCS = parseFloat(document.getElementById('mcs' + linhaCont).value);


				//soma os valores de todos os campos PCS e MCS
				soma_pcs += listaPCS;
				soma_mcs += listaMCS;

			}

			//calcula a média PCS e MCS, dividindo as somas pelas quantidades de itens dos respectivos domínios
			media_pcs = soma_pcs / total;
			media_mcs = soma_mcs / total;

			//CALCULAR DESVIO PADRÃO AMOSTRAL DE PCS E MCS
			for (linhaCont = CALC.numItemLinhas(); linhaCont >= 1; linhaCont--) {

				//recebe os itens dos campos PCS e MCS e converte para float
				listaPCS = parseFloat(document.getElementById('pcs' + linhaCont).value);
				listaMCS = parseFloat(document.getElementById('mcs' + linhaCont).value);

				//variáveis (pcs e mcs) recebem a diferença entre os pontos e a média, elevados ao quadrado, e vai somando cada resultado
				desviopadrao_pcs += Math.pow((listaPCS - media_pcs), 2);
				desviopadrao_mcs += Math.pow((listaMCS - media_mcs), 2);

			}

			
			//condiciona a média, se não for NaN, executa o cáculo, se a média for NaN o campo fica vazio '-' 
			if (!isNaN(media_pcs)) {

				/*----| MOSTRAR RESULTADO MÉDIA ----|*/
				PCS_MEDIA.value = media_pcs.toFixed(2); //atribui o valor da média PCS na célula de resultado na TELA
				MCS_MEDIA.value = media_mcs.toFixed(2);//atribui o valor da média MCS na célula de resultado na TELA

			} else {
				PCS_MEDIA.value = '';
				MCS_MEDIA.value = '';                    
			}
		
			
			if (desviopadrao_pcs==0) {desviopadrao_pcs=isNaN} //atribui o valor NaN se a variável desvio p. for zero

			//condiciona o desvio padrão, se não for NaN, executa o cáculo, se o desvio padrão for NaN o campo fica vazio '-'       
			if (!isNaN(desviopadrao_pcs)) {

				/*----| MOSTRAR RESULTADO DESVIO PADRÃO AMOSTRAL----|*/

				/*Pega as somas das diferenças entre os pontos e a média, elevados ao quadrado, divide pelo total de itens -1,
				e por fim, calcula a raíz quadrada */
				PCS_DESVIOP.value = Math.sqrt((desviopadrao_pcs) / (total - 1)).toFixed(2); //na TELA
				MCS_DESVIOP.value = Math.sqrt((desviopadrao_mcs) / (total - 1)).toFixed(2); //na TELA

				/*----| MOSTRAR RESULTADO COEFICIENTE DE VARIAÇÃO ----|*/

				//variável recebe os valores de desvio padrão dividido pelas médias e após, multiplica por 100
				PCS_COEFICIENTEV.value = ((PCS_DESVIOP.value / PCS_MEDIA.value) * 100).toFixed(2);//na TELA
				MCS_COEFICIENTEV.value = ((MCS_DESVIOP.value / MCS_MEDIA.value) * 100).toFixed(2);//na TELA

			}else{
				PCS_DESVIOP.value = '';
				MCS_DESVIOP.value = '';
				PCS_COEFICIENTEV.value = '';
				MCS_COEFICIENTEV.value = '';
			}


		},


		/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
		|||||||||||||||||||||||||||||  FUNÇÃO ANÁLISE DESCRITIVA RELATÓRIOS (PCS, MCS, SF)   ||||||||||||||||||||||||||||||||||||||
		||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

		/* RELATÓRIOS - FUNÇÃO IRÁ CALCULAR A MÉDIA GERAL, DESVIO PADRÃO, COEFICIÊNCIA DE VARIAÇÃO DOS DOMÍNIOS E DOS SF*/
		calcRelatorios: function () {
			//variáveis
			var soma_pcs = 0, soma_mcs = 0, somaSF1 = 0, somaSF2 = 0, somaSF3 = 0, somaSF4 = 0, somaSF5 = 0, somaSF6 = 0, somaSF7 = 0, somaSF8 = 0, somaSF9 = 0, somaSF10 = 0, somaSF11 = 0, somaSF12 = 0;
			var listaPCS = 0, listaMCS = 0, listaSF1 = 0, listaSF2 = 0, listaSF3 = 0, listaSF4 = 0, listaSF5 = 0, listaSF6 = 0, listaSF7 = 0, listaSF8 = 0, listaSF9 = 0, listaSF10 = 0, listaSF11 = 0, listaSF12 = 0;
			var media_pcs = 0, media_mcs = 0, media_sf1 = 0, media_sf2 = 0, media_sf3 = 0, media_sf4 = 0, media_sf5 = 0, media_sf6 = 0, media_sf7 = 0, media_sf8 = 0, media_sf9 = 0, media_sf10 = 0, media_sf11 = 0, media_sf12 = 0;
			var desviopadrao_pcs = 0, desviopadrao_mcs = 0, desviopadraoSF1 = 0, desviopadraoSF2 = 0, desviopadraoSF3 = 0, desviopadraoSF4 = 0, desviopadraoSF5 = 0, desviopadraoSF6 = 0, desviopadraoSF7 = 0, desviopadraoSF8 = 0, desviopadraoSF9 = 0, desviopadraoSF10 = 0, desviopadraoSF11 = 0, desviopadraoSF12 = 0;
			var max_pcs=[], max_mcs=[], sf1_max=[], sf2_max=[], sf3_max=[], sf4_max=[], sf5_max=[], sf6_max=[], sf7_max=[], sf8_max=[], sf9_max=[], sf10_max=[], sf11_max=[], sf12_max=[];
			var min_pcs=[], min_mcs=[], sf1_min=[], sf2_min=[], sf3_min=[], sf4_min=[], sf5_min=[], sf6_min=[], sf7_min=[], sf8_min=[], sf9_min=[], sf10_min=[], sf11_min=[], sf12_min=[];
			var linhaCont, total = CALC.numItemLinhas();


			//variáveis que vão receber os ID dos campos de relatório Geral (DOMÍNIOS) para repassar o resultado
			REL_PCS_MEDIA = document.getElementById('rel_pcs_media');
			REL_MCS_MEDIA = document.getElementById('rel_mcs_media');
			REL_PCS_DESVIOP = document.getElementById('rel_pcs_desviopadrao');
			REL_MCS_DESVIOP = document.getElementById('rel_mcs_desviopadrao');
			REL_PCS_COEFICIENTEV = document.getElementById('rel_pcs_coeficiente');
			REL_MCS_COEFICIENTEV = document.getElementById('rel_mcs_coeficiente');
			REL_PCS_MAX = document.getElementById('rel_pcs_valor_maximo');
			REL_MCS_MAX = document.getElementById('rel_mcs_valor_maximo');
			REL_PCS_MIN = document.getElementById('rel_pcs_valor_minimo');
			REL_MCS_MIN = document.getElementById('rel_mcs_valor_minimo');
			REL_PCS_AMPLITUDE = document.getElementById('rel_pcs_amplitude');
			REL_MCS_AMPLITUDE = document.getElementById('rel_mcs_amplitude');

			//variáveis que vão receber os ID dos campos de Médias (SF) para repassar o resultado
			MEDIASF1 = document.getElementById('mediaSF1');
			MEDIASF2 = document.getElementById('mediaSF2');
			MEDIASF3 = document.getElementById('mediaSF3');
			MEDIASF4 = document.getElementById('mediaSF4');
			MEDIASF5 = document.getElementById('mediaSF5');
			MEDIASF6 = document.getElementById('mediaSF6');
			MEDIASF7 = document.getElementById('mediaSF7');
			MEDIASF8 = document.getElementById('mediaSF8');
			MEDIASF9 = document.getElementById('mediaSF9');
			MEDIASF10 = document.getElementById('mediaSF10');
			MEDIASF11 = document.getElementById('mediaSF11');
			MEDIASF12 = document.getElementById('mediaSF12');


			//variáveis que vão receber os ID dos campos de Desvio Padrão (SF) para repassar o resultado
			DESVIOPSF1 = document.getElementById('desviopadraoSF1');
			DESVIOPSF2 = document.getElementById('desviopadraoSF2');
			DESVIOPSF3 = document.getElementById('desviopadraoSF3');
			DESVIOPSF4 = document.getElementById('desviopadraoSF4');
			DESVIOPSF5 = document.getElementById('desviopadraoSF5');
			DESVIOPSF6 = document.getElementById('desviopadraoSF6');
			DESVIOPSF7 = document.getElementById('desviopadraoSF7');
			DESVIOPSF8 = document.getElementById('desviopadraoSF8');
			DESVIOPSF9 = document.getElementById('desviopadraoSF9');
			DESVIOPSF10 = document.getElementById('desviopadraoSF10');
			DESVIOPSF11 = document.getElementById('desviopadraoSF11');
			DESVIOPSF12 = document.getElementById('desviopadraoSF12');

			//variáveis que vão receber os ID dos campos de Coeficiente (SF) para repassar o resultado
			COEFICIENTEVSF1 = document.getElementById('coeficienteSF1');
			COEFICIENTEVSF2 = document.getElementById('coeficienteSF2');
			COEFICIENTEVSF3 = document.getElementById('coeficienteSF3');
			COEFICIENTEVSF4 = document.getElementById('coeficienteSF4');
			COEFICIENTEVSF5 = document.getElementById('coeficienteSF5');
			COEFICIENTEVSF6 = document.getElementById('coeficienteSF6');
			COEFICIENTEVSF7 = document.getElementById('coeficienteSF7');
			COEFICIENTEVSF8 = document.getElementById('coeficienteSF8');
			COEFICIENTEVSF9 = document.getElementById('coeficienteSF9');
			COEFICIENTEVSF10 = document.getElementById('coeficienteSF10');
			COEFICIENTEVSF11 = document.getElementById('coeficienteSF11');
			COEFICIENTEVSF12 = document.getElementById('coeficienteSF12');

			//variáveis que vão receber os ID dos campos de Valor Máximo (SF) para repassar o resultado
			REL_SF1_MAX = document.getElementById('valor_maximoSF1');
			REL_SF2_MAX = document.getElementById('valor_maximoSF2');
			REL_SF3_MAX = document.getElementById('valor_maximoSF3');
			REL_SF4_MAX = document.getElementById('valor_maximoSF4');
			REL_SF5_MAX = document.getElementById('valor_maximoSF5');
			REL_SF6_MAX = document.getElementById('valor_maximoSF6');
			REL_SF7_MAX = document.getElementById('valor_maximoSF7');
			REL_SF8_MAX = document.getElementById('valor_maximoSF8');
			REL_SF9_MAX = document.getElementById('valor_maximoSF9');
			REL_SF10_MAX = document.getElementById('valor_maximoSF10');
			REL_SF11_MAX = document.getElementById('valor_maximoSF11');
			REL_SF12_MAX = document.getElementById('valor_maximoSF12');

			//variáveis que vão receber os ID dos campos de Valor Mínimo (SF) para repassar o resultado
			REL_SF1_MIN = document.getElementById('valor_minimoSF1');
			REL_SF2_MIN = document.getElementById('valor_minimoSF2');
			REL_SF3_MIN = document.getElementById('valor_minimoSF3');
			REL_SF4_MIN = document.getElementById('valor_minimoSF4');
			REL_SF5_MIN = document.getElementById('valor_minimoSF5');
			REL_SF6_MIN = document.getElementById('valor_minimoSF6');
			REL_SF7_MIN = document.getElementById('valor_minimoSF7');
			REL_SF8_MIN = document.getElementById('valor_minimoSF8');
			REL_SF9_MIN = document.getElementById('valor_minimoSF9');
			REL_SF10_MIN = document.getElementById('valor_minimoSF10');
			REL_SF11_MIN = document.getElementById('valor_minimoSF11');
			REL_SF12_MIN = document.getElementById('valor_minimoSF12');

			//variáveis que vão receber os ID dos campos de Amplitude (SF) para repassar o resultado
			REL_SF1_AMPLITUDE = document.getElementById('amplitudeSF1');
			REL_SF2_AMPLITUDE = document.getElementById('amplitudeSF2');
			REL_SF3_AMPLITUDE = document.getElementById('amplitudeSF3');
			REL_SF4_AMPLITUDE = document.getElementById('amplitudeSF4');
			REL_SF5_AMPLITUDE = document.getElementById('amplitudeSF5');
			REL_SF6_AMPLITUDE = document.getElementById('amplitudeSF6');
			REL_SF7_AMPLITUDE = document.getElementById('amplitudeSF7');
			REL_SF8_AMPLITUDE = document.getElementById('amplitudeSF8');
			REL_SF9_AMPLITUDE = document.getElementById('amplitudeSF9');
			REL_SF10_AMPLITUDE = document.getElementById('amplitudeSF10');
			REL_SF11_AMPLITUDE = document.getElementById('amplitudeSF11');
			REL_SF12_AMPLITUDE = document.getElementById('amplitudeSF12');


			//==================  CALCULAR A MÉDIA RELATÓRIO  =========================

			for (linhaCont = CALC.numItemLinhas(); linhaCont >= 1; linhaCont--) {

				//recebe os itens dos campos PCS e MCS e converte para float
				listaPCS = parseFloat(document.getElementById('pcs' + linhaCont).value);
				listaMCS = parseFloat(document.getElementById('mcs' + linhaCont).value);

				//recebe os itens dos campos SF e converte para float
				listaSF1 = parseFloat(document.getElementById('ssfum' + linhaCont).value);
				listaSF2 = parseFloat(document.getElementById('ssfdois' + linhaCont).value);
				listaSF3 = parseFloat(document.getElementById('ssftres' + linhaCont).value);
				listaSF4 = parseFloat(document.getElementById('ssfquatro' + linhaCont).value);
				listaSF5 = parseFloat(document.getElementById('ssfcinco' + linhaCont).value);
				listaSF6 = parseFloat(document.getElementById('ssfseis' + linhaCont).value);
				listaSF7 = parseFloat(document.getElementById('ssfsete' + linhaCont).value);
				listaSF8 = parseFloat(document.getElementById('ssfoito' + linhaCont).value);
				listaSF9 = parseFloat(document.getElementById('ssfnove' + linhaCont).value);
				listaSF10 = parseFloat(document.getElementById('ssfdez' + linhaCont).value);
				listaSF11 = parseFloat(document.getElementById('ssfonze' + linhaCont).value);
				listaSF12 = parseFloat(document.getElementById('ssfdoze' + linhaCont).value);

				//soma os valores de todos os campos PCS e MCS
				soma_pcs += listaPCS;
				soma_mcs += listaMCS;

				//soma os valores de todos os campos SF
				somaSF1 += listaSF1;
				somaSF2 += listaSF2;
				somaSF3 += listaSF3;
				somaSF4 += listaSF4;
				somaSF5 += listaSF5;
				somaSF6 += listaSF6;
				somaSF7 += listaSF7;
				somaSF8 += listaSF8;
				somaSF9 += listaSF9;
				somaSF10 += listaSF10;
				somaSF11 += listaSF11;
				somaSF12 += listaSF12;
			}

			//calcula a média PCS e MCS, dividindo as somas pelas quantidades de itens dos respectivos domínios
			media_pcs = soma_pcs / total;
			media_mcs = soma_mcs / total;

			//calcula a média dos SF, dividindo as somas pelas quantidades de itens
			media_sf1 = somaSF1 / total;
			media_sf2 = somaSF2 / total;
			media_sf3 = somaSF3 / total;
			media_sf4 = somaSF4 / total;
			media_sf5 = somaSF5 / total;
			media_sf6 = somaSF6 / total;
			media_sf7 = somaSF7 / total;
			media_sf8 = somaSF8 / total;
			media_sf9 = somaSF9 / total;
			media_sf10 = somaSF10 / total;
			media_sf11 = somaSF11 / total;
			media_sf12 = somaSF12 / total;


			//=============== CALCULAR DESVIO PADRÃO AMOSTRAL RELATÓRIO =========================

			for (linhaCont = CALC.numItemLinhas(); linhaCont >= 1; linhaCont--) {

				//recebe os itens dos campos PCS e MCS e converte para float
				listaPCS = parseFloat(document.getElementById('pcs' + linhaCont).value);
				listaMCS = parseFloat(document.getElementById('mcs' + linhaCont).value);

				//recebe os itens dos campos SF e converte para float
				listaSF1 = parseFloat(document.getElementById('ssfum' + linhaCont).value);
				listaSF2 = parseFloat(document.getElementById('ssfdois' + linhaCont).value);
				listaSF3 = parseFloat(document.getElementById('ssftres' + linhaCont).value);
				listaSF4 = parseFloat(document.getElementById('ssfquatro' + linhaCont).value);
				listaSF5 = parseFloat(document.getElementById('ssfcinco' + linhaCont).value);
				listaSF6 = parseFloat(document.getElementById('ssfseis' + linhaCont).value);
				listaSF7 = parseFloat(document.getElementById('ssfsete' + linhaCont).value);
				listaSF8 = parseFloat(document.getElementById('ssfoito' + linhaCont).value);
				listaSF9 = parseFloat(document.getElementById('ssfnove' + linhaCont).value);
				listaSF10 = parseFloat(document.getElementById('ssfdez' + linhaCont).value);
				listaSF11 = parseFloat(document.getElementById('ssfonze' + linhaCont).value);
				listaSF12 = parseFloat(document.getElementById('ssfdoze' + linhaCont).value);

				//variáveis (pcs e mcs) recebem a diferença entre os pontos e a média, elevados ao quadrado, e vai somando cada resultado
				desviopadrao_pcs += Math.pow((listaPCS - media_pcs), 2);
				desviopadrao_mcs += Math.pow((listaMCS - media_mcs), 2);

				//variáveis (sf) recebem a diferença entre os pontos e a média, elevados ao quadrado, e vai somando cada resultado
				desviopadraoSF1 += Math.pow((listaSF1 - media_sf1), 2);
				desviopadraoSF2 += Math.pow((listaSF2 - media_sf2), 2);
				desviopadraoSF3 += Math.pow((listaSF3 - media_sf3), 2);
				desviopadraoSF4 += Math.pow((listaSF4 - media_sf4), 2);
				desviopadraoSF5 += Math.pow((listaSF5 - media_sf5), 2);
				desviopadraoSF6 += Math.pow((listaSF6 - media_sf6), 2);
				desviopadraoSF7 += Math.pow((listaSF7 - media_sf7), 2);
				desviopadraoSF8 += Math.pow((listaSF8 - media_sf8), 2);
				desviopadraoSF9 += Math.pow((listaSF9 - media_sf9), 2);
				desviopadraoSF10 += Math.pow((listaSF10 - media_sf10), 2);
				desviopadraoSF11 += Math.pow((listaSF11 - media_sf11), 2);
				desviopadraoSF12 += Math.pow((listaSF12 - media_sf12), 2);

			}

			//=============== CALCULAR VALORES MÁXIMOS RELATÓRIO =========================

			//variáveis que vão inicializar em zero e fazer as comparações para encontrar o valor máximo 
			var pcs_comparamax=0, mcs_comparamax=0, sf1_comparamax=0, sf2_comparamax=0, sf3_comparamax=0, sf4_comparamax=0, sf5_comparamax=0, sf6_comparamax=0, sf7_comparamax=0, sf8_comparamax=0, sf9_comparamax=0, sf10_comparamax=0, sf11_comparamax=0, sf12_comparamax=0;

			for (linhaCont = CALC.numItemLinhas(); linhaCont >= 1; linhaCont--) {
				//recebe os itens dos campos PCS e MCS e converte para float
				listaPCS = parseFloat(document.getElementById('pcs' + linhaCont).value);
				listaMCS = parseFloat(document.getElementById('mcs' + linhaCont).value);
				//recebe os itens dos campos SF e converte para float
				listaSF1 = parseFloat(document.getElementById('ssfum' + linhaCont).value);
				listaSF2 = parseFloat(document.getElementById('ssfdois' + linhaCont).value);
				listaSF3 = parseFloat(document.getElementById('ssftres' + linhaCont).value);
				listaSF4 = parseFloat(document.getElementById('ssfquatro' + linhaCont).value);
				listaSF5 = parseFloat(document.getElementById('ssfcinco' + linhaCont).value);
				listaSF6 = parseFloat(document.getElementById('ssfseis' + linhaCont).value);
				listaSF7 = parseFloat(document.getElementById('ssfsete' + linhaCont).value);
				listaSF8 = parseFloat(document.getElementById('ssfoito' + linhaCont).value);
				listaSF9 = parseFloat(document.getElementById('ssfnove' + linhaCont).value);
				listaSF10 = parseFloat(document.getElementById('ssfdez' + linhaCont).value);
				listaSF11 = parseFloat(document.getElementById('ssfonze' + linhaCont).value);
				listaSF12 = parseFloat(document.getElementById('ssfdoze' + linhaCont).value);
		
				//sempre que o valor recebido de pcs for maior que a variável de comparação, ele executa os comandos abaixo
				if (listaPCS > pcs_comparamax) {
					max_pcs = listaPCS; //o vetor max_pcs irá armazenar o valor da listaPCS
					pcs_comparamax = listaPCS; //a variável de comparação recebe o valor da listaPCS atualizado
				}

				//sempre que o valor recebido de mcs for maior que a variável de comparação ele executa os comandos abaixo
				if (listaMCS > 	mcs_comparamax) {
					max_mcs = listaMCS; //o vetor max_mcs irá armazenar o valor da listaMCS
					mcs_comparamax = listaMCS; //a variável de comparação recebe o valor da listaMCS atualizado
				}

				/* Mesmo calculo para extrair o máximo da SF1 à SF12*/
				if (listaSF1 > sf1_comparamax) {sf1_max = listaSF1; sf1_comparamax = listaSF1; }
				if (listaSF2 > sf2_comparamax) {sf2_max = listaSF2; sf2_comparamax = listaSF2; }
				if (listaSF3 > sf3_comparamax) {sf3_max = listaSF3; sf3_comparamax = listaSF3; }
				if (listaSF4 > sf4_comparamax) {sf4_max = listaSF4; sf4_comparamax = listaSF4; }
				if (listaSF5 > sf5_comparamax) {sf5_max = listaSF5; sf5_comparamax = listaSF5; }
				if (listaSF6 > sf6_comparamax) {sf6_max = listaSF6; sf6_comparamax = listaSF6; }
				if (listaSF7 > sf7_comparamax) {sf7_max = listaSF7; sf7_comparamax = listaSF7; }
				if (listaSF8 > sf8_comparamax) {sf8_max = listaSF8; sf8_comparamax = listaSF8; }
				if (listaSF9 > sf9_comparamax) {sf9_max = listaSF9; sf9_comparamax = listaSF9; }
				if (listaSF10 > sf10_comparamax) {sf10_max = listaSF10; sf10_comparamax = listaSF10; }
				if (listaSF11 > sf11_comparamax) {sf11_max = listaSF11; sf11_comparamax = listaSF11; }
				if (listaSF12 > sf12_comparamax) {sf12_max = listaSF12; sf12_comparamax = listaSF12; }
			}

			//=============== CALCULAR VALORES MÍNIMOS RELATÓRIO =========================

			//variáveis que vão inicializar com valor infinito e fazer as comparações para encontrar o valor mínimo 
			var pcs_comparamin=Infinity, mcs_comparamin=Infinity;	
			var SF1_comparamin=Infinity, SF2_comparamin=Infinity, SF3_comparamin=Infinity, SF4_comparamin=Infinity, SF5_comparamin=Infinity, SF6_comparamin=Infinity, SF7_comparamin=Infinity, SF8_comparamin=Infinity, SF9_comparamin=Infinity, SF10_comparamin=Infinity, SF11_comparamin=Infinity, SF12_comparamin=Infinity;
			
			for (linhaCont = CALC.numItemLinhas(); linhaCont >= 1; linhaCont--) {
				//recebe os itens dos campos PCS e MCS e converte para float
				listaPCS = parseFloat(document.getElementById('pcs' + linhaCont).value);
				listaMCS = parseFloat(document.getElementById('mcs' + linhaCont).value);
				//recebe os itens dos campos SF e converte para float
				listaSF1 = parseFloat(document.getElementById('ssfum' + linhaCont).value);
				listaSF2 = parseFloat(document.getElementById('ssfdois' + linhaCont).value);
				listaSF3 = parseFloat(document.getElementById('ssftres' + linhaCont).value);
				listaSF4 = parseFloat(document.getElementById('ssfquatro' + linhaCont).value);
				listaSF5 = parseFloat(document.getElementById('ssfcinco' + linhaCont).value);
				listaSF6 = parseFloat(document.getElementById('ssfseis' + linhaCont).value);
				listaSF7 = parseFloat(document.getElementById('ssfsete' + linhaCont).value);
				listaSF8 = parseFloat(document.getElementById('ssfoito' + linhaCont).value);
				listaSF9 = parseFloat(document.getElementById('ssfnove' + linhaCont).value);
				listaSF10 = parseFloat(document.getElementById('ssfdez' + linhaCont).value);
				listaSF11 = parseFloat(document.getElementById('ssfonze' + linhaCont).value);
				listaSF12 = parseFloat(document.getElementById('ssfdoze' + linhaCont).value);

				//sempre que o valor recebido de pcs for menor que a variável de comparação ele executa os comandos abaixo
				if (listaPCS < pcs_comparamin) {
					min_pcs = listaPCS; //o vetor min_pcs irá armazenar o valor da listaPCS
					pcs_comparamin = listaPCS; //a variável de comparação recebe o valor da listaPCS atualizado
				}

				//sempre que o valor recebido de mcs for menor que a variável de comparação ele executa os comandos abaixo
				if (listaMCS < mcs_comparamin) {
					min_mcs = listaMCS; //o vetor min_mcs irá armazenar o valor da listaMCS
					mcs_comparamin = listaMCS; //a variável de comparação recebe o valor da listaMCS atualizado
				}

				/* Mesmo calculo para extrair o mínimo da SF1 à SF12*/
				if (listaSF1 < SF1_comparamin) {sf1_min = listaSF1; SF1_comparamin = listaSF1; }
				if (listaSF2 < SF2_comparamin) {sf2_min = listaSF2; SF2_comparamin = listaSF2; }
				if (listaSF3 < SF3_comparamin) {sf3_min = listaSF3; SF3_comparamin = listaSF3; }
				if (listaSF4 < SF4_comparamin) {sf4_min = listaSF4; SF4_comparamin = listaSF4; }
				if (listaSF5 < SF5_comparamin) {sf5_min = listaSF5; SF5_comparamin = listaSF5; }
				if (listaSF6 < SF6_comparamin) {sf6_min = listaSF6; SF6_comparamin = listaSF6; }
				if (listaSF7 < SF7_comparamin) {sf7_min = listaSF7; SF7_comparamin = listaSF7; }
				if (listaSF8 < SF8_comparamin) {sf8_min = listaSF8; SF8_comparamin = listaSF8; }
				if (listaSF9 < SF9_comparamin) {sf9_min = listaSF9; SF9_comparamin = listaSF9; }
				if (listaSF10 < SF10_comparamin) {sf10_min = listaSF10; SF10_comparamin = listaSF10; }
				if (listaSF11 < SF11_comparamin) {sf11_min = listaSF11; SF11_comparamin = listaSF11; }
				if (listaSF12 < SF12_comparamin) {sf12_min = listaSF12; SF12_comparamin = listaSF12; }
			}


			/* ------------------------------------ IMPRIMIR NA TELA OS RESULTADOS DO RELATÓRIO -------------------------------*/


			/*----| MOSTRAR RESULTADO MÉDIA ----|*/

			if (!isNaN(media_pcs)) {
				REL_PCS_MEDIA.value = media_pcs.toFixed(2); //atribui o valor da média PCS na célula de resultado no RELATÓRIO
				REL_MCS_MEDIA.value = media_mcs.toFixed(2);//atribui o valor da média MCS na célula de resultado no RELATÓRIO

				MEDIASF1.value = media_sf1.toFixed(2);//atribui o valor da média SF1
				MEDIASF2.value = media_sf2.toFixed(2);//atribui o valor da média SF2
				MEDIASF3.value = media_sf3.toFixed(2);//atribui o valor da média SF3
				MEDIASF4.value = media_sf4.toFixed(2);//atribui o valor da média SF4
				MEDIASF5.value = media_sf5.toFixed(2);//atribui o valor da média SF5
				MEDIASF6.value = media_sf6.toFixed(2);//atribui o valor da média SF6
				MEDIASF7.value = media_sf7.toFixed(2);//atribui o valor da média SF7
				MEDIASF8.value = media_sf8.toFixed(2);//atribui o valor da média SF8
				MEDIASF9.value = media_sf9.toFixed(2);//atribui o valor da média SF9
				MEDIASF10.value = media_sf10.toFixed(2);//atribui o valor da média SF10
				MEDIASF11.value = media_sf11.toFixed(2);//atribui o valor da média SF11
				MEDIASF12.value = media_sf12.toFixed(2);//atribui o valor da média SF12*/

			}else{

                REL_PCS_MEDIA.value = '';
                REL_MCS_MEDIA.value = '';
                MEDIASF1.value = '';
                MEDIASF2.value = '';
                MEDIASF3.value = '';
                MEDIASF4.value = '';
                MEDIASF5.value = '';
                MEDIASF6.value = '';
                MEDIASF7.value = '';
                MEDIASF8.value = '';
                MEDIASF9.value = '';
                MEDIASF10.value = '';
                MEDIASF11.value = '';
                MEDIASF12.value = '';
            }
			

			/*----| MOSTRAR RESULTADO DESVIO PADRÃO AMOSTRAL----|*/
		
			if (desviopadrao_pcs==0) {desviopadrao_pcs=isNaN} //atribui o valor NaN se a variável desvio padrão for zero

            //se o valor de desvio padrão pcs não for NaN, executa os cálculos 
            if (!isNaN(desviopadrao_pcs)) {

                /*Pega as somas das diferenças entre os pontos e a média, elevados ao quadrado, divide pelo total de itens -1,
			  e por fim, calcula a raíz quadrada */

                REL_PCS_DESVIOP.value = Math.sqrt((desviopadrao_pcs) / (total - 1)).toFixed(2); //DSVP PCS
                REL_MCS_DESVIOP.value = Math.sqrt((desviopadrao_mcs) / (total - 1)).toFixed(2); //DSVP MCS

                DESVIOPSF1.value = Math.sqrt((desviopadraoSF1) / (total - 1)).toFixed(2); //DSVP SF1
                DESVIOPSF2.value = Math.sqrt((desviopadraoSF2) / (total - 1)).toFixed(2); //DSVP SF2
                DESVIOPSF3.value = Math.sqrt((desviopadraoSF3) / (total - 1)).toFixed(2); //DSVP SF3
                DESVIOPSF4.value = Math.sqrt((desviopadraoSF4) / (total - 1)).toFixed(2); //DSVP SF4
                DESVIOPSF5.value = Math.sqrt((desviopadraoSF5) / (total - 1)).toFixed(2); //DSVP SF5
                DESVIOPSF6.value = Math.sqrt((desviopadraoSF6) / (total - 1)).toFixed(2); //DSVP SF6
                DESVIOPSF7.value = Math.sqrt((desviopadraoSF7) / (total - 1)).toFixed(2); //DSVP SF7
                DESVIOPSF8.value = Math.sqrt((desviopadraoSF8) / (total - 1)).toFixed(2); //DSVP SF8
                DESVIOPSF9.value = Math.sqrt((desviopadraoSF9) / (total - 1)).toFixed(2); //DSVP SF9
                DESVIOPSF10.value = Math.sqrt((desviopadraoSF10) / (total - 1)).toFixed(2); //DSVP SF10
                DESVIOPSF11.value = Math.sqrt((desviopadraoSF11) / (total - 1)).toFixed(2); //DSVP SF11
                DESVIOPSF12.value = Math.sqrt((desviopadraoSF12) / (total - 1)).toFixed(2); //DSVP SF12

                /*----| MOSTRAR RESULTADO COEFICIENTE DE VARIAÇÃO ----|*/

                //variável recebe os valores de desvio padrão dividido pelas médias e após, multiplica por 100

                REL_PCS_COEFICIENTEV.value = ((REL_PCS_DESVIOP.value / REL_PCS_MEDIA.value) * 100).toFixed(2);//COEFICIENTE PCS
                REL_MCS_COEFICIENTEV.value = ((REL_MCS_DESVIOP.value / REL_MCS_MEDIA.value) * 100).toFixed(2);//COEFICIENTE MCS

                COEFICIENTEVSF1.value = ((DESVIOPSF1.value / MEDIASF1.value) * 100).toFixed(2);//COEFICIENTE SF1
                COEFICIENTEVSF2.value = ((DESVIOPSF2.value / MEDIASF2.value) * 100).toFixed(2);//COEFICIENTE SF2
                COEFICIENTEVSF3.value = ((DESVIOPSF3.value / MEDIASF3.value) * 100).toFixed(2);//COEFICIENTE SF3
                COEFICIENTEVSF4.value = ((DESVIOPSF4.value / MEDIASF4.value) * 100).toFixed(2);//COEFICIENTE SF4
                COEFICIENTEVSF5.value = ((DESVIOPSF5.value / MEDIASF5.value) * 100).toFixed(2);//COEFICIENTE SF5
                COEFICIENTEVSF6.value = ((DESVIOPSF6.value / MEDIASF6.value) * 100).toFixed(2);//COEFICIENTE SF6
                COEFICIENTEVSF7.value = ((DESVIOPSF7.value / MEDIASF7.value) * 100).toFixed(2);//COEFICIENTE SF7
                COEFICIENTEVSF8.value = ((DESVIOPSF8.value / MEDIASF8.value) * 100).toFixed(2);//COEFICIENTE SF8
                COEFICIENTEVSF9.value = ((DESVIOPSF9.value / MEDIASF9.value) * 100).toFixed(2);//COEFICIENTE SF9
                COEFICIENTEVSF10.value = ((DESVIOPSF10.value / MEDIASF10.value) * 100).toFixed(2);//COEFICIENTE SF10
                COEFICIENTEVSF11.value = ((DESVIOPSF11.value / MEDIASF11.value) * 100).toFixed(2);//COEFICIENTE SF11
                COEFICIENTEVSF12.value = ((DESVIOPSF12.value / MEDIASF12.value) * 100).toFixed(2);//COEFICIENTE SF12


                /*----| MOSTRAR RESULTADO VALOR MÁXIMO ----|*/

                REL_PCS_MAX.value = max_pcs; //VALOR MÁXIMO PCS
                REL_MCS_MAX.value = max_mcs; //VALOR MÁXIMO MCS
                
                //Valores máximos SF1 a SF12 
                REL_SF1_MAX.value = sf1_max;
                REL_SF2_MAX.value = sf2_max;
                REL_SF3_MAX.value = sf3_max;
                REL_SF4_MAX.value = sf4_max;
                REL_SF5_MAX.value = sf5_max;
                REL_SF6_MAX.value = sf6_max;
                REL_SF7_MAX.value = sf7_max;
                REL_SF8_MAX.value = sf8_max;
                REL_SF9_MAX.value = sf9_max;
                REL_SF10_MAX.value = sf10_max;
                REL_SF11_MAX.value = sf11_max;
                REL_SF12_MAX.value = sf12_max;
    
                /*----| MOSTRAR RESULTADO VALOR MÍNIMO ----|*/
    
                REL_PCS_MIN.value = min_pcs; //VALOR MÍNIMO PCS
                REL_MCS_MIN.value = min_mcs; //VALOR MÍNIMO MCS
                
                //Valores máximos SF1 a SF12 
                REL_SF1_MIN.value = sf1_min;
                REL_SF2_MIN.value = sf2_min;
                REL_SF3_MIN.value = sf3_min;
                REL_SF4_MIN.value = sf4_min;
                REL_SF5_MIN.value = sf5_min;
                REL_SF6_MIN.value = sf6_min;
                REL_SF7_MIN.value = sf7_min;
                REL_SF8_MIN.value = sf8_min;
                REL_SF9_MIN.value = sf9_min;
                REL_SF10_MIN.value = sf10_min;
                REL_SF11_MIN.value = sf11_min;
                REL_SF12_MIN.value = sf12_min;

                    /*----| MOSTRAR RESULTADO AMPLITUDES ----|*/
			
                /* As amplitudes correspondem ao valor máximo subtraído ao valor mínimo*/

            
                REL_PCS_AMPLITUDE.value = (REL_PCS_MAX.value - REL_PCS_MIN.value).toFixed(2); //AMPLITUDE PCS
                REL_MCS_AMPLITUDE.value = (REL_MCS_MAX.value - REL_MCS_MIN.value).toFixed(2); //AMPLITUDE MCS

                //Amplitude SF1 a SF12 
                REL_SF1_AMPLITUDE.value = (REL_SF1_MAX.value - REL_SF1_MIN.value); 
                REL_SF2_AMPLITUDE.value = (REL_SF2_MAX.value - REL_SF2_MIN.value); 
                REL_SF3_AMPLITUDE.value = (REL_SF3_MAX.value - REL_SF3_MIN.value); 
                REL_SF4_AMPLITUDE.value = (REL_SF4_MAX.value - REL_SF4_MIN.value); 
                REL_SF5_AMPLITUDE.value = (REL_SF5_MAX.value - REL_SF5_MIN.value); 
                REL_SF6_AMPLITUDE.value = (REL_SF6_MAX.value - REL_SF6_MIN.value); 
                REL_SF7_AMPLITUDE.value = (REL_SF7_MAX.value - REL_SF7_MIN.value); 
                REL_SF8_AMPLITUDE.value = (REL_SF8_MAX.value - REL_SF8_MIN.value); 
                REL_SF9_AMPLITUDE.value = (REL_SF9_MAX.value - REL_SF9_MIN.value); 
                REL_SF10_AMPLITUDE.value = (REL_SF10_MAX.value - REL_SF10_MIN.value); 
                REL_SF11_AMPLITUDE.value = (REL_SF11_MAX.value - REL_SF11_MIN.value); 
                REL_SF12_AMPLITUDE.value = (REL_SF12_MAX.value - REL_SF12_MIN.value); 
         
            }else{

				//se a condicionante anterior não for atendida, os inputs de desvio padrão, valores máximo e mínimo, e a amplitude serão limpos. 
				$('#rel_pcs_desviopadrao').val(''), $('#rel_pcs_coeficiente').val(''), $('#rel_pcs_valor_maximo').val(''), $('#rel_pcs_valor_minimo').val(''), $('#rel_pcs_amplitude').val('');
				$('#rel_mcs_desviopadrao').val(''), $('#rel_mcs_coeficiente').val(''), $('#rel_mcs_valor_maximo').val(''), $('#rel_mcs_valor_minimo').val(''), $('#rel_mcs_amplitude').val('');
				$('#desviopadraoSF1').val(''), $('#coeficienteSF1').val(''), $('#valor_maximoSF1').val(''), $('#valor_minimoSF1').val(''), $('#amplitudeSF1').val('');
				$('#desviopadraoSF2').val(''), $('#coeficienteSF2').val(''), $('#valor_maximoSF2').val(''), $('#valor_minimoSF2').val(''), $('#amplitudeSF2').val('');
				$('#desviopadraoSF3').val(''), $('#coeficienteSF3').val(''), $('#valor_maximoSF3').val(''), $('#valor_minimoSF3').val(''), $('#amplitudeSF3').val('');
				$('#desviopadraoSF4').val(''), $('#coeficienteSF4').val(''), $('#valor_maximoSF4').val(''), $('#valor_minimoSF4').val(''), $('#amplitudeSF4').val('');
				$('#desviopadraoSF5').val(''), $('#coeficienteSF5').val(''), $('#valor_maximoSF5').val(''), $('#valor_minimoSF5').val(''), $('#amplitudeSF5').val('');
				$('#desviopadraoSF6').val(''), $('#coeficienteSF6').val(''), $('#valor_maximoSF6').val(''), $('#valor_minimoSF6').val(''), $('#amplitudeSF6').val('');
				$('#desviopadraoSF7').val(''), $('#coeficienteSF7').val(''), $('#valor_maximoSF7').val(''), $('#valor_minimoSF7').val(''), $('#amplitudeSF7').val('');
				$('#desviopadraoSF8').val(''), $('#coeficienteSF8').val(''), $('#valor_maximoSF8').val(''), $('#valor_minimoSF8').val(''), $('#amplitudeSF8').val('');
				$('#desviopadraoSF9').val(''), $('#coeficienteSF9').val(''), $('#valor_maximoSF9').val(''), $('#valor_minimoSF9').val(''), $('#amplitudeSF9').val('');
				$('#desviopadraoSF10').val(''), $('#coeficienteSF10').val(''), $('#valor_maximoSF10').val(''), $('#valor_minimoSF10').val(''), $('#amplitudeSF10').val('');
				$('#desviopadraoSF11').val(''), $('#coeficienteSF11').val(''), $('#valor_maximoSF11').val(''), $('#valor_minimoSF11').val(''), $('#amplitudeSF11').val('');
				$('#desviopadraoSF12').val(''), $('#coeficienteSF12').val(''), $('#valor_maximoSF12').val(''), $('#valor_minimoSF12').val(''), $('#amplitudeSF12').val('');

            } 
        
		},


	};

	$('#adicionar').click(CALC.adicionar_linha); //chama a função adicionar linha quando clica no botão  adicionar
	$('#itemlist').keyup(CALC.onkeyup).attr("autocomplete", "off"); //efetua os cálculos da linha #1 ao preencher os campos da primeira linha, e desabilita a função autocompletar
	$('.remover_botao').click(CALC.botao_excluir); //chama a função para remover uma linha quando clica no botão excluir
	$('#btn_limpar').click(CALC.limpar_campos); //chama a função para reseter o formulário quando clica no botão limpar
	$('#bnt_export').click(CALC.exportar); //chama a função para reseter o formulário quando clica no botão limpar


	
});


