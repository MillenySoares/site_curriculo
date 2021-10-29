var menu_aberto_aberto = 0;

$('#button_abrir').on('click', function(e){
    console.log('teste')
	if(menu_aberto_aberto == 0){
		abrirMenu();
	}else{
		fecharMenu();
	}
	
});
$('#button_fechar').on('click', function(e){

	if(menu_aberto_aberto == 0){
		abrirMenu();
	}else{
		fecharMenu();
	}
	
});

function abrirMenu(){
	$('#menu_mobile_aberto').show(500);
	$('#bottun_abrir').addClass('botao-menu-mobile-ativo');
	menu_aberto_aberto = 1;
}

function fecharMenu(){
	$('#menu_mobile_aberto').hide(500);
	$('#button_fechar').removeClass('botao-menu-mobile-ativo');
	menu_aberto_aberto = 0;
}
