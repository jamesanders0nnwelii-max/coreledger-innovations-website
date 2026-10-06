# Deploy CoreLedger Innovations to Hostinger

You have two Hostinger options. Prefer **Option A** so careers applications and contact APIs keep working.

## Option A — Hostinger Node.js Web Apps (recommended)

Keeps the full Next.js app, including `/api/careers/apply` and `/api/contact`.

### 1. Put the code on GitHub
Repo: `https://github.com/jamesanders0nnwelii-max/coreledger-innovations-website`

### 2. In Hostinger hPanel
1. Open **Websites** → **Add Website**
2. Choose **Node.js Apps** (or **Web Apps**)
3. Select **Import Git Repository**
4. Connect GitHub and pick `coreledger-innovations-website`, branch `main`

### 3. Build settings
| Field | Value |
|--------|--------|
| Application type | Next.js / `next` |
| Node.js version | **20** or newer |
| Install command | `npm ci` |
| Build command | `npm run build` |
| Start command | `npm run start` |
| Output directory | `.next` |

Hostinger injects `PORT` automatically. This project’s start script already uses it.

### 4. Deploy
Click **Deploy**, wait for the build, then open your domain.

### 5. Optional: upload ZIP instead of Git
From your computer:

```bash
git clone https://github.com/jamesanders0nnwelii-max/coreledger-innovations-website.git
cd coreledger-innovations-website
zip -r coreledger-hostinger.zip . -x "node_modules/*" ".next/*" ".git/*"
```

In hPanel Node.js Apps choose **Upload archive**, then use the same build/start settings as above.

---

## Option B — Shared hosting File Manager / FTP (static only)

Use this only if your plan has **no Node.js apps**.  
Careers/contact forms will open an email draft instead of saving to the server API.

### 1. Build static files locally

```bash
npm install
npm run build:hostinger-static
```

This creates a folder: `hostinger-static/`

### 2. Upload
1. Hostinger hPanel → **Files** → **File Manager**
2. Open `public_html` (or your domain folder)
3. Upload **everything inside** `hostinger-static/`
4. Make sure `index.html` is in `public_html`

Or use FTP:
- Host / username / password from **FTP Accounts**
- Upload `hostinger-static/*` → `public_html/`

### 3. Point the domain
Attach your domain in hPanel and wait for DNS if needed.

---

## After go-live checklist
- [ ] Home page loads with blockchain video
- [ ] Careers roles open
- [ ] Apply form submits (Node) or opens mail draft (static)
- [ ] Contact email works
- [ ] SSL is enabled in Hostinger (HTTPS)

## If deployment fails
1. Open **View details** / expand **Build logs**
2. Confirm settings:
   - Framework: Next.js
   - Branch: `main`
   - Node: 20.x or 22.x
   - Root directory: `./`
   - Build command: `npm run build` (or default Next.js)
   - Start command: `npm run start` (or default Next.js)
3. Redeploy after pulling the latest `main` commit
4. Paste the red error lines here if it still fails

## Support emails
- General: `hello@coreledger-innovations.com`
- Careers: `career@coreledger-innovations.com`
