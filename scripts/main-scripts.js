//Función que le da funcionalidad a la hamburger bar
const hamburger = document.getElementById('hamburger');
const navBar = document.getElementById('menu_bar');

hamburger.addEventListener('click', () => {
	navBar.classList.toggle('show');
}
)

//Esta función se encarga de llevar al comienzo de la pagina, una vez se clickee en el  elemento "Anchor-top"
function top_function(){
	window.scrollTo(0,0);
}

//Esta función se encarga de mostrar y ocultar el texto de los "mazos destacados" y producir la animación del titulo de dicho mazo
$(document).ready(function() {
	
	$(".deck-display").hover(
		
		function(){
			$(this).find("h1")
								.dequeue()
								.stop()
								.animate({
									top: "0",
									opacity: "1"
								  }, 600);
			
		}	,
		function(){
			
			$(this).find("h1")
								.animate({
									top: "-25",
									opacity: "0"
								  }, 600 ,
			  function(){
				$(this).find("h1").dequeue();	
			  } 
		  );
		}
	);
	$(".deck-display").hover(
		
		function(){
			$(this).find("h3")
								.dequeue()
								.stop()
								.animate({
									opacity: "1"
								  }, 600);
			
		}	,
		function(){
			
			$(this).find("h3")
								.animate({
									opacity: "0"
								  }, 600 ,
			  function(){
				$(this).find("h3").dequeue();	
			  } 
		  );
		}
	);

});

//Función que se encarga de mostrar el overlay. A su vez, contiene un placeholder de switch para poder polular la tabla,según el mazo que se llame, una vez se implemente la tabla
function view_deck_details(id){
	$(".overlay").height("100%");
	
	switch(id){
		case 1: $(".decktable")
		break
		case 2: $(".decktable")
		break
		case 3: $(".decktable")
		break
		case 4: $(".decktable")
		break
		case 5: $(".decktable")
		break
		case 6: $(".decktable")
		break
	}
}

//Esta función se encarga de cerrar el detalle de los mazos
function close_details() {
	$(".overlay").height("0%");
}

 
//Estas funciones se encargan de verificar si el formulario tiene cada input completo, sino lo remarca.
function checkNameEmpty(inputID)
{
	$(inputID).blur(function(){
 
		if($(this).val() == '')
		{
			$(this).css('border','2px solid red');
			$('#formName').attr('placeholder','Complete su nombre');
		}
		else
		{
			$(this).css('border','2px solid green');
			
		}
	});
}
 
 
//Función que verifica el formato del mail
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
 
 

function checkValidEmail(emailInputID)
{
	$(emailInputID).blur(function(){
		var email = $(emailInputID).val();
		if (validateEmail(email)) 
		{
			$(this).css('border','2px solid green');
		
		} 
		else 
		{
			$(this).css('border','2px solid red');
			$("#formEmail").attr('placeholder','Complete su Email').css('font-weight','bold');
		}
	});
		
	
}
 
function checkComment(commentID)
{
		$(commentID).blur(function(){
 
		if($(this).val() == '')
		{
			$(this).css('border','2px solid red');
			$("#formComment").attr('placeholder','Por favor deje un comentario').css('font-weight','bold');
		}
		else
		{
			$(this).css('border','2px solid green');
			
		}
	});
}


//Función que hace la verificación al enviar el formulario
$(document).ready(function(){
	
	
	checkNameEmpty("#formName");
	checkValidEmail("#formEmail");
	checkComment("#formComment");

	$("#form").click(function(){
			
			
			if($("#formName").val() == '')
			{
				$("#formName").css('border','2px solid red');
				$("#formName").attr('placeholder','Complete su nombre').css('font-weight','bold');
				return false;	
			} if($("#formEmail").val() == '')
			{
				$("#formEmail").css('border','2px solid red');
				$("#formEmail").attr('placeholder','Complete su Email').css('font-weight','bold');
				return false;
			}if($("#formEmail").val() != '')
			{
				var email = $("#formEmail").val();
				if (!validateEmail(email)) {
				
					return false;
				} 
			} if($("#formComment").val() == ''){
			
				$("#formComment").css('border','2px solid red');
				$("#formComment").attr('placeholder','Por favor deje un comentario').css('font-weight','bold');
				return false;	
			} else{
				window.location.reload();
			}	
						
		});
	});	