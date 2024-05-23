document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    // Efeito header
    window.addEventListener('scroll', function() {
        const position = window.scrollY;

        if (position < alturaHero) {
            hiddeElementsHeader();
        } else {
            showElementsHeader();
        }
    })

    // Secao de atracoes, programacao das abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(button) {
            const tabTarget = button.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${tabTarget}]`);     
            hideTabs();
            tab.classList.add('shows__list--is-active');
            removeActiveButton();
            button.target.classList.add('shows__tabs__button--is-active')
        })
    }

    // Secao FAQ, accordion
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', openCloseQuestion)
    }
})

    // Funcoes complementares

function hiddeElementsHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function showElementsHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function openCloseQuestion(element) {
    const elementoPai = element.target.parentNode;

    elementoPai.classList.toggle('faq__questions__item--is-open');
}

function removeActiveButton() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) { 
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }
}

function hideTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}