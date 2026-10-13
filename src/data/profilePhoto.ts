import type { ImageMetadata } from 'astro';

// Optional photo of you: save it as src/assets/profile.jpg (or .png/.webp) and it appears
// next to the homepage intro and in the printable CV header. Remove the file to hide it.
const files = import.meta.glob<{ default: ImageMetadata }>('../assets/profile.{jpg,jpeg,png,webp}', { eager: true });

export const profilePhoto: ImageMetadata | undefined = Object.values(files)[0]?.default;
