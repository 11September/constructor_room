
jQuery(document).ready(function($){
       
    $('#spayan span').click(function()
		{
		
        $('#second-level-facture').css("background-size", "82%")
		$('#first-level-facture').css("background-size", "81%")
	}
	),$('#reznoy span').click(function()
    	{
		$('#second-level-facture').css("background-size", "81%")
		$('#first-level-facture').css("background-size", "81%")
	}
	),$('#urovne span').click(function()
    	{
		$('#second-level-facture').css("background-size", "100%")
		$('#first-level-facture').css("background-size", "81%")
	}
	),$('#oneurov span').click(function()
    	{
		$('#second-level-facture').css("background-size", "100%")
		$('#first-level-facture').css("background-size", "81%")
	}
	),$(".color-select-first span").click(function()
		{
		$(".color-select-first span").removeClass("active"),$(this).addClass("active"),$color=$(this).css("background-color"),$(".main-constr").css("background-color",$color),$colorName=$(this).text(),$("#fcolor").val($colorName),$("#fcolor1").val($colorName)
	}
	),$(".color-select-second span").click(function()
		{
		$(".color-select-second span").removeClass("active"),$(this).addClass("active"),$colorName=$(this).text(),$("#scolor").val($colorName),$("#scolor1").val($colorName),$color=$(this).css("background-color"),$(".fil0, .fil1, .fil2, .fil3, .st2, .st0").css("fill",$color)
	}
	),$(".roof-select span").click(function()
		{
		$(".roof-select span").removeClass("active"),$(this).addClass("active"),$type=$(this).attr("data-type"),$("#type").val($type),$("#type1").val($type),$(".shadow, .contour").hide(),$(".level"+$type).fadeIn(".2"),$url="/images/constructor/images/shadow/"+$type+".png",$("#shadow-container img").attr("src",$url),$("#led,#lights,#lustre").fadeOut("0.2"),$(".light-cont img").removeClass("show").removeClass("active"),$z=$(this).attr("data-z"),$("#shadow").css("z-index",$z),$(".second-level-facture span").removeClass("active"),$("#after-click").addClass("active"),$url="url(/images/constructor/images/fact/mat.png)",$("#second-level-facture").css("background-image",$url),$l=$(this).attr("data-l"),"none"==$l?$(".luster-select").hide():$(".luster-select").show()
	}
	),$(".first-level-facture span").click(function()
		{
		$(".first-level-facture span").removeClass("active"),$(this).addClass("active"),$type=$(this).attr("data-fact"),$("#ffact").val($type),$("#ffact1").val($type),$url="url(/images/constructor/images/fact/"+$type+".png)",$("#first-level-facture").css("background-image",$url)
	}
	),$(".second-level-facture span").click(function()
		{
		$(".second-level-facture span").removeClass("active"),$(this).addClass("active"),$type=$(this).attr("data-fact"),$("#sfact").val($type),$("#sfact1").val($type),$number=$("#type").val(),$url="url(/images/constructor/images/fact/"+$number+"/"+$type+".png)",$("#second-level-facture").css("background-image",$url)
	}
	),$(".luster-select").click(function()
		{
		$(this).hasClass("show")?($(this).removeClass("show").removeClass("active"),$("#inlustre").val("0"),$("#inlustre1").val("0"),$("#lustre").fadeOut("0.2")):($(this).addClass("show").addClass("active"),$("#inlustre").val("1"),$("#inlustre1").val("1"),$type=$("#type").val(),$url="url(/images/constructor/images/light/"+$type+"/luster.png)",$("#lustre").css("background-image",$url),$("#lustre").fadeIn("0.2"))
	}
	),$(".light-select").click(function()
		{
		$(this).hasClass("show")?($(this).removeClass("show").removeClass("active"),$("#inlight").val("0"),$("#inlight1").val("0"),$("#lights").fadeOut("0.2")):($(this).addClass("show").addClass("active"),$("#inlight").val("1"),$("#inlight1").val("1"),$type=$("#type").val(),$url="url(/images/constructor/images/light/"+$type+"/light.png)",$("#lights").css("background-image",$url),$("#lights").fadeIn("0.2"))
	}
	);
	"potolki-vip.ru"!==document.location.host&&$("body").css(
		{
	
	}
	),$(".led-select").click(function()
		{
		$(this).hasClass("show")?($(this).removeClass("show").removeClass("active"),$("#inled").val("0"),$("#inled1").val("0"),$("#led").fadeOut("0.2")):($(this).addClass("show").addClass("active"),$("#inled").val("1"),$("#inled1").val("1"),$type=$("#type").val(),$url="url(/images/constructor/images/light/"+$type+"/led.png)",$("#led").css("background-image",$url),$("#led").fadeIn("0.2"))
	}
	),$(".color-select-wall span").click(function()
		{
		$img=$(this).attr("data-img"),$("#wall").css("background","url(/images/constructor/images/wall/"+$img+")"),$(".color-select-wall span").removeClass("active"),$(this).addClass("active")
	}
	),$(".papers-facture span").click(function()
		{
		$img=$(this).attr("data-img"),$("#paper").css("background","url(/images/constructor/images/papers/"+$img+")"),$(".papers-facture span").removeClass("active"),$(this).addClass("active")
	}
	),$(".color-select-floor span").click(function()
		{
		$img=$(this).attr("data-img"),$("#floor").css("background","url(/images/constructor/images/floor/"+$img+")"),$(".color-select-floor span").removeClass("active"),$(this).addClass("active")
	}
	),$(".tools-wrapper span").click(function()
		{
		$(".tools-mod-wrapper").fadeIn("0.5"),$(".mod").hide(),$modNumber=$(this).attr("data-modn"),$(".mod."+$modNumber).fadeIn("0")
	}
	),$(".ico-cros").click(function()
		{
		$(".tools-mod-wrapper").fadeOut("0.5"),$(".mod").fadeOut("0.5")
	}
	),$("#sec-name").change(function()
		{
		$("#main-name").val($(this).val())
	}
	),$("#sec-email").change(function()
		{
		$("#main-email").val($(this).val())
	}
	),$("#sec-tel").change(function()
		{
		$("#main-tel").val($(this).val())
	}
	),$(".btn-second-color").click(function()
		{
		$("#m-submit").trigger("click")
	}
	)
}
);
