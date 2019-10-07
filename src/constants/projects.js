function importAll(r) {
   let images = {};
   r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
   return images;
 }
 
 const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/));

const MyProjects = [
   {
      title: 'Example Project',
      url: '/portfolio',
      img: images['background_images.jpg']
   },
   {
      title: 'Example Project',
      url: '/portfolio',
      img: images['background_images.jpg']
   },
   {
      title: 'Example Project',
      url: '/portfolio',
      img: images['background_images.jpg']
   },
   {
      title: 'Example Project',
      url: '/portfolio',
      img: images['background_images.jpg']
   },
   {
      title: 'Example Project',
      url: '/portfolio',
      img: images['background_images.jpg']
   },
   {
      title: 'Example Project',
      url: '/portfolio',
      img: images['background_images.jpg']
   },
]

export default MyProjects;