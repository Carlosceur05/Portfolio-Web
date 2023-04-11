// Agregar el siguiente código en un archivo JavaScript separado o en la sección <head> de tu HTML
$(document).ready(function(){
    // Agregar el comportamiento de desplazamiento suave a los enlaces de la barra de navegación
    $('a[href^="#Inicio, #Acerca de, #Servicios, #Proyectos, #Contactos"]').on('click',function (e) {
        e.preventDefault();
  
        var target = this.hash,
        $target = $(target);
  
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
  });
  