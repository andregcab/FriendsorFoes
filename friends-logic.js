let gameQuestionsArray = [

  {
    question: 'Your friend calls you from the police station. They got arrested for',
    answer: 'eValue',
    randoms: [{a: 'Fighting' },{b: 'Streaking'},{c: 'Protesting'},{d: 'Speeding'}]
  },
  {
    question: 'Your friend calls you and tells you they won the lottery. The first thing they do is',
    answer: 'eValue',
    randoms:[{a: 'Pay off all their loans'},{b: 'MAKE IT RAIN'},{c: 'Look for a charity to donate half to'},{d: 'Nothing becasause they lost the lottery ticket'}]
  },
  {
    question: 'You get back together with your ex, your friend proceeds to',
    answer: 'eValue',
    randoms:[{a: 'Pray for you'},{b: 'Finally hire that assasin'},{c: 'Lock you in a basement and tell your ex you died'},{d: 'Nothing because you are no longer friends now'}]
  },
  {
    question: 'Your friendship exists because',
    answer: 'eValue',
    randoms:[{a: 'Of a spcific event that bonded the two of you'},{b: 'You hate all the same people'},{c: 'Idk man it just works'},{d: '"Friendship" is a strong word...'}]
  },
  {
    question: 'Your friend wants to retire...',
    answer: 'eValue',
    randoms:[{a: 'With a gold watch when they turn 65'},{b: 'As late as possible because they enjoy work'},{c: 'Never because they dont save and social security isnt a thing anymore'},{d: 'Tomorrow'}]
  },
  {
    question: 'Your friends idea of a perfect night out is',
    answer: 'eValue',
    randoms:[{a: 'Drinks, laughs and home at a reasonable time'},{b: 'The one they dont remember'},{c: 'Acting like they are going and then cancelling last minute'},{d: 'Anything as long as its on a couch'}]
  },
  {
    question: 'Your friend gets challened to a street race and they',
    answer: 'eValue',
    randoms:[{a: 'Floor it'},{b: 'Quotes Fast and the Furious and then floors it'},{c: 'Would never because its illegal'},{d: 'Gets smoked by a Prius'}]
  },
  {
    question: 'Your friends idea of fashion is',
    answer: 'eValue',
    randoms:[{a: 'The Yeezy Boost 700s'},{b: 'Gucci slides'},{c: 'Sperry boat shoes'},{d: 'Crocs with socks'}]
  },
  {
    question: 'Your friend is a rap artist and their stage name is',
    answer: 'eValue',
    randoms:[{a: 'Lil Dolla Sign'},{b: 'Lil Bitcoin'},{c: 'Lil Meow Meow'},{d: 'Lil Global Warming'}]
  },
  {
    question: 'You hand your friend the AUX cord, what do they play?',
    answer: 'eValue',
    randoms:[{a: 'Old Town Road'},{b: 'K Pop'},{c: 'Drakes Early Albums'},{d: 'Vaporwave'}]
  },
  {
    question: 'Your freind drives like',
    answer: 'eValue',
    randoms:[{a: 'James Bond chasing a villian'},{b: 'Spongebob trying to get his license'},{c: 'They are transporting a wedding cake'},{d: 'A normal responsible driver'}]
  },
  {
    question: 'What is your friends biggest pet peeve',
    answer: 'eValue',
    randoms:[{a: 'People who dont use a turning signal'},{b: 'People who dont use an Oxford Comma'},{c: 'People who litter'},{d: 'People that dont say thank you when you hold a door open'}]
  },
  {
    question: 'You lost a bet and your friend gets to choose your tattoo. They choose',
    answer: 'eValue',
    randoms:[{a: 'A portriat of their own face'},{b: 'A nice Kermit The Frog'},{c: 'They are a good sport and let you choose'},{d: '"No Ragrets"'}]
  },
  {
    question: 'Your friends idea of exercise is',
    answer: 'eValue',
    randoms:[{a: 'Yoga'},{b: 'Parkour through the street'},{c: 'Walking up the stairs'},{d: 'Sports'}]
  },
  {
    question: 'Your friend thinks you have a ______ sense of humor',
    answer: 'eValue',
    randoms:[{a: 'Dark'},{b: 'Strange'},{c: 'Corny'},{d: 'Hilarious'}]
  },
  {
    question: 'Your friends thoughts on aliens is',
    answer: 'eValue',
    randoms:[{a: 'Cant wait to meet them, my bags are packed'},{b: 'We would have found them by now'},{c: 'Terrifed of becoming alien slaves'},{d: 'I wonder if they like our memes LOL'}]
  },
  {
    question: 'Your friend won a week all-expenses-paid vacation. Where are they going?',
    answer: 'eValue',
    randoms:[{a: 'Eating tour through Italy'},{b: 'Tropical island resport'},{c: 'Guided climb up Kilimanjaro'},{d: 'Yoga Retreat'}]
  },
  {
    question: 'Your friends favorite bar is a',
    answer: 'eValue',
    randoms:[{a: 'Protien Bar'},{b: 'Pull-up Bar'},{c: 'Chocolate Bar'},{d: 'Where they serve alcohol'}]
  },
  {
    question: 'The one thing your friend cant go to the beach without',
    answer: 'eValue',
    randoms:[{a: 'Suncreen'},{b: 'Speaker for music'},{c: 'Snacks'},{d: 'Umbrella'}]
  },
  {
    question: 'Your friends favorite section in Publix is the',
    answer: 'eValue',
    randoms:[{a: 'Cheese section'},{b: 'Fruits and Vegetables'},{c: 'Bakery'},{d: 'Deli'}]
  },
  {
    question: 'Your friend has to give up one forever',
    answer: 'eValue',
    randoms:[{a: 'Chipotle'},{b: 'McDonalds'},{c: 'Chick-Fil-A'},{d: 'Pollo Tropical'}]
  },
  {
    question: 'Your friend has to give up one forever',
    answer: 'eValue',
    randoms:[{a: 'Publix Subs'},{b: 'Driving over the speed limit'},{c: 'Using the word "bro"'},{d: 'Going to Wynwood'}]
  },
  {
    question: 'If your friend was a villan they would prefer to be',
    answer: 'eValue',
    randoms:[{a: 'The Joker'},{b: 'Cersei Lannister'},{c: 'Dr. Evil'},{d: 'Darth Vader'}]
  }

]











