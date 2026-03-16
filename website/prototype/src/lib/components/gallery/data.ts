interface ProjectMedia {
  type: 'image' | 'video' | 'iframe';
  src: string;
}

export interface Project {
  id: string; // needs to be string bc 17a/17b exists for some reason
  name: string;
  members: string[];
  description: string;
  github: string;
  media: ProjectMedia;
}

export const projects: Project[] = [
  {
    id: '1',
    name: 'The Can Crusher',
    members: ['Ethan K.', 'Tony', 'Nigel'],
    description: 'The can crusher is a fully autamated system that sorts, crushes and returns cans of most shapes and sizes includeing mini, redbull (skiny), and normal (12oz). The unique desighn fetures and systems include a custom made crusher, a system of 3 belts to deleiver cans to the robots workstation, and the robot arm itself. We are useing 4 cameras to capture every moment and make extreamaly precice movements stategicly placeing the cans in the crushers grasp.',
    github: 'https://github.com/EthanK511/Team01-Prototype-Soup',
    media: {
      type: 'image',
      src: 'https://github.com/EthanK511/Team01-Prototype-Soup/blob/main/img/EE682DE1-89A6-47B3-9E11-1B4E183816DE_4_5005_c.jpeg?raw=true'
    }
  },
  {
    id: '2',
    name: 'Aim Bot IRL',
    members: ['Aiden', 'Viggo', 'Vincent'],
    description: 'Robot built with the goal of automatically aiming at targets.',
    github: 'https://github.com/TheTridentGuy/AMD_Robotics_Hackathon_2025_AimbotIrl',
    media: {
      type: 'image',
      src: 'https://raw.githubusercontent.com/TheTridentGuy/AMD_Robotics_Hackathon_2025_AimbotIrl/main/20251221_132005.jpg'
    }
  },
  {
    id: '3',
    name: 'Synapse',
    members: ['Nathan', 'Gavin', 'Miles'],
    description: 'Synapse is a teleoperated surgical robot demonstrator that uses machine learning (SMVLA) to assist high-precision tasks and reduce human error in complex medical procedures.',
    github: 'https://github.com/notaroomba/synapse',
    media: {
      type: 'video',
      src: 'https://raw.githubusercontent.com/notaroomba/synapse/main/assets/IMG_4416.mov'
    }
  },
  {
    id: '4',
    name: 'StrikeCycle',
    members: ['Ved', 'Anvay'],
    description: 'StrikeCycle is a robotic pin-resetting system that is able to change the most difficult part of bowling automation: getting the pins back after a throw! Instead of simply on large mechanical sweepers or fixed industrial machinery, to account for a global audience who wants to have a bowling system on a table, we use Hugging Face\'s LeRobot robotic arm trained with smolVLA to get individual pins from a pin holder and accurately place them back into their corresponding positions on the lane.',
    github: 'https://github.com/anvayajmera/AMD_Robotics_Hackathon_2025_ProjectTemplate',
    media: {
      type: 'video',
      src: 'https://raw.githubusercontent.com/anvayajmera/AMD_Robotics_Hackathon_2025_ProjectTemplate/main/assets/teleop_side.mp4'
    }
  },
  {
    id: '7',
    name: 'SolderBuddy',
    members: ['Lucas', 'Arnav', 'Pranav'],
    description: 'SolderBuddy is an AI-powered collaborative robot built on an AMD AI PC and SO101 robot arms. The system assists users during soldering by autonomously retrieving and handing over tools, allowing the human to focus on precision electronics work while the robot manages tool delivery.',
    github: 'https://github.com/CyberBrainiac1/SolderBuddy',
    media: {
      type: 'video',
      src: 'https://github.com/user-attachments/assets/4b19f55d-2790-4c76-bd8c-27202770d430'
    }
  },
  {
    id: '8',
    name: 'Noname Mixbot',
    members: ['Eashaan', 'Luke', 'Dylan'],
    description: 'Noname Mixbot is a robotic arm powered by Amd AI technology that can make a wide range of drinks automatically. It’s designed to mix drinks like a bartender, and for the demo, it will show how to make a Shirley Temple. The Mixbot can do many different recipes.',
    github: 'https://github.com/Dragster2/Team-Noname---Mixbot',
    media: {
      type: 'iframe',
      src: 'https://drive.google.com/file/d/14K_9mAVrzC7A8ykqhfu7oOF1n0hcibOQ/preview'
    }
  },
  {
    id: '9',
    name: 'Dragon',
    members: ['Shreya', 'Nandini', 'Neya'],
    description: 'Meet Toothless, a robotic dragon who draws! He picks up the pen from the cup in the center, turns his head, draws on the paper (on the left of the aerial camera picture), drops the pen back into the cup, and returns to his starting position. This project was built with the RobotStudio SO101 Arm and AMD\'s Developer Cloud at Prototype, a Hack Club x AMD collaboration!',
    github: 'https://github.com/shreya-0718/dragon',
    media: {
      type: 'video',
      src: 'https://github.com/user-attachments/assets/ad64b75a-ebb6-4126-9aa5-66a94afb1c18'
    }
  },
  {
    id: "10",
    name: "SpoonBob",
    members: ["Mateo", "Ethan P.", "Kaushik"],
    description:
      "The robot combines human-like physical motion with AI-driven decision-making. Left in charge of managing a fast-paced matching-based card game, the system uses OpenCV for neural network-based card classification to identify, track, and evaluate cards as they are played, running a strategy analysis after every move. The system is fully modular, allowing vision models, strategies, and motion constraints to be updated independently. With motion constraints derived from human movement benchmarks and a state-driven decision framework, the robot reacts dynamically to human players and changing game conditions. This project highlights AMD hardware’s strength for real-time workloads that demand reliability and scalable performance.",
    github: "https://github.com/Mateo-Johnson/prototype2025",
    media: {
      type: "video",
      src: "https://www.youtube.com/embed/GOwJP6qtDTw?si=If3Ei5OxtNZ7Yecn",
    },
  },
  {
    id: "11",
    name: "ToolBox Assistant",
    members: ["Stanley", "Muhammad", "Abdalla"],
    description:
      "ToolBox Assistant is like a 3rd hand. Press a button, speak into the mic, and the Robotic arm automatically picks that item up for you!",
    github: "https://github.com/Stanlee1234/Prototype",
    media: {
      type: "iframe",
      src: "https://drive.google.com/file/d/1k-R1A0AUDar18Tuh5NBbiJbwUSfaUxem/preview",
    },
  },
  {
    id: "12",
    name: "Conveyor Circuits",
    members: ["Frank", "Vedansh", "Mitul"],
    description:
      "We created magentic circuit boxes, which when connected, will complete their circuits. For ease of access, we use a conveyor belt to feed the hand different circuit boxes.",
    github: "https://github.com/VedanshMannem/Prototype",
    media: {
      type: "iframe",
      src: "https://drive.google.com/file/d/1uWtUH_619erYG60zRaHDtjjltLE4BeXs/preview",
    },
  },
  {
    id: '13',
    name: 'HackAMole',
    members: ['Aaron', 'Yuanxi', 'Guy'],
    description: 'AI-powered SO-101 Robot Arm using CV to press buttons for a Whack-A-Mole type game. Trained using the online software Hugging Face and Weights & Biases. Constructed for Hack Club\'s Prototype hackathon Dec. 19-21.',
    github: 'https://github.com/achen18/AMD_Robotics_Hackathon_2025_HackAMole',
    media: {
      type: 'image',
      src: 'https://private-user-images.githubusercontent.com/78692747/529009389-594fcdc0-f376-4272-8018-6e98dc20b605.jpg?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzM2ODczMDcsIm5iZiI6MTc3MzY4NzAwNywicGF0aCI6Ii83ODY5Mjc0Ny81MjkwMDkzODktNTk0ZmNkYzAtZjM3Ni00MjcyLTgwMTgtNmU5OGRjMjBiNjA1LmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAzMTYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMzE2VDE4NTAwN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTZkZDQ3YTQ3ZTM1NzY4ODM1Yjk1MTBmZTI3ZjUxNjlmMDg2YzM3NTNhODE3Nzk5YzMzNmI5NjE3YjE5ZjQyMzQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.LKO7jc6tLMGgjdnPqQ06o2yPWrq1FP3li9ed_0DtUEk'
    }
  },
  {
    id: '14',
    name: 'Componenta',
    members: ['Charlie', 'Max K.', 'Shaurya'],
    description: 'out project takes unsorted components and sorts them into hoppers. you can then empty the hoppers to get the components you need.',
    github: 'https://github.com/crnicholson/prototype-main',
    media: {
      type: 'video',
      src: 'https://raw.githubusercontent.com/crnicholson/prototype-main/main/demo.mp4'
    }
  },
  {
    id: "15",
    name: "FiddleStein",
    members: ["Udo", "Max G.", "Sidd"],
    description:
      "Automatic violin playing robot made for Hackclub Prototype 2025, using an SO101 robotic arm for bowing, MG996R servos for fingering, and 12 AAA batteries for power, and AMD-Powered AI. CircuitPython and TKinter provide a GUI that allows one of four preset songs to be chosen to be played on four servos.",
    github: "https://github.com/newtontriumphant/Hackclub_Prototype_Fiddlestein",
    media: {
      type: "iframe",
      src: "https://drive.google.com/file/d/1NFpx0KfdvVGra_fxgwtTVWHd7cBESF5j/preview",
    },
  },
  {
    id: "16",
    name: "Armtender",
    members: ["Emme", "Ruzanna", "Afia"],
    description:
      "Armtender is a bartending project built using a LeRobot arm to deliver drinks in a fun way. It spins a fortune wheel with a button. Once the button is pressed, a green light lits up and it looks for the drink the fortune wheel landed on. Based on the arrow location, it decides for what drink to pick up. Then it goes to the drink, picks it up and delivers the drink can through the pick-up window.",
    github: "https://github.com/afia-ava/Armtender",
    media: {
      type: "video",
      src: "https://www.youtube.com/embed/xtB8Iqg5vC8?si=Fw-95LTdT9pS5s4U",
    },
  },
  {
    id: "17a",
    name: "PokerRobot",
    members: ["Prasham", "Eshaan", "Nachu"],
    description:
      "Our group created a poker playing robot arm. This robot uses several cameras and a trained yoloV5 model to identify and determine the robot's hand per match. Then the robot decides to either check, raise, or match the oppenent based on its odds and the river (poker cards on the table). Using the SO-Arm101, the robot is able to draw its own cards and place chips during each of its matches. Using a waveshare Bus Servo Adapter and 6 FeeTech STS3215 servos the robot is able to move across the playing fields making several different actions. Using AMD's Cloud AI training GPUs, we were able to increase the accuracy of our yolov5 model exponetially and make our robot as accurate as possible.",
    github: "https://github.com/superiorcave/HackClubPrototypePokerRobot",
    media: {
      type: "iframe",
      src: "https://drive.google.com/file/d/1AtRoi2FTZ7aZQxGRw5f4dSL-5Zksno_m/preview",
    },
  },
  {
    id: '17b',
    name: 'TheBestHand',
    members: ['Jayden', 'Rishi', 'Eddy'],
    description: 'Plays poker, once it sees its hand it will play the game normally We want to use a Gemini API to determine the best move to make, (check/call, raise, or fold), then based on that, run predetermined moves that we model out. We also thought it would be fun to have a "Poker Face", a 180x126 TFT LCD display depicting the model\'s emotions and current actions at all times.',
    github: 'https://github.com/CalamityCow/Eventide-TheBestHand',
    media: {
      type: 'image',
      src: 'https://raw.githubusercontent.com/CalamityCow/Eventide-TheBestHand/main/mission/Code/The-Best-Hand/outputs/captured_images/opencv__dev_video5.png'
    }
  },
  {
    id: '18',
    name: 'Robby Fischer',
    members: ['CK', 'Tanishq', 'Peter'],
    description: 'Robby Fischer is a chess-playing robotic arm system that uses computer vision and imitation learning AI to play chess autonomously against human opponents.',
    github: 'https://github.com/TaniWanKenobi/Robby-Fischer',
    media: {
      type: 'image',
      src: 'https://raw.githubusercontent.com/TaniWanKenobi/Robby-Fischer/main/outputs/captured_images/opencv__dev_video2.png'
    }
  },
  {
    id: "21",
    name: "Smorebot",
    members: ["Kaylee", "Jane", "Tyler"],
    description:
      "Smorebot is a project which uses a Hugging Face Le Robot arm with AI and other Hardware to make the perfect Smores!",
    github: "https://github.com/kaylz-d/smorebot",
    media: {
      type: "video",
      src: "https://youtube.com/embed/Y920YvBZafg",
    },
  },
  {
    id: '22',
    name: 'STACKed.',
    members: ['Julia', 'Aylin', 'Noah'],
    description: 'A cup stacking arm born from Prototype Team 22',
    github: 'https://github.com/noahwalshsd/Proto',
    media: {
      type: 'video',
      src: 'https://github.com/user-attachments/assets/4b4c2092-f2be-4b8e-9c4d-8059aa93f3f4'
    }
  }
];