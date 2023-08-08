class TemplateManager {

    loadEventListeners() {
        $(document).ready(() => {
            $('.btn-questions').click((event) => {
                
                this.cerrarAllQuestionsparagraph($(event.currentTarget));
            });
        });
    }

    mostrarContenidoFAQ(btn) {
       const divToShow=btn.closest('.question').find('.question-paragraph');
       divToShow.removeClass('hide-question-paragraph');
       divToShow.toggleClass(' showAnimation closeAnimation');
       this.voltearBotonSeleccionado(btn);
       this.sombrearTituloPregunta(btn);
    }
    voltearBotonSeleccionado(btn){
        btn.toggleClass('rotated');
    }
    sombrearTituloPregunta(btn){
        btn.closest('.question-title').find('p').toggleClass('question-title-bolder');
    }
    cerrarAllQuestionsparagraph(btn){
        const currentQuestionDiv=btn.closest('.question').find('.question-paragraph');
        const questionParagraphDivs=$(".question-paragraph");
        const self = this; // Almacenar una referencia a la instancia de TemplateManager
        this.mostrarContenidoFAQ(btn);
        questionParagraphDivs.each(function(){
            const questionParagraphDiv = $(this);
            if (questionParagraphDiv.is(currentQuestionDiv)) {
                
                return;
            }
            if (questionParagraphDiv.hasClass('showAnimation')) {
            const btnQuestionParagraphDiv=questionParagraphDiv.siblings('.question-title').first().find('.btn-questions');
            self.mostrarContenidoFAQ(btnQuestionParagraphDiv);
            }
        });
    }
    init() {
        this.loadEventListeners();
    }
}

const templateManager = new TemplateManager();
templateManager.init();