class TheFriendsGame {
  constructor(){
    this.questionArray = gameQuestionsArray
    this.currentQuestion
    this.p1Score = 0
    this.p2Score = 0
    this.letters = 'abcd'
    this.player1Turn = true
    this.answerAndGuessArray = []
    // this.round = 0
    this.clickLock = true;
    this.gameStarted = false
    this.player1 = ''
    this.player2 = ''
    this.name1Only = $('#p1Name')[0].textContent.split(" ")
    this.name2Only = $('#p2Name')[0].textContent.split(" ")
  }

  testVars(){
    console.log(this.player1)
    console.log(this.player2)
  }


  chooseQuestion(){

    this.currentQuestion = gameQuestionsArray[Math.floor(Math.random()*gameQuestionsArray.length)]
    // console.log(this.currentQuestion.question)
    // console.log(this.currentQuestion.randoms[0].a)
    // console.log(this.currentQuestion.randoms[1].b)
    // console.log(this.currentQuestion.randoms[2].c)
    // console.log(this.currentQuestion.randoms[3].d)

    $('#current-question').text(this.currentQuestion.question)
    $('#qa').text(`${this.currentQuestion.randoms[0].a}`)
    $('#qb').text(`${this.currentQuestion.randoms[1].b}`)
    $('#qc').text(`${this.currentQuestion.randoms[2].c}`)
    $('#qd').text(`${this.currentQuestion.randoms[3].d}`)
    

  }

  checkClickedLetters (key) {

    if(this.letters.includes(key)){
      return true
    } else {
      return false
    }
  
  };
 
  removeQuestionFromArray(){

    this.questionArray.splice(this.questionArray.indexOf(this.currentQuestion), 1)

  }

 

  compareAnswers(){
    console.log('....checking....')
  
    if(this.answerAndGuessArray[0] === this.answerAndGuessArray[1]){
      return true
    } else {
      return false
    }
  
  }



  checkWinner(){
    if(this.p1Score === 5 || this.p2Score === 5 || this.questionArray.length === 0){
      return true
    } else {
      return false
    }
  }




}


$('#error').hide()

let friendsGame = new TheFriendsGame();






