const app = (() => {

    let _questionContainer = document.querySelector(".container__main__faq__questions__question.active");

    document.body.addEventListener("click", (event) => {
        if (
            event.target.classList.contains("container__main__faq__questions__question__fore__title") ||
            event.target.classList.contains("container__main__faq__questions__question__fore__more")
        ) {
            clearAnswer();
            showAnswer(event.target);
        }
    })

    function showAnswer(element) {
        let questionContainer = element.parentElement.parentElement;
        _questionContainer = questionContainer;
        
        questionContainer.classList.add("active");

    }

    function clearAnswer() {
        _questionContainer.classList.remove("active");
    }

})();