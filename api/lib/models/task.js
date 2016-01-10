"use strict";

let tasks = [
    {
        'changelist': 432461,
        'owner': 'samy',
        'startedAt': '2014-04-18T10:53:00.000Z',
        'state': 'Rejected',
        'metrics': {
            test: 64,
            maintainability: 53,
            security: 64,
            workmanship: 72,
            state: 'Rejected'
        },
        'buid': {
            debug: '',
            release: '',
            startedAt: '2014-04-18T10:53:00.000Z',
            endedAt:'2014-04-18T11:43:00.000Z',
            state: 'Complete'
        },
        'unitTest': {
            passed: 142,
            skiped: 10,
            codeCovered: 0.76,
            state: 'Complete'
        },
        'funcionalTest': {
            passed: 4321,
            skiped: 2145,
            codeCovered: 0.23,
            state: 'Complete'
        },
        'result': {
            status: "rejected",
            reason: 'Metrics Reduction'
        }
    },
    {
        'changelist': 432462,
        'owner': 'samy',
        'startedAt': '2014-04-18T10:53:00.000Z',
        'state': 'Rejected',
        'selected': true,
        'metrics': {
            test: 64,
            maintainability: 53,
            security: 64,
            workmanship: 72,
            state: 'Rejected'
        },
        'buid': {
            debug: '',
            release: '',
            startedAt: '2014-04-18T10:53:00.000Z',
            endedAt:'2014-04-18T11:43:00.000Z',
            state: 'Complete'
        },
        'unitTest': {
            passed: 142,
            skiped: 10,
            codeCovered: 0.76,
            state: 'Complete'
        },
        'funcionalTest': {
            passed: 4321,
            skiped: 2145,
            codeCovered: 0.23,
            state: 'Complete'
        },
        'result': {
            status: "rejected",
            reason: 'Metrics Reduction'
        }
    }
];

let Task = {

  find: function (callback) {
    callback(null, tasks.slice(0, 100));
  }

};

module.exports = Task;
