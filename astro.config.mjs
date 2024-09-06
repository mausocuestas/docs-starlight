import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Documentação SMS',
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 2 },
      logo: {
        light: './src/assets/smsLOGOblack.png',  // para dar contraste, cabeção
        dark: './src/assets/smsLOGObranco.png',
        replacesTitle: false,
      },
    }),
  ],
});
