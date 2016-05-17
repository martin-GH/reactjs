export const getStepsMap = (data) => {
  let stepsMap = null;

  if (data) {
    stepsMap = data.steps.map((step) => {
      return { [step.uuid]: step };
    });
  }

  return stepsMap;
};

export const getStep = (stepsMap, index = 0) => {
  let step = null;

  if (stepsMap) {
    const uuid = Object.keys(stepsMap[index])[0]; // !!!

    step = stepsMap[index][uuid];
  }

  return step;
};

export const getQuestion = (step) => {
  console.log(step);
  let question = null;

  if (step) {
    question = {
      uuid: step.uuid,
      title: step.title,
      required: step.required,
      multiple: step.multi,
    };
  }

  return question;
};

export const getAnswers = (step) => {
  let answers = null;

  if (step && step.answers) {
    answers = step.answers;
  }

  return answers;
};