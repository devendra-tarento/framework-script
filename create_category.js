const { performRequest } = require('./http_service.js');
const { categories } = require('./fraccl_framework_data.js');


// const endpoint= '/api/framework/v1/category/create?framework=upsmf';
const method= 'post';
const requestData = {
    request: {
        "category": {
            "name": "",
            "code": "",
        }
    }
}

function createCategories(frameworkName) {
    const endpoint= '/api/framework/v1/category/create?framework='+ frameworkName;
    categories.forEach((category) => {
        requestData.request.category.name= category.name;
        requestData.request.category.code= category.code;
        performRequest(endpoint, 'POST', requestData);
    });
}





// createCategories("nirayama_frccl_fw");

