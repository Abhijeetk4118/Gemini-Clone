# 🚀 Deployment Guide

## Backend Deployment (Render)

### 1. **Create Render Account**
- Go to [render.com](https://render.com)
- Sign up with GitHub

### 2. **Deploy Backend**
1. **Connect Repository:**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select the repository

2. **Configure Service:**
   - **Name:** `gemini-chatbot-backend`
   - **Environment:** `Node`
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm run start:prod`
   - **Root Directory:** `backend`

3. **Environment Variables:**
   - Add `GEMINI_API_KEY` with your API key
   - Add `NODE_ENV` = `production`
   - Add `PORT` = `10000` (Render's default)

4. **Deploy:**
   - Click "Create Web Service"
   - Wait for deployment to complete
   - Note your backend URL (e.g., `https://your-app.onrender.com`)

## Frontend Deployment (Vercel)

### 1. **Create Vercel Account**
- Go to [vercel.com](https://vercel.com)
- Sign up with GitHub

### 2. **Deploy Frontend**
1. **Import Project:**
   - Click "New Project"
   - Import your GitHub repository
   - Set **Root Directory** to `frontend`

2. **Configure Build:**
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

3. **Environment Variables:**
   - Add `VITE_API_URL` = your Render backend URL
   - Example: `https://your-app.onrender.com`

4. **Deploy:**
   - Click "Deploy"
   - Wait for deployment to complete
   - Your frontend will be available at `https://your-app.vercel.app`

## 🔧 **Environment Variables**

### Backend (Render)
```env
GEMINI_API_KEY=your_gemini_api_key_here
NODE_ENV=production
PORT=10000
```

### Frontend (Vercel)
```env
VITE_API_URL=https://your-backend-url.onrender.com
```

## 📝 **Deployment Checklist**

### Backend (Render)
- [ ] Repository connected to Render
- [ ] Build command: `npm install && npm run build`
- [ ] Start command: `npm run start:prod`
- [ ] Root directory: `backend`
- [ ] Environment variables set
- [ ] Deployment successful
- [ ] Backend URL noted

### Frontend (Vercel)
- [ ] Repository connected to Vercel
- [ ] Root directory: `frontend`
- [ ] Framework: Vite
- [ ] Build command: `npm run build`
- [ ] Output directory: `dist`
- [ ] Environment variable `VITE_API_URL` set to backend URL
- [ ] Deployment successful
- [ ] Frontend URL noted

## 🧪 **Testing Deployment**

1. **Test Backend:**
   ```bash
   curl -X POST https://your-backend.onrender.com/chat \
     -H "Content-Type: application/json" \
     -d '{"prompt":"Hello"}'
   ```

2. **Test Frontend:**
   - Open your Vercel URL
   - Try sending a message
   - Check browser console for errors

## 🐛 **Troubleshooting**

### Common Issues:

1. **CORS Errors:**
   - Make sure backend CORS includes your Vercel domain
   - Check environment variables

2. **Build Failures:**
   - Check build logs in Render/Vercel
   - Ensure all dependencies are in package.json

3. **API Connection:**
   - Verify `VITE_API_URL` is correct
   - Check backend is running and accessible

4. **Environment Variables:**
   - Double-check all variables are set correctly
   - Restart deployments after changing variables

## 🔄 **Updates**

To update your deployment:
1. Push changes to GitHub
2. Render/Vercel will automatically redeploy
3. Check deployment logs for any issues

## 📞 **Support**

- **Render:** [render.com/docs](https://render.com/docs)
- **Vercel:** [vercel.com/docs](https://vercel.com/docs)
- **GitHub:** Your repository issues 