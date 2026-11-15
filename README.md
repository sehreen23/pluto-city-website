# PLUTO CITY — Static website

A responsive single-page informational website for PLUTO CITY, based on the provided Emergent desktop screenshots.

## Preview in Visual Studio Code

1. Extract the ZIP and open the `pluto-city-final` folder in VS Code.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `index.html` and choose **Open with Live Server**.
4. The site will open in your browser. No npm, build command, login, or server-side database is required.

You can also open `index.html` directly in a browser. A local web server is recommended for testing.

## Publish with GitHub Pages

1. Create a GitHub repository.
2. Upload the **contents** of this folder to the repository root.
3. In repository **Settings → Pages**, select **Deploy from a branch**, choose `main` and `/ (root)`.
4. Wait for GitHub Pages to publish your site.

## Site files

- `index.html`: page sections and content
- `styles.css`: design, images, mobile layouts, orbit animation
- `script.js`: services cards, mobile navigation, current year
- `assets/logo.svg`: crisp logo for dark backgrounds
- `assets/logo-light.svg`: crisp logo for light backgrounds
- `assets/favicon.svg`: browser tab icon

## Notes / important checks before publishing

- The logo is a new, clean vector **interpretation** of the reference mark, not an exact tracing. It has no ® symbol. Review and approve the logo before launch.
- The uploaded MP4 contained a single frame (~0.033 s), so the orbit animation's motion is a faithful visual **approximation**, not a frame-by-frame reconstruction.
- Property photography is loaded from Unsplash URLs. These require an internet connection and may differ from the original Emergent images. For a production launch, replace with appropriately licensed local images for consistent loading and presentation.
- Google Fonts also requires an internet connection; system font fallbacks are included.
- Email and phone links are set to `partnerships@pluto-city.com`, `+91 73491 65333`, and `+91 98869 00090` based on the screenshots. **Verify these are the current correct business contacts before publishing.**
- This is a static informational site with no form backend, tracking, account login, or database.
- Mobile layouts are coded responsively but should be visually tested on your target devices before launch.


## Logo update
The website uses refreshed `assets/logo.svg` and `assets/logo-light.svg` files, built with the original supplied orbital building mark and sharp, readable SVG lettering. The supplied reference is preserved in `assets/original-logo-reference.png`. The small ® mark is not included in the website SVG wordmark.
