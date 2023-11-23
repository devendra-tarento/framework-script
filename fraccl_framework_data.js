const categories = [{
    name: "Function",
    code: "board",
},
{
    name: "Role",
    code: "medium",
},
{
    name: "Activity",
    code: "gradeLevel",
},
{
    name: "Competency",
    code: "subject",
},
{
    name: "Competency Level",
    code: "difficultyLevel"
}];

const roles = [
'ANATOMY and PHYSIOLOGY',
'MICROBIOLOGY',
'PSYCHOLOGY',
'SOCIOLOGY',
'FUNDAMENTALS OF NURSING',
'FIRST AID',
'COMMUNITY HEALTH NURSING -I',
'ENVIRONMENTAL HYGIENE',
'HEALTH EDUCATION and COMMUNICATION',
'NUTRITION',
'ENGLISH',
'COMPUTER EDUCATION',
'Medical Surgical Nursing-I',
'Medical Surgical Nursing-II',
'Mental Health Nursing',
'Child Health Nursing',
'Midwifery and Gynaecological Nursing',
'Community health nursing-II'
];

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
'Pregnancy Identification',
'Birth Planning and Preparedness for PW and HRP',
'Vaginal examination and plotting on partograph',
'Normal delivery',
'AMTSL',
'Fourth Stage of Labour monitoring of mother and newborn',
'Essential Newborn Care',
'Post Partum Hemorrage',
'Eclampsia',
'Neonatal resuscitation',
'Emergency triage assessment',
'Management of emergency signs in newborns',
'Low birth weight newborns',
'Kangaroo Mother Care',
'Post natal or partum care',
'LAM',
'IUCD or PPIUCD',
'Awareness on basket of choice',
'Assessment and management of danger signs in sick young infant/sick child',
'Immunization services',
'Growth and development of child',
'Breastfeeding',
'Supplements and nutrition',
'Dietary requirements',
'Curative services for minor ailments',
'Pre referral management and transportation including neonates',
'Maternal and Child Death Review support',
'Epidemiology',
'National Health Programs',
'Elderly and PWD care and support',
'Evolution of medicine and pathophysiological mechanism',
'Altered Immune response',
'Fluid and electrolyte imbalance',
'OT protocols',
'Pre intra and post op care',
'Respiratory disorders',
'Gastro intestinal disorders',
'Metabolic and endocrinal disorders',
'Renal and urinary disorders',
'Neurological disorders',
'Oncology Nursing',
'Integumentary system and disorders',
'Ophthalmology and ophthalmic nursing',
'ENT disorders',
'Cardio vascular, circulatory and hematological disorders',
'Sexually transmitted diseases',
'Mental Disorders',
'Psychology',
'Sociology',
'Micro organisms',
'Immunity, Infection and destruction of microbes',
'Renal disorders in children',
'Respiratory disorders in children',
'Nutrition',
'Cardiovascular diseases in children',
'Hematological disorders in children',
'Neurological disorders in children',
'Endocrine disorders in children',
'Development problems in children',
'Concept of community health and community health nursing',
'Principles of environmental hygience',
'Communication and health education',
'Counselling',
'English',
'Computer education',
'Health systems and community health services',
'Teaching and learning',
'Midwifery and obstretrical nursing',
'Child Health Nursing',
'Concept of mental health and mental illness and its legal aspects',
'Musculo skeletal disorders and diseases',
'Concept of family Health and family health nursing'
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

//R1
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

//R2
const gnm_1_microbiology= {
    board: [
        // "GNM - 1"
    ],
    medium: [
        'Microbiology',
    ],
    gradeLevel: [
        'Infection and Growth of Microbes, Principles in Collecting Specimens',
        'Identify Common Microbes under the Microscope'
    ],
    subject: [
        "Immunity, Infection and Destruction of Microbes",
        "Micro-Organisms"
    ],
    difficultyLevel: [
        "Different types of Infections",
        "Factors affecting growth of Microbes and Mechanism of Resistance",
        "Specimen Collection",
        "Different parts of the Microscope",
        "Principles of Microscopy",
        "Studies Microbes",
        "Observes under Microscope"
    ]

}

//R3
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
    
//R4
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

//R5
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

//R6
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

//R7
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

//R8
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

//R9
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

//R10
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

//R11
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

//R12
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

