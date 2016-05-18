const StoreHelper = {
  stepsMap: [],
  step: {},
  content: {},
  currentStepIndex: 0,
  checkboxStates: null,

  initData(data) {
    this.setStepsMap(data);
    this.prepareStepData();
    this.initCheckboxStates();
  },

  getData() {
    this.prepareStepData();

    const data = {
      type: this.getStepType(),
      content: this.getContentByStepType(),
      currentStepIndex: this.currentStepIndex,
    };

    console.log('StoreHelper', this.step);

    return data;
  },

  setStepsMap(data) {
    if (data) {
      this.stepsMap = data.steps.map((step) => {
        return { [step.uuid]: step };
      });
    }
  },

  prepareStepData() {
    const uuid = this.getUuidByIndex(this.currentStepIndex);
    let step = this.stepsMap[this.currentStepIndex][uuid];

    this.step = {
      data: step,
      type: step.type
    };
  },

  getUuidByIndex(index) {
    return Object.keys(this.stepsMap[index])[0];
  },

  getStepType() {
    return this.step.type;
  },

  getContentByStepType() {
    let content = null;

    switch (this.step.type) {
      case 'question':
        content = {
          question: this.getQuestion(),
          answers: this.getAnswers()
        };
        break;

      case 'page':
        content = {
          body: this.getPageBody()
        };
        break;
    }

    return content;
  },

  getPageBody() {
    return this.step.data.body;
  },

  getQuestion() {
    return {
      uuid: this.step.data.uuid,
      title: this.step.data.title,
      required: this.step.data.required,
      multiple: this.step.data.multi,
    };
  },

  getAnswers() {
    return this.step.data.answers;
  },

  increaseStepIndex() {
    if (this.currentStepIndex < this.stepsMap.length - 1) {
      this.currentStepIndex++;
    }
  },

  decreaseStepIndex() {
    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
    }
  },

  initCheckboxStates() {
    if (this.step.type === 'question') {
      this.checkboxStates = this.step.data.answers.map((answer) => {
        return Object.assign(answer, {checked: false});
      });
    }
  },

  toggleCheckbox(value) {
    this.step.data.answers = this.step.data.answers.map((item) => {
      if (item.uuid === value) {
        item.checked = !item.checked;
      }
      return item;
    });
  },

  goPrev() {
    this.decreaseStepIndex();
    this.initCheckboxStates();
  },

  goNext() {
    this.increaseStepIndex();
    this.initCheckboxStates();
  },

  getNextUuid() {
    let item = null;

    return this.step.data.answers.find((answer) => {
      if (answer.checked && answer.next) {
        item = answer.next;
      }

      return item;
    });
  },

  submitAnswers() {
    const nextQuestion = this.getNextUuid();

    if (nextQuestion) {
      this.stepsMap.map((item, i) => {
        if (Object.keys(item)[0] === nextQuestion.next) {
          this.currentStepIndex = i;
        }
      })
    } else {
      this.goNext();
    }
  }
};

export default StoreHelper;