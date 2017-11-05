'use strict';
const Alexa = require('alexa-sdk');

const APP_ID = undefined;

const WELCOME_MESSAGE = "Welcome to the plusOneSecond game. In this game, you need to fully use wisdom and think very calm. If you ever feel any discomfort during the game, you could stop the by calling stop. Now are you sure to play the game right now?";

const ENTER_GAME_MESSAGE = "Thank you for your playing, In order to start the game please call start. And please remember keep yourslef survive";

const STOP_GAME_MESSAGE = "Are you sure to stop the game right now? Or you can restart the game now.";

const GAME_OVER_MESSAGE = "Sorry, Peter was killed by zombies. You could choose to play again or exit the game.";

const EXIT_SKILL_MESSAGE = "Thank you for playing! Let's play again soon!";

const Story_MESSAGE_1_1 = "Hey, Hey. Is that thing work? Damn, does any one could heard me?";

const Story_MESSAGE_2_1 = "Oh, Is someone there! I heard you dude! Thank god! It's so so glad happy that I can connect with you. I have waitted for the connection several hours, you are the first one that I heard!\
 There are two dark chimneys coming south of my compass, I guess it is the wreckage of the Veria. I want to see it, do you think should I go there?";

const Story_MESSAGE_3_1 = "Yes it makes sense, hope I can find other survivors from there. At least I think I can get find some useful things from it.\
                           Oh man, there is as scary as the end of the world. It looks like the cockpit and the crew area are in different directions. Which one do you think I should go first? The Cockpit or the crew area?" ;

const Story_MESSAGE_3_2 = "Hi I know it could be very dangerous, but I think I still need to try it. Stay in here make no sense to me. My friend please bless for me. hope I can find other survivors from there. At least I think I can get find some useful things from it.\
Oh man, there is as scary as the end of the world. It looks like the cockpit and the crew area are in different directions. Which one do you think I should go first? The Cockpit or the crew area?\
";

const Story_MESSAGE_4_1 = "Okay, While I need some time to check the wreck.                      Most of the insulation will fall off when it enters the atmosphere, but fortunately most of the spacecragt's damage is only on the outer layer as well.\
               Oh my god! Captain is not dead! She is still alive.                      A thing pierced her body, she was bleeding, a lot of blood. What should I do? Should I pull it out?";

const Story_MESSAGE_4_2 = "Oh, finally get there. Hope Tom is still alive. It's so dark inside, ouch, what's this! Fuck off. Who can come and help me! My leg! Please someone help me! help me!";
 //Dead
 const Story_MESSAGE_5_1 = "Oh let me see. She is bleeding! She will die If I pull out the knife, I must not do that. I need to find some medicine, I remember some is in the kitchen, should I go there \
 alone, or should I carry captain with me ?"; 

const Story_MESSAGE_5_2 = "I agree, her status is so terrible. If we pull it, we may cause he irreparable harm. We should go to find something ot help her.\
I remember all the medicine were stored in the kitchen, but should I go to the kitchen alone, or carry the captain with me?";

const Story_MESSAGE_6_1 = "I had better go to find some medicine for her, but I can't take her with me, she is too weak to walk, those zombies will come to eat her! I will go to find it myself ! \
I am a brave man. women, that is no difference, the most imporant thing is to save life ! Oh Ha ! I find medicine in the kitchen, I need speed up to get that to captain. Ha Ha Ha I am so proud of \
myself, I saved capitan's life ! Now captain want me to close the door of crew area .. Should I go to close the door ? I am very afraid of zombies, and the driving room is safe, no one will come here.";

const Story_MESSAGE_6_2 = "Take her with me is a disaster, I should not move her at all. Oh my dear Captain, hope you will be happy in the heaven. And my friend what should I do now. We havent been\
to the crew area now, should we move to there? I think there still has some one alive.";

const Story_MESSAGE_7_1 = "I need to close the door of the crew area, otherwise those zombies will, and Capation and I can not defeat that ! Ok, I will go ! Nothing shall pass";

const Story_MESSAGE_7_2 = "No its too dangerous to close the door. While I could not tell captain this, it is not good to her body. Okay captain, I will close it later, while now I need to find\
something for you to eat, you need eat something first.";

