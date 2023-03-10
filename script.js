let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

function addTask() {
	if (taskInput.value.trim() !== "") {
		let li = document.createElement("li");
		li.innerHTML = taskInput.value + "<span onclick='deleteTask(this)'>x</span>";
		taskList.appendChild(li);
		taskInput.value = "";
	}
}

function deleteTask(span) {
	let li = span.parentElement;
	li.remove();
}

taskInput.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		addTask();
	}
});

taskList.addEventListener("click", function(event) {
	if (event.target.tagName === "LI") {
		event.target.classList.toggle("completed");
	}
});
