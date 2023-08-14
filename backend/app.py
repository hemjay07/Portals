from flask import Flask, request, render_template, session, jsonify
import openai

import os

# import pandas as pd

# import time

app= Flask(__name__)

openai.api_key = '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'

# data = {
# "personalInfo": {
# "fullName": "Opabode Abdulmujeeb",
# "email": "[mujeebopabode07@gmail.com](mailto:mujeebopabode07@gmail.com)",
# "location": "Oyo Town"
# },
# "background": {"whatPartOfTechAreYouInterestedIn":"Product design",
# "whatIsYourCurrentRole": "Microbiology student at University of Ibadan ",
# "status": "first job"
# },
# "experience": {
# "whatHaveYouLearntSoFar": "HTML, CSS, JavaScript, React Or: Interaction design principles, Branding, typography and color theory, Figma",
# "whatAreYouLearningNow": "React Testing Library, TypeScript Or: User research and personas, Adobe XD",
# "workExperience": "Junior Frontend Engineer at BigCabal Media for 1 year, Frontend Developer Intern at HNG Internship for 3 months"
# },
# "careerGoal": {
# "careerGoal": "Junior fullstack engineer"
# }
# }

# format= '''[
#     {
#         "Courses": "",
#         "Resources Link": "",
#         "Projects": "",
#         "Allocated Time": ""
#     },
#     {
#         "Courses": "",
#         "Resources Link": "",
#         "Projects": "",
#         "Allocated Time": ""
#     },
#     {
#         "Courses": "",
#         "Resources Link": "",
#         "Projects": "",
#         "Allocated Time": ""
#     },
#     {
#         "Courses": "",
#         "Resources Link": "",
#         "Projects": "",
#         "Allocated Time": ""
#     },
#     {
#         "Courses": "Machine Learning Research Engineering",
#         "Resources Link": "Course: Harvard CS197",
#         "Projects": "Complete each of the 6 assignments each week (or less) and build the capstone project as well.",
#         "Allocated Time": "6 weeks"
#     }
# ]'''

format = """
[{
"resourceTitle": "",
"resourceLink": "",
"resourceDetails":"",
"allocatedTime":"",
"projects": [{
    "projectTitle": "",
    "projectDescription": "",
    "projectTime": ""
}],
}]
"""

def roadmap(prompt, model="gpt-3.5-turbo"):

  messages = [{"role": "user", "content": prompt}]

  response = openai.ChatCompletion.create(

  model=model,

  messages=messages,

  temperature=0.4,

  )

  return response.choices[0].message["content"]

print('Running!')

@app.route('/api/generate', methods=['POST'])
def main():
  data = request.json
  name = data['personalInfo']['fullName']
  location = data['personalInfo']['location']
  whatIsYourCurrentRole = data['background']['whatIsYourCurrentRole']
  status = data['background']['status']
  whatHaveYouLearntSoFar = data['experience']['whatHaveYouLearntSoFar']
  whatAreYouLearningNow = data['experience']['whatAreYouLearningNow']
  workExperience = data['experience']['workExperience']
  careerGoal = data['careerGoal']['careerGoal']
  tech = data['background']['whatPartOfTechAreYouInterestedIn']

  prompt = f"""
  Hi, my name is {name}, and I live in{location}. I currently work as {whatIsYourCurrentRole} and I am interested in {tech}. I am currently {status}. So far, I have learnt {whatHaveYouLearntSoFar}. I am currently learning {whatAreYouLearningNow}. I have worked as {workExperience}. My career goal is {careerGoal}. 
  
  Please share a comprehensive, practical and detailed roadmap in the form of an array of objects with each object being a resource(be it a book, course, article, video, documentation, podcast) containing a resourceTitle which is the title of the resource, then a resourceLink which is the url link to the resource, then resourceDetails which summarizes and goes into some detail on the resource and what you'd learn using it, then projects as an array of objects you can build with the knowledge you have gained from the resource and then the allocatedTime which is the time taken to complete the resource. 
  
  Please give me a response in JSON using the format below.
  Format: ```{format}```
  """

  result = roadmap(prompt)
  return result
#   prompt = "Hi, my name is "+name+", Kindly create a very very comprehensive learning pathway for me in this format: "+format+" considering that I am currently a "+whatIsYourCurrentRole+" and I am interested in learning "+tech+". Also I am currently "+whatIsYourCurrentRole+" and what I have learnt so far include "+whatHaveYouLearntSoFar+" and I am currently learning "+whatAreYouLearningNow+". My work experirience include: "+workExperience+" and my career goal is "+careerGoal+". Make the pathway very very comprehensives and Tell me where it is best to learn those courses and the timeframe to learn them. Thanks. MAKE IT IN THAT FORMAT ONLY"
  

