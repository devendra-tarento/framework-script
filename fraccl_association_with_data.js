const activities = [
    //Role 1 Starts //
    'Describes different organs of the body, systemic function and their inter-relationship',
    'Describes the composition of blood and its functions',
    'Describes the structure and functions of heart and blood vessels',
    'Describes the structure and functions of lymphatic system',
    'Describes the structure and functions of respiratory system',
    'Describes the structure and function of digestive system',
    'Describes the structure and functions of organs of excretory system',
    'Describes the structure and functions of endocrine system',
    'Describes the structure and function of male and female reproductive system and accessory organs',
    'Describes the structure and functions of Nervous system',
    'Describes the structure and function of sensory organs',
    'Describes the structure and function of skeletal system',
    'Describes the strcuture and functions of muscular system',
    //Role 2 Starts //
    'Describes the evolution of microbiology and its relevance in nursing',
    'Classifies  different types of micro organism and Describes the normal flora and the common diseases caused by pathogen and Understands the methods to study microbes',
    'Describes the sources of infection and growth of microbes and understands the transmission of infection and the principles in collecting specimens',
    'Describes the various types of immunity hypersensitivity autoimmunity and immunizing agents',
    'Describe the various methods of control and destruction of microbes',
    'Demonstrates skill in handling & care of microscopes Identify common microbes under the microscope',
    //Role 3 Starts 
    'States the concept, scope and importance of psychology',
    'Describes the structure of the mind',
    'Illustrates the dynamics of human behavior and describes the concept of mental health',
    'Describes and applies the process of learning, thinking, reasoning, observation and perception',
    'Discusses the concept and development of personality',
    'Discusses the nature and measurement of intelligence',
    //Role 4 Starts //
    'Describes the nature, scope & content of sociology and its importance in nursing',
    'Describes the influence of the environment on individual development and the rights and responsibilities of the individual in the society',
    'Describes the concept of family as a social unit',
    'Describes about social groups, social change, control, stratification and social problems',
    'Describes the culture and characteristics of community',
    //Role 5 Starts //
    'Defines nursing and explains its nature, meaning, scope,ethics and principles in nursing, identifies the qualities of a  professional nurse health care agencies and its functions and describes the holistic approach to nursing and the determinants of health and the effects of illness',
    'Describes nursing care of the patient/client in hospital using nursing process and demonstrates skill in the admission and discharge process, maintenance of safe environment and records and reports',
    'Describes basic needs of the patient and demonstrates skill in meeting basic care of the patient',
    'Describes the principles of assessment demonstrate skills in assessing the patient',
    'Describes the infection control, methods in the clinical setting and demonstrates infection control practices',
    'Describes therapeutic nursing care',
    'Understands the principles, routes, effects of administration of medications',
    //Role 6 Starts //
    'Describes the importance and principle of first aid',
    'Demonstrates skill in first aid techniques',
    'Describes first aid in common emergencies',
    'Lists various community emergencies and community resources',
    //Role 7 Starts //
    'Describes the concept of health and disease and community health',
    'Understands various aspects of Community Health Nursing and demonstrates skills in applying nursing process in Community Health Nursing settings',
    'Describes the principles of epidemiology and epidemiological methods in community health nursing practice',
    'Demonstrates skill in providing comprehensive nursing care to the family',
    'Describes the principles and techniques of family health care services at home and in clinics',
    'Describes the referral system and community resources for referral',
    'Lists the records and reports used in community health nursing practice',
    'Understands the management of minor ailments',
    //Role 8 Starts //
    'Understands the importance of healthy environment and its relation to health and disease',
    'Describes the environmental factors contributing to health and illness',
    'Describes the community organisation to promote environmental health',
    //Role 9 Starts //
    'Describes the concept and different aspects of communication',
    'Describes the aims and objectives, scope, levels, approaches and principles of health education',
    'Demonstrates the skills of counselling',
    'Describes the types of AV aids and demonstrates skill in preparing and using different kinds of audio – visual aids',
    //Role 10 Starts //
    'Describes the relationship between nutrition and health',
    'Describes the classification of food',
    'Understands normal dietary requirements and demonstrates skill in calculating normal food requirements',
    'Describes the principles and various methods of preparation, preservation and storage of food',
    'Describes about therapeutic diet',
    'Describes the concept of community nutrition',
    'Demonstrates skill in preparation of common food items',
    //Role 11 Starts //
    'Speaks and writes correct grammatical English',
    'Develops ability to read , understand and write in English',
    'Demonstrates conversation skills',
    //Role 12 Starts //
    'Describes the structure and purpose of computers and disc operating systems',
    'Demonstrates skill in the use of MS office',
    'Demonstrates skills in using multimedia',
    'Demonstrates the use of internet and e-mail',
    //Role 13 Starts //
    'Understands the history of modern Medicine and Surgery',
    'Demonstrates skill in conducting health assessment and physical examination',
    'Describes the pathophysiological mechanism of diseases',
    'Demonstrates skill in providing nursing care to patients with altered immune response',
    'Demonstrates skill in management of client with fluid and electrolyte imbalance',
    'Describes the physical set up of OT and its equipments and demonstrates skill in theatre techniques',
    'Demonstrates skill in preparing the client for surgery and recognizes and performs the role of nurse during surgery',
    'Demonstrates skill in giving care to clients after surgery (post-operative care)',
    'Demonstrates skills in the nursing management of client with impaired respiratory function and gaseous exchange',
    'Describes the various gastro intestinal disorders and demonstrates skill in providing care for clients with gastro intestinal disorders',
    'Describes the management of patients with metabolic and endocrinal disorders and demonstrates skills in caring for the clients with metabolic and endocrinal disorders',
    'Describes the management of clients with urinary and renal disorders and demonstrates skill in giving care of client with urinary and renal disorders',
    'Describes the nursing and management of clients with Neurological disorders and demonstrates skill in giving nursing care to clients with Neurological disorders',
    'DescribeS the management of clients with connective tissue and collagen disorders and demonstrates skill in providing nursing care to clients with connective tissue and collagen disorders',
    'Describes the nurse’s role in promoting wellness for elderly and demonstrates skill in providing nursing care for elderly clients',
    //Role 14 Starts //
    'Describes the management of patients with oncology',
    'Describes the disorders of breast and breast cancer and demonstrates skill in giving nursing care to patients with breast disorders',
    'Describes the various diseases and disorders of integumentary system and their management and demonstrates skill in providing care to the clients with disorders of integumentry system',
    'Describes the disorder and diseases of eye and demonstrates skill in giving care for patients with various eye diseases and disorders',
    'Describes disorders and diseases of ear, nose and throat and demonstrates skills in providing nursing care for patients with various ENT problems',
    'Describes cardiovascular circulatory and Hematological disorders and diseases and demonstrates skill in carrying nursing interventions for clients with circulatory and hematological disorders and diseases',
    'Describes the nursing management of patients with communicable diseases and demonstrates skill in providing interventions for patients with communicable diseases and understands the nurse’s role in various national control/ Eradication Programme of communicable diseases',
    'Describes various sexually transmitted diseases and demonstrates skills in syndromic management of sexually transmitted diseases',
    'Describes various musculo skeletal disorders and diseases and demonstrates skills in management of musculo skeletal diseases',
    'Decribes the role of nurse in medical surgical nursing and demonstrate skill in meeting medical surgical nursing',
    'Identifies and demonstrates nurses skill in managing emergencies and disaster',
    //Role 15 Starts //
    'Describes the concept of mental health and mental illness in relation to providing comprehensive care to the patients',
    'Understands the historical development of Psychiatry and psychiatric nursing',
    'Describes mental health assessment',
    'Describes therapeutic relationships and demonstrates skills in process recording',
    'Lists various mental disorders and describes their mental and psychiatric and nursing management',
    'Describes the Bio– psychosocial therapies and understands the role of the nurse',
    'Describes the concept of preventive community mental health services and enumerates the nurse’s role in National mental health programme',
    'Understands different psychiatric emergencies and their management and demonstrates skills in crisis intervention',
    'Describes the legal aspects to be kept in mind in the care of mentally ill patients',
    //Role 16 Starts //
    'Understands the concept of the child health care, trends & emerging challenges for pediatric nurses and describes the role of pediatric nurses in clinics, hospitals and community',
    'Describes the normal growth & development of children',
    'Describes the role of nurse in caring for a sick child. Develop skill in carrying out nursing intervention while caring for pediatric age group',
    'Describes the management of behavioral disorders and common health problems of children and demonstrates skills in the prevention & implementation of medical & nursing management of behavioral disorders & common health problems',
    'Demonstrates skills in providing comprehensive nursing care to the children having congenital defects/ malformation',
    'Demonstrates skills in providing comprehensive nursing care to children with various disorders & diseases',
    'Describes the various child welfare services provided by Governmental & non Governmental agencies and understands the ethical & legal implication in pediatric nursing',
    //Role 17 Starts //
    'Describes the scope and trends in midwifery',
    'Describes the anatomy and physiology of female reproductive system',
    'Describes the stages of Embryological and fetal development',
    'Describes the physiological changes in pregnancy and the management of normal pregnancy and demonstrates skill is caring for pregnant women',
    'Describes the various stages of labour and the role of the midwife in caring for a woman in labour and demonstrates skill in conducting normal delivery',
    'Describes the management of normal newborn and demonstrates skill in caring for the normal newborn',
    'Describes normal pureperium and the role of midwife in the caring for woman in puerperium',
    'Describes the complications of pregnancy and  demonstrates skills in providing care for women with complicated pregnancy',
    'Describes the management high risk labour and demonstrates skills in early detection and prompt management of high risk labour',
    'Describes the puerperal complications and demonstrates skill in the management of complications of puerperium',
    'Describes the management of high risk and sick newborn and demonstrates skills in caring for high risk and sick newborns',
    'Describes the obstetric operations and midwife role in assisting with each one',
    'Describes the midwife’s role in the administration of drugs for women during pregnancy, labour and post parturn period',
    'Describes the ethical & legal issues related to midwifery',
    //Role 18 Starts //
    'Understands the health system in India',
    'Describes the health care services in India and discusses the role of the nurse in these services',
    'Describes health planning in India',
    'Describes the different specialized community health services and the nurses role in these services',
    'Describes the major health problems in India',
    'Describes the national health and family welfare programs in India and the role of the nurse',
    'Understands the meaning of demography and describes the national family welfare programmes',
    'Describes the concept and functions of health team and the role of nursing personnel at various levels',
    'Understands the concept and uses of health information system',
    'Describes the national and international health agencies'
    ];
    
    
    const competencies = [
    'Pregnancy Identification',//c1
    'Birth Planning and Preparedness for PW and HRP',//c2
    'Vaginal examination and plotting on partograph',//c3
    'Normal delivery',//c4
    'AMTSL',//c5
    'Fourth Stage of Labour monitoring of mother and newborn',//c6
    'Essential Newborn Care',//c7
    'Post Partum Hemorrage',//c8
    'Eclampsia',//c9
    'Neonatal resuscitation',//c10
    'Emergency triage assessment',//c11
    'Management of emergency signs in newborns',//c12
    'Low birth weight newborns',//c13
    'Kangaroo Mother Care',//c14
    'Post natal or partum care',//c15
    'LAM',//c16
    'IUCD or PPIUCD',//c17
    'Awareness on basket of choice',//c18
    'Assessment and management of danger signs in sick young infant or sick child',//c19
    'Immunization services',//c20
    'Growth and development of child',//c21
    'Breastfeeding',//c22
    'Supplements and nutrition',//c23
    'Dietary requirements',//c24
    'Curative services for minor ailments',//c25
    'Pre referral management and transportation including neonates',//c26
    'Maternal and Child Death Review support',//c27
    'Epidemiology',//c28
    'National Health Programs',//c29
    'Elderly and PWD care and support',//c30
    'Evolution of medicine and pathophysiological mechanism',//c31
    'Altered Immune response',//c32
    'Fluid and electrolyte imbalance',//c33
    'OT protocols',//c34
    'Pre intra and post op care',//c35
    'Respiratory disorders',//c36
    'Gastro intestinal disorders',//c37
    'Metabolic and endocrinal disorders',//c38
    'Renal and urinary disorders',//c39
    'Neurological disorders',//c40
    'Oncology Nursing',//c41
    'Integumentary system and disorders',//c42
    'Ophthalmology and ophthalmic nursing',//c43
    'ENT disorders',//c44
    'Cardio vascular circulatory and hematological disorders',//c45
    'Sexually transmitted diseases',//c46
    'Mental Disorders',//c47
    'Psychology',//c48
    'Sociology',//c49
    'Micro organisms',//c50
    'Immunity, Infection and destruction of microbes',//c51
    'Renal disorders in children',//c52
    'Respiratory disorders in children',//c53
    'Nutrition',//c54
    'Cardiovascular diseases in children',//c55
    'Hematological disorders in children',//c56
    'Neurological disorders in children',//c57
    'Endocrine disorders in children',//c58
    'Development problems in children',//c59
    'Concept of community health and community health nursing',//c60
    'Principles of environmental hygience',//c61
    'Communication and health education',//c62
    'Counselling',//c63
    'English',//c64
    'Computer education',//c65
    'Health systems and community health services',//c66
    'Teaching and learning',//c67
    'Midwifery and obstretrical nursing',//c68
    'Child Health Nursing',//c69
    'Concept of mental health and mental illness and its legal aspects',//c70
    'Musculo skeletal disorders and diseases',//c71
    'Concept of family Health and family health nursing'//c72
    ];
    
    const competencyLevels = [
    //C1 levels
    "Understands health of males and females and initial assessment protocols",
    "Identifies pregnancy",
    "Knows ANC assessment",
    "Conducts ANC assessment and provides ANC interventions",
    "Identifies HRP based on assessment and refers them",
    //C2 levela
    "Understands components of registration for PW",
    "Prepare schedule for PW or HRP",
    "Provides referral support and prepares emergency birth plans",
    "Manages patient issues and evaluates strategies to mitigate",
    "Conducts visits to counsel PW and promotes institutional delivery",
    //C3 levels
    "Understands vaginal examination danger signs and partographs",
    "Performs vaginal examination",
    "Plots partograph",
    "Interprets partograph for danger signs",
    "Assesses if referral is required",
    //C4 levels
    "Understands components of normal delivery and second stage of labour",
    "Understands complications in PW and its management",
    "Conducts normal delivery",
    "Identifies complications and manages accordingly",
    // "Assesses if referral is required",
    //C5 levels
    "Understands protocol of AMTSL",
    "Understands complications in Third stage and its management",
    "Conducts AMTSL",
    // "Identifies complications and manages accordingly",
    // "Assesses if referral is required",
    //C6 Levels
    "Understands fourth stage of labour",
    "Assesses and monitors condition of mother and newborn",
    "Identifies danger signs in mother and newborn",
    "Manages danger signs in mother and newborn",
    // "Assesses if referral is required",
    //C7 levels
    "Understands protocols of ENBC",
    "Understands protocols of infection prevention vit K1 administration and maintaining warm chains",
    "Performs essential new born care as per protocol",
    "Identify danger signs",
    // "Assesses if referral is required",
    //C8 levels
    "Understands PPH",
    "Identifies PPH",
    "Performs basic medical management",
    "Performs advanced management",
    // "Assesses if referral is required",
    //C9 levels
    "Understands pre eclampsia eclampsia and its types and diagnosis",
    "Perfoms initial assessment",
    "Identifies eclampsia cases and categorises danger signs",
    "Performs management",
    // "Assesses if referral is required",
    //C10 levels
    "Understands neonatal resuscitation its management and post resuscitation care",
    "Performs neonatal resuscitation",
    "Performs resuscitation",
    "Evaluates and revises treatment as per protocol",
    // "Assesses if referral is required",
    //C11 levels
    "Understands triaging",
    "Understands assessment",
    "Assesses emergency and priority signs",
    "Manages emergency signs",
    // "Assesses if referral is required",
    //C12 levels
    "Understands emergency signs and assessment in newborns",
    "Understands management",
    "Performs assessment of emergency signs in newborns",
    "Stablilizes child with emergency signs",
    // "Assesses if referral is required",
    //C13 levels
    "Recognises weighing techniques and categorization",
    "Understands management",
    "Identifies and manages lbw newborns",
    "Reforms feeding methods",
    // "Assesses if referral is required",
    //C14 levels
    "Understands guidelines and components of KMC",
    "Understands eligibility criteria of KMC",
    "Understands protocol of counselling",
    "Counselling on KMC",
    "Monitoring and report KMC",
    //C15 levels
    "Knows care beyond birth guidelines",
    "Understands danger signs",
    "Observes, monitors and identifies danger signs",
    "Manages and maps referral cases",
    "Follow up care",
    //C16 levels
    "Interprets LAM guidelines",
    "Counsels women",
    "Guides mothers on breastfeeding practices",
    "Assesses risk of pregnancy",
    "Counsels client for contraceptives",
    //C17 levels
    "Knows the guidelines of PPIUCD or IUCD",
    "Counsels women",
    "Understands the medical eligibility for PPIUCD/IUCD",
    "Screens client",
    "Performs asceptic insertion",
    //C18 levels
    "Understands basket of choice and its effectiveness",
    "Counsels client",
    "Understands medical eligibility and danger signs",
    "Screens client",
    "Initiates methods and follow up",
    //C19 levels
    "Understands danger signs and classification of sick newborns and child",
    "Understands management protocols",
    "Assesses based on danger signs",
    "Identifies treatment based on assessment",
    "Provides treatment based on assessment",
    //C20 levels
    "Understands pediatric immunisation",
    "Understands protocols and documentation",
    "Plans and provides vaccination",
    "Assesses and manages side effects",
    "Refers and provides pre referral support",
    //C21 levels
    "Understands importance of growth and development",
    "Understands techniques for assessment and guidelines on child development",
    "Assesses growth and development of child",
    "Champions awareness",
    // "Assesses if referral is required",
    //C22 levels
    "Understands early breastfeeding in newborns and its indications",
    "Understands breastfeeding protocols",
    "Understands counselling protocols and feeding methods",
    "Identifies situation and counsels client",
    "Supports and monitors condition of mother and newborn",
    //C23 levels
    "Understands supplements and nutritional requirements",
    "Interprets dosage as per condition",
    "Calculates intake and prepares plans",
    "Administers supplements and counsels for nutrition",
    "Conducts follow up care",
    //C24 levels
    "Remembers the concept of nutrition and health",
    "Understands normal dietary requirements",
    "Interprets the significance of therapeutic diet and applies it",
    //C25 levels
    "Understands minor ailments and its treatment",
    "Provides treatment",
    "Monitors and tracks patients",
    "Maintains records",
    "Refers patients to higher facility",
    //C26 levels
    "Understands referral identification and management",
    "Understands referral counselling and support",
    "Identifies need for referral",
    "Councels the patient and the attendants and stablises the patient",
    "Refers patients to higher facility",
    //C27 levels
    "Understands MCDR protocols",
    "Notifies identified Maternal/Child death",
    "Support in MCDR community investigation",
    "Compile and present information related to MCDR",
    "Implement suggestions by MCDR committee",
    //C28 levels
    "Remembers the concept of epidemiology",
    "Understands uses of epidemiology",
    "Interprets how epidemiology is applied to the prevention and control of diseases",
    //C29 levels
    "Understands various diseases their symptoms and their complications",
    "Understands contact tracing and screening",
    "Conducts contact tracing and screening",
    "Spreads awareness among coworkers and community members",
    "Refers patients to higher facility",
    //C30 levels
    "Understands elderly diseases and various disabilities and government schemes",
    "Provides health education and creates awareness",
    "Provides care and support",
    "Creates linkages and community engagement",
    "Refers patients to higher facility",
    //C31 levels
    "Understands the evolution of modern medicine and surgery",
    "Understands theory of causation of illness and human response to disease",
    "Understands pathophysiological mechanism of disease",
    "Prepares counselling plan and dietary plan",
    "Estimates patient requirement and modifies treatment",
    //C32 levels
    "Understandsallergy and auto immune diseases or disorders",
    "Understands drugs used for treament of auto immune diseases or disorders",
    "Understands allergy disorders",
    "Assesses disease or disorder",
    "Administers drugs",
    //C33 levels
    "Understands fluid and electrolyte balance",
    "Understands management protocols",
    "Understands signs and symptoms of imbalance and clinical examinations used",
    "Identifies fluid and electrolyte imbalance",
    "Manages patient",
    //C34 levels
    "Understands protocols for Surgical handwashing and PPE donning doffing",
    "Understands the protocols for disinfecting OT and its equipments",
    "Understands sterilisation of instruments and lenins",
    "Performs handwashing OT disinfection and sterilisation",
    "Supervises other staff on OT protocols and maintains OT",
    //C35 levels
    "Understands pre op care",
    "Understands intra operative management",
    "Understands post op care",
    "Performs pre op and intra operative care",
    "Peforms post op care and manages if any complications",
    //C36 levels
    "Understands the respiratory system",
    "Understands the symtoms of respiratory disorders and their management",
    "Conducts assessments",
    "Diagnostic evaluation",
    "Manages respiratory disorders",
    //C37 levels
    "Understands the digestive system",
    "Understands the symtoms of GI disorders and their management",
    "Conducts assessments",
    "Diagnostic evaluation",
    "Manages GI disorders",
    //C38 levels
    "Understands the endocrine system",
    "Understands the symptoms of metabolic and endocrinal disorders",
    "Conducts assessments",
    "Diagnostic evaluation",
    "Manages disorders",
    //C39 levels
    "Understands the excretory system",
    "Understands the symptoms of disorders",
    "Conducts assessments",
    "Diagnostic evaluation",
    "Manages disorders",
    //C40 levels
    "Understands the nervous system",
    "Understands the symptoms",
    "Conducts assessments",
    "Diagnostic evaluation",
    "Manages patient",
    //C41 levels
    "Understands structure and function of cells",
    "Understands signs and symptoms of cancer",
    "Understands management of oncological disorders",
    "Conducts assessment and identifies treament",
    "Manages patient",
    //C42 levels
    "Understands structure and function",
    "Understands disorders and burns",
    "Understands assessment and complications",
    "Conducts assessment",
    "Manages patient",
    //C43 levels
    "Understands the structure of the eye",
    "Understands various diseases and disorders and its management",
    "Understands assessment methodology",
    "Conducts assessment",
    "Manages patient",
    //C44 levels
    "Understands the structure of the ear, nose and throat",
    "Understands signs and symptoms of diseases",
    // "Understands assessment",
    "Conducts assessment and identifies disease",
    "Manages patient",
    //C45 levels
    "Understands the circulatory system",
    "Understands signs and symptoms of diseases",
    // "Understands assessment",
    "Conducts assessment and identifies disease",
    "Manages patient",
    //C46 levels
    "Understands sexually transmitted diseases",
    "Understands the management of the disease",
    // "Understands assessment",
    "Conducts assessment and identifies disease",
    "Manages patient",
    //C47 levels
    "Understands the psycho pathophysiology etiological theories and classification of mental disorder",
    "Understands the various mental disorders",
    "Understands signs and symptoms",
    "Understands nursing process pharmacology and therapies",
    "Provides nursing care",
    //C48 levels
    "Understands the nature of psychology and the structure of the mind",
    "Understands the psychology of human behaviour",
    "Understands learning, thinking & reasoning and observation and perception",
    "Understands personality",
    "Understands intelligence",
    //C49 levels
    "Remembers the basics of sociology and individual",
    "Understands family",
    "Interprets society",
    "Recognises community",
    //C50 levels
    "Understands microbiology and the structure and classification of micro organisms and flora of human body",
    "Understands the different parts of the microscope",
    "Understands the principles of microscopy",
    "Studies microbes",
    "Observes under microscope",
    //C51 levels
    "Understands immunity",
    "Understands the different types of infections",
    "Understands the factors affecting growth of microbes and mechanism of resistance",
    "Understands microbial control and different methods of disinfection and sterilisation",
    "Demonstrates skills of specimen collection",
    //C52 levels
    "Understands renal disorders in children",
    "Understands assessments and management of renal disorders",
    "Conducts assessment",
    "Diagnostic evaluation",
    "Manages treatment",
    //C53 levels
    "Understands etiology and signs and symptoms of respiratory disorders in children",
    "Understands assessments and management of respiratory disorders",
    "Conducts assessment",
    "Diagnostic evaluation",
    "Manages treatment",
    //C54 levels
    "Remembers the concept of cooking and its effect on food and nutrients",
    "Understands preparation of common food items",
    "Demonstrates skills for prepartion of common food items",
    //C55 levels
    "Understands etiology and signs and symptoms of CVS disorders in children",
    "Understands assessments and management of CVS disorders",
    "Conducts assessment",
    "Diagnostic evaluation",
    "Manages treatment",
    //C56 levels
    "Understands etiology and signs and symptoms of hematological disorders in children",
    "Understands assessments and management of hematological disorders",
    "Conducts assessment",
    "Diagnostic evaluation",
    "Manages treatment",
    //C57 levels
    "Understands etiology and signs and symptoms of neurological disorders in children",
    "Understands assessments and management of neurological disorders",
    "Conducts assessment",
    "Diagnostic evaluation",
    "Manages treatment",
    //C58 levels
    "Understands etiology and signs and symptoms of endocrine disorders in children",
    "Understands assessments and management of endocrine disorders",
    "Conducts assessment",
    "Diagnostic evaluation",
    "Manages treatment",
    //C59 levels
    "Understands etiology and signs and symptoms of developmental problems in children",
    "Understands assessments and management of developmental problems",
    "Conducts assessment",
    "Diagnostic evaluation",
    "Manages treatment",
    //C60 levels
    "Remembers the concept of community health nursing",
    "Understands the primary health care promotion of health and prevention of disease for maintenance of health",
    "Interprets role of nurses in Community health nursing",
    //C61 levels
    "Understands the importance of health environment and its reation to health and disease",
    "Understands the various environmental factors contributing to health",
    "Recognises the community organisations",
    //C62 levels
    "Remembers concept and different aspects of communication",
    "Understands principles of health education",
    "Recognises types of AV media",
    "Applies the principles of health education",
    //C63 levels
    "Remembers concept and principles of counselling",
    "Understands counselling process",
    "Interprets role of nurses in counselling",
    "Counsels",
    //C64 levels
    "Understands correct gramatical english",
    "Reads english",
    "Writes in english",
    "Demonstrates conversation skills",
    "Demonstrates understanding reading writing and speaking in English",
    //C65 levels
    "Understands the structure and purpose of computers and disc opertaing systems",
    "Recognises MS Office multimedia and internet",
    "Demonstrates usage",
    "Demonstrates use of MS office in daily use",
    "Analyses data using advanced skills",
    //C66 levels
    "Remembers the health system in India and the health care delivery system",
    "Understands specialised community health services and the major health problems in India",
    "Recognises the concept of health and demography and the national family welfare programmes",
    "Interprets role of nursing at different levels and uses of health information systems",
    //C67 levels
    "Remembers the concept of education",
    "Understands the process of teaching and learning",
    "Interprets methods of teaching",
    "Able to operate basic mannequins",
    "Able to provide skill based teaching",
    //C68 levels
    "Remembers the various obstretric operations",
    "Understands the role of a midwife in assisting a clinical practioner",
    "Interprets the drugs used in obstretrics",
    "Assists the clinical practioner",
    "Maintains records and files",
    //C69 levels
    "Understands the concept of child health care",
    "Understands the definitions and principles of growth and development",
    "Recognises various child welfare services and agencies and laws pertaining to pediatrics",
    //C70 levels
    "Remembers the concept of mental health nursing and mental illness in relation to providing comprehensive care to the patients",
    "Understands the history of psychiatry",
    "Recognises the legal aspects to be kept in mind while caring for mentally ill patients",
    //C71 levels
    "Remembers the structure and functions of the skeletal system and muscular system",
    "Understands the various musculo skeletal disorders and diseases",
    "Recognises assessments and therapies and drugs used to care for musculo skeletal disorders and diseases",
    "Conducts assessments and interprets results",
    "Provides care for patient",
    //C72 levels
    "Remembers the concept of family health nursing",
    "Understands family health care services",
    "Interprets the roles and functions of a community health nurse in family health service",
    "Demonstrates principles and techniques of family health care services at home and in clinics",
    ];


