import { useCallback } from "react";

// import 'survey-core/survey.min.css';
import * as SurveyCore from "survey-core";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { MODEL } from "./models/eies";
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

function App() {
  const survey = new Model(MODEL);
  survey.focusFirstQuestionAutomatic = false;
  var question = survey.getQuestionByName("range");
  question.value = 20;
  const alertResults = useCallback((sender: { data: any }) => {
    const results = JSON.stringify(sender.data);
    alert(results);
  }, []);

  survey.onComplete.add(alertResults);

  return <Survey model={survey} />;
}

export default App;
