from flask import Flask,abort,jsonify,request,send_from_directory
from dotenv import load_dotenv
import openai

import os

load_dotenv()
openai.api_key = os.environ.get("API_KEY")


app = Flask(
    __name__,
    static_url_path='',
    static_folder='client/dist',
)



@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')

@app.errorhandler(502)
def handle_bad_gateway(error):
    return jsonify({'error': 'Bad Gateway'}), 502
  


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')


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
  try:
      

    messages = [{"role": "user", "content": prompt}]

    response = openai.ChatCompletion.create(

    model=model,

    messages=messages,

    temperature=0.4,

    )
    return response.choices[0].message["content"]
  except openai.error.APIError as e:
    #Handle API error here, e.g. retry or log
    print(f"OpenAI API returned an API Error: {e}")
    pass
  except openai.error.APIConnectionError as e:
  #Handle connection error here
    print(f"Failed to connect to OpenAI API: {e}")
    pass
  except openai.error.RateLimitError as e:
  #Handle rate limit error (we recommend using exponential backoff)
    print(f"OpenAI API request exceeded rate limit: {e}")
    pass



@app.route('/api/generate', methods=['POST'])
def main():
  try:
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

    Please prioritize suggesting resources that people have used and recommended in high regard. Also be more inclined towards courses, videos and documentation. 

    Let the resources you share be the best in order to help the person achieve this goal - {careerGoal}.
    
    Please give me a response in JSON using the format below.
    Format: ```{format}```
    """

     
    result = roadmap(prompt)
    print(result)
    return result
  except Exception as e:
    abort(502)
    
  



@app.route("/test")
def test():
        return {"hoem":"galnga"}



if __name__ == '__main__':
    app.run()