const Story_MESSAGE_7_3 = "Oh, its so dark here. Does anybody here? Hey! Ouch, who are biting me now! Filter, oh its you, my friend? You looks so wired.\
do not close me. I warn you do not to me. Ah, ah, ah, does some one here? Please help me? Ah, ah, ah.";//Dead

const Story_MESSAGE_8_1 = "There is a gun and a iron spike here in the driving room, what should I take with me ? Do zombies afraid of bullets ?";

const Story_MESSAGE_8_3 = "Who are you? Oh Captain, whats wrong with you? Are you okay now! ah, ah, ah, why you bite me? Oh please, let me go. Someone comes to help me!\
I do not want to die now. ah, ah.";//Dead

const Story_MESSAGE_9_1 = "No No No No So many zombies, they are heading to me. What should I do ? should I fight with them, I have a gun with me. It gives me at least some peace";

const Story_MESSAGE_10_1 = "Taylar is dead, the gun has no bullets in it, it is useless";


const states = {
    START: "_START",
    STOP: "_STOP",
    GameOver: "_GameOver",
    Exit: "_Exit",
    _1_1: "._1_1",
    _2_1: "._2_1",
    _3_1: "._3_1",
    _4_1: "._4_1",
    _4_2: "._4_2",
    _5_1: "._5_1",
    _5_2: "._5_2",
    _6_1: "._6_1",
    _6_2: "._6_2",
    _7_1: "._7_1",
    _7_2: "._7_2",
    _7_3: "._7_3",
    _8_1: "._8_1",
    _8_2: "._8_2",
    _8_3: "._8_3",
    _9_1: "._9_1",
    _9_2: "._9_2",
    _10_1: "._10_1",
    _10_2: "._10_2"
};

const handlers = {
    "LaunchRequest": function() {
       this.handler.state = states.START;
       this.emitWithState("Start");
    }
};

const startHandlers = Alexa.CreateStateHandler(states.START,{
    "Start": function() {
        this.response.speak(WELCOME_MESSAGE).listen();
        this.emit(":responseReady");
    },
    
    "startIntent":function() {
        this.handler.state =  states._1_1;
        this.emitWithState("Story");
    },

    "StopIntent": function() {
        this.handler.state =  states.STOP;
        this.emitWithState("Stop");
    }
});

const stopHandlers = Alexa.CreateStateHandler(states.STOP, {
    "Stop": function(){
        this.response.speak(STOP_GAME_MESSAGE);
        this.emit(":responseReady");
    },

    "restartIntent": function() {
        this.handler.state = states.START;
        this.emitWithState("Start");
    },

    "exitIntent": function() {
        this.handler.state = states.Exit;
        this.emitWithState("Exit");
    }
});

const gameoverHandlers = Alexa.CreateStateHandler(states.GameOver, {
    "GameOver": function(){
        this.response.speak(GAME_OVER_MESSAGE).listen();
        this.emit(":responseReady");
    },

    "restartIntent": function() {
        this.handler.state = states.START;
        this.emitWithState("Start");
    },

    "exitIntent": function() {
        this.handler.state = states.Exit;
        this.emitWithState("Exit");
    }
});

const exitHandlers = Alexa.CreateStateHandler(states.Exit, {
    "Exit": function() {
        this.response.speak(EXIT_SKILL_MESSAGE);
        this.emit(":responseReady");
    }
});

const _1_1Handlers = Alexa.CreateStateHandler(states._1_1,{
    "Story": function() {
        this.response.speak(Story_MESSAGE_1_1).listen();
        this.emit(":responseReady");
    },
    
    "A_AIntent":function() {
        this.handler.state =  states._2_1;
        this.emitWithState("Story");
    },

    "StopIntent": function() {
        this.handler.state =  states.STOP;
        this.emitWithState("Stop");
    }
});

const _2_1Handlers = Alexa.CreateStateHandler(states._2_1,{
    "Story": function(){
        this.response.speak(Story_MESSAGE_2_1).listen();
        this.emit(":responseReady");
    },

    "B_AYesIntent":function() {
        this.handler.state = states._3_1;
        this.emitWithState("Story1");
    },

    "B_ANoIntent":function() {
        this.handler.state = states._3_1;
        this.emitWithState("Story2");
    },

    "StopIntent": function() {
        this.handler.state =  states.STOP;
        this.emitWithState("Stop");
    }
});

