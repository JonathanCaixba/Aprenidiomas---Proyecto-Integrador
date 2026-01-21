// Para escalabidad y facilidad de uso, este módulo crea un mapa de imágenes
// desde la carpeta de assets/images. Esto permite acceder a las imágenes
// por su nombre de archivo en lugar de tener que importar cada una manualmente.

// Usa import.meta.glob para importar todas las imágenes dinámicamente
const images = import.meta.glob('../assets/images/*.{jpg,jpeg,png,gif,svg,webp}', { eager: true, as: 'url' });

// Crea el mapa: clave = nombre del archivo (sin path), valor = URL resuelta por Vite
const imageMap = {};
Object.keys(images).forEach((path) => {
  const fileName = path.split('/').pop();  // Ej: 'chinacourses.jpg'
  imageMap[fileName] = images[path];
});

export default imageMap;