# Gemona Group Website

Static corporate website for Gemona Group, built for simple deployment on Namecheap shared hosting and version control through GitHub.

## Files

- `index.html` - Website content and structure.
- `styles.css` - Visual system, responsive layout, and brand colors.
- `script.js` - Mobile navigation and header behavior.
- `assets/` - Web-ready images and logos.

## Local Preview

Run a local static server from this folder:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deploy Through GitHub And Namecheap

1. Create a GitHub repository, for example `gemona-group-website`.
2. In this folder, initialize and push the repository:

```bash
git init
git add index.html styles.css script.js assets README.md
git commit -m "Launch Gemona Group website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/gemona-group-website.git
git push -u origin main
```

3. Log in to Namecheap cPanel.
4. Open **Git Version Control**.
5. Choose **Create**.
6. Use the GitHub clone URL for the repository.
7. Set the deployment path to the domain document root, usually:

```text
/home/USERNAME/public_html
```

8. Pull or deploy the repository from cPanel.
9. Confirm that `index.html`, `styles.css`, `script.js`, and the `assets` folder are directly inside `public_html`.

## Alternative Manual Upload

If Git Version Control is unavailable on the shared hosting plan:

1. Open cPanel **File Manager**.
2. Go to `public_html`.
3. Upload `index.html`, `styles.css`, `script.js`, and the `assets` folder.
4. Visit the domain and clear browser cache if old content appears.

## Before Going Live

- Replace `info@gemonagroup.com` in `index.html` if a different official email should be used.
- Add any official phone number, address, or social links once confirmed.
- If the domain uses HTTPS, enable SSL from Namecheap/cPanel before sharing the site publicly.
