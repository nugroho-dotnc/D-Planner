'use strict';

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const authRoutes = require('./modules/auth/auth.routes');
const activityRoutes = require('./modules/activity/activity.routes');
const noteRoutes = require('./modules/note/note.routes');
const activityLogRoutes = require('./modules/activityLog/activityLog.routes');
const aiRoutes = require('./modules/ai/ai.routes');
const { errorHandler } = require('./middlewares/error.middleware');

const app = express();

// ─── Security & Logging ──────────────────────────────────────────
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(morgan('dev'));
app.use(express.json());

// ─── Health Check ─────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'API is running' });
});

// ─── Routes ───────────────────────────────────────────────────────
app.use('/api/auth', authRoutes);
app.use('/api/activities', activityRoutes);
app.use('/api/notes', noteRoutes);
app.use('/api/activity-logs', activityLogRoutes);
app.use('/api/ai', aiRoutes);

// ─── 404 Handler ──────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: { code: 'NOT_FOUND', message: `Route ${req.method} ${req.path} not found` },
  });
});

// ─── Centralized Error Handler ────────────────────────────────────
app.use(errorHandler);

module.exports = app;
