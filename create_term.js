const { performRequest } = require('./http_service.js')
const { 
    gnm_1_anatomy_and_physiology_fw,
    gnm_1_microbiology,
    gnm_1_psychology_fw,
    gnm_1_sociology_fw,
    gnm_1_fundamental_of_nursing_fw,
    gnm_1_first_aid_fw,
    gnm_1_community_health_nursing_1_fw,
    gnm_1_environmental_hygiene_fw,
    gnm_1_health_education_and_communication_fw,
    gnm_1_nutrition_fw,
    gnm_1_english_fw,
    gnm_1_computer_education_fw,
    gnm_2_medical_surgical_nursing_2_fw,
    gnm_2_mental_health_nursing_fw,
    gnm_2_child_health_nursing_fw,
    gnm_3_midwifery_and_gynaecological_nursing_fw,
    gnm_3_community_health_nursing_2_fw, 
} = require('./fraccl_framework_data.js');

const categories= [
    gnm_1_anatomy_and_physiology_fw, //Added
    // gnm_1_microbiology, //Added
    // gnm_1_psychology_fw,// Added
    // gnm_1_sociology_fw, //Added
    // gnm_1_fundamental_of_nursing_fw,//Added
    // gnm_1_first_aid_fw,// Added
    // gnm_1_community_health_nursing_1_fw, //Added
    // gnm_1_environmental_hygiene_fw,//Added
    // gnm_1_health_education_and_communication_fw,//Added
    // gnm_1_nutrition_fw,//Added'
    // gnm_1_english_fw,//Added
    // gnm_1_computer_education_fw,// Added
    // gnm_2_medical_surgical_nursing_2_fw, //Added
    // gnm_2_mental_health_nursing_fw, //Added
    // gnm_2_child_health_nursing_fw, //Added
    // gnm_3_midwifery_and_gynaecological_nursing_fw, //Added
    // gnm_3_community_health_nursing_2_fw,// Added
    
];



const method= 'post';
const requestData = {
    request: {
        "term": {
            "name": "",
            "code": "",
        }
    }
}

// const frameworkCode= "nirayama_frccl_fw";
const frameworkCode= "nirayama_fw";


function createBoardTerms(functions) {
    const endpoint= '/api/framework/v1/term/create?framework='+frameworkCode+'&category=board';
    console.log("Formatted Terms ---",functions );
    functions.forEach((term) => {
        console.log('Term Name--', term);
        let code = getCode(term);
        requestData.request.term.name= term;
        requestData.request.term.code= code;
        performRequest(endpoint, method, requestData);
    });
}


function createMediumTerms(roles) {
    const endpoint= '/api/framework/v1/term/create?framework='+frameworkCode+'&category=medium';
    roles.forEach((term) => {
        let code = getCode(term);
        requestData.request.term.name= term;
        requestData.request.term.code= code;
        performRequest(endpoint, method, requestData);
    });
}


function createGradeLevelTerms(activities) {
    const endpoint= '/api/framework/v1/term/create?framework='+frameworkCode+'&category=gradeLevel';
    activities.forEach((term) => {
        let code = getCode(term);
        requestData.request.term.name= term;
        requestData.request.term.code= code;
        performRequest(endpoint, method, requestData);
    });
}


function createSubjectTerms(competencies) {
    const endpoint= '/api/framework/v1/term/create?framework='+frameworkCode+'&category=subject';
    competencies.forEach((term) => {
        let code = getCode(term);
        requestData.request.term.name= term;
        requestData.request.term.code= code;
        performRequest(endpoint, method, requestData);
    });
}

function createDifficultyLevelTerms(competencyLevels) {
    const endpoint= '/api/framework/v1/term/create?framework='+frameworkCode+'&category=difficultyLevel';
    competencyLevels.forEach((term) => {
        let code = getCode(term);
        requestData.request.term.name= term;
        requestData.request.term.code= code;
        performRequest(endpoint, method, requestData);
    });
}

function createTermsForEachCategory(categories) {
    categories.forEach((category) => {
        createBoardTerms(category.board);
        createMediumTerms(category.medium);
        createGradeLevelTerms(category.gradeLevel);
        createSubjectTerms(category.subject);
        createDifficultyLevelTerms(category.difficultyLevel);
    }); 
}

function getCode(termName) {
    let code = termName.toLowerCase().replaceAll(' - ','_');
        code = code.replaceAll(' & ','_');
        code = code.replaceAll('/','_');
        code = code.replaceAll('-','_');
        code = code.replaceAll(', ','_');
        code = code.replaceAll(' ','_');
    return code;
}



// createTermsForEachCategory(categories);





