
    const {
        gnm_1_anatomy_and_physiology_r_a_c_association,
        gnm_1_microbiology_r_a_c_association,
        gnm_1_psychology_r_a_c_association,
        gnm_1_sociology_r_a_c_association,
        gnm_1_fundamental_of_nursing_r_a_c_association,
        gnm_1_first_aid_r_a_c_association,
        gnm_1_community_health_nursing_1_r_a_c_association,
        gnm_1_environmental_hygiene_r_a_c_association,
        gnm_1_health_education_and_communication_r_a_c_association,
        gnm_1_nutrition_r_a_c_association,
        gnm_1_english_r_a_c_association,
        gnm_1_computer_education_r_a_c_association,
        gnm_2_medical_surgical_nursing_2_r_a_c_association,
        gnm_2_child_health_nursing_r_a_c_association,
        gnm_2_mental_health_nursing_r_a_c_association,
        gnm_3_midwifery_and_gynaecological_r_a_c_association,
        gnm_3_community_health_nursing_2_r_a_c_association
    } = require('./fraccl_association_with_data');
    const { performRequest } = require('./http_service.js');



    // const frameworkCode= "nirayama_frccl_fw";
    const frameworkCode= "nirayama_fw";
    const requestData = {
        request: {
            "term": {
            }
        }
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



    function getAssociationIdentifiers(association) {
        let identifiers = [];
        if(association.medium && association.medium.length > 0) {
          association.medium.forEach(medium => {
              let code = getCode(medium);
              code = frameworkCode+'_medium_'+code;
              identifiers.push(code);
          })
        }
      
        if(association.gradeLevel && association.gradeLevel.length > 0) {
          association.gradeLevel.forEach(gradeLevel => {
              let code = getCode(gradeLevel);
              code = frameworkCode+"_gradelevel_"+code;
              identifiers.push(code);
          })
        }
      
        if(association.subject && association.subject.length > 0) {
          association.subject.forEach(subject => {
              let code = getCode(subject);
              code = frameworkCode+"_subject_"+code;
              identifiers.push(code);
          })
        }
        if(association.board && association.board.length > 0) {
            association.board.forEach(board => {
                let code = getCode(board);
                code = frameworkCode+"_board_"+code;
                identifiers.push(code);
            })
          }
        if(association.difficultyLevel && association.difficultyLevel.length > 0) {
        association.difficultyLevel.forEach(difficultyLevel => {
            let code =  getCode(difficultyLevel);
            code = frameworkCode+"_difficultyLevel_"+code;
            identifiers.push(code);
        })
        }
        return identifiers.map(identifier => {return {"identifier": identifier}})
        console.log(activites.map(a => {return {"identifier": a.identifier, "name": a.name}}));
      
      }
      

      function updateTermAssociationWithAssociationsWith(association, category) {
        const identifiers = getAssociationIdentifiers(association);
        if(identifiers.length > 0) {
            const code = getCode(association.name);
          const endpoint= '/api/framework/v1/term/update/'+code+'?framework='+frameworkCode+'&category='+category;
          requestData.request.term["associationswith"] = identifiers;
            // requestData.request.term["associations"] = [];
            // requestData.request.term["associationswith"] = [];
          performRequest(endpoint, "PATCH", requestData);
        }
        
    }



        // This function associates each term of subject to terms from gradelLevel and medium and each term of gradelLevel to  terms from medium using associationswith key
        function updateAssociationWith(association) {
            if(association.difficultyLevelAssociations.length > 0) {
                association.difficultyLevelAssociations.forEach(difficultyLevelAssociation => {
                    updateTermAssociationWithAssociationsWith(difficultyLevelAssociation, "difficultyLevel");
                });
            }

            if(association.subjectAssociations.length > 0) {
                association.subjectAssociations.forEach(subjectAssociation => {
                    updateTermAssociationWithAssociationsWith(subjectAssociation, "subject");
                });
            }

            if(association.gradeLevelAssociations.length > 0) {
                association.gradeLevelAssociations.forEach(gradeLevelAssociation => {
                    updateTermAssociationWithAssociationsWith(gradeLevelAssociation, "gradeLevel");
                });
            }

            if(association.mediumAssociations.length > 0) {
                association.mediumAssociations.forEach(mediumAssociation => {
                    updateTermAssociationWithAssociationsWith(mediumAssociation, "medium");
                });
            }
        }


    updateAssociationWith();