$('#start-game-button').click(function() {
  
  friendsGame.player1 = $('#player1')[0].value
  friendsGame.player2 = $('#player2')[0].value
  
  if(friendsGame.gameStarted === false){
  if(friendsGame.player1 && friendsGame.player2){
    console.log(friendsGame.player1)
    console.log(friendsGame.player2)
    $('#p1Name')[0].textContent += (`${friendsGame.player1} Score`)
    $('#p2Name')[0].textContent += (`${friendsGame.player2} Score`)
    
    friendsGame.name1Only = $('#p1Name')[0].textContent.split(" ")
    friendsGame.name2Only = $('#p2Name')[0].textContent.split(" ")

    
 
    friendsGame.chooseQuestion()
    friendsGame.gameStarted = true
    $('#error').fadeOut("fast")
    $('.top-div').fadeOut(2000)

    $('#your-turn-go').text(`Nice to meet you ${friendsGame.name1Only[0]} and ${friendsGame.name2Only[0]} . Welcome to FRIENDS or FOES! Lets begin`)

    setTimeout(()=>{
      $('#your-turn-go').text(`My name is Regis and I'll be your host. Let me go over the rules quickly`)
    },6000)

    setTimeout(()=>{
      $('#your-turn-go').text(`It's ${friendsGame.name1Only[0]}'s turn which means ${friendsGame.name2Only[0]} will set the answer with the A, B, C or D key.`)
    },11000)

    setTimeout(()=>{
      $('#your-turn-go').text(`Then ${friendsGame.name1Only[0]} will try to guess the right answer using the same keys. Let's find out if these two are
      FRIENDS or FOES!`)
    },16000)

    setTimeout(()=>{
      $('#your-turn-go').text(`${friendsGame.name2Only[0]} you're up! Choose the answer that most applies to YOU.`)
    },20000)


  } else {
    console.log('cant start the game without both names!')
    $('#your-turn-go').text('Cant start the game without both names!')
    $('#error').fadeIn("slow")
  }
}
});






$(document).keydown(function(e){ //checks what key was pressed

    // console.log(friendsGame.player1Turn)

    let selectedLetter = e.key; //assigns the key to a variable
  
    if(friendsGame.checkClickedLetters(selectedLetter) && friendsGame.gameStarted === true){ // making sure the key pressed is either A B C or D
     friendsGame.answerAndGuessArray.push(selectedLetter) //pushes the letter to the temporary array
     if(friendsGame.player1Turn === true){
      $('#your-turn-go').text(`${friendsGame.name1Only[0]}, think you know your friend? Let's find out!`)
    } else {
      $('#your-turn-go').text(`${friendsGame.name2Only[0]}, think you know your friend? Let's find out!`)
    }
     console.log(`the letter you selected is ${selectedLetter}`)
     console.log(`the array now has ${friendsGame.answerAndGuessArray}`)

      if(friendsGame.answerAndGuessArray.length == 2){ //if there are 2 inputs to compare then proceed // && friendsGame.clickLock === true
 
        if(friendsGame.compareAnswers()){  //if the inputs equal each other....

          // console.log(`is it player 1's turn? ${friendsGame.player1Turn}`)
          // friendsGame.clickLock = false
          if(friendsGame.player1Turn){ //if the current turn is player 1...
            friendsGame.p1Score += 1 // add one to player 1 score
            friendsGame.player1Turn = false // change current turn to player 2
            $('#p1Score').text(friendsGame.p1Score) // changes the score on the screen
            console.log(`player 1 score is now ${friendsGame.p1Score}`)
            console.log("You guessed correct, you know you friend well")
            $('#your-turn-go').text(`${friendsGame.name1Only[0]}, you guessed correct, you know your friend well :)`)
            console.log(`its player 2s turn`)
          } else {
            friendsGame.p2Score += 1 //add one to player 2 score
            friendsGame.player1Turn = true // change turn back to player 1
            $('#p2Score').text(friendsGame.p2Score) // changes the score on the screen
            console.log(`player 2 score is now ${friendsGame.p2Score}`)
            console.log("You guessed correct, you know you friend well")
            $('#your-turn-go').text(`${friendsGame.name2Only[0]}, you guessed correct, you know your friend well :)`)
            console.log(`its player 1s turn`)
          }


        } else { //if the two inputs don't match
          if(friendsGame.player1Turn){
            friendsGame.player1Turn = false;
          }else{
            friendsGame.player1Turn = true;
          } 
          // friendsGame.clickLock = false
          console.log("You guessed wrong, what kind of friend are you  :(")
          $('#your-turn-go').text('You guessed wrong, what kind of friend are you  :(')
          
        }

          if(friendsGame.checkWinner()){ // after every turn check if either player has reached 5 points
            setTimeout(function(){
              if(friendsGame.player1Turn){
              alert(`Game Over! ${friendsGame.name2Only[0]} wins!`)
              } else{
                alert(`Game Over! ${friendsGame.name1Only[0]} wins!`)
              }
            }, 500);

            setTimeout(function(){
              location.reload();
            }, 1000);
            
          } 

          setTimeout(function(){
            $('#your-turn-go').text('Please click "Next Question" to continue!')
            friendsGame.clickLock = false;
          }, 2000);

          
          // friendsGame.round += 1
          // friendsGame.player1Turn = true;
        
      } else if(friendsGame.answerAndGuessArray.length > 2 ){ //&& friendsGame.clickLock === false
        // friendsGame.clickLock = true;
        $('#your-turn-go').text('Someone needs to click NEXT QUESTION')
      }

    } else {
    console.log('invalid selection')
  }




});



