// course banner images
import CourseImgOne from "../../public/assets/img/course/course-1/banner_800_476.png";
import CourseImgTwo from "../../public/assets/img/course/course-2/banner_800_476.png";
import CourseImgThree from "../../public/assets/img/course/course-3/banner_800_476.png";
import CourseImgFour from "../../public/assets/img/course/course-4/banner_800_476.png";
import CourseImgFive from "../../public/assets/img/course/course-5/banner_800_476.png";
import CourseImgSix from "../../public/assets/img/course/course-6/banner_800_476.png";
import CourseImgSeven from "../../public/assets/img/course/course-7/banner_800_476.png";
import CourseImgEight from "../../public/assets/img/course/course-8/banner_800_476.png";
import CourseImgNine from "../../public/assets/img/course/course-9/banner_800_476.png";
import CourseImgTen from "../../public/assets/img/course/course-10/banner_800_476.png";
import CourseImgEleven from "../../public/assets/img/course/course-11/banner_800_476.png";
import CourseImgTwelve from "../../public/assets/img/course/course-12/banner_800_476.png";
import CourseImgThirteen from "../../public/assets/img/course/course-13/banner_800_476.png";
import CourseImgFourteen from "../../public/assets/img/course/course-14/banner_800_476.png";

// course detail background images
import BgImgOne from "../../public/assets/img/course/course-1/bg_1920_450.png";
import BgImgTwo from "../../public/assets/img/course/course-2/bg_1920_450.png";
import BgImgThree from "../../public/assets/img/course/course-3/bg_1920_450.png";
import BgImgFour from "../../public/assets/img/course/course-4/bg_1920_450.png";
import BgImgFive from "../../public/assets/img/course/course-5/bg_1920_450.png";
import BgImgSix from "../../public/assets/img/course/course-6/bg_1920_450.png";
import BgImgSeven from "../../public/assets/img/course/course-7/bg_1920_450.png";
import BgImgEight from "../../public/assets/img/course/course-8/bg_1920_450.png";
import BgImgNine from "../../public/assets/img/course/course-9/bg_1920_450.png";
import BgImgTen from "../../public/assets/img/course/course-10/bg_1920_450.png";
import BgImgEleven from "../../public/assets/img/course/course-11/bg_1920_450.png";
import BgImgTwelve from "../../public/assets/img/course/course-12/bg_1920_450.png";
import BgImgThirteen from "../../public/assets/img/course/course-13/bg_1920_450.png";
import BgImgFourteen from "../../public/assets/img/course/course-14/bg_1920_450.png";

// video thumbnail images
import VideoImgOne from "../../public/assets/img/course/course-1/video_thumb_480_280.png";
import VideoImgTwo from "../../public/assets/img/course/course-2/video_thumb_480_280.png";
import VideoImgThree from "../../public/assets/img/course/course-3/video_thumb_480_280.png";
import VideoImgFour from "../../public/assets/img/course/course-4/video_thumb_480_280.png";
import VideoImgFive from "../../public/assets/img/course/course-5/video_thumb_480_280.png";
import VideoImgSix from "../../public/assets/img/course/course-6/video_thumb_480_280.png";
import VideoImgSeven from "../../public/assets/img/course/course-7/video_thumb_480_280.png";
import VideoImgEight from "../../public/assets/img/course/course-8/video_thumb_480_280.png";
import VideoImgNine from "../../public/assets/img/course/course-9/video_thumb_480_280.png";
import VideoImgTen from "../../public/assets/img/course/course-10/video_thumb_480_280.png";
import VideoImgEleven from "../../public/assets/img/course/course-11/video_thumb_480_280.png";
import VideoImgTwelve from "../../public/assets/img/course/course-12/video_thumb_480_280.png";
import VideoImgThirteen from "../../public/assets/img/course/course-13/video_thumb_480_280.png";
import VideoImgFourteen from "../../public/assets/img/course/course-14/video_thumb_480_280.png";

import TeacherImgTwo from "../../public/assets/img/course/teacher/teacher-2.jpg";

import { coursesType } from "@/interface/interFace";

