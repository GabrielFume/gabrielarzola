


<?php    

    $nombre = $_POST['nombre'];    
    $email = $_POST['email'];    
    $mensaje = $_POST['mensaje']; 
    /* Variables de formulario opcionales. */

    $asunto =  $_POST['objetivo'];

    /* Comprobamos valores. */
    if(isset($nombre) && !empty($nombre) &&
        isset($email) && !empty($email) &&
        isset($mensaje) && !empty($mensaje)){

        /* Dar valores a las variables auxiliares si estan vacías. */

        /* Generamos contenido del correo*/
        $contenido = "        
            <!DOCTYPE html>
            <html lang='en'>
            <head>
                <title>" .$asunto. "</title>
            </head>
            <body>
                <header>
                    <h1>" .$asunto. "</h1>
                </header>
                <div>
                    <P>Usuario: ".$nombre."</p>
                    <p>Correo: ".$email."</p>
                    <p>Asunto: " .$asunto. " </p>
                    <p>Mensaje: ".$mensaje."</p> 
                </div>
            </body>
            </html>
        ";

        /* Generamos la cabecera del correo. */
        $headers = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";
        $headers .= 'From: gabrielarzola.com <no-reply@gabrielarzola.com>' . "\r\n";

        /* Enviamos el correo guardando su estado. */
        $enviado = mail('gabrielgac75@gmail.com', $asunto, $contenido, $headers);
    }       

    /* Mostramos información al usuario y redireccionamos. */
	if($enviado = true){
    	 echo "<p>El correo ha sido enviado, Te respondere a la brevedad posible.</p>";
	}else{
    	 echo "<p>El correo no ha enviado.</p>";
	}

?>