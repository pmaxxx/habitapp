const addHabits = document.querySelector('.add-habit');
const habitsList = document.querySelector('.habits');
const habits = [];

// add a Habit
function addHabit(e) {
    e.preventDefault();
    const text = this.querySelector('[name=habit]').value;
    const totalCounts = this.querySelector('[name=reps').value;
    const timeframe = this.querySelector('[name=timeframe').value;
    const habit = {
        text: text,
        reps: 0,
        totalCounts: totalCounts,
        timeframe: timeframe,
        complited: false,
    };

    habits.push(habit);
}

// List Habit
function listHabits(habit = [], habitsList) {
    habitsList.innerHTML = habits.map((habit, i) => {
        return `
		 <li>
		 <input type="checkbox" data-index=${i} id="habit${i}" ${
            habit.complited ? 'checked' : ''
        } />
		 <label for="habit${i}">${habit.reps}/${habit.totalCounts} ${
            habit.timeframe
        } <span>${habit.text}</span></label>
		 </li>
		`;
    });
}
// Toggle if complite

// Delete habit

addHabits.addEventListener('submit', addHabit);
// listHabits(habits, habitsList);
