/* jslint browser */
// Hebrews 10:26



/* Here is a web tutorial I used for creating the
automated responses within the q&a section
of the website.
https://www.htmlgoodies.com/javascript/basic-chatbot-in-javascript/
*/
document.addEventListener('DOMContentLoaded', function () {
   "use strict";

   // Possible questions the user has.
   const inputs = [
      ["do you believe in god", "are you christian", "christian"],
      ["when do you graduate", "graduation", "graduation date"],
      ["how would you describe yourself", "describe yourself"],
      ["whats up", "how are you"],
      ["hi", "hello", "heyy", "hey", "hii"],
      ["name", "whats your name", "your name"],
      ["whats your favorite langauge", "favorite langauage"],
      ["what languages do you know", "languages"],
      ["difference between c and c plus plus", "c vs c plus plus"],
      ["what colleges have you attended", "colleges", "what school did you go to"]
   ];

   // Possible responses based on the user's question
   const answers = [
      [
         "I believe Jesus and God are one. John 10:30",
         "I believe Jesus is the son of GOD. 1 John 4:15"
      ],
      [
         "I am expected to graduate in December 2023.",
         "My expected graduation date is in December 2023."
      ],
      [
         "I've been described as hardworking",
         "I've been told I'm focused"
      ],
      [
         "My mood may be different by the time you sent this" +
         "request, but thank you for asking. :)"
      ],
      [
         "Hello",
         "Howdy",
         "Hey there",
         "Hey :)"
      ],
      [
         "My name is Mitchell Brian Martin, but you can call me Mitchell.",
         "My first name is Mitchell.",
         "I am Mitchell Martin"
      ],
      [
         "I don't really have a preferred language" +
          "but I use Python and C++ quite a bit"
      ],
      [
         "Backend: C++, Python, Java, C, Bash-Scripting, MYSQL" +
         "Frontend: HTML, CSS, Javascript"
      ],
      [
         "C is a structured middle-level language, C++ is more OOP based"
      ],
      [
         "Angelo State University and Collin College",
         "Collin College and Angelo State University"
      ]
   ];
   // If the response is not answerable
   const resp_notfound = [
      "I don't understand?",
      "Can you reword that?"
   ];

   // Chooses an answer within the optional answers.
   function process(userArray, answerArray, string) {
      let item;
      let items;
      let x;
      let y;
      for (x = 0; x < userArray.length; x+=1) {
         for (y = 0; y < userArray[x].length; y+=1) {
            // If there is a match.
            if (userArray[x][y] === string) {
               items = answerArray[x];
               // Give a random response within the x index of the array.
               item = items[Math.floor(Math.random() * items.length)];
            }

         }
      }
      return item;
   }

   // Returns a response for the user's question.
   function complete_response(input) {
      let product;
      let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");

      if (process(inputs, answers, text)) {
         // If there is an available response to the user's request.
         product = process(inputs, answers, text);
      } else {
         // If there isn't an available response to the user's request.
         product = resp_notfound[Math.random() * resp_notfound.length];
      }

      return product;
   }

   // When the user submits their question, the response will
   // be processed in the following function
   document.querySelector("#submit").addEventListener("click", function () {
      let request;
      request = document.getElementById("ask").value;

      document.getElementById("ans").value = complete_response(request);
   });

   // Clears the contents of the answer screen.
   document.querySelector("#clear").addEventListener("click", function () {
      document.getElementById("ans").value = "";
   })
});