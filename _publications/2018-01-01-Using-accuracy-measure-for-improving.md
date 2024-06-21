---
layout: publication
title: Using accuracy measure for improving the training of LSTM with metaheuristic algorithms
authors: Tarik Rashid, Polla Fattah , Delan K. Awla
date: 2018-01-01
background: "/img/publication/journal.jpg"
type: Article # Chapter, Book, Report
publisher: "Procedia Computer Science"
page: ""
citation: "Rashid, Tarik A., Polla Fattah, and Delan K. Awla. 'Using accuracy measure for improving the training of LSTM with metaheuristic algorithms.'' Procedia Computer Science 140 (2018): 324-333."
link: https://www.sciencedirect.com/science/article/pii/S187705091831980X
abstract: |
  Recurrent Neural Networks (RNNs) are possibly the most prevailing and advantageous type of neural network. On the other hand, these networks still have some weaknesses in terms of learning speed, error convergence, and accuracy due to long-term dependencies, which need to be solved. Long-term dependencies are mainly exploding and vanishing gradients through Back Propagation Learning Algorithm. In this paper, Long Short Term Memory or LSTM is used and well structured for resolving the above concerns. Four different optimizers based on Metaheuristic Algorithms are chosen to train LSTM (these are; Harmony Search (HS), Gray Wolf Optimizer (GWO), Sine Cosine (SCA), and Ant Lion Optimization algorithms (ALOA). The suggested representations are used for classification and analysis of real and medical time series data sets (Breast Cancer Wisconsin Data Set and Epileptic Seizure Recognition Data Set). Classification accuracy measure has been used instead of error rate and mean square error methods to train LSTM with above optimizing algorithms. The experimental results are verified using the 5-fold cross validation.
---

## Abstract

{{ page.abstract }}

## Citation

{{ page.citation }}

## Extra info

- Type: {{ page.type }}
{% if page.link != "" %} - Link: [ {{ page.publisher }} ]({{page.link}}){: target="\_blank" }{% endif %}
