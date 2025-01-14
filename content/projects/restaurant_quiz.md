---
date: 2019-08-09T10:56:29.030Z
title: Quiz - best São Paulo restaurants
desc: >-
  Which restaurant in São Paulo should you go to? Answer the quiz and find out!
live: 'https://arte.folha.uol.com.br/saopaulo/2019/06/30/quiz-melhor-sp/'
tags:
  - coding
  - javascript
  - react
  - folha
  - tool
  - embed
image: /assets/hoje.png
---
<figure class="mosaic full">

![](/assets/quiz1.png)

![](/assets/quiz2.png)

![](/assets/quiz3.png)

</figure>

# About the project

Interactive quiz made for 'O Melhor de saopaulo' magazine (at Folha de S.Paulo).

[(You can see it live here if Folha's paywall blocks you)](https://arte.folha.uol.com.br/saopaulo/2019/06/30/quiz-melhor-sp/)

# Development

Using React and a selection of filters, the user selects which option suits best and finds out a list of 5 restaurants that fits his choices.

The mais issue was the math behind the curtains. Different from 'personality' type quizes, in which numbers are added up and the list is sorted based on the sum, this one had to work with percentages within percentages to show a real true answer.

If the user chooses a 5 star restaurant but wants to bring kids and family, maybe his first choice won't be the _best_ place in SP, but a _very nice_ place with a playground for kids.

[You can check the repo here](https://github.com/angelod1as/quiz-folha).

## Credits

* Code and planning by me
* Design by Irapuan Campos
* Thanks to FSP interactive crew: [Rubens Alencar](https://github.com/rubensfernando), Pilker and [Thiago Almeida](https://github.com/thiagoloal).
