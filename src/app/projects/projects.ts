
export type Project = {
  title: string;
  icon: string;
  background: string;
  link?: string;
  url?: string;
  // imageUrl: string;
  // description: string;
}

export const projects: Array<Project> = [
  // {
  //   title: 'H.O.M.E. App',
  //   icon: 'assets/projects/home.png',
  //   background: '#334b62',
  //   link: '',
  // },
  {
    title: 'Hellofilters',
    icon: 'assets/projects/hellofilters.png',
    background: '#ff4612',
    url: 'https://hellofilters.com',
  },
  {
    title: 'H.O.M.E.',
    icon: 'assets/projects/home.png',
    background: '#19a69a',
    url: 'http://helpingmusic.org',
  },
  {
    title: 'Audio Classifier',
    icon: 'assets/projects/audio.png',
    background: '#FF6E40',
    url: 'https://github.com/armadill-odyssey/AudioClassifier',
  },
  {
    title: 'Mo. Real Estate Careers',
    icon: 'assets/projects/cjr.png',
    background: '#e60000',
    url: 'http://www.morealestatecareers.com/',
  },
  {
    title: 'California DUI Record',
    icon: 'assets/projects/california.png',
    background: '#121212',
    url: 'http://californiaduirecord.org/',
  },
]