const _3_1Handlers = Alexa.CreateStateHandler(states._3_1,{
    "Story1": function(){
        this.response.speak(Story_MESSAGE_3_1).listen();
        this.emit(":responseReady");
    },

    "Story2": function(){
        this.response.speak(Story_MESSAGE_3_2).listen();
        this.emit(":responseReady");
    },

    "C_AYesIntent":function() {
        this.handler.state = states._4_1;
        this.emitWithState("Story4");
    },

    "C_ANoIntent":function() {
        this.handler.state = states._4_2;
        this.emitWithState("Story4");
    },

    "StopIntent": function() {
        this.handler.state =  states.STOP;
        this.emitWithState("Stop");
    }
});


const _4_1Handlers = Alexa.CreateStateHandler(states._4_1, {
    "Story4": function () {
       this.response.speak(Story_MESSAGE_4_1).listen();
       this.emit(":responseReady");
   },

   "D_AYesIntent": function(){
       this.handler.state = states._5_1;
       this.emitWithState("Story5");
   },

   "D_ANoIntent": function() {
        this.handler.state = states._5_2;
        this.emitWithState("Story5");
   },

   "StopIntent": function () {
       this.handler.state = states.STOP;
       this.emitWithState("Stop");
   },
});

const _4_2Handlers = Alexa.CreateStateHandler(states._4_2,{
    "Story4":function() {
        this.response.speak(Story_MESSAGE_4_2);
        this.handler.state = states.GameOver;
        this.emitWithState("GameOver");
    },

    "StopIntent": function() {
        this.handler.state = states.STOP;
        this.emitWithState("Stop");
    }
});


const _5_1Handlers = Alexa.CreateStateHandler(states._5_1, {
    "Story5": function () {
        this.response.speak(Story_MESSAGE_5_1).listen();
        this.emit(":responseReady");
    },

    "E_AYesIntent": function () {
        this.handler.state = states._6_1;
        this.emitWithState("Story");
    },
    "E_ANoIntent": function () {
        this.handler.state = states._6_2;
        this.emitWithState("Story");
    }
});

const _5_2Handlers = Alexa.CreateStateHandler(states._5_2,{
    "Story5":function() {
        this.response.speak(Story_MESSAGE_5_2).listen();
        this.emit(":responseReady");
    },

    "E_BIntent":function() {
        this.handler.state = states._6_2;
        this.emitWithState("Story");
    },
    
    "StopIntent": function() {
        this.handler.state =  states.STOP;
        this.emitWithState("Stop");
    }
});


const _6_1Handlers = Alexa.CreateStateHandler(states._6_1, {
    "Story": function () {
        this.response.speak(Story_MESSAGE_6_1).listen();
        this.emit(":responseReady");
    },
    "F_AYesIntent": function () {
        this.handler.state = states._7_1;
        this.emitWithState("Story");
    },
    "F_ANoIntent": function () {
        this.handler.state = states._7_2;
        this.emitWithState("Story");
    }
});

const _6_2Handlers = Alexa.CreateStateHandler(states._6_2,{
    "Story":function() {
        this.response.speak(Story_MESSAGE_6_2).listen();
        this.emit(":responseReady");
    },

    "F_BIntent":function() {
        this.handler.state = states._7_3;
        this.emitWithState("Story");
    },

    "StopIntent": function() {
        this.handler.state =  states.STOP;
        this.emitWithState("Stop");
    }
});

const _7_1Handlers = Alexa.CreateStateHandler(states._7_1, {
    "Story": function () {
        this.response.speak(Story_MESSAGE_7_1).listen();
        this.emit(":responseReady");
    },
    "G_AYesIntent": function () {
        this.handler.state = states._8_1;
        this.emitWithState("Story");
    },
    "G_ANoIntent": function () {
        this.handler.state = states._8_2;
        this.emitWithState("Story");
    }
});

