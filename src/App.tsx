import { useCallback } from "react";

import * as SurveyCore from "survey-core";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { MODEL } from "./models/eies";
import { country_data, eu_data } from "./data/deciles_NAC";
import { country_positions } from "./data/country_positions";

//@ts-expect-error
import * as widgets from "surveyjs-widgets";
import "survey-core/defaultV2.min.css";
import "./App.css";
StylesManager.applyTheme("defaultV2");
widgets.nouislider(SurveyCore);

let num: number | null = null;
let eu_num: number | null = null;
let country = "";
let value: any = null;

function checkDecile(less: boolean, eu: boolean = false) {
  let decile;

  let data;
  if (eu) {
    data = eu_data;
    if (eu_num === null) {
      if (less) {
        decile = data[country as keyof Object]["D3" as keyof Object];
        eu_num = 3;
        return decile.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
      decile = data[country as keyof Object]["D7" as keyof Object];
      eu_num = 7;
      return decile.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else if (eu_num === 3 || eu_num === 7 || eu_num === 2) {
      if (less) {
        decile =
          data[country as keyof Object][("D" + (eu_num - 1)) as keyof Object];
        eu_num--;
        return decile.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      } else {
        decile =
          data[country as keyof Object][("D" + (eu_num + 1)) as keyof Object];
        eu_num++;
        return decile.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    } else {
      // Decile determined:
      if (less) {
        value = eu_num;
      } else {
        value = eu_num + 1;
      }
      return value;
    }
  } else {
    data = country_data;
    if (num === null) {
      if (less) {
        decile = data[country as keyof Object]["D3" as keyof Object];
        num = 3;
        return decile.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
      decile = data[country as keyof Object]["D7" as keyof Object];
      num = 7;
      return decile.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else if (num === 3 || num === 7 || num === 2) {
      if (less) {
        decile =
          data[country as keyof Object][("D" + (num - 1)) as keyof Object];
        num--;
        return decile.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      } else {
        decile =
          data[country as keyof Object][("D" + (num + 1)) as keyof Object];
        num++;
        return decile.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    } else {
      // Decile determined:
      if (less) {
        value = num;
      } else {
        value = num + 1;
      }
      return value;
    }
  }
}

function askAgain(page: any, decile: any, eu: boolean = false) {
  if (eu) {
    const question = page.addNewQuestion("boolean", "eu_decile_" + decile);

    question.title = "Do your household earn more or less than " + decile + "?";
  } else {
    const question = page.addNewQuestion("boolean", "decile_" + decile);

    question.title = "Do your household earn more or less than " + decile + "?";
  }
}

function App() {
  const survey = new Model(MODEL);
  let decile: any;

  // On change on Country question, set up other questions:
  survey.onValueChanged.add(function (survey: any, options: any) {
    if (options.name !== "country") return;
    country = options.question.value;

    // determines selected country position according to EUROSTAT
    const country_position_eurostat = survey.getQuestionByName(
      "country-position-eurostat"
    );
    country_position_eurostat.value =
      country_positions[country as keyof Object]["ranking" as keyof Object];

    // determines the D5 of country and changes question title:
    const q = survey.getQuestionByName("objective-income-check-country");
    decile = country_data[country as keyof Object]["D5" as keyof Object]
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    q.title = "Do your household earn more or less than " + decile + "?";

    // determines the D5 of eu in national country and changes question title:
    const qq = survey.getQuestionByName("objective-income-check-eu");
    decile = eu_data[country as keyof Object]["D5" as keyof Object]
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    qq.title = "Do your household earn more or less than " + decile + "?";
  });

  // captures subjective country placement and sets treatment accordingly:
  survey.onValueChanged.add(function (survey: any, options: any) {
    if (options.name !== "country-position") return;
    const country_position_answer = survey.getQuestionByName(
      "country-position-answer"
    );
    country_position_answer.value = options.question.value;
  });

  // saves the answer in subjective income within country and sets within country treatment
  survey.onValueChanged.add(function (survey: any, options: any) {
    if (options.name !== "subjective-income-within-country") return;
    const subjective_income = options.question.value;
    const q = survey.getQuestionByName("subjective-within-countries-answer");
    q.defaultValue = subjective_income;
  });

  // saves the answer in subjective income across country and sets within eu treatment
  survey.onValueChanged.add(function (survey: any, options: any) {
    if (options.name !== "subjective-income-across-country") return;
    const subjective_income = options.question.value;
    const q = survey.getQuestionByName("subjective-within-eu-answer");
    q.defaultValue = subjective_income;
  });

  // First time respondent answers objective income country, it checks decile and asks again:
  let answered: boolean = false;
  survey.onValueChanged.add(function (survey: any, options: any) {
    if (options.name !== "objective-income-check-country") return;
    if (!answered) {
      const page = survey.currentPage;

      decile = checkDecile(!options.question.value) as string;
      askAgain(page, decile);
    }
    answered = true;
  });

  // First time respondent answers objective income eu, it checks decile and asks again:
  let answered_eu: boolean = false;
  survey.onValueChanged.add(function (survey: any, options: any) {
    if (options.name !== "objective-income-check-eu") return;

    if (!answered_eu) {
      const page = survey.currentPage;

      decile = checkDecile(!options.question.value, true) as string;
      askAgain(page, decile, true);
    }
    answered_eu = true;
  });

  // On change in country decile answer, it checks decile and if not determined, asks again:
  survey.onValueChanged.add(function (survey: any, options: any) {
    if (options.name !== "decile_" + decile) return;

    const page = survey.currentPage;

    decile = checkDecile(!options.question.value);

    if (value !== null) {
      const q = survey.getQuestionByName("subjective-across-countries-answer");
      q.defaultValue = value * 10;
      return;
    } else {
      askAgain(page, decile);
    }
  });

  // On change in country decile answer, it checks decile and if not determined, asks again:
  survey.onValueChanged.add(function (survey: any, options: any) {
    if (options.name !== "eu_decile_" + decile) return;

    const page = survey.currentPage;

    decile = checkDecile(!options.question.value, true);

    if (value !== null) {
      const q = survey.getQuestionByName("subjective-across-eu-answer");
      q.defaultValue = value * 10;
      return;
    } else {
      askAgain(page, decile, true);
    }
  });

  const alertResults = useCallback((sender: { data: any }) => {
    const results = JSON.stringify(sender.data);
    alert(results);
  }, []);

  survey.onComplete.add(alertResults);

  return <Survey model={survey} />;
}

export default App;
