# Invictus Chess Academy

A one-page website for Essai Selim's chess coaching. Pure HTML/CSS/JS — no
build step, no dependencies, works on GitHub Pages for free.

Everything on this site is already filled in with your real information —
name, title, rating, bio, achievements, pricing, email, and your Chess.com
profile. You shouldn't need to edit anything before publishing it. The one
optional step is connecting the contact form (see section 2 below) — until
you do, the form politely tells visitors to email you directly instead.

## File structure

```
chessbeast/
├── index.html          → all page content
├── css/
│   └── style.css       → all styling (colors, type, layout)
├── js/
│   └── script.js       → nav toggle, scroll animation, form handling
├── images/
│   ├── hero-bg.jpg      → duotone hero background (your tournament photo)
│   └── coach.jpg        → color-graded portrait, used in "The Coach" section
├── .gitignore
└── README.md            → this file
```

## 1. Uploading to GitHub — step by step

1. **Create the repository**
   - Go to github.com and log in (or create a free account).
   - Click the **+** icon (top right) → **New repository**.
   - Name it something like `invictus-chess-academy`.
   - Keep it **Public** (required for free GitHub Pages).
   - Do **not** check "Add a README" — you already have one. Leave it empty.
   - Click **Create repository**.

2. **Upload the files**
   - On the new repo's page, click **uploading an existing file**.
   - Drag in everything from this folder — including the `css`, `js`, and
     `images` folders and the `.gitignore` file (drag the folders
     themselves so GitHub preserves the structure).
   - Scroll down, add a commit message like "Initial site", click
     **Commit changes**.

   *(Alternative — using git on your computer instead of the browser uploader:)*
   ```bash
   cd chessbeast
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/invictus-chess-academy.git
   git push -u origin main
   ```

3. **Turn on GitHub Pages**
   - In your repository, click **Settings** → **Pages** (left sidebar).
   - Under "Build and deployment" → **Source**, choose **Deploy from a branch**.
   - Under **Branch**, choose `main` and folder `/ (root)`, then **Save**.
   - Wait 1–2 minutes, then refresh — GitHub will show your live URL:
     `https://YOUR-USERNAME.github.io/invictus-chess-academy/`

## 2. Connecting the contact form (optional but recommended)

Right now, submitting the form shows a message pointing people to your
email instead of actually sending anything — because it isn't connected
yet. To make it send you an email directly:

1. Go to [formspree.io](https://formspree.io) and create a free account
   using **essaiselim209@gmail.com**.
2. Create a new form. Formspree will give you an endpoint that looks like
   `https://formspree.io/f/abcdwxyz`.
3. Open `index.html`, find this line (inside the `<!-- ===== CONTACT ===== -->` section):
   ```html
   <form class="form reveal" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   Replace `YOUR_FORM_ID` with the ID Formspree gave you.
4. Commit the change on GitHub (edit the file directly on github.com with
   the pencil icon, or re-upload it). That's it — form submissions will now
   arrive in your inbox.

Until you do this, the form still works from a visitor's point of view —
it just shows a note asking them to email you directly instead.

## 3. Optional: custom domain

You mentioned you might buy a domain later. When you do:
1. In repo **Settings → Pages**, enter your domain under "Custom domain."
2. At your domain registrar, add a `CNAME` record pointing to
   `YOUR-USERNAME.github.io`.
3. Wait for DNS to propagate (can take a few hours) and turn on
   "Enforce HTTPS" once it's available.

## 4. Making future edits

For small text changes: open the file directly on GitHub, click the pencil
(✏️) icon, edit, and commit — the live site updates automatically within a
minute or two. For bigger changes, a code editor like
[VS Code](https://code.visualstudio.com/) plus a local clone of the repo
makes life easier.

## Notes on the design

- **Brand**: a laurel wreath wrapped around a knight — hand-built as SVG in
  `index.html` (search for `brand__wreath`), not a stock icon.
- **Colors, fonts, spacing**: all defined as CSS variables at the top of
  `css/style.css` under `:root`. Change a value there to re-theme the
  whole site at once.
- **Hero background**: your real tournament photo, processed into a
  duotone (ink + gold) treatment in `images/hero-bg.jpg`.
- **"The Invictus Method" section**: the four step labels (1.e4, 1...e5,
  2.Nf3, 2...Nc6) are real opening moves from the Ruy Lopez, used as a
  stand-in for "step 1, 2, 3, 4."
- Fully responsive, with a working mobile menu, and respects
  `prefers-reduced-motion` for anyone with that accessibility setting on.
- No testimonials are included since none were provided yet — once you
  have a few, they're easy to add as a new section modeled on "Track Record."
