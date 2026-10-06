# Metta Praveen Kumar — Portfolio

A responsive black-and-white professional portfolio built with React + Vite.

## Included

- Home / hero section
- About Me
- Skills
- Projects
- Education
- Certifications
- LNIT Hackathon achievement
- Contact section
- GitHub and LinkedIn links
- Responsive mobile navigation
- Smooth scrolling
- Temporary AI-style profile avatar (MPK)

## Run locally

Make sure Node.js is installed.

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite, usually:

http://localhost:5173

## Build for production

```bash
npm run build
```

The production files will be generated in the `dist` folder.

## Replacing the temporary profile image

The current hero uses a CSS-generated temporary avatar so the site works immediately without needing an image file.

Later, replace the `.avatar` element in `src/main.jsx` with an image such as:

```jsx
<img className="real-profile" src="/profile.jpg" alt="Metta Praveen Kumar" />
```

and add your image as `public/profile.jpg`.
