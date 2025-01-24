document.addEventListener("DOMContentLoaded", () => {
    const navButtons = document.querySelectorAll(".nav-btn");
    const closeButtons = document.querySelectorAll(".close-btn");
    const sections = document.querySelectorAll("section");
    const mainMenu = document.getElementById("main-menu");

    // Функция для скрытия всех секций
    const hideAllSections = () => {
        sections.forEach(section => section.classList.remove("visible"));
    };

    // Открытие секции по нажатию на кнопку меню
    navButtons.forEach(button => {
        button.addEventListener("click", () => {
            const sectionId = button.getAttribute("data-section");
            hideAllSections();
            document.getElementById(sectionId).classList.add("visible");
        });
    });

    // Закрытие секции и возврат в главное меню
    closeButtons.forEach(button => {
        button.addEventListener("click", () => {
            hideAllSections();
            mainMenu.classList.add("visible");
        });
    });
});
