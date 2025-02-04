

export function prompt_text(extractedText){
    const prompt=`
      The following is raw extracted from an Aadhaar card using OCR:
    
      "${extractedText}"
    
      Please extract and return the structured Aadhaar details in JSON format like this:
          {
            "name": "Full Name",
            "dob": "DD/MM/YYYY",
            "gender": "Male/Female/Other",
            "uid": "1234 5678 9012",
            "address": "Extracted Address",
            "pincode": "6-digit Pincode"
          }
    
          Ensure that:
          - The values are correctly mapped from the extracted text.
          - If a field is missing, return "Not Found" instead.
    
      `

      return prompt
}