/* GNM 1 - (Anatomy and Physiology ) Asssociations starts*/
    const gnm_1_anatomy_and_physiology_fw = {
        "board": [
            // "GNM - 1"
        ],
        "medium": [
            "Anatomy and Physiology"
        ],
        "gradeLevel": [
            'Describes different organs of the body systemic function and their inter relationship',
            'Describes the composition of blood and its functions',
            'Describes the structure and functions of heart and blood vessels',
            'Describes the structure and functions of lymphatic system',
            'Describes the structure and functions of respiratory system',
            'Describes the structure and function of digestive system',
            'Describes the structure and functions of organs of excretory system',
            'Describes the structure and functions of endocrine system',
            'Describes the structure and function of male and female reproductive system and accessory organs',
            'Describes the structure and functions of Nervous system',
            'Describes the structure and function of sensory organs',
            'Describes the structure and function of skeletal system',
            'Describes the strcuture and functions of muscular system',
        ],
        "subject": [
            // 'Pregnancy Identification', //used in midwifery_and_gynaecological
            'Respiratory disorders', // will be used in medical_surgical_nursing_1
            'Gastro intestinal disorders',  // will be used in medical_surgical_nursing_1
            'Metabolic and endocrinal disorders',   // will be used in medical_surgical_nursing_1
            'Renal and urinary disorders',  // will be used in medical_surgical_nursing_1
            'Neurological disorders',  // will be used in medical_surgical_nursing_1
            // 'Oncology Nursing', //used in medical_surgical_nursing_2
            // 'Integumentary system and disorders',//used in medical_surgical_nursing_2
            // 'Ophthalmology and ophthalmic nursing',//used in medical_surgical_nursing_2
            // 'ENT disorders',//used in medical_surgical_nursing_2
            // 'Cardio vascular, circulatory and hematological disorders',//used in medical_surgical_nursing_2
            // 'Musculo skeletal disorders and diseases'//used in medical_surgical_nursing_2
        ],
        "difficultyLevel":[
            // "Understands health of males and females and initial assessment protocols",  //used in midwifery_and_gynaecological
            "Understands the respiratory system",
            "Understands the digestive system",
            "Understands the endocrine system",
            "Understands the excretory system",
            "Understands the nervous system",
            "Understands structure and function of cells",
            "Understands structure and function",
            "Understands the structure of the eye",
            "Understands the structure of the ear, nose and throat",
            "Understands the circulatory system",
            "Remembers the structure and functions of the skeletal system and muscular system",
        ]
        }

    const anatomy_and_physiology_r_1_associations = {
        "name": "Anatomy and Physiology",
        "code": "",
        "board": ["GNM - 1"],
        "medium": [],
        "gradeLevel": [],
        "subject":[],
        "difficultyLevel": []
    }
    
    const anatomy_and_physiology_a_1_associations = {
        "name": 'Describes different organs of the body systemic function and their inter relationship',
        "code": "",
        "board": ["GNM - 1"],
        "medium": ["Anatomy and Physiology"],
        "gradeLevel": [],
        "subject":[],
        "difficultyLevel": []
    
    }

    const anatomy_and_physiology_a_2_associations = {
        "name": 'Describes the composition of blood and its functions',
        "code": "",
        "board": ["GNM - 1"],
        "medium": ["Anatomy and Physiology"],
        "gradeLevel": [],
        "subject":[],
        "difficultyLevel": []
    
    }

    const anatomy_and_physiology_a_3_associations = {
        "name": 'Describes the structure and functions of heart and blood vessels',
        "code": "",
        "board": ["GNM - 1"],
        "medium": ["Anatomy and Physiology"],
        "gradeLevel": [],
        "subject":[],
        "difficultyLevel": []
    
    }

    const anatomy_and_physiology_a_4_associations = {
        "name": 'Describes the structure and functions of lymphatic system',
        "code": "",
        "board": ["GNM - 1"],
        "medium": ["Anatomy and Physiology"],
        "gradeLevel": [],
        "subject":[],
        "difficultyLevel": []
    
    }

    const anatomy_and_physiology_a_5_associations = {
        "name": 'Describes the structure and functions of respiratory system',
        "code": "",
        "board": ["GNM - 1"],
        "medium": ["Anatomy and Physiology"],
        "gradeLevel": [],
        "subject":[],
        "difficultyLevel": []
    
    }

    const anatomy_and_physiology_a_6_associations = {
        "name": 'Describes the structure and function of digestive system',
        "code": "",
        "board": ["GNM - 1"],
        "medium": ["Anatomy and Physiology"],
        "gradeLevel": [],
        "subject":[],
        "difficultyLevel": []
    
    }


    const anatomy_and_physiology_a_7_associations = {
        "name": 'Describes the structure and functions of organs of excretory system',
        "code": "",
        "board": ["GNM - 1"],
        "medium": ["Anatomy and Physiology"],
        "gradeLevel": [],
        "subject":[],
        "difficultyLevel": []
    
    }

    const anatomy_and_physiology_a_8_associations = {
        "name": 'Describes the structure and functions of endocrine system',
        "code": "",
        "board": ["GNM - 1"],
        "medium": ["Anatomy and Physiology"],
        "gradeLevel": [],
        "subject":[],
        "difficultyLevel": []
    
    }

    const anatomy_and_physiology_a_9_associations = {
        "name": 'Describes the structure and function of male and female reproductive system and accessory organs',
        "code": "",
        "board": ["GNM - 1"],
        "medium": ["Anatomy and Physiology"],
        "gradeLevel": [],
        "subject":[],
        "difficultyLevel": []
    
    }

    const anatomy_and_physiology_a_10_associations = {
        "name": 'Describes the structure and functions of Nervous system',
        "code": "",
        "board": ["GNM - 1"],
        "medium": ["Anatomy and Physiology"],
        "gradeLevel": [],
        "subject":[],
        "difficultyLevel": []
    
    }

    const anatomy_and_physiology_a_11_associations = {
        "name": 'Describes the structure and function of sensory organs',
        "code": "",
        "board": ["GNM - 1"],
        "medium": ["Anatomy and Physiology"],
        "gradeLevel": [],
        "subject":[],
        "difficultyLevel": []
    
    }

    const anatomy_and_physiology_a_12_associations = {
        "name": 'Describes the structure and function of skeletal system',
        "code": "",
        "board": ["GNM - 1"],
        "medium": ["Anatomy and Physiology"],
        "gradeLevel": [],
        "subject":[],
        "difficultyLevel": []
    
    }

    const anatomy_and_physiology_a_13_associations = {
        "name": 'Describes the strcuture and functions of muscular system',
        "code": "",
        "board": ["GNM - 1"],
        "medium": ["Anatomy and Physiology"],
        "gradeLevel": [],
        "subject":[],
        "difficultyLevel": []
    
    }

    const anatomy_and_physiology_c1_associations = {
        "name": "Pregnancy Identification",
        "code": "",
        "board": [
            "GNM - 1",
            "GNM - 3"
        ],
        "medium": [
            "Anatomy and Physiology",
            "Midwifery and Gynaecological Nursing"
        ],
        "gradeLevel": [
            'Describes the structure and function of male and female reproductive system and accessory organs',
            'Describes the anatomy and physiology of female reproductive system',
            'Describes the stages of Embryological and fetal development',
        ],
        "subject":[
        ],
        "difficultyLevel": [
        ]
    
    }

    const anatomy_and_physiology_c36_associations = {
        "name":  'Respiratory disorders',
        "code": "",
        "board": ["GNM - 1"],
        "medium": ["Anatomy and Physiology"],
        "gradeLevel": [
            'Describes the structure and functions of respiratory system',
        ],
        "subject":[],
        "difficultyLevel": []
    
    }

    const anatomy_and_physiology_c37_associations = {
        "name": 'Gastro intestinal disorders',
        "code": "",
        "board": ["GNM - 1"],
        "medium": ["Anatomy and Physiology"],
        "gradeLevel": [
            'Describes the structure and function of digestive system',
        ],
        "subject":[],
        "difficultyLevel": []
    
    }

    const anatomy_and_physiology_c38_associations = {
        "name": 'Metabolic and endocrinal disorders', 
        "code": "",
        "board": ["GNM - 1"],
        "medium": ["Anatomy and Physiology"],
        "gradeLevel": [
            'Describes the structure and functions of endocrine system',
        ],
        "subject":[],
        "difficultyLevel": []
    
    }

    const anatomy_and_physiology_c39_associations = {
        "name":  'Renal and urinary disorders',
        "code": "",
        "board": ["GNM - 1"],
        "medium": ["Anatomy and Physiology"],
        "gradeLevel": [
            'Describes the structure and functions of organs of excretory system',
        ],
        "subject":[],
        "difficultyLevel": []
    
    }

    const anatomy_and_physiology_c40_associations = {
        "name": 'Neurological disorders', 
        "code": "",
        "board": ["GNM - 1"],
        "medium": ["Anatomy and Physiology"],
        "gradeLevel": [
            'Describes the structure and functions of Nervous system',
        ],
        "subject":[],
        "difficultyLevel": []
    
    }

    const anatomy_and_physiology_c41_associations = {
        "name": "Oncology Nursing",
        "code": "",
        "board": [
            "GNM - 1",
            "GNM - 2"
        ],
        "medium": [
            "Anatomy and Physiology",
            "Medical Surgical Nursing-II"
        ],
        "gradeLevel": [
            'Describes different organs of the body systemic function and their inter relationship',
            'Describes the management of patients with oncology',
        ],
        "subject":[],
        "difficultyLevel": []
    
    }

    const anatomy_and_physiology_c42_associations = {
        "name": "Integumentary system and disorders",
        "code": "",
        "board": [
            "GNM - 1",
            "GNM - 2"
        ],
        "medium": [
            "Anatomy and Physiology",
            "Medical Surgical Nursing-II"
        ],
        "gradeLevel": [
            'Describes the structure and function of sensory organs',
            'Describes the various diseases and disorders of integumentary system and their management and demonstrates skill in providing care to the clients with disorders of integumentry system',
        ],
        "subject":[],
        "difficultyLevel": []
    
    }

    const anatomy_and_physiology_c43_associations = {
        "name": "Ophthalmology and ophthalmic nursing",
        "code": "",
        "board": [
            "GNM - 1",
            "GNM - 2"
        ],
        "medium": [
            "Anatomy and Physiology",
            "Medical Surgical Nursing-II"
        ],
        "gradeLevel": [
            'Describes the structure and function of sensory organs',
            'Describes the disorder and diseases of eye and demonstrates skill in giving care for patients with various eye diseases and disorders',
        ],
        "subject":[],
        "difficultyLevel": []
    
    }

    const anatomy_and_physiology_c44_associations = {
        "name": "ENT disorders",
        "code": "",
        "board": [
            "GNM - 1",
            "GNM - 2"
        ],
        "medium": [
            "Anatomy and Physiology",
            "Medical Surgical Nursing-II"
        ],
        "gradeLevel": [
            'Describes the structure and function of sensory organs',
            'Describes disorders and diseases of ear nose and throat and demonstrates skills in providing nursing care for patients with various ENT problems',
        ],
        "subject":[],
        "difficultyLevel": []
    
    }

    const anatomy_and_physiology_c45_associations = {
        "name": "Cardio vascular, circulatory and hematological disorders",
        "code": "",
        "board": [
            "GNM - 1",
            "GNM - 2"
        ],
        "medium": [
            "Anatomy and Physiology",
            "Medical Surgical Nursing-II"
        ],
        "gradeLevel": [
            'Describes different organs of the body systemic function and their inter relationship',
            'Describes the composition of blood and its functions',
            'Describes the structure and functions of heart and blood vessels',
            'Describes the structure and functions of lymphatic system',
            'Describes cardiovascular circulatory and Hematological disorders and diseases and demonstrates skill in carrying nursing interventions for clients with circulatory and hematological disorders and diseases',
        ],
        "subject":[],
        "difficultyLevel": []
    
    }

    const anatomy_and_physiology_c71_associations = {
        "name": "Musculo skeletal disorders and diseases",
        "code": "",
        "board": [
            "GNM - 1",
            "GNM - 2"
        ],
        "medium": [
            "Anatomy and Physiology",
            "Medical Surgical Nursing-II"
        ],
        "gradeLevel": [
            'Describes the structure and function of skeletal system',
            'Describes the strcuture and functions of muscular system',
            'Describes various musculo skeletal disorders and diseases and demonstrates skills in management of musculo skeletal diseases',
        ],
        "subject":[],
        "difficultyLevel": []
    
    }

    const anatomy_and_physiology_c1_l1_associations = {
        "name": "Understands health of males and females and initial assessment protocols",
        "code": "",
        "board": [
            "GNM - 1",
            "GNM - 3"
        ],
        "medium": [
            "Anatomy and Physiology",
            "Midwifery and Gynaecological Nursing"
        ],
        "gradeLevel": [
            'Describes the structure and function of male and female reproductive system and accessory organs',
            'Describes the anatomy and physiology of female reproductive system',
            'Describes the stages of Embryological and fetal development',
        ],
        "subject":[
            "Pregnancy Identification"
        ],
        "difficultyLevel": [
        ]
    
    }

    const anatomy_and_physiology_c36_l1_associations = {
        "name":  "Understands the respiratory system",
        "code": "",
        "board": ["GNM - 1"],
        "medium": ["Anatomy and Physiology"],
        "gradeLevel": [
            'Describes the structure and functions of respiratory system',
        ],
        "subject":['Respiratory disorders'],
        "difficultyLevel": []
    
    }

    const anatomy_and_physiology_c37_l1_associations = {
        "name": "Understands the digestive system",
        "code": "",
        "board": ["GNM - 1"],
        "medium": ["Anatomy and Physiology"],
        "gradeLevel": [
            'Describes the structure and function of digestive system',
        ],
        "subject":['Gastro intestinal disorders'],
        "difficultyLevel": []
    
    }

    const anatomy_and_physiology_c38_l1_associations = {
        "name": "Understands the endocrine system", 
        "code": "",
        "board": ["GNM - 1"],
        "medium": ["Anatomy and Physiology"],
        "gradeLevel": [
            'Describes the structure and functions of endocrine system',
        ],
        "subject":['Metabolic and endocrinal disorders'],
        "difficultyLevel": []
    
    }

    const anatomy_and_physiology_c39_l1_associations = {
        "name": "Understands the excretory system",
        "code": "",
        "board": ["GNM - 1"],
        "medium": ["Anatomy and Physiology"],
        "gradeLevel": [
            'Describes the structure and functions of organs of excretory system',
        ],
        "subject":['Renal and urinary disorders'],
        "difficultyLevel": []
    
    }

    const anatomy_and_physiology_c40_l1_associations = {
        "name": "Understands the nervous system", 
        "code": "",
        "board": ["GNM - 1"],
        "medium": ["Anatomy and Physiology"],
        "gradeLevel": [
            'Describes the structure and functions of Nervous system',
        ],
        "subject":['Neurological disorders'],
        "difficultyLevel": []
    
    }

    const anatomy_and_physiology_c41_l1_associations = {
        "name":  "Understands structure and function of cells",
        "code": "",
        "board": [
            "GNM - 1",
            "GNM - 2"
        ],
        "medium": [
            "Anatomy and Physiology",
            "Medical Surgical Nursing-II"
        ],
        "gradeLevel": [
            'Describes different organs of the body systemic function and their inter relationship',
            'Describes the management of patients with oncology',
        ],
        "subject":["Oncology Nursing"],
        "difficultyLevel": []
    
    }

    const anatomy_and_physiology_c42_l1_associations = {
        "name": "Understands structure and function",
        "code": "",
        "board": [
            "GNM - 1",
            "GNM - 2"
        ],
        "medium": [
            "Anatomy and Physiology",
            "Medical Surgical Nursing-II"
        ],
        "gradeLevel": [
            'Describes the structure and function of sensory organs',
            'Describes the various diseases and disorders of integumentary system and their management and demonstrates skill in providing care to the clients with disorders of integumentry system',
        ],
        "subject":["Integumentary system and disorders"],
        "difficultyLevel": []
    
    }

    const anatomy_and_physiology_c43_l1_associations = {
        "name": "Understands the structure of the eye",
        "code": "",
        "board": [
            "GNM - 1",
            "GNM - 2"
        ],
        "medium": [
            "Anatomy and Physiology",
            "Medical Surgical Nursing-II"
        ],
        "gradeLevel": [
            'Describes the structure and function of sensory organs',
            'Describes the disorder and diseases of eye and demonstrates skill in giving care for patients with various eye diseases and disorders',
        ],
        "subject":["Ophthalmology and ophthalmic nursing"],
        "difficultyLevel": []
    
    }

    const anatomy_and_physiology_c44_l1_associations = {
        "name": "Understands the structure of the ear, nose and throat",
        "code": "",
        "board": [
            "GNM - 1",
            "GNM - 2"
        ],
        "medium": [
            "Anatomy and Physiology",
            "Medical Surgical Nursing-II"
        ],
        "gradeLevel": [
            'Describes the structure and function of sensory organs',
            'Describes disorders and diseases of ear nose and throat and demonstrates skills in providing nursing care for patients with various ENT problems',
        ],
        "subject":["ENT disorders"],
        "difficultyLevel": []
    
    }

    const anatomy_and_physiology_c45_l1_associations = {
        "name": "Understands the circulatory system",
        "code": "",
        "board": [
            "GNM - 1",
            "GNM - 2"
        ],
        "medium": [
            "Anatomy and Physiology",
            "Medical Surgical Nursing-II"
        ],
        "gradeLevel": [
            'Describes different organs of the body systemic function and their inter relationship',
            'Describes the composition of blood and its functions',
            'Describes the structure and functions of heart and blood vessels',
            'Describes the structure and functions of lymphatic system',
            'Describes cardiovascular circulatory and Hematological disorders and diseases and demonstrates skill in carrying nursing interventions for clients with circulatory and hematological disorders and diseases',
        ],
        "subject":["Cardio vascular, circulatory and hematological disorders"],
        "difficultyLevel": []
    
    }

    const anatomy_and_physiology_c71_l1_associations = {
        "name": "Remembers the structure and functions of the skeletal system and muscular system",
        "code": "",
        "board": [
            "GNM - 1",
            "GNM - 2"
        ],
        "medium": [
            "Anatomy and Physiology",
            "Medical Surgical Nursing-II"
        ],
        "gradeLevel": [
            'Describes the structure and function of skeletal system',
            'Describes the strcuture and functions of muscular system',
            'Describes various musculo skeletal disorders and diseases and demonstrates skills in management of musculo skeletal diseases',
        ],
        "subject":["Musculo skeletal disorders and diseases"],
        "difficultyLevel": []
    
    }

    const gnm_1_anatomy_and_physiology_r_a_c_association = {
        boardAssociations: [
        ],
        mediumAssociations: [
            anatomy_and_physiology_r_1_associations
        ],
        gradeLevelAssociations: [
            anatomy_and_physiology_a_1_associations,
            anatomy_and_physiology_a_2_associations,
            anatomy_and_physiology_a_3_associations,
            anatomy_and_physiology_a_4_associations,
            anatomy_and_physiology_a_5_associations,
            anatomy_and_physiology_a_6_associations,
            anatomy_and_physiology_a_7_associations,
            anatomy_and_physiology_a_8_associations,
            anatomy_and_physiology_a_9_associations,
            anatomy_and_physiology_a_10_associations,
            anatomy_and_physiology_a_11_associations,
            anatomy_and_physiology_a_12_associations,
            anatomy_and_physiology_a_13_associations,
        ],
        subjectAssociations: [
            anatomy_and_physiology_c1_associations,
            anatomy_and_physiology_c36_associations,
            anatomy_and_physiology_c37_associations,
            anatomy_and_physiology_c38_associations,
            anatomy_and_physiology_c39_associations,
            anatomy_and_physiology_c40_associations,
            anatomy_and_physiology_c41_associations,
            anatomy_and_physiology_c42_associations,
            anatomy_and_physiology_c43_associations,
            anatomy_and_physiology_c44_associations,
            anatomy_and_physiology_c45_associations,
            anatomy_and_physiology_c71_associations,
        ],
        difficultyLevelAssociations: [
            anatomy_and_physiology_c1_l1_associations,
            anatomy_and_physiology_c36_l1_associations,
            anatomy_and_physiology_c37_l1_associations,
            anatomy_and_physiology_c38_l1_associations,
            anatomy_and_physiology_c39_l1_associations,
            anatomy_and_physiology_c40_l1_associations,
            anatomy_and_physiology_c41_l1_associations,
            anatomy_and_physiology_c42_l1_associations,
            anatomy_and_physiology_c43_l1_associations,
            anatomy_and_physiology_c44_l1_associations,
            anatomy_and_physiology_c45_l1_associations,
            anatomy_and_physiology_c71_l1_associations
        ]
    }


