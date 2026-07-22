import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
  // Use environment variable for the domain, or fallback to the requested domain
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sivasaiengg.in';

  // Function to get all public routes dynamically from the app directory
  function getRoutes(dir: string, basePath = ''): string[] {
    const routes: string[] = [];
    
    if (!fs.existsSync(dir)) return routes;

    const files = fs.readdirSync(dir);

    // If there is a page.tsx, it's a valid route
    if (files.includes('page.tsx')) {
      // Exclude route groups e.g. (group), dynamic routes e.g. [id], and private folders e.g. _folder
      if (!basePath.includes('(') && !basePath.includes('[') && !basePath.includes('_')) {
        routes.push(basePath === '' ? '/' : basePath);
      }
    }

    // Recursively read subdirectories
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      // Exclude api, private folders (_), and dynamic segments (unless you want to add logic to handle them)
      if (
        stat.isDirectory() && 
        !file.startsWith('_') && 
        file !== 'api' && 
        !file.startsWith('(') && 
        !file.startsWith('[')
      ) {
        routes.push(...getRoutes(filePath, `${basePath}/${file}`));
      }
    }

    return routes;
  }

  // Define the path to the app directory
  const appDir = path.join(process.cwd(), 'src', 'app');
  const dynamicRoutes = getRoutes(appDir);

  // Map routes to sitemap format with required priorities
  const sitemapData: MetadataRoute.Sitemap = dynamicRoutes.map((route) => {
    let priority = 0.5; // Default for other pages
    let changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'monthly';

    // Set priorities according to requirements
    if (route === '/') {
      priority = 1.0;
      changeFrequency = 'weekly';
    } else if (route === '/services') {
      priority = 0.9;
      changeFrequency = 'monthly';
    } else if (route === '/projects') {
      priority = 0.8;
      changeFrequency = 'monthly';
    } else if (route === '/about') {
      priority = 0.7;
      changeFrequency = 'monthly';
    } else if (route === '/contact') {
      priority = 0.7;
      changeFrequency = 'yearly';
    }

    return {
      url: `${baseUrl}${route === '/' ? '' : route}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    };
  });

  return sitemapData;
}
