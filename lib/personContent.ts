import { createParamsFromClient } from "next/dist/server/request/params";

export type PersonProfile = {
  name: string;
  note: string;
  images: string[];
  video?: string;
};

/** Reuse for any slot until you drop in real photos. */
const placeholderImages: string[] = [
  "/images/placeholder.png",
  "/images/placeholder.png",
  "/images/placeholder.png",
];

export const personContent: Record<string, PersonProfile> = {
  avery: {
    name: "Avery",
    note: `Dear Caroline,

Congratulations on graduation! I am so incredibly proud of you for all your hard work that you put in these past four years! I know it was a lot, but all of those late nights (even though they might have been voluntary), stressful hours of cram studying, and many times you questioned why you went to school at such a prestigious university all paid off in the end. You navigated this journey with relentless dedication and passion and that is something I truly admire about you. I know that wherever life takes you, you will make a lasting and profound impact there. I am so proud of you!

There are two things that I was able to witness throughout your time in college that I completely admire (and would love to apply to myself). The first is how you tackled challenges you faced. I don't want to dwell on swimming too much because, although I know it was a big part of your time here, it didn't end the way you wanted it. With that said, the way you bounced back after that disappointment is something I feel like only you could do. Instead of letting it completely consume you, you instead made the most of it. You found other ways to really enjoy your time. You met new people. You tried new things. You filled your time doing other great things. Then there were also challenges with school too. And although our approaches to school might be different, I completely admire how studious you are. I was always impressed with how you would say a class is super hard and that maybe a first exam didn't do well. But despite that, it seemed like every single final you took always went really well (physics this past year being Exhibit A). I think both of these cases show your strong, unwavering determination that is definitely a weapon for you, but was so awesome to see first-hand over the past four years.

The other is how you expanded your boundaries. I know that being social and making friends has always been relatively easy for you. Despite that, though, it has been an absolute joy to both meet the people you surround yourself with when I have visited and to hear about all the friends you have made at GT. While visiting you, I have gotten to meet your friends and I can see why you love school so much. You have surrounded yourself with such great people and it makes me so happy to see you happy and with great people. What makes me more happy is to hear about how you always were looking to meet new people and make new friends. Just because you were an upperclassman, that didn't stop you from meeting new people. Meeting these new people, while it is awesome to see, is something that is not at all surprising to see you do, and it is something that I absolutely love about you and the experience you have had.

I'm so excited I get to celebrate this huge weekend with you and I am so grateful I got to be by your side for the amazing ride! This is only the beginning and I can't wait to see everything you do next. Let's celebrate - you've earned it ❤️!

I love you lots,
Avery`,
    images: [
      "/images/avery1.jpeg",
      "/images/avery2.jpeg",
      "/images/avery3.jpeg",
      "/images/avery4.jpeg",
      "/images/avery5.jpeg",
      "/images/avery6.jpeg",
      "/images/avery7.jpeg",
      "/images/avery8.jpeg",
      "/images/avery9.jpeg",
      "/images/avery10.jpeg",
      "/images/avery11.jpeg", 
      "/images/avery12.jpeg",
      "/images/avery13.jpeg",
      "/images/avery14.jpeg",
      "/images/avery15.jpeg",
      "/images/avery16.jpeg",
      "/images/avery17.jpeg",
      "/images/avery18.jpeg",
      "/images/avery19.jpeg",
      "/images/avery20.jpeg",
      "/images/avery21.jpeg",
    ],
  },

  ari: {
    name: "Ari",
    note: `To Caroline, 
    
    wow, can you believe we actually made it to graduation? Sometimes I still catch myself laughing at some of our past moments we’ve shared like dancing on surfaces at McMillan, dancing with pots in Maulding, and dancing everywhere we really are not supposed to be dancing. I’ve loved doing everything with you whether that crying, laughing, or just rotting on the couch. you make even the simplest things feel special. Honestly, I wouldn’t trade a single second of these past four years.

These years have been a wild ride, but I’d do it all over again in a heartbeat.

The future is wide open, full of possibilities, but one thing I know for sure is that you’ll be a huge part of it, no matter where life takes us. Here’s to us, to the memories, and to everything that’s still to come.

Love you tons!`,
    images: [
      "/images/ari1.JPG",
      "/images/ari2.JPG",
    ],
  },

  emma: {
    name: "Emma",
    note: `CP!!!

Oh my goodness I just am so proud of you. You have absolutely conquered these past 4 years of college. You have met some incredible people along the way, made the best memories, and made your mark in a brand new city. You took a leap of faith attending a school 8 hours from home, and it was probably one of the best decisions you could have made. It’s crazy how fast 4 years fly by, but you put your blood, sweat, and tears day in and day out in order for this opportunity to be possible. Little CP, who went to swim practice to get some of her energy out, turned into someone who so deeply loved the sport. It’s one of those things where it is a love/hate relationship. There are some bad days that reach a really low point, and some good days where you reach an all time high and even though those high points are few and far between, they create an adrenaline rush to make you want to come back for more. Swimming shaped you into one of the most competitive, dedicated, and kind hearted people I know. And even though that journey ended slightly earlier than you imagined, it made you who you are today! That’s something to celebrate. It led you to meeting the absolute best teammates, and lifelong friends. That’s what it’s all about. Now you are walking from Georgia Tech with a great degree, and amazing memories. Looking in, that looks like a pretty amazing 4 years to me.

I am so proud of you and am so thankful swimming brought us together. I tell everyone this; you are my energy and vibe matcher. We get each other like nobody else will ever understand. We work our asses off, and have a hell of a good time doing it. We care about our circle and are fiercely loyal. Grit. There is nothing in this world that you can’t conquer with those characteristics. We stand up for what we believe is right (even when we shouldn't sometimes lol). You are an incredible young lady and it has been so fun to grow together.

Now for old times sake, let’s reminisce on some top standout memories that I can put in writing. (the rest I will share with you later):

#1 - All time high: receiving a call from our parents that we got kicked out of Swim America training because of Jim Peterfish. Being terrified of Dan and then having to see Jim at all the dang swim meets.
#2 - When the dad from Swim America jumped into the pool when we were teaching lessons.
#3 - Winning our 200 free relay and telling the interview person that we “put them in the box”
#4 - The sink at Mason “breaking”. I will leave it at that.
#5 - The Bowling Green secret locker room.
#6 - When Maraget Miranda basically fought me and you stood up for me like I can always count on you to do.
#7 - Eating blueberries off the bottom of the pool at Aquatic Adventures.
#8 - Salty “recording us” during practice and telling us he was going to send it to our parents because we were so bad.

Now onto Post-Grad advice. I will tell you that my advice is minimal because I am still trying to figure out post-grad myself. However, I will say that something that has helped me (and it took me 8 months to figure out), was 2 things. #1 - maintaining a schedule throughout the week. #2- saying “yes” to every opportunity that comes your way. Whether it be traveling to see college friends on the weekend, getting drinks on a random night after work, co-worker happy hours, say YES. Having stuff to look forward to truly gets me through the week. Lastly, don’t put so much stress on yourself. It’s so easy to feel guilty about sleeping in and not working out one day because we are so used to getting in trouble for not making it to a practice. But it is ok! If you are sick, take the day off, if you need more rest, sleep in one day. Life will go on and that’s the beauty with post-grad, you get to create your life.

I am so beyond proud of you CP! While it can be heartbreaking to leave college and leave behind the life you created for 4 years, be excited for this next chapter! You are going to stay in contact with your college besties, and you will get to create another type of fun post-grad. I promise it will be ok, but it's definitely okay to be sad and miss it. I love you so much and hopefully I will see you around in Columbus.

Love you my spunky, outgoing, bad ass, hard working CP!! You have the biggest heart and my money is always on you to succeed. The best is yet to come.

Love, Emma`,
    images: [
      "/images/emma1.jpeg",
      "/images/emma2.JPG",
      "/images/emma3.JPG",
      "/images/emma4.jpeg",
      "/images/emma5.JPG",
      "/images/emma6.JPG",
      "/images/emma7.jpeg",
      "/images/emma8.jpeg",
      "/images/emma9.jpg",
      "/images/emma10.jpeg",
      "/images/emma11.JPG",
    ],
  },

  jillian: {
    name: "Jillian",
    note: `To my Dearest Friend Caroline Porterfield,

Congratulations, you did it! You graduated college!! After many long library study nights together and hype up texts to get you to not drop out of Physics, it’s all done! Wow, what a ride it's been! I’m not really sure how I got so lucky and found such a great friend. Although I’m sad we didn’t meet till college, if we were on the same club team, the coach probably would have quit instantly. Coming in freshman year, I was scared I wasn't going to fit in with the team, but when we first met, your energy level was at like a million and I knew I wanted to be your friend. Luckily it worked out pretty well for me cause I forced you to be my friend/hang out with me and it worked! I am so glad that I found my person that I could go to for anything, whether it be spilling tea, crazy stories, shopping dates, hang outs cause neither one of us got invited to soup night, etc, you were(still are) my go to person!

I honestly am not really sure where to even start, I’m looking through snapchat memories and my goodness have we had a good time! Lots of fun football games, nights out, and couch hangouts at State. I miss the Maulding wine nights and will definitely miss having our people be in touch and making a hang out for 5 minutes later, just for it to end with both of us on our phones, but it was great cause we were together! Hopefully we will somehow get McMillan back and you can come do a keg stand at alumni weekend, and will beat my 21 second record:). But you’ll already be in Atlanta and hanging out with me 24/7, so luckily you will still get to see me all the time! We still have lots of people to call that I am sure have pussy for sale!

Next up in this letter is some advice for post grad life! I am not post grad, so I cannot confirm that this advice is helpful, but I’m using my best judgement. Starting off strong, don’t do a tater tot line off the table and beg the chef for more cause you are homeless. Or actually maybe do, that was quite the night, even though I shipped you off in a car with “strangers”! Next up, don’t cold turkey a marathon, luckily I think you already learned this one the hard way, but just wanted to remind you in case you forgot. I think this is the most important one, never change!! You are such a hard worker with an amazing ability to be kind to everybody and when you set your mind to something, you go and get it. Keep it up, that mindset and work ethic will take you so far in life! Oh one more, stop using a family icloud so when you prank text your mom saying you need money for your disabled medicine it doesn't instantly come up with my name. I'm rereading the texts as I write this and I am crying, oh my gosh, the texts to your brother were insane.

As you move into this next chapter, I already know you’re going to absolutely crush whatever you do. You’ve never been someone to do anything halfway, and that’s one thing that makes you so special. Whether it’s your career, your friendships, or just life in general, you give it your all, and it shows. And don’t worry, this is definitely not the end of anything. If anything, it’s just the start of even more memories. No matter where life takes us, you’re stuck with me! I’m so beyond proud of you, and even more grateful that I get to call you my best friend. College wouldn’t have been the same without you, and honestly, neither would I.

Thanks for being my best friend! We still have lots more functions to attend. Also, go blue! And keep a watch on your car for a gay magnet, yours is next!

Your bestest friend,
Jillian Dora Ferrari (full name so you know it's really me!)`,
    images: [
      "/images/jillian1.jpeg",
      "/images/jillian2.jpeg",
      "/images/jillian3.jpeg",
      "/images/jillian4.jpeg",
      "/images/jillian5.jpeg",
      "/images/jillian6.jpeg",
      "/images/jillian7.jpeg",
      "/images/jillian8.jpeg",
      "/images/jillian9.jpeg",
      "/images/jillian10.jpeg",
    ],
  },

  lydia: {
    name: "Lydia",
    note: `Dear Caroline,

Congratulations on graduating my love! You truly amaze me in completing a degree at Georgia Tech miss smarty 🫶 

I know you put in so many timeless hours on top of swimming to make this possible. I hope you take the time to recognize your strength and determination over the past 4 years. I am so proud of you!

To share my observations, you have grown in confidence. I can tell you love and value yourself deeply. You all roll w/ the punches (and there have been so many) and make the best of difficult and unfair situations. It is so wild to think back to us swimming at Aquatic Adventures or following you in swim offs at polo states. Time has moved so fast, but so beautifully and I will always hold you close to my heart as one of my very dearest friends. I am so thrilled for you in your next chapter of life and cannot wait to see where you end up/what you end up doing.

My top 3 tips for post-grad and life in general...

1. be where your feet are
2. there is no dress rehersal to this life
3. you are so dearly loved, valued, and worthy

I love you and am ALWAYS here to talk or lean on. I am honored to know you and ❤️ you CP!

With love,
Lydia`,
    images: [
      "/images/lydia1.jpeg",
      "/images/lydia2.jpeg",
      "/images/lydia3.jpeg",
      "/images/lydia4.jpeg",
      "/images/lydia5.jpeg",
    ],
  },

  ellen: {
    name: "Ellen",
    note: `Caroline,

I can't believe you are graduating from college!! I feel like I was just picking out an outfit for your high school graduation. I'm so proud of you and everything you have accomplished within the past 4 years. It has been a blessing to grow up as your little sister and look to you as a role model. While it may not always come off that way, I have always looked up to you and thought of you as someone I wanted to be. Whether I expressed that by taking your clothes as a child or by copying everything you did, I always wanted to be like my big sister. I am forever grateful to call you my sister :) 

I'm so proud of everything you have done and can't wait to see what you do in the future!!

Love,
Ellen :)
`,
    images: [
      "/images/ellen1.jpeg",
      "/images/ellen2.jpeg",
      "/images/ellen3.jpeg",
      "/images/ellen4.jpeg",
    ],
  },

  nana: {
    name: "Nana and Gdaddy",
    note: `We admire your perseverance in working towards goals and resilience in the face of any setbacks. Oh the places you will go!

Love you,
Nana & Gdaddy

P.S. They sent to me: "I’m hoping the pics were sent. Long story short! She’s the best."`,
    images: ["/images/nanamain.jpeg",
      "/images/nana1.jpeg",
    ],
  },

  kendal: {
    name: "Kendal",
    note: `The end is here! I am so happy we are graduating together and I can't believe it's almost over. I'm going to miss your crazy rat energy and your big heart. I'm so excited to see what adult life has fro us in the future (hopefully lots of vacations and weddings). I love you!`,
    images: [
      "/images/kendal1.jpeg",
      "/images/kendal2.jpeg",
      "/images/kendal3.jpeg",
    ],
  },

  grandma: {
    name: "Grandma",
    note: `Personal note coming from Grandma! (Maybe she has already sent it)`,
    images: [
      "/images/grandama7.jpeg",
      "/images/grandama1.jpeg",
      "/images/grandama2.jpeg",
      "/images/grandama3.jpeg",
      "/images/grandama4.jpeg",
      "/images/grandama5.jpeg",
      "/images/grandama6.jpeg",
      "/images/grandma8.jpeg",
      "/images/grandma9.jpeg",
    ],
  },

  mom: {
    name: "Mom",
    note: `Dear Caroline –

Here we are. 4 years of Georgia Tech completed.  To say we are so very proud of you is an understatement.  What you accomplished to get to GT and what you have done these past 4 years is AMAZING!  You worked so hard both academically and athletically to get yourself into this school and then you continued to work (A LOT HARDER 😉) to get to graduation.  

I have watched you since you were a toddler and know there is no challenge too big for you.  You have always gone after everything at full max speed.  Pushing the other toddlers in the little cars, acting in the Barrington after school plays, playing soccer, Girls on the Run, really playing ANYTHING.  You are all in – to WIN of course.  I could sign you up for any activity and you would not blink.  It made for a very busy life, but it made it so much fun too.  

I am so very lucky you are my Caroline, a million others in this world but only 1 is mine. To have 3 little people has been such a blessing, with all our craziness too.  I will always be your biggest fan and want nothing but the best for you. Anything you need, whenever I will always be there.  

I am so happy I have been with you for this ride.  What a lot of great things you have achieved, a ton of great experiences, and the people we have met along the way.  

I am excited about your next chapter.  I know you will continue to work hard and enjoy all that life will offer.  You deserve all the big things that are in your future.  Take care of yourself, be kind, help others, and work hard.  And, make sure to make time for your mom.  

I LOVE YOU!!!  

Mom`,
    images: ["/images/mom1.jpeg", "/images/mom2.jpeg", "/images/mom3.jpeg", "/images/mom4.jpeg", "/images/mom5.jpeg", "/images/mom6.jpeg", "/images/mom7.jpeg", "/images/mom8.jpeg"],
  },

  carmen: {
    name: "Carmen",
    note: `CP!
    
    I am so proud of you! I am so so grateful for our friendship. You are such an incredible friend - always looking out for your people + making everything so much fun!! I am so inspired by how you are so yourself no matter what + it makes me want to be like that too. You make everyone around you better!!
    
    I love you so much!
    
    ❤️ - Carm`,
    images: ["/images/carmen1.jpeg", "/images/carmen2.jpeg", "/images/carmen3.jpeg", "/images/carmen4.jpeg"],
    video: "/images/carmen.mov",
  },

  bahar: {
    name: "Bahar",
    note: `CP!
    
    I am so glad we became friends (around this time last year actually) because you are one of those people that has changed my perspective on life. Every time we hang out you continue to amaze me with your sociableness, inclusivity, and overall love for people. I've never met someone who is so genuine in their interactions and makes everyone feel seen. If it wasn't for you, Charles the VI would've never happened! I feel like you've changed the way I think about striking up conversations with strangers and making sure to keep friendships thriving by constantly checking in and caring. Wherever you end up, I'm 100000% confident you'll find even more people to love and take on adventures!
    
    CONGRATS!!!
    (stay in Atlanta pleaseeeeeeeee)
    
    ❤️, Bahar`,
    images: ["/images/bahar1.jpeg", "/images/bahar2.jpeg"],
  },

  elianna: {
    name: "Elianna",
    note: `CPPPPPP OMMGGGGGG YOU ARE GRADUATING AHHHHHHH!!!! 
    
    Girl I cannot even tell you what our friendship means to me.  From the moment I met you I was like wait I want to be friends with this girl she is actually the coolest ever and now I actually feel so lucky to have you in my life. These past few semesters would not have been nearly as great as they have been without you in it and I can’t wait for what the future holds. From Ladybird to Savannah to bad timing phone calls to running to chips and guac in traffic, there has never been a dull moment and I wouldn’t want it any other way. You are actually the funniest, sweetest, and most caring person I have ever met and you are going to go so far and accomplish amazing things in life.  Roomates or not we better stay bffs and continue making mems. 
    
    I love you so much and am so proud of you. Keep being you girl you are the best!!`,
    images: ["/images/elianna1.jpeg", "/images/elianna2.jpeg", "/images/elianna3.jpeg", "/images/elianna4.jpeg", "/images/elianna5.jpeg"],
  },

  dad: {
    name: "Dad",
    note: `Dear (Sweet) Caroline – where do I start. What a journey it has been to get you to this point in your life. When I look back at the years at all you have accomplished and the times that I got to be a part of it is hard to choose the moments that I most cherish being a part of but here are some of the ones that stand out. The smile on your face when you realize you have won the 50 Free States (I have the newspaper on my desk at work and see it every day). The skinny Rob Lowe and why did you have to be salty videos. Your reaction when you saw Bexie for the first time. In 8th Grade when you ran over the girl from New Albany in the lacrosse game because she had set an illegal pick on you. She had to be helped off the field. The pink swim robe. Poop in the hair on the carriage ride to see Santa. You deciding to play soccer in your 8th grade year and me being asked by another parent what happened, the field hockey team just lost their best player. The trips to zones and the trip to Naples (Flags Up and quick-thinking Danny). Double thumbs up before a race. The way you managed your recruitment and people’s disappointment when you told them that you were not choosing them (especially the Navy Coach). It seems like just yesterday that we were sitting in the car outside of Maulding and you were crying about how hard it was and now you are about to graduate with Highest Honors.

Most of all I am amazed at how you just go about your life with the same energy and confidence that you always have. You know who you are and the people that you want to surround yourself with. You have standards and you do not lower them to just fit in or to make someone else happy. You have always just figured it out and used your resources to the best of your ability. Everyone you have encountered is better off having met you. You have gotten where you are because of knowing who you are and never losing sight of what and who really matters most to you. I cannot tell you how proud I am of you for what you have been able to do over the last (4) years and how excited I am to see what comes next for you.

I Love You, Dad.`,
    images: ["/images/dad1.jpeg", "/images/dad2.jpeg", "/images/dad3.jpeg", "/images/dad4.jpeg", "/images/dad5.jpeg", "/images/dad6.jpeg", "/images/dad7.jpeg", "/images/dad8.jpeg", "/images/dad9.jpeg", "/images/dad10.jpeg", "/images/dad11.jpeg", "/images/dad12.jpeg", "/images/dad13.jpeg", "/images/dad14.jpeg", "/images/dad15.jpeg", "/images/dad16.jpeg", "/images/dad17.jpeg", "/images/dad18.jpeg", "/images/dad19.jpeg", "/images/dad20.jpeg", "/images/dad21.jpeg", "/images/dad22.jpeg", "/images/dad23.jpeg", "/images/dad24.jpeg", "/images/dad25.jpeg", "/images/dad26.jpeg", "/images/dad27.jpeg", "/images/dad28.jpeg", "/images/dad29.jpeg", "/images/dad30.jpeg", "/images/dad31.jpeg", "/images/dad32.jpeg", "/images/dad33.jpeg", "/images/dad34.jpeg"],
  },

  deniz: {
    name: "Deniz",
    note: `Hi b!!! I can’t even believe that I am writing this and we are in this phase of our lives. First of all, I am soooo proud of you. The woman you’ve become, the person you are, an athlete you are… I can’t wait to see killing post grad life. I want to take you to the beginning of our friendship. 

The minute I stepped into the US, you have always been by my side through ups and downs. Even though, we were not rooming together. There was something that I felt so close to you. Like I knew you from my past life or smt. I am always going to cherish our moments and memories. I don’t even know where to begin. Our crazy party past, just non stop laughing between us, and most importantly I can just talk to you without feeling any judgments. It’s like being in flow state. I am so glad  to have a friend like you and call you my best friend.The distance between us makes our friendship so worthy. It has never changed and won’t change in the future. Please invite me to your wedding ( Avery I know you’re gonna read this so don’t forget my invitation and take good care of my girl). And now I am sitting in my supply chain class tearing up. 

I love you so much

Deniz`,
    images: placeholderImages,
  },

  friend15: {
    name: "Friend 15",
    note: `Dear Caroline,

Paste your message here when you have it.

With love,
Friend 15`,
    images: placeholderImages,
  },

  friend16: {
    name: "Friend 16",
    note: `Dear Caroline,

Paste your message here when you have it.

With love,
Friend 16`,
    images: placeholderImages,
  },

  friend17: {
    name: "Friend 17",
    note: `Dear Caroline,

Paste your message here when you have it.

With love,
Friend 17`,
    images: placeholderImages,
  },

  friend18: {
    name: "Friend 18",
    note: `Dear Caroline,

Paste your message here when you have it.

With love,
Friend 18`,
    images: placeholderImages,
  },

  friend19: {
    name: "Friend 19",
    note: `Dear Caroline,

Paste your message here when you have it.

With love,
Friend 19`,
    images: placeholderImages,
  },

  friend20: {
    name: "Friend 20",
    note: `Dear Caroline,

Paste your message here when you have it.

With love,
Friend 20`,
    images: placeholderImages,
  },

  friend21: {
    name: "Friend 21",
    note: `Dear Caroline,

Paste your message here when you have it.

With love,
Friend 21`,
    images: placeholderImages,
  },

  friend22: {
    name: "Friend 22",
    note: `Dear Caroline,

Paste your message here when you have it.

With love,
Friend 22`,
    images: placeholderImages,
  },

  friend23: {
    name: "Friend 23",
    note: `Dear Caroline,

Paste your message here when you have it.

With love,
Friend 23`,
    images: placeholderImages,
  },

  friend24: {
    name: "Friend 24",
    note: `Dear Caroline,

Paste your message here when you have it.

With love,
Friend 24`,
    images: placeholderImages,
  },
};

