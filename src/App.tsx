import { useCallback } from "react";

// import 'survey-core/survey.min.css';
import * as SurveyCore from "survey-core";
import { StylesManager, Model, FunctionFactory } from "survey-core";
import { Survey } from "survey-react-ui";
import { MODEL } from "./models/eies";
import { data, eu_data } from "./data/deciles_NAC";
//@ts-expect-error
import * as widgets from "surveyjs-widgets";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import noUiSlider from "nouislider";
// import "nouislider/dist/nouislider.min.css";
import "nouislider/dist/nouislider.css";
import "survey-core/defaultV2.min.css";
import "./App.css";
StylesManager.applyTheme("defaultV2");
widgets.nouislider(SurveyCore);

function randomDecile(country: string | any[], eu = false) {
  let deciles = {};

  if (eu) {
    deciles = eu_data[country as keyof Object];
  } else {
    deciles = data[country as keyof Object];
  }
  // Create array of object keys, ["311", "310", ...]
  if (deciles) {
    const keys = Object.keys(deciles);

    // Generate random index based on number of keys
    const randIndex = Math.floor(Math.random() * keys.length);

    // Select a key from the array of keys using the random index
    const randKey = keys[randIndex];

    // Use the key to get the corresponding name from the "names" object
    return deciles[randKey as keyof Object]
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}

function checkDecile(num: number) {
  let deciles = [];
  for (const x in data[country as keyof Object]) {
    const y: any = data[country as keyof Object][x as keyof Object];

    if (y >= num) {
      deciles.push(data[country as keyof Object][x as keyof Object]);
    }
  }
  if (deciles.length === 1) {
    return null;
  } else {
    var decile = deciles[Math.floor(Math.random() * deciles.length)];
    return decile.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}

let country = "";

FunctionFactory.Instance.register("randomDecile", randomDecile);

function App() {
  const survey = new Model(MODEL);
  let decile: string | undefined;

  survey.onValueChanged.add(function (survey: any, options: any) {
    if (options.name !== "country") return;
    country = options.question.value;
    // console.log("changes country", country);

    const q = survey.getQuestionByName("objective-income-check-country");

    decile = randomDecile(country);

    q.title = "Do your household earn more or less than " + decile + "?";

    survey.onValueChanged.add(function (survey: any, options: any) {
      if (options.name !== "objective-income-check-country") return;

      if (decile !== undefined) {
        const num = parseFloat(decile.replace(/,/g, ""));
        const page = survey.currentPage;
        // console.log(page, num);
        if (checkDecile(num) === null) {
          return;
        } else {
          decile = checkDecile(num) as string;
          const question = page.addNewQuestion("boolean", "test");
          question.title =
            "Do your household earn more or less than " + decile + "?";
        }
      }
    });
  });

  const alertResults = useCallback((sender: { data: any }) => {
    const results = JSON.stringify(sender.data);
    alert(results);
  }, []);

  survey.onComplete.add(alertResults);

  return <Survey model={survey} />;
}

export default App;
