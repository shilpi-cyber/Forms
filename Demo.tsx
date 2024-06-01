import React, { useState } from 'react';

const Demo: React.FC = () => {
  const [documentType, setDocumentType] = useState<string>('');
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
 
  const handleDocumentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDocumentType(event.target.value);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const imageUrls = Array.from(files).map(file => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        return new Promise<string>((resolve) => {
          reader.onloadend = () => {
            if (reader.result) {
              resolve(reader.result as string);
            }
          };
        });
      });

      Promise.all(imageUrls).then(urls => setSelectedImages(prevImages => [...prevImages, ...urls]));
    }
  };

  return (
    <div className="bg-white-100 p-6">
      <form id="survey-form" action="/my-handling-form-page" method="post" className="bg-white mx-auto p-6 border border-gray-300 rounded-md w-3/4">
        <h1 id="title" className="text-2xl text-center font-bold capitalize mb-2">Upload Documents Here..</h1>
        <p id="description" className="text-center mb-4"><b>Note:</b> Images should not be less than 200kb</p>

        <fieldset className="border border-gray-300 p-4 mb-4">
      <legend className="font-bold">Proof of Identity (POI)</legend>
      <div className="mb-4">
        <label htmlFor="document" className="block">Select Document</label>
        <select id="document" name="document" className="border border-gray-300 p-2 w-full" onChange={handleDocumentChange} defaultValue="Passport">
        <option value="Passport"></option>
          <option value="Passport">Passport</option>
          <option value="Driver's License">Driver's License</option>
          <option value="Aadhar Card">Aadhar Card</option>
          <option value="Voter ID">Voter ID</option>
        </select>
      </div>
      <div className="mb-4">
        <label id="id-label" htmlFor="id" className="block">Enter {documentType} Number</label>
        <input type="text" required id="id" name="id_number" placeholder={`Enter ${documentType} Number here`} className="border border-gray-300 p-2 w-full"/>
      </div>
      <div className="mb-4">
            <p>Upload {documentType} Image here:</p>
            <input type="file" accept="image/*" multiple onChange={handleImageChange} className="mb-4"/>
            {selectedImages.length > 0 && (
              <div>
                <p>Preview:</p>
                <div className="grid grid-cols-3 gap-4">
                  {selectedImages.map((image, index) => (
                    <img key={index} src={image} alt={`Uploaded Preview ${index + 1}`} className="w-32 h-32 object-cover"/>
                  ))}
                </div>
              </div>
            )}
          </div>
    </fieldset>



        <fieldset className="border border-gray-300 p-4 mb-4">
          <legend className="font-bold">Personal Details</legend>
          <div className="mb-4">
            <label id="name-label" htmlFor="name" className="block">Name:</label>
            <input type="text" required id="name" name="user_name" placeholder="Enter name here" className="border border-gray-300 p-2 w-full"/>
          </div>
          <div className="mb-4">
            <label id="address-label" htmlFor="address" className="block">Address:</label>
            <input type="text" id="address" name="Address" placeholder="Enter address here" className="border border-gray-300 p-2 w-full"/>
          </div>
          <div className="mb-4">
            <label id="email-label" htmlFor="Email" className="block">Email:</label>
            <input type="email" required id="email" name="user_email" placeholder="Enter email here" className="border border-gray-300 p-2 w-full"/>
          </div>
          <div className="mb-4">
            <label id="number-label" htmlFor="phone" className="block">Phone Number:</label>
            <input type="number" id="number" name="user_phone" placeholder="Enter 10 digit number" min="1" max="9999999999" className="border border-gray-300 p-2 w-full"/>
          </div>
          <div className="mb-4">
            <label id="iq-label" htmlFor="iq" className="block">IQ:</label>
            <input type="number" id="iq" name="iq" placeholder="Enter IQ here" className="border border-gray-300 p-2 w-full"/>
          </div>
          <div className="mb-4">
            <label htmlFor="Gender" className="block">Gender</label>
            <p>
              <input type="radio" name="gender" value="male" defaultChecked className="mr-2"/> Male<br/>
              <input type="radio" name="gender" value="female" className="mr-2"/> Female<br/>
              <input type="radio" name="gender" value="other" className="mr-2"/> Other
            </p>
          </div>
          <div className="mb-4">
            <label htmlFor="date-label" className="block">Date of Proposed Outing:</label>
            <input type="date" name="bday" className="border border-gray-300 p-2 w-full"/>
          </div>
        </fieldset>





        <fieldset className="border border-gray-300 p-4 mb-4">
          <legend className="font-bold">Check All That Apply</legend>
          <p>
            <input type="checkbox" name="tattoo" value="tattoo" className="mr-2"/> I have tattoos and/or piercings<br/>
            <input type="checkbox" name="age" value="Car" className="mr-2"/> I am more than 2 years older than my daughter<br/>
            <input type="checkbox" name="car" value="car" className="mr-2"/> I own a panel van or V8 ute<br/>
            <input type="checkbox" name="work" value="work" defaultChecked className="mr-2"/> I work full-time<br/>
            <input type="checkbox" name="rich" value="rich" defaultChecked className="mr-2"/> My parents are rich<br/>
            <input type="checkbox" name="loc" value="loc" defaultChecked className="mr-2"/> Is the date at a well lit public location<br/>
          </p>
        </fieldset>

        <fieldset className="border border-gray-300 p-4 mb-4">
          <div className="mb-4">
            <label htmlFor="politics" className="block">Political Persuasion:</label>
            <select id="dropdown" name="politics" className="border border-gray-300 p-2 w-full">
              <option value="left">Left Wing</option>
              <option value="right">Right Wing</option>
              <option value="conservative">Conservative</option>
              <option value="nazi">Nazi</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="education" className="block">Education Level Completed:</label>
            <select id="dropdown2" name="education" className="border border-gray-300 p-2 w-full">
              <option value="University">University</option>
              <option value="College">College</option>
              <option value="Secondary">High School</option>  
              <option value="None">None</option>
            </select>
          </div>
        </fieldset>

        <fieldset className="border border-gray-300 p-4 mb-4">
          <legend className="font-bold">Essay Section</legend>
          <div className="mb-4">
            <p>In 50 words or more explain why you want to date my daughter</p>
            <textarea id="msg" name="user_message" rows={4} placeholder="Enter Text Here" className="border border-gray-300 p-2 w-full"></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="msg2" className="block">Please upload contact details for 2 references</label>
            <textarea id="msg2" name="user_references" rows={4} placeholder="Enter Text Here" className="border border-gray-300 p-2 w-full"></textarea>
          </div>
          <div className="mb-4">
            <p>Upload Police Clearance Certificate, Bank Statement and Medical Certificates here:</p>
            <input type="file" accept="image/*" multiple onChange={handleImageChange} className="mb-4"/>
            {selectedImages.length > 0 && (
              <div>
                <p>Preview:</p>
                <div className="grid grid-cols-3 gap-4">
                  {selectedImages.map((image, index) => (
                    <img key={index} src={image} alt={`Uploaded Preview ${index + 1}`} className="w-32 h-32 object-cover"/>
                  ))}
                </div>
              </div>
            )}
          </div>
        </fieldset>

        <div id="submitbutton" className="flex justify-center">
          <button type="submit" id="submit" className="bg-red-600 text-white py-2 px-4 rounded">Send your application</button>
        </div>
      </form>
    </div>
  );
}

export default Demo;
