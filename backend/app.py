from flask import Flask, request, render_template, session, jsonify
import openai

import os
import json

# import pandas as pd

# import time

app= Flask(__name__)

openai.api_key = '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'

data = {
"personalInfo": {
"fullName": "Opabode Abdulmujeeb",
"email": "[mujeebopabode07@gmail.com](mailto:mujeebopabode07@gmail.com)",
"location": "Ibadan, Nigeria"
},
"background": {"whatPartOfTechAreYouInterestedIn":"Software Development",
"whatIsYourCurrentRole": "Microbiology student at University of Ibadan ",
"status": "first job"
},
"experience": {
"whatHaveYouLearntSoFar": "HTML, CSS, JavaScript, React",
"whatAreYouLearningNow": "React Testing Library, TypeScript",
"workExperience": "Junior Frontend Engineer at BigCabal Media for 1 year, Frontend Developer Intern at HNG Internship for 3 months",
},
"careerGoal": {
"careerGoal": "Junior fullstack engineer"
}
}

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

  temperature=0.3,

  )

  return response.choices[0].message["content"]

print('Running!')

@app.route('/')
def main():
  name = data['personalInfo']['fullName']
  location = data['personalInfo']['location']
  whatIsYourCurrentRole = data['background']['whatIsYourCurrentRole']
  tech = data['background']['whatPartOfTechAreYouInterestedIn']
  status = data['background']['status']
  whatHaveYouLearntSoFar = data['experience']['whatHaveYouLearntSoFar']
  whatAreYouLearningNow = data['experience']['whatAreYouLearningNow']
  workExperience = data['experience']['workExperience']
  careerGoal = data['careerGoal']['careerGoal']

  prompt = f"""
  Hi, my name is {name}, and I live in{location}. I currently work as {whatIsYourCurrentRole} and I am interested in {tech}. I am currently {status}. So far, I have learnt {whatHaveYouLearntSoFar}. I am currently learning {whatAreYouLearningNow}. I have worked as {workExperience}. My career goal is {careerGoal}. 
  
  Please share a comprehensive, practical and detailed roadmap in the form of an array of objects with each object being a resource(be it a book, course, article, video, documentation, podcast) containing a resourceTitle which is the title of the resource, then a resourceLink which is the url link to the resource, then resourceDetails which summarizes and goes into some detail on the resource and what you'd learn using it, then projects as an array of objects you can build with the knowledge you have gained from the resource and then the allocatedTime which is the time taken to complete the resource. 
  
  Please give me a response in JSON using the format below.
  Format: ```{format}```
  """

  result = roadmap(prompt)
  return result

#   prompt = "Hi, my name is "+name+",  Kindly create a very very comprehensive learning pathway for me in this format: "+format+" considering that I am currently a "+whatIsYourCurrentRole+" and I am interested in learning "+tech+". Also I am currently "+whatIsYourCurrentRole+" and what I have learnt so far include "+whatHaveYouLearntSoFar+" and I am currently learning "+whatAreYouLearningNow+". My work experirience include: "+workExperience+" and my career goal is "+careerGoal+". Make the pathway very very comprehensives and Tell me where it is best to learn those courses and the timeframe to learn them. Thanks. MAKE IT IN THAT FORMAT ONLY"

    
  


@app.route("/test")
def test():
        return {"hoem":"galnga"}
    


if __name__ == '__main__':
    app.run(debug= True, use_reloader=True)

# I am Opeyimika Aremu and I live in Ibadan, Nigeria.

# I currently work as a Microbiology student and I am interested in Design. I am currently learning. So far, I have learnt Interaction design principles, Branding, typography, color theory, Figma. I am currently learning User research and personas, Adobe XD.

# I have worked as a Junior Frontend Engineer at BigCabal Media for 1 year, Frontend Developer Intern at HNG Internship for 3 months. 

# My career goal is to be a product designer.

# Please share a comprehensive, practical and detailed roadmap in the form of an array of objects with each object being a resource(be it a book, course, article, video, documentation, podcast) containing a resourceTitle which is the title of the resource, then a resourceLink which is the url link to the resource, then resourceDetails which summarizes and goes into some detail on the resource and what you'd learn using it, then projects as an array of objects you can build with the knowledge you have gained from the resource and then the allocatedTime which is the time taken to complete the resource.

# Please give me a response in JSON using the format below.

# ```
# {
# "resourceTitle": "",
# "resourceLink": "",
# "resourceDetails":"",
# "projects": [{
# }
# ],
# "allocatedTime":""
# }
# ```