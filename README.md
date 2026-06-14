# testify

[See the backend](https://github.com/kahonker/testify-backend)

## About

Testify is an AI powered app that generates a practice test based on a requested subject.\

It can make a test about any topic

## Running the app (back end)

git clone <https://github.com/kahonker/testify-frontend.git>\
cd testify-frontend/testify\
npm install\
npm run dev

## Contributions (front end)

Alexey - did everything\
Si Hang - did nothing

## Agent Reflections

I used an AI agent to do all of the styling.\
\
These were my prompts:\
\
I need you to make the css styling. For now start with the main menu. I want the main h1 text and the form to be at the center both horizontally and vertically, with a relatively small (~100px) gap between them. As for the form itself (not the questions, the form on the main page), I want all of the elements in it to be in a single row, making it look like one single element. Something similar to how ai chats look. Don't do anything aside from these things for now, and only stick to the colors in the variables.\
\
Now lets go on to the QuestionView.svelte and Question.svelte. I want the buttons for going back/forward/submitting to be at the respective bottom corners, they should all be styled the same. I want the question to be in a box at the center horizontally that takes up the whole height of the screen, and 50% in width, with a border only on the sides. I want the question to be aligned to the left, and the answer options to be aligned at the center of the box, horizontally and vertically. The answer options should not have a radial circle next to it, and should instead be indicated as selected by another color different from the default. There isn't a class for this yet, nor is there code that sets a class for the selected answer, but I will do that later, just make the class in the css as needed. At the end of the QuestionView, after all the questions are complete, there is a screen where you can choose to go to a specific question. I want the "You finished" text and the buttons to be in the same styled box as the questions, centered horizontally and vertically (although if the question buttons run out of rows to fill, they should go on to the next row and start from the left). The last thing i want is for unanswered questions to have a different color from the answered ones. Like with the request I had for question answer styles, there isn't a class or functionality for this yet, so make the class in the css and I will implement it myself.\
\
Give me code that will make the send button in Main.svelte to not able to be pressed when a request was sent and make it show a loading circle instead of the arrow during the wait.\
\
Now, in the Result.svelte there is is a place for the answer you chose, the correct answer, and the explanation. can you make each of the divs a "card" to separate it from the rest of the question\
\
All of the prompts worked well enough for my liking. The only problem that the AI had once is that it used the wrong class in css.\
\
I learned that you need to be very specific with AI.
