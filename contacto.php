<?php if (isset($_POST['nombre'])&&($_POST['email']!= '')&&($_POST['message']!='')) {
	$nombre = $_POST['nombre'];
	$email = $_POST['email'];
	$message = $_POST['$message'];
	# code...
	$titulo = "Mensaje de prueba";
	$contenido = '

	<!DOCTYPE html>
		<html>
			<head>
				<title></title>
			</head>
			<body>
				<h1>Ha recibido un mensaje de Gabriel Arzola.</h1>
				<p>El visitante ' .$nombre. ' te ha enviado el siguiente mensaje:</p>
				<p>' .$message. '</p>
			</body>
		</html>
	';

	$encabezado = "MINE-Version 1.0\r\n";
	$encabezado = "content-type: text/html; charset= UTF-8\r\n";
} ?>

