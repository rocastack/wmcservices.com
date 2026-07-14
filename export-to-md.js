import fs from 'fs';
import path from 'path';

// Configuración: qué carpetas o archivos incluir y cuáles ignorar
const INCLUDED_PATHS = ['src', 'index.html', 'package.json', 'vite.config.js'];
const IGNORED_DIRS = ['node_modules', 'dist', '.git', '.agents'];
const IGNORED_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico', '.tar.gz'];

const OUTPUT_FILE = 'codigo_completo.md';

function getFileExtension(filename) {
  return path.extname(filename).toLowerCase();
}

function processDirectory(directoryPath, baseDir = '') {
  let markdownContent = '';
  
  if (!fs.existsSync(directoryPath)) return markdownContent;

  const items = fs.readdirSync(directoryPath);

  for (const item of items) {
    const fullPath = path.join(directoryPath, item);
    const relativePath = path.join(baseDir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      if (!IGNORED_DIRS.includes(item)) {
        markdownContent += processDirectory(fullPath, relativePath);
      }
    } else if (stat.isFile()) {
      const ext = getFileExtension(item);
      if (!IGNORED_EXTENSIONS.includes(ext) && !IGNORED_DIRS.some(ignored => relativePath.startsWith(ignored))) {
        const content = fs.readFileSync(fullPath, 'utf8');
        
        // Mapeo simple de extensiones a lenguajes de markdown
        let lang = ext.substring(1);
        if (lang === 'jsx' || lang === 'js') lang = 'javascript';
        if (lang === 'tsx' || lang === 'ts') lang = 'typescript';
        if (lang === '') lang = 'text';

        markdownContent += `### Archivo: \`${relativePath}\`\n\n`;
        markdownContent += `\`\`\`${lang}\n${content}\n\`\`\`\n\n`;
      }
    }
  }

  return markdownContent;
}

function generateMarkdown() {
  console.log('Generando archivo Markdown...');
  let finalMarkdown = '# Código del Proyecto\n\n';

  for (const item of INCLUDED_PATHS) {
    const fullPath = path.resolve(item);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`Advertencia: No se encontró ${item}`);
      continue;
    }

    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      finalMarkdown += processDirectory(fullPath, item);
    } else if (stat.isFile()) {
      const ext = getFileExtension(item);
      if (!IGNORED_EXTENSIONS.includes(ext)) {
        const content = fs.readFileSync(fullPath, 'utf8');
        let lang = ext.substring(1);
        if (lang === 'jsx' || lang === 'js') lang = 'javascript';
        
        finalMarkdown += `### Archivo: \`${item}\`\n\n`;
        finalMarkdown += `\`\`\`${lang}\n${content}\n\`\`\`\n\n`;
      }
    }
  }

  fs.writeFileSync(OUTPUT_FILE, finalMarkdown, 'utf8');
  console.log(`¡Listo! Se ha generado el archivo: ${OUTPUT_FILE}`);
}

generateMarkdown();
