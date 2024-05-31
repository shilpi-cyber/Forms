import React from 'react';

const SurveyForm: React.FC = () => {
  return (
    <main id="main" className="container mx-auto p-4 bg-gray-800">
      <div className="flex justify-center">
        <div className="w-full lg:w-1/2">
          <div className="mb-10 text-center">
            <h1 id="title" className="text-4xl font-light text-green-400 uppercase">Survey Form</h1>
            <p id="description" className="text-xl font-light text-white mt-2">Let us know how we can improve freeCodeCamp</p>
          </div>
          <form method="GET" action="" id="survey-form" name="survey-form" className="space-y-6">
            <fieldset className="space-y-4">
              <label htmlFor="name" id="name-label" className="block text-lg font-light text-white">
                Name *
                <input type="text" id="name" name="name" placeholder="Enter your name (required)" required
                  className="mt-2 block w-full p-2 border-b-2 border-white bg-transparent text-green-400 focus:border-green-400 outline-none"/>
              </label>
            </fieldset>
            <fieldset className="space-y-4">
              <label htmlFor="email" id="email-label" className="block text-lg font-light text-white">
                Email *
                <input type="email" id="email" name="email" placeholder="Enter your email (required)" required
                  className="mt-2 block w-full p-2 border-b-2 border-white bg-transparent text-green-400 focus:border-green-400 outline-none"/>
              </label>
            </fieldset>
            <fieldset className="space-y-4">
              <label htmlFor="number" id="number-label" className="block text-lg font-light text-white">
                Age *
                <input type="number" id="number" name="number" min="8" max="112" placeholder="Enter your age (required)" required
                  className="mt-2 block w-16 p-2 border-b-2 border-white bg-transparent text-green-400 focus:border-green-400 outline-none"/>
              </label>
            </fieldset>
            <fieldset className="space-y-4">
              <label htmlFor="dropdown" className="block text-lg font-light text-white">
                Which option best describes your current role? *
                <select id="dropdown" name="dropdown" className="mt-2 block w-full p-2 bg-gray-800 border-2 border-white text-green-400 focus:border-green-400 outline-none">
                  <option value="student" selected>Student</option>
                  <option value="ftLob">Full Time Job</option>
                  <option value="ftLearner">Full Time Learner</option>
                  <option value="notSaying">Prefer not to say</option>
                  <option value="other">Other</option>
                </select>
              </label>
            </fieldset>
            <fieldset className="space-y-4">
              <div className="block text-lg font-light text-white">
                How likely is that you would recommend freeCodeCamp to a friend? *
              </div>
              <label className="block">
                <input type="radio" name="survey-form-gender" value="definitely" defaultChecked
                  className="mr-2"/> Definitely
              </label>
              <label className="block">
                <input type="radio" name="survey-form-gender" value="maybe" className="mr-2"/> Maybe
              </label>
              <label className="block">
                <input type="radio" name="survey-form-gender" value="notSure" className="mr-2"/> Not sure
              </label>
            </fieldset>
            <fieldset className="space-y-4">
              <label htmlFor="survey-form-like" className="block text-lg font-light text-white">
                What do you like most in FCC:
                <select id="survey-form-like" name="survey-form-like" className="mt-2 block w-full p-2 bg-gray-800 border-2 border-white text-green-400 focus:border-green-400 outline-none">
                  <option value="challenges" selected>Challenges</option>
                  <option value="projects">Projects</option>
                  <option value="community">Community</option>
                  <option value="openSource">Open Source</option>
                </select>
              </label>
            </fieldset>
            <fieldset className="space-y-4">
              <div className="block text-lg font-light text-white">
                Things that should be improved in the future (Check all that apply):
              </div>
              <label className="block">
                <input type="checkbox" id="survey-form-improve1" value="feProjects" className="mr-2"/>
                Front-end Projects
              </label>
              <label className="block">
                <input type="checkbox" id="survey-form-improve2" value="beProjects" className="mr-2"/>
                Back-end Projects
              </label>
              <label className="block">
                <input type="checkbox" id="survey-form-improve3" value="dataVisualization" className="mr-2"/>
                Data Visualization
              </label>
              <label className="block">
                <input type="checkbox" id="survey-form-improve4" value="challenges" className="mr-2"/>
                Challenges
              </label>
              <label className="block">
                <input type="checkbox" id="survey-form-improve5" value="openSources" className="mr-2"/>
                Open Source Community
              </label>
              <label className="block">
                <input type="checkbox" id="survey-form-improve6" value="gitter" className="mr-2"/>
                Gitter help rooms
              </label>
              <label className="block">
                <input type="checkbox" id="survey-form-improve7" value="videos" className="mr-2"/>
                Videos
              </label>
              <label className="block">
                <input type="checkbox" id="survey-form-improve8" value="meetup" className="mr-2"/>
                City Meetups
              </label>
              <label className="block">
                <input type="checkbox" id="survey-form-improve9" value="wiki" className="mr-2"/>
                Wiki
              </label>
              <label className="block">
                <input type="checkbox" id="survey-form-improve10" value="forum" className="mr-2"/>
                Forum
              </label>
              <label className="block">
                <input type="checkbox" id="survey-form-improve11" value="additional" className="mr-2"/>
                Additional Courses
              </label>
            </fieldset>
            <fieldset className="space-y-4">
              <label htmlFor="survey-form-suggestions" className="block text-lg font-light text-white">
                Any Comments or Suggestions?
                <textarea id="survey-form-suggestions" maxLength={194}
                  className="mt-2 block w-full p-2 bg-gray-800 border-2 border-white text-green-400 focus:border-green-400 outline-none resize-none h-24"/>
              </label>
            </fieldset>
            <button id="submit" type="submit" className="w-full mt-8 py-2 text-xl font-medium text-green-400 border-2 border-green-400 uppercase bg-transparent hover:bg-green-400 hover:text-gray-800 transition-colors duration-300">Submit the form</button>
          </form>
          <div className="mt-8 text-center text-xs text-white">
            <div>By Adèle Royer with <i className="glyphicon glyphicon-heart text-red-500"></i></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SurveyForm;