const courses_data: coursesType[] = [
  {
    id: 1,
    image: CourseImgOne,
    bgImage: BgImgOne,
    videoThumb: VideoImgOne,
    category: "Weight Loss Program",
    lesson: 10,
    ratingAve: 4.5,
    ratingCount: 100,
    ratings: 4.5,
    title: "Effective Weight Loss",
    tutorImg: TeacherImgTwo,
    author: "John Doe",
    price: 49.99,
    oldPrice: 59.99,
    quantity: 50,
    desc: "Discover slimming solutions tailored to your needs.",
    info: "This course offers personalized weight loss strategies and expert guidance.",
    videoUrl: "https://example.com/weight-loss-video",
    description: "Effective weight loss involves adopting a holistic approach that encompasses balanced nutrition, " +
        "regular physical activity, behavioral modifications, and lifestyle adjustments. It is a gradual process that " +
        "focuses on achieving and maintaining a healthy body weight through sustainable changes rather than quick fixes. " +
        "A balanced diet, consisting of a variety of nutrient-dense foods and portion control, is crucial. " +
        "Engaging in regular exercise, including both aerobic and strength training activities, helps burn calories, " +
        "build muscle, and improve overall fitness. Behavioral changes such as setting realistic goals, tracking food intake, " +
        "managing stress, and getting enough sleep can support weight loss efforts. Adopting a healthier lifestyle by " +
        "reducing sedentary behavior, limiting alcohol consumption, and avoiding processed foods and sugary beverages is " +
        "also important. Seeking guidance from healthcare professionals can provide personalized advice and support for " +
        "effective and safe weight loss. Ultimately, effective weight loss is about making sustainable changes to habits " +
        "and lifestyle that can lead to lasting results and improved overall health.",
    audience: ["Individuals Seeking Weight Loss", "Fitness and Health Product Manufacturers", "Insurance Companies and Employers"]
  },
  {
    id: 2,
    image: CourseImgTwo,
    bgImage: BgImgTwo,
    videoThumb: VideoImgTwo,
    category: "Nutrition Planning",
    lesson: 8,
    ratingAve: 4.2,
    ratingCount: 80,
    ratings: 4.2,
    title: "Healthy Eating Essentials",
    tutorImg: TeacherImgTwo,
    author: "Jane Smith",
    price: 29.99,
    oldPrice: 39.99,
    quantity: 100,
    desc: "Learn dietary guidance tailored to your lifestyle for optimal nutrition.",
    info: "Explore the fundamentals of nutrition and create a balanced eating plan.",
    videoUrl: "https://example.com/nutrition-video",
    description: "Healthy Eating Essentials is a concept that focuses on understanding the fundamental components " +
        "of a balanced and nutritious diet. It entails recognizing and incorporating essential nutrients into daily meals, " +
        "such as vitamins, minerals, proteins, fats, and carbohydrates, while minimizing the intake of processed foods, " +
        "sugars, and unhealthy fats. This approach emphasizes the importance of portion control, mindful eating, " +
        "and the inclusion of a variety of colorful fruits, vegetables, lean proteins, whole grains, and healthy fats " +
        "in every meal. By adopting \"Healthy Eating Essentials,\" individuals can improve their overall health, maintain " +
        "a healthy weight, and reduce the risk of chronic diseases such as heart disease, diabetes, and certain cancers.",
    audience: ["Individuals Seeking Healthier Lifestyles", "Healthcare Professionals", "Food and Beverage Manufacturers"]
  },
  {
    id: 3,
    image: CourseImgThree,
    bgImage: BgImgThree,
    videoThumb: VideoImgThree,
    category: "Cardio Sessions",
    lesson: 12,
    ratingAve: 4.7,
    ratingCount: 120,
    ratings: 4.7,
    title: "High-Intensity Cardio Blast",
    tutorImg: TeacherImgTwo,
    author: "Alex Johnson",
    price: 39.99,
    oldPrice: 49.99,
    quantity: 75,
    desc: "Experience heart-pumping workouts designed to torch calories and boost endurance.",
    info: "Get ready to sweat with a variety of challenging cardio exercises.",
    videoUrl: "https://example.com/cardio-video",
    description: "High-Intensity Cardio Blast is a workout regimen designed to boost cardiovascular fitness and burn " +
        "calories efficiently. It involves performing high-intensity exercises in short bursts, followed by brief periods " +
        "of rest or low-intensity activity. This type of workout can include a variety of exercises such as running, " +
        "cycling, jumping jacks, burpees, or high-knee sprints, among others. The main goal of a High-Intensity Cardio " +
        "Blast is to elevate the heart rate and maintain it at an elevated level for a sustained period. This type of " +
        "workout is known for its effectiveness in improving cardiovascular health, increasing metabolism, and aiding " +
        "in weight loss. It can be modified to suit individual fitness levels and can be an excellent addition to any " +
        "fitness routine.",
    audience: ["Weight Loss Seekers", "Athletes", "Health-Conscious Individuals"]
  },
  {
    id: 4,
    image: CourseImgFour,
    bgImage: BgImgFour,
    videoThumb: VideoImgFour,
    category: "Yoga",
    lesson: 15,
    ratingAve: 4.8,
    ratingCount: 150,
    ratings: 4.8,
    title: "Mindful Yoga Flow",
    tutorImg: TeacherImgTwo,
    author: "Emily Rodriguez",
    price: 34.99,
    oldPrice: 44.99,
    quantity: 80,
    desc: "Discover the benefits of mindful body movement and enhance your flexibility and strength.",
    info: "Join Emily for a soothing yoga journey that nurtures the mind, body, and spirit.",
    videoUrl: "https://example.com/yoga-video",
    description: "Mindful Yoga Flow is a meditative and therapeutic practice that integrates mindful awareness with the " +
        "traditional flow of yoga postures. This style of yoga emphasizes the importance of breath, alignment, and " +
        "presence in each movement and pose. It encourages practitioners to cultivate a deep connection with their bodies, " +
        "thoughts, and emotions, fostering a state of inner calm and awareness. By moving through the poses mindfully " +
        "and with intention, individuals can reduce stress, increase flexibility, and improve overall well-being. The " +
        "\"Mindful Yoga Flow\" approach encourages self-compassion and non-judgment, promoting a sense of harmony and " +
        "balance in both the physical and mental aspects of one's life.",
    audience: ["Stressed Individuals", "Meditation Practitioners", "Pregnant Women"]
  },
  {
    id: 5,
    image: CourseImgFive,
    bgImage: BgImgFive,
    videoThumb: VideoImgFive,
    category: "Zumba",
    lesson: 10,
    ratingAve: 4.6,
    ratingCount: 90,
    ratings: 4.6,
    title: "Latin Dance Party",
    tutorImg: TeacherImgTwo,
    author: "Carlos Martinez",
    price: 29.99,
    oldPrice: 34.99,
    quantity: 60,
    desc: "Join the ultimate dance fitness party and burn calories while grooving to Latin rhythms.",
    info: "Carlos will guide you through energetic Zumba routines that make exercise feel like fun.",
    videoUrl: "https://example.com/zumba-video",
    description: "A Latin Dance Party is an energetic and exhilarating event that celebrates the rich cultural " +
        "heritage of Latin American dance styles. This vibrant gathering typically features a variety of Latin dances " +
        "such as salsa, merengue, bachata, cha-cha, and samba. Participants can expect to move to the rhythmic beats of " +
        "salsa music, engage in spontaneous partner dances, and enjoy the passionate and sensual movements that characterize " +
        "Latin dance. Whether it's an organized event, a social gathering, or a spontaneous dance floor at a party, a " +
        "Latin Dance Party is an opportunity for people of all ages and backgrounds to come together, enjoy the music, and " +
        "express themselves through the joy of dance.",
    audience: ["Cultural Enthusiasts", "Friends and Groups", "Event Organizers"]
  },
  {
    id: 6,
    image: CourseImgSix,
    bgImage: BgImgSix,
    videoThumb: VideoImgSix,
    category: "Swimming",
    lesson: 8,
    ratingAve: 4.4,
    ratingCount: 70,
    ratings: 4.4,
    title: "Mastering the Backstroke",
    tutorImg: TeacherImgTwo,
    author: "Sarah Johnson",
    price: 39.99,
    oldPrice: 49.99,
    quantity: 45,
    desc: "Dive into the world of aquatic exercise and improve your swimming technique.",
    info: "Sarah will help you refine your backstroke technique and build confidence in the water.",
    videoUrl: "https://example.com/swimming-video",
    description: "Mastering the backstroke is an essential skill for competitive swimmers and recreational swimmers alike. " +
        "This swimming stroke, characterized by a backward arm movement and a flutter kick, requires coordination, " +
        "proper technique, and a strong sense of balance. To achieve proficiency, swimmers must focus on maintaining a " +
        "streamlined body position, a steady rhythm, and a fluid arm motion. Additionally, mastering the backstroke " +
        "involves refining breathing techniques, coordinating body rotation, and optimizing flip turns at the pool's end. " +
        "With dedication to practice and attention to detail, swimmers can unlock the backstroke's potential for speed and " +
        "efficiency, enhancing their overall swimming prowess.",
    audience: ["Swimmers", "Schools and Colleges", "Fitness Enthusiasts"]
  },
  {
    id: 7,
    image: CourseImgSeven,
    bgImage: BgImgSeven,
    videoThumb: VideoImgSeven,
    category: "Counselling",
    lesson: 6,
    ratingAve: 4.9,
    ratingCount: 95,
    ratings: 4.9,
    title: "Stress Management Techniques",
    tutorImg: TeacherImgTwo,
    author: "Dr. Rebecca Smith",
    price: 49.99,
    oldPrice: 59.99,
    quantity: 55,
    desc: "Explore therapeutic support sessions and learn effective strategies for managing stress.",
    info: "Dr. Smith provides practical techniques to help you cope with stress and enhance well-being.",
    videoUrl: "https://example.com/counselling-video",
    description: "Stress management techniques are essential tools for navigating the challenges and pressures of daily life. " +
        "They encompass a variety of strategies and practices that help individuals cope with stress and promote mental, " +
        "emotional, and physical well-being. These techniques can include mindfulness meditation, deep breathing exercises, " +
        "progressive muscle relaxation, and guided imagery. Additionally, activities such as physical exercise, journaling, " +
        "spending time in nature, and engaging in hobbies or creative pursuits can also be effective in managing stress. " +
        "The key is to find techniques that work best for each individual and to incorporate them into a regular routine. " +
        "With consistent practice, stress management techniques can help individuals develop resilience, enhance their " +
        "overall quality of life, and better navigate the demands of modern life.",
    audience: ["Working Professionals", "People with Chronic Illnesses", "Individuals with Mental Health Conditions"]
  },
  {
    id: 8,
    image: CourseImgEight,
    bgImage: BgImgEight,
    videoThumb: VideoImgEight,
    category: "Therapy",
    lesson: 10,
    ratingAve: 4.7,
    ratingCount: 110,
    ratings: 4.7,
    title: "Cognitive Behavioral Therapy",
    tutorImg: TeacherImgTwo,
    author: "Dr. Michael Johnson",
    price: 59.99,
    oldPrice: 69.99,
    quantity: 65,
    desc: "Receive expert mental support and learn techniques to address cognitive patterns and behaviors.",
    info: "Dr. Johnson guides you through evidence-based therapy methods to promote mental well-being.",
    videoUrl: "https://example.com/therapy-video",
    description: "Cognitive Behavioral Therapy (CBT) is a widely recognized and effective form of psychotherapy that " +
        "focuses on the connection between thoughts, feelings, and behaviors. It is based on the premise that our thoughts " +
        "and beliefs shape our emotions and influence our actions. CBT aims to identify and challenge negative or distorted " +
        "thought patterns that may contribute to emotional distress or problematic behaviors. By recognizing and reframing " +
        "these thought patterns, individuals can develop healthier coping strategies and improve their emotional well-being. " +
        "CBT is often used to treat a range of mental health conditions, including depression, anxiety disorders, PTSD, and " +
        "OCD, among others. It is a collaborative and goal-oriented approach, with clients and therapists working together " +
        "to achieve specific treatment goals.",
    audience: ["People with Emotional and Behavioral Challenges", "Individuals with Chronic Pain or Illness", "Individuals with Relationship Issues"]
  },
  {
    id: 9,
    image: CourseImgNine,
    bgImage: BgImgNine,
    videoThumb: VideoImgNine,
    category: "Language Fitness",
    lesson: 12,
    ratingAve: 4.5,
    ratingCount: 80,
    ratings: 4.5,
    title: "Mastering Spanish Grammar",
    tutorImg: TeacherImgTwo,
    author: "Maria Hernandez",
    price: 44.99,
    oldPrice: 54.99,
    quantity: 70,
    desc: "Enhance your linguistic skill with a comprehensive Spanish grammar course.",
    info: "Maria will guide you through grammar rules and exercises to improve your Spanish proficiency.",
    videoUrl: "https://example.com/spanish-grammar-video",
    description: "Mastering Spanish grammar is a crucial step in becoming proficient in the Spanish language. " +
        "It involves understanding the rules and structures that govern the language, including verb conjugation, " +
        "noun-adjective agreement, pronoun usage, and sentence construction. By mastering Spanish grammar, learners " +
        "can communicate more effectively and accurately, allowing them to express their thoughts and ideas with " +
        "clarity and precision. It also helps learners to comprehend written and spoken Spanish more easily, " +
        "enabling them to engage with Spanish-speaking communities and cultures more fully. While mastering Spanish " +
        "grammar can be a challenge, it is a rewarding endeavor that opens up new opportunities for personal and " +
        "professional growth.",
    audience: ["Students of Spanish", "Spanish Language Enthusiasts", "Teachers and Educators"]
  },
  {
    id: 10,
    image: CourseImgTen,
    bgImage: BgImgTen,
    videoThumb: VideoImgTen,
    category: "Mental Fitness",
    lesson: 10,
    ratingAve: 4.6,
    ratingCount: 100,
    ratings: 4.6,
    title: "Stress Relief Meditation",
    tutorImg: TeacherImgTwo,
    author: "Dr. Emily Kim",
    price: 29.99,
    oldPrice: 39.99,
    quantity: 80,
    desc: "Learn mindfulness techniques to reduce stress and enhance mental well-being.",
    info: "Dr. Kim's meditation course offers relaxation exercises to promote inner peace and calm.",
    videoUrl: "https://example.com/meditation-video",
    description: "Stress relief meditation is a powerful and effective technique that allows individuals to relax, " +
        "calm their minds, and find inner peace amidst the demands and pressures of everyday life. By practicing " +
        "mindfulness and focusing on the present moment, individuals can release tension and reduce anxiety. This " +
        "form of meditation often involves deep breathing exercises, guided imagery, and body scan techniques, which " +
        "help to promote relaxation and a sense of well-being. Regular practice of stress relief meditation has been " +
        "shown to lower cortisol levels, improve mood, and increase resilience to stress. It can be done anywhere and " +
        "at any time, making it a convenient and accessible tool for managing stress in daily life.",
    audience: ["People with Chronic Illnesses", "Individuals with Mental Health Conditions", "Individuals Undergoing Major Life Changes"]
  },
  {
    id: 11,
    image: CourseImgEleven,
    bgImage: BgImgEleven,
    videoThumb: VideoImgEleven,
    category: "Fitness Nutrition",
    lesson: 8,
    ratingAve: 4.4,
    ratingCount: 90,
    ratings: 4.4,
    title: "Fueling Your Workouts",
    tutorImg: TeacherImgTwo,
    author: "Nutritionist Sarah Brown",
    price: 34.99,
    oldPrice: 44.99,
    quantity: 60,
    desc: "Discover the importance of nutrition for fitness performance and recovery.",
    info: "Sarah provides guidance on pre- and post-workout nutrition to optimize your fitness results.",
    videoUrl: "https://example.com/nutrition-workouts-video",
    description: "Optimizing your nutrition before, during, and after workouts is essential for maximizing performance " +
        "and achieving fitness goals. A well-balanced meal or snack containing carbohydrates, protein, and healthy " +
        "fats 1-2 hours before exercise provides sustained energy and prevents fatigue. Staying hydrated by drinking " +
        "plenty of fluids before, during, and after workouts supports nutrient delivery and prevents dehydration. " +
        "Consuming carbohydrates immediately before and after exercise replenishes glycogen stores in muscles and " +
        "provides energy for workouts. Protein helps repair and build muscle tissue, while healthy fats provide " +
        "long-lasting energy and support overall health. Tailoring your nutrition to match the intensity and duration " +
        "of your workouts, as well as your individual needs and goals, is crucial. By focusing on these aspects of " +
        "nutrition, you can optimize your workouts, reduce the risk of fatigue and injury, and support your overall " +
        "health and fitness journey.",
    audience: ["Athletes and Sports Enthusiasts", "Bodybuilders and Strength Trainers", "Competitive Sports Teams"]
  },
  {
    id: 12,
    image: CourseImgTwelve,
    bgImage: BgImgTwelve,
    videoThumb: VideoImgTwelve,
    category: "Strength Training",
    lesson: 10,
    ratingAve: 4.7,
    ratingCount: 110,
    ratings: 4.7,
    title: "Powerlifting Fundamentals",
    tutorImg: TeacherImgTwo,
    author: "Coach Mark Thompson",
    price: 39.99,
    oldPrice: 49.99,
    quantity: 75,
    desc: "Build strength and muscle with a comprehensive powerlifting training program.",
    info: "Coach Thompson teaches proper lifting techniques and programming for powerlifting success.",
    videoUrl: "https://example.com/powerlifting-video",
    description: "Powerlifting is a strength sport that involves three main lifts: the squat, bench press, and deadlift. " +
        "It focuses on developing maximal strength in these compound movements through proper technique, form, and " +
        "progressive overload. Powerlifting fundamentals include understanding the mechanics of each lift, learning " +
        "how to execute the movements safely and efficiently, and developing a structured training program to gradually " +
        "increase the weight lifted over time. It also involves proper warm-up and recovery techniques to prevent injuries " +
        "and optimize performance. Powerlifting fundamentals are essential for athletes looking to compete in powerlifting " +
        "competitions, as well as individuals seeking to improve their strength and fitness levels.",
    audience: ["Powerlifting Beginners", "Powerlifting Competitors", "Weightlifters"]
  },
  {
    id: 13,
    image: CourseImgThirteen,
    bgImage: BgImgThirteen,
    videoThumb: VideoImgThirteen,
    category: "Mindfulness",
    lesson: 6,
    ratingAve: 4.8,
    ratingCount: 120,
    ratings: 4.8,
    title: "Introduction to Mindfulness",
    tutorImg: TeacherImgTwo,
    author: "Mindfulness Coach Laura Evans",
    price: 24.99,
    oldPrice: 29.99,
    quantity: 50,
    desc: "Explore the basics of mindfulness and cultivate present-moment awareness.",
    info: "Laura's course offers simple practices to integrate mindfulness into daily life.",
    videoUrl: "https://example.com/mindfulness-video",
    description: "Introduction to Mindfulness is a foundational practice in cultivating awareness, attention, and " +
        "acceptance of the present moment. It involves being fully present and engaged in whatever you are doing, " +
        "with an open and non-judgmental attitude. Mindfulness encourages observation of thoughts, emotions, sensations, " +
        "and the surrounding environment without getting caught up in them. This practice can be applied to various " +
        "aspects of life, such as eating, walking, working, and interacting with others, to cultivate a greater sense of " +
        "calm, clarity, and well-being. By incorporating mindfulness into daily life, individuals can reduce stress, " +
        "enhance focus and concentration, and improve overall mental and emotional health.",
    audience: ["Stress-Prone Individuals", "Mental Health Patients", "Athletes and Sports Coaches"]
  },
  {
    id: 14,
    image: CourseImgFourteen,
    bgImage: BgImgFourteen,
    videoThumb: VideoImgFourteen,
    category: "Self-Defense",
    lesson: 8,
    ratingAve: 4.6,
    ratingCount: 100,
    ratings: 4.6,
    title: "Krav Maga Essentials",
    tutorImg: TeacherImgTwo,
    author: "Self-Defense Instructor Jake Smith",
    price: 44.99,
    oldPrice: 54.99,
    quantity: 70,
    desc: "Learn practical self-defense techniques and improve your confidence and safety.",
    info: "Jake teaches Krav Maga principles for real-world self-defense situations.",
    videoUrl: "https://example.com/krav-maga-video",
    description: "Krav Maga Essentials is a self-defense system that focuses on practical techniques for " +
        "real-life situations. Developed in Israel, it is known for its effectiveness and simplicity. " +
        "Krav Maga teaches individuals to defend against common threats, including strikes, grabs, chokes, " +
        "and weapon attacks. It emphasizes preemptive strikes and aggressive counterattacks to quickly " +
        "neutralize threats. Krav Maga Essentials also includes training in situational awareness, de-escalation " +
        "techniques, and risk avoidance. The goal is to develop confidence, physical fitness, and the ability " +
        "to protect oneself and others in a variety of situations. This self-defense system is suitable for people " +
        "of all ages, fitness levels, and backgrounds, making it an accessible and valuable skill for personal " +
        "safety and security.",
    audience: ["Law Enforcement and Security Professionals", "Corporate and Organizational Training", "Community and Support Groups"]
  },
];
export default courses_data;
