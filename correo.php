<?php
if (isset($_POST["enviar"])) {
	if (!empty($_POST['nombre'] && !empty($_POST['email'] && !empty($_POST['asunto'] && !empty($_POST['mensaje'] )){
		$nombre=$_POST['nombre'];
		$email=$_POST['email'];
		$asunto=$_POST['asunto'];
		$mensaje=$_POST['mensaje'];
		$mensaje="Nombre: " . $nombre . "\nCorreo: " . $email . "\nMensaje: " . $mensaje;
		$mail=mail("patriciamonares97@gmail.com", $asunto, $mensaje );
		if ($mail) {
			echo "<div class='alert alert-success mt-4 text-center' role='alert'>
					Mensaje enviado con exito!!
				</div>"
		}
	}
}