const _7_2Handlers = Alexa.CreateStateHandler(states._7_2,{
    "Story":function() {
      this.response.speak(Story_MESSAGE_7_2).listen();
      this.emit(":responseReady");
    },
    
    "H_CIntent": function() {
        this.handler.state = states._8_3;
        this.emitWithState("Story");
    },

    "StopIntent": function() {
        this.handler.state =  states.STOP;
        this.emitWithState("Stop");
    }
});

const _7_3Handlers = Alexa.CreateStateHandler(states._7_3,{
    "Story":function() {
        // this.response.speak(Story_MESSAGE_7_3);
        this.handler.state = states.GameOver;
        this.emitWithState("GameOver");
    },
    
    "StopIntent": function() {
        this.handler.state =  states.STOP;
        this.emitWithState("Stop");
    }
});

const _8_1Handlers = Alexa.CreateStateHandler(states._8_1, {
    "Story": function () {
        this.response.speak(Story_MESSAGE_8_1).listen();
        this.emit(":responseReady");
    },
    "H_AYesIntent": function () {
        this.handler.state = states._9_1;
        this.emitWithState("Story");
    },
    "H_ANoIntent": function () {
        this.handler.state = states._9_2;
        this.emitWithState("Story");
    }
});

const Story_MESSAGE_8_2 = "I need to be careful my friend, both of us dont know what I may meet. It may be a crowd of zombies, they may use my blood as drink\
grilled my bone as food. And they could be the most evil creatures in this world. They also could be SpongeBob, What? What! What? Serioulsy?";

const _8_2Handlers = Alexa.CreateStateHandler(states._8_2,{
    "Story":function() {
        this.response.speak(Story_MESSAGE_8_2).listen();
        this.emit(":responseReady");
    },

    "StopIntent":function(){
        this.handler.state =  states.STOP;
        this.emitWithState("Stop");
    }
});


const _8_3Handlers = Alexa.CreateStateHandler(states._8_3,{
    "Story":function() {
        this.response.speak(Story_MESSAGE_8_3);
        this.handler.state = states.GameOver;
        this.emitWithState("GameOver");
    },
    
    "StopIntent": function() {
        this.handler.state =  states.STOP;
        this.emitWithState("Stop");
    }
});

const _9_1Handlers = Alexa.CreateStateHandler(states._9_1, {
    "Story": function () {
        this.response.speak(Story_MESSAGE_9_1).listen();
        this.emit(":responseReady");
    },
    "I_AYesIntent": function () {
        this.handler.state = states._10_1;
        this.emitWithState("Story");
    },
    "I_ANoIntent": function () {
        this.handler.state = states._10_2;
        this.emitWithState("Story");
    }
});

const _9_2Handlers = Alexa.CreateStateHandler(states._9_2, {
        
    "Story": function () {
        let speech = "My Deer Friend !";
            speech += "You are lucky! There are many possibilities that you will die, but now you lived!";
            speech += "Thanks for playing ! Because you are so lucky, I will sing a song for you";
            speech += "soft kitty warm kitty, little ball of fur, happy kitty sleepy kitty, purr purr purr";
        this.response.speak(speech);
        this.emit(":responseReady");
    }
});



const _10_1Handlers = Alexa.CreateStateHandler(states._10_1, {
    "Story": function () {
        this.response.speak(Story_MESSAGE_10_1).listen();
        this.emit(":responseReady");
    }
});


const _10_2Handlers = Alexa.CreateStateHandler(states._10_2,{
    "Story": function(){
        let speech = "Congradulations ! You runs and unfortunately you are slower then zombies, and you are dead";
        speech += "But you runs, a good choice, Although it makes no sense";
        speech += "Tell you that , this planet exploded after you died, so everything actually makes no sense";
        speech += "Good Bye my Friend";
        this.response.speak(speech);
        this.emit(":responseReady");
    }
});

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers, startHandlers, stopHandlers, gameoverHandlers, exitHandlers, 
                            _1_1Handlers, _2_1Handlers, _3_1Handlers, _4_1Handlers,
                            _4_2Handlers, _5_1Handlers, _5_2Handlers, _6_1Handlers, _6_2Handlers,
                            _7_1Handlers, _7_2Handlers, _7_3Handlers, _8_1Handlers, _8_2Handlers, _8_3Handlers,
                            _9_1Handlers, _9_2Handlers, _10_1Handlers, _10_2Handlers);
    alexa.execute();
};
