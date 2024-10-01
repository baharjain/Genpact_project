// const brainTumorData = [
//     {
//       id: 'akiec',
//       name: 'Actinic Keratosis (AKIEC)',
//       description:
//         'Actinic Keratosis is a precancerous condition characterized by rough, scaly patches on the skin caused by excessive exposure to ultraviolet (UV) light. These lesions can potentially develop into squamous cell carcinoma if left untreated.',
//       earlySigns:
//         'Look for rough, dry, or scaly patches on sun-exposed areas like the face, ears, neck, scalp, chest, backs of hands, forearms, or lips. These patches may be red, pink, brown, or skin-colored.',
//       preventionTips:
//         'Protect your skin from excessive sun exposure by wearing sunscreen, seeking shade, and wearing protective clothing. Regularly check your skin for any new or changing lesions.',
//     },
//     {
//       id: 'bcc',
//       name: 'Basal Cell Carcinoma (BCC)',
//       description:
//         'Basal Cell Carcinoma is the most common type of skin cancer. It usually occurs on sun-exposed areas of the body, such as the face and neck. BCC grows slowly and rarely spreads to other parts of the body, but if left untreated, it can cause significant local damage.',
//       earlySigns:
//         'Watch for pearly or waxy bumps, flat, flesh-colored, or brown scar-like lesions, or bleeding sores that don’t heal. BCC often appears on the face, ears, or neck.',
//       preventionTips:
//         'Avoid prolonged sun exposure, use sunscreen with high SPF, and wear protective clothing. Regular skin checks can help detect BCC early.',
//     },
//     {
//       id: 'bkl',
//       name: 'Benign Keratosis-like Lesions (BKL)',
//       description:
//         'Benign Keratosis-like Lesions are non-cancerous growths that resemble keratoses, which include seborrheic keratoses and lichen planus-like keratoses. These lesions are typically harmless but can sometimes be confused with skin cancer.',
//       earlySigns:
//         'These lesions often appear as rough, scaly, or wart-like growths. They can vary in color from light tan to black and are commonly found on the chest, back, scalp, face, or neck.',
//       preventionTips:
//         'While these lesions are generally benign, it’s essential to monitor them for any changes. Protect your skin from excessive sun exposure to reduce the risk of skin damage.',
//     },
//     {
//       id: 'df',
//       name: 'Dermatofibroma (DF)',
//       description:
//         'Dermatofibroma is a common, benign skin growth that often appears on the lower legs. It is firm to the touch and may feel like a small, hard lump under the skin. Dermatofibromas are usually harmless and do not require treatment.',
//       earlySigns:
//         'Look for small, firm, raised bumps that are usually brownish or tan. They can be tender or itchy and may dimple inward when pinched.',
//       preventionTips:
//         'Since dermatofibromas are benign, no specific prevention is needed. However, protecting your skin from injuries and avoiding unnecessary skin trauma can be beneficial.',
//     },
//     {
//       id: 'mel',
//       name: 'Melanoma (MEL)',
//       description:
//         'Melanoma is the most dangerous type of skin cancer, developing in the cells that produce melanin (the pigment that gives your skin its color). It can spread rapidly to other parts of the body if not detected early.',
//       earlySigns:
//         'Watch for new moles or changes in existing moles, such as asymmetry, irregular borders, multiple colors, or increasing size. Melanomas often appear as dark, irregular spots or sores that do not heal.',
//       preventionTips:
//         'Avoid tanning beds, use broad-spectrum sunscreen, wear protective clothing, and regularly examine your skin for any changes. Early detection is crucial for successful treatment.',
//     },
//     {
//       id: 'nv',
//       name: 'Melanocytic Nevi (NV)',
//       description:
//         'Melanocytic Nevi, commonly known as moles, are usually benign growths of melanocytes, the cells that produce pigment. While most nevi are harmless, some can develop into melanoma, so monitoring for changes is essential.',
//       earlySigns:
//         'Moles are generally uniform in color and shape, with defined edges. Be alert to changes in size, shape, or color, as well as itching, bleeding, or other unusual symptoms.',
//       preventionTips:
//         'Regular skin checks and avoiding excessive sun exposure are key to preventing complications. Report any changes in moles to a dermatologist promptly.',
//     },
//     {
//       id: 'vasc',
//       name: 'Vascular Lesions (VASC)',
//       description:
//         'Vascular Lesions are abnormalities in the blood vessels of the skin, such as hemangiomas, port-wine stains, and cherry angiomas. These lesions are usually benign but can sometimes cause cosmetic concerns or complications depending on their size and location.',
//       earlySigns:
//         'Look for red, blue, or purple marks on the skin that may be flat or raised. These lesions can occur anywhere on the body and vary in size.',
//       preventionTips:
//         'Most vascular lesions are benign and do not require prevention. However, protecting your skin from trauma and consulting a dermatologist for any concerning lesions is advised.',
//     },
//   ];
  
