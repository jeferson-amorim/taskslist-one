"use strict";

let tasks = [
    {
        'changelist': 432464,
        'owner': 'Tenrox_R1_1235',
        'startedAt': '',
        'state': 'pending',
        'type': 'build',
        'metrics': {
            state: 'pending'
        },
        'buid': {
            state: 'pending'
        },
        'unitTest': {
            state: 'pending'
        },
        'funcionalTest': {
            state: 'pending'
        },
        'result': {
            state: 'pending'
        }
    },
    {
        'changelist': 432463,
        'owner': 'jtuck',
        'startedAt': '2014-04-18T12:12:00.000Z',
        'state': 'running',
        'type': 'firewall',
        'metrics': {
            state: 'running',
            progress: 60
        },
        'buid': {
            state: 'pending'
        },
        'unitTest': {
            state: 'pending'
        },
        'funcionalTest': {
            state: 'pending'
        },
        'result': {
            state: 'pending'
        }
    },
    {
        'changelist': 432462,
        'owner': 'samy',
        'startedAt': '2014-04-18T10:53:00.000Z',
        'state': 'rejected',
        'type': 'firewall',
        'metrics': {
            test: 64,
            maintainability: 23,
            security: 64,
            workmanship: 72,
            state: 'rejected'
        },
        'buid': {
            debug: '',
            release: '',
            startedAt: '2014-04-18T10:53:00.000Z',
            endedAt:'2014-04-18T11:43:00.000Z',
            state: 'complete'
        },
        'unitTest': {
            passed: 142,
            skiped: 10,
            codeCovered: 0.76,
            state: 'complete'
        },
        'funcionalTest': {
            passed: 4321,
            skiped: 2145,
            codeCovered: 0.23,
            state: 'complete'
        },
        'result': {
            state: "rejected",
            message: 'Metrics Reduction'
        }
    },
    {
        'changelist': 432461,
        'owner': 'samy',
        'startedAt': '2014-04-18T10:53:00.000Z',
        'state': 'accepted',
        'type': 'firewall',
        'metrics': {
            test: 64,
            maintainability: 53,
            security: 64,
            workmanship: 72,
            state: 'complete'
        },
        'buid': {
            debug: '',
            release: '',
            startedAt: '2014-04-18T10:53:00.000Z',
            endedAt:'2014-04-18T11:43:00.000Z',
            state: 'complete'
        },
        'unitTest': {
            passed: 142,
            skiped: 10,
            codeCovered: 0.76,
            state: 'complete'
        },
        'funcionalTest': {
            passed: 4321,
            skiped: 2145,
            codeCovered: 0.23,
            state: 'complete'
        },
        'result': {
            state: "accepted",
            message: 'Auto-Merged'
        }
    },
    {
        'changelist': 432460,
        'owner': 'Tenrox_R1_1234',
        'startedAt': '2014-04-18T10:53:00.000Z',
        'state': 'complete',
        'type': 'build',
        'metrics': {
            test: 64,
            maintainability: 53,
            security: 64,
            workmanship: 72,
            state: 'complete'
        },
        'buid': {
            debug: '',
            release: '',
            startedAt: '2014-04-18T10:53:00.000Z',
            endedAt:'2014-04-18T11:43:00.000Z',
            state: 'complete'
        },
        'unitTest': {
            passed: 142,
            skiped: 10,
            codeCovered: 0.76,
            state: 'complete'
        },
        'funcionalTest': {
            passed: 4321,
            skiped: 2145,
            codeCovered: 0.23,
            state: 'complete'
        },
        'result': {
            state: "complete",
            message: 'Complete'
        }
    }
];

let Task = {

  find: function (callback) {
    callback(null, tasks.slice(0, 100));
  }

};

module.exports = Task;
