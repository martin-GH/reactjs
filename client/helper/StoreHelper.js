const StoreHelper = {
  stepsMap: [],
  step: {},
  content: {},
  currentStepIndex: 0,
  submitButtonState: '',
  browseButtonState: {
    back: 'disabled',
    forward: '',
  },

  initData(data) {
    this.setStepsMap(data);
    this.initStepData();
    this.initCheckboxStates();
    this.initSubmitButtonState();
  },

  getData() {
    const data = {
      type: this.getStepType(),
      content: this.getContentByStepType(),
      currentStepIndex: this.currentStepIndex,
      submitButtonState: this.submitButtonState,
      browseButtonState: this.browseButtonState
    };

    //console.log(data);

    return data;
  },

  setStepsMap(data) {
    if (data) {
      this.stepsMap = data.steps.map((step) => {
        return { [step.uuid]: step };
      });
    }
  },

  initStepData() {
    const uuid = this.getUuidByIndex(this.currentStepIndex);
    let step = this.stepsMap[this.currentStepIndex][uuid];

    this.step = {
      data: step,
      type: step.type
    };
  },

  prepareData() {
    this.initStepData();
    this.initCheckboxStates();
    this.initSubmitButtonState();
    this.toggleBrowseButtonState();
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
      requiredText: this.step.data.required_text,
      multiple: this.step.data.multi,
      autoJump: this.step.data.auto_jump,
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

  resetStepIndex() {
    this.currentStepIndex = 0;
  },

  initCheckboxStates() {
    if (this.step.type === 'question') {
      this.step.data.answers.map((answer) => {
        return Object.assign(answer, {checked: false});
      });
    }
  },

  toggleCheckbox(value) {
    this.step.data.answers.map((item) => {
      if (item.uuid === value) {
        item.checked = !item.checked;
      }
      return item;
    });
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
      this.increaseStepIndex();
    }
  },

  initSubmitButtonState() {
    this.submitButtonState = '';

    if (this.step.data.required) {
      this.submitButtonState = 'disabled';
    }
  },

  toggleSubmitButtonState() {
    this.step.data.answers.map((item) => {
      if (item.checked) {
        this.submitButtonState = '';
      }
    });
  },

  toggleBrowseButtonState() {
    const numSteps = this.stepsMap.length - 1;
    this.browseButtonState = {
      back: 'disabled',
      forward: ''
    };

    if (this.currentStepIndex > 0 && this.currentStepIndex <= numSteps) {
      this.browseButtonState = {
        back: '',
        forward: ''
      };

      if (this.step.data.required || this.currentStepIndex === numSteps) {
        this.browseButtonState = {
          back: '',
          forward: 'disabled'
        };
      }
    }
  }
};

export default StoreHelper;