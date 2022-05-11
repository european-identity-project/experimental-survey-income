export const MODEL = {
  title: "European Identity Experimental Survey",
  logoFit: "none",
  logoPosition: "right",
  pages: [
    {
      name: "welcome-page",
      elements: [
        {
          type: "html",
          name: "question2",
          html: '<h1 style="color: #1ab394; text-align: center;">Welcome to the European Identity Experimental Survey</h1>\n<p style="text-align: center;"><strong> This is a survey designed to know more about the EU citizen\'s&nbsp; preferences regarding european integration. We appreciate very much your participation.</strong></p>',
        },
      ],
      readOnly: true,
    },
    {
      name: "socioeconomic-background",
      elements: [
        {
          type: "dropdown",
          name: "country",
          title: "Country",
          isRequired: true,
          choices: [
            "Austria",
            "Belgium",
            "Bulgaria",
            "Croatia",
            "Cyprus",
            "Czechia",
            "Denmark",
            "Estonia",
            "Finland",
            {
              value: "Frnace",
              text: "France",
            },
            "Germany",
            "Greece",
            "Hungary",
            "Ireland",
            "Italy",
            "Latvia",
            "Lithuania",
            "Luxemburg",
            "Malta",
            "Netherlands",
            "Poland",
            "Portugal",
            "Romania",
            "Slovakia",
            "Slovenia",
            "Spain",
            "Sweden",
          ],
          choicesOrder: "asc",
        },
        {
          type: "boolean",
          name: "native",
          visibleIf: "{country} notempty",
          title: "Are you a native from {country}?",
          isRequired: true,
        },
        {
          type: "boolean",
          name: "citizenship",
          visibleIf: "{native} == false",
          title: "Do you have the citizenship from {country}?",
          isRequired: true,
        },
        {
          type: "text",
          name: "age",
          title: "Please, can you tell me your age?",
          isRequired: true,
          inputType: "number",
          min: 16,
        },
        {
          type: "radiogroup",
          name: "sex",
          title: "Sex",
          isRequired: true,
          choices: [
            {
              value: "male",
              text: "Male",
            },
            {
              value: "female",
              text: "Female",
            },
            "Other",
          ],
        },
        {
          type: "rating",
          name: "ideology",
          title:
            "When talking about politics, the terms left and right are normally used. Considering the following scale that goes from 1 to 10, in which 1 means “furthest to the left” and 10 means “furthest to the right”, where would you place yourself?",
          isRequired: true,
          rateMax: 10,
          minRateDescription: "Extreme Left",
          maxRateDescription: "Extreme Right",
          displayRateDescriptionsAsExtremeItems: true,
        },
        {
          type: "radiogroup",
          name: "educational-attainment",
          title:
            "What is the highest level of education your mother successfully completed?",
          description:
            "*NOTE:* These categories are just an example, they might be extended using real ISCED occupations",
          isRequired: true,
          choices: [
            {
              value: "01",
              text: "No education",
            },
            {
              value: "02",
              text: "Primary education",
            },
            {
              value: "03",
              text: "Secondary Education",
            },
            {
              value: "04",
              text: "Tertiary education",
            },
          ],
          otherText: "Answer",
        },
        {
          type: "boolean",
          name: "unemployed",
          title: "Please, can you tell me if you are unemployed at the moment?",
          isRequired: true,
        },
        {
          type: "radiogroup",
          name: "occupation",
          visibleIf: "{unemployed} = false",
          title:
            "Which of the descriptions below best describes the sort of work you do?",
          description:
            "*NOTE:* These categories are just an example, they might be extended using real ISCO occupations",
          isRequired: true,
          choices: [
            {
              value: "01",
              text: "Professional and technical occupations",
            },
            {
              value: "02",
              text: "Higher administrator occupations",
            },
            {
              value: "03",
              text: "Clerical occupations",
            },
            {
              value: "04",
              text: "Sales occupations",
            },
            {
              value: "05",
              text: "Service occupations",
            },
            {
              value: "06",
              text: "Skilled worker ",
            },
            {
              value: "07",
              text: "Semi-skilled worker",
            },
            {
              value: "08",
              text: "Unskilled worker",
            },
            {
              value: "09",
              text: "Farm worker",
            },
          ],
          otherText: "Answer",
        },
        {
          type: "text",
          name: "ue-kownledge",
          title: "How many countries currently belong to the European Union?",
          description: "Please, answer with a number",
          isRequired: true,
          inputType: "number",
          min: 0,
        },
      ],
      title: "Socioeconomic background",
      description:
        "In this section we ask you some questions related to your socioeconomic characteristics",
      questionsOrder: "initial",
    },
    {
      name: "subjective-income",
      elements: [
        {
          type: "text",
          name: "question5",
          title:
            "Considering the EU is currently formed by 27 Member States, what position do you think {country} holds in a ranking from richest (1) to poorest (27) country?",
          isRequired: true,
          inputType: "number",
          min: 1,
          max: 27,
          step: 1,
        },
        {
          type: "text",
          name: "subjective-income-1",
          title:
            "What percentage of households in {country} do you think earn less than yours?",
          isRequired: true,
        },
        {
          type: "text",
          name: "subjective-income-2",
          title:
            "What percentage of households in the EU do you think earn less than yours?",
          isRequired: true,
        },
      ],
      title: "Subjective income",
      description:
        "In this section we ask you some questions regarding your income relative to your country and the EU.",
      questionsOrder: "random",
    },
    {
      name: "objective-income",
      elements: [
        {
          type: "boolean",
          name: "objective-income-check-country",
          title: "",
          isRequired: true,
        },
        {
          type: "boolean",
          name: "question1",
          title: "",
          isRequired: true,
        },
      ],
      title: "Objective income",
      description:
        "In this section we ask you about your specific household income compared to your country's households as well as EU households.",
      questionsOrder: "random",
    },
  ],
  // calculatedValues: [
  //   {
  //     name: "national_decile",
  //     expression: "randomDecile({country})",
  //     includeIntoResult: true,
  //   },
  //   {
  //     name: "eu_decile",
  //     expression: "randomDecile({country}, true)",
  //     includeIntoResult: true,
  //   },
  // ],
  showPrevButton: false,
  showQuestionNumbers: "off",
  showProgressBar: "top",
  progressBarType: "questions",
  startSurveyText: "Start the survey",
  completeText: "Complete the survey",
  firstPageIsStarted: true,
};