@app.route("/test")
def test():
        return {"hoem":"galnga"}
    


if __name__ == '__main__':
    app.run(debug= True, use_reloader=True)

# [
#     {
#         "resourceTitle": "Data Science for Business",
#         "resourceLink": "https://www.amazon.com/Data-Science-Business-Data-Analytic-Thinking/dp/1449361323",
#         "resourceDetails": "This book provides an introduction to the principles and techniques of data science in a business context. It covers topics such as data exploration, data visualization, predictive modeling, and data-driven decision making. By reading this book, you will gain a solid understanding of the fundamentals of data science and how it can be applied in a business setting.",
#         "allocatedTime": "2 weeks",
#         "projects": [
#             {
#                 "projectTitle": "Exploratory Data Analysis",
#                 "projectDescription": "Use the techniques learned from the book to perform exploratory data analysis on a dataset of your choice. This project will involve cleaning and preprocessing the data, visualizing the data using appropriate charts and graphs, and drawing insights from the data.",
#                 "projectTime": "1 week"
#             }
#         ]
#     },
#     {
#         "resourceTitle": "SQL for Data Analysis",
#         "resourceLink": "https://www.udacity.com/course/sql-for-data-analysis--ud198",
#         "resourceDetails": "This online course offered by Udacity teaches you the basics of SQL and how to use it for data analysis. You will learn how to write SQL queries to retrieve, filter, and manipulate data from a database. The course also covers advanced topics such as joins, subqueries, and aggregations.",
#         "allocatedTime": "3 weeks",
#         "projects": [
#             {
#                 "projectTitle": "Data Analysis with SQL",
#                 "projectDescription": "Apply your SQL skills to analyze a real-world dataset. This project will involve writing complex SQL queries to extract meaningful insights from the data. You will also learn how to use SQL to perform data cleaning and transformation tasks.",
#                 "projectTime": "2 weeks"
#             }
#         ]
#     },
#     {
#         "resourceTitle": "Python for Data Analysis",
#         "resourceLink": "https://www.amazon.com/Python-Data-Analysis-Wrangling-IPython/dp/1491957662",
#         "resourceDetails": "This book provides a comprehensive guide to data analysis with Python. It covers topics such as data cleaning, data manipulation, exploratory data analysis, and data visualization using popular Python libraries such as Pandas, NumPy, and Matplotlib. By reading this book, you will learn how to effectively use Python for data analysis tasks.",
#         "allocatedTime": "4 weeks",
#         "projects": [
#             {
#                 "projectTitle": "Data Cleaning and Exploration",
#                 "projectDescription": "Apply the techniques learned from the book to clean and explore a messy dataset. This project will involve handling missing values, removing duplicates, and performing data transformations. You will also create visualizations to gain insights from the data.",
#                 "projectTime": "2 weeks"
#             }
#         ]
#     },
#     {
#         "resourceTitle": "Tableau Desktop Training",
#         "resourceLink": "https://www.tableau.com/learn/training",
#         "resourceDetails": "Tableau offers a variety of training resources to help you master the Tableau Desktop software. These resources include video tutorials, documentation, and hands-on exercises. By completing the Tableau Desktop Training, you will learn how to create interactive visualizations, dashboards, and reports using Tableau.",
#         "allocatedTime": "2 weeks",
#         "projects": [
#             {
#                 "projectTitle": "Interactive Data Dashboard",
#                 "projectDescription": "Create an interactive data dashboard using Tableau. This project will involve connecting to a dataset, designing visualizations, and creating interactive filters and parameters. You will also learn how to publish and share your dashboard with others.",
#                 "projectTime": "1 week"
#             }
#         ]
#     },
#     {
#         "resourceTitle": "Data Visualization with D3.js",
#         "resourceLink": "https://www.udacity.com/course/data-visualization-and-d3js--ud507",
#         "resourceDetails": "This online course offered by Udacity teaches you how to create interactive data visualizations using D3.js. You will learn how to use D3.js to manipulate the DOM, bind data to visual elements, and create various types of charts and graphs. The course also covers advanced topics such as transitions and animations.",
#         "allocatedTime": "3 weeks",
#         "projects": [
#             {
#                 "projectTitle": "Interactive Data Visualization",
#                 "projectDescription": "Apply your D3.js skills to create an interactive data visualization. This project will involve selecting a dataset, designing visual elements, and implementing interactivity using D3.js. You will also learn how to customize the appearance of your visualization.",
#                 "projectTime": "2 weeks"
#             }
#         ]
#     }
# ]