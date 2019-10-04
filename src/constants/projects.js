function importAll(r) {
   let images = {};
   r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
   return images;
 }
 
 const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/));

const MyProjects = [
   {
      title: 'Example Project',
      url: '/projects',
      img: images['about.svg']
   }
]

export default MyProjects;