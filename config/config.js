var config = {
    "development": {
        "dialect": "postgres",
        "url": "postgres://agmfopzvgqmqcr:hcZM_giWimnCiYodPPmucyu9qT@ec2-174-129-37-54.compute-1.amazonaws.com:5432/da98j3iuovg4cr",
        "secret": 'somethingsomethingdarkside',
        "expiration": 600,
        "saltRounds": 10,
        "redis": "redis://h:prjd1ak1553m7deh178pph3gsf@ec2-54-227-252-91.compute-1.amazonaws.com:13609"
    },
    "test": {
        "dialect": "postgres",
        "url": "postgres://agmfopzvgqmqcr:hcZM_giWimnCiYodPPmucyu9qT@ec2-174-129-37-54.compute-1.amazonaws.com:5432/da98j3iuovg4cr",
        "secret": 'somethingsomethingdarkside',
        "expiration": 600,
        "saltRounds": 10,
        "redis": "redis://h:prjd1ak1553m7deh178pph3gsf@ec2-54-227-252-91.compute-1.amazonaws.com:13609"
    },
    "production": {
        "dialect": "postgres",
        "url": "postgres://agmfopzvgqmqcr:hcZM_giWimnCiYodPPmucyu9qT@ec2-174-129-37-54.compute-1.amazonaws.com:5432/da98j3iuovg4cr",
        "secret": 'somethingsomethingdarkside',
        "expiration": 600,
        "saltRounds": 10,
        "redis": "redis://h:prjd1ak1553m7deh178pph3gsf@ec2-54-227-252-91.compute-1.amazonaws.com:13609"
    }
};

module.exports = config;
