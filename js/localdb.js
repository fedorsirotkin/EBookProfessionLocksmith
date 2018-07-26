$(function() {
	var mechanic = {}
	mechanic.init = {}
	mechanic.init.db = {}
	
	// для удобства помещаем функцию в глобальную переменную
	mechanic.init.open = function(){
		// название БД, версия, описание, размер
		mechanic.init.db = openDatabase("mechanic", "1.0", "МДК.04.01 Теоретические приемы выполнения работ по профессии «Слесарь-ремонтник»", 1024 * 1024 * 5);
		
	}
	
	// создание таблицы
	mechanic.init.createTable = function(){
		var database = mechanic.init.db;
		database.transaction(function(tx){
			// таблица "Вопросы"
			//tx.executeSql('CREATE TABLE IF NOT EXISTS questions (qtype, question)');
			// таблица "ОтветыТип1из4"
			//tx.executeSql("CREATE TABLE IF NOT EXISTS answer1in4 (ID INTEGER PRIMARY KEY ASC, id_questions INTEGER, answ1 TEXT, answ2 TEXT, //answ3 TEXT, answ4 TEXT)", []);
			// таблица "ОтветыУстановитьПоследовательность"
			//tx.executeSql("CREATE TABLE IF NOT EXISTS answersequence (ID INTEGER PRIMARY KEY ASC, id_questions INTEGER)", []);
			// таблица "ОтветыЗполнитьПропуски"
			//tx.executeSql("CREATE TABLE IF NOT EXISTS answerskip (ID INTEGER PRIMARY KEY ASC, id_questions INTEGER)", []);
			// список вопросов для теста
            
            //tx.executeSql('INSERT INTO questions (qtype, question) VALUES ("1in4", "сам вопрос")');
			//tx.executeSql('INSERT INTO questions (qtype, question) VALUES ("1in4", "сам вопрос2")');	
		});
	}

	/*		
	// функция добавления записи
	mechanic.init.addTodo = function(todoItem,dueDate){
		var database = mechanic.init.db;
		database.transaction(function(tx){
			 tx.executeSql("INSERT INTO questions (qtype, question) VALUES (?,?)", [todoItem, dueDate],
			 showAllTodo(todoItem, dueDate));
		});
	}
	
	

	// получение данных из БД
	mechanic.init.getTodo = function(){
		var database = mechanic.init.db;
		database.transaction(function(tx){
			tx.executeSql("SELECT * FROM todo", [], function(tx,result){
				for (var i=0; i < result.rows.length; i++) {
					todo_item = result.rows.item(i).todo_item;
					todo_due_date = result.rows.item(i).due_date;
					todo_id = result.rows.item(i).ID;
					showAllTodo(todo_item,todo_due_date,todo_id);
				}
			});
		});
	}

	// удаление записей из таблицы 
	mechanic.init.deleteTodo = function(id){
		var database = mechanic.init.db;
		database.transaction(function(tx){
			tx.executeSql("DELETE FROM todo WHERE ID=?",[id]);
		});
	}


	// событие добавление новой записи
	$('#create_todo').click(function(){
		var todo_item_text = $('#todo_item_text').val();
		var todo_due_date = $('#todo_due_date').val();
	
		if(todo_item_text.length == '' || todo_due_date.length == '')
		{
			alert('Заполните все поля!');
		}
		else
		{
			mechanic.init.addTodo(todo_item_text,todo_due_date);
			$('#todo_item_text').val('');
			$('#todo_due_date').val('');
		}
	});

	// размещаем созданные записи на странице 
	function showAllTodo(todo_item,todo_due_date,todo_id){
	$('ul.list').append(
		'<li><div class="todo_item"><span class="todo_text">' + todo_item + '</span>' +
		'<a href="#" id="delete"> Удалить </a><span class="due_date">' + todo_due_date + '</span>' +
		'<input id="this_id" value="' + todo_id + '" type="hidden"><div class="clear"></div></div></li>'); 
		$('li:last').addClass('highlight').delay(1000).queue(function(next){ $(this).removeClass('highlight'); next(); });
	}
	
	// событие клик по кнопке удалить
	$('#delete').live("click",function(){
		var id = $(this).closest('li').find('#this_id').val();
		$(this).closest('li').addClass('highlight').delay(1000).queue(function(next){ $(this).remove(); next(); });
		mechanic.init.deleteTodo(id);
	});
	*/
	
	
	function init(){
		if(typeof(openDatabase) !== 'undefined')
		{
			mechanic.init.open();
			mechanic.init.createTable();
			mechanic.init.getTodo();
			
		}
		else
		{
			//$('#bodyWrapper').html('<h2 class="error_message"> Ваш браузер не поддерживает технологию Web SQL </h2>');
		}
	}
	init();
		
	/*	
	// Календарь для выбора даты
	$('#todo_due_date').datepicker({
		"dateFormat":"dd.mm.yy",
		"dayNamesMin":["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],
		"dayNames":["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],
		"firstDay":"1",
		"monthNames":["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],
		"nextText":"Следующий",
		"prevText":"Предыдущий"
		});
	*/
});
