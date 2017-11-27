$(document).ready(function(){
    var typea = 0;
	$(".T1Btn button").click(function(){
        typea = $(this).data('typea');
		
		$('.grafik .T1View').text(typea);
		$('.grafik .T1View').addClass('pipka');
		$('.grafik .T1View').removeClass('T1View');
		$('.grafik .T2View').removeClass('T2View');
		$('.grafik').prepend('<div><div class="sgraf1 T1View"></div><div class="sgraf2 T2View"></div></div>');		
		
		//alert(typea);
    });
    $(".T2Btn button").click(function(){
        typea = $(this).data('typea');
		
		$('.grafik .T2View').text(typea);
		$('.grafik .T1View').removeClass('T1View');
		$('.grafik .T2View').addClass('pipka');
		$('.grafik .T2View').removeClass('T2View');
		$('.grafik').prepend('<div><div class="sgraf1 T1View"></div><div class="sgraf2 T2View"></div></div>');		
		
		//alert(typea);
    });
});