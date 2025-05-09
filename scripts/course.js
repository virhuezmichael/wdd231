const courses = [
    { subject: 'CSE', number: 110, title: 'Introduction to Programming', credits: 2, certificate: 'Web and Computer Programming', description: 'This course will introduce students to programming...', technology: ['Python'], completed: true },
    { subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 2, certificate: 'Web and Computer Programming', description: 'This course introduces students to the World Wide Web...', technology: ['HTML', 'CSS'], completed: true },
    { subject: 'CSE', number: 111, title: 'Programming with Functions', credits: 2, certificate: 'Web and Computer Programming', description: 'CSE 111 students become more organized...', technology: ['Python'], completed: true },
    { subject: 'CSE', number: 210, title: 'Programming with Classes', credits: 2, certificate: 'Web and Computer Programming', description: 'This course introduces the notion of classes and objects...', technology: ['C#'], completed: false },
    { subject: 'WDD', number: 131, title: 'Dynamic Web Fundamentals', credits: 2, certificate: 'Web and Computer Programming', description: 'This course builds on prior experience in Web Fundamentals...', technology: ['HTML', 'CSS', 'JavaScript'], completed: false },
    { subject: 'WDD', number: 231, title: 'Frontend Web Development I', credits: 2, certificate: 'Web and Computer Programming', description: 'Focus on user experience, accessibility, performance...', technology: ['HTML', 'CSS', 'JavaScript'], completed: false }
];

function renderCourses(filter = 'all') {
    const listContainer = document.getElementById('courseList');
    listContainer.innerHTML = '';

    const filteredCourses = filter === 'all' ? courses : courses.filter(course => course.subject === filter);

    filteredCourses.forEach(course => {
        const card = document.createElement('div');
        card.className = `course-card ${course.completed ? 'completed' : ''}`;
        

        card.innerHTML = `
            <h3 title="${course.description}">${course.subject} ${course.number}</h3> 
        `;
        listContainer.appendChild(card);
    });

    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    document.getElementById('totalCredits').textContent = `Total Credits: ${totalCredits}`;
}

document.querySelectorAll('.filter-buttons button').forEach(button => {
    button.addEventListener('click', () => {
        renderCourses(button.dataset.filter);
    });
});


renderCourses();