/* GNM 1 - (Anatomy and Physiology ) Asssociations ends*/

/* GNM 1 - (Microbiology ) Asssociations starts*/
const gnm_1_microbiology= {
    board: [
        "GNM 1"
    ],
    medium: [
        'Microbiology',
    ],
    gradeLevel: [
        'Infection and Growth of Microbes Principles in Collecting Specimens',
        'Identify Common Microbes under the Microscope'
    ],
    subject: [
        "Immunity Infection and Destruction of Microbes",
        "Micro Organisms"
    ],
    difficultyLevel: [
        "Different types of Infections",
        // "Factors affecting growth of Microbes and Mechanism of Resistance",
        // "Specimen Collection",
        "Different parts of the Microscope",
        "Principles of Microscopy",
        "Studies Microbes",
        "Observes under Microscope"
    ]

}

const microbiology_r_1_associations = {
    "name": "Microbiology",
    "code": "microbiology",
    "board": ["GNM 1"],
    "medium": [],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []
}

const microbiology_a_1_associations = {
    "name": "Infection and Growth of Microbes Principles in Collecting Specimens",
    "code": "",
    "board": ["GNM 1"],
    "medium": ["Microbiology"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const microbiology_a_2_associations = {
    "name": "Identify Common Microbes under the Microscope",
    "code": "",
    "board": ["GNM 1"],
    "medium": ["Microbiology"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []                                                               
}


const microbiology_c_1_associations = {
    "name": "Immunity Infection and Destruction of Microbes",
    "code": "",
    "board": ["GNM 1"],
    "medium": ["Microbiology"],
    "gradeLevel": [
        'Infection and Growth of Microbes Principles in Collecting Specimens'

    ],
    "subject":[],
    "difficultyLevel": []
}

const microbiology_c_2_associations = {
    "name": "Micro Organisms",
    "code": "",
    "board": ["GNM 1"],
    "medium": ["Microbiology"],
    "gradeLevel": [
        'Identify Common Microbes under the Microscope'
    ],
    "subject":[],
    "difficultyLevel": []
}

const microbiology_cl_1_associations = {
    "name": "Different types of Infections",
    "code": "",
    "board": ["GNM 1"],
    "medium": ["Microbiology"],
    "gradeLevel": [
        'Infection and Growth of Microbes Principles in Collecting Specimens'
    ],
    "subject":["Immunity Infection and Destruction of Microbes"],
    "difficultyLevel": []
}

const microbiology_cl_2_associations = {
    "name": "Factors affecting growth of Microbes and Mechanism of Resistance",
    "code": "",
    "board": ["GNM 1"],
    "medium": ["Microbiology"],
    "gradeLevel": [
        'Infection and Growth of Microbes Principles in Collecting Specimens'
    ],
    "subject":["Immunity Infection and Destruction of Microbes"],
    "difficultyLevel": []
}

const microbiology_cl_3_associations = {
    "name": "Specimen Collection",
    "code": "",
    "board": ["GNM 1"],
    "medium": ["Microbiology"],
    "gradeLevel": [
        'Infection and Growth of Microbes Principles in Collecting Specimens'
    ],
    "subject":["Immunity Infection and Destruction of Microbes"],
    "difficultyLevel": []
}

const microbiology_cl_4_associations = {
    "name": "Different parts of the Microscope",
    "code": "",
    "board": ["GNM 1"],
    "medium": ["Microbiology"],
    "gradeLevel": [
        'Identify Common Microbes under the Microscope'
    ],
    "subject":["Micro Organisms"],
    "difficultyLevel": []
}

const microbiology_cl_5_associations = {
    "name": "Principles of Microscopy",
    "code": "",
    "board": ["GNM 1"],
    "medium": ["Microbiology"],
    "gradeLevel": [
        'Identify Common Microbes under the Microscope'
    ],
    "subject":["Micro Organisms"],
    "difficultyLevel": []
}

const microbiology_cl_6_associations = {
    "name": "Studies Microbes",
    "code": "",
    "board": ["GNM 1"],
    "medium": ["Microbiology"],
    "gradeLevel": [
        'Identify Common Microbes under the Microscope'
    ],
    "subject":["Micro Organisms"],
    "difficultyLevel": []
}

const microbiology_cl_7_associations = {
    "name": "Observes under Microscope",
    "code": "",
    "board": ["GNM 1"],
    "medium": ["Microbiology"],
    "gradeLevel": [
        'Identify Common Microbes under the Microscope'
    ],
    "subject":["Micro Organisms"],
    "difficultyLevel": []
}

const gnm_1_microbiology_r_a_c_association = {
    boardAssociations: [
    ],
    mediumAssociations: [
        microbiology_r_1_associations
    ],
    gradeLevelAssociations: [
        microbiology_a_1_associations,
        microbiology_a_2_associations,
    ],
    subjectAssociations: [
        microbiology_c_1_associations,
        microbiology_c_2_associations
    ],
    difficultyLevelAssociations: [
        microbiology_cl_1_associations,
        microbiology_cl_2_associations,
        microbiology_cl_3_associations,
        microbiology_cl_4_associations,
        microbiology_cl_5_associations,
        microbiology_cl_6_associations,
        microbiology_cl_7_associations,
    ]
}

/* GNM 1 - (Microbiology ) Asssociations ends*/


/* GNM 1 - (Psychology ) Asssociations starts*/
const gnm_1_psychology_fw = {
    board: [
        // "GNM - 1"
    ],
    medium: [
        'Psychology',
    ],
    gradeLevel: [
        'States the concept, scope and importance of psychology',
        'Describes the structure of the mind',
        'Illustrates the dynamics of human behavior and describes the concept of mental health',
        'Describes and applies the process of learning, thinking, reasoning, observation and perception',
        'Discusses the concept and development of personality',
        'Discusses the nature and measurement of intelligence',
    ],
    subject: [
        "Psychology",
    ],
    difficultyLevel: [
        //C48-L1-L5
        "Understands the nature of psychology and the structure of the mind",
        "Understands the psychology of human behaviour",
        "Understands learning thinking and reasoning and observation and perception",
        "Understands personality",
        "Understands intelligence",
    ],
    
}

const psychology_r_1_associations = {
    "name": "Psychology",
    "code": "",
    "board": ["GNM - 1"],
    "medium": [],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []
}

const psychology_a_1_associations = {
    "name": 'States the concept, scope and importance of psychology',
    "code": "",
    "board": ["GNM - 1"],
    "medium": ["Psychology"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const psychology_a_2_associations = {
    "name": 'Describes the structure of the mind',
    "code": "",
    "board": ["GNM - 1"],
    "medium": ["Psychology"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const psychology_a_3_associations = {
    "name": 'Illustrates the dynamics of human behavior and describes the concept of mental health',
    "code": "",
    "board": ["GNM - 1"],
    "medium": ["Psychology"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const psychology_a_4_associations = {
    "name": 'Describes and applies the process of learning, thinking, reasoning, observation and perception',
    "code": "",
    "board": ["GNM - 1"],
    "medium": ["Psychology"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const psychology_a_5_associations = {
    "name": 'Discusses the concept and development of personality',
    "code": "",
    "board": ["GNM - 1"],
    "medium": ["Psychology"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const psychology_a_6_associations = {
    "name": 'Discusses the nature and measurement of intelligence',
    "code": "",
    "board": ["GNM - 1"],
    "medium": ["Psychology"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const psychology_c_48_associations = {
    "name":  "Psychology",
    "code": "",
    "board": ["GNM - 1"],
    "medium": ["Psychology"],
    "gradeLevel": [
        'States the concept, scope and importance of psychology',
        'Describes the structure of the mind',
        'Illustrates the dynamics of human behavior and describes the concept of mental health',
        'Describes and applies the process of learning, thinking, reasoning, observation and perception',
        'Discusses the concept and development of personality',
        'Discusses the nature and measurement of intelligence',
    ],
    "subject":[],
    "difficultyLevel": []
}

const psychology_c48_l1_associations = {
    "name": "Understands the nature of psychology and the structure of the mind",
    "code": "",
    "board": ["GNM - 1"],
    "medium": ["Psychology"],
    "gradeLevel": [
        'States the concept, scope and importance of psychology',
        'Describes the structure of the mind',
    ],
    "subject":[
        "Psychology",
    ],
    "difficultyLevel": []
}

const psychology_c48_l2_associations = {
    "name": "Understands the psychology of human behaviour",
    "code": "",
    "board": ["GNM - 1"],
    "medium": ["Psychology"],
    "gradeLevel": [
        'Illustrates the dynamics of human behavior and describes the concept of mental health',
    ],
    "subject":[
        "Psychology",
    ],
    "difficultyLevel": []
}

const psychology_c48_l3_associations = {
    "name": "Understands learning thinking and reasoning and observation and perception",
    "code": "",
    "board": ["GNM - 1"],
    "medium": ["Psychology"],
    "gradeLevel": [
        'Describes and applies the process of learning, thinking, reasoning, observation and perception',
    ],
    "subject":[
        "Psychology",
    ],
    "difficultyLevel": []
}

const psychology_c48_l4_associations = {
    "name": "Understands personality",
    "code": "",
    "board": ["GNM - 1"],
    "medium": ["Psychology"],
    "gradeLevel": [
        'Discusses the concept and development of personality',
    ],
    "subject":[
        "Psychology",
    ],
    "difficultyLevel": []
}

const psychology_c48_l5_associations = {
    "name": "Understands intelligence",
    "code": "",
    "board": ["GNM - 1"],
    "medium": ["Psychology"],
    "gradeLevel": [
        'Discusses the nature and measurement of intelligence',
    ],
    "subject":[
        "Psychology",
    ],
    "difficultyLevel": []
}

const gnm_1_psychology_r_a_c_association = {
    boardAssociations: [
    ],
    mediumAssociations: [
        psychology_r_1_associations
    ],
    gradeLevelAssociations: [
        psychology_a_1_associations,
        psychology_a_2_associations,
        psychology_a_3_associations,
        psychology_a_4_associations,
        psychology_a_5_associations,
        psychology_a_6_associations,
    ],
    subjectAssociations: [
        psychology_c_48_associations
    ],
    difficultyLevelAssociations: [
        psychology_c48_l1_associations,
        psychology_c48_l2_associations,
        psychology_c48_l3_associations,
        psychology_c48_l4_associations,
        psychology_c48_l5_associations,
    ]
}


/* GNM 1 - (Psychology ) Asssociations ends*/


/* GNM 1 - (Sociology ) Asssociations starts*/

const gnm_1_sociology_fw = {
    board: [
         // "GNM - 1"
    ],
    medium: [
        'Sociology',
    ],
    gradeLevel: [
        'Describes the nature, scope & content of sociology and its importance in nursing',
        'Describes the influence of the environment on individual development and the rights and responsibilities of the individual in the society',
        'Describes the concept of family as a social unit',
        'Describes about social groups social change control stratification and social problems',
        'Describes the culture and characteristics of community'
    ],
    subject: [
        "Sociology",
    ],
    difficultyLevel: [
        //C49-L1-L4
        "Remembers the basics of sociology and individual",
        "Understands family",
        "Interprets society",
        "Reocognises community",
    ]

}

const sociology_r_1_associations = {
    "name": "Sociology",
    "code": "",
    "board": ["GNM - 1"],
    "medium": [],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []
}

const sociology_a_1_associations = {
    "name": 'Describes the nature, scope & content of sociology and its importance in nursing',
    "code": "",
    "board": ["GNM - 1"],
    "medium": ["Sociology"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const sociology_a_2_associations = {
    "name": 'Describes the influence of the environment on individual development and the rights and responsibilities of the individual in the society',
    "code": "",
    "board": ["GNM - 1"],
    "medium": ["Sociology"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const sociology_a_3_associations = {
    "name": 'Describes the concept of family as a social unit',
    "code": "",
    "board": ["GNM - 1"],
    "medium": ["Sociology"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const sociology_a_4_associations = {
    "name": 'Describes about social groups social change control stratification and social problems',
    "code": "",
    "board": ["GNM - 1"],
    "medium": ["Sociology"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const sociology_a_5_associations = {
    "name": 'Describes the culture and characteristics of community',
    "code": "",
    "board": ["GNM - 1"],
    "medium": ["Sociology"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const sociology_c_49_associations = {
    "name": "Sociology",
    "code": "",
    "board": ["GNM - 1"],
    "medium": ["Sociology"],
    "gradeLevel": [
        'Describes the nature, scope & content of sociology and its importance in nursing',
        'Describes the influence of the environment on individual development and the rights and responsibilities of the individual in the society',
        'Describes the concept of family as a social unit',
        'Describes about social groups social change control stratification and social problems',
        'Describes the culture and characteristics of community'
    ],
    "subject":[],
    "difficultyLevel": []
}

const sociology_c49_l1_associations = {
    "name":  "Remembers the basics of sociology and individual",
    "code": "",
    "board": ["GNM - 1"],
    "medium": ["Sociology"],
    "gradeLevel": [
        'Describes the nature, scope & content of sociology and its importance in nursing',
        'Describes the influence of the environment on individual development and the rights and responsibilities of the individual in the society',
    ],
    "subject":["Sociology"],
    "difficultyLevel": []
}

const sociology_c49_l2_associations = {
    "name":  "Understands family",
    "code": "",
    "board": ["GNM - 1"],
    "medium": ["Sociology"],
    "gradeLevel": [
        'Describes the concept of family as a social unit',
    ],
    "subject":["Sociology"],
    "difficultyLevel": []
}

const sociology_c49_l3_associations = {
    "name": "Interprets society",
    "code": "",
    "board": ["GNM - 1"],
    "medium": ["Sociology"],
    "gradeLevel": [
        'Describes about social groups social change control stratification and social problems',
    ],
    "subject":["Sociology"],
    "difficultyLevel": []
}

const sociology_c49_l4_associations = {
    "name":  "Reocognises community",
    "code": "",
    "board": ["GNM - 1"],
    "medium": ["Sociology"],
    "gradeLevel": [
        'Describes the culture and characteristics of community'
    ],
    "subject":["Sociology"],
    "difficultyLevel": []
}

const gnm_1_sociology_r_a_c_association = {
    boardAssociations: [
    ],
    mediumAssociations: [
        sociology_r_1_associations
    ],
    gradeLevelAssociations: [
        sociology_a_1_associations,
        sociology_a_2_associations,
        sociology_a_3_associations,
        sociology_a_4_associations,
        sociology_a_5_associations,
    ],
    subjectAssociations: [
        sociology_c_49_associations
    ],
    difficultyLevelAssociations: [
        sociology_c49_l1_associations,
        sociology_c49_l2_associations,
        sociology_c49_l3_associations,
        sociology_c49_l4_associations
    ]
}

/* GNM 1 - (Sociology ) Asssociations ends*/



/* GNM 1 - (Fundamentals of nursing ) Asssociations starts*/
const gnm_1_fundamental_of_nursing_fw = {
    board: [
         // "GNM - 1"
    ],
    medium: [
        "Fundamentals of nursing"
    ],
    gradeLevel: [
        'Defines nursing and explains its nature, meaning, scope, ethics and principles in nursing, identifies the qualities of a professional nurse health care agencies and its functions and describes the holistic approach to nursing and the determinants of health and the effects of illness',
        'Describes nursing care of the patient/client in hospital using nursing process and demonstrates skill in the admission and discharge process, maintenance of safe environment and records and reports',
        'Describes basic needs of the patient and demonstrates skill in meeting basic care of the patient',
        'Describes the principles of assessment demonstrate skills in assessing the patient',
        'Describes the infection control, methods in the clinical setting and demonstrates infection control practices',
        'Describes therapeutic nursing care',
        'Understands the principles, routes, effects of administration of medications',
    ],
    subject: [
        
    ],
    difficultyLevel:[]
    
    }

    const fundamental_of_nursing_r_1_associations = {
        "name": "Fundamentals of nursing",
        "code": "",
        "board": ["GNM - 1"],
        "medium": [],
        "gradeLevel": [],
        "subject":[],
        "difficultyLevel": []
    }
    
    const fundamental_of_nursing_a_1_associations = {
        "name": 'Defines nursing and explains its nature, meaning, scope, ethics and principles in nursing, identifies the qualities of a professional nurse health care agencies and its functions and describes the holistic approach to nursing and the determinants of health and the effects of illness',
        "code": "",
        "board": ["GNM - 1"],
        "medium": [ "Fundamentals of nursing"],
        "gradeLevel": [],
        "subject":[],
        "difficultyLevel": []
    
    }

    const fundamental_of_nursing_a_2_associations = {
        "name": 'Describes nursing care of the patient/client in hospital using nursing process and demonstrates skill in the admission and discharge process, maintenance of safe environment and records and reports',
        "code": "",
        "board": ["GNM - 1"],
        "medium": [ "Fundamentals of nursing"],
        "gradeLevel": [],
        "subject":[],
        "difficultyLevel": []
    
    }

    const fundamental_of_nursing_a_3_associations = {
        "name": 'Describes basic needs of the patient and demonstrates skill in meeting basic care of the patient',
        "code": "",
        "board": ["GNM - 1"],
        "medium": [ "Fundamentals of nursing"],
        "gradeLevel": [],
        "subject":[],
        "difficultyLevel": []
    
    }

    const fundamental_of_nursing_a_4_associations = {
        "name": 'Describes the principles of assessment demonstrate skills in assessing the patient',
        "code": "",
        "board": ["GNM - 1"],
        "medium": [ "Fundamentals of nursing"],
        "gradeLevel": [],
        "subject":[],
        "difficultyLevel": []
    
    }

    const fundamental_of_nursing_a_5_associations = {
        "name": 'Describes the infection control, methods in the clinical setting and demonstrates infection control practices',
        "code": "",
        "board": ["GNM - 1"],
        "medium": [ "Fundamentals of nursing"],
        "gradeLevel": [],
        "subject":[],
        "difficultyLevel": []
    
    }

    const fundamental_of_nursing_a_6_associations = {
        "name": 'Describes therapeutic nursing care',
        "code": "",
        "board": ["GNM - 1"],
        "medium": [ "Fundamentals of nursing"],
        "gradeLevel": [],
        "subject":[],
        "difficultyLevel": []
    
    }

    const fundamental_of_nursing_a_7_associations = {
        "name": 'Understands the principles, routes, effects of administration of medications',
        "code": "",
        "board": ["GNM - 1"],
        "medium": [ "Fundamentals of nursing"],
        "gradeLevel": [],
        "subject":[],
        "difficultyLevel": []
    
    }

    const gnm_1_fundamental_of_nursing_r_a_c_association = {
        boardAssociations: [
        ],
        mediumAssociations: [
            fundamental_of_nursing_r_1_associations
        ],
        gradeLevelAssociations: [
            fundamental_of_nursing_a_1_associations,
            fundamental_of_nursing_a_2_associations,
            fundamental_of_nursing_a_3_associations,
            fundamental_of_nursing_a_4_associations,
            fundamental_of_nursing_a_5_associations,
            fundamental_of_nursing_a_6_associations,
            fundamental_of_nursing_a_7_associations
        ],
        subjectAssociations: [
            
        ],
        difficultyLevelAssociations: [
            
        ]
    }

/* GNM 1 - (Fundamentals of nursing ) Asssociations ends*/


/* GNM 1 - (First Add ) Asssociations starts*/

const gnm_1_first_aid_fw = {
    board: [
         // "GNM - 1"
    ],
    medium: [
       "First Ad"
    ],
    gradeLevel: [ 
        'Describes the importance and principle of first aid',
        'Demonstrates skill in first aid techniques',
        'Describes first aid in common emergencies',
        'Lists various community emergencies and community resources',
    ],
    subject: [   
    ],
    difficultyLevel:[]
    
    }

    const first_aid_r_1_associations = {
        "name": "First Ad",
        "code": "",
        "board": ["GNM - 1"],
        "medium": [],
        "gradeLevel": [],
        "subject":[],
        "difficultyLevel": []
    }
    
    const first_aid_a_1_associations = {
        "name": 'Describes the importance and principle of first aid',
        "code": "",
        "board": ["GNM - 1"],
        "medium": [ "First Ad"],
        "gradeLevel": [],
        "subject":[],
        "difficultyLevel": []
    
    }

    const first_aid_a_2_associations = {
        "name": 'Demonstrates skill in first aid techniques',
        "code": "",
        "board": ["GNM - 1"],
        "medium": [ "First Ad"],
        "gradeLevel": [],
        "subject":[],
        "difficultyLevel": []
    
    }

    const first_aid_a_3_associations = {
        "name": 'Describes first aid in common emergencies',
        "code": "",
        "board": ["GNM - 1"],
        "medium": [ "First Ad"],
        "gradeLevel": [],
        "subject":[],
        "difficultyLevel": []
    
    }

    const first_aid_a_4_associations = {
        "name": 'Lists various community emergencies and community resources',
        "code": "",
        "board": ["GNM - 1"],
        "medium": [ "First Ad"],
        "gradeLevel": [],
        "subject":[],
        "difficultyLevel": []
    
    }

    const gnm_1_first_aid_r_a_c_association = {
        boardAssociations: [
        ],
        mediumAssociations: [
            first_aid_r_1_associations
        ],
        gradeLevelAssociations: [
            first_aid_a_1_associations,
            first_aid_a_2_associations,
            first_aid_a_3_associations,
            first_aid_a_4_associations
        ],
        subjectAssociations: [
            
        ],
        difficultyLevelAssociations: [
            
        ]
    }

/* GNM 1 - (First Add ) Asssociations ends*/



/* GNM 1 - (Community health nursing-I ) Asssociations starts*/
const gnm_1_community_health_nursing_1_fw = {
    "board": [
         // "GNM - 1"
    ],
    "medium": [
        "Community health nursing-I"
    ],
    "gradeLevel": [
        'Describes the concept of health and disease and community health',
        'Understands various aspects of Community Health Nursing and demonstrates skills in applying nursing process in Community Health Nursing settings',
        'Describes the principles of epidemiology and epidemiological methods in community health nursing practice',
        'Demonstrates skill in providing comprehensive nursing care to the family',
        'Describes the principles and techniques of family health care services at home and in clinics',
        'Describes the referral system and community resources for referral',
        'Lists the records and reports used in community health nursing practice',
        'Understands the management of minor ailments',
    ],
    "subject": [
        "Curative services for minor ailments",
        "Pre-referral management and transportation including neonates",
        "Epidemiology",
        "Concept of community health and community health nursing",
        "Concept of family Health and family health nursing",
    ],
    "difficultyLevel":[
        "Remembers the concept of community health nursing",
        "Understands the primary health care promotion of health and prevention of disease for maintenance of health",
        "Interprets role of nurses in Community health nursing",
        "Remembers the concept of family health nursing",
        "Understands family health care services",
        "Interprets the roles and functions of a community health nurse in family health service",
        "Demonstrates principles and techniques of family health care services at home and in clinics",
    ]
    }

    const community_health_nursing_1_r_1_associations = {
        "name": "Community health nursing-I",
        "code": "",
        "board": ["GNM - 1"],
        "medium": [],
        "gradeLevel": [],
        "subject":[],
        "difficultyLevel": []
    }
    
    const community_health_nursing_1_a_1_associations = {
        "name": 'Describes the concept of health and disease and community health',
        "code": "",
        "board": ["GNM - 1"],
        "medium": [ "Community health nursing-I"],
        "gradeLevel": [],
        "subject":[],
        "difficultyLevel": []
    
    }

    const community_health_nursing_1_a_2_associations = {
        "name": 'Understands various aspects of Community Health Nursing and demonstrates skills in applying nursing process in Community Health Nursing settings',
        "code": "",
        "board": ["GNM - 1"],
        "medium": [ "Community health nursing-I"],
        "gradeLevel": [],
        "subject":[],
        "difficultyLevel": []
    
    }

    const community_health_nursing_1_a_3_associations = {
        "name": 'Describes the principles of epidemiology and epidemiological methods in community health nursing practice',
        "code": "",
        "board": ["GNM - 1"],
        "medium": [ "Community health nursing-I"],
        "gradeLevel": [],
        "subject":[],
        "difficultyLevel": []
    
    }

    const community_health_nursing_1_a_4_associations = {
        "name": 'Demonstrates skill in providing comprehensive nursing care to the family',
        "code": "",
        "board": ["GNM - 1"],
        "medium": [ "Community health nursing-I"],
        "gradeLevel": [],
        "subject":[],
        "difficultyLevel": []
    
    }

    const community_health_nursing_1_a_5_associations = {
        "name": 'Describes the principles and techniques of family health care services at home and in clinics',
        "code": "",
        "board": ["GNM - 1"],
        "medium": [ "Community health nursing-I"],
        "gradeLevel": [],
        "subject":[],
        "difficultyLevel": []
    
    }

    const community_health_nursing_1_a_6_associations = {
        "name": 'Describes the referral system and community resources for referral',
        "code": "",
        "board": ["GNM - 1"],
        "medium": [ "Community health nursing-I"],
        "gradeLevel": [],
        "subject":[],
        "difficultyLevel": []
    
    }

    const community_health_nursing_1_a_7_associations = {
        "name":  'Lists the records and reports used in community health nursing practice',
        "code": "",
        "board": ["GNM - 1"],
        "medium": [ "Community health nursing-I"],
        "gradeLevel": [],
        "subject":[],
        "difficultyLevel": []
    
    }

    const community_health_nursing_1_a_8_associations = {
        "name": 'Understands the management of minor ailments',
        "code": "",
        "board": ["GNM - 1"],
        "medium": [ "Community health nursing-I"],
        "gradeLevel": [],
        "subject":[],
        "difficultyLevel": []
    
    }

    const community_health_nursing_1_c25_associations = {
        "name": "Curative services for minor ailments",
        "code": "",
        "board": ["GNM - 1"],
        "medium": [ "Community health nursing-I"],
        "gradeLevel": [
            'Understands the management of minor ailments',
        ],
        "subject":[],
        "difficultyLevel": []
    
    }

    const community_health_nursing_1_c26_associations = {
        "name": "Pre-referral management and transportation including neonates",
        "code": "",
        "board": ["GNM - 1"],
        "medium": [ "Community health nursing-I"],
        "gradeLevel": [
            'Describes the referral system and community resources for referral',
        ],
        "subject":[],
        "difficultyLevel": []
    
    }

    const community_health_nursing_1_c28_associations = {
        "name": "Epidemiology",
        "code": "",
        "board": ["GNM - 1"],
        "medium": [ "Community health nursing-I"],
        "gradeLevel": [
            'Describes the principles of epidemiology and epidemiological methods in community health nursing practice',
        ],
        "subject":[],
        "difficultyLevel": []
    
    }

    const community_health_nursing_1_c60_associations = {
        "name": "Concept of community health and community health nursing",
        "code": "",
        "board": ["GNM - 1"],
        "medium": [ "Community health nursing-I"],
        "gradeLevel": [
            'Describes the concept of health and disease and community health',
            'Understands various aspects of Community Health Nursing and demonstrates skills in applying nursing process in Community Health Nursing settings',
        ],
        "subject":[],
        "difficultyLevel": []
    
    }

    const community_health_nursing_1_c72_associations = {
        "name": "Concept of family Health and family health nursing",
        "code": "",
        "board": ["GNM - 1"],
        "medium": [ "Community health nursing-I"],
        "gradeLevel": [
            'Demonstrates skill in providing comprehensive nursing care to the family',
            'Describes the principles and techniques of family health care services at home and in clinics',
        ],
        "subject":[],
        "difficultyLevel": []
    
    }

    const community_health_nursing_1_c60_l1_associations = {
        "name": "Remembers the concept of community health nursing",
        "code": "",
        "board": ["GNM - 1"],
        "medium": [ "Community health nursing-I"],
        "gradeLevel": [
            'Describes the concept of health and disease and community health',
        ],
        "subject":["Concept of community health and community health nursing"],
        "difficultyLevel": []
    
    }

    const community_health_nursing_1_c60_l2_associations = {
        "name": "Understands the primary health care promotion of health and prevention of disease for maintenance of health",
        "code": "",
        "board": ["GNM - 1"],
        "medium": [ "Community health nursing-I"],
        "gradeLevel": [
            'Describes the concept of health and disease and community health',
        ],
        "subject":["Concept of community health and community health nursing"],
        "difficultyLevel": []
    
    }

    const community_health_nursing_1_c60_l3_associations = {
        "name": "Interprets role of nurses in Community health nursing",
        "code": "",
        "board": ["GNM - 1"],
        "medium": [ "Community health nursing-I"],
        "gradeLevel": [
            'Understands various aspects of Community Health Nursing and demonstrates skills in applying nursing process in Community Health Nursing settings',
        ],
        "subject":["Concept of community health and community health nursing"],
        "difficultyLevel": []
    
    }

    const community_health_nursing_1_c72_l1_associations = {
        "name": "Remembers the concept of family health nursing",
        "code": "",
        "board": ["GNM - 1"],
        "medium": [ "Community health nursing-I"],
        "gradeLevel": [
            'Demonstrates skill in providing comprehensive nursing care to the family',
        ],
        "subject":["Concept of family Health and family health nursing"],
        "difficultyLevel": []
    
    }

    const community_health_nursing_1_c72_l2_associations = {
        "name": "Understands family health care services",
        "code": "",
        "board": ["GNM - 1"],
        "medium": [ "Community health nursing-I"],
        "gradeLevel": [
            'Demonstrates skill in providing comprehensive nursing care to the family',
        ],
        "subject":["Concept of family Health and family health nursing"],
        "difficultyLevel": []
    
    }

    const community_health_nursing_1_c72_l3_associations = {
        "name": "Interprets the roles and functions of a community health nurse in family health service",
        "code": "",
        "board": ["GNM - 1"],
        "medium": [ "Community health nursing-I"],
        "gradeLevel": [
            'Describes the principles and techniques of family health care services at home and in clinics',
        ],
        "subject":["Concept of family Health and family health nursing"],
        "difficultyLevel": []
    
    }

    const community_health_nursing_1_c72_l4_associations = {
        "name": "Demonstrates principles and techniques of family health care services at home and in clinics",
        "code": "",
        "board": ["GNM - 1"],
        "medium": [ "Community health nursing-I"],
        "gradeLevel": [
            'Describes the principles and techniques of family health care services at home and in clinics',
        ],
        "subject":["Concept of family Health and family health nursing"],
        "difficultyLevel": []
    
    }

    const gnm_1_community_health_nursing_1_r_a_c_association = {
        boardAssociations: [
        ],
        mediumAssociations: [
            community_health_nursing_1_r_1_associations
        ],
        gradeLevelAssociations: [
            community_health_nursing_1_a_1_associations,
            community_health_nursing_1_a_2_associations,
            community_health_nursing_1_a_3_associations,
            community_health_nursing_1_a_4_associations,
            community_health_nursing_1_a_5_associations,
            community_health_nursing_1_a_6_associations,
            community_health_nursing_1_a_7_associations,
            community_health_nursing_1_a_8_associations
        ],
        subjectAssociations: [
            community_health_nursing_1_c25_associations,
            community_health_nursing_1_c26_associations,
            community_health_nursing_1_c28_associations,
            community_health_nursing_1_c60_associations,
            community_health_nursing_1_c72_associations,
        ],
        difficultyLevelAssociations: [
            community_health_nursing_1_c60_l1_associations,
            community_health_nursing_1_c60_l2_associations,
            community_health_nursing_1_c60_l3_associations,
            community_health_nursing_1_c72_l1_associations,
            community_health_nursing_1_c72_l2_associations,
            community_health_nursing_1_c72_l3_associations,
            community_health_nursing_1_c72_l4_associations
        ]
    }

/* GNM 1 - (Community health nursing-I ) Asssociations ends*/



/* GNM 1 - (Environmental hygiene ) Asssociations starts*/
const gnm_1_environmental_hygiene_fw = {
    board: [
         // "GNM - 1"
    ],
    medium:[
       "Eenvironmental hygience"
    ],
    gradeLevel: [
        'Understands the importance of healthy environment and its relation to health and disease',
        'Describes the environmental factors contributing to health and illness',
        'Describes the community organisation to promote environmental health',
    ],
    subject: [
        "Principles of environmental hygience"
    ],
    difficultyLevel: [
        "Understands the importance of health environment and its reation to health and disease",
        "Understands the various environmental factors contributing to health",
        "Recognises the community organisations",
    ],
    
    }

const environmental_hygiene_r_1_associations = {
    "name": "Eenvironmental hygience",
    "code": "",
    "board": ["GNM - 1"],
    "medium": [],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []
}

const environmental_hygiene_a_1_associations = {
    "name": 'Understands the importance of healthy environment and its relation to health and disease',
    "code": "",
    "board": ["GNM - 1"],
    "medium": ["Eenvironmental hygience"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const environmental_hygiene_a_2_associations = {
    "name": 'Describes the environmental factors contributing to health and illness',
    "code": "",
    "board": ["GNM - 1"],
    "medium": ["Eenvironmental hygience"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const environmental_hygiene_a_3_associations = {
    "name": 'Describes the community organisation to promote environmental health',
    "code": "",
    "board": ["GNM - 1"],
    "medium": ["Eenvironmental hygience"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const environmental_hygiene_c61_associations = {
    "name":  "Principles of environmental hygience",
    "code": "",
    "board": ["GNM - 1"],
    "medium": ["Eenvironmental hygience"],
    "gradeLevel": [
        'Understands the importance of healthy environment and its relation to health and disease',
        'Describes the environmental factors contributing to health and illness',
        'Describes the community organisation to promote environmental health',
    ],
    "subject":[],
    "difficultyLevel": []

}

const environmental_hygiene_c61_l1_associations = {
    "name": "Understands the importance of health environment and its reation to health and disease",
    "code": "",
    "board": ["GNM - 1"],
    "medium": ["Eenvironmental hygience"],
    "gradeLevel": [
        'Understands the importance of healthy environment and its relation to health and disease',
    ],
    "subject":["Principles of environmental hygience"],
    "difficultyLevel": []

}

const environmental_hygiene_c61_l2_associations = {
    "name": "Understands the various environmental factors contributing to health",
    "code": "",
    "board": ["GNM - 1"],
    "medium": ["Eenvironmental hygience"],
    "gradeLevel": [
        'Describes the environmental factors contributing to health and illness',
    ],
    "subject":["Principles of environmental hygience"],
    "difficultyLevel": []

}

const environmental_hygiene_c61_l3_associations = {
    "name": "Recognises the community organisations",
    "code": "",
    "board": ["GNM - 1"],
    "medium": ["Eenvironmental hygience"],
    "gradeLevel": [
        'Describes the community organisation to promote environmental health',
    ],
    "subject":["Principles of environmental hygience"],
    "difficultyLevel": []

}

const gnm_1_environmental_hygiene_r_a_c_association = {
    boardAssociations: [
    ],
    mediumAssociations: [
        environmental_hygiene_r_1_associations
    ],
    gradeLevelAssociations: [
        environmental_hygiene_a_1_associations,
        environmental_hygiene_a_2_associations,
        environmental_hygiene_a_3_associations
    ],
    subjectAssociations: [
        environmental_hygiene_c61_associations
    ],
    difficultyLevelAssociations: [
        environmental_hygiene_c61_l1_associations,
        environmental_hygiene_c61_l2_associations,
        environmental_hygiene_c61_l3_associations
    ]
}

/* GNM 1 - (Environmental hygiene ) Asssociations ends*/


/* GNM 1 - (Health education and communication) Asssociations starts*/

const gnm_1_health_education_and_communication_fw = {
"board": [
    // "GNM - 1"
],
"medium": [
   "Health education and communication"
],
"gradeLevel": [
   'Describes the concept and different aspects of communication',
   'Describes the aims and objectives, scope, levels, approaches and principles of health education',
   'Demonstrates the skills of counselling',
   'Describes the types of AV aids and demonstrates skill in preparing and using different kinds of audio-visual aids',
],
"subject": [
   "Communication and health education",
   "Counselling",
],
"difficultyLevel":[
   "Remembers concept and different aspects of communication",
   "Understands principles of health education",
   "Recognises types of AV media",
   "Applies the principles of health education",
]
}

const health_education_and_communication_r_1_associations = {
    "name": "Health education and communication",
    "code": "",
    "board": ["GNM - 1"],
    "medium": [],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []
}

const health_education_and_communication_a_1_associations = {
    "name": 'Describes the concept and different aspects of communication',
    "code": "",
    "board": ["GNM - 1"],
    "medium": ["Health education and communication"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const health_education_and_communication_a_2_associations = {
    "name": 'Describes the aims and objectives, scope, levels, approaches and principles of health education',
    "code": "",
    "board": ["GNM - 1"],
    "medium": ["Health education and communication"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const health_education_and_communication_a_3_associations = {
    "name": 'Demonstrates the skills of counselling',
    "code": "",
    "board": ["GNM - 1"],
    "medium": ["Health education and communication"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const health_education_and_communication_a_4_associations = {
    "name": 'Describes the types of AV aids and demonstrates skill in preparing and using different kinds of audio-visual aids',
    "code": "",
    "board": ["GNM - 1"],
    "medium": ["Health education and communication"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const health_education_and_communication_c62_associations = {
    "name": "Communication and health education",
    "code": "",
    "board": ["GNM - 1"],
    "medium": ["Health education and communication"],
    "gradeLevel": [
        'Describes the concept and different aspects of communication',
        'Describes the aims and objectives, scope, levels, approaches and principles of health education',
        'Describes the types of AV aids and demonstrates skill in preparing and using different kinds of audio-visual aids',
    ],
    "subject":[],
    "difficultyLevel": []

}

const health_education_and_communication_c63_associations = {
    "name": "Counselling",
    "code": "",
    "board": ["GNM - 1"],
    "medium": ["Health education and communication"],
    "gradeLevel": [
        'Demonstrates the skills of counselling',
    ],
    "subject":[],
    "difficultyLevel": []

}

const health_education_and_communication_c62_l1_associations = {
    "name": "Remembers concept and different aspects of communication",
    "code": "",
    "board": ["GNM - 1"],
    "medium": ["Health education and communication"],
    "gradeLevel": [
        'Describes the concept and different aspects of communication',
    ],
    "subject":["Communication and health education"],
    "difficultyLevel": []

}

const health_education_and_communication_c62_l2_associations = {
    "name": "Understands principles of health education",
    "code": "",
    "board": ["GNM - 1"],
    "medium": ["Health education and communication"],
    "gradeLevel": [
        'Describes the aims and objectives, scope, levels, approaches and principles of health education',
    ],
    "subject":["Communication and health education"],
    "difficultyLevel": []

}

const health_education_and_communication_c62_l3_associations = {
    "name": "Recognises types of AV media",
    "code": "",
    "board": ["GNM - 1"],
    "medium": ["Health education and communication"],
    "gradeLevel": [
        'Describes the types of AV aids and demonstrates skill in preparing and using different kinds of audio-visual aids',
    ],
    "subject":["Communication and health education"],
    "difficultyLevel": []

}

const health_education_and_communication_c62_l4_associations = {
    "name": "Applies the principles of health education",
    "code": "",
    "board": ["GNM - 1"],
    "medium": ["Health education and communication"],
    "gradeLevel": [
        'Describes the types of AV aids and demonstrates skill in preparing and using different kinds of audio-visual aids',
    ],
    "subject":["Communication and health education"],
    "difficultyLevel": []

}

const gnm_1_health_education_and_communication_r_a_c_association = {
    boardAssociations: [
    ],
    mediumAssociations: [
        health_education_and_communication_r_1_associations
    ],
    gradeLevelAssociations: [
        health_education_and_communication_a_1_associations,
        health_education_and_communication_a_2_associations,
        health_education_and_communication_a_3_associations,
        health_education_and_communication_a_4_associations,
    ],
    subjectAssociations: [
        health_education_and_communication_c62_associations,
        health_education_and_communication_c63_associations
    ],
    difficultyLevelAssociations: [
        health_education_and_communication_c62_l1_associations,
        health_education_and_communication_c62_l2_associations,
        health_education_and_communication_c62_l3_associations,
        health_education_and_communication_c62_l4_associations,
    ]
}


/* GNM 1 - (Health education and communication) Asssociations ends*/


//* GNM 1 - (Nutrition) Asssociations starts*/
const gnm_1_nutrition_fw = {
    board: [
         // "GNM - 1"
    ],
    medium: [
        "Nutrition"
    ],
    gradeLevel: [
        'Describes the relationship between nutrition and health',
        'Describes the classification of food',
        'Understands normal dietary requirements and demonstrates skill in calculating normal food requirements',
        'Describes the principles and various methods of preparation, preservation and storage of food',
        'Describes about therapeutic diet',
        'Describes the concept of community nutrition',
        'Demonstrates skill in preparation of common food items',
    ],
    subject: [
        "Dietary requirements",
        "Nutrition",
    ],
    difficultyLevel: [
        //C24-L1-L4 -> L4 is not availbale in excel sheet
        "Remembers the concept of nutrition and health",
        "Understands normal dietary requirements",
        "Interprets the significance of therapeutic diet and applies it",
        //C54-L1-L4 -> L4 is not availbale in excel sheet
        "Remembers the concept of cooking and its effect on food and nutrients",
        "Understands preparation of common food items",
        "Demonstrates skills for prepartion of common food items",
    ],
    
}

const nutrition_r_1_associations = {
    "name":  "Nutrition",
    "code": "",
    "board": ["GNM - 1"],
    "medium": [],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []
}

const nutrition_a_1_associations = {
    "name": 'Describes the relationship between nutrition and health',
    "code": "",
    "board": ["GNM - 1"],
    "medium": [ "Nutrition"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const nutrition_a_2_associations = {
    "name": 'Describes the classification of food',
    "code": "",
    "board": ["GNM - 1"],
    "medium": [ "Nutrition"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const nutrition_a_3_associations = {
    "name": 'Understands normal dietary requirements and demonstrates skill in calculating normal food requirements',
    "code": "",
    "board": ["GNM - 1"],
    "medium": [ "Nutrition"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const nutrition_a_4_associations = {
    "name": 'Describes the principles and various methods of preparation, preservation and storage of food',
    "code": "",
    "board": ["GNM - 1"],
    "medium": [ "Nutrition"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const nutrition_a_5_associations = {
    "name": 'Describes about therapeutic diet',
    "code": "",
    "board": ["GNM - 1"],
    "medium": [ "Nutrition"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const nutrition_a_6_associations = {
    "name": 'Describes the concept of community nutrition',
    "code": "",
    "board": ["GNM - 1"],
    "medium": [ "Nutrition"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const nutrition_a_7_associations = {
    "name": 'Demonstrates skill in preparation of common food items',
    "code": "",
    "board": ["GNM - 1"],
    "medium": [ "Nutrition"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const nutrition_c24_associations = {
    "name": "Dietary requirements",
    "code": "",
    "board": ["GNM - 1"],
    "medium": [ "Nutrition"],
    "gradeLevel": [
        'Describes the relationship between nutrition and health',
        'Describes the classification of food',
        'Understands normal dietary requirements and demonstrates skill in calculating normal food requirements',
        'Describes about therapeutic diet',
        'Describes the concept of community nutrition',
    ],
    "subject":[],
    "difficultyLevel": []

}

const nutrition_c54_associations = {
    "name": "Nutrition",
    "code": "",
    "board": ["GNM - 1"],
    "medium": [ "Nutrition"],
    "gradeLevel": [
        'Describes the principles and various methods of preparation, preservation and storage of food',
        'Demonstrates skill in preparation of common food items',
    ],
    "subject":[],
    "difficultyLevel": []

}

const nutrition_c24_l1_associations = {
    "name": "Remembers the concept of nutrition and health",
    "code": "",
    "board": ["GNM - 1"],
    "medium": [ "Nutrition"],
    "gradeLevel": [
        'Describes the relationship between nutrition and health',
        'Describes the concept of community nutrition',
    ],
    "subject":["Dietary requirements"],
    "difficultyLevel": []

}

const nutrition_c24_l2_associations = {
    "name": "Understands normal dietary requirements",
    "code": "",
    "board": ["GNM - 1"],
    "medium": [ "Nutrition"],
    "gradeLevel": [
        'Describes the classification of food',
    ],
    "subject":["Dietary requirements"],
    "difficultyLevel": []

}

const nutrition_c24_l3_associations = {
    "name": "Interprets the significance of therapeutic diet and applies it",
    "code": "",
    "board": ["GNM - 1"],
    "medium": [ "Nutrition"],
    "gradeLevel": [
        'Understands normal dietary requirements and demonstrates skill in calculating normal food requirements',
    ],
    "subject":["Dietary requirements"],
    "difficultyLevel": []

}

const nutrition_c54_l1_associations = {
    "name": "Remembers the concept of cooking and its effect on food and nutrients",
    "code": "",
    "board": ["GNM - 1"],
    "medium": [ "Nutrition"],
    "gradeLevel": [
        'Describes the principles and various methods of preparation, preservation and storage of food',
    ],
    "subject":["Nutrition"],
    "difficultyLevel": []

}

const nutrition_c54_l2_associations = {
    "name": "Understands preparation of common food items",
    "code": "",
    "board": ["GNM - 1"],
    "medium": [ "Nutrition"],
    "gradeLevel": [
        'Describes the principles and various methods of preparation, preservation and storage of food',
    ],
    "subject":["Nutrition"],
    "difficultyLevel": []

}

const nutrition_c54_l3_associations = {
    "name": "Demonstrates skills for prepartion of common food items",
    "code": "",
    "board": ["GNM - 1"],
    "medium": [ "Nutrition"],
    "gradeLevel": [
        'Demonstrates skill in preparation of common food items',
    ],
    "subject":["Nutrition"],
    "difficultyLevel": []

}

const gnm_1_nutrition_r_a_c_association = {
    boardAssociations: [
    ],
    mediumAssociations: [
        nutrition_r_1_associations
    ],
    gradeLevelAssociations: [
        nutrition_a_1_associations,
        nutrition_a_2_associations,
        nutrition_a_3_associations,
        nutrition_a_4_associations,
        nutrition_a_5_associations,
        nutrition_a_6_associations,
        nutrition_a_7_associations,
    ],
    subjectAssociations: [
        nutrition_c24_associations,
        nutrition_c54_associations,
    ],
    difficultyLevelAssociations: [
        nutrition_c24_l1_associations,
        nutrition_c24_l2_associations,
        nutrition_c24_l3_associations,
        nutrition_c54_l1_associations,
        nutrition_c54_l2_associations,
        nutrition_c54_l3_associations,
    ]   
}

//* GNM 1 - (Nutrition) Asssociations ends*/


//* GNM 1 - (English) Asssociations starts*/
const gnm_1_english_fw = {
    board: [
         // "GNM - 1"
    ],
    medium: [
        "English"
    ],
    gradeLevel: [
        'Speaks and writes correct grammatical English',
        'Develops ability to read understand and write in English',
        'Demonstrates conversation skills',
    ],
    subject: [
        "English",
    ],
    difficultyLevel: [
        "Understands correct gramatical english",
        "Reads english",
        "Writes in english",
        "Demonstrates conversation skills",
        "Demonstrates understanding reading writing and speaking in English",
    ],
    
}

const english_r_1_associations = {
    "name":  "English",
    "code": "",
    "board": ["GNM - 1"],
    "medium": [],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []
}

const english_a_1_associations = {
    "name": 'Speaks and writes correct grammatical English',
    "code": "",
    "board": ["GNM - 1"],
    "medium": [ "English"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const english_a_2_associations = {
    "name": 'Develops ability to read understand and write in English',
    "code": "",
    "board": ["GNM - 1"],
    "medium": [ "English"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const english_a_3_associations = {
    "name": 'Demonstrates conversation skills',
    "code": "",
    "board": ["GNM - 1"],
    "medium": [ "English"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const english_c64_associations = {
    "name":  "English",
    "code": "",
    "board": ["GNM - 1"],
    "medium": [ "English"],
    "gradeLevel": [
        'Speaks and writes correct grammatical English',
        'Develops ability to read understand and write in English',
        'Demonstrates conversation skills',
    ],
    "subject":[],
    "difficultyLevel": []

}

const english_c64_l1_associations = {
    "name": "Understands correct gramatical english",
    "code": "",
    "board": ["GNM - 1"],
    "medium": [ "English"],
    "gradeLevel": [
        'Speaks and writes correct grammatical English',
        'Develops ability to read understand and write in English',
    ],
    "subject":["English"],
    "difficultyLevel": []

}

const english_c64_l2_associations = {
    "name": "Reads english",
    "code": "",
    "board": ["GNM - 1"],
    "medium": [ "English"],
    "gradeLevel": [
        'Develops ability to read understand and write in English',
    ],
    "subject":["English"],
    "difficultyLevel": []

}

const english_c64_l3_associations = {
    "name": "Writes in english",
    "code": "",
    "board": ["GNM - 1"],
    "medium": [ "English"],
    "gradeLevel": [
        'Develops ability to read understand and write in English',
    ],
    "subject":["English"],
    "difficultyLevel": []

}

const english_c64_l4_associations = {
    "name": "Demonstrates conversation skills",
    "code": "",
    "board": ["GNM - 1"],
    "medium": [ "English"],
    "gradeLevel": [
        'Demonstrates conversation skills',
    ],
    "subject":["English"],
    "difficultyLevel": []

}

const english_c64_l5_associations = {
    "name": "Demonstrates understanding reading writing and speaking in English",
    "code": "",
    "board": ["GNM - 1"],
    "medium": [ "English"],
    "gradeLevel": [
        'Demonstrates conversation skills',
    ],
    "subject":["English"],
    "difficultyLevel": []

}

const gnm_1_english_r_a_c_association = {
    boardAssociations: [
    ],
    mediumAssociations: [
        english_r_1_associations
    ],
    gradeLevelAssociations: [
        english_a_1_associations,
        english_a_2_associations,
        english_a_3_associations
    ],
    subjectAssociations: [
        english_c64_associations
    ],
    difficultyLevelAssociations: [
        english_c64_l1_associations,
        english_c64_l2_associations,
        english_c64_l3_associations,
        english_c64_l4_associations,
        english_c64_l5_associations,
    ]   
}


//* GNM 1 - (English) Asssociations ends*/

//* GNM 1 - (Computer education) Asssociations starts*/
const gnm_1_computer_education_fw = {
    board: [
         // "GNM - 1"
    ],
    medium: [
        "Computer education"
    ],
    gradeLevel: [
        'Describes the structure and purpose of computers and disc operating systems',
        'Demonstrates skill in the use of MS office',
        'Demonstrates skills in using multimedia',
        'Demonstrates the use of internet and email',
    ],
    subject: [
        // "English",
        "Computer education"
    ],
    difficultyLevel: [
        "Understands correct gramatical english",
        "Recognises MS Office multimedia and internet",
        "Demonstrates usage",
        "Demonstrates use of MS office in daily use",
        "Analyses data using advanced skills",
    ],
    
    }

const computer_education_r_1_associations = {
    "name":  "Computer education",
    "code": "",
    "board": ["GNM - 1"],
    "medium": [],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []
}

const computer_education_a_1_associations = {
    "name": 'Describes the structure and purpose of computers and disc operating systems',
    "code": "",
    "board": ["GNM - 1"],
    "medium": [ "Computer education"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const computer_education_a_2_associations = {
    "name": 'Demonstrates skill in the use of MS office',
    "code": "",
    "board": ["GNM - 1"],
    "medium": [ "Computer education"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const computer_education_a_3_associations = {
    "name": 'Demonstrates skills in using multimedia',
    "code": "",
    "board": ["GNM - 1"],
    "medium": [ "Computer education"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const computer_education_a_4_associations = {
    "name": 'Demonstrates the use of internet and email',
    "code": "",
    "board": ["GNM - 1"],
    "medium": [ "Computer education"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const computer_education_c64_associations = {
    "name": "English",
    "code": "",
    "board": ["GNM - 1"],
    "medium": [ 
        "Computer education",
        "English"
    ],
    "gradeLevel": [
        'Speaks and writes correct grammatical English',
        'Develops ability to read understand and write in English',
        'Demonstrates conversation skills',
        'Describes the structure and purpose of computers and disc operating systems',
    ],
    "subject":[
    ],
    "difficultyLevel": []

}

const computer_education_c65_associations = {
    "name": "Computer education",
    "code": "",
    "board": ["GNM - 1"],
    "medium": [ 
        "Computer education",
    ],
    "gradeLevel": [
        'Demonstrates skill in the use of MS office',
        'Demonstrates skills in using multimedia',
        'Demonstrates the use of internet and email',
    ],
    "subject":[
    ],
    "difficultyLevel": []

}


const computer_education_c65_l2_associations = {
    "name": "Recognises MS Office multimedia and internet",
    "code": "",
    "board": ["GNM - 1"],
    "medium": [ 
        "Computer education",
    ],
    "gradeLevel": [
        'Demonstrates skill in the use of MS office',
        'Demonstrates skills in using multimedia',
        'Demonstrates the use of internet and email',
    ],
    "subject":[
        "Computer education",
    ],
    "difficultyLevel": []

}


const computer_education_c65_l3_associations = {
    "name": "Demonstrates usage",
    "code": "",
    "board": ["GNM - 1"],
    "medium": [ 
        "Computer education",
    ],
    "gradeLevel": [
        'Demonstrates skill in the use of MS office',
        'Demonstrates skills in using multimedia',
        'Demonstrates the use of internet and email',
    ],
    "subject":[
        "Computer education",
    ],
    "difficultyLevel": []

}

const computer_education_c65_l4_associations = {
    "name": "Demonstrates use of MS office in daily use",
    "code": "",
    "board": ["GNM - 1"],
    "medium": [ 
        "Computer education",
    ],
    "gradeLevel": [
        'Demonstrates skill in the use of MS office',
        'Demonstrates skills in using multimedia',
        'Demonstrates the use of internet and email',
    ],
    "subject":[
        "Computer education",
    ],
    "difficultyLevel": []

}

const computer_education_c65_l5_associations = {
    "name": "Analyses data using advanced skills",
    "code": "",
    "board": ["GNM - 1"],
    "medium": [ 
        "Computer education",
    ],
    "gradeLevel": [
        'Demonstrates skill in the use of MS office',
        'Demonstrates skills in using multimedia',
        'Demonstrates the use of internet and email',
    ],
    "subject":[
        "Computer education",
    ],
    "difficultyLevel": []

}

const computer_education_c64_l1_associations = {
    "name":  "Understands correct gramatical english",
    "code": "",
    "board": ["GNM - 1"],
    "medium": [ 
        "Computer education",
        "English"
    ],
    "gradeLevel": [
        'Speaks and writes correct grammatical English',
        'Develops ability to read understand and write in English',
        'Describes the structure and purpose of computers and disc operating systems',
    ],
    "subject":[
        "English"
    ],
    "difficultyLevel": []

}

const gnm_1_computer_education_r_a_c_association = {
    boardAssociations: [
    ],
    mediumAssociations: [
        computer_education_r_1_associations
    ],
    gradeLevelAssociations: [
        computer_education_a_1_associations,
        computer_education_a_2_associations,
        computer_education_a_3_associations,
        computer_education_a_4_associations,
    ],
    subjectAssociations: [
        computer_education_c64_associations,
        computer_education_c65_associations
    ],
    difficultyLevelAssociations: [
        computer_education_c64_l1_associations,
        computer_education_c65_l2_associations,
        computer_education_c65_l3_associations,
        computer_education_c65_l4_associations,
        computer_education_c65_l5_associations
    ]   
}


//* GNM 1 - (Computer education) Asssociations ends*/



/* GNM 2 - (Medical Surgical Nursing-II ) Asssociations starts*/

const gnm_2_medical_surgical_nursing_2_fw = {
    board: [
         // "GNM - 2"
    ],
    medium: [
        "Medical Surgical Nursing-II"
    ],
    gradeLevel: [
        'Describes the management of patients with oncology',
        'Describes the disorders of breast and breast cancer and demonstrates skill in giving nursing care to patients with breast disorders',
        'Describes the various diseases and disorders of integumentary system and their management and demonstrates skill in providing care to the clients with disorders of integumentry system',
        'Describes the disorder and diseases of eye and demonstrates skill in giving care for patients with various eye diseases and disorders',
        'Describes disorders and diseases of ear nose and throat and demonstrates skills in providing nursing care for patients with various ENT problems',
        'Describes cardiovascular circulatory and Hematological disorders and diseases and demonstrates skill in carrying nursing interventions for clients with circulatory and hematological disorders and diseases',
        'Describes the nursing management of patients with communicable diseases and demonstrates skill in providing interventions for patients with communicable diseases and understands the nurses role in various national control Eradication Programme of communicable diseases',
        'Describes various sexually transmitted diseases and demonstrates skills in syndromic management of sexually transmitted diseases',
        'Describes various musculo skeletal disorders and diseases and demonstrates skills in management of musculo skeletal diseases',
        'Decribes the role of nurse in medical surgical nursing and demonstrate skill in meeting medical surgical nursing',
        'Identifies and demonstrates nurses skill in managing emergencies and disaster',
    ],
    subject: [
        "Emergency triage assessment",
        "Oncology Nursing",
        "Integumentary system and disorders",
        "Ophthalmology and ophthalmic nursing",
        "ENT disorders",
        "Cardio vascular, circulatory and hematological disorders",
        "Sexually transmitted diseases",
        "Musculo skeletal disorders and diseases",
        
    ],
    difficultyLevel: [
        //C41-L2-L5
        "Understands signs and symptoms of cancer",
        "Understands management of oncological disorders",
        "Conducts assessment and identifies treament",
        "Manages patient",
        //C42-L2-L5
        "Understands disorders and burns",
        "Understands assessment and complications",
        "Conducts assessment",
        // "Manages patient",
        //C43-L2-L5
        "Understands various diseases and disorders and its management",
        "Understands assessment methodology",
        // "Conducts assessment",
        // "Manages patient",
        //C44-L2-L5
        "Understands signs and symptoms of diseases",
        "Understands assessment",
        "Conducts assessment and identifies disease",
        // "Manages patient",
        //C45-L2-L5
        // "Understands signs and symptoms of diseases",
        // "Understands assessment",
        // "Conducts assessment and identifies disease",
        // "Manages patient",
        //C71-L2-L5
        "Understands the various musculo skeletal disorders and diseases",
        "Recognises assessments and therapies and drugs used to care for musculo skeletal disorders and diseases",
        "Conducts assessments and interprets results",
        "Provides care for patient",   
    ],
    
    }

const medical_surgical_nursing_2_r_1_associations = {
    "name": "Medical Surgical Nursing-II",
    "code": "",
    "board": ["GNM - 2"],
    "medium": [],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []
}

const medical_surgical_nursing_2_a_1_associations = {
    "name": 'Describes the management of patients with oncology',
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Medical Surgical Nursing-II"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const medical_surgical_nursing_2_a_2_associations = {
    "name": 'Describes the disorders of breast and breast cancer and demonstrates skill in giving nursing care to patients with breast disorders', 
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Medical Surgical Nursing-II"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const medical_surgical_nursing_2_a_3_associations = {
    "name": 'Describes the various diseases and disorders of integumentary system and their management and demonstrates skill in providing care to the clients with disorders of integumentry system',
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Medical Surgical Nursing-II"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const medical_surgical_nursing_2_a_4_associations = {
    "name": 'Describes the disorder and diseases of eye and demonstrates skill in giving care for patients with various eye diseases and disorders',
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Medical Surgical Nursing-II"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const medical_surgical_nursing_2_a_5_associations = {
    "name": 'Describes disorders and diseases of ear nose and throat and demonstrates skills in providing nursing care for patients with various ENT problems',
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Medical Surgical Nursing-II"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const medical_surgical_nursing_2_a_6_associations = {
    "name": 'Describes cardiovascular circulatory and Hematological disorders and diseases and demonstrates skill in carrying nursing interventions for clients with circulatory and hematological disorders and diseases',
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Medical Surgical Nursing-II"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const medical_surgical_nursing_2_a_7_associations = {
    "name":  'Describes the nursing management of patients with communicable diseases and demonstrates skill in providing interventions for patients with communicable diseases and understands the nurses role in various national control Eradication Programme of communicable diseases',
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Medical Surgical Nursing-II"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const medical_surgical_nursing_2_a_8_associations = {
    "name": 'Describes various sexually transmitted diseases and demonstrates skills in syndromic management of sexually transmitted diseases',
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Medical Surgical Nursing-II"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const medical_surgical_nursing_2_a_9_associations = {
    "name": 'Describes various musculo skeletal disorders and diseases and demonstrates skills in management of musculo skeletal diseases',
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Medical Surgical Nursing-II"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const medical_surgical_nursing_2_a_10_associations = {
    "name": 'Decribes the role of nurse in medical surgical nursing and demonstrate skill in meeting medical surgical nursing',
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Medical Surgical Nursing-II"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const medical_surgical_nursing_2_a_11_associations = {
    "name": 'Identifies and demonstrates nurses skill in managing emergencies and disaster',
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Medical Surgical Nursing-II"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const medical_surgical_nursing_2_c11_associations = {
    "name": "Emergency triage assessment",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Medical Surgical Nursing-II"],
    "gradeLevel": [
        'Decribes the role of nurse in medical surgical nursing and demonstrate skill in meeting medical surgical nursing',
    ],
    "subject":[],
    "difficultyLevel": []

}

const medical_surgical_nursing_2_41_associations = {
    "name": "Oncology Nursing",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Medical Surgical Nursing-II"],
    "gradeLevel": [
        'Describes the management of patients with oncology',
    ],
    "subject":[],
    "difficultyLevel": []

}
       
const medical_surgical_nursing_2_41_l2_associations = {
    "name": "Understands signs and symptoms of cancer",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Medical Surgical Nursing-II"],
    "gradeLevel": [
        'Describes the management of patients with oncology',
    ],
    "subject":["Oncology Nursing"],
    "difficultyLevel": []

}

const medical_surgical_nursing_2_41_l3_associations = {
    "name": "Understands management of oncological disorders",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Medical Surgical Nursing-II"],
    "gradeLevel": [
        'Describes the management of patients with oncology',
    ],
    "subject":["Oncology Nursing"],
    "difficultyLevel": []

}

const medical_surgical_nursing_2_41_l4_associations = {
    "name": "Conducts assessment and identifies treament",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Medical Surgical Nursing-II"],
    "gradeLevel": [
        'Describes the management of patients with oncology',
    ],
    "subject":["Oncology Nursing"],
    "difficultyLevel": []

}

const medical_surgical_nursing_2_41_l5_associations = {
    "name": "Manages patient",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Medical Surgical Nursing-II"],
    "gradeLevel": [
        'Describes the management of patients with oncology',
        'Describes the various diseases and disorders of integumentary system and their management and demonstrates skill in providing care to the clients with disorders of integumentry system',
        'Describes the disorder and diseases of eye and demonstrates skill in giving care for patients with various eye diseases and disorders',
        'Describes disorders and diseases of ear nose and throat and demonstrates skills in providing nursing care for patients with various ENT problems',
        'Describes cardiovascular circulatory and Hematological disorders and diseases and demonstrates skill in carrying nursing interventions for clients with circulatory and hematological disorders and diseases',
    ],
    "subject":[
        "Oncology Nursing",
        "Integumentary system and disorders",
        "Ophthalmology and ophthalmic nursing",
        "ENT disorders",
        "Cardio vascular, circulatory and hematological disorders",
    ],
    "difficultyLevel": []

}

const medical_surgical_nursing_2_c42_associations = {
    "name": "Integumentary system and disorders",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Medical Surgical Nursing-II"],
    "gradeLevel": [
        'Describes the various diseases and disorders of integumentary system and their management and demonstrates skill in providing care to the clients with disorders of integumentry system',
    ],
    "subject":[],
    "difficultyLevel": []

}


const medical_surgical_nursing_2_c42_l2_associations = {
    "name": "Understands disorders and burns",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Medical Surgical Nursing-II"],
    "gradeLevel": [
        'Describes the various diseases and disorders of integumentary system and their management and demonstrates skill in providing care to the clients with disorders of integumentry system',
    ],
    "subject":["Integumentary system and disorders"],
    "difficultyLevel": []

}

const medical_surgical_nursing_2_c42_l3_associations = {
    "name": "Understands assessment and complications",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Medical Surgical Nursing-II"],
    "gradeLevel": [
        'Describes the various diseases and disorders of integumentary system and their management and demonstrates skill in providing care to the clients with disorders of integumentry system',
    ],
    "subject":["Integumentary system and disorders"],
    "difficultyLevel": []

}

const medical_surgical_nursing_2_c42_l4_associations = {
    "name": "Conducts assessment",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Medical Surgical Nursing-II"],
    "gradeLevel": [
        'Describes the various diseases and disorders of integumentary system and their management and demonstrates skill in providing care to the clients with disorders of integumentry system',
        'Describes the disorder and diseases of eye and demonstrates skill in giving care for patients with various eye diseases and disorders',
    ],
    "subject":[
        "Integumentary system and disorders",
        "Ophthalmology and ophthalmic nursing"
    ],
    "difficultyLevel": []

}

const medical_surgical_nursing_2_c43_associations = {
    "name": "Ophthalmology and ophthalmic nursing",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Medical Surgical Nursing-II"],
    "gradeLevel": [
        'Describes the disorder and diseases of eye and demonstrates skill in giving care for patients with various eye diseases and disorders',
    ],
    "subject":[],
    "difficultyLevel": []

}

const medical_surgical_nursing_2_c43_l2_associations = {
    "name": "Understands various diseases and disorders and its management",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Medical Surgical Nursing-II"],
    "gradeLevel": [
        'Describes the disorder and diseases of eye and demonstrates skill in giving care for patients with various eye diseases and disorders',
    ],
    "subject":["Ophthalmology and ophthalmic nursing"],
    "difficultyLevel": []

}

const medical_surgical_nursing_2_c43_l3_associations = {
    "name": "Understands assessment methodology",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Medical Surgical Nursing-II"],
    "gradeLevel": [
        'Describes the disorder and diseases of eye and demonstrates skill in giving care for patients with various eye diseases and disorders',
    ],
    "subject":["Ophthalmology and ophthalmic nursing"],
    "difficultyLevel": []

}

const medical_surgical_nursing_2_c44_associations = {
    "name": "ENT disorders",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Medical Surgical Nursing-II"],
    "gradeLevel": [
        'Describes disorders and diseases of ear nose and throat and demonstrates skills in providing nursing care for patients with various ENT problems',
    ],
    "subject":[],
    "difficultyLevel": []

}

const medical_surgical_nursing_2_c44_l2_associations = {
    "name": "Understands signs and symptoms of diseases",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Medical Surgical Nursing-II"],
    "gradeLevel": [
        'Describes disorders and diseases of ear nose and throat and demonstrates skills in providing nursing care for patients with various ENT problems',
        'Describes cardiovascular circulatory and Hematological disorders and diseases and demonstrates skill in carrying nursing interventions for clients with circulatory and hematological disorders and diseases',
    ],
    "subject":[
        "ENT disorders",
        "Cardio vascular, circulatory and hematological disorders"
    ],
    "difficultyLevel": []

}

const medical_surgical_nursing_2_c44_l3_associations = {
    "name": "Understands assessment",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Medical Surgical Nursing-II"],
    "gradeLevel": [
        'Describes disorders and diseases of ear nose and throat and demonstrates skills in providing nursing care for patients with various ENT problems',
        'Describes cardiovascular circulatory and Hematological disorders and diseases and demonstrates skill in carrying nursing interventions for clients with circulatory and hematological disorders and diseases',
    ],
    "subject":[
        "ENT disorders",
        "Cardio vascular, circulatory and hematological disorders"
    ],
    "difficultyLevel": []

}

const medical_surgical_nursing_2_c44_l4_associations = {
    "name": "Conducts assessment and identifies disease",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Medical Surgical Nursing-II"],
    "gradeLevel": [
        'Describes disorders and diseases of ear nose and throat and demonstrates skills in providing nursing care for patients with various ENT problems',
        'Describes cardiovascular circulatory and Hematological disorders and diseases and demonstrates skill in carrying nursing interventions for clients with circulatory and hematological disorders and diseases',
    ],
    "subject":[
        "ENT disorders",
        "Cardio vascular, circulatory and hematological disorders"
    ],
    "difficultyLevel": []

}

const medical_surgical_nursing_2_c45_associations = {
    "name": "Cardio vascular, circulatory and hematological disorders",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Medical Surgical Nursing-II"],
    "gradeLevel": [
        'Describes cardiovascular circulatory and Hematological disorders and diseases and demonstrates skill in carrying nursing interventions for clients with circulatory and hematological disorders and diseases',
    ],
    "subject":[],
    "difficultyLevel": []

}

const medical_surgical_nursing_2_c46_associations = {
    "name": "Sexually transmitted diseases",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Medical Surgical Nursing-II"],
    "gradeLevel": [
        'Describes the nursing management of patients with communicable diseases and demonstrates skill in providing interventions for patients with communicable diseases and understands the nurses role in various national control Eradication Programme of communicable diseases',
        'Describes various sexually transmitted diseases and demonstrates skills in syndromic management of sexually transmitted diseases',
    ],
    "subject":[],
    "difficultyLevel": []

}


const medical_surgical_nursing_2_c71_associations = {
    "name": "Musculo skeletal disorders and diseases",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Medical Surgical Nursing-II"],
    "gradeLevel": [
        'Describes various musculo skeletal disorders and diseases and demonstrates skills in management of musculo skeletal diseases',
    ],
    "subject":[],
    "difficultyLevel": []

}
        
const medical_surgical_nursing_2_c71_l2_associations = {
    "name": "Understands the various musculo skeletal disorders and diseases",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Medical Surgical Nursing-II"],
    "gradeLevel": [
        'Describes various musculo skeletal disorders and diseases and demonstrates skills in management of musculo skeletal diseases',
    ],
    "subject":["Musculo skeletal disorders and diseases"],
    "difficultyLevel": []

}

const medical_surgical_nursing_2_c71_l3_associations = {
    "name": "Recognises assessments and therapies and drugs used to care for musculo skeletal disorders and diseases",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Medical Surgical Nursing-II"],
    "gradeLevel": [
        'Describes various musculo skeletal disorders and diseases and demonstrates skills in management of musculo skeletal diseases',
    ],
    "subject":["Musculo skeletal disorders and diseases"],
    "difficultyLevel": []

}

const medical_surgical_nursing_2_c71_l4_associations = {
    "name": "Conducts assessments and interprets results",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Medical Surgical Nursing-II"],
    "gradeLevel": [
        'Describes various musculo skeletal disorders and diseases and demonstrates skills in management of musculo skeletal diseases',
    ],
    "subject":["Musculo skeletal disorders and diseases"],
    "difficultyLevel": []

}

const medical_surgical_nursing_2_c71_l5_associations = {
    "name": "Provides care for patient",  
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Medical Surgical Nursing-II"],
    "gradeLevel": [
        'Describes various musculo skeletal disorders and diseases and demonstrates skills in management of musculo skeletal diseases',
    ],
    "subject":["Musculo skeletal disorders and diseases"],
    "difficultyLevel": []

}

const gnm_2_medical_surgical_nursing_2_r_a_c_association = {
    boardAssociations: [
    ],
    mediumAssociations: [
        medical_surgical_nursing_2_r_1_associations
    ],
    gradeLevelAssociations: [
        medical_surgical_nursing_2_a_1_associations,
        medical_surgical_nursing_2_a_2_associations,
        medical_surgical_nursing_2_a_3_associations,
        medical_surgical_nursing_2_a_4_associations,
        medical_surgical_nursing_2_a_5_associations,
        medical_surgical_nursing_2_a_6_associations,
        medical_surgical_nursing_2_a_7_associations,
        medical_surgical_nursing_2_a_8_associations,
        medical_surgical_nursing_2_a_9_associations,
        medical_surgical_nursing_2_a_10_associations,
        medical_surgical_nursing_2_a_11_associations,
    ],
    subjectAssociations: [
        medical_surgical_nursing_2_c11_associations,
        medical_surgical_nursing_2_41_associations,
        medical_surgical_nursing_2_c42_associations,
        medical_surgical_nursing_2_c43_associations,
        medical_surgical_nursing_2_c44_associations,
        medical_surgical_nursing_2_c45_associations,
        medical_surgical_nursing_2_c46_associations,
        medical_surgical_nursing_2_c71_associations,
        
        
    ],
    difficultyLevelAssociations: [
        medical_surgical_nursing_2_41_l2_associations,
        medical_surgical_nursing_2_41_l3_associations,
        medical_surgical_nursing_2_41_l4_associations,
        medical_surgical_nursing_2_41_l5_associations,
        medical_surgical_nursing_2_c42_l2_associations,
        medical_surgical_nursing_2_c42_l3_associations,
        medical_surgical_nursing_2_c42_l4_associations,
        medical_surgical_nursing_2_c43_l2_associations,
        medical_surgical_nursing_2_c43_l3_associations,
        medical_surgical_nursing_2_c44_l2_associations,
        medical_surgical_nursing_2_c44_l3_associations,
        medical_surgical_nursing_2_c44_l4_associations,
        medical_surgical_nursing_2_c71_l2_associations,
        medical_surgical_nursing_2_c71_l3_associations,
        medical_surgical_nursing_2_c71_l4_associations,
        medical_surgical_nursing_2_c71_l5_associations
    ]
}


/* GNM 2 - (Medical Surgical Nursing-II ) Asssociations ends*/



/* GNM 2 - (Mental health nursing ) Asssociations starts*/

const gnm_2_mental_health_nursing_fw = {
    board: [
         // "GNM - 2"
    ],
    medium:[
        "Mental health nursing"
    ],
    gradeLevel: [
        'Describes the concept of mental health and mental illness in relation to providing comprehensive care to the patients',
        'Understands the historical development of Psychiatry and psychiatric nursing',
        'Describes mental health assessment',
        'Describes therapeutic relationships and demonstrates skills in process recording',
        'Lists various mental disorders and describes their mental and psychiatric and nursing management',
        'Describes the Bio psychosocial therapies and understands the role of the nurse',
        'Describes the concept of preventive community mental health services and enumerates the nurses role in National mental health programme',
        'Understands different psychiatric emergencies and their management and demonstrates skills in crisis intervention',
        'Describes the legal aspects to be kept in mind in the care of mentally ill patients',
    ],
    subject: [
        "Mental Disorders",
        "Concept of mental health and mental illness and its legal aspects",
    ],
    difficultyLevel: [
        //C47-L1-L5
        "Understands the psycho-pathophysiology etiological theories and classification of mental disorder",
        "Understands the various mental disorders",
        "Understands signs and symptoms",
        "Understands nursing process pharmacology and therapies",
        "Provides nursing care",
        //C70-L1-L3
        "Remembers the concept of mental health nursing and mental illness in relation to providing comprehensive care to the patients",
        "Understands the history of psychiatry",
        "Recognises the legal aspects to be kept in mind while caring for mentally ill patients",
    ],
    
}

const mental_health_nursing_r_1_associations = {
    "name": "Mental health nursing",
    "code": "",
    "board": ["GNM - 2"],
    "medium": [],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []
}

const mental_health_nursing_a_1_associations = {
    "name": 'Describes the concept of mental health and mental illness in relation to providing comprehensive care to the patients',
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Mental health nursing"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const mental_health_nursing_a_2_associations = {
    "name":  'Understands the historical development of Psychiatry and psychiatric nursing',
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Mental health nursing"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const mental_health_nursing_a_3_associations = {
    "name": 'Describes mental health assessment',
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Mental health nursing"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const mental_health_nursing_a_4_associations = {
    "name": 'Describes therapeutic relationships and demonstrates skills in process recording',
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Mental health nursing"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const mental_health_nursing_a_5_associations = {
    "name": 'Lists various mental disorders and describes their mental and psychiatric and nursing management',
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Mental health nursing"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const mental_health_nursing_a_6_associations = {
    "name": 'Describes the Bio psychosocial therapies and understands the role of the nurse',
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Mental health nursing"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const mental_health_nursing_a_7_associations = {
    "name": 'Describes the concept of preventive community mental health services and enumerates the nurses role in National mental health programme',
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Mental health nursing"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const mental_health_nursing_a_8_associations = {
    "name": 'Understands different psychiatric emergencies and their management and demonstrates skills in crisis intervention',
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Mental health nursing"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const mental_health_nursing_a_9_associations = {
    "name": 'Describes the legal aspects to be kept in mind in the care of mentally ill patients',
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Mental health nursing"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const mental_health_nursing_c47_associations = {
    "name": "Mental Disorders",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Mental health nursing"],
    "gradeLevel": [
        'Describes mental health assessment',
        'Describes therapeutic relationships and demonstrates skills in process recording',
        'Lists various mental disorders and describes their mental and psychiatric and nursing management',
        'Describes the Bio psychosocial therapies and understands the role of the nurse',
    ],
    "subject":[],
    "difficultyLevel": []

}

const mental_health_nursing_c47_l1_associations = {
    "name": "Understands the psycho-pathophysiology etiological theories and classification of mental disorder",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Mental health nursing"],
    "gradeLevel": [
        'Lists various mental disorders and describes their mental and psychiatric and nursing management',
    ],
    "subject":["Mental Disorders"],
    "difficultyLevel": []

}

const mental_health_nursing_c47_l2_associations = {
    "name": "Understands the various mental disorders",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Mental health nursing"],
    "gradeLevel": [
        'Lists various mental disorders and describes their mental and psychiatric and nursing management',
    ],
    "subject":["Mental Disorders"],
    "difficultyLevel": []

}

const mental_health_nursing_c47_l3_associations = {
    "name": "Understands signs and symptoms",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Mental health nursing"],
    "gradeLevel": [
        'Lists various mental disorders and describes their mental and psychiatric and nursing management',
    ],
    "subject":["Mental Disorders"],
    "difficultyLevel": []

}

const mental_health_nursing_c47_l4_associations = {
    "name": "Understands nursing process pharmacology and therapies",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Mental health nursing"],
    "gradeLevel": [
        'Describes mental health assessment',
        'Describes therapeutic relationships and demonstrates skills in process recording',
        'Describes the Bio psychosocial therapies and understands the role of the nurse',
    ],
    "subject":["Mental Disorders"],
    "difficultyLevel": []

}

const mental_health_nursing_c47_l5_associations = {
    "name":  "Provides nursing care",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Mental health nursing"],
    "gradeLevel": [
        'Describes mental health assessment',
        'Describes therapeutic relationships and demonstrates skills in process recording',
        'Describes the Bio psychosocial therapies and understands the role of the nurse',
    ],
    "subject":["Mental Disorders"],
    "difficultyLevel": []

}

const mental_health_nursing_c70_associations = {
    "name": "Concept of mental health and mental illness and its legal aspects",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Mental health nursing"],
    "gradeLevel": [
        'Describes the concept of mental health and mental illness in relation to providing comprehensive care to the patients',
        'Understands the historical development of Psychiatry and psychiatric nursing',
        'Describes the concept of preventive community mental health services and enumerates the nurses role in National mental health programme',
        'Understands different psychiatric emergencies and their management and demonstrates skills in crisis intervention',
        'Describes the legal aspects to be kept in mind in the care of mentally ill patients',
    ],
    "subject":[],
    "difficultyLevel": []

}

const mental_health_nursing_c70_l1_associations = {
    "name": "Remembers the concept of mental health nursing and mental illness in relation to providing comprehensive care to the patients",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Mental health nursing"],
    "gradeLevel": [
        'Describes the concept of mental health and mental illness in relation to providing comprehensive care to the patients', 
        'Describes the concept of preventive community mental health services and enumerates the nurses role in National mental health programme',

    ],
    "subject":[
        "Concept of mental health and mental illness and its legal aspects",
    ],
    "difficultyLevel": []

}

const mental_health_nursing_c70_l2_associations = {
    "name": "Understands the history of psychiatry",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Mental health nursing"],
    "gradeLevel": [
        'Understands the historical development of Psychiatry and psychiatric nursing',
        'Understands different psychiatric emergencies and their management and demonstrates skills in crisis intervention',
    ],
    "subject":[
        "Concept of mental health and mental illness and its legal aspects",
    ],
    "difficultyLevel": []

}

const mental_health_nursing_c70_l3_associations = {
    "name": "Recognises the legal aspects to be kept in mind while caring for mentally ill patients",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Mental health nursing"],
    "gradeLevel": [
        'Describes the legal aspects to be kept in mind in the care of mentally ill patients',
    ],
    "subject":[
        "Concept of mental health and mental illness and its legal aspects",
    ],
    "difficultyLevel": []

}

const gnm_2_mental_health_nursing_r_a_c_association = {
    boardAssociations: [
    ],
    mediumAssociations: [
        mental_health_nursing_r_1_associations,
    ],
    gradeLevelAssociations: [
        mental_health_nursing_a_1_associations,
        mental_health_nursing_a_2_associations,
        mental_health_nursing_a_3_associations,
        mental_health_nursing_a_4_associations,
        mental_health_nursing_a_5_associations,
        mental_health_nursing_a_6_associations,
        mental_health_nursing_a_7_associations,
        mental_health_nursing_a_8_associations,
        mental_health_nursing_a_9_associations,
    ],
    subjectAssociations: [
        mental_health_nursing_c47_associations,
        mental_health_nursing_c70_associations
    ],
    difficultyLevelAssociations: [
        mental_health_nursing_c47_l1_associations,
        mental_health_nursing_c47_l2_associations,
        mental_health_nursing_c47_l3_associations,
        mental_health_nursing_c47_l4_associations,
        mental_health_nursing_c47_l5_associations,
        mental_health_nursing_c70_l1_associations,
        mental_health_nursing_c70_l2_associations,
        mental_health_nursing_c70_l3_associations
    ]
}

/* GNM 2 - (Mental health nursing ) Asssociations ends*/

/* GNM 2 - (Child health nursing ) Asssociations starts*/
const gnm_2_child_health_nursing = {
    "board": [
         // "GNM - 2"
    ],
    "medium": [
        "Child Health Nursing"
    ],
    "gradeLevel": [
        'Understands the concept of the child health care, trends & emerging challenges for pediatric nurses and describes the role of pediatric nurses in clinics, hospitals and community',
        'Describes the normal growth & development of children',
        'Describes the role of nurse in caring for a sick child. Develop skill in carrying out nursing intervention while caring for pediatric age group',
        'Describes the management of behavioral disorders and common health problems of children and demonstrates skills in the prevention & implementation of medical & nursing management of behavioral disorders & common health problems',
        'Demonstrates skills in providing comprehensive nursing care to the children having congenital defects/malformation',
        'Demonstrates skills in providing comprehensive nursing care to children with various disorders & diseases',
        'Describes the various child welfare services provided by Governmental & non Governmental agencies and understands the ethical & legal implication in pediatric nursing',
    ],
    "subject": [
        "Neonatal resuscitation",
        "Assessment and management of danger signs in sick young infantsick/child",
        "Immunization services",
        "Growth and development of child",
        "Supplements and nutrition",
        "Renal disorders in children",
        "Respiratory disorders in children",
        "Nutrition",
        "Cardiovascular diseases in children",
        "Hematological disorders in children",
        "Neurological disorders in children",
        "Endocrine disorders in children",
        "Development problems in children",
        "Child Health Nursing",
    ],
    "difficultyLevel":[
        "Understands the concept of child health care",
        "Understands the definitions and principles of growth and development",
        "Recognises various child welfare services and agencies and laws pertaining to pediatrics",
    ]
    }

const child_health_nursing_r_1_associations = {
    "name": "Child Health Nursing",
    "code": "",
    "board": ["GNM - 2"],
    "medium": [],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []
}

const child_health_nursing_a_1_associations = {
    "name": 'Understands the concept of the child health care, trends & emerging challenges for pediatric nurses and describes the role of pediatric nurses in clinics, hospitals and community',
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Child Health Nursing"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const child_health_nursing_a_2_associations = {
    "name": 'Describes the normal growth & development of children',
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Child Health Nursing"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const child_health_nursing_a_3_associations = {
    "name": 'Describes the role of nurse in caring for a sick child. Develop skill in carrying out nursing intervention while caring for pediatric age group',
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Child Health Nursing"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const child_health_nursing_a_4_associations = {
    "name": 'Describes the management of behavioral disorders and common health problems of children and demonstrates skills in the prevention & implementation of medical & nursing management of behavioral disorders & common health problems',
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Child Health Nursing"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const child_health_nursing_a_5_associations = {
    "name": 'Demonstrates skills in providing comprehensive nursing care to the children having congenital defects/malformation',
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Child Health Nursing"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const child_health_nursing_a_6_associations = {
    "name": 'Demonstrates skills in providing comprehensive nursing care to children with various disorders & diseases',
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Child Health Nursing"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const child_health_nursing_a_7_associations = {
    "name": 'Describes the various child welfare services provided by Governmental & non Governmental agencies and understands the ethical & legal implication in pediatric nursing',
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Child Health Nursing"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const child_health_nursing_c10_associations = { 
    "name": "Neonatal resuscitation",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Child Health Nursing"],
    "gradeLevel": [
        'Describes the role of nurse in caring for a sick child. Develop skill in carrying out nursing intervention while caring for pediatric age group',
    ],
    "subject":[
    ],
    "difficultyLevel": [
    ]
}

const child_health_nursing_c19_associations = { 
    "name":  "Assessment and management of danger signs in sick young infantsick/child",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Child Health Nursing"],
    "gradeLevel": [
        'Describes the role of nurse in caring for a sick child. Develop skill in carrying out nursing intervention while caring for pediatric age group',
    ],
    "subject":[
    ],
    "difficultyLevel": [
    ]
}

const child_health_nursing_c20_associations = { 
    "name": "Immunization services",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Child Health Nursing"],
    "gradeLevel": [
        'Describes the role of nurse in caring for a sick child. Develop skill in carrying out nursing intervention while caring for pediatric age group',
    ],
    "subject":[
    ],
    "difficultyLevel": [
    ]
}

const child_health_nursing_c21_associations = { 
    "name":  "Growth and development of child",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Child Health Nursing"],
    "gradeLevel": [
        'Describes the normal growth & development of children',
    ],
    "subject":[
    ],
    "difficultyLevel": [
    ]
}

const child_health_nursing_c23_associations = { 
    "name": "Supplements and nutrition",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Child Health Nursing"],
    "gradeLevel": [
        'Describes the normal growth & development of children',
        'Describes the role of nurse in caring for a sick child. Develop skill in carrying out nursing intervention while caring for pediatric age group',
    ],
    "subject":[
    ],
    "difficultyLevel": [
    ]
}


const child_health_nursing_c52_associations = { 
    "name": "Renal disorders in children",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Child Health Nursing"],
    "gradeLevel": [
        'Demonstrates skills in providing comprehensive nursing care to the children having congenital defects/malformation',
        'Demonstrates skills in providing comprehensive nursing care to children with various disorders & diseases',
    ],
    "subject":[
    ],
    "difficultyLevel": [
    ]
}

const child_health_nursing_c53_associations = { 
    "name": "Respiratory disorders in children",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Child Health Nursing"],
    "gradeLevel": [
        'Demonstrates skills in providing comprehensive nursing care to the children having congenital defects/malformation',
        'Demonstrates skills in providing comprehensive nursing care to children with various disorders & diseases',
    ],
    "subject":[
    ],
    "difficultyLevel": [
    ]
}

const child_health_nursing_c54_associations = { 
    "name": "Nutrition",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Child Health Nursing"],
    "gradeLevel": [
        'Demonstrates skills in providing comprehensive nursing care to the children having congenital defects/malformation',
        'Demonstrates skills in providing comprehensive nursing care to children with various disorders & diseases',
    ],
    "subject":[
    ],
    "difficultyLevel": [
    ]
}

const child_health_nursing_c55_associations = { 
    "name": "Cardiovascular diseases in children",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Child Health Nursing"],
    "gradeLevel": [
        'Demonstrates skills in providing comprehensive nursing care to the children having congenital defects/malformation',
        'Demonstrates skills in providing comprehensive nursing care to children with various disorders & diseases',
    ],
    "subject":[
    ],
    "difficultyLevel": [
    ]
}

const child_health_nursing_c56_associations = { 
    "name": "Hematological disorders in children",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Child Health Nursing"],
    "gradeLevel": [
        'Demonstrates skills in providing comprehensive nursing care to the children having congenital defects/malformation',
        'Demonstrates skills in providing comprehensive nursing care to children with various disorders & diseases',
    ],
    "subject":[
    ],
    "difficultyLevel": [
    ]
}

const child_health_nursing_c57_associations = { 
    "name": "Neurological disorders in children",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Child Health Nursing"],
    "gradeLevel": [
        'Demonstrates skills in providing comprehensive nursing care to the children having congenital defects/malformation',
        'Demonstrates skills in providing comprehensive nursing care to children with various disorders & diseases',
    ],
    "subject":[
    ],
    "difficultyLevel": [
    ]
}

const child_health_nursing_c58_associations = { 
    "name": "Endocrine disorders in children",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Child Health Nursing"],
    "gradeLevel": [
        'Demonstrates skills in providing comprehensive nursing care to the children having congenital defects/malformation',
        'Demonstrates skills in providing comprehensive nursing care to children with various disorders & diseases',
    ],
    "subject":[
    ],
    "difficultyLevel": [
    ]
}

const child_health_nursing_c59_associations = { 
    "name": "Development problems in children",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Child Health Nursing"],
    "gradeLevel": [
        'Demonstrates skills in providing comprehensive nursing care to the children having congenital defects/malformation',
        'Demonstrates skills in providing comprehensive nursing care to children with various disorders & diseases',
    ],
    "subject":[
    ],
    "difficultyLevel": [
    ]
}

const child_health_nursing_c69_associations = { 
    "name": "Child Health Nursing",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Child Health Nursing"],
    "gradeLevel": [
        'Understands the concept of the child health care, trends & emerging challenges for pediatric nurses and describes the role of pediatric nurses in clinics, hospitals and community',
        'Describes the normal growth & development of children',
        'Describes the various child welfare services provided by Governmental & non Governmental agencies and understands the ethical & legal implication in pediatric nursing',

    ],
    "subject":[
    ],
    "difficultyLevel": [
    ]
}

const child_health_nursing_c69_l1_associations = {
    "name":  "Understands the concept of child health care",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Child Health Nursing"],
    "gradeLevel": [
        'Understands the concept of the child health care, trends & emerging challenges for pediatric nurses and describes the role of pediatric nurses in clinics, hospitals and community',
    ],
    "subject":[
        "Child Health Nursing"
    ],
    "difficultyLevel": []
}

const child_health_nursing_c69_l2_associations = {
    "name":  "Understands the definitions and principles of growth and development",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Child Health Nursing"],
    "gradeLevel": [
        'Describes the normal growth & development of children',
    ],
    "subject":[
        "Child Health Nursing"
    ],
    "difficultyLevel": []
}

const child_health_nursing_c69_l3_associations = {
    "name":  "Recognises various child welfare services and agencies and laws pertaining to pediatrics",
    "code": "",
    "board": ["GNM - 2"],
    "medium": ["Child Health Nursing"],
    "gradeLevel": [
        'Describes the various child welfare services provided by Governmental & non Governmental agencies and understands the ethical & legal implication in pediatric nursing',
    ],
    "subject":[
        "Child Health Nursing"
    ],
    "difficultyLevel": []
}

const gnm_2_child_health_nursing_r_a_c_association = {
    boardAssociations: [
    ],
    mediumAssociations: [
        child_health_nursing_r_1_associations,
    ],
    gradeLevelAssociations: [
        child_health_nursing_a_1_associations,
        child_health_nursing_a_2_associations,
        child_health_nursing_a_3_associations,
        child_health_nursing_a_4_associations,
        child_health_nursing_a_5_associations,
        child_health_nursing_a_6_associations,
        child_health_nursing_a_7_associations
    ],
    subjectAssociations: [
        child_health_nursing_c10_associations,
        child_health_nursing_c19_associations,
        child_health_nursing_c20_associations,
        child_health_nursing_c21_associations,
        child_health_nursing_c23_associations,
        child_health_nursing_c52_associations,
        child_health_nursing_c53_associations,
        child_health_nursing_c54_associations,
        child_health_nursing_c55_associations,
        child_health_nursing_c56_associations,
        child_health_nursing_c57_associations,
        child_health_nursing_c58_associations,
        child_health_nursing_c59_associations,
        child_health_nursing_c69_associations,
    ],
    difficultyLevelAssociations: [
        child_health_nursing_c69_l1_associations,
        child_health_nursing_c69_l2_associations,
        child_health_nursing_c69_l3_associations
    ]
}

/* GNM 2 - (Child health nursing ) Asssociations ends*/



/* GNM 3 - (midwifery_and_gynaecological ) Asssociations starts*/
const gnm_3_midwifery_and_gynaecological_nursing = {
    board: [
         // "GNM - 3"
    ],
    medium:[
        "Midwifery and Gynaecological Nursing"
    ],
    gradeLevel: [
        'Describes the scope and trends in midwifery',
        'Describes the anatomy and physiology of female reproductive system',
        'Describes the stages of Embryological and fetal development',
        'Describes the physiological changes in pregnancy and the management of normal pregnancy and demonstrates skill is caring for pregnant women',
        'Describes the various stages of labour and the role of the midwife in caring for a woman in labour and demonstrates skill in conducting normal delivery',
        'Describes the management of normal newborn and demonstrates skill in caring for the normal newborn',
        'Describes normal pureperium and the role of midwife in the caring for woman in puerperium',
        'Describes the complications of pregnancy and  demonstrates skills in providing care for women with complicated pregnancy',
        'Describes the management high risk labour and demonstrates skills in early detection and prompt management of high risk labour',
        'Describes the puerperal complications and demonstrates skill in the management of complications of puerperium',
        'Describes the management of high risk and sick newborn and demonstrates skills in caring for high risk and sick newborns',
        'Describes the obstetric operations and midwife role in assisting with each one',
        'Describes the midwifes role in the administration of drugs for women during pregnancy, labour and post parturn period',
        'Describes the ethical legal issues related to midwifery',
    ],
    subject: [
        "Pregnancy Identification",
        "Birth Planning and Preparedness for PW and HRP",
        "Vaginal examination and plotting on partograph",
        "Normal delivery",
        "AMTSL",
        "Fourth Stage of Labour monitoring of mother and newborn",
        "Essential Newborn Care",
        "Post Partum Hemorrage",
        'Eclampsia',

        "Management of emergency signs in newborns",
        "Low birth weight newborns",
        "Kangaroo Mother Care",
        "Post-natal partum care",
        "LAM",
        "IUCD/PPIUCD",
        "Awareness on basket of choice",

        "Breastfeeding",
        "Maternal and Child Death Review support",
        "Midwifery and obstretrical nursing",
    ],
    difficultyLevel: [
        //C1-L1
        "Understands health of males and females and initial assessment protocols",
        //C68-L1-L5
        "Remembers the various obstretric operations",
        "Understands the role of a midwife in assisting a clinical practioner",
        "Interprets the drugs used in obstretrics",
        "Assists the clinical practioner",
        "Maintains records and files",
    ],
    
}

const midwifery_and_gynaecological_r_1_associations = {
    "name": "Midwifery and Gynaecological Nursing",
    "code": "",
    "board": ["GNM - 3"],
    "medium": [],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []
}

const midwifery_and_gynaecological_a_1_associations = {
    "name": "Describes the scope and trends in midwifery",
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Midwifery and Gynaecological Nursing"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const midwifery_and_gynaecological_a_2_associations = {
    "name": 'Describes the anatomy and physiology of female reproductive system',
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Midwifery and Gynaecological Nursing"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const midwifery_and_gynaecological_a_3_associations = {
    "name": 'Describes the stages of Embryological and fetal development',
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Midwifery and Gynaecological Nursing"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const midwifery_and_gynaecological_a_4_associations = {
    "name": 'Describes the physiological changes in pregnancy and the management of normal pregnancy and demonstrates skill is caring for pregnant women',
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Midwifery and Gynaecological Nursing"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const midwifery_and_gynaecological_a_5_associations = {
    "name": 'Describes the various stages of labour and the role of the midwife in caring for a woman in labour and demonstrates skill in conducting normal delivery',
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Midwifery and Gynaecological Nursing"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const midwifery_and_gynaecological_a_6_associations = {
    "name": 'Describes the management of normal newborn and demonstrates skill in caring for the normal newborn',
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Midwifery and Gynaecological Nursing"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const midwifery_and_gynaecological_a_7_associations = {
    "name": 'Describes normal pureperium and the role of midwife in the caring for woman in puerperium',
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Midwifery and Gynaecological Nursing"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const midwifery_and_gynaecological_a_8_associations = {
    "name": 'Describes the complications of pregnancy and  demonstrates skills in providing care for women with complicated pregnancy',
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Midwifery and Gynaecological Nursing"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const midwifery_and_gynaecological_a_9_associations = {
    "name": 'Describes the management high risk labour and demonstrates skills in early detection and prompt management of high risk labour',
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Midwifery and Gynaecological Nursing"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const midwifery_and_gynaecological_a_10_associations = {
    "name": 'Describes the puerperal complications and demonstrates skill in the management of complications of puerperium',
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Midwifery and Gynaecological Nursing"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}


const midwifery_and_gynaecological_a_11_associations = {
    "name": 'Describes the management of high risk and sick newborn and demonstrates skills in caring for high risk and sick newborns',
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Midwifery and Gynaecological Nursing"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const midwifery_and_gynaecological_a_12_associations = {
    "name": 'Describes the obstetric operations and midwife role in assisting with each one',
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Midwifery and Gynaecological Nursing"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const midwifery_and_gynaecological_a_13_associations = {
    "name": 'Describes the midwifes role in the administration of drugs for women during pregnancy, labour and post parturn period',
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Midwifery and Gynaecological Nursing"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const midwifery_and_gynaecological_a_14_associations = {
    "name": 'Describes the ethical legal issues related to midwifery',
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Midwifery and Gynaecological Nursing"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const midwifery_and_gynaecological_c1_associations = { 
    "name": "Pregnancy Identification",
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Midwifery and Gynaecological Nursing"],
    "gradeLevel": [
        'Describes the anatomy and physiology of female reproductive system',
        'Describes the stages of Embryological and fetal development',
    ],
    "subject":[
    ],
    "difficultyLevel": [
    ]
}

const midwifery_and_gynaecological_c2_associations = { 
    "name": "Birth Planning and Preparedness for PW and HRP",
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Midwifery and Gynaecological Nursing"],
    "gradeLevel": [
        'Describes the physiological changes in pregnancy and the management of normal pregnancy and demonstrates skill is caring for pregnant women',
    ],
    "subject":[
    ],
    "difficultyLevel": [
    ]
}

const midwifery_and_gynaecological_c3_associations = { 
    "name": "Vaginal examination and plotting on partograph",
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Midwifery and Gynaecological Nursing"],
    "gradeLevel": [
        'Describes the various stages of labour and the role of the midwife in caring for a woman in labour and demonstrates skill in conducting normal delivery'
    ],
    "subject":[
    ],
    "difficultyLevel": [
    ]
}

const midwifery_and_gynaecological_c4_associations = { 
    "name": "Normal delivery",
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Midwifery and Gynaecological Nursing"],
    "gradeLevel": [
        'Describes the various stages of labour and the role of the midwife in caring for a woman in labour and demonstrates skill in conducting normal delivery'
    ],
    "subject":[
    ],
    "difficultyLevel": [
    ]
}

const midwifery_and_gynaecological_c5_associations = { 
    "name": "AMTSL",
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Midwifery and Gynaecological Nursing"],
    "gradeLevel": [
        'Describes the various stages of labour and the role of the midwife in caring for a woman in labour and demonstrates skill in conducting normal delivery'
    ],
    "subject":[
    ],
    "difficultyLevel": [
    ]
}

const midwifery_and_gynaecological_c6_associations = { 
    "name": "Fourth Stage of Labour monitoring of mother and newborn",
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Midwifery and Gynaecological Nursing"],
    "gradeLevel": [
        'Describes normal pureperium and the role of midwife in the caring for woman in puerperium',
        'Describes the puerperal complications and demonstrates skill in the management of complications of puerperium',
    ],
    "subject":[
    ],
    "difficultyLevel": [
    ]
}

const midwifery_and_gynaecological_c7_associations = { 
    "name": "Essential Newborn Care",
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Midwifery and Gynaecological Nursing"],
    "gradeLevel": [
        'Describes the management of normal newborn and demonstrates skill in caring for the normal newborn',
    ],
    "subject":[
    ],
    "difficultyLevel": [
    ]
}

const midwifery_and_gynaecological_c8_associations = { 
    "name": "Post Partum Hemorrage",
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Midwifery and Gynaecological Nursing"],
    "gradeLevel": [
        'Describes the complications of pregnancy and  demonstrates skills in providing care for women with complicated pregnancy',
    ],
    "subject":[
    ],
    "difficultyLevel": [
    ]
}

const midwifery_and_gynaecological_c9_associations = { 
    "name": 'Eclampsia',
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Midwifery and Gynaecological Nursing"],
    "gradeLevel": [
        'Describes the complications of pregnancy and  demonstrates skills in providing care for women with complicated pregnancy',
    ],
    "subject":[
    ],
    "difficultyLevel": [
    ]
}

const midwifery_and_gynaecological_c12_associations = { 
    "name": "Management of emergency signs in newborns",
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Midwifery and Gynaecological Nursing"],
    "gradeLevel": [
        'Describes the management of normal newborn and demonstrates skill in caring for the normal newborn',
    ],
    "subject":[
    ],
    "difficultyLevel": [
    ]
}

const midwifery_and_gynaecological_c13_associations = { 
    "name": "Low birth weight newborns",
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Midwifery and Gynaecological Nursing"],
    "gradeLevel": [
        'Describes the management of high risk and sick newborn and demonstrates skills in caring for high risk and sick newborns',
    ],
    "subject":[
    ],
    "difficultyLevel": [
    ]
}

const midwifery_and_gynaecological_c14_associations = { 
    "name": "Kangaroo Mother Care",
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Midwifery and Gynaecological Nursing"],
    "gradeLevel": [
        'Describes the various stages of labour and the role of the midwife in caring for a woman in labour and demonstrates skill in conducting normal delivery',
    ],
    "subject":[
    ],
    "difficultyLevel": [
    ]
}

const midwifery_and_gynaecological_c15_associations = { 
    "name": "Post-natal partum care",
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Midwifery and Gynaecological Nursing"],
    "gradeLevel": [
        'Describes the various stages of labour and the role of the midwife in caring for a woman in labour and demonstrates skill in conducting normal delivery',
    ],
    "subject":[
    ],
    "difficultyLevel": [
    ]
}

const midwifery_and_gynaecological_c16_associations = { 
    "name": "LAM",
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Midwifery and Gynaecological Nursing"],
    "gradeLevel": [
        'Describes normal pureperium and the role of midwife in the caring for woman in puerperium'
    ],
    "subject":[
    ],
    "difficultyLevel": [
    ]
}

const midwifery_and_gynaecological_c17_associations = { 
    "name": "IUCD/PPIUCD",
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Midwifery and Gynaecological Nursing"],
    "gradeLevel": [
        'Describes normal pureperium and the role of midwife in the caring for woman in puerperium'
    ],
    "subject":[
    ],
    "difficultyLevel": [
    ]
}

const midwifery_and_gynaecological_c18_associations = { 
    "name": "Awareness on basket of choice",
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Midwifery and Gynaecological Nursing"],
    "gradeLevel": [
        'Describes normal pureperium and the role of midwife in the caring for woman in puerperium'
    ],
    "subject":[
    ],
    "difficultyLevel": [
    ]
}

const midwifery_and_gynaecological_c22_associations = { 
    "name": "Breastfeeding",
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Midwifery and Gynaecological Nursing"],
    "gradeLevel": [
        'Describes the management of normal newborn and demonstrates skill in caring for the normal newborn',
    ],
    "subject":[
    ],
    "difficultyLevel": [
    ]
}

const midwifery_and_gynaecological_c27_associations = { 
    "name": "Maternal and Child Death Review support",
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Midwifery and Gynaecological Nursing"],
    "gradeLevel": [
        'Describes the ethical legal issues related to midwifery',
    ],
    "subject":[
    ],
    "difficultyLevel": [
    ]
}

const midwifery_and_gynaecological_c68_associations = { 
    "name": "Midwifery and obstretrical nursing",
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Midwifery and Gynaecological Nursing"],
    "gradeLevel": [
        "Describes the scope and trends in midwifery",
        'Describes the obstetric operations and midwife role in assisting with each one',
        'Describes the midwifes role in the administration of drugs for women during pregnancy, labour and post parturn period'
    ],
    "subject":[
    ],
    "difficultyLevel": [
    ]
}
        
    
const midwifery_and_gynaecological_c1_l1_associations = { 
    "name": "Understands health of males and females and initial assessment protocols",
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Midwifery and Gynaecological Nursing"],
    "gradeLevel": [
        'Describes the anatomy and physiology of female reproductive system',
        'Describes the stages of Embryological and fetal development',
    ],
    "subject":[
        'Pregnancy Identification'
    ],
    "difficultyLevel": [
        
    ]
}

const midwifery_and_gynaecological_c68_l1_associations = {
    "name": "Remembers the various obstretric operations",
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Midwifery and Gynaecological Nursing"],
    "gradeLevel": [
        "Describes the scope and trends in midwifery"
    ],
    "subject":[
        'Midwifery and obstretrical nursing'
    ],
    "difficultyLevel": []
}

const midwifery_and_gynaecological_c68_l2_associations = {
    "name": "Understands the role of a midwife in assisting a clinical practioner",
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Midwifery and Gynaecological Nursing"],
    "gradeLevel": [
        'Describes the obstetric operations and midwife role in assisting with each one'
    ],
    "subject":[
        'Midwifery and obstretrical nursing'
    ],
    "difficultyLevel": []
}

const midwifery_and_gynaecological_c68_l3_associations = {
    "name": "Interprets the drugs used in obstretrics",
    "code": "",
    "board": ["GNM - 3"],
    "gradeLevel": [
        'Describes the obstetric operations and midwife role in assisting with each one'
    ],
    "subject":[
        'Midwifery and obstretrical nursing'
    ],
    "difficultyLevel": []
}

const midwifery_and_gynaecological_c68_l4_associations = {
    "name":  "Assists the clinical practioner",
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Midwifery and Gynaecological Nursing"],
    "gradeLevel": [
        'Describes the obstetric operations and midwife role in assisting with each one'
    ],
    "subject":[
        'Midwifery and obstretrical nursing'
    ],
    "difficultyLevel": []
}

const midwifery_and_gynaecological_c68_l5_associations = {
    "name":  "Maintains records and files",
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Midwifery and Gynaecological Nursing"],
    "gradeLevel": [
        'Describes the obstetric operations and midwife role in assisting with each one'
    ],
    "subject":[
        'Midwifery and obstretrical nursing'
    ],
    "difficultyLevel": []
}

const gnm_3_midwifery_and_gynaecological_r_a_c_association = {
    boardAssociations: [
    ],
    mediumAssociations: [
        midwifery_and_gynaecological_r_1_associations
    ],
    gradeLevelAssociations: [
        midwifery_and_gynaecological_a_1_associations,
        midwifery_and_gynaecological_a_2_associations,
        midwifery_and_gynaecological_a_3_associations,
        midwifery_and_gynaecological_a_4_associations,
        midwifery_and_gynaecological_a_5_associations,
        midwifery_and_gynaecological_a_6_associations,
        midwifery_and_gynaecological_a_7_associations,
        midwifery_and_gynaecological_a_8_associations,
        midwifery_and_gynaecological_a_9_associations,
        midwifery_and_gynaecological_a_10_associations,
        midwifery_and_gynaecological_a_11_associations,
        midwifery_and_gynaecological_a_12_associations,
        midwifery_and_gynaecological_a_13_associations,
        midwifery_and_gynaecological_a_14_associations,
    ],
    subjectAssociations: [
        midwifery_and_gynaecological_c1_associations,
        midwifery_and_gynaecological_c2_associations,
        midwifery_and_gynaecological_c3_associations,
        midwifery_and_gynaecological_c4_associations,
        midwifery_and_gynaecological_c5_associations,
        midwifery_and_gynaecological_c6_associations,
        midwifery_and_gynaecological_c7_associations,
        midwifery_and_gynaecological_c8_associations,
        midwifery_and_gynaecological_c9_associations,
        midwifery_and_gynaecological_c12_associations,
        midwifery_and_gynaecological_c13_associations,
        midwifery_and_gynaecological_c14_associations,
        midwifery_and_gynaecological_c15_associations,
        midwifery_and_gynaecological_c16_associations,
        midwifery_and_gynaecological_c17_associations,
        midwifery_and_gynaecological_c18_associations,
        midwifery_and_gynaecological_c22_associations,
        midwifery_and_gynaecological_c27_associations,
        midwifery_and_gynaecological_c68_associations,
    ],
    difficultyLevelAssociations: [
        midwifery_and_gynaecological_c1_l1_associations,
        midwifery_and_gynaecological_c68_l1_associations,
        midwifery_and_gynaecological_c68_l2_associations,
        midwifery_and_gynaecological_c68_l3_associations,
        midwifery_and_gynaecological_c68_l4_associations,
        midwifery_and_gynaecological_c68_l5_associations,
    ]
}

/* GNM 3 - (midwifery_and_gynaecological ) Asssociations ends*/

/* GNM 3 - (community_health_nursing ) Asssociations starts*/
const gnm_3_community_health_nursing_2_fw = {
    board: [
         // "GNM - 3"
    ],
    medium: [
        "Community health nursing-II"
    ],
    gradeLevel: [
        'Understands the health system in India',
        'Describes the health care services in India and discusses the role of the nurse in these services',
        'Describes health planning in India',
        'Describes the different specialized community health services and the nurses role in these services',
        'Describes the major health problems in India',
        'Describes the national health and family welfare programs in India and the role of the nurse',
        'Understands the meaning of demography and describes the national family welfare programmes',
        'Describes the concept and functions of health team and the role of nursing personnel at various levels',
        'Understands the concept and uses of health information system',
        'Describes the national and international health agencies'
    ],
    subject: [
        "Health systems and community health services",
    ],
    difficultyLevel: [
        "Remembers the health system in India and the health care delivery system",
        "Understands specialised community health services and the major health problems in India",
        "Recognises the concept of health and demography and the national family welfare programmes",
        "Interprets role of nursing at different levels and uses of health information systems",
    ]
    }

const community_health_nursing_r_1_associations = {
    "name": "Community health nursing-II",
    "code": "",
    "board": ["GNM - 3"],
    "medium": [],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []
}

const community_health_nursing_a_1_associations = {
    "name": 'Understands the health system in India',
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Community health nursing-II"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const community_health_nursing_a_2_associations = {
    "name": 'Describes the health care services in India and discusses the role of the nurse in these services',
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Community health nursing-II"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const community_health_nursing_a_3_associations = {
    "name": 'Describes health planning in India',
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Community health nursing-II"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const community_health_nursing_a_4_associations = {
    "name": 'Describes the different specialized community health services and the nurses role in these services',
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Community health nursing-II"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const community_health_nursing_a_5_associations = {
    "name": 'Describes the major health problems in India',
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Community health nursing-II"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const community_health_nursing_a_6_associations = {
    "name": 'Describes the national health and family welfare programs in India and the role of the nurse',
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Community health nursing-II"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const community_health_nursing_a_7_associations = {
    "name": 'Understands the meaning of demography and describes the national family welfare programmes',
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Community health nursing-II"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const community_health_nursing_a_8_associations = {
    "name": 'Describes the concept and functions of health team and the role of nursing personnel at various levels',
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Community health nursing-II"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const community_health_nursing_a_9_associations = {
    "name": 'Understands the concept and uses of health information system',
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Community health nursing-II"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const community_health_nursing_a_10_associations = {
    "name": 'Describes the national and international health agencies',
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Community health nursing-II"],
    "gradeLevel": [],
    "subject":[],
    "difficultyLevel": []

}

const community_health_nursing_c66_associations = { 
    "name": "Health systems and community health services",
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Community health nursing-II"],
    "gradeLevel": [
        'Understands the health system in India',
        'Describes the health care services in India and discusses the role of the nurse in these services',
        'Describes health planning in India',
        'Describes the different specialized community health services and the nurses role in these services',
        'Describes the major health problems in India',
        'Describes the national health and family welfare programs in India and the role of the nurse',
        'Understands the meaning of demography and describes the national family welfare programmes',
        'Describes the concept and functions of health team and the role of nursing personnel at various levels',
        'Understands the concept and uses of health information system',
        'Describes the national and international health agencies'
    ],
    "subject":[
    ],
    "difficultyLevel": [
    ]
}
        
    
const community_health_nursing_c66_l1_associations = { 
    "name": "Remembers the health system in India and the health care delivery system",
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Community health nursing-II"],
    "gradeLevel": [
        'Understands the health system in India',
        'Describes the health care services in India and discusses the role of the nurse in these services',
        'Describes health planning in India',
        'Describes the national and international health agencies'
    ],
    "subject":[
        "Health systems and community health services",
    ],
    "difficultyLevel": [
        
    ]
}

const community_health_nursing_c66_l2_associations = { 
    "name": "Understands specialised community health services and the major health problems in India",
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Community health nursing-II"],
    "gradeLevel": [
        'Describes the different specialized community health services and the nurses role in these services',
        'Describes the major health problems in India',
        'Describes the national health and family welfare programs in India and the role of the nurse',
    ],
    "subject":[
        "Health systems and community health services",
    ],
    "difficultyLevel": [
        
    ]
}

const community_health_nursing_c66_l3_associations = { 
    "name": "Recognises the concept of health and demography and the national family welfare programmes",
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Community health nursing-II"],
    "gradeLevel": [
        'Understands the meaning of demography and describes the national family welfare programmes',
    ],
    "subject":[
        "Health systems and community health services",
    ],
    "difficultyLevel": [
        
    ]
}

const community_health_nursing_c66_l4_associations = { 
    "name": "Interprets role of nursing at different levels and uses of health information systems",
    "code": "",
    "board": ["GNM - 3"],
    "medium": ["Community health nursing-II"],
    "gradeLevel": [
        'Describes the concept and functions of health team and the role of nursing personnel at various levels',
        'Understands the concept and uses of health information system',
    ],
    "subject":[
        "Health systems and community health services",
    ],
    "difficultyLevel": [
        
    ]
}

const gnm_3_community_health_nursing_2_r_a_c_association = {
    boardAssociations: [
    ],
    mediumAssociations: [
        community_health_nursing_r_1_associations
    ],
    gradeLevelAssociations: [
        community_health_nursing_a_1_associations,
        community_health_nursing_a_2_associations,
        community_health_nursing_a_3_associations,
        community_health_nursing_a_4_associations,
        community_health_nursing_a_5_associations,
        community_health_nursing_a_6_associations,
        community_health_nursing_a_7_associations,
        community_health_nursing_a_8_associations,
        community_health_nursing_a_9_associations,
        community_health_nursing_a_10_associations,
    ],
    subjectAssociations: [
        community_health_nursing_c66_associations
    ],
    difficultyLevelAssociations: [
        community_health_nursing_c66_l1_associations,
        community_health_nursing_c66_l2_associations,
        community_health_nursing_c66_l3_associations,
        community_health_nursing_c66_l4_associations
    ]
}

/* GNM 3 - (community_health_nursing ) Asssociations ends*/


module.exports = {
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
}