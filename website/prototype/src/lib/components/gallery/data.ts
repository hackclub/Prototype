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
    name: 'project name 1', 
    members: ['name 1', 'name 2', 'name 3'],
    description: 'this is a super long paragraph description',
    github: 'https://byjoysu.com',
    media: {
      type: 'image',
      src: 'https://raw.githubusercontent.com/EthanK511/Team01-Prototype-Soup/main/img/EE682DE1-89A6-47B3-9E11-1B4E183816DE_4_5005_c.jpeg'
    }
  }, 
  {
    id: '2',
    name: 'project name 2', 
    members: ['name 1', 'name 2', 'name 3'],
    description: 'this description will be automatically truncated by ProjectCard.svelte',
    github: 'https://byjoysu.com',
    media: {
      type: 'video',
      src: 'https://raw.githubusercontent.com/notaroomba/synapse/main/assets/IMG_4416.mov'
    }
  }, 
  {
    id: '3',
    name: 'project name 3', 
    members: ['name 1', 'name 2', 'name 3'],
    description: 'this is a super long paragraph description',
    github: 'https://byjoysu.com',
    media: {
      type: 'image',
      src: 'sdfsdfdsfdsdsfs'
    }
  }, 
  {
    id: '4',
    name: 'project name 4', 
    members: ['name 1', 'name 2', 'name 3'],
    description: 'this is a super long paragraph description',
    github: 'https://byjoysu.com',
    media: {
      type: 'image',
      src: 'sdfsdfdsfdsdsfs'
    }
  }
]