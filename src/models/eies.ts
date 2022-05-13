export const MODEL = {
  title: "European Identity Experimental Survey",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1280px-Flag_of_Europe.svg.png",
  logoWidth: "120px",
  logoHeight: "55px",
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
            "Luxembourg",
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
          min: 18,
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
        },
        {
          type: "radiogroup",
          name: "educational-attainment",
          title:
            "What is the highest level of education you successfully completed?",
          description:
            "*NOTE:* These categories are just an example, they might be extended using real ISCED educational levels",
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
          type: "radiogroup",
          name: "unemployed",
          title:
            "Which of these descriptions applies to what you have been doing for the last 7 days?",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "In paid work as employee",
            },
            {
              value: "2",
              text: "In paid work self-employed",
            },
            {
              value: "3",
              text: "In paid work for a family business",
            },
            {
              value: "4",
              text: "Unemployed looking for a job",
            },
            {
              value: "5",
              text: "Unemployed not looking for a job",
            },
            {
              value: "6",
              text: "Permanently sick or disabled",
            },
            {
              value: "7",
              text: "Retired",
            },
            {
              value: "8",
              text: "Community or military service",
            },
            {
              value: "9",
              text: "Housework, looking after children or others",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "occupation",
          visibleIf: "{unemployed} < 4",
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
      ],
      title: "Socioeconomic background",
      description:
        "In this section we ask respondents some questions related to their socioeconomic characteristics",
      questionsOrder: "initial",
    },
    // {
    //   name: "eu-knowledge",
    //   elements: [
    //     {
    //       type: "text",
    //       name: "number-countries",
    //       title: "How many countries currently belong to the European Union?",
    //       description: "Please, answer with a number",
    //       isRequired: true,
    //       inputType: "number",
    //       min: 0,
    //     },
    //     {
    //       type: "boolean",
    //       name: "switzerland-memeber",
    //       title: "Is Switzerland an EU member state?",
    //       isRequired: true,
    //     },
    //     {
    //       type: "boolean",
    //       name: "serbia-memeber",
    //       title: "Is Serbia an EU member state?",
    //       isRequired: true,
    //     },
    //   ],
    //   title: "Knowledge about the EU",
    //   description:
    //     "In this section we ask respondents some questions about the EU.",
    //   questionsOrder: "initial",
    // },
    {
      name: "subjective-income",
      elements: [
        {
          type: "text",
          name: "country-position",
          title:
            "Considering the EU is currently formed by 27 Member States, what position do you think {country} holds in a ranking from richest (1) to poorest (27) country?",
          isRequired: true,
          inputType: "number",
          min: 1,
          max: 27,
          step: 1,
        },
        {
          type: "nouislider",
          name: "subjective-income-within-country",
          title:
            "What percentage of households in {country} do you think earn less than yours?",
          connect: true,
          rangeMin: 0,
          rangeMax: 100,
          pipsMode: "values",
          pipsDensity: 10,
          pipsValues: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
          behaviour: "tap",
          isRequired: true,
        },
        {
          type: "nouislider",
          name: "subjective-income-across-country",
          title:
            "What percentage of households in the EU do you think earn less than yours?",
          connect: true,
          rangeMin: 0,
          rangeMax: 100,
          pipsMode: "values",
          pipsDensity: 10,
          pipsValues: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
          behaviour: "tap",
          isRequired: true,
        },
      ],
      title: "Subjective income",
      description:
        "In this section we ask respondents some questions regarding their income relative to their country and the EU.",
      questionsOrder: "random",
    },
    {
      name: "objective-income",
      elements: [
        {
          type: "boolean",
          name: "objective-income-check-country",
          isRequired: true,
        },
      ],
      title: "Objective income",
      description:
        "In this section we ask respondents about your specific household income compared to their country's households as well as EU households.",
      questionsOrder: "random",
    },
    {
      name: "objective-income",
      elements: [
        {
          type: "boolean",
          name: "objective-income-check-eu",
          isRequired: true,
        },
      ],
      title: "Objective income",
      description:
        "In this section we ask respondents about your specific household income compared to their country's households as well as EU households.",
      questionsOrder: "random",
    },

    {
      name: "within-country-treatment",
      title: "Within Country Treatment",
      description:
        "This is our informational treatment. We show the respondents their answers and the estimated objective position they are placed.",
      elements: [
        {
          type: "nouislider",
          name: "subjective-within-countries-answer",
          title:
            "This is what you answered when we asked you about what percentage of households earns less than yours.",
          readOnly: true,
        },
        {
          type: "nouislider",
          name: "subjective-across-countries-answer",
          title:
            "According to your subsequent answers we estimate that you earn less than the following percentage of households.",
          readOnly: true,
        },
      ],
    },
    {
      name: "within-eu-treatment",
      title: "Within EU Treatment",
      description:
        "This is our informational treatment. We show the respondents their answers and the estimated objective position they are placed.",
      elements: [
        {
          type: "nouislider",
          name: "subjective-within-eu-answer",
          title:
            "This is what you answered when we ask you about what percentage of households earns less than yours.",
          readOnly: true,
        },
        {
          type: "nouislider",
          name: "subjective-across-eu-answer",
          title:
            "According to your subsequent answers we estimate that you earn less than the following percentage of households.",
          readOnly: true,
        },
      ],
    },
    {
      name: "cross-country-treatment",
      title: "Cross-country Treatment",
      description:
        "This is our informational treatment. We show the respondents their answers and the estimated objective position they are placed.",
      elements: [
        {
          type: "text",
          name: "country-position-answer",
          title: "Previously, you placed {country} in the following position:",
          inputType: "number",
          value: "{country-position}",
          readOnly: true,
        },
        {
          type: "text",
          name: "country-position-eurostat",
          title:
            "According to EUROSTAT data, {country} is ranked in the following position:",
          value: "{eurostat-country-position}",
          readOnly: true,
        },
      ],
    },
    {
      name: "main-outcomes",
      title: "European and Redistributive Preferences",
      elements: [
        {
          type: "rating",
          name: "unification",
          title:
            "Now thinking about the European Union, some say European unification should go further. Others say it has already gone too far. What number on the following scale best describes your position?",
          isRequired: true,
          rateMax: 10,
          minRateDescription: "European unification has gone too far",
          maxRateDescription: "European unification should go further",
        },
        {
          type: "rating",
          name: "national-redistribution",
          title:
            "Please say to what extent you agree or disagree with each of the following statements. The government should take measures to reduce differences in income levels.",
          isRequired: true,
          rateMin: 1,
          rateMax: 5,
          minRateDescription: "Agree strongly",
          maxRateDescription: "Disagree strongly",
        },
        {
          type: "radiogroup",
          name: "membership-referendum",
          title:
            "Imagine there were a referendum in {country} tomorrow about membership of the European Union. Would you vote for {country} to remain a member of the European Union or to leave the European Union?",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "Remain a member of the European Union",
            },
            {
              value: "2",
              text: "Leave the European Union",
            },
            {
              value: "3",
              text: "Would submit a blank ballot paper",
            },
            {
              value: "4",
              text: "Would spoil the ballot paper",
            },
            {
              value: "5",
              text: "Would not vote",
            },
            {
              value: "6",
              text: "Not eligible to vote",
            },
          ],
          otherText: "Answer",
        },
        {
          type: "rating",
          name: "eu-wide-social-benefit",
          title:
            "It has been proposed that there should be a European Union-wide social benefit scheme for all poor people. The purpose is to guarantee a minimum standard of living for all people in the European Union. The scheme would require richer European Union countries to pay more into such a scheme than poorer European Union countries. Overall, would you be against or in favor of having such a European Union-wide social benefit scheme?",
          isRequired: true,
          rateMin: 1,
          rateMax: 4,
          minRateDescription: "Strongly against",
          maxRateDescription: "Strongly in favour",
        },
      ],
    },
    {
      name: "further-outcomes",
      title: "Political attitudes and behaviors in an European context",
      elements: [
        {
          type: "rating",
          name: "emotional-attachment",
          title:
            "People might feel different levels of attachment to the country where they live and to Europe. How emotionally attached do you feel to Europe?",
          isRequired: true,
          rateMin: 0,
          rateMax: 10,
          minRateDescription: "Not at all emotionally attached",
          maxRateDescription: "Very emotionally attached",
        },
        {
          type: "rating",
          name: "immigration-economy",
          title:
            "Would you say it is generally bad or good for {country} economy that people come to live here from other countries?",
          isRequired: true,
          rateMin: 0,
          rateMax: 10,
          minRateDescription: "Bad for the economy",
          maxRateDescription: "Good for the economy",
        },
        {
          type: "rating",
          name: "immigration-education",
          title:
            "How important do you think each of these things should be in deciding whether someone born, brought up and living outside {country} should be able to come and live here? Firstly, how important should it be for you to have good educational qualifications?",
          isRequired: true,
          rateMin: 0,
          rateMax: 10,
          minRateDescription: "Not at all important",
          maxRateDescription: "Extremely important",
        },
        {
          type: "rating",
          name: "immigration-skills",
          title:
            "Secondly, how important should it be for you to have work skills that {country} needs?",
          isRequired: true,
          rateMin: 0,
          rateMax: 10,
          minRateDescription: "Not at all important",
          maxRateDescription: "Extremely important",
        },
        {
          type: "radiogroup",
          name: "participation-future-national",
          title:
            "Imagine that {country} national election is held tomorrow. Would you vote in that election?",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "Yes",
            },
            {
              value: "2",
              text: "No",
            },
            {
              value: "3",
              text: "Not eligible to vote",
            },
          ],
        },
        {
          type: "text",
          name: "party-national-choice",
          title: "Which party would you vote for in that election?",
          description: "[Country-specific (question and) codes.]",
          visibleIf: "{participation-future-national} == 1",
        },
        {
          type: "radiogroup",
          name: "participation-future-eu",
          title:
            "Imagine that European elections are held tomorrow. Would you vote in that election?",
          isRequired: true,
          choices: [
            {
              value: "1",
              text: "Yes",
            },
            {
              value: "2",
              text: "No",
            },
            {
              value: "3",
              text: "Not eligible to vote",
            },
          ],
        },
        {
          type: "text",
          name: "party-eu-choice",
          title: "Which party would you vote for in that election?",
          description: "[Country-specific (question and) codes.]",
          visibleIf: "{participation-future-eu} == 1",
        },
      ],
    },
    {
      name: "manipulation-checks",
      title: "Manipulation checks",
      description:
        "In order to test the underlying causal mechanism and and rule out alternative explanations (cultural arguments and uneffective treatments)",
      elements: [
        {
          type: "text",
          title: "How important are the following topics for you? (add topics)",
          inputType: "number",
          isRequired: true,
          min: 0,
          max: 100,
        },
        {
          type: "rating",
          name: "emotional-attachment-country",
          title:
            "People might feel different levels of attachment to the country where they live and to Europe. How emotionally attached do you feel to {country}?",
          isRequired: true,
          rateMin: 0,
          rateMax: 10,
          minRateDescription: "Not at all emotionally attached",
          maxRateDescription: "Very emotionally attached",
        },
        {
          type: "rating",
          name: "immigration-cristianity",
          title:
            "How important do you think each of these things should be in deciding whether someone born, brought up and living outside {country} should be able to come and live here? How important should it be for you to have good educational qualifications?",
          isRequired: true,
          rateMin: 0,
          rateMax: 10,
          minRateDescription: "Not at all important",
          maxRateDescription: "Extremely important",
        },
        {
          type: "rating",
          name: "cultural-effect-immigration",
          title:
            "Would you say that {country} cultural life is generally undermined or enriched by people come to live here from other countries?",
          isRequired: true,
          rateMin: 0,
          rateMax: 10,
          minRateDescription: "Cultural live undermined",
          maxRateDescription: "Cultural live enriched",
        },
      ],
    },
    {
      name: "manipulation-checks-treatment-info",
      title: "Treatments' information checks",
      elements: [
        {
          type: "text",
          name: "number-countries-check",
          title: "How many countries currently belong to the European Union?",
          description: "Please, answer with a number",
          isRequired: true,
          inputType: "number",
          min: 0,
        },
        {
          type: "nouislider",
          name: "subjective-income-country-check",
          title:
            "According to the estimation we previously provided, what percentage of households in {country} earn less than yours?",
          connect: true,
          rangeMin: 0,
          rangeMax: 100,
          pipsMode: "values",
          pipsDensity: 10,
          pipsValues: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
          behaviour: "tap",
          isRequired: true,
        },
        {
          type: "nouislider",
          name: "subjective-income-eu-check",
          title:
            "According to the estimation we previously provided, what percentage of households in the EU earn less than yours?",
          connect: true,
          rangeMin: 0,
          rangeMax: 100,
          pipsMode: "values",
          pipsDensity: 10,
          pipsValues: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
          behaviour: "tap",
          isRequired: true,
        },
      ],
    },
  ],
  showPrevButton: false,
  showQuestionNumbers: "off",
  showProgressBar: "top",
  progressBarType: "questions",
  startSurveyText: "Start the survey",
  completeText: "Complete the survey",
  firstPageIsStarted: true,
};
