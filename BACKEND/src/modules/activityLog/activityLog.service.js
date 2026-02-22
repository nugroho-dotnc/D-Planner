'use strict';

const prisma = require('../../config/prisma');

const list = async (userId, filters = {}) => {
  const where = { userId };
  if (filters.activityId) where.activityId = filters.activityId;

  return prisma.activityLog.findMany({
    where,
    orderBy: { timestamp: 'desc' },
    include: {
      activity: { select: { id: true, title: true, type: true } },
    },
  });
};

module.exports = { list };
