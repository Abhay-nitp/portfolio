// // Contact form submission functionality
// document.getElementById("contact-form").addEventListener("submit", function(event) {
//     event.preventDefault();

//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const message = document.getElementById("message").value;

//     if (name && email && message) {
//         alert("Thank you for your message!");
//     } else {
//         alert("Please fill in all fields.");
//     }
// });
const predefinedQA = {
     "hello": "Hi! I am Abhay Jaiswal, a Front-End Web Developer, Android Developer, and Graphic Designer. How can I help you?",
        "who are you": "I am Abhay Jaiswal, a Front-End Web Developer, Android Developer, Graphic Designer, and more.",
        "what do you do": "I am a front-end web developer, Android Developer (Java & Kotlin), Graphic Designer (Canva & Figma), and AutoCAD designer.",
        "what is your name": "My name is Abhay Jaiswal. How can I assist you?",
        "what is your profession": "I am a Front-End Web Developer, Android Developer, and Graphic Designer. I also work with AutoCAD.",
        "can you build websites": "Yes, I specialize in building websites using HTML, CSS, JavaScript, and frameworks like React and Vue.js.",
        "can you make mobile apps": "Yes, I develop Android mobile apps using Java and Kotlin.",
        "can you design graphics": "Yes, I can create stunning designs for websites, branding, and social media using tools like Canva and Figma.",
        "do you work with AutoCAD": "Yes, I have experience working with AutoCAD for architectural and engineering designs.",
        "what technologies do you use": "I use a variety of technologies such as HTML, CSS, JavaScript, React, Vue.js, Java, Kotlin, AutoCAD, and design tools like Canva and Figma.",
        "what is your portfolio": "My portfolio showcases my work across web development, Android development, graphic design, and AutoCAD. You can explore my projects [here](http://your-portfolio-link.com).",
        "can I see your projects": "Yes! You can view my projects on my portfolio website. I have worked on apps like an Amazon clone, a News app, and a To-Do List app.",
        "what is an amazon clone": "An Amazon clone is an eCommerce website I created to replicate the basic functionality of Amazon.com using front-end technologies like HTML, CSS, and JavaScript.",
        "what is your skills list": "I am skilled in HTML, CSS, JavaScript, Java, Kotlin, React, Vue.js, Canva, Figma, AutoCAD, and more.",
        "how can I contact you": "You can contact me via the contact form on my portfolio website or through my social media links.",
        "where can I find your portfolio": "You can find my portfolio on my personal website. Here's the link: [Insert Portfolio Link].",
        "how can I hire you": "If you'd like to hire me, you can get in touch with me via the contact form on my portfolio or through my social media profiles.",
        "do you offer freelance services": "Yes, I offer freelance web development, Android development, and graphic design services. Feel free to contact me for more details!",
        "what is your experience in android development": "I have experience developing Android apps using Java and Kotlin, focusing on creating smooth user experiences and robust back-end functionality.",
        "how long have you been working as a developer": "I've been working as a developer for several years, specializing in front-end web development, Android development, and graphic design.",
        "what tools do you use for graphic design": "For graphic design, I use Canva and Figma, which allow me to create professional-level designs for various purposes.",
        "what languages do you use for front-end development": "I primarily use HTML, CSS, and JavaScript for front-end development, and I also work with front-end frameworks like React and Vue.js.",
        "can you build a news app": "Yes, I have built a News app that fetches the latest news from an API and displays articles with a clean user interface.",
        "what is your approach to web development": "My approach to web development is user-centered, focusing on responsive design, performance optimization, and a clean, maintainable codebase.",
        "what is your approach to mobile app development": "For mobile app development, I prioritize user experience, performance, and functionality, ensuring that apps are smooth, intuitive, and reliable.",
        "what is your design process": "I follow a structured design process, starting with research and ideation, followed by wireframing, prototyping, and testing to ensure the design meets user needs.",
        "what is your favorite technology to work with": "I enjoy working with React for web development because of its component-based architecture and flexibility, as well as Kotlin for Android development due to its simplicity and power.",
        "can you design websites": "Yes, I can design websites with a focus on user-friendly interfaces and responsive layouts, using tools like Figma and HTML/CSS for implementation.",
        "do you provide web development maintenance services": "Yes, I offer web maintenance services, including updates, bug fixes, and performance improvements, to keep websites running smoothly.",
        "what is your experience with React": "I have experience using React to build dynamic, interactive user interfaces. React's component-based structure helps me develop scalable and maintainable web applications.",
        "what is your experience with AutoCAD": "I have experience creating 2D and 3D models, drafting layouts, and generating technical drawings in AutoCAD for architecture and engineering projects.",
        "do you offer graphic design services": "Yes, I offer graphic design services, including branding, UI/UX design, and social media graphics. I use Canva and Figma to create professional designs.",
        "can you make a to-do list app": "Yes, I have built a To-Do List app where users can add, delete, and mark tasks as complete. It's a simple yet practical app to manage tasks.",
        "can you help me with a project": "I'd be happy to help with a project! You can contact me via the contact form on my portfolio website, and we can discuss your requirements.",
        "thank you": "You're welcome! Feel free to reach out if you need more help.",
        "goodbye": "Goodbye! Feel free to ask me anything whenever you like. Have a great day!",
    // 'What is your name?': 'I am your virtual assistant.',
    // 'What do you do?': 'I assist users with their queries.',
    // 'How can I contact you?': 'You can reach me through this chat!'
    "why should we hire you": "I believe I bring a unique combination of technical skills in front-end web development, mobile app development, and graphic design, along with problem-solving abilities and attention to detail. I am passionate about learning and always strive to deliver high-quality work.",
        "what makes you a good fit for this position": "My diverse skill set in front-end web development, Android development, and graphic design allows me to bring multiple perspectives to projects. I am a quick learner, adaptable, and always focused on delivering great user experiences.",
        "what are your strengths": "My strengths include strong technical skills in web and mobile app development, a creative mindset for graphic design, and the ability to effectively collaborate with teams. I also take pride in my attention to detail and commitment to meeting deadlines.",
        "what are your weaknesses": "I tend to be a perfectionist, which sometimes leads me to spend more time on a task than needed. However, I’m working on balancing quality with efficiency to improve my time management skills.",
        "where do you see yourself in 5 years": "In five years, I see myself as an expert in my field, having worked on large-scale projects and possibly leading a team of developers and designers. I also aim to expand my skills in new technologies and frameworks.",
        "why do you want to work with us": "I admire the work your company does and believe my skills would align well with your projects. I'm excited about the opportunity to contribute to your team and grow professionally in such a dynamic environment.",
        "tell us about a challenging situation you've faced at work": "One of the challenges I faced was when I was working on an eCommerce site where I had to integrate a complex payment gateway. I collaborated with my team to solve the issue, researched different approaches, and successfully implemented the solution within the deadline.",
        "how do you handle tight deadlines": "I prioritize tasks and break them into smaller, manageable steps. I focus on delivering the most important features first while maintaining quality. I also communicate with stakeholders to manage expectations and adjust timelines if necessary.",
        "how do you stay updated with the latest technologies": "I stay updated by following industry blogs, taking online courses, and experimenting with new technologies in personal projects. I also participate in developer communities to share knowledge and learn from others.",
        "are you comfortable working in a team": "Yes, I enjoy working in teams where I can collaborate, share ideas, and learn from others. I believe in clear communication and active participation to achieve common goals.",
        "how do you handle feedback": "I appreciate constructive feedback as it helps me grow. I take it positively, analyze how I can improve, and implement changes to enhance my work.",
        "default": "Sorry, I didn’t understand that. Can you ask something else?"
};

