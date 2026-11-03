import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputPath = 'C:/Users/HP/.gemini/antigravity/brain/e293bd9a-db37-478f-b970-edcb89bfe300/.user_uploaded/media_1793697454702_1af863b7.png';
const outDir = 'C:/Users/HP/.gemini/antigravity/scratch/royal-peanuts-landing/src/assets/crops';

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function extract() {
  // Hero right card image
  await sharp(inputPath)
    .extract({ left: 176, top: 28, width: 104, height: 114 })
    .resize(600, 660, { kernel: 'lanczos3' })
    .toFile(path.join(outDir, 'hero.jpg'));

  // Product 1: Regular
  await sharp(inputPath)
    .extract({ left: 11, top: 227, width: 88, height: 50 })
    .resize(600, 340, { kernel: 'lanczos3' })
    .toFile(path.join(outDir, 'prod-regular.jpg'));

  // Product 2: Coconut
  await sharp(inputPath)
    .extract({ left: 104, top: 227, width: 87, height: 50 })
    .resize(600, 340, { kernel: 'lanczos3' })
    .toFile(path.join(outDir, 'prod-coconut.jpg'));

  // Product 3: Peppered
  await sharp(inputPath)
    .extract({ left: 195, top: 227, width: 87, height: 50 })
    .resize(600, 340, { kernel: 'lanczos3' })
    .toFile(path.join(outDir, 'prod-peppered.jpg'));

  // Product 4: Milk
  await sharp(inputPath)
    .extract({ left: 11, top: 326, width: 88, height: 50 })
    .resize(600, 340, { kernel: 'lanczos3' })
    .toFile(path.join(outDir, 'prod-milk.jpg'));

  // Product 5: Chocolate
  await sharp(inputPath)
    .extract({ left: 104, top: 326, width: 87, height: 50 })
    .resize(600, 340, { kernel: 'lanczos3' })
    .toFile(path.join(outDir, 'prod-chocolate.jpg'));

  // Product 6: Confectionery
  await sharp(inputPath)
    .extract({ left: 195, top: 326, width: 87, height: 50 })
    .resize(600, 340, { kernel: 'lanczos3' })
    .toFile(path.join(outDir, 'prod-confectionery.jpg'));

  // Story image
  await sharp(inputPath)
    .extract({ left: 151, top: 765, width: 131, height: 87 })
    .resize(700, 460, { kernel: 'lanczos3' })
    .toFile(path.join(outDir, 'artisan-story.jpg'));

  console.log('Successfully extracted crops!');
}

extract().catch(console.error);
