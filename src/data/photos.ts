import type { ImageMetadata } from 'astro';

// Every image dropped into src/assets/photos shows up in the gallery, sorted by filename.
// The filename becomes the caption: "02-night-alley__maastricht.jpg" -> "Night alley · Maastricht".
// The number prefix sets the order; the part after "__" is an optional place.
const files = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
});

export const photos = Object.entries(files)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, mod]) => {
    const name = path.split('/').pop()!.replace(/\.[^.]+$/, '');
    const [title, place] = name.replace(/^\d+[-_ ]*/, '').split('__');
    const words = (s = '') => s.replace(/[-_]+/g, ' ').trim();
    const titleText = words(title);
    const placeText = words(place).replace(/\b\w/g, (c) => c.toUpperCase());
    const caption = [titleText && titleText[0].toUpperCase() + titleText.slice(1), placeText].filter(Boolean).join(' · ');
    return { src: mod.default, caption };
  });