export const homePeople: { id: string; name: string; image: string }[] = [
  { id: "dad", name: "Dad", image: "/images/dadmain.jpeg" },
  { id: "mom", name: "Mom", image: "/images/mommain.jpeg" },
  { id: "ari", name: "Ari", image: "/images/arimain.JPG" },
  { id: "emma", name: "Emma", image: "/images/emmamain.jpeg" },
  { id: "jillian", name: "Jillian", image: "/images/jillianmain.jpeg" },
  { id: "lydia", name: "Lydia", image: "/images/lydiamain.jpeg" },
  { id: "ellen", name: "Ellen", image: "/images/ellenmain.jpeg" },
  { id: "nana", name: "Nana and Gdaddy", image: "/images/nanamain.jpeg" },
  { id: "kendal", name: "Kendal", image: "/images/kendalmain.jpeg" },
  { id: "grandma", name: "Grandma", image: "/images/grandamamain.jpeg" },
  { id: "carmen", name: "Carmen", image: "/images/carmenmain.jpeg" },
  { id: "bahar", name: "Bahar", image: "/images/baharmain.jpeg" },
  { id: "elianna", name: "Elianna", image: "/images/eliannamain.jpeg" },
  { id: "deniz", name: "Deniz", image: "/images/placeholder.png" },
  { id: "friend15", name: "Friend 15", image: "/images/placeholder.png" },
  { id: "friend16", name: "Friend 16", image: "/images/placeholder.png" },
  { id: "friend17", name: "Friend 17", image: "/images/placeholder.png" },
  { id: "friend18", name: "Friend 18", image: "/images/placeholder.png" },
  { id: "friend19", name: "Friend 19", image: "/images/placeholder.png" },
  { id: "friend20", name: "Friend 20", image: "/images/placeholder.png" },
  { id: "friend21", name: "Friend 21", image: "/images/placeholder.png" },
  { id: "friend22", name: "Friend 22", image: "/images/placeholder.png" },
  { id: "friend23", name: "Friend 23", image: "/images/placeholder.png" },
  { id: "friend24", name: "Friend 24", image: "/images/placeholder.png" },
  { id: "avery", name: "Avery", image: "/images/averymain.jpeg" },
];
