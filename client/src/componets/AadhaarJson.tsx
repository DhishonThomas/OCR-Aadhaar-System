import { Clipboard } from 'lucide-react';

const AadhaarJson = ({jsonData}:any) => {


    const copyToClipboard=()=>{
        navigator.clipboard.writeText(jsonData).then(()=>{
            alert("json data copied to clipboard")
        })
    }
  return (

      <div className=" max-w-5xl mt-2 p-6 bg-white border rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">JSON Data</h2>
          <button
            onClick={copyToClipboard}
            className="p-2 bg-blue-500 text-white rounded-lg flex items-center focus:outline-none hover:bg-blue-600"
          >
            <Clipboard className="w-5 h-5 mr-1" /> Copy
          </button>
        </div>
        <pre className="bg-gray-100 border border-gray-300 rounded-lg p-4 text-xl text-gray-800 overflow-auto">
          {jsonData}
        </pre>
      </div>
  )
}

export default AadhaarJson