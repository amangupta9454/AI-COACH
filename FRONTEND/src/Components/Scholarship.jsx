import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Info, X, Users, FileText, CheckCircle, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Scholarship = () => {
  const [selectedScholarship, setSelectedScholarship] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const particlesRef = useRef(null);
  const scholarships = [
{
id: 1,
name: "Andhra Pradesh Post Matric Scholarship",
state: "Andhra Pradesh",
image: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=400",
description: "Financial assistance for SC/ST/OBC students pursuing higher education in Andhra Pradesh.",
applyLink: "https://jnanabhumi.ap.gov.in/",
about: "The Andhra Pradesh Post Matric Scholarship scheme aims to provide financial support to students from Scheduled Castes, Scheduled Tribes, and Other Backward Classes to pursue higher education.",
eligibility: [
"Must be a resident of Andhra Pradesh",
"Belong to SC/ST/OBC category with valid caste certificate",
"Annual family income should not exceed ₹2,50,000",
"Must have passed matriculation exam from recognized board"
],
documents: [
"Income Certificate",
"Caste Certificate",
"Domicile Certificate",
"Academic Certificates",
"Bank Account Details",
"Aadhaar Card"
]
},
{
id: 2,
name: "Arunachal Pradesh Merit Scholarship",
state: "Arunachal Pradesh",
image: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=400",
description: "Merit-based scholarship for students of Arunachal Pradesh pursuing professional courses.",
applyLink: "https://scholarships.gov.in/",
about: "This scholarship recognizes academic excellence and provides financial support to meritorious students from Arunachal Pradesh for professional education.",
eligibility: [
"Permanent resident of Arunachal Pradesh",
"Minimum 75% marks in qualifying examination",
"Enrolled in professional courses like Engineering, Medical, etc.",
"Annual family income below ₹6,00,000"
],
documents: [
"Mark sheets of qualifying exam",
"Income Certificate",
"Permanent Resident Certificate",
"Admission proof",
"Bank account details"
]
},
{
id: 3,
name: "Assam Pre-Matric Scholarship Scheme",
state: "Assam",
image: "https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg?auto=compress&cs=tinysrgb&w=400",
description: "Educational support for minority community students in classes IX-X in Assam.",
applyLink: "https://scholarships.gov.in/",
about: "The scheme provides financial assistance to students from minority communities to complete their secondary education and reduce dropout rates.",
eligibility: [
"Student of minority community",
"Studying in classes IX or X",
"Annual parental income not exceeding ₹1,00,000",
"Enrolled in recognized schools in Assam"
],
documents: [
"Income Certificate",
"Community Certificate",
"School enrollment certificate",
"Previous year mark sheet",
"Bank account details"
]
},
{
id: 4,
name: "Bihar Student Credit Card Scheme",
state: "Bihar",
image: "https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=400",
description: "Educational loan scheme for higher education with subsidized interest rates.",
applyLink: "https://www.7nishchay-yuvaupmission.bihar.gov.in/",
about: "A flagship scheme providing affordable education loans to students for pursuing higher education and skill development courses.",
eligibility: [
"Resident of Bihar",
"Age between 18-25 years",
"Completed intermediate/12th class",
"Admission confirmed in recognized institutions"
],
documents: [
"Educational certificates",
"Residential certificate",
"Income certificate",
"Admission letter",
"Aadhaar card",
"Pan card"
]
},
{
id: 5,
name: "Chhattisgarh Scholarship Portal",
state: "Chhattisgarh",
image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=400",
description: "Comprehensive scholarship scheme for SC/ST/OBC students in Chhattisgarh.",
applyLink: "https://postmatric-scholarship.cg.nic.in/",
about: "A unified portal providing various scholarship schemes for students from scheduled castes, tribes, and backward classes in Chhattisgarh.",
eligibility: [
"Resident of Chhattisgarh",
"SC/ST/OBC category student",
"Regular student in recognized institution",
"Family income criteria as per scheme"
],
documents: [
"Caste certificate",
"Income certificate",
"Domicile certificate",
"Academic records",
"Bank details"
]
},
{
id: 6,
name: "Goa Higher Education Scholarship",
state: "Goa",
image: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=400",
description: "Financial assistance for Goan students pursuing higher education outside Goa.",
applyLink: "https://cmscholarship.goa.gov.in/",
about: "Supports Goan students who wish to pursue higher education in reputed institutions outside the state of Goa.",
eligibility: [
"Born in Goa or resident for 15+ years",
"Admission in recognized institution outside Goa",
"Minimum 60% in qualifying examination",
"Annual family income below ₹3,00,000"
],
documents: [
"Birth certificate or domicile",
"Academic certificates",
"Admission letter",
"Income certificate",
"Bank account details"
]
},
{
id: 7,
name: "Gujarat Digital Scholarship Scheme",
state: "Gujarat",
image: "https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=400",
description: "Digital platform offering multiple scholarship schemes for Gujarat students.",
applyLink: "https://digitalgujarat.gov.in/",
about: "A comprehensive digital platform that brings together various scholarship schemes for students from different communities and economic backgrounds in Gujarat.",
eligibility: [
"Resident of Gujarat",
"Valid caste/income certificate as applicable",
"Enrolled in recognized educational institution",
"Meeting specific criteria for chosen scheme"
],
documents: [
"Educational certificates",
"Income/caste certificate as required",
"Domicile certificate",
"Bank account details",
"Passport size photographs"
]
},
{
id: 8,
name: "Haryana Post Matric Scholarship",
state: "Haryana",
image: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=400",
description: "Post-matriculation scholarship for SC students in Haryana.",
applyLink: "https://harchhatravratti.highereduhry.ac.in/",
about: "Provides financial assistance to Scheduled Caste students for pursuing post-matriculation studies in Haryana.",
eligibility: [
"Resident of Haryana",
"Belongs to Scheduled Caste category",
"Passed matriculation examination",
"Annual family income not exceeding ₹2,50,000"
],
documents: [
"Caste certificate (SC)",
"Income certificate",
"Domicile certificate",
"Educational certificates",
"Bank account details"
]
},
{
id: 9,
name: "Himachal Pradesh Merit Scholarship",
state: "Himachal Pradesh",
image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=400",
description: "Merit-cum-means scholarship for students of Himachal Pradesh.",
applyLink: "https://hpepass.cgg.gov.in/",
about: "Encourages academic excellence while providing financial support to deserving students from Himachal Pradesh.",
eligibility: [
"Bonafide resident of Himachal Pradesh",
"Minimum 60% marks in previous examination",
"Annual family income below ₹2,50,000",
"Studying in recognized institution"
],
documents: [
"Bonafide certificate",
"Income certificate",
"Mark sheets",
"Bank account details",
"Recent photograph"
]
},
{
id: 10,
name: "Jharkhand Guruji Student Credit Card",
state: "Jharkhand",
image: "https://images.pexels.com/photos/5940838/pexels-photo-5940838.jpeg?auto=compress&cs=tinysrgb&w=400",
description: "Educational loan scheme for students of Jharkhand at subsidized rates.",
applyLink: "https://gscc.jharkhand.gov.in/",
about: "Provides affordable education loans to help students from Jharkhand pursue higher education and professional courses.",
eligibility: [
"Permanent resident of Jharkhand",
"Completed 12th standard",
"Age between 18-35 years",
"Admission in approved courses/institutions"
],
documents: [
"Educational certificates",
"Residential proof",
"Income certificate",
"Admission confirmation",
"Identity proof"
]
},
{
id: 11,
name: "Karnataka Vidyasiri Scholarship",
state: "Karnataka",
image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=400",
description: "Comprehensive scholarship scheme for students from backward communities.",
applyLink: "https://ssp.karnataka.gov.in/",
about: "Karnataka's flagship scholarship program supporting students from minority and backward communities in their educational journey.",
eligibility: [
"Resident of Karnataka",
"Belongs to notified minority/backward community",
"Annual family income below specified limit",
"Regular student in recognized institution"
],
documents: [
"Community/Caste certificate",
"Income certificate",
"Domicile certificate",
"Academic records",
"Bank account details"
]
},
{
id: 12,
name: "Kerala E-Grantz Scholarship",
state: "Kerala",
image: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=400",
description: "Online scholarship portal for various communities in Kerala.",
applyLink: "https://egrantz.kerala.gov.in/",
about: "A unified digital platform offering multiple scholarship schemes for students from different communities and economic backgrounds in Kerala.",
eligibility: [
"Resident of Kerala",
"Belongs to eligible community/category",
"Meeting academic requirements",
"Family income within prescribed limits"
],
documents: [
"Community certificate",
"Income certificate",
"Educational certificates",
"Nativity certificate",
"Bank account details"
]
},
{
id: 13,
name: "Madhya Pradesh Scholarship Portal 2.0",
state: "Madhya Pradesh",
image: "https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=400",
description: "Unified scholarship platform for SC/ST/OBC students in MP.",
applyLink: "https://scholarshipportal.mp.nic.in/",
about: "Next-generation digital platform providing seamless access to various scholarship schemes for students from reserved categories in Madhya Pradesh.",
eligibility: [
"Resident of Madhya Pradesh",
"SC/ST/OBC category with valid certificate",
"Regular student in recognized institution",
"Meeting income criteria for respective scheme"
],
documents: [
"Caste certificate",
"Income certificate",
"Domicile certificate",
"Educational documents",
"Bank account details"
]
},
{
id: 14,
name: "Maharashtra Mahadbt Scholarship",
state: "Maharashtra",
image: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=400",
description: "Direct Benefit Transfer scholarship scheme for Maharashtra students.",
applyLink: "https://mahadbt.maharashtra.gov.in/",
about: "Maharashtra's flagship DBT-based scholarship scheme ensuring direct transfer of benefits to eligible students from various communities.",
eligibility: [
"Domiciled in Maharashtra",
"Valid caste/income certificate as applicable",
"Admission in recognized institution",
"Meeting specific scheme requirements"
],
documents: [
"Domicile certificate",
"Caste/income certificate",
"Educational certificates",
"Admission proof",
"Bank account details"
]
},
{
id: 15,
name: "Manipur Student Scholarship Scheme",
state: "Manipur",
image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=400",
description: "Financial assistance for students from Manipur pursuing higher education.",
applyLink: "https://manipureducation.gov.in/",
about: "Provides financial support to deserving students from Manipur to pursue higher education and professional courses.",
eligibility: [
"Permanent resident of Manipur",
"Good academic record",
"Annual family income below ₹6,00,000",
"Enrolled in recognized institution"
],
documents: [
"Residential certificate",
"Income certificate",
"Academic certificates",
"Bank account details",
"Recent photographs"
]
},
{
id: 16,
name: "Meghalaya Educational Scholarship",
state: "Meghalaya",
image: "https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=400",
description: "State scholarship for ST students and economically backward sections.",
applyLink: "https://megeducation.gov.in/dhte/pages/scholarship_schemes.html",
about: "Supports Scheduled Tribe students and those from economically weaker sections in Meghalaya to access quality education.",
eligibility: [
"Indigenous to Meghalaya",
"ST category or economically backward",
"Regular student in recognized school/college",
"Meeting academic performance criteria"
],
documents: [
"Tribal/Income certificate",
"Indigenous certificate",
"Educational records",
"Bank account details",
"Character certificate"
]
},
{
id: 17,
name: "Mizoram Scholarship Portal",
state: "Mizoram",
image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=400",
description: "Comprehensive scholarship scheme for students of Mizoram.",
applyLink: "https://msb.mizoram.gov.in/",
about: "A comprehensive scholarship program designed to support students from Mizoram in their educational pursuits at all levels.",
eligibility: [
"Permanent resident of Mizoram",
"Enrolled in recognized educational institution",
"Meeting prescribed academic standards",
"Family income within specified limits"
],
documents: [
"Residential proof",
"Income certificate",
"Academic certificates",
"Bank account details",
"Identity proof"
]
},
{
id: 18,
name: "Nagaland Educational Merit Scholarship",
state: "Nagaland",
image: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=400",
description: "Merit-based scholarship for outstanding students of Nagaland.",
applyLink: "https://scholarship.nagaland.gov.in/",
about: "Recognizes and rewards academic excellence while providing financial support to meritorious students from Nagaland.",
eligibility: [
"Bonafide resident of Nagaland",
"Outstanding academic performance",
"Enrolled in higher education",
"Annual family income below ₹5,00,000"
],
documents: [
"Residential certificate",
"Academic transcripts",
"Income certificate",
"Bank account details",
"Recommendation letter"
]
},
{
id: 19,
name: "Odisha Scholarship Portal",
state: "Odisha",
image: "https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=400",
description: "Digital scholarship platform for SC/ST/SEBC students in Odisha.",
applyLink: "https://scholarship.odisha.gov.in/",
about: "A digital initiative providing easy access to various scholarship schemes for students from Scheduled Castes, Tribes, and backward communities in Odisha.",
eligibility: [
"Resident of Odisha",
"SC/ST/SEBC category student",
"Studying in recognized institution",
"Meeting income and academic criteria"
],
documents: [
"Caste certificate",
"Residential certificate",
"Income certificate",
"Educational certificates",
"Bank account details"
]
},
{
id: 20,
name: "Punjab Scholarship Scheme",
state: "Punjab",
image: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=400",
description: "State scholarship for SC/BC students pursuing higher education.",
applyLink: "https://scholarships.punjab.gov.in/",
about: "Provides financial assistance to students from Scheduled Castes and Backward Classes to pursue higher education in Punjab.",
eligibility: [
"Resident of Punjab",
"SC/BC category with valid certificate",
"Enrolled in post-matric courses",
"Annual family income below ₹2,50,000"
],
documents: [
"Caste certificate",
"Income certificate",
"Domicile certificate",
"Educational documents",
"Bank account details"
]
},
{
id: 21,
name: "Rajasthan Scholarship Portal",
state: "Rajasthan",
image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=400",
description: "Unified portal for various scholarship schemes in Rajasthan.",
applyLink: "https://sje.rajasthan.gov.in/",
about: "A comprehensive portal offering multiple scholarship schemes for students from different communities and economic backgrounds in Rajasthan.",
eligibility: [
"Bonafide resident of Rajasthan",
"Valid category/income certificate",
"Regular student in recognized institution",
"Meeting scheme-specific criteria"
],
documents: [
"Domicile certificate",
"Caste/income certificate",
"Educational certificates",
"Bank account details",
"Recent photographs"
]
},
{
id: 22,
name: "Sikkim Student Support Scheme",
state: "Sikkim",
image: "https://images.pexels.com/photos/5940838/pexels-photo-5940838.jpeg?auto=compress&cs=tinysrgb&w=400",
description: "Educational support for Sikkimese students pursuing higher studies.",
applyLink: "https://scholarships.sikkim.gov.in/",
about: "Comprehensive support scheme for Sikkimese students to pursue higher education both within and outside the state.",
eligibility: [
"Certificate of Identification as Sikkimese",
"Good academic record",
"Enrolled in recognized institution",
"Annual family income below ₹6,00,000"
],
documents: [
"Sikkimese certificate",
"Income certificate",
"Academic certificates",
"Bank account details",
"Identity proof"
]
},
{
id: 23,
name: "Tamil Nadu e-Scholarship Portal",
state: "Tamil Nadu",
image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=400",
description: "Digital platform for BC/MBC/SC/ST scholarship schemes.",
applyLink: "https://escholarship.tn.gov.in/",
about: "Tamil Nadu's digital scholarship portal providing seamless access to various scholarship schemes for students from backward and scheduled communities.",
eligibility: [
"Native of Tamil Nadu",
"BC/MBC/SC/ST category student",
"Studying in recognized institution",
"Meeting income and academic requirements"
],
documents: [
"Community certificate",
"Nativity certificate",
"Income certificate",
"Educational certificates",
"Bank account details"
]
},
{
id: 24,
name: "Telangana ePASS Scholarship",
state: "Telangana",
image: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=400",
description: "Electronic scholarship portal for BC/SC/ST/Minority students.",
applyLink: "https://telanganaepass.cgg.gov.in/",
about: "Telangana's flagship e-governance initiative providing electronic processing of scholarship applications for students from various communities.",
eligibility: [
"Resident of Telangana",
"BC/SC/ST/Minority community student",
"Enrolled in recognized institution",
"Meeting prescribed income criteria"
],
documents: [
"Caste/Community certificate",
"Residential certificate",
"Income certificate",
"Educational documents",
"Bank account details"
]
},
{
id: 25,
name: "Tripura Tribal Scholarship Scheme",
state: "Tripura",
image: "https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=400",
description: "Special scholarship for tribal students of Tripura.",
applyLink: "https://twd.tripura.gov.in/",
about: "A dedicated scheme supporting tribal students of Tripura in their educational journey, focusing on preserving indigenous culture while promoting modern education.",
eligibility: [
"Belongs to Scheduled Tribe",
"Permanent resident of Tripura",
"Enrolled in recognized educational institution",
"Meeting academic performance criteria"
],
documents: [
"Tribal certificate",
"Residential proof",
"Educational certificates",
"Bank account details",
"Character certificate"
]
},
{
id: 26,
name: "UP Scholarship Portal",
state: "Uttar Pradesh",
image: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=400",
description: "Comprehensive scholarship portal for UP students from all communities.",
applyLink: "https://scholarship.up.gov.in/",
about: "Uttar Pradesh's largest scholarship portal providing financial assistance to students from all communities and economic backgrounds.",
eligibility: [
"Resident of Uttar Pradesh",
"Valid caste/income certificate",
"Enrolled in recognized institution",
"Meeting specific scheme requirements"
],
documents: [
"Domicile certificate",
"Caste/income certificate",
"Educational documents",
"Bank account details",
"Recent photographs"
]
},
{
id: 27,
name: "Uttarakhand Scholarship Portal",
state: "Uttarakhand",
image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=400",
description: "State scholarship scheme for SC/ST/OBC students in Uttarakhand.",
applyLink: "https://he.uk.gov.in/scholarship-portal",
about: "Provides financial support to students from Scheduled Castes, Tribes, and Other Backward Classes in Uttarakhand to pursue quality education.",
eligibility: [
"Permanent resident of Uttarakhand",
"SC/ST/OBC category student",
"Regular student in recognized institution",
"Annual family income below prescribed limit"
],
documents: [
"Domicile certificate",
"Caste certificate",
"Income certificate",
"Educational certificates",
"Bank account details"
]
},
{
id: 28,
name: "West Bengal Minority Scholarship",
state: "West Bengal",
image: "https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=400",
description: "Scholarship for minority community students in West Bengal.",
applyLink: "https://wbmdfcscholarship.in/",
about: "Aimed at promoting education among minority communities in West Bengal and ensuring their socio-economic development.",
eligibility: [
"Belongs to notified minority community",
"Resident of West Bengal",
"Annual family income below ₹2,50,000",
"Regular student in recognized institution"
],
documents: [
"Minority community certificate",
"Residential certificate",
"Income certificate",
"Educational documents",
"Bank account details"
]
},
{
id: 29,
name: "Delhi Post Matric Scholarship",
state: "Delhi",
image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=400",
description: "Post-matriculation scholarship for SC/ST/OBC students in Delhi.",
applyLink: "https://scstwelfare.delhi.gov.in/",
about: "Delhi government's initiative to provide financial assistance to students from reserved categories pursuing post-matriculation education.",
eligibility: [
"Resident of Delhi",
"SC/ST/OBC category with valid certificate",
"Enrolled in post-matric courses",
"Annual family income below ₹2,50,000"
],
documents: [
"Caste certificate",
"Residential proof",
"Income certificate",
"Educational certificates",
"Bank account details"
]
},
{
id: 30,
name: "Buddy4Study Scholarship Portal",
state: "Pan India",
image: "https://images.pexels.com/photos/5940838/pexels-photo-5940838.jpeg?auto=compress&cs=tinysrgb&w=400",
description: "India's largest scholarship discovery platform connecting students with opportunities.",
applyLink: "https://www.buddy4study.com/",
about: "A comprehensive platform that aggregates scholarships from government, corporates, and NGOs, making it easier for students across India to find and apply for relevant opportunities.",
eligibility: [
"Students from all backgrounds and communities",
"Pursuing education at any level",
"Meeting specific scholarship requirements",
"Valid academic and personal documents"
],
documents: [
"Academic certificates",
"Identity proof",
"Income certificate (if required)",
"Bank account details",
"Recent photographs"
]
},
{
id: 31,
name: "AICTE Scholarship Portal",
state: "Pan India",
image: "https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=400",
description: "All India Council for Technical Education scholarship schemes for technical students.",
applyLink: "https://www.aicte-india.org/",
about: "AICTE provides various scholarship schemes for students pursuing technical education including engineering, pharmacy, architecture, and management courses across India.",
eligibility: [
"Enrolled in AICTE-approved institutions",
"Pursuing technical education courses",
"Meeting academic performance criteria",
"Belonging to specified categories (varies by scheme)"
],
documents: [
"AICTE approval letter of institution",
"Academic certificates",
"Admission proof",
"Category certificate (if applicable)",
"Bank account details"
]
},
{
id: 32,
name: "Vidyasaarathi Scholarship Portal",
state: "Pan India",
image: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=400",
description: "Corporate scholarship platform connecting meritorious students with sponsors.",
applyLink: "https://www.vidyasaarathi.co.in/",
about: "India's largest corporate scholarship platform that connects underprivileged but meritorious students with corporate sponsors and donors for educational funding.",
eligibility: [
"Academic excellence with financial need",
"Family income below ₹4,00,000 annually",
"Enrolled in recognized educational institution",
"Strong academic track record"
],
documents: [
"Academic transcripts",
"Income certificate",
"Bank account details",
"Identity proof",
"Recommendation letters"
]
},
{
id: 33,
name: "Reliance Foundation Scholarships",
state: "Pan India",
image: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=400",
description: "Multiple scholarship programs by Reliance Foundation for undergraduate students.",
applyLink: "https://www.scholarships.reliancefoundation.org/",
about: "Reliance Foundation offers comprehensive scholarship programs covering tuition fees, accommodation, and other educational expenses for meritorious students from economically disadvantaged backgrounds.",
eligibility: [
"Excellent academic record (minimum 60%)",
"Annual family income below ₹6,00,000",
"Indian nationality",
"Enrolled in undergraduate programs"
],
documents: [
"Academic certificates",
"Income certificate",
"Bank account details",
"Identity and address proof",
"Admission confirmation"
]
}
];
  useEffect(() => {
    // Create floating particles
    const createParticles = () => {
      const particlesContainer = particlesRef.current;
      if (!particlesContainer) return;

      for (let i = 0; i < 80; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle absolute rounded-full blur-sm';
        
        const size = Math.random() * 4 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Random colors for particles
        const colors = [
          'bg-blue-400/20',
          'bg-purple-400/20', 
          'bg-cyan-400/20',
          'bg-pink-400/20',
          'bg-emerald-400/20',
          'bg-violet-400/20'
        ];
        particle.className += ` ${colors[Math.floor(Math.random() * colors.length)]}`;
        
        particlesContainer.appendChild(particle);

        // Animate particles
        gsap.to(particle, {
          x: `+=${Math.random() * 300 - 150}`,
          y: `+=${Math.random() * 300 - 150}`,
          duration: Math.random() * 15 + 10,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          opacity: Math.random() * 0.8 + 0.2
        });
      }
    };

    createParticles();

    // GSAP animations for scroll reveal
    const cards = cardsRef.current;
    
    gsap.fromTo(
      '.hero-title',
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
    );

    gsap.fromTo(
      '.hero-subtitle',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: 'power3.out' }
    );

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        {
          y: 100,
          opacity: 0,
          scale: 0.8,
          rotationY: 15
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Smooth scroll
    gsap.registerPlugin(ScrollTrigger);
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleKnowMore = (scholarship) => {
    setSelectedScholarship(scholarship);
    setIsPopupOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedScholarship(null);
    document.body.style.overflow = 'unset';
  };

  const handleApplyNow = (applyLink) => {
    window.open(applyLink, '_blank');
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 25%, #1a365d 50%, #2c5282 75%, #2b6cb0 100%)',
    }}>
      {/* Dot Pattern Background */}
      <div className="fixed inset-0 z-0" style={{
        backgroundImage: `radial-gradient(circle, rgba(59, 130, 246, 0.4) 1px, transparent 1px)`,
        backgroundSize: '30px 30px',
        backgroundPosition: '0 0, 15px 15px'
      }}></div>
      
      {/* Additional dot layer for depth */}
      <div className="fixed inset-0 z-0" style={{
        backgroundImage: `radial-gradient(circle, rgba(147, 197, 253, 0.2) 0.5px, transparent 0.5px)`,
        backgroundSize: '60px 60px',
        backgroundPosition: '30px 30px'
      }}></div>
      
      {/* Subtle overlay for depth */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-blue-900/20 via-transparent to-slate-900/30"></div>

      <div ref={containerRef} className="relative z-10">
        {/* Hero Section */}
        <div className="container mx-auto px-6 pt-20 pb-16 text-center">
          <h1 className="hero-title text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">
            Scholarship Hub
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Discover thousands of scholarship opportunities across India. Your gateway to educational excellence starts here.
          </p>
          <div className="hero-subtitle mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-400" />
              <span>29 State Scholarships</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-purple-400" />
              <span>4 Major Portals</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>All Categories</span>
            </div>
          </div>
        </div>

        {/* Scholarship Cards Grid */}
        <div className="container mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {scholarships.map((scholarship, index) => (
              <div
                key={scholarship.id}
                ref={el => cardsRef.current[index] = el}
                className="group relative bg-gray-900/40 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-500 hover:scale-105 hover:bg-gray-800/50 shadow-2xl hover:shadow-blue-500/10"
              >
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
                
                {/* State Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-semibold text-blue-300 bg-blue-500/20 px-3 py-1 rounded-full border border-blue-500/30">
                    {scholarship.state}
                  </span>
                </div>

                {/* Image */}
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <img
                    src={scholarship.image}
                    alt={scholarship.name}
                    className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110 brightness-75 group-hover:brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-100 mb-3 line-clamp-2 group-hover:text-blue-300 transition-colors">
                  {scholarship.name}
                </h3>
                
                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                  {scholarship.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => handleKnowMore(scholarship)}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm font-medium shadow-lg hover:shadow-blue-500/25"
                  >
                    <Info className="w-4 h-4" />
                    Know More
                  </button>
                  <button
                    onClick={() => handleApplyNow(scholarship.applyLink)}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm font-medium shadow-lg hover:shadow-purple-500/25"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {isPopupOpen && selectedScholarship && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-gray-700/50 max-w-4xl max-h-[90vh] overflow-y-auto w-full shadow-2xl">
            {/* Header */}
            <div className="sticky top-0 bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/30 p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Info className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-100">{selectedScholarship.name}</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    <span className="text-blue-400 font-medium">{selectedScholarship.state}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={closePopup}
                className="w-10 h-10 bg-red-500/20 hover:bg-red-500/30 rounded-full flex items-center justify-center transition-colors border border-red-500/30"
              >
                <X className="w-5 h-5 text-red-400" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-8">
              {/* About Section */}
              <div>
                <h3 className="text-xl font-bold text-gray-100 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  About the Portal
                </h3>
                <p className="text-gray-400 leading-relaxed">{selectedScholarship.about}</p>
              </div>

              {/* Eligibility Criteria */}
              <div>
                <h3 className="text-xl font-bold text-gray-100 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Eligibility Criteria
                </h3>
                <ul className="space-y-3">
                  {selectedScholarship.eligibility.map((criteria, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-400">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{criteria}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Required Documents */}
              <div>
                <h3 className="text-xl font-bold text-gray-100 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  Required Documents
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedScholarship.documents.map((document, index) => (
                    <div key={index} className="flex items-center gap-3 bg-gray-800/50 rounded-lg p-3 border border-gray-700/30">
                      <FileText className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span className="text-gray-400">{document}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => handleApplyNow(selectedScholarship.applyLink)}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-purple-500/25"
                >
                  <ExternalLink className="w-5 h-5" />
                  Apply Now on Official Portal
                </button>
                <button
                  onClick={closePopup}
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors border border-gray-600/50"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Scholarship;