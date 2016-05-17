export const questions = {
  "uuid": "2788ba8f-f599-11e5-ac98-083dc5886500",
  "label": "Mood",
  "title": "Tell us about your mood",
  "description": "This description is the first you would read",
  "created": "2016-03-29 10:30:21",
  "updated": null,
  "steps": [
    {
      "type": "question",
      "uuid": "1574606c-fbde-11e5-b7f0-08002788ba8f",
      "label": "Future Sound",
      "title": "Do you hear the sound of the future?",
      "multi": false,
      "auto_jump": false,
      "required": false,
      "required_text": null,
      "answers": [
        {
          "uuid": "2da92d62-f590-11e5-ac98-08002788ba8f",
          "label": "Night",
          "title": "Only at night asda sasdasdasdasda sasdasdasdasda sasdasdasdasda",
          "next": null
        },
        {
          "uuid": "2da94668-f590-11e5-ac98-08002788ba8f",
          "label": "Father",
          "title": "No, but my father did.",
          "next": null
        },
        {
          "uuid": "568be335-f590-11e5-ac98-08002788ba8f",
          "label": "No",
          "title": "No, absolutely no!",
          "next": null
        },
        {
          "uuid": "568bfbe3-f590-11e5-ac98-08002788ba8f",
          "label": "Yes",
          "title": "Yes, and I like it.",
          "next": "08001574-fbde-11e5-b7f0-2788ba8f6252"
        },
        {
          "uuid": "3df81bdf-f743-11e5-b723-08002788ba8f",
          "label": "Deaf",
          "title": "Turn a Deaf Ear",
          "next": null
        }
      ]
    },
    {
      "type": "question",
      "uuid": "61b31574-d765-ba8f-b7f0-0800edfh11e5",
      "label": "Voices",
      "title": "Do you hear voices from beyond?",
      "multi": true,
      "auto_jump": true,
      "required": false,
      "required_text": null,
      "answers": [
        {
          "uuid": "821c7989-f590-11e5-ac98-08002788ba8f",
          "label": "Wednesdays",
          "title": "On Wednesdays",
          "next": null
        },
        {
          "uuid": "821ca38d-f590-11e5-ac98-08002788ba8f",
          "label": "In the night",
          "title": "In the night",
          "next": null
        },
        {
          "uuid": "baee966c-f590-11e5-ac98-08002788ba8f",
          "label": "Leaves Falling",
          "title": "When the leaves are falling",
          "next": null
        },
        {
          "uuid": "baf208b9-f590-11e5-ac98-08002788ba8f",
          "label": "Sometimes",
          "title": "Sometimes even I don't hear anything though.",
          "next": null
        }
      ]
    },
    {
      "type": "question",
      "uuid": "08001574-fbde-11e5-b7f0-2788ba8f6252",
      "label": "Disko Dancing",
      "title": "Have you ever danced in front of a loudspeaker in the disko?",
      "multi": true,
      "auto_jump": false,
      "required": true,
      "required_text": "This should really be answered!",
      "answers": [
        {
          "uuid": "2a0ed619-fbab-4ce5-994b-3c0f236d6478",
          "label": "Never",
          "title": "Never",
          "next": null
        },
        {
          "uuid": "3d01b386-8ddb-47d3-a321-3196b92035db",
          "label": "Often",
          "title": "Really Often",
          "next": null
        },
        {
          "uuid": "8eaa0eb5-e3bb-464c-9c78-c0f9c9f0e83e",
          "label": "Once",
          "title": "Only Once",
          "next": null
        },
        {
          "uuid": "77b62f27-aacf-48b0-be93-ec122ded7bed",
          "label": "Again",
          "title": "Say it again",
          "next": null
        }
      ]
    },
    {
      "type": "page",
      "uuid": "71eb4a56-fbe0-11e5-b7f0-08002788ba8f",
      "label": "Success Page",
      "body": "<h1>Congratulations!</h1>\r\n<p>You passed the test, you bring it to the end. All work is done.</p>\r\n<p>Now please be patient till we call you back. <strong>Really do not call us!</strong></p>\r\n<p>If you like you can watch&nbsp;youtube videos or go out into the forest and&nbsp;look for the sound of a humming bird. You're free to do what ever you want. That is what mankind was always aiming for.</p>",
      "created": "06.04.2016 10:09:45"
    }
  ]
};

export default questions;