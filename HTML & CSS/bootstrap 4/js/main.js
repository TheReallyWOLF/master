// Управление слайдером
$(".carousel").carousel({
	interval: 3000, // интервал смены каритнки
	keyboard: true, // активировать стрелочки (по умолчанию true)
	wrap: true // повтрор круга (по умолчанию false)
});
// Управление модальным окном
$("#exampleModal").modal({
	keyboard: false, // запретить закрывать окно ескейпом
	backdrop: "static", // запретить закрывать окно при нажатии на пустое место
	show: false // отображать при загрузке?
}); 