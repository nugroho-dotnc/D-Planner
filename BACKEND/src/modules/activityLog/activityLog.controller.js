'use strict';

const activityLogService = require('./activityLog.service');
const { sendSuccess } = require('../../utils/response');

const list = async (req, res, next) => {
  try {
    const { activityId } = req.query;
    const data = await activityLogService.list(req.user.id, { activityId });
    return sendSuccess(res, data);
  } catch (err) {
    next(err);
  }
};

module.exports = { list };
