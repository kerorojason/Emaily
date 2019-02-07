# Emaily
MERN Stack Web Application https://immense-castle-74607.herokuapp.com/


### Description

A web application for startup owner to collect feedback from customers via sending email that request feedback!



### Instruction and Teck Stack

| Step | Description  | Teck |
| :------------ |:---------------| :-----|
|1|User signs up via Google OAuth|Express server + MongoDB + PassportJS|
|2|User pays for email credits via stripe|Stripe + MongoDB|
|3|User creates a new 'campaign'|React + Redux|
|4|User enters list of emails to send survey to|React + Redux + Redux Form|
|5|We send email to list of surveyees|Email Provider|
|6|Surveyees click on link in email to provide feedback|Email Provider + Express + MongoDB|
|7|We tabulate feedback|MongoDB|
|8|User can see report of all survey responses|MongoDB + React + Redux|
