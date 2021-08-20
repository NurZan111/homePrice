$(document).ready(function () { // ждем пока саберет дом
    var currentFloor = 2; // началный этаж
    var counterUp = $(".button_up"); // кнопка вниз
    var counterDown = $(".button_down"); // кнопка верх
    var floorPath =  $(".home_image path"); // каждый этаж в картинке
    var modal = $(".modal");
    var buttonClose = $(".button_close");
    var viewFlatsButton =$(".view_flats");

    floorPath.on("mouseover", function(){//при новедение
        //console.log("click floor");
        //console.log($(this).attr("data-floor"));
        floorPath.removeClass("current_floor"); // удаляем выбронный этаж при новедение мышкой
        currentFloor = $(this).attr("data-floor");
        $(".counter").text(currentFloor); //записоваем в контер коррентфлоор
    });

    floorPath.on("click", toggleModal);
    buttonClose.on("click", toggleModal);
    viewFlatsButton.on("click", toggleModal);
    
    counterUp.on("click", function(){// кнопка верх
        //console.log("click up");
        /*
        currentFloor++;
        usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false});
        $(".counter").text(currentFloor);
        */
       if(currentFloor < 17){ // мак этаж верх
        currentFloor++;
        usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false});  // выставляем 0 в начало  типа 01
        $(".counter").text(usCurrentFloor);
        floorPath.removeClass("current_floor"); // удаляем класс куррент_флоор
        $(`[data-floor = ${usCurrentFloor}]`).toggleClass("current_floor");  // добавляем класс куррент_флоор
        }
    });

    counterDown.on("click", function(){ // кнопка низ
        if(currentFloor > 1){ // мин этаж вниз
          currentFloor--;
         usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false});  // выставляем 0 в начало  типа 01
         $(".counter").text(usCurrentFloor);
         floorPath.removeClass("current_floor"); // удаляем класс куррент_флоор
         $(`[data-floor = ${usCurrentFloor}]`).toggleClass("current_floor");  // добавляем класс куррент_флоор
         }
     });
     function toggleModal(){
        modal.toggleClass("is_open");
    }
});