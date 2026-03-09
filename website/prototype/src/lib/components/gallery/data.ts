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
    description: "StrikeCycle is a robotic pin-resetting system that is able to change the most difficult part of bowling automation: getting the pins back after a throw! Instead of simply on large mechanical sweepers or fixed industrial machinery, to account for a global audience who wants to have a bowling system on a table, we use Hugging Face's LeRobot robotic arm trained with smolVLA to get individual pins from a pin holder and accurately place them back into their corresponding positions on the lane.",
    github: 'https://github.com/anvayajmera/AMD_Robotics_Hackathon_2025_ProjectTemplate',
    media: {
      type: 'video',
      src: 'https://raw.githubusercontent.com/anvayajmera/AMD_Robotics_Hackathon_2025_ProjectTemplate/main/assets/teleop_side.mp4'
    }
  }
];