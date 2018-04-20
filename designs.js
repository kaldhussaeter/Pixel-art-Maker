// table
const c = document.getElementById('pixelCanvas');


// Select size input
let height = $("#inputHeight").val();
let width = $("#inputWeight").val();


// When size is submitted by the user, call makeGrid()
$("#sizePicker").submit(function(event){
   makeGrid();
   event.preventDefault();
})


// Creates the grid to draw on.
function makeGrid() {
    $('#pixelCanvas').html(''); //clear the table
    for(let i = 0; i < height; i++) {
        let row = c.insertRow(i);
        for(let i = 0; i < width; i++) {
            let newCell = row.insertCell(i);
          };
    };
};

// Drawing on the grid
  $('#pixelCanvas').click(function(evt) {
		let color = $('#colorPicker').val();
		  $(evt.target).css('background-color', color);
  });