function toggleChat() {
    const chatContainer = document.getElementById('chat-container');
    const chatIcon = document.getElementById('chat-icon');
    if (chatContainer.style.display === 'none' || chatContainer.style.display === '') {
        chatContainer.style.display = 'block';
        chatIcon.style.display = 'none';
    }
}

document.getElementById('close-chat').addEventListener('click', function() {
    document.getElementById('chat-container').style.display = 'none';
    document.getElementById('chat-icon').style.display = 'flex';
});

function sendUserInput() {
    const inputField = document.getElementById('user-input');
    const message = inputField.value.trim();
    if (message) {
        addMessage(message, true);
        if (predefinedQA[message]) {
            setTimeout(() => addMessage(predefinedQA[message], false), 500);
        } else {
            setTimeout(() => addMessage("I'm not sure how to answer that.", false), 500);
        }
        inputField.value = '';
        hideSuggestions();
    }
}
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        sendUserInput();
    }
}
function addMessage(text, isUser) {
    const chatBody = document.getElementById('chat-body');
    const messageDiv = document.createElement('div');
    messageDiv.textContent = text;
    messageDiv.style.background = isUser ? '#dcf8c6' : '#fff';
    messageDiv.style.padding = '5px';
    messageDiv.style.margin = '5px';
    messageDiv.style.borderRadius = '5px';
    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}
function showSuggestions() {
    const input = document.getElementById('user-input').value.toLowerCase();
    const suggestions = document.getElementById('suggestions');
    suggestions.innerHTML = '';
    const filtered = Object.keys(predefinedQA).filter(q => q.toLowerCase().includes(input));
    if (filtered.length > 0 && input.length > 0) {
        filtered.forEach(q => {
            const div = document.createElement('div');
            div.textContent = q;
            div.classList.add('suggestion-item');
            div.onclick = () => {
                document.getElementById('user-input').value = q;
                hideSuggestions();
            };
            suggestions.appendChild(div);
        });
        suggestions.style.display = 'flex';
    } else {
        hideSuggestions();
    }
}
function hideSuggestions() {
    document.getElementById('suggestions').style.display = 'none';
}