$('#next-question').click(function() {  

  // if(friendsGame.clickLock === false){
    if(friendsGame.player1Turn === true){
     $('#your-turn-go').text(`${friendsGame.name2Only[0]}, you're up! Choose the answer that most applies to YOU.`)
    } else {
     $('#your-turn-go').text(`${friendsGame.name1Only[0]}, you're up! Choose the answer that most applies to YOU.`)
    }
  
  
    friendsGame.answerAndGuessArray = []; //empty the array
    friendsGame.removeQuestionFromArray(); // remove the current question from the array
    friendsGame.chooseQuestion(); //choose a new question
    friendsGame.clickLock = true
  // }
});









//     console.log('your turn player 2!')

//     answerAndGuessArray.push(selectedLetter)

//       if(answerAndGuessArray.length == 2) {
//         if(answerAndGuessArray[0] === answerAndGuessArray[1]) {
//           console.log("You guessed correct, you know you friend well")
//         } else {
//           console.log("You guessed wrong, what kind of friend are you   :(")
//         }
//         answers = [];
//         friendsGame.chooseQuestion();
//         friendsGame.removeQuestionFromArray();
//       }
  
//   } else {
//     console.log('Thats not a valid choice!')
//   }
// });








  // let player1Turn = 1
  // let answerAndGuessArray = []

//   if(player1Turn === 1) {

//     $(document).keydown(function(e){ //checks what key was pressed

//      let selectedLetter = e.key; //assigns the key to a variable

//      if(friendsGame.checkClickedLetters(selectedLetter)){

//        answerAndGuessArray.push(selectedLetter)

//         if(answerAndGuessArray.length == 2) {
//           if(answerAndGuessArray[0] === answerAndGuessArray[1]) {
//             console.log("You guessed correct, you know you friend well")
//             friendsGame.p1Score += 1
//             console.log(`Player 1 score is now ${friendsGame.p1Score}`)
//           } else {
//             console.log("You guessed wrong, what kind of friend are you   :(")
//           }
//           answers = [];
//           player1Turn += 1
//           friendsGame.chooseQuestion();
//           friendsGame.removeQuestionFromArray();
//           console.log('your turn player 2')
//           console.log(player1Turn)
//           console.log(answers)
//         }
//       } 
//     })
//   } else if(player1Turn === 2) {

//     $(document).keydown(function(e){ //checks what key was pressed
//       console.log(e.key)

//       let selectedLetter = e.key; //assigns the key to a variable

//       if(friendsGame.checkClickedLetters(selectedLetter)){

//         answerAndGuessArray.push(selectedLetter)

//         if(answerAndGuessArray.length == 2) {
//           if(answerAndGuessArray[0] === answerAndGuessArray[1]) {
//             console.log("You guessed correct, you know you friend well")
//             friendsGame.p2Score += 1
//             console.log(`Player 2 score is now ${friendsGame.p2Score}`)
//           } else {
//             console.log("You guessed wrong, what kind of friend are you   :(")
//           }
//           answers = [];
//           player1Turn -= 1
//           friendsGame.chooseQuestion();
//           friendsGame.removeQuestionFromArray();
//           console.log('your turn player 1')
//         }
//       } 
//     })
//   }




// $('#next-question').click(function() {  
//   if(!friendsGame.checkWinner()){

//     friendsGame.chooseQuestion()



//   } else {
//     console.log('game over!')
//   }

// });



