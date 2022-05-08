export const MODEL = {
  title: "European Identity Experimental Survey",
  logoPosition: "right",
  pages: [
    {
      name: "welcome-page",
      elements: [
        {
          type: "html",
          name: "question2",
          html: '<h1 style="color: #5e9ca0; text-align: center;">Welcome to the European Identity Experimental Survey</h1>\n<p style="text-align: center;"><strong> This is a survey designed to know more about the EU citizen\'s&nbsp; preferences regarding european integration. We appreciate very much your participation.</strong></p>',
        },
      ],
      readOnly: true,
    },
    {
      name: "socioeconomic-background",
      elements: [
        {
          type: "text",
          name: "question1",
        },
        {
          type: "nouislider",
          name: "range",
          title: "Please range",
          step: 1,
          behaviour: 'drag',
          pipsMode: 'range'
        },
      ],
    },
  ],
  showQuestionNumbers: "off",
  showProgressBar: "top",
  progressBarType: "questions",
  startSurveyText: "Start the survey",
  completeText: "Complete the survey",
  firstPageIsStarted: true,
  questionsOnPageMode: "questionPerPage",
  showTimerPanel: "top",
  widthMode: "responsive",
};
