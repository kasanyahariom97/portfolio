function importAll(r) {
   let images = {};
   r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
   return images;
 }
 
 const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/));

const MyProjects = [
   {
      title: 'Jack: A twitter clone',
      sub: 'Using: React, Express, MongoDB',
      url: 'https://jackapp.netlify.com/',
      img: images['jack_app.png']
   },
   {
      title: 'Clewis a shoe brand.',
      sub: 'Using: Wordpress/PHP, MySQL',
      url: 'http://clewis.in',
      img: images['clewis_site.jpg']
   },
   {
      title: 'React Note App',
      sub: 'Using: React, Express, MongoDB',
      url: 'https://react-node-note-app.herokuapp.com/',
      img: images['react_note.png']
   },
]

export default MyProjects;