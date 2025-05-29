// Данные курса
const courseData = {
    modules: [
        {
            id: 0,
            title: "Введение",
            description: "Кратко расскажем о том, что вас ждет на этом мини-курсе",
            totalLessons: 5,
            estimatedTime: "15 мин",
            lessons: [
                {
                    id: 1,
                    title: "О курсе",
                    description: "Добро пожаловать в мини-курс по основам работы с ChatGPT",
                    estimatedTime: 3,
                    difficulty: 'easy',
                    content: {
                        title: "Добро пожаловать в мини-курс по основам работы с ChatGPT",
                        objectives: [
                            "Разберетесь, как устроен ChatGPT",
                            "Научитесь формулировать эффективные запросы (промты)",
                            "Получите набор готовых шаблонов и различных примеров",
                            "Внедрите ИИ в одну из своих реальных задач",
                            "Начнёте экономить время и действовать увереннее"
                        ],
                        sections: []
                    }
                },
                {
                    id: 2,
                    title: "Курс поможет вам",
                    description: "Узнайте, какие навыки вы получите после прохождения курса",
                    estimatedTime: 3,
                    difficulty: 'easy',
                    content: {
                        title: "КУРС ПОМОЖЕТ ВАМ:",
                        objectives: [
                            "Изучить возможности ChatGPT",
                            "Научиться формулировать запросы"
                        ],
                        sections: [
                            {
                                type: 'text',
                                content: '• Разобраться, что такое ChatGPT и как он работает\n\n• Научиться формулировать эффективные запросы (промпты)\n\n• Увидеть реальные примеры использования на практике\n\n• Преодолеть страх, неуверенность и ощущение, что это не для меня\n\n• Освоить ChatGPT за 1 вечер – без лишней теории и технической сложности'
                            }
                        ]
                    }
                },
                {
                    id: 3,
                    title: "Этот курс для вас, если вы...",
                    description: "Проверьте, подходит ли вам этот курс",
                    estimatedTime: 3,
                    difficulty: 'easy',
                    content: {
                        title: "ЭТОТ КУРС ДЛЯ ВАС, ЕСЛИ ВЫ...",
                        objectives: [
                            "Определить целевую аудиторию курса"
                        ],
                        sections: [
                            {
                                type: 'text',
                                content: '👉 Уже слышали про нейросети, но не понимаете с чего начать\n\n👉 Ищете простое и человеческое объяснение\n\n👉 Хотите быть в теме и использовать ИИ на практике\n\n👉 Не готовы тратить месяцы на изучение и хотите получить результат уже сегодня'
                            }
                        ]
                    }
                },
                {
                    id: 4,
                    title: "В курсе четыре модуля",
                    description: "Обзор структуры обучения",
                    estimatedTime: 3,
                    difficulty: 'easy',
                    content: {
                        title: "В КУРСЕ ЧЕТЫРЕ МОДУЛЯ:",
                        objectives: [
                            "Изучить структуру курса"
                        ],
                        sections: [
                            {
                                type: 'text',
                                content: '1️⃣ ДОСТУП к ChatGPT\n- - - как зарегистрироваться, обойти блокировки и начать пользоваться\n\n2️⃣ ОСНОВЫ ChatGPT\n- - - как он устроен и как правильно формулировать запросы (промпты)\n\n3️⃣ ChatGPT PRO\n- - - продвинутые техники промптинга, шаблоны, методология CRAFT\n\n4️⃣ ChatGPT MASTER\n- - - расширенные возможности, настройки и другие ИИ-инструменты'
                            }
                        ]
                    }
                },
                {
                    id: 5,
                    title: "Готовы приступать?",
                    description: "Завершение вводного модуля",
                    estimatedTime: 3,
                    difficulty: 'easy',
                    content: {
                        title: "ГОТОВЫ ПРИСТУПАТЬ?",
                        objectives: [
                            "Мотивировать на начало обучения"
                        ],
                        sections: [
                            {
                                type: 'text',
                                content: 'Всего 1.5–2 часа прохождения этого курса вы уверенно научитесь использовать ChatGPT как личного помощника и верного союзника 👍\n\n👉 ГОТОВЫ ПРИСТУПАТЬ?\n\nТогда скорее переходите в первый модуль и уже сегодня начтите погружаться в удивительный мир Искусственного интеллекта 🤖🤯'
                            }
                        ]
                    }
                }
            ]
        },
        {
            id: 1,
            title: "Доступ к ChatGPT",
            description: "Способы доступа, тарифы, ограничения бесплатной версии",
            totalLessons: 18,
            estimatedTime: "45 мин",
            lessons: [
                {
                    id: 6,
                    title: "Что такое ChatGPT",
                    description: "Основы понимания искусственного интеллекта",
                    estimatedTime: 5,
                    difficulty: 'easy',
                    content: {
                        title: "Что такое ChatGPT",
                        objectives: ["Понять основы работы ChatGPT"],
                        sections: [
                            {
                                type: 'text',
                                content: 'ChatGPT — это революционный ИИ-помощник, который может понимать и генерировать человекоподобный текст. Он создан компанией OpenAI и основан на архитектуре GPT (Generative Pre-trained Transformer).'
                            }
                        ]
                    }
                }
            ]
        },
        {
            id: 2,
            title: "Основы ChatGPT",
            description: "Как устроен ChatGPT и правильное формулирование запросов",
            totalLessons: 12,
            estimatedTime: "30 мин",
            lessons: []
        },
        {
            id: 3,
            title: "ChatGPT PRO",
            description: "Продвинутые техники промптинга и методология CRAFT",
            totalLessons: 15,
            estimatedTime: "35 мин",
            lessons: []
        }
    ]
};

