---
title: 01. Introduction to Elastic Stack
author: irfan
date: 2023-08-14 09:33:00 +0800
categories: [Tech Tools, Elastic Stack - Search Engine]
tags: [elastic search, kibana, logstash, beats, search engine, data analytics, data visualization, data processing, data ingestion, data storage, data analysis, data exploration, data manipulation, data transformation, data enrichment]
math: true
mermaid: true
image:
  path: /assets/images/posts/tech-tools/elastic-stack/elastic-stack.png
  alt: Elastic Stack
---

## Elastic Stack

Elastic Stack is a collection of open-source products from Elastic designed to help users take data from any type of source and in any format and search, analyze, and visualize that data in real-time. It is a popular tool for log analytics, full-text search, structured search, data visualization, and more.

Elastic Stack is composed of four main products:

- **Elasticsearch**: A distributed, RESTful search and analytics engine that centrally stores your data for lightning-fast search, fine‑tuned relevancy, and powerful analytics that scale with ease.
- **Kibana**: A free and open user interface that lets you visualize your Elasticsearch data and navigate the Elastic Stack.
- **Beats**: Lightweight data shippers that you install on your servers to capture all sorts of operational data (think of logs, metrics, or network packet data). The Beats send the operational data to Elasticsearch, either directly or via Logstash, so it can be visualized with Kibana.
- **Logstash**: A server-side data processing pipeline that ingests data from multiple sources simultaneously, transforms it, and then sends it to a "stash" like Elasticsearch.
- **X-Pack**: A paid Elastic Stack extension that adds security, alerting, monitoring, reporting, machine learning, and graph capabilities.