//   export default brainTumorData;
  
const brainTumorData = [
  
  {
    id: 'brainTumors',
    name: 'Types of Brain Tumors',
    description: 'An overview of different types of brain tumors and their characteristics.',
    types: [
      {
        type: 'Gliomas and Related Brain Tumors',
        details: 'Growths of cells resembling glial cells that surround and support nerve cells in the brain. Types include astrocytoma, glioblastoma, oligodendroglioma, and ependymoma. Most are malignant, with glioblastoma being the most common type.',
      },
      {
        type: 'Choroid Plexus Tumors',
        details: 'Tumors that start in the cells producing cerebrospinal fluid, located in the ventricles. They can be benign or malignant; choroid plexus carcinoma is the malignant form, more common in children.',
      },
      {
        type: 'Embryonal Tumors',
        details: 'Malignant tumors that begin in embryonal cells left over from fetal development. Most common type is medulloblastoma, usually found in the cerebellum of babies and young children.',
      },
      {
        type: 'Germ Cell Tumors',
        details: 'Start in reproductive cells that can be found in the brain, often near the pineal or pituitary glands. Mostly benign and more common in children.',
      },
      {
        type: 'Pineal Tumors',
        details: 'Start in and around the pineal gland, which produces melatonin. Can be benign or malignant, with pineoblastoma being the malignant type common in children.',
      },
      {
        type: 'Meningiomas',
        details: 'Tumors starting in the membranes around the brain and spinal cord. Usually benign and the most common type of benign brain tumor.',
      },
      {
        type: 'Nerve Tumors',
        details: 'Growths in and around nerves, with acoustic neuroma (schwannoma) being the most common benign tumor in the head.',
      },
      {
        type: 'Pituitary Tumors',
        details: 'Tumors beginning in and around the pituitary gland, mostly benign. Craniopharyngioma is a type occurring near the pituitary gland.',
      },
      {
        type: 'Other Brain Tumors',
        details: 'Rare tumors that can start in muscles, blood vessels, connective tissue, or even skull bones. Malignant brain tumors can also arise from immune system cells in the brain, called primary central nervous system lymphoma.',
      },
    ],
  },
  {
    id: 'brainTumorSymptoms',
    name: 'Symptoms of Brain Tumors',
    description: 'Common symptoms associated with brain tumors based on their location and growth.',
    symptoms: [
      'Headache or pressure in the head that is worse in the morning.',
      'More frequent and severe headaches.',
      'Nausea or vomiting.',
      'Eye problems, such as blurry vision or double vision.',
      'Losing feeling or movement in an arm or leg.',
      'Trouble with balance.',
      'Speech problems.',
      'Feeling very tired or confused.',
      'Memory problems and difficulty following commands.',
      'Personality or behavior changes.',
      'Seizures, especially without a history of seizures.',
      'Hearing problems.',
      'Dizziness or vertigo.',
      'Unexplained weight gain.',
    ],
    locationSymptoms: {
      frontal: 'Balance problems, trouble walking, personality changes.',
      parietal: 'Sensory problems like vision and hearing issues.',
      occipital: 'Vision loss.',
      temporal: 'Memory problems and sensory hallucinations.',
    },
  },
];

export default brainTumorData;
