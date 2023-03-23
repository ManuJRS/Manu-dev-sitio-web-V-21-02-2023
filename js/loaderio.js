window.onload = function() {
    $('#onload').fadeOut();
    $('body').removeClass('hidden');

    setTimeout(function() {
        alert("¡Hola! Tu privacidad es importante para mi. Este sitio contiene cookies con un fin meramente estadístico. ¡Tu información está segura! Para más información, por favor, dirígete a -Póliticas de privacidad-");
      }, 5000);
};
