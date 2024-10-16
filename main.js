// Allow dropping in dropzones
function allowDrop(event) {
  event.preventDefault();
}

// Start dragging element
function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

// Drop element into a dropzone
function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");

  // Only allow dropping if the dropbox is empty
  if (event.target.classList.contains("dropbox") && event.target.children.length === 0) {
    event.target.appendChild(document.getElementById(data));
  }
}

// Reset button functionality
document.querySelector(".reset").addEventListener("click", resetGame);

function resetGame() {
  // Select all draggable elements (crosses and circles)
  const crosses = document.querySelectorAll(".cross");
  const circles = document.querySelectorAll(".circle");

  // Select all dragboxes (where draggable elements originally belong)
  const dragboxes = document.querySelectorAll(".dragbox");

  // Reset crosses to their original dragboxes
  crosses.forEach((cross, index) => {
    dragboxes[index].appendChild(cross); // Re-append crosses to the first 5 dragboxes
  });

  // Reset circles to their original dragboxes
  circles.forEach((circle, index) => {
    dragboxes[index + 5].appendChild(circle); // Re-append circles to the next 5 dragboxes
  });

  // Clear all dropboxes
  const dropboxes = document.querySelectorAll(".dropbox");
  dropboxes.forEach(dropbox => {
    while (dropbox.firstChild) {
      dropbox.removeChild(dropbox.firstChild);
    }
  });
}
