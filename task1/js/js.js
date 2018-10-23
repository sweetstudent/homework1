var name = prompt("Введите имя: ");

function reverse (data) {
	var letters = [],
	l = data.length;
	while (l--) {
		letters.push(data[l]);
	}
	return letters.join('');
}

function register (data){
	var i;
	var letters = data.split('');
	for (var i = 0; i < data.length; i+=2) {
		letters[i]=letters[i].toUpperCase();
	}
	return letters.join('');
}



if(!name.search(/^([a-zа-я])*$/i))
{
	alert("Имя введено правильно! Имя задом на перед: " + reverse(name))
}
else
{
	alert("Имя введено не правильно! Нижний, верхний регистр символов строки:  " + register(name));
}



