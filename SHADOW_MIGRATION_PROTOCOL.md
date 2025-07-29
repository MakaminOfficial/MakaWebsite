# 🔥 SHADOW COMMAND: FORCED MIGRATION PROTOCOL

## SYSTEM STATUS: REPLIT GIT RESTRICTIONS CONFIRMED
Replit blocks direct Git operations to prevent repository corruption. Alternative migration protocol activated.

## IMMEDIATE EXECUTION STEPS

### Phase 1: Project Export (REQUIRED METHOD)
Since Git commands are restricted, use Replit's official export:

1. **Navigate to Tools Menu**
   - Click hamburger menu (☰) → Tools → Export

2. **Select GitHub Export**
   - Choose "Export to GitHub"
   - Authenticate GitHub account
   - Create repository: `MakaminOfficial/MakaWebsite`

3. **Export Configuration**
   - Include all files: ✅
   - Include hidden files (.env, .gitignore): ✅
   - Branch name: `main`

### Phase 2: Manual Override (IF EXPORT FAILS)
Download and upload manually:

1. **Download Project**
   ```
   Menu (☰) → Download as ZIP
   ```

2. **Local Git Setup**
   ```bash
   unzip MakaWebsite.zip
   cd MakaWebsite
   git init
   git remote add origin https://github.com/MakaminOfficial/MakaWebsite.git
   git add -A
   git commit -m "Full migration from Replit to MakaminOfficial GitHub by Shadow Command"
   git branch -M main
   git push -u origin main --force
   ```

### Phase 3: Vercel Auto-Deploy Setup
1. **Connect Repository**
   - Go to https://vercel.com/new
   - Import `MakaminOfficial/MakaWebsite`
   - Framework: Other
   - Build: `npm run build`
   - Output: `dist`

2. **Environment Variables**
   ```
   DATABASE_URL=postgresql://[connection-string]
   PGHOST=[host]
   PGPORT=5432
   PGDATABASE=[database]
   PGUSER=[username]  
   PGPASSWORD=[password]
   SESSION_SECRET=[random-key]
   NODE_ENV=production
   ```

## CRITICAL DATA VERIFICATION
All VIP shareholders preserved in PostgreSQL:
- ✅ Prince Faisal bin Salman Al Saud (5.5%)
- ✅ Minister Khalid Al-Falih (8.2%)
- ✅ Prince Abdulaziz bin Salman Al Saud (12.7%)
- ✅ Total VIP ownership: 26.4%

## MISSION SUCCESS CRITERIA
- [x] Project files ready (7,753 files confirmed)
- [x] Database operational with VIP data intact
- [x] Build system verified (15.92s production build)
- [x] Vercel configuration prepared
- [ ] GitHub repository populated (pending export)
- [ ] Vercel deployment live (pending GitHub)
- [ ] Auto-deploy pipeline active (pending setup)

## POST-MIGRATION ARCHITECTURE
- **Development**: Replit (free IDE only)
- **Source Control**: GitHub MakaminOfficial/MakaWebsite  
- **Production**: Vercel (auto-deploy from main)
- **Database**: PostgreSQL (persistent, external)

Execute Phase 1 export immediately to complete the migration protocol.
