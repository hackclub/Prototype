interface ProjectMedia {
  type: 'image' | 'video';
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
    id: '13',
    name: 'HackAMole',
    members: ['Aaron', 'Yuanxi', 'Guy'],
    description: 'AI-powered SO-101 Robot Arm using CV to press buttons for a Whack-A-Mole type game. Trained using the online software Hugging Face and Weights & Biases. Constructed for Hack Club\'s Prototype hackathon Dec. 19-21.',
    github: 'https://github.com/achen18/AMD_Robotics_Hackathon_2025_HackAMole',
    media: {
      type: 'video',
      src: 'https://github.com/user-attachments/assets/08ff023d-3b57-453b-bb1e-c53b1088d2f3'
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