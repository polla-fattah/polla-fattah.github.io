---
layout: publication
title: Optimising Rule-Based Classification in Temporal Data
authors: Polla Fattah, Uwe Aickelin, Christian Wagner
date: 2016-07-20
background: "/img/publication/journal.jpg"
type: Conference
publisher: "ZANCO Journal of Pure and Applied Sciences"
page: ""
citation: "Fattah, Polla, Uwe Aickelin, and Christian Wagner. 'Optimizing rule-based classification in temporal data.' ZANCO Journal of Pure and Applied Sciences, 28 (2), pp. 135-146, 2016, ISSN: 2412-3986. available arXiv preprint arXiv:1607.05913 (2016)."
link: https://arxiv.org/abs/1607.05913
abstract: |
  This study optimizes manually derived rule-based expert system classification of objects according to changes in their properties over time. One of the key challenges that this study tries to address is how to classify objects that exhibit changes in their behaviour over time, for example how to classify companies' share price stability over a period of time or how to classify students' preferences for subjects while they are progressing through school. A specific case the paper considers is the strategy of players in public goods games (as common in economics) across multiple consecutive games. Initial classification starts from expert definitions specifying class allocation for players based on aggregated attributes of the temporal data. Based on these initial classifications, the optimisation process tries to find an improved classifier which produces the best possible compact classes of objects (players) for every time point in the temporal data. The compactness of the classes is measured by a cost function based on internal cluster indices like the Dunn Index, distance measures like Euclidean distance or statistically derived measures like standard deviation. The paper discusses the approach in the context of incorporating changing player strategies in the aforementioned public good games, where common classification approaches so far do not consider such changes in behaviour resulting from learning or in-game experience. By using the proposed process for classifying temporal data and the actual players' contribution during the games, we aim to produce a more refined classification which in turn may inform the interpretation of public goods game data.
---

## Abstract

{{ page.abstract }}

## Citation

{{ page.citation }}

## Extra info

- Type: {{ page.type }}
{% if page.link != "" %} - Link: [ {{ page.publisher }} ]({{page.link}}){: target="\_blank" }{% endif %}
