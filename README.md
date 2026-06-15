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
2. Confirm the cPanel document root for the domain or subdomain. In cPanel, open **Domains** and check the **Document Root** for `gemonagroup`. The deploy path in `.cpanel.yml` must match that folder.
3. If needed, edit this line in `.cpanel.yml`:

```yaml
- export DEPLOYPATH=/home/shargtvh/gemonagroup/
```

For an addon domain, cPanel may instead show something like:

```yaml
- export DEPLOYPATH=/home/shargtvh/public_html/gemonagroup/
```

4. In this folder, initialize and push the repository:

```bash
git init
git add .cpanel.yml index.html styles.css script.js assets README.md
git commit -m "Launch Gemona Group website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/gemona-group-website.git
git push -u origin main
```

5. Log in to Namecheap cPanel.
6. Open **Git Version Control**.
7. If the repository already exists in cPanel, open **Manage**.
8. Click **Update from Remote** to pull the latest commit with `.cpanel.yml`.
9. Click **Deploy HEAD Commit**.
10. Confirm that `index.html`, `styles.css`, `script.js`, and the `assets` folder are directly inside the domain document root.

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
