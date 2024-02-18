const API_URLS = {
  development: "http://localhost:8000",
  production: "http://test555.demo.jelastic.com:8000",
  // staging: "https://staging.api.example.com",
  // Add more environments or conditions as needed
};

export default function getApiUrl() {
  // Logic to determine the environment or condition
  const environment = process.env.NODE_ENV || "development"; // Default to development

  // Retrieve the API URL based on the environment
  return API_URLS[environment];
}
