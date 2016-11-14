<?php
header('Content-Type:text/xml');
echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';

echo '<response>';
		$food=$_GET['food'];
		$foodArray=array('chicken', 'fish', 'goatmeat');
		if(in_array($food,$foodArray))
			echo 'we have item'.$food. '!';
		else if($food=='')
			echo 'enter the food item';
		else
			echo 'we dont sell'
echo '</response>';
?>
