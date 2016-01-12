"use strict";

let tasks = [
    {
        'changelist': 432463,
        'owner': 'Tenrox_R1_1235',
        'startedAt': '',
        'state': 'pending',
        'type': 'build',
        'metrics': {
            state: 'pending',
            test: 0,
            maintainability: 0,
            security: 0,
            workmanship: 0,
            progress: 0
        },
        'build': {
            state: 'pending',
            debug: '',
            release: '',
            startedAt: '',
            endedAt: '',
            progress: 0
        },
        'unitTest': {
            state: 'pending',
            passed: 0,
            skiped: 0,
            codeCovered: 0,
            progress: 0
        },
        'functionalTest': {
            state: 'pending',
            passed: 0,
            skiped: 0,
            codeCovered: 0,
            progress: 0
        },
        'result': {
            state: 'pending',
            message: ''
        }
    },
    {
        'changelist': 432464,
        'owner': 'jtuck',
        'startedAt': '2014-04-18T12:12:00.000Z',
        'state': 'pending',
        'type': 'firewall',
        'metrics': {
            state: 'pending',
            test: 0,
            maintainability: 0,
            security: 0,
            workmanship: 0,
            progress: 0
        },
        'build': {
            state: 'pending',
            debug: '',
            release: '',
            startedAt: '',
            endedAt: '',
            progress: 0
        },
        'unitTest': {
            state: 'pending',
            passed: 0,
            skiped: 0,
            codeCovered: 0,
            progress: 0
        },
        'functionalTest': {
            state: 'pending',
            passed: 0,
            skiped: 0,
            codeCovered: 0,
            progress: 0
        },
        'result': {
            state: 'pending',
            message: ''
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
        'build': {
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
        'functionalTest': {
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
        'build': {
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
        'functionalTest': {
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
        'build': {
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
        'functionalTest': {
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

let getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

let running = false;

let loader = function(task) {

    let increment = 10;

    if ( task.state === 'pending' && running )
        return;

    task.state = 'running';
    running = true;

    if ( task.metrics.state !== 'complete' ) {

        task.metrics.state = 'running';
        task.metrics.progress += increment;

        if ( task.metrics.progress < 100 )
            return;

        task.metrics = {
            test: getRandomInt(50,95),
            maintainability: getRandomInt(50,95),
            security: getRandomInt(50,95),
            workmanship: getRandomInt(50,95),
            state: 'complete',
            progress: 100
        };

        return;
    }

    if ( task.build.state !== 'complete' ) {

        task.build.state = 'running';
        task.build.progress += increment;
        task.build.startedAt = task.build.startedAt || new Date();

        if ( task.build.progress < 100 )
            return;

        task.build = {
            debug: '',
            release: '',
            endedAt: new Date(),
            state: 'complete',
            progress: 100
        };

        return;
    }

    if ( task.unitTest.state !== 'complete' ) {

        task.unitTest.state = 'running';
        task.unitTest.progress += increment;

        if ( task.unitTest.progress < 100 )
            return;

        task.unitTest = {
            passed: getRandomInt(90,190),
            skiped: getRandomInt(10,30),
            codeCovered: getRandomInt(0,100)/100,
            state: 'complete',
            progress: 100
        };

        return;
    }

    if ( task.functionalTest.state !== 'complete' ) {

        task.functionalTest.state = 'running';
        task.functionalTest.progress += increment;

        if ( task.functionalTest.progress < 100 )
            return;

        task.functionalTest = {
            passed: getRandomInt(4000,8000),
            skiped: getRandomInt(2000,3000),
            codeCovered: getRandomInt(0,100)/100,
            state: 'complete',
            progress: 100
        };

        return;
    }

    task.state = task.type === 'firewall' ? 'accepted' : 'complete';
    task.result = {
        state: "complete",
        message: 'Complete'
    };

    running = false;
};

let Task = {
    find: function (callback) {
        callback(null, tasks.slice(0, 100));
    },

    get: function(id, callback) {
        let task = tasks.find(function(b) {
            return b.changelist == id;
        });

        if ( task.state === 'running' || task.state === 'pending' )
            loader(task);

        callback(null, task);
    }
};

module.exports = Task;
