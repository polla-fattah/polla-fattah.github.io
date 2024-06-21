---
layout: publication
title: Optimization of Association Rule Mining
authors: Polla Fatah, Ibrahim Hamarash
date: 2015-09-08
background: "/img/publication/journal.jpg"
type: Article # Chapter, Book, Report
publisher: "Internet Technologies and Applications (ITA)"
page: ""
citation: "Polla Fatah and Ibrahim Hamarash, 'An Optimization of Association Rule Mining' 2015 Internet Technologies and Applications (ITA), Wrexham, UK, 2015, pp. 275-280, doi: 10.1109/ITechA.2015.7317409."
link: "https://ieeexplore.ieee.org/abstract/document/7317409"
abstract: |
  This paper introduces an optimization approach for association rule mining in the time-memory domain. The approach splits the running mode of the traditional data mining algorithm into two phases. The first phase is designed to calculate all item sets in every transaction together with their frequencies (without pruning) and indexes their accumulation in a database. This procedure needs the fetch cycle of each transaction only once which reduces fetching transactions' I/O reasonably. In the second phase, the item sets and their frequencies are used in rule producing. a new algorithm has been designed, implemented, coded, verified and tested on real data. The approach enables users to change their queries and criteria using the second phase only which reduces the cost effectively.

---

## Abstract

{{ page.abstract }}

## Citation

{{ page.citation }}

## Extra info

- Type: {{ page.type }}
{% if page.link != "" %} - Link: [ {{ page.publisher }} ]({{page.link}}){: target="\_blank" }{% endif %}
