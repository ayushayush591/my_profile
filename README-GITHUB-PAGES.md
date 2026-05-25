# GitHub Pages Setup

## Files
- `index.html`
- `styles.css`
- `script.js`

## Replace profile image later
1. Add your image file in this folder (example: `profile.jpg`).
2. In `index.html`, find the hero image line and change:
   - from: `https://via.placeholder.com/...`
   - to: `profile.jpg`

## Publish on GitHub.io
1. Create a GitHub repository named:
   - `<your-github-username>.github.io`
2. Push these files to the `main` branch root.
3. Open `Settings -> Pages` and set:
   - Source: `Deploy from a branch`
   - Branch: `main` and `/ (root)`
4. Your site will be live at:
   - `https://<your-github-username>.github.io`

## Local preview
Run:
```bash
python -m http.server 8080
```
Then open `http://localhost:8080`.
