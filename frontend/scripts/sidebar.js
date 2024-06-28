// ======= TOGGLE SIDEBAR FUNCTIONLITY =======
document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.getElementById('toggleSidebar');
    var questionsSidebar = document.querySelector('.questions');

    toggleButton.addEventListener('click', function() {
        // Toggle the 'open' class to show/hide the sidebar
        questionsSidebar.classList.toggle('open');
    });
    toggleButton.addEventListener('click', function() {
        // Toggle the 'open' class to move the button
        toggleButton.classList.toggle('open');
    });
});

// ======= SIDEBAR CHANGE TEXT ON HOVER FUNCTIONALITY =======
function changeText(element) {
    // Get the current text content of the hovered list element
    var currentText = element.textContent;

    // Change the text content to display the answer
    switch (currentText) {
        case 'What is the idea that you have for your app?':
            element.textContent = 'A simple and minimalistic productivity web app.';
            break;
        case 'What part is 2D and what part is 3D?':
            element.textContent = 'My user interface is currently all in 2D, I plan to incorporate some 3D aspects soon.';
            break;
        case 'What is your original, simple, hypothesis about this app?':
            element.textContent = 'My web app will improve users\' productivity by helping them manage their time and tasks more effectively and stay motivated throughout the day.';
            break;
        case 'Why is this idea important or needed in the world?':
            element.textContent = 'In today\'s fast-paced world, many people are dealing with multiple responsibilities and tasks (myself included). My simple productivity app will help users manage their time and tasks more effectively, to help improve their overall quality of life.';
            break;
        case 'How do you plan to use XR emotionally to immerse the user in the experience?':
            element.textContent = 'AR could be used to project task lists and calendar events onto our physical environment. Likewise, VR could be used to simulate a distraction-free environment (i.e. a library, beach)';
            break;
        case 'List 3 reasons why this idea is or is not good for XR.':
            element.textContent = 'This idea can be good for XR as it can enhance user engagement. Using AR to visualize tasks or VR to create a distraction-free work environment can help users stay focused and motivated. However, there can be the potential for distraction if my app is not implemented correctly. Designing XR features that are focused on enhancing productivity without making things more complex is crucial. XR allows for the creation of personalized work environments. Users could customize their workspace to suit their needs, which can improve focus and productivity.'
            break;
        case 'List 3 reasons why this idea is or is not better in 3D.':
            element.textContent = '3D features can enhance visualization significantly. For example, a 3D calendar can allow users to schedule tasks more intuitively, using features such as “drag and drop” tasks. 3D features however typically require more processing power, so users with older devices might experience some performance issues. Also, developing 3D features generally can be more complex and harder to maintain.'
            break;
        case 'In what way is each of AR, MR and VR possibly useful for the project?':
            element.textContent = 'AR: Enhanced task visualization where task lists are overlaid on the user’s physical environment, making it easier to stay organized without switching between devices. MR: MR allows us to merge both our real world and the digital world into one, allowing us to add unique features such as virtual assistants, or even information on our current environment around us which can help with everyday tasks.'
            break;
        case 'Auditing your idea':
            element.textContent = 'Currently, my project only exists in 2D, but I plan to incorporate 3D aspects in the near future. For example, tasks can be layered in a 3D space, allowing users to group tasks in ways that aren\'t possible in 2D. This can help in visualizing workflows.'
            break;
    }   
}

function resetText(element) {
    // Get the current text content of the hovered list element
    var currentText = element.textContent;

    // Change the text content to display the question
    switch (currentText) {
        case 'A simple and minimalistic productivity web app.':
            element.textContent = 'What is the idea that you have for your app?';
            break;
        case 'My user interface is currently all in 2D, I plan to incorporate some 3D aspects soon.':
            element.textContent = 'What part is 2D and what part is 3D?';
            break;
        case 'My web app will improve users\' productivity by helping them manage their time and tasks more effectively and stay motivated throughout the day.':
            element.textContent = 'What is your original, simple, hypothesis about this app?';
            break;
        case 'In today\'s fast-paced world, many people are dealing with multiple responsibilities and tasks (myself included). My simple productivity app will help users manage their time and tasks more effectively, to help improve their overall quality of life.':
            element.textContent = 'Why is this idea important or needed in the world?';
            break;
        case 'AR could be used to project task lists and calendar events onto our physical environment. Likewise, VR could be used to simulate a distraction-free environment (i.e. a library, beach)':
            element.textContent = 'How do you plan to use XR emotionally to immerse the user in the experience?';
            break;
        case 'This idea can be good for XR as it can enhance user engagement. Using AR to visualize tasks or VR to create a distraction-free work environment can help users stay focused and motivated. However, there can be the potential for distraction if my app is not implemented correctly. Designing XR features that are focused on enhancing productivity without making things more complex is crucial. XR allows for the creation of personalized work environments. Users could customize their workspace to suit their needs, which can improve focus and productivity.':
            element.textContent = 'List 3 reasons why this idea is or is not good for XR.';
            break;
        case '3D features can enhance visualization significantly. For example, a 3D calendar can allow users to schedule tasks more intuitively, using features such as “drag and drop” tasks. 3D features however typically require more processing power, so users with older devices might experience some performance issues. Also, developing 3D features generally can be more complex and harder to maintain.':
            element.textContent = 'List 3 reasons why this idea is or is not better in 3D.';
            break;
        case 'AR: Enhanced task visualization where task lists are overlaid on the user’s physical environment, making it easier to stay organized without switching between devices. MR: MR allows us to merge both our real world and the digital world into one, allowing us to add unique features such as virtual assistants, or even information on our current environment around us which can help with everyday tasks.':
            element.textContent = 'In what way is each of AR, MR and VR possibly useful for the project?';
            break;
        case 'Currently, my project only exists in 2D, but I plan to incorporate 3D aspects in the near future. For example, tasks can be layered in a 3D space, allowing users to group tasks in ways that aren\'t possible in 2D. This can help in visualizing workflows.':
            element.textContent = 'Auditing your idea';
            break;
    }
}