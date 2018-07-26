<?php
	$number_topic = "4";
	$number_question = 21;
	for ($i = 1; $i <= $number_question; $i++)
	{
		echo "var field" . $number_topic . "_" . $i . " = document.getElementById('field" . $number_topic . "_" . $i . "');" . "<br>";
		echo "if (localStorage.field" . $number_topic . "_" . $i . "){" . "<br>";
		echo "&nbsp;&nbsp;&nbsp;&nbsp field" . $number_topic . "_" . $i . ".value = localStorage.field" . $number_topic . "_" . $i . ";" . "<br>";
		echo "}" . "<br>";
		echo "field" . $number_topic . "_" . $i . ".addEventListener('blur', function(){" . "<br>";
		echo "&nbsp;&nbsp;&nbsp;&nbsp 	if (document.getElementById('checkbox').checked == true) localStorage.field" . $number_topic . "_" . $i . " = field" . $number_topic . "_" . $i . ".value;" . "<br>";
		echo "}, false);" . "<br>";
		echo "<br>";		
	}
?>