//R13
const medical_surgical_nursing_1_fw = {
    board: [
         // "GNM - 2"
    ],
    medium: [
        'Understands the history of modern Medicine and Surgery',
        'Demonstrates skill in conducting health assessment and physical examination',
        'Describes the pathophysiological mechanism of diseases',
        'Demonstrates skill in providing nursing care to patients with altered immune response',
        'Demonstrates skill in management of client with fluid and electrolyte imbalance',
        'Describes the physical set up of OT and its equipments and demonstrates skill in theatre techniques',
        'Demonstrates skill in preparing the client for surgery and recognizes and performs the role of nurse during surgery',
        'Demonstrates skill in giving care to clients after surgery post-operative care',
        'Demonstrates skills in the nursing management of client with impaired respiratory function and gaseous exchange',
        'Describes the various gastro intestinal disorders and demonstrates skill in providing care for clients with gastro intestinal disorders',
        'Describes the management of patients with metabolic and endocrinal disorders and demonstrates skills in caring for the clients with metabolic and endocrinal disorders',
        'Describes the management of clients with urinary and renal disorders and demonstrates skill in giving care of client with urinary and renal disorders',
        'Describes the nursing and management of clients with Neurological disorders and demonstrates skill in giving nursing care to clients with Neurological disorders',
        'DescribeS the management of clients with connective tissue and collagen disorders and demonstrates skill in providing nursing care to clients with connective tissue and collagen disorders',
        'Describes the nurses role in promoting wellness for elderly and demonstrates skill in providing nursing care for elderly clients',
    ],
    gradeLevel: [
        'Elderly and PWD care and support',
        'Evolution of medicine and pathophysiological mechanism',
        'Altered Immune response',
        'Fluid and electrolyte imbalance',
        'OT protocols',
        'Pre intra and post-op care',
        'Respiratory disorders',
        'Gastro intestinal disorders',
        'Metabolic and endocrinal disorders',
        'Renal and urinary disorders',
        'Neurological disorders',
    ],
    subject: [
        //C31-L1-L5
        "Understands the evolution of modern medicine and surgery",
        "Understands theory of causation of illness and human response to disease",
        "Understands pathophysiological mechanism of disease",
        "Prepares counselling plan and dietary plan",
        "Estimates patient requirement and modifies treatment",
        //C32-L2-L5
        "Understands drugs used for treament of auto-immune diseases disorders",
        "Understands allergy disorders",
        "Assesses disease disorder",
        "Administers drugs",
        //C33-L2-L5
        "Understands management protocols",
        "Understands signs and symptoms of imbalance and clinical examinations used",
        "Identifies fluid and electrolyte imbalance",
        "Manages patient",
        //C34-L2-L5
        "Understands the protocols for disinfecting OT and its equipments",
        "Understands sterilisation of instruments and lenins",
        "Performs handwashing OT disinfection and sterilisation",
        "Supervises other staff on OT protocols and maintains OT",
        //C35-L2-L5
        "Understands intra-operative management",
        "Understands post-op care",
        "Performs pre-op and intra-operative care",
        "Peforms post-op care and manages if any complications",
        //C36-L2-L5
        "Understands the symtoms of respiratory disorders and their management",
        "Conducts assessments",
        "Diagnostic evaluation",
        "Manages respiratory disorders",
        //C37-L2-L5
        "Understands the symtoms of GI disorders and their management",
        "Conducts assessments",
        "Diagnostic evaluation",
        "Manages GI disorders",
        //C38-L2-L5
        "Understands the symptoms of metabolic and endocrinal disorders",
        "Conducts assessments",
        "Diagnostic evaluation",
        "Manages disorders",
        //C39-L2-L5
        "Understands the symptoms of disorders",
        "Conducts assessments",
        "Diagnostic evaluation",
        "Manages disorders",
        //C40-L2-L5
        "Understands the symptoms",
        "Conducts assessments",
        "Diagnostic evaluation",
        "Manages patient",
    ],
    
    }

//R14
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
    
//R15
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

//R16
const gnm_2_child_health_nursing_fw = {
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

//R17
const gnm_3_midwifery_and_gynaecological_nursing_fw = {
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
        "Normal delivery",//
        "AMTSL",
        "Fourth Stage of Labour monitoring of mother and newborn",//
        "Essential Newborn Care",//
        "Post Partum Hemorrage",//
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
    
//R18
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


module.exports = {
categories,
roles,
activities,
competencies,
competencyLevels,
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
}