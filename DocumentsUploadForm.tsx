import React, { useState } from 'react';

const DocumentsUploadForm: React.FC = () => {
  const [documentType, setDocumentType] = useState<string>('');
  const [addressType, setAddressType] = useState<string>('');
  const [VTRType, setVTRType] = useState<string>('');
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [selectedaddImages, setaddSelectedImages] = useState<string[]>([]);
  const [selectedPOPImages, setPOPSelectedImages] = useState<string[]>([]);
  const [selectedBRDImages, setBRDSelectedImages] = useState<string[]>([]);
  const [selectedVTRImages, setVTRSelectedImages] = useState<string[]>([]);

  const handleDocumentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDocumentType(event.target.value);
  };
  const handleaddDocumentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAddressType(event.target.value);
  };
  const handleVTRDocumentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setVTRType(event.target.value);
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
  const handleVTRImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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

      Promise.all(imageUrls).then(urls => setVTRSelectedImages(prevImages => [...prevImages, ...urls]));
    }
  };
  const handlePOAImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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

      Promise.all(imageUrls).then(urls => setaddSelectedImages(prevImages => [...prevImages, ...urls]));
    }
  };
  const removeImage = (index: number) => {
    setSelectedImages(prevImages => prevImages.filter((_, i) => i !== index));
  };

  const handlePOPImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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

      Promise.all(imageUrls).then(urls => setPOPSelectedImages(prevImages => [...prevImages, ...urls]));
    }
  };

  const handleBRDImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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

      Promise.all(imageUrls).then(urls => setBRDSelectedImages(prevImages => [...prevImages, ...urls]));
    }
  };


  return (
    <div className="flex justify-center items-center bg-white">
    <div className="flex justify-center items-center w-full max-w-[80%] bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <form id="survey-form" action="/my-handling-form-page" method="post" className="bg-white mx-auto p-6 border border-gray-300 rounded-md w-full max-w-4xl">
        <h1 id="title" className="text-2xl text-center font-bold capitalize mb-2">Upload Documents Here</h1>
        <p id="description" className="text-center mb-4 text-gray-500"><b>Note:</b> Images should not be less than 200kb</p>

        <fieldset className="relative border border-gray-300 p-4 mb-4">
          <legend className="font-bold text-orange-500">Proof of Identity (POI)</legend>
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
            <input type="text" required id="id" name="id_number" placeholder={`Enter ${documentType} Number here`} className="border border-gray-300 p-2 w-full" />
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
          <legend className="font-bold text-orange-500">Proof of Address (POA)</legend>
          <div className="mb-4">
            <label htmlFor="document" className="block">Select Document</label>
            <select id="document" name="document" className="border border-gray-300 p-2 w-full" onChange={handleaddDocumentChange} defaultValue="Passport">
              <option value="Passport"></option>
              <option value="Utility bills (electricity, water, gas) not more than three months old">Utility bills (electricity, water, gas) not more than three months old</option>
              <option value="Bank or credit card statements not more than three months old">Bank or credit card statements not more than three months old</option>
              <option value="Rental agreement or lease agreement">Rental agreement or lease agreement</option>
              <option value="Aadhaar card (with address)">Aadhaar card (with address)</option>
              <option value="Property tax receipt">Property tax receipt</option>
            </select>
          </div>
          <div className="mb-4">
            <p>Upload {addressType} Image here:</p>
            <input type="file" accept="image/*" multiple onChange={handlePOAImageChange} className="mb-4"/>
            {selectedaddImages.length > 0 && (
              <div>
                <p>Preview:</p>
                <div className="grid grid-cols-3 gap-4">
                  {selectedaddImages.map((image, index) => (
                    <img key={index} src={image} alt={`Uploaded Preview ${index + 1}`} className="w-32 h-32 object-cover"/>
                  ))}
                </div>
              </div>
            )}
          </div>
        </fieldset>

        <fieldset className="border border-gray-300 p-4 mb-4">
          <legend className="font-bold text-orange-500">Photographs of Partners</legend>
          <div className="mb-4">
            <p>Upload Photographs of atleast two members</p>
            <input type="file" accept="image/*" multiple onChange={handlePOPImageChange} className="mb-4"/>
            {selectedPOPImages.length > 0 && (
              <div>
                <p>Preview:</p>
                <div className="grid grid-cols-3 gap-4">
                  {selectedPOPImages.map((image, index) => (
                    <img key={index} src={image} alt={`Uploaded Preview ${index + 1}`} className="w-32 h-32 object-cover"/>
                  ))}
                </div>
              </div>
            )}
          </div>
        </fieldset>

        <fieldset className="border border-gray-300 p-4 mb-4">
          <legend className="font-bold text-orange-500">Business Registration Documents</legend>
          <div className="mb-4">
            <p>Certificate of Registration of Business/Trade License</p>
            <p id="description" className="text-start text-xs mb-4 text-[gray]"><b>Note:</b> This document confirms the
legal existence of the sole proprietorship and includes details such as the business
name, proprietor's name, business address, and date of registration.</p>
            <input type="file" accept="image/*" multiple onChange={handleBRDImageChange} className="mb-4"/>
            {selectedBRDImages.length > 0 && (
              <div>
                <p>Preview:</p>
                <div className="grid grid-cols-3 gap-4">
                  {selectedBRDImages.map((image, index) => (
                    <img key={index} src={image} alt={`Uploaded Preview ${index + 1}`} className="w-32 h-32 object-cover"/>
                  ))}
                </div>
              </div>
            )}
          </div>
        </fieldset>

        <fieldset className="border border-gray-300 p-4 mb-4">
          <legend className="font-bold text-orange-500">Verification of Tax Registration</legend>
          
          <div className="mb-4">
        <label htmlFor="document" className="block">Select Document</label>
        <select id="document" name="document" className="border border-gray-300 p-2 w-full" onChange={handleVTRDocumentChange} defaultValue="vtr document">
        <option value="vtrdocument"></option>
          <option value="PAN">Permanent Account Number (PAN)</option>
          <option value="TIN">Tax Identification Number (TIN)</option>
        </select>
      </div>
      <div className="mb-4">
        <label id="id-label" htmlFor="id" className="block">Enter {VTRType} Number</label>
        <input type="text" required id="id" name="id_number" placeholder={`Enter ${VTRType} Number here`} className="border border-gray-300 p-2 w-full"/>
      </div>
      <div className="mb-4">
            <p>Upload Document Image here:</p>
            <input type="file" accept="image/*" multiple onChange={handleVTRImageChange} className="mb-4"/>
            {selectedVTRImages.length > 0 && (
              <div>
                <p>Preview:</p>
                <div className="grid grid-cols-3 gap-4">
                  {selectedVTRImages.map((image, index) => (
                    <img key={index} src={image} alt={`Uploaded Preview ${index + 1}`} className="w-32 h-32 object-cover"/>
                  ))}
                </div>
              </div>
            )}
          </div>
        </fieldset>

        <fieldset className="mb-6">
          <legend className="text-lg font-semibold mb-2 text-orange-500">
            Bank Account Details of the Business
          </legend>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="number">
                Account number*
              </label>
              <input className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="acc_number" type="text" required />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                Bank name*
              </label>
              <input className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="bank_name" type="text" required />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="address">
                Branch address*
              </label>
              <input className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="address" type="text" required />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="code">
                IFSC code*
              </label>
              <input className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="ifsc" type="text" required />
            </div>
          </div>
        </fieldset>
{/* 
        <div className="flex justify-between">
          <button type="button" className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600" style={{ minWidth: "100px" }}>
            Previous
          </button>
          <button type="button" className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600" style={{ minWidth: "100px" }}>
            Next
          </button>
        </div> */}
      </form>
    </div>
    </div>
    
  );
}

export default DocumentsUploadForm;
