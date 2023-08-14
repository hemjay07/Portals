from flask import Flask, request, render_template, session, jsonify
import openai

import os

# import pandas as pd

# import time

app= Flask(__name__)

openai.api_key = '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'


format= '''[
    {
        "Courses": "",
        "Resources Link": "",
        "Projects": "",
        "Allocated Time": ""
    },
    {
        "Courses": "",
        "Resources Link": "",
        "Projects": "",
        "Allocated Time": ""
    },
    {
        "Courses": "",
        "Resources Link": "",
        "Projects": "",
        "Allocated Time": ""
    },
    {
        "Courses": "",
        "Resources Link": "",
        "Projects": "",
        "Allocated Time": ""
    },
    {
        "Courses": "Machine Learning Research Engineering",
        "Resources Link": "Course: Harvard CS197",
        "Projects": "Complete each of the 6 assignments each week (or less) and build the capstone project as well.",
        "Allocated Time": "6 weeks"
    }
]'''

def roadmap(prompt, model="gpt-3.5-turbo"):

  messages = [{"role": "user", "content": prompt}]

  response = openai.ChatCompletion.create(

  model=model,

  messages=messages,

  temperature=0,

  )

  return response.choices[0].message["content"]

print('Running!')

@app.route('/api/generate', methods=["POST"])
def main():
  data= request.json

  name = data['personalInfo']['fullName']
  whatIsYourCurrentRole = data['background']['whatIsYourCurrentRole']
  status = data['background']['status']
  whatHaveYouLearntSoFar = data['experience']['whatHaveYouLearntSoFar']
  whatAreYouLearningNow = data['experience']['whatAreYouLearningNow']
  workExperience = data['experience']['workExperience']
  careerGoal = data['careerGoal']['careerGoal']
  tech = data['background']['whatPartOfTechAreYouInterestedIn']

  prompt = "Hi, my name is "+name+", Kindly create a very very comprehensive learning pathway for me in this format: "+format+" considering that I am currently a "+whatIsYourCurrentRole+" and I am interested in learning "+tech+". Also I am currently "+whatIsYourCurrentRole+" and what I have learnt so far include "+whatHaveYouLearntSoFar+" and I am currently learning "+whatAreYouLearningNow+". My work experirience include: "+workExperience+" and my career goal is "+careerGoal+". Make the pathway very very comprehensives and Tell me where it is best to learn those courses and the timeframe to learn them. Thanks. MAKE IT IN THAT FORMAT ONLY"
  
  result = roadmap(prompt)
  return result

@app.route("/api")
def test():
        return {"hoem":"galnga"}
    


if __name__ == '__main__':
    app.run(debug= True, use_reloader=True)