// Состояние приложения
let currentState = {
    currentModuleId: 0,
    currentLessonId: 1,
    progress: {},
    chatMessages: [],
    isSidebarOpen: true,
    isChatOpen: false
};

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    loadLesson();
});

function initializeApp() {
    // Загрузка прогресса из localStorage
    const savedProgress = localStorage.getItem('chatgpt-course-progress');
    if (savedProgress) {
        currentState.progress = JSON.parse(savedProgress);
    }
    
    // Проверка размера экрана
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
}

function checkScreenSize() {
    const isMobile = window.innerWidth <= 1024;
    const sidebar = document.getElementById('sidebar');
    const chatPanel = document.getElementById('chat-panel');
    
    if (isMobile) {
        sidebar.classList.add('hidden');
        currentState.isSidebarOpen = false;
    } else {
        sidebar.classList.remove('hidden');
        currentState.isSidebarOpen = true;
    }
}

function setupEventListeners() {
    // Навигация по модулям
    document.querySelectorAll('.module-item').forEach(item => {
        item.addEventListener('click', function() {
            const moduleId = parseInt(this.dataset.module);
            selectModule(moduleId);
        });
    });
    
    // Кнопки навигации по урокам
    document.getElementById('prev-lesson').addEventListener('click', previousLesson);
    document.getElementById('next-lesson').addEventListener('click', nextLesson);
    
    // Меню и сайдбар
    document.getElementById('menu-btn').addEventListener('click', toggleSidebar);
    document.getElementById('close-sidebar').addEventListener('click', toggleSidebar);
    document.getElementById('mobile-menu').addEventListener('click', toggleSidebar);
    
    // Чат
    document.getElementById('chat-toggle').addEventListener('click', toggleChat);
    document.getElementById('send-message').addEventListener('click', sendMessage);
    document.getElementById('chat-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

function selectModule(moduleId) {
    const module = courseData.modules.find(m => m.id === moduleId);
    if (!module || module.lessons.length === 0) return;
    
    currentState.currentModuleId = moduleId;
    currentState.currentLessonId = module.lessons[0].id;
    
    // Обновление активного модуля
    document.querySelectorAll('.module-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`[data-module="${moduleId}"]`).classList.add('active');
    
    loadLesson();
}

function loadLesson() {
    const module = courseData.modules.find(m => m.id === currentState.currentModuleId);
    const lesson = module?.lessons.find(l => l.id === currentState.currentLessonId);
    
    if (!lesson) return;
    
    // Обновление хлебных крошек
    document.getElementById('current-module').textContent = module.title;
    document.getElementById('current-lesson').textContent = lesson.title;
    
    // Обновление заголовка урока
    document.getElementById('lesson-title').textContent = lesson.content.title;
    
    // Обновление метаинформации
    const lessonIndex = module.lessons.findIndex(l => l.id === currentState.currentLessonId);
    document.getElementById('lesson-current').textContent = lessonIndex + 1;
    document.getElementById('lesson-total').textContent = module.lessons.length;
    
    const timeElement = document.querySelector('.lesson-time');
    timeElement.textContent = `⏱ ${lesson.estimatedTime} мин`;
    
    const difficultyElement = document.querySelector('.lesson-difficulty');
    difficultyElement.className = `lesson-difficulty ${lesson.difficulty}`;
    difficultyElement.textContent = getDifficultyText(lesson.difficulty);
    
    // Обновление целей урока
    const objectivesList = document.getElementById('objectives-list');
    objectivesList.innerHTML = '';
    lesson.content.objectives.forEach(objective => {
        const li = document.createElement('li');
        li.textContent = objective;
        objectivesList.appendChild(li);
    });
    
    // Обновление содержимого урока
    updateLessonContent(lesson.content.sections);
    
    // Обновление навигации
    updateNavigation(module, lessonIndex);
    
    // Отметка урока как пройденного
    markLessonAsCompleted();
    updateProgress();
}

function updateLessonContent(sections) {
    const lessonBody = document.getElementById('lesson-body');
    const objectivesDiv = lessonBody.querySelector('.objectives');
    
    // Удаляем все разделы кроме целей
    const sectionsToRemove = lessonBody.querySelectorAll('.lesson-section');
    sectionsToRemove.forEach(section => section.remove());
    
    // Добавляем новые разделы
    sections.forEach(section => {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'lesson-section';
        
        if (section.title) {
            const title = document.createElement('h3');
            title.textContent = section.title;
            sectionDiv.appendChild(title);
        }
        
        if (section.type === 'text') {
            const content = document.createElement('div');
            content.innerHTML = section.content.replace(/\n\n/g, '</p><p>').replace(/^/, '<p>').replace(/$/, '</p>');
            sectionDiv.appendChild(content);
        } else if (section.type === 'image' && section.imageUrl) {
            const img = document.createElement('img');
            img.src = section.imageUrl;
            img.alt = section.title || 'Изображение урока';
            img.className = 'lesson-image';
            sectionDiv.appendChild(img);
        }
        
        lessonBody.appendChild(sectionDiv);
    });
}

function updateNavigation(module, lessonIndex) {
    const prevBtn = document.getElementById('prev-lesson');
    const nextBtn = document.getElementById('next-lesson');
    
    prevBtn.disabled = lessonIndex === 0;
    nextBtn.disabled = lessonIndex === module.lessons.length - 1;
}

function previousLesson() {
    const module = courseData.modules.find(m => m.id === currentState.currentModuleId);
    const lessonIndex = module.lessons.findIndex(l => l.id === currentState.currentLessonId);
    
    if (lessonIndex > 0) {
        currentState.currentLessonId = module.lessons[lessonIndex - 1].id;
        loadLesson();
    }
}

function nextLesson() {
    const module = courseData.modules.find(m => m.id === currentState.currentModuleId);
    const lessonIndex = module.lessons.findIndex(l => l.id === currentState.currentLessonId);
    
    if (lessonIndex < module.lessons.length - 1) {
        currentState.currentLessonId = module.lessons[lessonIndex + 1].id;
        loadLesson();
    }
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    currentState.isSidebarOpen = !currentState.isSidebarOpen;
    
    if (currentState.isSidebarOpen) {
        sidebar.classList.remove('hidden');
        sidebar.classList.add('show');
    } else {
        sidebar.classList.add('hidden');
        sidebar.classList.remove('show');
    }
}

function toggleChat() {
    const chatPanel = document.getElementById('chat-panel');
    currentState.isChatOpen = !currentState.isChatOpen;
    
    if (currentState.isChatOpen) {
        chatPanel.classList.remove('hidden');
        chatPanel.classList.add('show');
    } else {
        chatPanel.classList.add('hidden');
        chatPanel.classList.remove('show');
    }
}

function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Добавляем сообщение пользователя
    addChatMessage(message, 'user');
    input.value = '';
    
    // Симуляция ответа ИИ
    setTimeout(() => {
        const responses = [
            "Отличный вопрос! В контексте этого урока важно понимать, что ChatGPT работает на основе больших языковых моделей.",
            "Это связано с тем, как мы формулируем запросы. Попробуйте быть более конкретными в ваших промптах.",
            "Рекомендую практиковаться с разными типами запросов, чтобы лучше понять возможности ChatGPT.",
            "Хороший вопрос! Это поможет вам лучше усвоить материал урока."
        ];
        
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        addChatMessage(randomResponse, 'assistant');
    }, 1000);
}

function addChatMessage(content, role) {
    const messagesContainer = document.getElementById('chat-messages');
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${role} chat-message-enter`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.textContent = content;
    
    messageDiv.appendChild(contentDiv);
    messagesContainer.appendChild(messageDiv);
    
    // Прокрутка к последнему сообщению
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    // Сохранение в состояние
    currentState.chatMessages.push({ content, role, timestamp: Date.now() });
}

function markLessonAsCompleted() {
    const key = `${currentState.currentModuleId}-${currentState.currentLessonId}`;
    currentState.progress[key] = {
        completed: true,
        completedAt: new Date().toISOString(),
        timeSpent: 0
    };
    
    saveProgress();
}

function updateProgress() {
    // Обновление общего прогресса
    const totalLessons = courseData.modules.reduce((sum, module) => sum + module.lessons.length, 0);
    const completedLessons = Object.keys(currentState.progress).length;
    const overallProgress = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
    
    // Обновление UI прогресса
    const progressFill = document.querySelector('.top-bar .progress-fill');
    const progressPercent = document.querySelector('.progress-percent');
    
    if (progressFill) progressFill.style.width = `${overallProgress}%`;
    if (progressPercent) progressPercent.textContent = `${overallProgress}%`;
    
    // Обновление прогресса модулей
    courseData.modules.forEach(module => {
        const moduleProgress = calculateModuleProgress(module);
        const moduleElement = document.querySelector(`[data-module="${module.id}"] .progress-fill`);
        if (moduleElement) {
            moduleElement.style.width = `${moduleProgress}%`;
        }
    });
}

function calculateModuleProgress(module) {
    const completedInModule = module.lessons.filter(lesson => {
        const key = `${module.id}-${lesson.id}`;
        return currentState.progress[key]?.completed;
    }).length;
    
    return module.lessons.length > 0 ? Math.round((completedInModule / module.lessons.length) * 100) : 0;
}

function saveProgress() {
    localStorage.setItem('chatgpt-course-progress', JSON.stringify(currentState.progress));
}

function getDifficultyText(difficulty) {
    const difficultyMap = {
        'easy': 'Легко',
        'medium': 'Средне',
        'hard': 'Сложно'
    };
    return difficultyMap[difficulty] || 'Неизвестно';
}

// Обработка закрытия сайдбара при клике вне его (для мобильных устройств)
document.addEventListener('click', function(e) {
    const sidebar = document.getElementById('sidebar');
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenuBtn = document.getElementById('mobile-menu');
    
    if (window.innerWidth <= 1024 && 
        currentState.isSidebarOpen && 
        !sidebar.contains(e.target) && 
        !menuBtn.contains(e.target) && 
        !mobileMenuBtn.contains(e.target)) {
        toggleSidebar();
    }
});

// Автосохранение прогресса каждые 30 секунд
setInterval(saveProgress, 30000);
